#!/usr/bin/env node
/**
 * Screenshot script for component library variants
 * Starts dev server, takes screenshots of specified sections, stops server
 */

const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Sections and variants to screenshot (as specified by user)
const SECTIONS_TO_SCREENSHOT = [
  {
    slug: 'team',
    label: 'Team',
    variants: ['threeCol', 'featured', 'carousel']
  },
  {
    slug: 'blog', 
    label: 'Blog / Insights',
    variants: ['threeCol', 'featured', 'list', 'minimal', 'magazine']
  },
  {
    slug: 'forms',
    label: 'Forms', 
    variants: ['contact', 'step', 'quote']
  },
  {
    slug: 'stats',
    label: 'Stats',
    variants: ['grid', 'minimal', 'withImage']
  },
  {
    slug: 'banners',
    label: 'Banners',
    variants: ['sticky', 'floating', 'cookie', 'cookieBottom']
  },
  {
    slug: 'content',
    label: 'Content / Prose',
    variants: ['prose', 'split', 'withImage']
  }
];

const OUTPUT_DIR = path.join(__dirname, '..', 'screenshots');
const BASE_URL = 'http://localhost:4321';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function startDevServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting Astro dev server...');
    const proc = spawn('npx', ['astro', 'dev', '--port', '4321'], {
      cwd: path.join(__dirname, '..'),
      stdio: 'pipe'
    });

    let ready = false;
    proc.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('ready') || output.includes('4321')) {
        if (!ready) {
          ready = true;
          console.log('Server ready, waiting 3 seconds for warmup...');
          setTimeout(() => resolve(proc), 3000);
        }
      }
    });

    proc.stderr.on('data', (data) => {
      // Ignore stderr unless server fails
    });

    setTimeout(() => {
      if (!ready) {
        ready = true;
        console.log('Server timeout, assuming ready...');
        resolve(proc);
      }
    }, 10000);

    proc.on('error', reject);
  });
}

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  
  console.log('\n=== Taking Screenshots ===\n');
  
  for (const section of SECTIONS_TO_SCREENSHOT) {
    console.log(`\n📁 ${section.label} (${section.variants.length} variants)`);
    
    const page = await context.newPage();
    const sectionUrl = `${BASE_URL}/component-library/${section.slug}`;
    
    try {
      await page.goto(sectionUrl, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(1000); // Additional wait for rendering
      
      for (const variantKey of section.variants) {
        const filename = `${section.slug}-${variantKey}.png`;
        const filepath = path.join(OUTPUT_DIR, filename);
        
        // Find the variant element
        const variantElement = await page.locator(`[data-variant="${variantKey}"]`).first();
        
        if (await variantElement.isVisible().catch(() => false)) {
          // Take screenshot of just the variant
          await variantElement.screenshot({ path: filepath });
          console.log(`  ✅ ${filename}`);
        } else {
          // Fallback: try scrolling to it and screenshot
          await page.evaluate((key) => {
            const el = document.querySelector(`[data-variant="${key}"]`);
            if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
          }, variantKey);
          await page.waitForTimeout(500);
          
          // Screenshot the full page at scroll position
          await page.screenshot({ path: filepath, fullPage: false });
          console.log(`  ⚠️ ${filename} (scrolled)`);
        }
      }
    } catch (err) {
      console.error(`  ❌ Error with ${section.slug}: ${err.message}`);
    } finally {
      await page.close();
    }
  }
  
  await browser.close();
}

async function main() {
  let server;
  try {
    server = await startDevServer();
    await takeScreenshots();
    console.log(`\n✅ All screenshots saved to: ${OUTPUT_DIR}\n`);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  } finally {
    if (server) {
      console.log('Stopping dev server...');
      server.kill();
    }
  }
}

main();
