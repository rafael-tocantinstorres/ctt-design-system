import { LitElement, html, css } from 'lit';
import { Page } from './index.js';

/**
 * Page Web Component
 * 
 * A web component wrapper for the Page component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-page user="John Doe"></ctt-page>
 */
class CttPage extends LitElement {
  static properties = {
    user: { type: String },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  // Override to render in light DOM instead of shadow DOM
  // This allows global CSS to style the component
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.user = null;
  }

  render() {
    return Page({
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
    this.dispatchEvent(new CustomEvent('ctt-page-login', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }

  /**
   * Handle logout events
   */
  _handleLogout() {
    this.dispatchEvent(new CustomEvent('ctt-page-logout', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }

  /**
   * Handle create account events
   */
  _handleCreateAccount() {
    this.dispatchEvent(new CustomEvent('ctt-page-create-account', {
      bubbles: true,
      composed: true,
      detail: { user: this.user }
    }));
  }
}

// Register custom element
if (!customElements.get('ctt-page')) {
  customElements.define('ctt-page', CttPage);
}

export { CttPage };