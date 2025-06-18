import fs from 'fs-extra';
import path from 'path';

async function buildTokens() {
  console.log('Building design tokens...');
  
  try {
    // Ensure dist directory exists
    await fs.ensureDir('dist');
    
    // Import tokens (we'll need to use dynamic import for ESM)
    const tokensModule = await import('../src/tokens/index.js');
    const tokens = tokensModule.tokens;
    
    // Create tokens.json for framework-agnostic usage
    const tokensJson = JSON.stringify(tokens, null, 2);
    await fs.writeFile('dist/tokens.json', tokensJson);
    
    // Copy CSS tokens
    await fs.copy('src/tokens/tokens.css', 'dist/tokens.css');
    
    // Generate CSS custom properties from JS tokens
    const cssVariables = generateCSSVariables(tokens);
    await fs.writeFile('dist/variables.css', cssVariables);
    
    // Copy TypeScript definitions
    await fs.copy('src/index.d.ts', 'dist/index.d.ts');
    
    console.log('✅ Design tokens built successfully!');
  } catch (error) {
    console.error('❌ Error building tokens:', error);
    process.exit(1);
  }
}

function generateCSSVariables(tokens, prefix = 'ctt') {
  let css = ':root {\n';
  
  function processObject(obj, path = []) {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = [...path, key];
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        processObject(value, currentPath);
      } else {
        const varName = `--${prefix}-${currentPath.join('-').toLowerCase()}`;
        css += `  ${varName}: ${value};\n`;
      }
    }
  }
  
  processObject(tokens);
  css += '}\n';
  
  return css;
}

buildTokens();