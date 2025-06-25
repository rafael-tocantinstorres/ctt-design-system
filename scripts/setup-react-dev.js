#!/usr/bin/env node

/**
 * Setup script for React development
 * Installs React dependencies and sets up development environment
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

console.log('🔧 Setting up React development environment...');

// Check if React is already installed
const hasReact = packageJson.devDependencies?.react || packageJson.dependencies?.react;

if (!hasReact) {
  console.log('📦 Installing React development dependencies...');
  
  try {
    execSync('npm install --save-dev react@^18.0.0 react-dom@^18.0.0 @types/react@^18.0.0', {
      stdio: 'inherit'
    });
    console.log('✅ React dependencies installed successfully');
  } catch (error) {
    console.error('❌ Failed to install React dependencies:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ React dependencies already installed');
}

// Create React example HTML file
const exampleHtmlPath = path.join(process.cwd(), 'examples', 'react-example.html');
const exampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CTT Design System - React Example</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" href="../dist/styles.css">
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="react-example.jsx"></script>
</body>
</html>`;

fs.writeFileSync(exampleHtmlPath, exampleHtml);
console.log('✅ React example HTML created');

// Create package.json script for React development
const scripts = packageJson.scripts || {};
if (!scripts['dev:react']) {
  scripts['dev:react'] = 'npm run build && cd examples && python -m http.server 8080';
  packageJson.scripts = scripts;
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Added dev:react script to package.json');
}

console.log('\n🎉 React development environment setup complete!');
console.log('\nTo test React integration:');
console.log('1. npm run build');
console.log('2. npm run dev:react');
console.log('3. Open http://localhost:8080/react-example.html');
console.log('\nFor more information, see REACT-INTEGRATION.md');