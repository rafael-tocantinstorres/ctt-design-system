// src/index.js

// 1. Re-export everything so consumers get your classes & tokens as before
export * from './components/Button/index.js';
export * from './components/RadioButton/index.js';
export * from './components/InputField/index.js';
export * from './components/TextareaField/index.js';
export * from './components/Header/index.js';
export * from './components/Page/index.js';

export * from './tokens/index.js';
export * from './tokens/colors.js';
export * from './tokens/typography.js';
// …and any other tokens

// 2. Client-only registration & styling
if (typeof window !== 'undefined' && window.customElements) {
  // Dynamically inject your compiled CSS bundle
  import('./styles.css').catch(() => {
    /* you might log or swallow errors if CSS fails to load */
  });

  // Map tag names to their class exports
  const registry = {
    'ctt-button':       (await import('./components/Button/index.js')).CttButton,
    'ctt-radio-button': (await import('./components/RadioButton/index.js')).CttRadioButton,
    'ctt-input-field':  (await import('./components/InputField/index.js')).CttInputField,
    'ctt-textarea-field': (await import('./components/TextareaField/index.js')).CttTextareaField,
    'ctt-header':       (await import('./components/Header/index.js')).CttHeader,
    'ctt-page':         (await import('./components/Page/index.js')).CttPage,
    // …add all your other components here
  };

  // Define each custom element exactly once
  Object.entries(registry).forEach(([tag, Component]) => {
    if (!customElements.get(tag)) {
      customElements.define(tag, Component);
    }
  });
}