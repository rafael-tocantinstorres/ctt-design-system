import { LitElement, html, css } from 'lit';
import { TextareaField } from './index.js';

/**
 * TextareaField Web Component
 * 
 * A reusable Web Component for textarea input with label, error states, and accessibility features.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <textarea-field 
 *   label="Description" 
 *   value="Initial text"
 *   placeholder="Enter your description..."
 *   errorText="This field is required"
 *   disabled
 * ></textarea-field>
 * 
 * API:
 * • Attributes/Props:
 *   – label (string)
 *   – value (string) 
 *   – placeholder (string)
 *   – errorText (string)
 *   – disabled (boolean)
 * • Events:
 *   – change (fires when user edits)
 */
class CttTextareaFieldElement extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    placeholder: { type: String },
    errorText: { type: String },
    disabled: { type: Boolean },
    name: { type: String },
    required: { type: Boolean },
    rows: { type: Number },
    cols: { type: Number },
    resize: { type: String },
    id: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }
  `;

  // Override to render in light DOM instead of shadow DOM
  // This allows global CSS to style the component
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.placeholder = '';
    this.errorText = '';
    this.disabled = false;
    this.name = '';
    this.required = false;
    this.rows = 4;
    this.cols = null;
    this.resize = 'vertical';
    this.id = null;
  }

  render() {
    return TextareaField({
      label: this.label,
      value: this.value,
      name: this.name,
      placeholder: this.placeholder,
      errorText: this.errorText,
      disabled: this.disabled,
      required: this.required,
      rows: this.rows,
      cols: this.cols,
      resize: this.resize,
      id: this.id,
      onInput: this._onInput.bind(this),
      onChange: this._onChange.bind(this),
      onFocus: this._onFocus.bind(this),
      onBlur: this._onBlur.bind(this),
    });
  }

  /**
   * Handle input events and dispatch custom events
   */
  _onInput(event) {
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
  _onChange(event) {
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
  _onFocus(event) {
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
  _onBlur(event) {
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

// Register custom element with the specified tag name
if (!customElements.get('textarea-field')) {
  customElements.define('textarea-field', CttTextareaFieldElement);
}

export { CttTextareaFieldElement };