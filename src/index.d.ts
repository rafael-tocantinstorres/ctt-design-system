import { LitElement, TemplateResult } from 'lit';

// Component function types
export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

export declare function Button(props: ButtonProps): TemplateResult;

// Custom element classes
export declare class CttButton extends LitElement {
  primary: boolean;
  backgroundColor?: string;
  size: 'small' | 'medium' | 'large';
  label: string;
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

// Custom element declarations for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ctt-button': {
        primary?: boolean;
        backgroundColor?: string;
        size?: 'small' | 'medium' | 'large';
        label?: string;
        'onCtt-click'?: (event: CustomEvent) => void;
      };
    }
  }
}

// HTML element interfaces
declare global {
  interface HTMLElementTagNameMap {
    'ctt-button': CttButton;
  }
}