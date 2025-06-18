import { LitElement, html, css } from 'lit';
import { IconButton } from '../components/IconButton.js';

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
}

// Register custom element
if (!customElements.get('ctt--icon-button')) {
  customElements.define('ctt--icon-button', CttIconButton);
}

export { CttIconButton };