// Browser entry point for Button component
// Registers the custom element and exports the class

import { CttButton } from './ButtonElement.js';

// Ensure custom element is registered (browser only)
if (typeof customElements !== 'undefined' && !customElements.get('ctt-button')) {
  customElements.define('ctt-button', CttButton);
}

export { CttButton };
export default CttButton;