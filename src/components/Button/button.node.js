// Node.js/SSR entry point for Button component
// Exports the class without auto-registration and provides SSR render helper

import { CttButton } from './ButtonElement.js';

// SSR render helper
export async function renderCttButton(props = {}) {
  try {
    // Dynamic import to avoid bundling SSR in browser
    const { render } = await import('@lit-labs/ssr');
    const { collectResult } = await import('@lit-labs/ssr/lib/render-result.js');
    
    // Register the component if needed
    if (typeof customElements !== 'undefined' && !customElements.get('ctt-button')) {
      customElements.define('ctt-button', CttButton);
    }
    
    // Convert props to attributes
    const attributes = Object.entries(props)
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? key : '';
        }
        return `${key}="${String(value).replace(/"/g, '&quot;')}"`;
      })
      .filter(Boolean)
      .join(' ');
    
    const template = `<ctt-button ${attributes}></ctt-button>`;
    const ssrResult = render(template);
    const result = await collectResult(ssrResult);
    
    return result;
  } catch (error) {
    console.warn('SSR rendering failed, falling back to template:', error.message);
    // Fallback to basic template
    const attributes = Object.entries(props)
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? key : '';
        }
        return `${key}="${String(value).replace(/"/g, '&quot;')}"`;
      })
      .filter(Boolean)
      .join(' ');
    
    return `<ctt-button ${attributes}></ctt-button>`;
  }
}

// Export the class for direct use
export { CttButton };
export default CttButton;