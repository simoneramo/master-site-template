#!/usr/bin/env node
/**
 * Capture Preview Thumbnails for Component Library
 * 
 * Usage:
 *   pnpm capture-previews
 * 
 * This script:
 * 1. Starts the dev server (or uses an existing one)
 * 2. Uses Playwright to navigate to each component section
 * 3. Captures screenshots of each variant
 * 4. Saves them to public/previews/{section}/{variant}.webp
 */

import { chromium } from 'playwright';
import { execSync } from 'child_process';
import { mkdir } from 'fs/promises';
import { dirname } from 'path';

// Import the pattern registry (we'll read it dynamically)
const PATTERN_REGISTRY = [
  { slug: 'heroes', label: 'Hero' },
  { slug: 'headers', label: 'Navigation / Header' },
  { slug: 'footers', label: 'Footer' },
  { slug: 'ctas', label: 'Final CTA' },
  { slug: 'faqs', label: 'FAQ' },
  { slug: 'trust-bars', label: 'Trust Bar' },
  { slug: 'pricing', label: 'Pricing' },
  { slug: 'services', label: 'Services Grid' },
  { slug: 'testimonials', label: 'Testimonials / Reviews' },
  { slug: 'features', label: 'Features Grid' },
  { slug: 'benefits', label: 'Benefits' },
  { slug: 'processes', label: 'Process / How it Works' },
  { slug: 'portfolios', label: 'Portfolio / Gallery' },
  { slug: 'problems', label: 'Problem / Agitation' },
  { slug: 'solutions', label: 'Solution' },
  { slug: 'videos', label: 'Video / Demo' },
  { slug: 'newsletters', label: 'Newsletter Signup' },
];

const BASE_URL = 'http://localhost:4321/component-library';
const PREVIEW_DIR = 'public/previews';

// Viewport sizes for different device previews
const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  tablet: { width: 768, height: 600 },
  mobile: { width: 375, height: 600 },
};

async function ensureDir(path) {
  await mkdir(path, { recursive: true });
}

async function captureVariant(page, section, variant, viewportName = 'desktop') {
  const url = `${BASE_URL}/${section}`;
  
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    
    // Wait for the variant to be visible
    const variantSelector = `[data-variant="${variant}"], #variant-${variant}`;
    const element = await page.$(variantSelector);
    
    if (!element) {
      console.warn(`  ⚠️  Variant not found: ${section}/${variant}`);
      return null;
    }
    
    // Scroll to element and wait a moment for any animations
    await element.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    // Capture screenshot
    const filename = `${variant}-${viewportName}.webp`;
    const filepath = `${PREVIEW_DIR}/${section}/${filename}`;
    
    await ensureDir(dirname(filepath));
    
    await element.screenshot({
      path: filepath,
      type: 'webp',
      quality: 80,
    });
    
    console.log(`  ✅ ${section}/${variantKey}.png`);
    return filepath;
    
  } catch (error) {
    console.error(`  ❌ Failed: ${section}/${variant}`, error.message);
    return null;
  }
}

async function captureSection(page, sectionSlug) {
  console.log(`\n📸 Capturing: ${sectionSlug}`);
  
  const url = `${BASE_URL}/${sectionSlug}`;
  
  try {
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Find all variants on the page
    const variantElements = await page.$$('[data-variant]');
    
    if (variantElements.length === 0) {
      console.warn(`  ⚠️  No variants found for ${sectionSlug}`);
      return [];
    }
    
    const captures = [];
    
    for (const element of variantElements) {
      const variantKey = await element.getAttribute('data-variant');
      
      // Scroll to element
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      
      // Capture desktop version (primary)
      const filepath = `${PREVIEW_DIR}/${sectionSlug}/${variantKey}.png`;
      await ensureDir(dirname(filepath));
      
      await element.screenshot({
        path: filepath,
        type: 'png',
      });
      
      console.log(`  ✅ ${sectionSlug}/${variantKey}.png`);
      captures.push(filepath);
    }
    
    return captures;
    
  } catch (error) {
    console.error(`  ❌ Failed to capture ${sectionSlug}:`, error.message);
    return [];
  }
}

async function main() {
  console.log('🎬 Component Preview Capture Script\n');
  
  // Check if dev server is running
  try {
    await fetch(BASE_URL);
    console.log('✓ Dev server detected at localhost:4321\n');
  } catch {
    console.error('❌ Dev server not running. Please start it first:');
    console.error('   pnpm dev');
    process.exit(1);
  }
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORTS.desktop,
    deviceScaleFactor: 1.5, // Higher resolution for crisp previews
  });
  const page = await context.newPage();
  
  const allCaptures = [];
  
  try {
    for (const section of PATTERN_REGISTRY) {
      const captures = await captureSection(page, section.slug);
      allCaptures.push(...captures);
    }
    
    console.log(`\n✨ Complete! Captured ${allCaptures.length} previews.`);
    console.log(`📁 Saved to: ${PREVIEW_DIR}/`);
    
  } catch (error) {
    console.error('\n💥 Script failed:', error);
    process.exit(1);
    
  } finally {
    await browser.close();
  }
}

main();
