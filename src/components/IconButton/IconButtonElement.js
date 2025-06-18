import { LitElement, html, css } from 'lit';
import { IconButton } from './index.js';

/**
 * IconButton Web Component
 * 
 * A web component wrapper for the IconButton component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-icon-button variant="primary" size="medium"></ctt-icon-button>
 */
class CttIconButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
  };

  static styles = css`
    :host {
      display: block;
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
    });
  }

  /**
   * Handle click events and dispatch custom events
   */
  _handleClick(event) {
    this.dispatchEvent(new CustomEvent('ctt-icon-button-click', {
      bubbles: true,
      composed: true,
      detail: { 
        originalEvent: event,
        variant: this.variant,
        size: this.size
      }
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-icon-button')) {
  customElements.define('ctt-icon-button', CttIconButton);
}

export { CttIconButton };