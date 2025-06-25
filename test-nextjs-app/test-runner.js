#!/usr/bin/env node

/**
 * Test runner for CTT Design System Next.js integration
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 CTT Design System Next.js Test Runner');
console.log('=========================================\n');

const tests = [
  {
    name: 'Install dependencies',
    command: 'npm install',
    description: 'Installing Next.js app dependencies'
  },
  {
    name: 'Build Next.js app',
    command: 'npm run build',
    description: 'Building Next.js app with CTT Design System'
  },
  {
    name: 'Check build output',
    command: 'ls -la .next/',
    description: 'Verifying Next.js build artifacts'
  }
];

let passed = 0;
let failed = 0;

for (const test of tests) {
  console.log(`🔍 ${test.description}...`);
  
  try {
    const output = execSync(test.command, { 
      cwd: __dirname,
      stdio: 'pipe',
      encoding: 'utf8'
    });
    
    console.log(`✅ ${test.name} - PASSED`);
    if (output.trim()) {
      console.log(`   Output: ${output.trim().split('\n')[0]}...`);
    }
    passed++;
    
  } catch (error) {
    console.log(`❌ ${test.name} - FAILED`);
    console.log(`   Error: ${error.message}`);
    failed++;
  }
  
  console.log('');
}

// Additional Next.js specific tests
console.log('🔍 Running Next.js specific tests...\n');

const nextjsTests = [
  {
    name: 'Check Next.js config',
    test: () => fs.existsSync(path.join(__dirname, 'next.config.js')),
    description: 'Verifying Next.js configuration'
  },
  {
    name: 'Check pages structure',
    test: () => fs.existsSync(path.join(__dirname, 'pages/_app.js')) && fs.existsSync(path.join(__dirname, 'pages/index.js')),
    description: 'Verifying pages router structure'
  },
  {
    name: 'Check CSS import',
    test: () => {
      const appContent = fs.readFileSync(path.join(__dirname, 'pages/_app.js'), 'utf8');
      return appContent.includes('ctt-design-system/css');
    },
    description: 'Verifying CSS import in _app.js'
  },
  {
    name: 'Check React component imports',
    test: () => {
      const indexContent = fs.readFileSync(path.join(__dirname, 'pages/index.js'), 'utf8');
      return indexContent.includes('ctt-design-system/react');
    },
    description: 'Verifying React component imports'
  }
];

for (const test of nextjsTests) {
  console.log(`🔍 ${test.description}...`);
  
  try {
    const result = test.test();
    
    if (result) {
      console.log(`✅ ${test.name} - PASSED`);
      passed++;
    } else {
      console.log(`❌ ${test.name} - FAILED`);
      failed++;
    }
    
  } catch (error) {
    console.log(`❌ ${test.name} - FAILED`);
    console.log(`   Error: ${error.message}`);
    failed++;
  }
  
  console.log('');
}

console.log('Test Summary:');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📊 Total: ${passed + failed}`);

if (failed === 0) {
  console.log('\n🎉 All tests passed! Next.js integration is working correctly.');
  console.log('Run "npm run dev" to start the development server on http://localhost:3002');
} else {
  console.log('\n⚠️ Some tests failed. Please check the errors above.');
  process.exit(1);
}