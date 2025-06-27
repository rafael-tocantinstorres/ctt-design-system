import { LitElement, html, css } from 'lit';
import { Button } from './index.js';

/**
 * Button Web Component
 * 
 * A web component wrapper for the Button component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-button variant="primary" size="medium" label="Click me"></ctt-button>
 * <ctt-button variant="secondary" size="large" label="Save" icon-left icon-left-element="<svg>...</svg>"></ctt-button>
 * <ctt-button variant="tertiary" border-radius="small" label="Cancel" disabled></ctt-button>
 */
class CttButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
    label: { type: String },
    onclick: { type: Function },
    iconLeft: { type: Boolean, attribute: 'icon-left' },
    iconLeftElement: { type: String, attribute: 'icon-left-element' },
    iconRight: { type: Boolean, attribute: 'icon-right' },
    iconRightElement: { type: String, attribute: 'icon-right-element' },
    borderRadius: { type: String, attribute: 'border-radius' },
    backgroundColor: { type: String, attribute: 'background-color' },
    disabled: { type: Boolean },
    ariaLabel: { type: String, attribute: 'aria-label' }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  // Override to render in light DOM instead of shadow DOM
  // This allows global CSS to style the component
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'medium';
    this.label = 'Button';
    this.iconLeft = false;
    this.iconLeftElement = '';
    this.iconRight = false;
    this.iconRightElement = '';
    this.borderRadius = 'pill';
    this.disabled = false;
    this.ariaLabel = null;
  }

  render() {
    return Button({
      variant: this.variant,
      size: this.size,
      label: this.label,
      onclick: () => this._handleClick(),
      iconLeft: this.iconLeft,
      iconLeftElement: this.iconLeftElement,
      iconRight: this.iconRight,
      iconRightElement: this.iconRightElement,
      borderRadius: this.borderRadius,
      backgroundColor: this.backgroundColor,
      disabled: this.disabled,
      ariaLabel: this.ariaLabel
    });
  }

  /**
   * Handle click events and dispatch custom events
   */
  _handleClick() {
    // Don't dispatch event if button is disabled
    if (this.disabled) return;
    
    this.dispatchEvent(new CustomEvent('ctt-click', {
      bubbles: true,
      composed: true,
      detail: { 
        variant: this.variant,
        size: this.size,
        label: this.label,
        iconLeft: this.iconLeft,
        iconRight: this.iconRight,
        borderRadius: this.borderRadius,
        disabled: this.disabled
      }
    }));
  }
}

// Component registration is handled by the main index.js file
// to ensure SSR compatibility with Next.js

export { CttButton };