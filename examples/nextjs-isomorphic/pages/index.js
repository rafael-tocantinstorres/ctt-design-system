import Head from 'next/head';
import { renderCttButton } from 'ctt-design-system/button';

/**
 * This demonstrates the isomorphic Lit components recipe:
 * 1. Server renders components with full Shadow DOM
 * 2. Client hydrates seamlessly without any special configuration
 * 3. Same import works in both environments thanks to conditional exports
 */

export async function getServerSideProps() {
  console.log('🖥️  Server: Rendering components with @lit-labs/ssr...');
  
  try {
    // Server automatically gets the Node.js version via conditional exports
    const primaryButton = await renderCttButton({
      variant: 'primary',
      size: 'medium',
      label: 'Server Rendered Primary'
    });
    
    const secondaryButton = await renderCttButton({
      variant: 'secondary',
      size: 'large',
      label: 'Server Rendered Secondary',
      disabled: false
    });
    
    console.log('✅ Server: Components rendered successfully');
    
    return {
      props: {
        primaryButton,
        secondaryButton,
        timestamp: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error('❌ Server: SSR rendering failed:', error.message);
    
    // Fallback to basic templates
    return {
      props: {
        primaryButton: '<ctt-button variant="primary" size="medium" label="Fallback Primary"></ctt-button>',
        secondaryButton: '<ctt-button variant="secondary" size="large" label="Fallback Secondary"></ctt-button>',
        timestamp: new Date().toISOString(),
        error: error.message
      }
    };
  }
}

export default function HomePage({ primaryButton, secondaryButton, timestamp, error }) {
  return (
    <>
      <Head>
        <title>Isomorphic Lit Components - Next.js Example</title>
        <meta name="description" content="Example of isomorphic Lit components with full SSR" />
        
        {/* Include CSS for styling */}
        <link rel="stylesheet" href="/node_modules/ctt-design-system/dist/styles.css" />
        
        {/* Critical CSS could be inlined here for better performance */}
        <style dangerouslySetInnerHTML={{
          __html: `
            ctt-button:not(:defined) { display: none; }
            ctt-button:defined { display: inline-block; }
          `
        }} />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1>🧪 Isomorphic Lit Components Example</h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <p><strong>Server rendered at:</strong> {timestamp}</p>
          {error && (
            <p style={{ color: 'red' }}>
              <strong>⚠️ SSR Error:</strong> {error}
            </p>
          )}
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2>📍 Server-Side Rendered Components</h2>
          <p>These components were fully rendered on the server with Shadow DOM:</p>
          
          <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
            {/* Server-rendered components with full Shadow DOM */}
            <div dangerouslySetInnerHTML={{ __html: primaryButton }} />
            <div dangerouslySetInnerHTML={{ __html: secondaryButton }} />
          </div>
          
          <details style={{ marginTop: '1rem' }}>
            <summary>🔍 View Server-Rendered HTML</summary>
            <pre style={{ 
              background: '#f5f5f5', 
              padding: '1rem', 
              overflow: 'auto',
              fontSize: '0.8rem'
            }}>
              {primaryButton}
            </pre>
          </details>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>🌐 Client-Side Components</h2>
          <p>These components are rendered on the client and will hydrate:</p>
          
          <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
            {/* Direct usage - browser gets browser version automatically */}
            <ctt-button 
              variant="tertiary" 
              size="small" 
              label="Client Rendered"
            />
            <ctt-button 
              variant="primary" 
              size="large" 
              label="Interactive Button"
              onClick={() => alert('Client-side interaction!')}
            />
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>📋 Implementation Details</h2>
          <ul>
            <li>✅ <strong>Server</strong>: Uses <code>dist/button.node.js</code> via conditional exports</li>
            <li>✅ <strong>Browser</strong>: Uses <code>dist/button.js</code> via conditional exports</li>
            <li>✅ <strong>Same import</strong>: <code>import from 'ctt-design-system/button'</code></li>
            <li>✅ <strong>No wrappers</strong>: Components work directly without dynamic imports</li>
            <li>✅ <strong>Full SSR</strong>: Shadow DOM and styles rendered on server</li>
            <li>✅ <strong>Client hydration</strong>: Seamless transition to interactive components</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>🔄 How It Works</h2>
          <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
            <h3>Server-Side (Node.js):</h3>
            <ol>
              <li>Import resolves to <code>dist/button.node.js</code></li>
              <li>Calls <code>renderCttButton()</code> helper function</li>
              <li>Uses <code>@lit-labs/ssr</code> for deep rendering</li>
              <li>Returns HTML with inlined Shadow DOM styles</li>
            </ol>
            
            <h3>Client-Side (Browser):</h3>
            <ol>
              <li>Same import resolves to <code>dist/button.js</code></li>
              <li>Component auto-registers with <code>customElements.define()</code></li>
              <li>Existing server-rendered components hydrate seamlessly</li>
              <li>New components work immediately</li>
            </ol>
          </div>
        </section>
      </main>

      {/* 
        Client-side component loading for hydration
        The browser version will automatically be loaded due to conditional exports
      */}
      <script 
        type="module" 
        dangerouslySetInnerHTML={{
          __html: `
            // Browser automatically gets the right version
            import 'ctt-design-system/button';
            console.log('🌐 Client: Components loaded and ready for hydration');
            
            // Add interaction to demonstrate client-side functionality
            document.addEventListener('DOMContentLoaded', () => {
              const buttons = document.querySelectorAll('ctt-button');
              buttons.forEach(button => {
                button.addEventListener('ctt-click', (e) => {
                  console.log('Button clicked:', e.detail);
                });
              });
            });
          `
        }}
      />
    </>
  );
}