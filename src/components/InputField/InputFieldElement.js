import { LitElement, html, css } from 'lit';
import { InputField } from './index.js';

/**
 * InputField Web Component
 * 
 * A web component wrapper for the InputField component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-input-field 
 *   label="Email" 
 *   name="email" 
 *   type="email" 
 *   size="medium"
 *   error="Please enter a valid email"
 *   disabled
 * ></ctt-input-field>
 */
class CttInputField extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    name: { type: String },
    type: { type: String },
    placeholder: { type: String },
    error: { type: String },
    disabled: { type: Boolean },
    required: { type: Boolean },
    size: { type: String },
    id: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.name = '';
    this.type = 'text';
    this.placeholder = '';
    this.error = null;
    this.disabled = false;
    this.required = false;
    this.size = 'medium';
    this.id = null;
  }

  render() {
    return InputField({
      label: this.label,
      value: this.value,
      name: this.name,
      type: this.type,
      placeholder: this.placeholder,
      error: this.error,
      disabled: this.disabled,
      required: this.required,
      size: this.size,
      id: this.id,
      onInput: this._handleInput.bind(this),
      onChange: this._handleChange.bind(this),
      onFocus: this._handleFocus.bind(this),
      onBlur: this._handleBlur.bind(this),
    });
  }

  /**
   * Handle input events and dispatch custom events
   */
  _handleInput(event) {
    this.value = event.target.value;
    this.dispatchEvent(new CustomEvent('ctt-input', {
      bubbles: true,
      composed: true,
      detail: { 
        originalEvent: event,
        value: this.value,
        name: this.name
      }
    }));
  }

  /**
   * Handle change events and dispatch custom events
   */
  _handleChange(event) {
    this.value = event.target.value;
    this.dispatchEvent(new CustomEvent('ctt-change', {
      bubbles: true,
      composed: true,
      detail: { 
        originalEvent: event,
        value: this.value,
        name: this.name
      }
    }));
  }

  /**
   * Handle focus events and dispatch custom events
   */
  _handleFocus(event) {
    this.dispatchEvent(new CustomEvent('ctt-focus', {
      bubbles: true,
      composed: true,
      detail: { 
        originalEvent: event,
        value: this.value,
        name: this.name
      }
    }));
  }

  /**
   * Handle blur events and dispatch custom events
   */
  _handleBlur(event) {
    this.dispatchEvent(new CustomEvent('ctt-blur', {
      bubbles: true,
      composed: true,
      detail: { 
        originalEvent: event,
        value: this.value,
        name: this.name
      }
    }));
  }
}

// Register custom element
if (typeof customElements !== 'undefined' && !customElements.get('ctt-input-field')) {
  customElements.define('ctt-input-field', CttInputField);
}

export { CttInputField };