import { LitElement, TemplateResult } from 'lit';

// Component function types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onclick?: (event: Event) => void;
  iconLeft?: boolean;
  iconLeftElement?: string;
  iconRight?: boolean;
  iconRightElement?: string;
  borderRadius?: 'pill' | 'small' | 'extraSmall';
  backgroundColor?: string | null;
  disabled?: boolean;
  ariaLabel?: string | null;
}

export declare function Button(props: ButtonProps): TemplateResult;

export interface RadioButtonProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  errorText?: string;
  onChange?: (event: { detail: { name: string; value: string; checked: boolean; originalEvent: Event } }) => void;
  id?: string;
  className?: string;
}

export declare function RadioButton(props: RadioButtonProps): TemplateResult;

export interface InputFieldProps {
  label?: string;
  value?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  error?: string | null;
  disabled?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  id?: string | null;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
  ariaDescribedBy?: string | null;
}

export declare function InputField(props: InputFieldProps): TemplateResult;

export interface TextareaFieldProps {
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  errorText?: string | null;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number | null;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  id?: string | null;
  onInput?: (event: Event) => void;
  onChange?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
  ariaDescribedBy?: string | null;
}

export declare function TextareaField(props: TextareaFieldProps): TemplateResult;

export interface HeaderProps {
  user?: any;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export declare function Header(props: HeaderProps): TemplateResult;

export interface PageProps {
  user?: any;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export declare function Page(props: PageProps): TemplateResult;

// Custom element classes
export declare class CttButton extends LitElement {
  variant: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'medium' | 'large';
  label: string;
  onclick?: (event: Event) => void;
  iconLeft: boolean;
  iconLeftElement: string;
  iconRight: boolean;
  iconRightElement: string;
  borderRadius: 'pill' | 'small' | 'extraSmall';
  backgroundColor?: string;
  disabled: boolean;
  ariaLabel?: string | null;
}

export declare class CttRadioButton extends LitElement {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  disabled: boolean;
  errorText: string;
}

export declare class CttInputField extends LitElement {
  label: string;
  value: string;
  name: string;
  type: string;
  placeholder: string;
  error: string | null;
  disabled: boolean;
  required: boolean;
  size: 'small' | 'medium' | 'large';
}

export declare class CttTextareaFieldElement extends LitElement {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  errorText: string | null;
  disabled: boolean;
  required: boolean;
  rows: number;
  cols: number | null;
  resize: 'none' | 'vertical' | 'horizontal' | 'both';
}

export declare class CttHeader extends LitElement {
  user: any;
}

export declare class CttPage extends LitElement {
  user: any;
}

// Design tokens interface
export interface DesignTokens {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    neutral: Record<string, string>;
  };
  typography: {
    fontFamilies: {
      primary: string;
      secondary: string;
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
    lineHeight: Record<string, number>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
}

export declare const tokens: DesignTokens;

// Custom element declarations for TypeScript and JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ctt-button': Partial<{
        variant: 'primary' | 'secondary' | 'tertiary';
        size: 'small' | 'medium' | 'large';
        label: string;
        'icon-left': boolean | string;
        'icon-left-element': string;
        'icon-right': boolean | string;
        'icon-right-element': string;
        'border-radius': 'pill' | 'small' | 'extraSmall';
        'background-color': string;
        disabled: boolean | string;
        'aria-label': string;
        className: string;
        class: string;
        style: string | Record<string, string | number>;
        id: string;
        key: string | number;
        ref: any;
        'onCtt-click': (event: CustomEvent) => void;
      }> & Record<string, any>;
      'ctt-radio-button': Partial<{
        label: string;
        name: string;
        value: string;
        checked: boolean | string;
        disabled: boolean | string;
        'error-text': string;
        className: string;
        class: string;
        style: string | Record<string, string | number>;
        id: string;
        key: string | number;
        ref: any;
        'onCtt-change': (event: CustomEvent) => void;
      }> & Record<string, any>;
      'ctt-input-field': Partial<{
        label: string;
        value: string;
        name: string;
        type: string;
        placeholder: string;
        error: string;
        disabled: boolean | string;
        required: boolean | string;
        size: 'small' | 'medium' | 'large';
        className: string;
        class: string;
        style: string | Record<string, string | number>;
        id: string;
        key: string | number;
        ref: any;
        'onCtt-input': (event: CustomEvent) => void;
        'onCtt-change': (event: CustomEvent) => void;
        'onCtt-focus': (event: CustomEvent) => void;
        'onCtt-blur': (event: CustomEvent) => void;
      }> & Record<string, any>;
      'ctt-textarea-field': Partial<{
        label: string;
        value: string;
        name: string;
        placeholder: string;
        'error-text': string;
        disabled: boolean | string;
        required: boolean | string;
        rows: number | string;
        cols: number | string;
        resize: 'none' | 'vertical' | 'horizontal' | 'both';
        className: string;
        class: string;
        style: string | Record<string, string | number>;
        id: string;
        key: string | number;
        ref: any;
        'onCtt-input': (event: CustomEvent) => void;
        'onCtt-change': (event: CustomEvent) => void;
        'onCtt-focus': (event: CustomEvent) => void;
        'onCtt-blur': (event: CustomEvent) => void;
      }> & Record<string, any>;
      'ctt-header': Partial<{
        user: any;
        className: string;
        class: string;
        style: string | Record<string, string | number>;
        id: string;
        key: string | number;
        ref: any;
        'onCtt-login': (event: CustomEvent) => void;
        'onCtt-logout': (event: CustomEvent) => void;
        'onCtt-create-account': (event: CustomEvent) => void;
      }> & Record<string, any>;
      'ctt-page': Partial<{
        user: any;
        className: string;
        class: string;
        style: string | Record<string, string | number>;
        id: string;
        key: string | number;
        ref: any;
        'onCtt-login': (event: CustomEvent) => void;
        'onCtt-logout': (event: CustomEvent) => void;
        'onCtt-create-account': (event: CustomEvent) => void;
      }> & Record<string, any>;
    }
  }
}

// HTML element interfaces
declare global {
  interface HTMLElementTagNameMap {
    'ctt-button': CttButton;
    'ctt-radio-button': CttRadioButton;
    'ctt-input-field': CttInputField;
    'ctt-textarea-field': CttTextareaFieldElement;
    'ctt-header': CttHeader;
    'ctt-page': CttPage;
  }
}