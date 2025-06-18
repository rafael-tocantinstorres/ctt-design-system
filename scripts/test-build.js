import fs from 'fs-extra';
import path from 'path';

async function testBuild() {
  console.log('Testing build process...');
  
  // Read source file
  const mainStylesPath = 'src/styles.css';
  const mainContent = await fs.readFile(mainStylesPath, 'utf8');
  
  console.log('Original content length:', mainContent.length);
  
  // Simple replacement test
  const importRegex = /@import\s+['"]([^'"]+)['"];?/g;
  let resolvedContent = mainContent;
  
  const firstImportMatch = importRegex.exec(mainContent);
  if (firstImportMatch) {
    const fullMatch = firstImportMatch[0];
    const importPath = firstImportMatch[1];
    const fullPath = path.resolve(path.dirname(mainStylesPath), importPath);
    
    console.log('Processing import:', importPath);
    console.log('Full path:', fullPath);
    
    const importedContent = await fs.readFile(fullPath, 'utf8');
    console.log('Imported content length:', importedContent.length);
    
    // Replace the import
    resolvedContent = resolvedContent.replace(fullMatch, `/* Imported from ${importPath} */\n${importedContent}\n/* End of ${importPath} */`);
    
    console.log('Resolved content length:', resolvedContent.length);
    
    // Write test file
    await fs.writeFile('dist/test-styles.css', resolvedContent);
    console.log('Test file written');
    
    // Verify the file was written correctly
    const writtenContent = await fs.readFile('dist/test-styles.css', 'utf8');
    console.log('Written file length:', writtenContent.length);
    console.log('Contains import?', writtenContent.includes('@import'));
  }
}

testBuild().catch(console.error);