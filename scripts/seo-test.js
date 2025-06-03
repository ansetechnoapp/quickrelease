/**
 * SEO Testing Script
 * Run this script to test SEO implementation
 * Usage: node scripts/seo-test.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 SEO Implementation Test\n');

// Test 1: Check if robots.txt exists
console.log('1. Testing robots.txt...');
const robotsPath = path.join(__dirname, '../public/robots.txt');
if (fs.existsSync(robotsPath)) {
  console.log('✅ robots.txt exists');
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (robotsContent.includes('Sitemap:')) {
    console.log('✅ Sitemap directive found in robots.txt');
  } else {
    console.log('❌ Sitemap directive missing in robots.txt');
  }
} else {
  console.log('❌ robots.txt not found');
}

// Test 2: Check if manifest.json exists
console.log('\n2. Testing manifest.json...');
const manifestPath = path.join(__dirname, '../public/manifest.json');
if (fs.existsSync(manifestPath)) {
  console.log('✅ manifest.json exists');
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (manifest.name && manifest.description) {
      console.log('✅ Manifest has required fields');
    } else {
      console.log('❌ Manifest missing required fields');
    }
  } catch (e) {
    console.log('❌ Invalid manifest.json format');
  }
} else {
  console.log('❌ manifest.json not found');
}

// Test 3: Check SEO configuration files
console.log('\n3. Testing SEO configuration files...');
const seoConfigPath = path.join(__dirname, '../src/lib/seo.ts');
const structuredDataPath = path.join(__dirname, '../src/lib/structured-data.ts');
const pageSeOPath = path.join(__dirname, '../src/components/SEO/PageSEO.tsx');

if (fs.existsSync(seoConfigPath)) {
  console.log('✅ SEO configuration file exists');
} else {
  console.log('❌ SEO configuration file missing');
}

if (fs.existsSync(structuredDataPath)) {
  console.log('✅ Structured data file exists');
} else {
  console.log('❌ Structured data file missing');
}

if (fs.existsSync(pageSeOPath)) {
  console.log('✅ PageSEO component exists');
} else {
  console.log('❌ PageSEO component missing');
}

// Test 4: Check sitemap generation
console.log('\n4. Testing sitemap generation...');
const sitemapPath = path.join(__dirname, '../src/app/sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  console.log('✅ Sitemap generation file exists');
} else {
  console.log('❌ Sitemap generation file missing');
}

// Test 5: Check package.json for next-seo
console.log('\n5. Testing dependencies...');
const packagePath = path.join(__dirname, '../package.json');
if (fs.existsSync(packagePath)) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  if (packageJson.dependencies && packageJson.dependencies['next-seo']) {
    console.log('✅ next-seo dependency found');
  } else {
    console.log('❌ next-seo dependency missing');
  }
} else {
  console.log('❌ package.json not found');
}

// Test 6: Check Next.js config
console.log('\n6. Testing Next.js configuration...');
const nextConfigPath = path.join(__dirname, '../next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  const configContent = fs.readFileSync(nextConfigPath, 'utf8');
  if (configContent.includes('headers()')) {
    console.log('✅ SEO headers configuration found');
  } else {
    console.log('❌ SEO headers configuration missing');
  }
  if (configContent.includes('images:')) {
    console.log('✅ Image optimization configuration found');
  } else {
    console.log('❌ Image optimization configuration missing');
  }
} else {
  console.log('❌ next.config.ts not found');
}

console.log('\n🎉 SEO Test Complete!');
console.log('\n📋 Next Steps:');
console.log('1. Run "npm run build" to test the build');
console.log('2. Test the sitemap at /sitemap.xml');
console.log('3. Validate structured data with Google\'s Rich Results Test');
console.log('4. Test Open Graph tags with Facebook Debugger');
console.log('5. Set up Google Search Console and Bing Webmaster Tools');
