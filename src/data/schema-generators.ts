/**
 * Schema Generators — Convert pattern registry field definitions
 * into framework-specific schemas.
 *
 * Generates:
 *   1. Zod schemas (for Astro content.config.ts validation)
 *   2. TinaCMS field configs (for the CMS editor UI)
 *
 * This eliminates the need to hand-write schemas in multiple places.
 * The pattern registry's FieldDef[] is the single source of truth.
 */

import type { FieldDef, FieldType } from './section-fields';

// ═══════════════════════════════════════════════════════════════════════════════
// Zod Schema Generator
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Structural interface for a Zod-like `z` object.
 * We don't import `zod` directly — the caller passes in their `z` instance
 * (from `astro:content` or a standalone `zod` package).
 */
interface ZodLike {
  string: () => any;
  number: () => any;
  boolean: () => any;
  array: (schema: any) => any;
  object: (shape: Record<string, any>) => any;
  literal: (value: any) => any;
  discriminatedUnion: (key: string, schemas: readonly [any, any, ...any[]]) => any;
  any: () => any;
  coerce: { date: () => any };
}

/**
 * Convert a FieldDef[] → Zod schema object.
 *
 * Usage in content.config.ts:
 * ```ts
 * import { z } from 'astro:content';
 * import { toZodSchema } from '../data/schema-generators';
 * import { SECTION_FIELDS } from '../data/section-fields';
 *
 * const heroSchema = toZodSchema(z, SECTION_FIELDS.heroes);
 * ```
 */
export function toZodSchema(z: ZodLike, fields: FieldDef[]): ReturnType<ZodLike['object']> {
  const shape: Record<string, any> = {};

  for (const field of fields) {
    let schema: any;

    if (field.fields && field.fields.length > 0) {
      // Nested object
      schema = toZodSchema(z, field.fields);
    } else {
      // Primitive type
      schema = fieldTypeToZod(z, field.type);
    }

    // Wrap in array if list
    if (field.list) {
      schema = z.array(schema);
    }

    // Make optional unless required
    if (!field.required) {
      schema = schema.optional();
    }

    shape[field.name] = schema;
  }

  return z.object(shape);
}

/** Map FieldType → base Zod type */
function fieldTypeToZod(z: ZodLike, type: FieldType): any {
  switch (type) {
    case 'string':    return z.string();
    case 'text':      return z.string();
    case 'url':       return z.string();
    case 'image':     return z.string();
    case 'rich-text': return z.string();
    case 'number':    return z.number();
    case 'boolean':   return z.boolean();
    case 'date':      return z.coerce.date();
    default:          return z.string();
  }
}

/**
 * Generate a Zod discriminated union schema for flexible page blocks.
 *
 * Each section in the registry becomes a block type with:
 *   - _template: literal slug (discriminator)
 *   - variant: optional string (which visual variant to render)
 *   - ...section fields
 *
 * Usage:
 * ```ts
 * const blockSchema = toZodBlockUnion(z, PATTERN_REGISTRY);
 * ```
 */
export function toZodBlockUnion(
  z: ZodLike,
  sections: { slug: string; fields: FieldDef[] }[],
): any {
  const schemas = sections.map(section => {
    const baseSchema = toZodSchema(z, section.fields);
    return baseSchema.extend({
      _template: z.literal(section.slug),
      variant: z.string().optional(),
    });
  });

  // z.discriminatedUnion requires at least 2 options
  if (schemas.length < 2) {
    return z.array(schemas[0] || z.any());
  }

  return z.discriminatedUnion('_template', schemas as [any, any, ...any[]]);
}


// ═══════════════════════════════════════════════════════════════════════════════
// TinaCMS Field Generator
// ═══════════════════════════════════════════════════════════════════════════════

interface TinaField {
  type: string;
  name: string;
  label: string;
  description?: string;
  required?: boolean;
  list?: boolean;
  fields?: TinaField[];
  ui?: Record<string, any>;
  options?: { label: string; value: string }[];
}

/**
 * Convert FieldDef[] → TinaCMS field config array.
 *
 * Usage in tina/config.ts:
 * ```ts
 * import { toTinaFields } from '../src/data/schema-generators';
 * import { SECTION_FIELDS } from '../src/data/section-fields';
 *
 * const heroTinaFields = toTinaFields(SECTION_FIELDS.heroes);
 * ```
 */
export function toTinaFields(fields: FieldDef[]): TinaField[] {
  return fields.map(fieldDefToTina);
}

/** Convert a single FieldDef → TinaCMS field config */
function fieldDefToTina(field: FieldDef): TinaField {
  const tinaField: TinaField = {
    type: field.fields ? 'object' : fieldTypeToTina(field.type),
    name: field.name,
    label: field.label,
  };

  if (field.description) {
    tinaField.description = field.description;
  }

  if (field.required) {
    tinaField.required = true;
  }

  if (field.list) {
    tinaField.list = true;
  }

  // Nested object fields
  if (field.fields && field.fields.length > 0) {
    tinaField.fields = field.fields.map(fieldDefToTina);
  }

  // UI hints
  if (field.type === 'text') {
    tinaField.ui = { component: 'textarea' };
  }

  if (field.type === 'rich-text') {
    tinaField.type = 'rich-text';
  }

  return tinaField;
}

/** Map FieldType → TinaCMS type string */
function fieldTypeToTina(type: FieldType): string {
  switch (type) {
    case 'string':    return 'string';
    case 'text':      return 'string';     // + ui.component: 'textarea'
    case 'url':       return 'string';
    case 'image':     return 'image';
    case 'rich-text': return 'rich-text';
    case 'number':    return 'number';
    case 'boolean':   return 'boolean';
    case 'date':      return 'datetime';
    default:          return 'string';
  }
}

/**
 * Generate TinaCMS block templates for flexible pages.
 *
 * Each section becomes a block template with:
 *   - A variant selector dropdown (populated from registry variants)
 *   - All section fields
 *
 * Usage in tina/config.ts:
 * ```ts
 * import { toTinaBlockTemplates } from '../src/data/schema-generators';
 * import { PATTERN_REGISTRY } from '../src/data/pattern-registry';
 *
 * // In the flexible page collection:
 * {
 *   type: "object",
 *   name: "blocks",
 *   list: true,
 *   templates: toTinaBlockTemplates(PATTERN_REGISTRY),
 * }
 * ```
 */
export function toTinaBlockTemplates(
  sections: { slug: string; label: string; fields: FieldDef[]; variants: { key: string; label: string; status: string }[] }[],
): any[] {
  return sections.map(section => ({
    name: section.slug,
    label: section.label,
    fields: [
      // Variant picker — shows all ready variants as a dropdown
      {
        type: 'string',
        name: 'variant',
        label: 'Layout Variant',
        description: 'Choose how this section looks',
        options: section.variants
          .filter(v => v.status === 'ready')
          .map(v => ({ label: v.label, value: v.key })),
      },
      // Section content fields
      ...toTinaFields(section.fields),
    ],
  }));
}
