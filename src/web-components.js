// Import all web component elements to register them
// This is a side-effect-only module that registers all the custom elements

import './components/Button/ButtonElement.js';
import './components/RadioButton/RadioButtonElement.js';
import './components/InputField/InputFieldElement.js';
import './components/TextareaField/TextareaFieldElement.js';
import './components/Header/HeaderElement.js';
import './components/Page/PageElement.js';

// This file doesn't export anything - it's purely for side effects
// Import this file to ensure all web components are registered
export {};