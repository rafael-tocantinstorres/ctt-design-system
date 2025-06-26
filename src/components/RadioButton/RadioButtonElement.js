import { LitElement, html, css } from 'lit';
import { RadioButton } from './index.js';

/**
 * RadioButton Web Component
 * 
 * A reusable radio button component with proper accessibility,
 * error states, and design system integration.
 * 
 * @element radio-button
 * 
 * @attr {string} label - Label text for the radio button
 * @attr {string} name - Name attribute for form grouping
 * @attr {string} value - Value of the radio button
 * @attr {boolean} checked - Whether the radio button is checked
 * @attr {boolean} disabled - Whether the radio button is disabled
 * @attr {string} errorText - Error message to display
 * 
 * @fires change - Fired when the radio button state changes
 * 
 * @csspart root - The root label element
 * @csspart control - The radio input element
 * @csspart label - The label text element
 * @csspart error - The error message container
 * 
 * @slot error - Custom error message content
 */
export class RadioButtonElement extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      name: { type: String },
      value: { type: String },
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      errorText: { type: String, attribute: 'error-text' },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

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
    return RadioButton({
      label: this.label,
      name: this.name,
      value: this.value,
      checked: this.checked,
      disabled: this.disabled,
      errorText: this.errorText,
      onChange: this._handleChange.bind(this),
      id: this.id || `radio-${this.name}-${this.value}`,
    });
  }

  /**
   * Handle radio button change event
   * @param {Event} event - The change event
   * @private
   */
  _handleChange(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.checked = event.detail.checked;
    
    // Dispatch custom change event with details
    this.dispatchEvent(new CustomEvent('ctt-change', {
      detail: {
        name: this.name,
        value: this.value,
        checked: this.checked,
        originalEvent: event.detail.originalEvent
      },
      bubbles: true,
      composed: true
    }));
  }

  /**
   * Focus the radio button input
   */
  focus() {
    const input = this.shadowRoot.querySelector('.ctt-radio-button__control');
    if (input) {
      input.focus();
    }
  }

  /**
   * Get the form value for this radio button
   * @returns {string|null} The value if checked, null otherwise
   */
  get formValue() {
    return this.checked ? this.value : null;
  }

  /**
   * Check if this radio button is valid
   * @returns {boolean} True if valid, false otherwise
   */
  get validity() {
    return !this.errorText;
  }
}

// Register the custom element
if (typeof customElements !== 'undefined') {
  customElements.define('radio-button', RadioButtonElement);
}

// Export for use in other modules
export { RadioButtonElement as CttRadioButton };