import React from 'react';
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
export declare const CttButton: React.ForwardRefExoticComponent<Omit<CttButtonProps, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const CttRadioButton: React.ForwardRefExoticComponent<Omit<CttRadioButtonProps, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const CttInputField: React.ForwardRefExoticComponent<Omit<CttInputFieldProps, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const CttTextareaField: React.ForwardRefExoticComponent<Omit<CttTextareaFieldProps, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const CttHeader: React.ForwardRefExoticComponent<Omit<CttHeaderProps, "ref"> & React.RefAttributes<HTMLElement>>;
export declare const CttPage: React.ForwardRefExoticComponent<Omit<CttPageProps, "ref"> & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=react.d.ts.map