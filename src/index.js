// src/index.js

// 1) Import your classes
import { CttButton }         from './components/Button/index.js';
import { CttRadioButton }    from './components/RadioButton/index.js';
import { CttInputField }     from './components/InputField/index.js';
import { CttTextareaField }  from './components/TextareaField/index.js';
import { CttHeader }         from './components/Header/index.js';
import { CttPage }           from './components/Page/index.js';

// 2) Re-export for framework consumers (SSR-safe)
export { 
  CttButton,
  CttRadioButton,
  CttInputField,
  CttTextareaField,
  CttHeader,
  CttPage
};

// 3) Client-only registration & CSS injection
if (typeof window !== 'undefined' && window.customElements) {
  // Dynamically load your CSS bundle
  import('./styles.css').catch(() => {
    console.warn('ctt-ds: failed to load styles.css');
  });

  // List of [tagName, Constructor]
  const components = [
    ['ctt-button',         CttButton],
    ['ctt-radio-button',   CttRadioButton],
    ['ctt-input-field',    CttInputField],
    ['ctt-textarea-field', CttTextareaField],
    ['ctt-header',         CttHeader],
    ['ctt-page',           CttPage],
  ];

  // Define each one exactly once
  components.forEach(([tag, ctor]) => {
    if (!customElements.get(tag)) {
      customElements.define(tag, ctor);
    }
  });
}