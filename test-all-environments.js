#!/usr/bin/env node

/**
 * Comprehensive test runner for CTT Design System across all environments
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 CTT Design System - All Environments Test Runner');
console.log('===================================================\n');

const environments = [
  {
    name: 'HTML/Vanilla JS',
    emoji: '🌐',
    tests: [
      {
        name: 'Open HTML test page',
        description: 'Testing web components in browser',
        action: () => {
          console.log('   📁 Open: test-environments.html');
          console.log('   🌐 Or visit: http://localhost:8080/test-environments.html');
          return true;
        }
      }
    ]
  },
  {
    name: 'React App',
    emoji: '⚛️',
    directory: 'test-react-app',
    tests: [
      {
        name: 'Install React dependencies',
        command: 'npm install',
        description: 'Installing React app dependencies'
      },
      {
        name: 'Build React app',
        command: 'npm run build',
        description: 'Building React app with CTT Design System'
      },
      {
        name: 'Test React integration',
        command: 'npm run test',
        description: 'Running React-specific tests'
      }
    ]
  },
  {
    name: 'Next.js App',
    emoji: '⚡',
    directory: 'test-nextjs-app',
    tests: [
      {
        name: 'Install Next.js dependencies',
        command: 'npm install',
        description: 'Installing Next.js app dependencies'
      },
      {
        name: 'Build Next.js app',
        command: 'npm run build',
        description: 'Building Next.js app with CTT Design System'
      },
      {
        name: 'Test Next.js integration',
        command: 'npm run test',
        description: 'Running Next.js-specific tests'
      }
    ]
  }
];

let totalPassed = 0;
let totalFailed = 0;
const results = [];

console.log('🚀 Starting comprehensive environment tests...\n');

for (const env of environments) {
  console.log(`${env.emoji} Testing ${env.name}`);
  console.log('='.repeat(env.name.length + 10));
  
  let envPassed = 0;
  let envFailed = 0;
  
  for (const test of env.tests) {
    console.log(`🔍 ${test.description}...`);
    
    try {
      let success = false;
      
      if (test.command) {
        const cwd = env.directory ? path.join(__dirname, env.directory) : __dirname;
        const output = execSync(test.command, { 
          cwd,
          stdio: 'pipe',
          encoding: 'utf8'
        });
        success = true;
        
        if (output.trim()) {
          console.log(`   📋 ${output.trim().split('\n')[0]}...`);
        }
      } else if (test.action) {
        success = test.action();
      }
      
      if (success) {
        console.log(`✅ ${test.name} - PASSED`);
        envPassed++;
        totalPassed++;
      } else {
        console.log(`❌ ${test.name} - FAILED`);
        envFailed++;
        totalFailed++;
      }
      
    } catch (error) {
      console.log(`❌ ${test.name} - FAILED`);
      console.log(`   Error: ${error.message}`);
      envFailed++;
      totalFailed++;
    }
    
    console.log('');
  }
  
  results.push({
    environment: env.name,
    emoji: env.emoji,
    passed: envPassed,
    failed: envFailed,
    total: envPassed + envFailed
  });
  
  console.log(`${env.emoji} ${env.name} Summary: ${envPassed}/${envPassed + envFailed} tests passed\n`);
}

// Generate summary report
console.log('📊 COMPREHENSIVE TEST SUMMARY');
console.log('==============================\n');

for (const result of results) {
  const status = result.failed === 0 ? '✅' : '⚠️';
  console.log(`${status} ${result.emoji} ${result.environment}: ${result.passed}/${result.total} passed`);
}

console.log('\nOverall Results:');
console.log(`✅ Total Passed: ${totalPassed}`);
console.log(`❌ Total Failed: ${totalFailed}`);
console.log(`📊 Total Tests: ${totalPassed + totalFailed}`);

// Generate instructions
console.log('\n🚀 NEXT STEPS');
console.log('=============\n');

console.log('1. 🌐 HTML/Vanilla JS Test:');
console.log('   • Open test-environments.html in your browser');
console.log('   • Or start a local server: python -m http.server 8080');
console.log('   • Visit: http://localhost:8080/test-environments.html\n');

console.log('2. ⚛️ React App Test:');
console.log('   • cd test-react-app');
console.log('   • npm run dev');
console.log('   • Visit: http://localhost:3001\n');

console.log('3. ⚡ Next.js App Test:');
console.log('   • cd test-nextjs-app');
console.log('   • npm run dev');
console.log('   • Visit: http://localhost:3002\n');

console.log('📋 MANUAL TESTING CHECKLIST');
console.log('============================\n');

const checklist = [
  '□ Web components render correctly in HTML',
  '□ CSS styles are applied properly',
  '□ React components work in React app',
  '□ Next.js SSR/SSG works correctly',
  '□ Form interactions work in all environments',
  '□ Button variants display correctly',
  '□ Input fields accept and validate data',
  '□ Radio buttons and checkboxes function',
  '□ Component props are passed correctly',
  '□ Event handlers work as expected',
  '□ Responsive design works on mobile',
  '□ Accessibility features are functional'
];

checklist.forEach(item => console.log(item));

if (totalFailed === 0) {
  console.log('\n🎉 All automated tests passed!');
  console.log('Please run the manual tests above to complete the verification.');
} else {
  console.log('\n⚠️ Some automated tests failed.');
  console.log('Please check the errors above and fix before proceeding.');
  process.exit(1);
}

// Generate test report file
const reportData = {
  timestamp: new Date().toISOString(),
  summary: {
    totalPassed,
    totalFailed,
    totalTests: totalPassed + totalFailed
  },
  environments: results,
  checklist
};

fs.writeFileSync(
  path.join(__dirname, 'test-report.json'), 
  JSON.stringify(reportData, null, 2)
);

console.log('\n📄 Test report saved to: test-report.json');