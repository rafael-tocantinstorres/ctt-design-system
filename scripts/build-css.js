import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';

async function resolveImports(content, basePath) {
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
    
    try {
      const importedContent = await fs.readFile(fullPath, 'utf8');
      const resolvedImport = await resolveImports(importedContent, fullPath);
      resolvedContent = resolvedContent.replace(fullMatch, `/* Imported from ${importPath} */\n${resolvedImport}`);
      console.log(`✅ Resolved import: ${importPath}`);
    } catch (error) {
      console.warn(`⚠️  Warning: Could not resolve import ${importPath} from ${basePath}:`, error.message);
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
    
    // Resolve all imports
    const resolvedContent = await resolveImports(mainContent, mainStylesPath);
    
    // Write resolved CSS
    await fs.writeFile('dist/styles.css', resolvedContent);
    
    // Also find and copy other standalone CSS files
    const cssFiles = await glob('src/**/*.css');
    
    for (const file of cssFiles) {
      if (file === mainStylesPath) continue; // Skip main file as it's already processed
      
      const content = await fs.readFile(file, 'utf8');
      const relativePath = path.relative('src', file);
      const outputPath = path.join('dist', relativePath);
      
      await fs.ensureDir(path.dirname(outputPath));
      await fs.writeFile(outputPath, content);
    }
    
    console.log('✅ CSS bundle built successfully!');
  } catch (error) {
    console.error('❌ Error building CSS:', error);
    process.exit(1);
  }
}

buildCSS();