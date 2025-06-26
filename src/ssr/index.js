/**
 * SSR Helpers for CTT Design System
 * 
 * This module provides utilities for server-side rendering of CTT components
 * with full Shadow DOM support using @lit-labs/ssr.
 * 
 * Usage in Next.js or Node.js:
 * ```js
 * import { renderCttComponent, renderCttButton } from 'ctt-design-system/ssr';
 * 
 * // Generic component rendering
 * const html = await renderCttComponent('ctt-button', { variant: 'primary', label: 'Click me' });
 * 
 * // Specific component helpers
 * const buttonHtml = await renderCttButton({ variant: 'secondary', size: 'large', label: 'Save' });
 * ```
 */

// SSR-specific imports - components without auto-registration
// We'll register them manually when needed

// Component registration helper
async function ensureComponentRegistered(tagName) {
  if (typeof customElements !== 'undefined' && !customElements.get(tagName)) {
    // Dynamically import the component when needed
    switch (tagName) {
      case 'ctt-button':
        await import('../components/Button/ButtonElement.js');
        break;
      case 'ctt-input-field':
        await import('../components/InputField/InputFieldElement.js');
        break;
      case 'ctt-textarea-field':
        await import('../components/TextareaField/TextareaFieldElement.js');
        break;
      case 'ctt-radio-button':
        await import('../components/RadioButton/RadioButtonElement.js');
        break;
      case 'ctt-header':
        await import('../components/Header/HeaderElement.js');
        break;
      case 'ctt-page':
        await import('../components/Page/PageElement.js');
        break;
    }
  }
}

/**
 * Generic component renderer
 * @param {string} tagName - The component tag name (e.g., 'ctt-button')
 * @param {Object} props - Component properties
 * @param {Object} options - Rendering options
 * @returns {Promise<string>} Rendered HTML with styles
 */
export async function renderCttComponent(tagName, props = {}, options = {}) {
  try {
    // Ensure component is registered
    await ensureComponentRegistered(tagName);
    
    // Dynamic import to avoid bundling SSR code in browser builds
    const { render } = await import('@lit-labs/ssr');
    const { collectResult } = await import('@lit-labs/ssr/lib/render-result.js');
    
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
    
    const template = `<${tagName} ${attributes}></${tagName}>`;
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
    
    return `<${tagName} ${attributes}></${tagName}>`;
  }
}

/**
 * Render a CTT Button component
 * @param {Object} props - Button properties
 * @returns {Promise<string>} Rendered HTML
 */
export async function renderCttButton(props = {}) {
  return renderCttComponent('ctt-button', props);
}

/**
 * Render a CTT Input Field component
 * @param {Object} props - Input field properties
 * @returns {Promise<string>} Rendered HTML
 */
export async function renderCttInputField(props = {}) {
  return renderCttComponent('ctt-input-field', props);
}

/**
 * Render a CTT Textarea Field component
 * @param {Object} props - Textarea field properties
 * @returns {Promise<string>} Rendered HTML
 */
export async function renderCttTextareaField(props = {}) {
  return renderCttComponent('ctt-textarea-field', props);
}

/**
 * Render a CTT Radio Button component
 * @param {Object} props - Radio button properties
 * @returns {Promise<string>} Rendered HTML
 */
export async function renderCttRadioButton(props = {}) {
  return renderCttComponent('ctt-radio-button', props);
}

/**
 * Render a CTT Header component
 * @param {Object} props - Header properties
 * @returns {Promise<string>} Rendered HTML
 */
export async function renderCttHeader(props = {}) {
  return renderCttComponent('ctt-header', props);
}

/**
 * Render a CTT Page component
 * @param {Object} props - Page properties
 * @returns {Promise<string>} Rendered HTML
 */
export async function renderCttPage(props = {}) {
  return renderCttComponent('ctt-page', props);
}

/**
 * Get critical CSS for preloading
 * @returns {string} CSS to inline in document head
 */
export function getCriticalCSS() {
  // Return the essential CSS that should be inlined
  return `
    /* CTT Design System Critical CSS */
    ctt-button:not(:defined), 
    ctt-input-field:not(:defined), 
    ctt-textarea-field:not(:defined),
    ctt-radio-button:not(:defined),
    ctt-header:not(:defined),
    ctt-page:not(:defined) {
      display: none;
    }
    
    ctt-button:defined,
    ctt-input-field:defined,
    ctt-textarea-field:defined,
    ctt-radio-button:defined,
    ctt-header:defined,
    ctt-page:defined {
      display: initial;
    }
  `;
}

/**
 * Generate preload links for fonts
 * @returns {string[]} Array of preload link HTML strings
 */
export function getFontPreloadLinks() {
  return [
    '<link rel="preload" href="./fonts/ActoCTT-Book.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="preload" href="./fonts/ActoCTT-Bold.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="preload" href="./fonts/ActoCTT-Medium.woff2" as="font" type="font/woff2" crossorigin>'
  ];
}