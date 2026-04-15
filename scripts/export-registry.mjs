#!/usr/bin/env node
/**
 * Export Pattern Registry → JSON
 *
 * Reads src/data/pattern-registry.ts (TypeScript, via Node --experimental-strip-types)
 * and emits two copies of the registry as JSON:
 *   - public/pattern-registry.json       (served by Astro dev/build at /pattern-registry.json)
 *   - src/data/pattern-registry.snapshot.json  (committed to git for tools that don't run the dev server)
 *
 * Downstream consumers: Project Starter (form), pipeline (agent prompts).
 *
 * Usage:
 *   pnpm tsx scripts/export-registry.mjs
 */

import { writeFile, mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const registryUrl = pathToFileURL(resolve(root, 'src/data/pattern-registry.ts')).href;
const { PATTERN_REGISTRY } = await import(registryUrl);

if (!Array.isArray(PATTERN_REGISTRY)) {
  console.error('❌ PATTERN_REGISTRY is not an array');
  process.exit(1);
}

const sections = PATTERN_REGISTRY.map((section) => ({
  ...section,
  variants: section.variants.map((variant) => ({
    ...variant,
    preview: variant.preview || `/previews/${section.slug}/${variant.key}.png`,
  })),
}));

const output = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  sections,
};

const json = JSON.stringify(output, null, 2);

const publicPath = resolve(root, 'public/pattern-registry.json');
const snapshotPath = resolve(root, 'src/data/pattern-registry.snapshot.json');

await mkdir(dirname(publicPath), { recursive: true });
await mkdir(dirname(snapshotPath), { recursive: true });

await Promise.all([
  writeFile(publicPath, json, 'utf8'),
  writeFile(snapshotPath, json, 'utf8'),
]);

const variantCount = sections.reduce((n, s) => n + s.variants.length, 0);
console.log(`✅ Exported ${sections.length} sections, ${variantCount} variants`);
console.log(`   → public/pattern-registry.json`);
console.log(`   → src/data/pattern-registry.snapshot.json`);
