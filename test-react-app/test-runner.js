#!/usr/bin/env node

/**
 * Test runner for CTT Design System React integration
 */

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 CTT Design System React Test Runner');
console.log('=====================================\n');

const tests = [
  {
    name: 'Install dependencies',
    command: 'npm install',
    description: 'Installing React app dependencies'
  },
  {
    name: 'Build React app',
    command: 'npm run build',
    description: 'Building React app with CTT Design System'
  },
  {
    name: 'Check build output',
    command: 'ls -la dist/',
    description: 'Verifying build artifacts'
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

console.log('Test Summary:');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`📊 Total: ${passed + failed}`);

if (failed === 0) {
  console.log('\n🎉 All tests passed! React integration is working correctly.');
  console.log('Run "npm run dev" to start the development server.');
} else {
  console.log('\n⚠️ Some tests failed. Please check the errors above.');
  process.exit(1);
}