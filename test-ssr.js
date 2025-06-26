#!/usr/bin/env node

/**
 * Simple test script to verify SSR functionality
 * Run with: node test-ssr.js
 */

async function testSSR() {
  console.log('🧪 Testing CTT Design System SSR functionality...\n');
  
  try {
    // Test 1: Import SSR helpers
    console.log('1. Testing SSR imports...');
    const { renderCttButton, renderCttInputField, getCriticalCSS } = await import('./dist/ssr/index.js');
    console.log('   ✅ SSR helpers imported successfully');
    
    // Test 2: Render a button
    console.log('\n2. Testing button rendering...');
    const buttonHtml = await renderCttButton({
      variant: 'primary',
      size: 'medium',  
      label: 'Test Button'
    });
    console.log('   ✅ Button rendered:', buttonHtml.substring(0, 50) + '...');
    
    // Test 3: Render an input field
    console.log('\n3. Testing input field rendering...');
    const inputHtml = await renderCttInputField({
      placeholder: 'Test input',
      type: 'text'
    });
    console.log('   ✅ Input field rendered:', inputHtml.substring(0, 50) + '...');
    
    // Test 4: Get critical CSS
    console.log('\n4. Testing critical CSS...');
    const criticalCSS = getCriticalCSS();
    console.log('   ✅ Critical CSS generated:', criticalCSS.length, 'characters');
    
    // Test 5: Test Node.js entry point
    console.log('\n5. Testing Node.js entry point...');
    const nodeModule = await import('./dist/index.node.js');
    console.log('   ✅ Node.js module loaded with exports:', Object.keys(nodeModule).length, 'exports');
    
    console.log('\n🎉 All SSR tests passed!');
    console.log('\n📋 Summary:');
    console.log('   • SSR helpers are working correctly');
    console.log('   • Components can be rendered server-side'); 
    console.log('   • Critical CSS is available');
    console.log('   • Node.js entry point is functional');
    console.log('\n🚀 Your CTT Design System is ready for SSR!');
    
  } catch (error) {
    console.error('\n❌ SSR test failed:', error.message);
    console.error('\n🔧 Troubleshooting:');
    console.error('   1. Make sure you have built the project: npm run build');
    console.error('   2. Install @lit-labs/ssr: npm install @lit-labs/ssr');
    console.error('   3. Check that all files are in the dist/ directory');
    process.exit(1);
  }
}

testSSR();