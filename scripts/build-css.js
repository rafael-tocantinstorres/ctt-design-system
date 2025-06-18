import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';

async function buildCSS() {
  console.log('Building CSS bundle...');
  
  try {
    // Ensure dist directory exists
    await fs.ensureDir('dist');
    
    // Find all CSS files
    const cssFiles = await glob('src/**/*.css');
    
    let combinedCSS = '';
    
    for (const file of cssFiles) {
      const content = await fs.readFile(file, 'utf8');
      combinedCSS += `/* ${file} */\n${content}\n\n`;
    }
    
    // Write combined CSS
    await fs.writeFile('dist/styles.css', combinedCSS);
    
    console.log('✅ CSS bundle built successfully!');
  } catch (error) {
    console.error('❌ Error building CSS:', error);
    process.exit(1);
  }
}

buildCSS();