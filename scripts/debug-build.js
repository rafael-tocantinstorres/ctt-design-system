import fs from 'fs-extra';
import path from 'path';

async function debug() {
  const mainStylesPath = 'src/styles.css';
  const mainContent = await fs.readFile(mainStylesPath, 'utf8');
  
  console.log('=== SOURCE FILE CONTENT ===');
  console.log(JSON.stringify(mainContent));
  console.log('\n=== SOURCE FILE PREVIEW ===');
  console.log(mainContent);
  
  // Test import regex
  const importRegex = /@import\s+['"]([^'"]+)['"];?/g;
  const matches = [];
  let match;
  
  while ((match = importRegex.exec(mainContent)) !== null) {
    matches.push({
      fullMatch: match[0],
      importPath: match[1]
    });
  }
  
  console.log('\n=== FOUND IMPORTS ===');
  console.log(matches);
  
  // Test resolving one import
  if (matches.length > 0) {
    const firstImport = matches[0];
    const fullPath = path.resolve(path.dirname(mainStylesPath), firstImport.importPath);
    console.log('\n=== RESOLVING FIRST IMPORT ===');
    console.log('Import path:', firstImport.importPath);
    console.log('Full path:', fullPath);
    console.log('File exists:', await fs.pathExists(fullPath));
    
    if (await fs.pathExists(fullPath)) {
      const importedContent = await fs.readFile(fullPath, 'utf8');
      console.log('Imported content length:', importedContent.length);
      console.log('Imported content preview:', importedContent.substring(0, 200));
    }
  }
}

debug().catch(console.error);