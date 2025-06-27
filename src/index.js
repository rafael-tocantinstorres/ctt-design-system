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
  // load your bundled CSS
  import('./styles.css').catch(() => {
    console.warn('ctt-ds: could not load styles.css');
  });

  // map tag names → constructors
  const components = [
    ['ctt-button',        CttButton],
    ['ctt-radio-button',  CttRadioButton],
    ['ctt-input-field',   CttInputField],
    ['ctt-textarea-field',CttTextareaField],
    ['ctt-header',        CttHeader],
    ['ctt-page',          CttPage],
    // …and any others you have
  ];

  // define them exactly once
  components.forEach(([tag, ctor]) => {
    if (!customElements.get(tag)) {
      customElements.define(tag, ctor);
    }
  });
}