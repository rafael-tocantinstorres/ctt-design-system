import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';

async function resolveImports(content, basePath, processedFiles = new Set()) {
  const importRegex = /@import\s+['"]([^'"]+)['"];?/g;
  let resolvedContent = content;
  const matches = [];
  let match;
  
  // Collect all matches first to avoid regex state issues
  while ((match = importRegex.exec(content)) !== null) {
    matches.push({
      fullMatch: match[0],
      importPath: match[1]
    });
  }
  
  // Process each import
  for (const matchInfo of matches) {
    const { fullMatch, importPath } = matchInfo;
    const fullPath = path.resolve(path.dirname(basePath), importPath);
    
    // Prevent circular imports
    if (processedFiles.has(fullPath)) {
      console.warn(`⚠️  Skipping circular import: ${importPath}`);
      resolvedContent = resolvedContent.replace(fullMatch, `/* Circular import skipped: ${importPath} */`);
      continue;
    }
    
    try {
      const importedContent = await fs.readFile(fullPath, 'utf8');
      processedFiles.add(fullPath);
      const resolvedImport = await resolveImports(importedContent, fullPath, processedFiles);
      resolvedContent = resolvedContent.replace(fullMatch, `/* Imported from ${importPath} */\n${resolvedImport}\n/* End of ${importPath} */`);
      console.log(`✅ Resolved import: ${importPath}`);
    } catch (error) {
      console.warn(`⚠️  Warning: Could not resolve import ${importPath} from ${basePath}:`, error.message);
      // Keep the original import if we can't resolve it
      // This allows for external imports that should remain as @import statements
    }
  }
  
  return resolvedContent;
}

async function buildCSS() {
  console.log('Building CSS bundle...');
  
  try {
    // Ensure dist directory exists
    await fs.ensureDir('dist');
    
    // Start with the main styles.css file
    const mainStylesPath = 'src/styles.css';
    const mainContent = await fs.readFile(mainStylesPath, 'utf8');
    
    console.log('📄 Processing main styles file...');
    console.log('Original content preview:', mainContent.substring(0, 200) + '...');
    
    // Resolve all imports
    const resolvedContent = await resolveImports(mainContent, mainStylesPath);
    
    console.log('📄 Resolved content preview:', resolvedContent.substring(0, 500) + '...');
    
    // Write resolved CSS
    console.log('📝 Writing resolved CSS to dist/styles.css...');
    console.log('📏 Resolved content length:', resolvedContent.length);
    await fs.writeFile('dist/styles.css', resolvedContent);
    console.log('✅ File written successfully');
    
    // Also find and copy other standalone CSS files
    const cssFiles = await glob('src/**/*.css');
    console.log('📁 Found CSS files:', cssFiles);
    
    for (const file of cssFiles) {
      console.log('🔍 Processing file:', file);
      // Normalize paths for comparison
      const normalizedFile = path.normalize(file);
      const normalizedMainPath = path.normalize(mainStylesPath);
      if (normalizedFile === normalizedMainPath) {
        console.log('⏭️  Skipping main styles file');
        continue; // Skip main file as it's already processed
      }
      
      const content = await fs.readFile(file, 'utf8');
      const relativePath = path.relative('src', file);
      const outputPath = path.join('dist', relativePath);
      
      console.log('📂 Output path:', outputPath);
      
      // Don't overwrite the main styles.css file that we just processed
      if (outputPath === 'dist/styles.css') {
        console.log('🚫 Skipping to avoid overwriting main styles.css');
        continue;
      }
      
      await fs.ensureDir(path.dirname(outputPath));
      await fs.writeFile(outputPath, content);
      console.log('✅ Copied:', file, '->', outputPath);
    }
    
    console.log('✅ CSS bundle built successfully!');
  } catch (error) {
    console.error('❌ Error building CSS:', error);
    process.exit(1);
  }
}

buildCSS();