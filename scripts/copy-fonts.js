#!/usr/bin/env node

/**
 * CTT Design System - Font Copy Utility
 * 
 * This script helps copy font files to your application's public directory
 * to avoid path resolution issues with build tools.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyFonts(targetDir = './public/fonts') {
  const sourceDir = path.join(__dirname, '../dist/assets/fonts');
  
  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`📁 Created directory: ${targetDir}`);
  }
  
  // Copy all font files
  try {
    const files = fs.readdirSync(sourceDir);
    const fontFiles = files.filter(file => 
      file.endsWith('.woff') || file.endsWith('.eot')
    );
    
    if (fontFiles.length === 0) {
      console.log('⚠️  No font files found to copy');
      return;
    }
    
    console.log(`📋 Copying ${fontFiles.length} font files...`);
    
    fontFiles.forEach(file => {
      const source = path.join(sourceDir, file);
      const target = path.join(targetDir, file);
      
      fs.copyFileSync(source, target);
      console.log(`✅ Copied: ${file}`);
    });
    
    console.log('\n🎉 Font files copied successfully!');
    console.log('\nNext steps:');
    console.log('1. Import the fonts CSS in your application:');
    console.log('   @import "ctt-design-system/dist/assets/fonts-standalone.css";');
    console.log('\n2. Or add font declarations directly to your CSS using the paths:');
    console.log('   url("/fonts/ActoCTT-Book.woff")');
    
  } catch (error) {
    console.error('❌ Error copying fonts:', error.message);
    process.exit(1);
  }
}

// Run the script
const targetDir = process.argv[2] || './public/fonts';
copyFonts(targetDir);

export default copyFonts;