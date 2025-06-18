// Export all components
export { IconButton } from './components/IconButton.js';
export { Button } from './components/Button.js';
export { Header } from './components/Header.js';
export { Page } from './components/Page.js';

// Export tokens for programmatic access
export { tokens } from './tokens/index.js';
export { buttonTokens, tokenStyles } from './tokens/utils.js';

// Auto-register components as custom elements for framework-agnostic usage
import { LitElement, html, css } from 'lit';
import { Button } from './components/Button.js';
import { IconButton } from './components/IconButton.js';

class CttButton extends LitElement {
  static properties = {
    primary: { type: Boolean },
    backgroundColor: { type: String },
    size: { type: String },
    label: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  constructor() {
    super();
    this.primary = false;
    this.size = 'medium';
    this.label = 'Button';
  }

  render() {
    return Button({
      primary: this.primary,
      backgroundColor: this.backgroundColor,
      size: this.size,
      label: this.label,
      onClick: () => this.dispatchEvent(new CustomEvent('ctt-click', {
        bubbles: true,
        composed: true
      }))
    });
  }
}

class CttIconButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  constructor() {
    super();
    this.variant = 'default';
    this.size = 'medium';
  }

  render() {
    return IconButton({
      variant: this.variant,
      size: this.size,
      onClick: () => this.dispatchEvent(new CustomEvent('ctt-icon-click', {
        bubbles: true,
        composed: true
      }))
    });
  }
}

// Register custom elements
if (!customElements.get('ctt-button')) {
  customElements.define('ctt-button', CttButton);
}

if (!customElements.get('ctt-icon-button')) {
  customElements.define('ctt-icon-button', CttIconButton);
}

// Export custom element classes for manual registration
export { CttIconButton };
export { CttButton };