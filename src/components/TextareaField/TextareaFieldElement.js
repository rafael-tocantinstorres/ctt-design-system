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
class TextareaFieldElement extends LitElement {
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
      display: flex;
      flex-direction: column;
      gap: var(--ctt-core-dimension-25); /* 4px between label, control, error */
      width: 100%;
    }
    
    /* LABEL */
    [part="label"] {
      font-family: var(--ctt-base-font-family-label);
      font-weight: var(--ctt-base-font-weight-label);
      font-size: var(--ctt-base-font-size-label-s);
      line-height: var(--ctt-core-line-height-xs);
      color: var(--ctt-core-color-neutral-700);
      margin-bottom: var(--ctt-core-dimension-25);
    }
    
    /* TEXTAREA BASE */
    [part="control"] {
      width: 100%;
      min-height: calc(var(--ctt-core-size-scale) * 4); /* ~4rem */
      padding: var(--ctt-core-dimension-75) var(--ctt-core-dimension-100); /* 12px 16px */
      font: inherit;
      border-radius: var(--ctt-base-border-radius-xs); /* 4px */
      border: var(--ctt-base-border-width-selectable-s) solid var(--ctt-core-color-neutral-600);
      background: var(--ctt-core-color-neutral-100);
      color: var(--ctt-base-color-content-fg-main);
      resize: vertical;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    
    /* HOVER & FOCUS */
    [part="control"]:hover {
      border-color: var(--ctt-core-color-neutral-700);
    }
    
    [part="control"]:focus {
      outline: none;
      border-color: var(--ctt-core-color-primary-main);
      box-shadow: 0 0 0 3px rgba(var(--ctt-brand-primary-500), 0.2);
    }
    
    /* ERROR STATE */
    :host([errorText]) [part="control"] {
      border-color: var(--ctt-core-color-negative-main);
    }
    
    [part="error"] {
      font-family: var(--ctt-base-font-family-label);
      font-weight: var(--ctt-base-font-weight-label);
      font-size: var(--ctt-base-font-size-label-s);
      line-height: var(--ctt-core-line-height-xs);
      color: var(--ctt-core-color-negative-main);
      margin-top: var(--ctt-core-dimension-25);
    }
    
    /* DISABLED STATE */
    [part="control"][disabled] {
      background: var(--ctt-core-color-neutral-300);
      border-color: var(--ctt-core-color-neutral-500);
      color: var(--ctt-core-color-neutral-600);
      cursor: not-allowed;
    }
  `;

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
    return html`
      ${this.label ? html`
        <label part="label" for="input">
          ${this.label}
        </label>
      ` : ''}
      
      <textarea
        part="control"
        id="input"
        name=${this.name}
        .value=${this.value}
        placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        ?required=${this.required}
        rows=${this.rows}
        cols=${this.cols || undefined}
        @input=${this._onInput}
        style="resize: ${this.resize}"
      ></textarea>
      
      <div part="error" ?hidden=${!this.errorText}>
        <slot name="error">${this.errorText}</slot>
      </div>
    `;
  }

  /**
   * Handle input events and dispatch custom change events
   */
  _onInput(event) {
    this.value = event.target.value;
    
    // Dispatch custom change event
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: { 
        value: this.value,
        originalEvent: event
      }
    }));
  }
}

// Register custom element with the specified tag name
if (!customElements.get('textarea-field')) {
  customElements.define('textarea-field', TextareaFieldElement);
}

export { TextareaFieldElement };