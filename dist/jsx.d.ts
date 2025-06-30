import React from 'react';

// React component type declarations for your design system components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ctt-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
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
        'onCtt-click'?: (event: CustomEvent) => void;
        ref?: React.Ref<HTMLElement>;
      };
      'ctt-radio-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string;
        name?: string;
        value?: string;
        checked?: boolean;
        disabled?: boolean;
        'error-text'?: string;
        'onCtt-change'?: (event: CustomEvent) => void;
        ref?: React.Ref<HTMLElement>;
      };
      'ctt-input-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string;
        value?: string;
        name?: string;
        type?: string;
        placeholder?: string;
        error?: string;
        disabled?: boolean;
        required?: boolean;
        size?: 'small' | 'medium' | 'large';
        'onCtt-input'?: (event: CustomEvent) => void;
        'onCtt-change'?: (event: CustomEvent) => void;
        'onCtt-focus'?: (event: CustomEvent) => void;
        'onCtt-blur'?: (event: CustomEvent) => void;
        ref?: React.Ref<HTMLElement>;
      };
      'ctt-textarea-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string;
        value?: string;
        name?: string;
        placeholder?: string;
        'error-text'?: string;
        disabled?: boolean;
        required?: boolean;
        rows?: number;
        cols?: number;
        resize?: 'none' | 'vertical' | 'horizontal' | 'both';
        'onCtt-input'?: (event: CustomEvent) => void;
        'onCtt-change'?: (event: CustomEvent) => void;
        'onCtt-focus'?: (event: CustomEvent) => void;
        'onCtt-blur'?: (event: CustomEvent) => void;
        ref?: React.Ref<HTMLElement>;
      };
      'ctt-header': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        user?: any;
        'onCtt-login'?: (event: CustomEvent) => void;
        'onCtt-logout'?: (event: CustomEvent) => void;
        'onCtt-create-account'?: (event: CustomEvent) => void;
        ref?: React.Ref<HTMLElement>;
      };
      'ctt-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        user?: any;
        'onCtt-login'?: (event: CustomEvent) => void;
        'onCtt-logout'?: (event: CustomEvent) => void;
        'onCtt-create-account'?: (event: CustomEvent) => void;
        ref?: React.Ref<HTMLElement>;
      };
    }
  }
}

// React component wrapper types
export interface CttButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  iconLeft?: boolean;
  iconLeftElement?: string;
  iconRight?: boolean;
  iconRightElement?: string;
  borderRadius?: 'pill' | 'small' | 'extraSmall';
  backgroundColor?: string;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}

export interface CttRadioButtonProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  errorText?: string;
  onChange?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}

export interface CttInputFieldProps {
  label?: string;
  value?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  onInput?: (event: CustomEvent) => void;
  onChange?: (event: CustomEvent) => void;
  onFocus?: (event: CustomEvent) => void;
  onBlur?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}

export interface CttTextareaFieldProps {
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  errorText?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  onInput?: (event: CustomEvent) => void;
  onChange?: (event: CustomEvent) => void;
  onFocus?: (event: CustomEvent) => void;
  onBlur?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}

export interface CttHeaderProps {
  user?: any;
  onLogin?: (event: CustomEvent) => void;
  onLogout?: (event: CustomEvent) => void;
  onCreateAccount?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}

export interface CttPageProps {
  user?: any;
  onLogin?: (event: CustomEvent) => void;
  onLogout?: (event: CustomEvent) => void;
  onCreateAccount?: (event: CustomEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLElement>;
}