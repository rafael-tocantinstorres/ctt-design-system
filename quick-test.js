#!/usr/bin/env node

/**
 * Quick test to verify CTT Design System package works
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🧪 CTT Design System - Quick Package Test');
console.log('==========================================\n');

// Test 1: Check if package is built
console.log('1. 🔍 Checking package build...');
try {
    const distExists = fs.existsSync('./dist');
    if (distExists) {
        console.log('   ✅ dist/ directory exists');
        
        const files = fs.readdirSync('./dist');
        console.log('   📁 Build files:', files.join(', '));
        
        // Check for key files
        const keyFiles = ['index.js', 'index.esm.js', 'styles.css'];
        const missingFiles = keyFiles.filter(file => !files.includes(file));
        
        if (missingFiles.length === 0) {
            console.log('   ✅ All key files present');
        } else {
            console.log('   ⚠️ Missing files:', missingFiles.join(', '));
        }
    } else {
        console.log('   ❌ dist/ directory not found');
        console.log('   🔧 Run: npm run build');
    }
} catch (error) {
    console.log('   ❌ Error checking build:', error.message);
}

console.log('\n2. 🌐 Testing HTML integration...');
console.log('   📄 Open test-environments.html in your browser');
console.log('   🔗 Or run: start test-environments.html');

console.log('\n3. ⚛️ Testing React integration...');
console.log('   📁 cd test-react-app');
console.log('   📦 npm install (if not done)');
console.log('   🚀 npm run dev');
console.log('   🌐 Visit: http://localhost:3001');

console.log('\n4. ⚡ Testing Next.js integration...');
console.log('   📁 cd test-nextjs-app');
console.log('   📦 npm install (if not done)');
console.log('   🚀 npm run dev');
console.log('   🌐 Visit: http://localhost:3002');

console.log('\n📋 QUICK VERIFICATION CHECKLIST:');
console.log('□ HTML page loads components from CDN');
console.log('□ React app renders components correctly');
console.log('□ Next.js app works with SSR');
console.log('□ All components are interactive');
console.log('□ Forms work and validate input');
console.log('□ Styling is applied correctly');

console.log('\n🎯 SUCCESS CRITERIA:');
console.log('✅ All three test environments work');
console.log('✅ Components render and function correctly');
console.log('✅ No console errors');
console.log('✅ Package can be imported from npm CDN');

console.log('\n🔧 NEXT STEPS:');
console.log('1. Build the package: npm run build');
console.log('2. Open HTML test: start test-environments.html');
console.log('3. Test React app: cd test-react-app && npm run dev');
console.log('4. Test Next.js app: cd test-nextjs-app && npm run dev');

console.log('\n✨ Happy testing! 🧪');