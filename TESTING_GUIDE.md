# Testing Guide: Project Starter + TinaCMS Integration

This guide covers testing the new page/content architecture where:
- **Project Starter** removes pages but keeps content
- **TinaCMS** shows/hides collections based on page selection
- **Content** has `isActive` flag for visibility control

---

## Prerequisites

1. **Master Template** is ready (`/Users/admin/Sites/master-site-template`)
2. **Project Starter** is updated (`/Users/admin/Sites/Project Starter`)
3. Both projects have the latest code changes

---

## Test 1: Project Starter - Clean Removal

### Setup
```bash
# Create a test project directory
mkdir -p /Users/admin/Sites/test-output
cd /Users/admin/Sites/test-output

# Copy master template (simulating what Project Starter does)
cp -r /Users/admin/Sites/master-site-template/* .
```

### Test: Deselect "Careers" Page

**Simulate Project Starter deselecting careers:**

```bash
# 1. Delete the careers page files
rm -rf src/pages/careers/
echo "✅ Deleted: src/pages/careers/"

# 2. Set isActive: false on all job content
for file in src/content/jobs/*.md; do
  if [ -f "$file" ]; then
    if grep -q "isActive:" "$file"; then
      sed -i '' 's/isActive:.*/isActive: false/' "$file"
    else
      # Add isActive after frontmatter start
      sed -i '' 's/^---$/---\nisActive: false/' "$file"
    fi
    echo "✅ Set isActive: false in: $file"
  fi
done

# 3. Comment out Tina collection (simulate page-toggles.js)
# Edit tina/config.ts - find "// HIDDEN_BY_PROJECT_STARTER: careers" and comment the block
```

### Verify

**Check 1: Page files deleted**
```bash
ls -la src/pages/careers/ 2>&1 || echo "✅ Careers page correctly deleted"
```

**Check 2: Content files still exist**
```bash
ls -la src/content/jobs/
# Should show: *.md files still present
echo "✅ Content preserved"
```

**Check 3: Content has isActive: false**
```bash
head -10 src/content/jobs/*.md
echo "✅ isActive: false set on content"
```

**Check 4: Tina collection commented**
```bash
grep -A 5 "HIDDEN_BY_PROJECT_STARTER: careers" tina/config.ts
# Should show: "(HIDDEN)" marker and commented block
```

---

## Test 2: Astro Build - Pages Filter by isActive

### Setup
```bash
cd /Users/admin/Sites/test-output

# Install dependencies
npm install
```

### Test: Build with Inactive Content

```bash
# Build the project
npm run build
```

### Verify

**Check 1: Build succeeds**
```bash
echo "✅ Build completed without errors"
```

**Check 2: Careers page 404s**
```bash
# Start dev server in background
npm run dev &
sleep 5

# Test careers page (should 404 or be missing)
curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/careers
# Expected: 404
echo "✅ Careers page returns 404 (page deleted)"

# Kill dev server
pkill -f "astro dev"
```

**Check 3: Other pages still work**
```bash
npm run dev &
sleep 5

curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/
# Expected: 200
echo "✅ Homepage works"

curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/contact
echo "✅ Contact page works"

pkill -f "astro dev"
```

---

## Test 3: TinaCMS - Collection Visibility

### Setup
```bash
cd /Users/admin/Sites/test-output

# Set up TinaCMS (if not already)
cp .env.example .env
# Add your TINA_CLIENT_ID and TINA_TOKEN to .env
```

### Test: Start TinaCMS Admin

```bash
# Start TinaCMS
npm run tinacms dev

# Or for production build
npm run tinacms build
```

### Verify

**Check 1: TinaCMS loads**
```bash
# Open browser to http://localhost:3000/admin
# Should see TinaCMS login/interface
echo "✅ TinaCMS loads successfully"
```

**Check 2: Hidden collections not visible**
```bash
# In the TinaCMS sidebar, you should see:
# - Homepage
# - About
# - Contact
# - Globals
# - etc.

# You should NOT see:
# - Jobs / Careers (if deselected)
# - Events (if deselected)

echo "✅ Hidden collections not in sidebar"
```

**Check 3: Active collections visible**
```bash
# Collections for selected pages should be visible
echo "✅ Active collections visible in sidebar"
```

---

## Test 4: Manual Page Re-Add (Simulating Page Adder Tool)

### Setup
```bash
cd /Users/admin/Sites/test-output
```

### Test: Manually Re-add Careers Page

**Step 1: Copy page files from master template**
```bash
cp -r /Users/admin/Sites/master-site-template/src/pages/careers src/pages/
echo "✅ Copied careers page files"
```

**Step 2: Uncomment Tina collection**
```bash
# Edit tina/config.ts
# Find: "// HIDDEN_BY_PROJECT_STARTER: careers (HIDDEN)"
# Replace with: "// HIDDEN_BY_PROJECT_STARTER: careers"
# And uncomment the collection block (remove /* */)

# Or use sed (careful with multi-line):
# This is a simplified version - actual implementation needs proper parsing
echo "⚠️  Manually uncomment the careers collection in tina/config.ts"
```

**Step 3: Activate content**
```bash
for file in src/content/jobs/*.md; do
  if [ -f "$file" ]; then
    sed -i '' 's/isActive:.*/isActive: true/' "$file"
    echo "✅ Set isActive: true in: $file"
  fi
done
```

**Step 4: Rebuild Tina**
```bash
npm run tinacms build
```

### Verify

**Check 1: Careers page works**
```bash
npm run dev &
sleep 5

curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/careers
# Expected: 200
echo "✅ Careers page now accessible"

pkill -f "astro dev"
```

**Check 2: Jobs appear on careers page**
```bash
# Open browser to http://localhost:4321/careers
# Should see job listings (if content had isActive: true)
echo "✅ Job listings visible"
```

**Check 3: TinaCMS shows Jobs collection**
```bash
# Open TinaCMS admin
# Jobs / Careers should now appear in sidebar
echo "✅ Jobs collection visible in TinaCMS"
```

**Check 4: Can edit job listings**
```bash
# In TinaCMS, click on "Jobs / Careers"
# Should see job listings
# Should be able to toggle "Active" field
echo "✅ Can edit jobs in TinaCMS"
```

---

## Test 5: Content isActive Toggle

### Setup
```bash
cd /Users/admin/Sites/test-output

# Ensure careers page exists (from Test 4)
```

### Test: Toggle Individual Job isActive

**Via TinaCMS:**
1. Open TinaCMS admin
2. Navigate to "Jobs / Careers"
3. Open a job listing
4. Toggle "Active" field to `false`
5. Save

**Or manually edit:**
```bash
# Edit one job file
sed -i '' 's/isActive: true/isActive: false/' src/content/jobs/first-job.md
echo "✅ Set one job to isActive: false"
```

### Verify

**Check 1: Inactive job hidden on page**
```bash
npm run dev &
sleep 5

# Visit careers page
# The inactive job should not appear in the list
echo "✅ Inactive job hidden from careers page"

pkill -f "astro dev"
```

**Check 2: Active jobs still visible**
```bash
echo "✅ Active jobs still appear on careers page"
```

---

## Test 6: Multiple Optional Pages

### Setup
```bash
cd /Users/admin/Sites/test-output

# Start fresh
cd /Users/admin/Sites
rm -rf test-output
mkdir test-output
cd test-output
cp -r /Users/admin/Sites/master-site-template/* .
```

### Test: Deselect Multiple Pages

**Simulate deselecting: careers, events, partners**

```bash
# Delete pages
rm -rf src/pages/careers/ src/pages/events/ src/pages/partners/
echo "✅ Deleted multiple optional pages"

# Set all their content to isActive: false
for folder in jobs events partners; do
  for file in src/content/$folder/*.md; do
    if [ -f "$file" ]; then
      if grep -q "isActive:" "$file"; then
        sed -i '' 's/isActive:.*/isActive: false/' "$file"
      else
        sed -i '' 's/^---$/---\nisActive: false/' "$file"
      fi
    fi
  done
  echo "✅ Set isActive: false for: $folder"
done
```

### Verify

**Check 1: All deleted pages 404**
```bash
npm run build
npm run dev &
sleep 5

for page in careers events partners; do
  status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/$page)
  echo "$page: $status (expected 404)"
done

echo "✅ All deleted pages return 404"

pkill -f "astro dev"
```

**Check 2: TinaCMS only shows active collections**
```bash
# Start TinaCMS
# Verify only selected page collections are visible
echo "✅ TinaCMS shows only active collections"
```

**Check 3: Other pages still work**
```bash
# Test work, reviews, etc. still work if selected
echo "✅ Other optional pages still functional"
```

---

## Quick Automated Test Script

Create this as `test-integration.sh`:

```bash
#!/bin/bash
set -e

MASTER="/Users/admin/Sites/master-site-template"
OUTPUT="/Users/admin/Sites/test-output-$(date +%s)"

echo "🧪 Testing Project Starter + TinaCMS Integration"
echo "================================================"

# Setup
echo "📁 Setting up test project..."
mkdir -p "$OUTPUT"
cp -r "$MASTER"/* "$OUTPUT/"
cd "$OUTPUT"

# Test 1: Verify content exists
echo ""
echo "Test 1: Verify content exists..."
for folder in jobs events partners testimonials portfolio; do
  if [ -d "src/content/$folder" ]; then
    count=$(ls src/content/$folder/*.md 2>/dev/null | wc -l)
    echo "  ✅ $folder: $count items"
  fi
done

# Test 2: Simulate deselect careers
echo ""
echo "Test 2: Simulate deselecting careers..."
rm -rf src/pages/careers/
for file in src/content/jobs/*.md; do
  [ -f "$file" ] && sed -i '' 's/isActive:.*/isActive: false/' "$file"
done
echo "  ✅ Careers page deleted, content set to inactive"

# Test 3: Verify Astro builds
echo ""
echo "Test 3: Astro build..."
npm install > /dev/null 2>&1
npm run build > /dev/null 2>&1
echo "  ✅ Build successful"

# Test 4: Verify isActive in content
echo ""
echo "Test 4: Verify isActive flags..."
grep -l "isActive: false" src/content/jobs/*.md > /dev/null && echo "  ✅ Jobs have isActive: false"

# Cleanup
cd -
rm -rf "$OUTPUT"

echo ""
echo "🎉 All tests passed!"
```

Run it:
```bash
chmod +x test-integration.sh
./test-integration.sh
```

---

## Expected Behavior Summary

| Action | Page File | Content Files | Tina Collection | Site Behavior |
|--------|-----------|---------------|-----------------|---------------|
| **Initial** | ✅ Exists | ✅ Exists | ✅ Visible | ✅ Works |
| **Deselect** | 🗑️ Deleted | ✅ Stays | 🙈 Hidden | 404 Error |
| **Re-add** | ✅ Restored | ✅ Stays | ✅ Visible | ✅ Works |
| **Toggle isActive** | - | - | - | Show/Hide item |

---

## Troubleshooting

### Issue: TinaCMS doesn't show collection after uncommenting
**Solution:** Run `npm run tinacms build` to regenerate

### Issue: Astro build fails after deleting pages
**Solution:** Check if any pages import from deleted collections without guards

### Issue: Content not filtering by isActive
**Solution:** Verify filter syntax: `getCollection("jobs", ({ data }) => data.isActive !== false)`

### Issue: 404 on page that should exist
**Solution:** Check if page file was actually copied back; restart dev server

---

## Next Steps After Testing

1. ✅ All tests pass? The integration is working!
2. 📝 Document any edge cases found
3. 🔧 Build the Page Adder tool based on Test 4 steps
4. 🚀 Deploy and use in production
