import { LitElement, html, css } from 'lit';
import { Button } from './index.js';

/**
 * Button Web Component
 * 
 * A web component wrapper for the Button component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-button primary size="medium" label="Click me"></ctt-button>
 */
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
      onClick: () => this._handleClick()
    });
  }

  /**
   * Handle click events and dispatch custom events
   */
  _handleClick() {
    this.dispatchEvent(new CustomEvent('ctt-click', {
      bubbles: true,
      composed: true,
      detail: { 
        primary: this.primary,
        size: this.size,
        label: this.label
      }
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-button')) {
  customElements.define('ctt-button', CttButton);
}

export { CttButton };