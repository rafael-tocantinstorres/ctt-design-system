import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';

// Note: You need to import the web components separately to register them:
// import 'ctt-ds';

// Type definitions for React component props
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

// Utility function to convert React props to web component attributes
function convertPropsToAttributes(props: Record<string, any>, excludeProps: string[] = []) {
  const attributes: Record<string, any> = {};
  
  Object.keys(props).forEach(key => {
    if (excludeProps.includes(key)) return;
    
    const value = props[key];
    
    // Convert camelCase to kebab-case for attributes
    const attributeName = key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    
    // Handle different value types
    if (typeof value === 'boolean') {
      if (value) {
        attributes[attributeName] = '';
      }
    } else if (value !== undefined && value !== null) {
      attributes[attributeName] = value;
    }
  });
  
  return attributes;
}

// Button component wrapper
export const CttButton = forwardRef<HTMLElement, CttButtonProps>((props, ref) => {
  const elementRef = useRef<HTMLElement>(null);
  
  useImperativeHandle(ref, () => elementRef.current!);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !props.onClick) return;
    
    const handleClick = (event: Event) => {
      props.onClick?.(event as CustomEvent);
    };
    
    element.addEventListener('ctt-click', handleClick);
    return () => element.removeEventListener('ctt-click', handleClick);
  }, [props.onClick]);
  
  const attributes = convertPropsToAttributes(props, ['onClick', 'className', 'style', 'ref']);
  
  return React.createElement('ctt-button', {
    ref: elementRef,
    className: props.className,
    style: props.style,
    ...attributes,
  });
});

// RadioButton component wrapper  
export const CttRadioButton = forwardRef<HTMLElement, CttRadioButtonProps>((props, ref) => {
  const elementRef = useRef<HTMLElement>(null);
  
  useImperativeHandle(ref, () => elementRef.current!);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !props.onChange) return;
    
    const handleChange = (event: Event) => {
      props.onChange?.(event as CustomEvent);
    };
    
    element.addEventListener('ctt-change', handleChange);
    return () => element.removeEventListener('ctt-change', handleChange);
  }, [props.onChange]);
  
  const attributes = convertPropsToAttributes(props, ['onChange', 'className', 'style', 'ref']);
  
  return React.createElement('ctt-radio-button', {
    ref: elementRef,
    className: props.className,
    style: props.style,
    ...attributes,
  });
});

// InputField component wrapper
export const CttInputField = forwardRef<HTMLElement, CttInputFieldProps>((props, ref) => {
  const elementRef = useRef<HTMLElement>(null);
  
  useImperativeHandle(ref, () => elementRef.current!);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handlers: Array<[string, (event: Event) => void]> = [];
    
    if (props.onInput) {
      const handleInput = (event: Event) => props.onInput?.(event as CustomEvent);
      element.addEventListener('ctt-input', handleInput);
      handlers.push(['ctt-input', handleInput]);
    }
    
    if (props.onChange) {
      const handleChange = (event: Event) => props.onChange?.(event as CustomEvent);
      element.addEventListener('ctt-change', handleChange);
      handlers.push(['ctt-change', handleChange]);
    }
    
    if (props.onFocus) {
      const handleFocus = (event: Event) => props.onFocus?.(event as CustomEvent);
      element.addEventListener('ctt-focus', handleFocus);
      handlers.push(['ctt-focus', handleFocus]);
    }
    
    if (props.onBlur) {
      const handleBlur = (event: Event) => props.onBlur?.(event as CustomEvent);
      element.addEventListener('ctt-blur', handleBlur);
      handlers.push(['ctt-blur', handleBlur]);
    }
    
    return () => {
      handlers.forEach(([eventName, handler]) => {
        element.removeEventListener(eventName, handler);
      });
    };
  }, [props.onInput, props.onChange, props.onFocus, props.onBlur]);
  
  const attributes = convertPropsToAttributes(props, [
    'onInput', 'onChange', 'onFocus', 'onBlur', 'className', 'style', 'ref'
  ]);
  
  return React.createElement('ctt-input-field', {
    ref: elementRef,
    className: props.className,
    style: props.style,
    ...attributes,
  });
});

// TextareaField component wrapper
export const CttTextareaField = forwardRef<HTMLElement, CttTextareaFieldProps>((props, ref) => {
  const elementRef = useRef<HTMLElement>(null);
  
  useImperativeHandle(ref, () => elementRef.current!);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handlers: Array<[string, (event: Event) => void]> = [];
    
    if (props.onInput) {
      const handleInput = (event: Event) => props.onInput?.(event as CustomEvent);
      element.addEventListener('ctt-input', handleInput);
      handlers.push(['ctt-input', handleInput]);
    }
    
    if (props.onChange) {
      const handleChange = (event: Event) => props.onChange?.(event as CustomEvent);
      element.addEventListener('ctt-change', handleChange);
      handlers.push(['ctt-change', handleChange]);
    }
    
    if (props.onFocus) {
      const handleFocus = (event: Event) => props.onFocus?.(event as CustomEvent);
      element.addEventListener('ctt-focus', handleFocus);
      handlers.push(['ctt-focus', handleFocus]);
    }
    
    if (props.onBlur) {
      const handleBlur = (event: Event) => props.onBlur?.(event as CustomEvent);
      element.addEventListener('ctt-blur', handleBlur);
      handlers.push(['ctt-blur', handleBlur]);
    }
    
    return () => {
      handlers.forEach(([eventName, handler]) => {
        element.removeEventListener(eventName, handler);
      });
    };
  }, [props.onInput, props.onChange, props.onFocus, props.onBlur]);
  
  const attributes = convertPropsToAttributes(props, [
    'onInput', 'onChange', 'onFocus', 'onBlur', 'className', 'style', 'ref'
  ]);
  
  return React.createElement('ctt-textarea-field', {
    ref: elementRef,
    className: props.className,
    style: props.style,
    ...attributes,
  });
});

// Header component wrapper
export const CttHeader = forwardRef<HTMLElement, CttHeaderProps>((props, ref) => {
  const elementRef = useRef<HTMLElement>(null);
  
  useImperativeHandle(ref, () => elementRef.current!);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handlers: Array<[string, (event: Event) => void]> = [];
    
    if (props.onLogin) {
      const handleLogin = (event: Event) => props.onLogin?.(event as CustomEvent);
      element.addEventListener('ctt-login', handleLogin);
      handlers.push(['ctt-login', handleLogin]);
    }
    
    if (props.onLogout) {
      const handleLogout = (event: Event) => props.onLogout?.(event as CustomEvent);
      element.addEventListener('ctt-logout', handleLogout);
      handlers.push(['ctt-logout', handleLogout]);
    }
    
    if (props.onCreateAccount) {
      const handleCreateAccount = (event: Event) => props.onCreateAccount?.(event as CustomEvent);
      element.addEventListener('ctt-create-account', handleCreateAccount);
      handlers.push(['ctt-create-account', handleCreateAccount]);
    }
    
    return () => {
      handlers.forEach(([eventName, handler]) => {
        element.removeEventListener(eventName, handler);
      });
    };
  }, [props.onLogin, props.onLogout, props.onCreateAccount]);
  
  const attributes = convertPropsToAttributes(props, [
    'onLogin', 'onLogout', 'onCreateAccount', 'className', 'style', 'ref'
  ]);
  
  return React.createElement('ctt-header', {
    ref: elementRef,
    className: props.className,
    style: props.style,
    ...attributes,
  });
});

// Page component wrapper
export const CttPage = forwardRef<HTMLElement, CttPageProps>((props, ref) => {
  const elementRef = useRef<HTMLElement>(null);
  
  useImperativeHandle(ref, () => elementRef.current!);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handlers: Array<[string, (event: Event) => void]> = [];
    
    if (props.onLogin) {
      const handleLogin = (event: Event) => props.onLogin?.(event as CustomEvent);
      element.addEventListener('ctt-login', handleLogin);
      handlers.push(['ctt-login', handleLogin]);
    }
    
    if (props.onLogout) {
      const handleLogout = (event: Event) => props.onLogout?.(event as CustomEvent);
      element.addEventListener('ctt-logout', handleLogout);
      handlers.push(['ctt-logout', handleLogout]);
    }
    
    if (props.onCreateAccount) {
      const handleCreateAccount = (event: Event) => props.onCreateAccount?.(event as CustomEvent);
      element.addEventListener('ctt-create-account', handleCreateAccount);
      handlers.push(['ctt-create-account', handleCreateAccount]);
    }
    
    return () => {
      handlers.forEach(([eventName, handler]) => {
        element.removeEventListener(eventName, handler);
      });
    };
  }, [props.onLogin, props.onLogout, props.onCreateAccount]);
  
  const attributes = convertPropsToAttributes(props, [
    'onLogin', 'onLogout', 'onCreateAccount', 'className', 'style', 'ref'
  ]);
  
  return React.createElement('ctt-page', {
    ref: elementRef,
    className: props.className,
    style: props.style,
    ...attributes,
  });
});

// Set display names for better debugging
CttButton.displayName = 'CttButton';
CttRadioButton.displayName = 'CttRadioButton';
CttInputField.displayName = 'CttInputField';
CttTextareaField.displayName = 'CttTextareaField';
CttHeader.displayName = 'CttHeader';
CttPage.displayName = 'CttPage';