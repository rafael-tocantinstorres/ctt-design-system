/**
 * SSR Helper Types for CTT Design System
 */

export interface SSRRenderOptions {
  /** Include styles in the output */
  includeStyles?: boolean;
  /** Custom CSS selector for the component */
  selector?: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  disabled?: boolean;
  'icon-left'?: boolean;
  'icon-left-element'?: string;
  'icon-right'?: boolean;
  'icon-right-element'?: string;
  'border-radius'?: 'small' | 'medium' | 'large' | 'pill';
  'background-color'?: string;
  'aria-label'?: string;
}

export interface InputFieldProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  size?: 'small' | 'medium' | 'large';
  'aria-label'?: string;
  'error-message'?: string;
  required?: boolean;
}

export interface TextareaFieldProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  'aria-label'?: string;
  'error-message'?: string;
  required?: boolean;
}

export interface RadioButtonProps {
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  'aria-label'?: string;
}

export interface HeaderProps {
  title?: string;
  'logo-url'?: string;
  'logo-alt'?: string;
  'user-name'?: string;
  'user-avatar'?: string;
}

export interface PageProps {
  title?: string;
  'main-content'?: string;
  'sidebar-content'?: string;
}

/**
 * Generic component renderer
 */
export declare function renderCttComponent(
  tagName: string, 
  props?: Record<string, any>, 
  options?: SSRRenderOptions
): Promise<string>;

/**
 * Render a CTT Button component
 */
export declare function renderCttButton(props?: ButtonProps): Promise<string>;

/**
 * Render a CTT Input Field component
 */
export declare function renderCttInputField(props?: InputFieldProps): Promise<string>;

/**
 * Render a CTT Textarea Field component
 */
export declare function renderCttTextareaField(props?: TextareaFieldProps): Promise<string>;

/**
 * Render a CTT Radio Button component
 */
export declare function renderCttRadioButton(props?: RadioButtonProps): Promise<string>;

/**
 * Render a CTT Header component
 */
export declare function renderCttHeader(props?: HeaderProps): Promise<string>;

/**
 * Render a CTT Page component
 */
export declare function renderCttPage(props?: PageProps): Promise<string>;

/**
 * Get critical CSS for preloading
 */
export declare function getCriticalCSS(): string;

/**
 * Generate preload links for fonts
 */
export declare function getFontPreloadLinks(): string[];