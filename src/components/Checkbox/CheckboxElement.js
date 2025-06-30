import { LitElement, html, css } from 'lit';
import { Checkbox } from './index.js';

/**
 * Checkbox Web Component
 * 
 * A web component wrapper for the Checkbox component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-checkbox 
 *   label="Accept terms" 
 *   name="terms" 
 *   value="accepted"
 *   checked
 *   disabled
 *   error-text="Please accept the terms">
 * </ctt-checkbox>
 */
class CttCheckbox extends LitElement {
  static properties = {
    label: { type: String },
    name: { type: String },
    value: { type: String },
    checked: { type: Boolean },
    disabled: { type: Boolean },
    errorText: { type: String, attribute: 'error-text' },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.label = '';
    this.name = '';
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.errorText = '';
  }

  render() {
    return Checkbox({
      label: this.label,
      name: this.name,
      value: this.value,
      checked: this.checked,
      disabled: this.disabled,
      errorText: this.errorText,
      onChange: this._handleChange.bind(this),
      id: this.id,
    });
  }

  /**
   * Handle change events and dispatch custom events
   */
  _handleChange(event) {
    // Update the checked property to keep in sync
    this.checked = event.detail.checked;
    
    this.dispatchEvent(new CustomEvent('ctt-checkbox-change', {
      bubbles: true,
      composed: true,
      detail: event.detail
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-checkbox')) {
  customElements.define('ctt-checkbox', CttCheckbox);
}

export { CttCheckbox };