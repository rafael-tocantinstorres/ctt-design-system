import { LitElement, html, css } from 'lit';
import { Header } from './index.js';

/**
 * Header Web Component
 * 
 * A web component wrapper for the Header component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-header user="John Doe"></ctt-header>
 */
class CttHeader extends LitElement {
  static properties = {
    user: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.user = null;
  }

  render() {
    return Header({
      user: this.user,
      onLogin: () => this._handleLogin(),
      onLogout: () => this._handleLogout(),
      onCreateAccount: () => this._handleCreateAccount(),
    });
  }

  /**
   * Handle login events
   */
  _handleLogin() {
    this.dispatchEvent(new CustomEvent('ctt-header-login', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }

  /**
   * Handle logout events
   */
  _handleLogout() {
    this.dispatchEvent(new CustomEvent('ctt-header-logout', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }

  /**
   * Handle create account events
   */
  _handleCreateAccount() {
    this.dispatchEvent(new CustomEvent('ctt-header-create-account', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }
}

// Register custom element
if (typeof customElements !== 'undefined' && !customElements.get('ctt-header')) {
  customElements.define('ctt-header', CttHeader);
}

export { CttHeader };