// JSX Intrinsic Elements for Web Components
// This allows using web components directly in JSX with TypeScript support

declare namespace JSX {
  interface IntrinsicElements {
    'ctt-button': {
      variant?: 'primary' | 'secondary' | 'tertiary';
      size?: 'small' | 'medium' | 'large';
      label?: string;
      'icon-left'?: boolean;
      'icon-left-element'?: string;
      'icon-right'?: boolean;
      'icon-right-element'?: string;
      'border-radius'?: 'pill' | 'small' | 'extraSmall';
      'background-color'?: string;
      disabled?: boolean;
      'aria-label'?: string;
      onClick?: (event: Event) => void;
      ref?: React.Ref<HTMLElement>;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    };

    'ctt-input-field': {
      label?: string;
      placeholder?: string;
      value?: string;
      type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
      required?: boolean;
      disabled?: boolean;
      readonly?: boolean;
      error?: boolean;
      'error-message'?: string;
      'help-text'?: string;
      onChange?: (event: Event) => void;
      onInput?: (event: Event) => void;
      onFocus?: (event: Event) => void;
      onBlur?: (event: Event) => void;
      ref?: React.Ref<HTMLElement>;
      className?: string;
      style?: React.CSSProperties;
    };

    'ctt-textarea-field': {
      label?: string;
      placeholder?: string;
      value?: string;
      required?: boolean;
      disabled?: boolean;
      readonly?: boolean;
      error?: boolean;
      'error-message'?: string;
      'help-text'?: string;
      rows?: number;
      cols?: number;
      resize?: 'none' | 'both' | 'horizontal' | 'vertical';
      onChange?: (event: Event) => void;
      onInput?: (event: Event) => void;
      onFocus?: (event: Event) => void;
      onBlur?: (event: Event) => void;
      ref?: React.Ref<HTMLElement>;
      className?: string;
      style?: React.CSSProperties;
    };

    'ctt-radio-button': {
      label?: string;
      value?: string;
      name?: string;
      checked?: boolean;
      disabled?: boolean;
      required?: boolean;
      onChange?: (event: Event) => void;
      ref?: React.Ref<HTMLElement>;
      className?: string;
      style?: React.CSSProperties;
    };

    'ctt-header': {
      title?: string;
      subtitle?: string;
      logo?: string;
      navigation?: boolean;
      ref?: React.Ref<HTMLElement>;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    };

    'ctt-page': {
      title?: string;
      'max-width'?: string;
      padding?: string;
      ref?: React.Ref<HTMLElement>;
      className?: string;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    };
  }
}

// Global declarations for web component custom events
declare global {
  interface HTMLElementEventMap {
    'ctt-click': CustomEvent<{
      variant: string;
      size: string;
      label: string;
      iconLeft: boolean;
      iconRight: boolean;
      borderRadius: string;
      disabled: boolean;
    }>;
    'ctt-change': CustomEvent<{ value: string; }>;
    'ctt-input': CustomEvent<{ value: string; }>;
    'ctt-focus': CustomEvent<{ value: string; }>;
    'ctt-blur': CustomEvent<{ value: string; }>;
  }
}

export {};