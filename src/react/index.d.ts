import React from 'react';

// Base props shared by all components
interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Button component props
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: (event: CustomEvent) => void;
  iconLeft?: boolean;
  iconLeftElement?: string;
  iconRight?: boolean;
  iconRightElement?: string;
  borderRadius?: 'pill' | 'small' | 'extraSmall';
  backgroundColor?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

// InputField component props
export interface InputFieldProps extends BaseComponentProps {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  errorMessage?: string;
  helpText?: string;
  onChange?: (event: CustomEvent) => void;
  onInput?: (event: CustomEvent) => void;
  onFocus?: (event: CustomEvent) => void;
  onBlur?: (event: CustomEvent) => void;
}

// TextareaField component props
export interface TextareaFieldProps extends BaseComponentProps {
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  errorMessage?: string;
  helpText?: string;
  rows?: number;
  cols?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  onChange?: (event: CustomEvent) => void;
  onInput?: (event: CustomEvent) => void;
  onFocus?: (event: CustomEvent) => void;
  onBlur?: (event: CustomEvent) => void;
}

// RadioButton component props
export interface RadioButtonProps extends BaseComponentProps {
  label?: string;
  value?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: CustomEvent) => void;
}

// Header component props
export interface HeaderProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  logo?: string;
  navigation?: boolean;
}

// Page component props
export interface PageProps extends BaseComponentProps {
  title?: string;
  maxWidth?: string;
  padding?: string;
}

// Component declarations
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>>;
export declare const InputField: React.ForwardRefExoticComponent<InputFieldProps & React.RefAttributes<HTMLElement>>;
export declare const TextareaField: React.ForwardRefExoticComponent<TextareaFieldProps & React.RefAttributes<HTMLElement>>;
export declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLElement>>;
export declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export declare const Page: React.ForwardRefExoticComponent<PageProps & React.RefAttributes<HTMLElement>>;