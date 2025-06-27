// Export all components (SSR-safe)
export { RadioButton } from './components/RadioButton/index.js';
export { TextareaField } from './components/TextareaField/index.js';
export { InputField } from './components/InputField/index.js';
export { Button } from './components/Button/index.js';
export { Header } from './components/Header/index.js';
export { Page } from './components/Page/index.js';

// Export tokens for programmatic access (SSR-safe)
export { tokens } from './tokens/index.js';
export { buttonTokens, tokenStyles, typographyHelpers, getCSSVar } from './tokens/utils.js';

// Client-side initialization
if (typeof window !== 'undefined' && window.customElements) {
  // Dynamically import CSS
  import('./styles.css').catch(() => {
    // Fallback: try to load from dist/styles.css via link tag
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = new URL('./dist/styles.css', import.meta.url).href;
      document.head.appendChild(link);
    }
  });

  // Component registration tracking to ensure single registration
  const registeredComponents = new Set();

  // Register component helper
  const registerComponent = (tagName, componentClass) => {
    if (!registeredComponents.has(tagName) && !customElements.get(tagName)) {
      customElements.define(tagName, componentClass);
      registeredComponents.add(tagName);
    }
  };

  // Component registry with tag names and import paths
  const componentRegistry = [
    { tagName: 'ctt-button', importPath: './components/Button/ButtonElement.js', exportName: 'CttButton' },
    { tagName: 'ctt-header', importPath: './components/Header/HeaderElement.js', exportName: 'CttHeader' },
    { tagName: 'ctt-input-field', importPath: './components/InputField/InputFieldElement.js', exportName: 'CttInputField' },
    { tagName: 'ctt-page', importPath: './components/Page/PageElement.js', exportName: 'CttPage' },
    { tagName: 'ctt-radio-button', importPath: './components/RadioButton/RadioButtonElement.js', exportName: 'CttRadioButton' },
    { tagName: 'ctt-textarea-field', importPath: './components/TextareaField/TextareaFieldElement.js', exportName: 'CttTextareaFieldElement' }
  ];

  // Dynamically import and register all components
  Promise.all(
    componentRegistry.map(({ importPath }) => import(importPath))
  ).then((modules) => {
    componentRegistry.forEach(({ tagName, exportName }, index) => {
      const componentClass = modules[index][exportName];
      registerComponent(tagName, componentClass);
    });
  }).catch(error => {
    console.warn('Failed to register CTT design system components:', error);
  });
}

// Export web component classes for advanced usage (undefined on server, available on client)
export let CttButton, CttHeader, CttInputField, CttPage, CttRadioButton, CttTextareaFieldElement;