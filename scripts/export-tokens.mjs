#!/usr/bin/env node
/**
 * Export Design Tokens → JSON
 *
 * Parses the `@theme { ... }` block in src/styles/global.css and emits the
 * design tokens (colours, radii, shadows, fonts) as JSON. Also captures
 * `.dark { ... }` overrides for dark-mode tokens.
 *
 * Output locations:
 *   - public/tokens.json       (served at /tokens.json)
 *   - src/data/tokens.snapshot.json  (committed)
 *
 * Downstream consumers: Project Starter token-picker UI; scaffolder token-patcher.
 *
 * Usage:
 *   pnpm tsx scripts/export-tokens.mjs
 *   (Works with plain node too — no TS imports needed.)
 */

import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const cssPath = resolve(root, 'src/styles/global.css');

const css = await readFile(cssPath, 'utf8');

/**
 * Extract the body of a top-level rule whose selector matches `pattern`.
 * `pattern` must be a regex with the `g` flag; the match must be the selector
 * immediately preceding the opening `{` (trailing whitespace allowed).
 */
function extractBlock(source, pattern) {
  pattern.lastIndex = 0;
  let m;
  while ((m = pattern.exec(source)) !== null) {
    const afterSelector = m.index + m[0].length;
    // Only accept if the next non-whitespace character is `{` — rules out matches
    // inside other selectors (e.g. `.dark` appearing in a pseudo-class list).
    let j = afterSelector;
    while (j < source.length && /\s/.test(source[j])) j++;
    if (source[j] !== '{') continue;
    const braceStart = j;
    let depth = 1;
    let i = braceStart + 1;
    while (i < source.length && depth > 0) {
      if (source[i] === '{') depth++;
      else if (source[i] === '}') depth--;
      if (depth === 0) return source.slice(braceStart + 1, i);
      i++;
    }
  }
  return null;
}

/** Parse `--name: value;` declarations from a CSS block, ignoring nested @rules. */
function parseCustomProps(block) {
  if (!block) return {};
  // Strip nested @-rules (e.g. @keyframes) so their internals don't leak into our parse.
  let depth = 0;
  let stripped = '';
  for (let i = 0; i < block.length; i++) {
    const ch = block[i];
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; continue; }
    if (depth === 0) stripped += ch;
  }
  const props = {};
  const re = /(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(stripped)) !== null) {
    props[m[1]] = m[2].trim();
  }
  return props;
}

/** Group flat custom-prop map by token category (colors, radii, shadows, fonts, animate). */
function groupTokens(props) {
  const groups = { colors: {}, radii: {}, shadows: {}, fonts: {}, animate: {}, other: {} };
  for (const [name, value] of Object.entries(props)) {
    if (name.startsWith('--color-')) groups.colors[name] = value;
    else if (name.startsWith('--radius-')) groups.radii[name] = value;
    else if (name.startsWith('--shadow-')) groups.shadows[name] = value;
    else if (name.startsWith('--font-')) groups.fonts[name] = value;
    else if (name.startsWith('--animate-')) groups.animate[name] = value;
    else groups.other[name] = value;
  }
  return groups;
}

const themeBlock = extractBlock(css, /@theme/g);
const darkBlock = extractBlock(css, /^\.dark\b/gm);

if (!themeBlock) {
  console.error('❌ Could not find @theme { ... } block in global.css');
  process.exit(1);
}

const lightProps = parseCustomProps(themeBlock);
const darkProps = parseCustomProps(darkBlock);

const output = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  sourceFile: 'src/styles/global.css',
  light: groupTokens(lightProps),
  dark: groupTokens(darkProps),
};

const json = JSON.stringify(output, null, 2);

const publicPath = resolve(root, 'public/tokens.json');
const snapshotPath = resolve(root, 'src/data/tokens.snapshot.json');

await mkdir(dirname(publicPath), { recursive: true });
await mkdir(dirname(snapshotPath), { recursive: true });

await Promise.all([
  writeFile(publicPath, json, 'utf8'),
  writeFile(snapshotPath, json, 'utf8'),
]);

const lightCount = Object.keys(lightProps).length;
const darkCount = Object.keys(darkProps).length;
console.log(`✅ Exported ${lightCount} light tokens, ${darkCount} dark overrides`);
console.log(`   → public/tokens.json`);
console.log(`   → src/data/tokens.snapshot.json`);
