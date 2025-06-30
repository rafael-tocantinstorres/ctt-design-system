import { LitElement, html, css } from 'lit';
import { ToggleSwitch } from './index.js';

/**
 * ToggleSwitch Web Component
 * 
 * A web component wrapper for the ToggleSwitch component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-toggle-switch 
 *   label="Enable notifications" 
 *   checked
 *   disabled
 *   show-label>
 * </ctt-toggle-switch>
 */
class CttToggleSwitch extends LitElement {
  static properties = {
    checked: { type: Boolean },
    disabled: { type: Boolean },
    label: { type: String },
    showLabel: { type: Boolean, attribute: 'show-label' },
  };

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.label = '';
    this.showLabel = true;
  }

  render() {
    return ToggleSwitch({
      checked: this.checked,
      disabled: this.disabled,
      label: this.label,
      showLabel: this.showLabel,
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
    
    this.dispatchEvent(new CustomEvent('ctt-toggle-switch-change', {
      bubbles: true,
      composed: true,
      detail: event.detail
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-toggle-switch')) {
  customElements.define('ctt-toggle-switch', CttToggleSwitch);
}

export { CttToggleSwitch };