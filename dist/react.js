'use strict';

var React = require('react');

// Utility function to convert React props to web component attributes
function convertPropsToAttributes(props, excludeProps = []) {
    const attributes = {};
    Object.keys(props).forEach(key => {
        if (excludeProps.includes(key))
            return;
        const value = props[key];
        // Convert camelCase to kebab-case for attributes
        const attributeName = key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
        // Handle different value types
        if (typeof value === 'boolean') {
            if (value) {
                attributes[attributeName] = '';
            }
        }
        else if (value !== undefined && value !== null) {
            attributes[attributeName] = value;
        }
    });
    return attributes;
}
// Button component wrapper
const CttButton = React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    React.useImperativeHandle(ref, () => elementRef.current);
    React.useEffect(() => {
        const element = elementRef.current;
        if (!element || !props.onClick)
            return;
        const handleClick = (event) => {
            var _a;
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, event);
        };
        element.addEventListener('ctt-click', handleClick);
        return () => element.removeEventListener('ctt-click', handleClick);
    }, [props.onClick]);
    const attributes = convertPropsToAttributes(props, ['onClick', 'className', 'style', 'ref']);
    return React.createElement('ctt-button', Object.assign({ ref: elementRef, className: props.className, style: props.style }, attributes));
});
// RadioButton component wrapper  
const CttRadioButton = React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    React.useImperativeHandle(ref, () => elementRef.current);
    React.useEffect(() => {
        const element = elementRef.current;
        if (!element || !props.onChange)
            return;
        const handleChange = (event) => {
            var _a;
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, event);
        };
        element.addEventListener('ctt-change', handleChange);
        return () => element.removeEventListener('ctt-change', handleChange);
    }, [props.onChange]);
    const attributes = convertPropsToAttributes(props, ['onChange', 'className', 'style', 'ref']);
    return React.createElement('ctt-radio-button', Object.assign({ ref: elementRef, className: props.className, style: props.style }, attributes));
});
// InputField component wrapper
const CttInputField = React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    React.useImperativeHandle(ref, () => elementRef.current);
    React.useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const handlers = [];
        if (props.onInput) {
            const handleInput = (event) => { var _a; return (_a = props.onInput) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-input', handleInput);
            handlers.push(['ctt-input', handleInput]);
        }
        if (props.onChange) {
            const handleChange = (event) => { var _a; return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-change', handleChange);
            handlers.push(['ctt-change', handleChange]);
        }
        if (props.onFocus) {
            const handleFocus = (event) => { var _a; return (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-focus', handleFocus);
            handlers.push(['ctt-focus', handleFocus]);
        }
        if (props.onBlur) {
            const handleBlur = (event) => { var _a; return (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event); };
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
    return React.createElement('ctt-input-field', Object.assign({ ref: elementRef, className: props.className, style: props.style }, attributes));
});
// TextareaField component wrapper
const CttTextareaField = React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    React.useImperativeHandle(ref, () => elementRef.current);
    React.useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const handlers = [];
        if (props.onInput) {
            const handleInput = (event) => { var _a; return (_a = props.onInput) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-input', handleInput);
            handlers.push(['ctt-input', handleInput]);
        }
        if (props.onChange) {
            const handleChange = (event) => { var _a; return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-change', handleChange);
            handlers.push(['ctt-change', handleChange]);
        }
        if (props.onFocus) {
            const handleFocus = (event) => { var _a; return (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-focus', handleFocus);
            handlers.push(['ctt-focus', handleFocus]);
        }
        if (props.onBlur) {
            const handleBlur = (event) => { var _a; return (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event); };
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
    return React.createElement('ctt-textarea-field', Object.assign({ ref: elementRef, className: props.className, style: props.style }, attributes));
});
// Header component wrapper
const CttHeader = React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    React.useImperativeHandle(ref, () => elementRef.current);
    React.useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const handlers = [];
        if (props.onLogin) {
            const handleLogin = (event) => { var _a; return (_a = props.onLogin) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-login', handleLogin);
            handlers.push(['ctt-login', handleLogin]);
        }
        if (props.onLogout) {
            const handleLogout = (event) => { var _a; return (_a = props.onLogout) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-logout', handleLogout);
            handlers.push(['ctt-logout', handleLogout]);
        }
        if (props.onCreateAccount) {
            const handleCreateAccount = (event) => { var _a; return (_a = props.onCreateAccount) === null || _a === void 0 ? void 0 : _a.call(props, event); };
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
    return React.createElement('ctt-header', Object.assign({ ref: elementRef, className: props.className, style: props.style }, attributes));
});
// Page component wrapper
const CttPage = React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    React.useImperativeHandle(ref, () => elementRef.current);
    React.useEffect(() => {
        const element = elementRef.current;
        if (!element)
            return;
        const handlers = [];
        if (props.onLogin) {
            const handleLogin = (event) => { var _a; return (_a = props.onLogin) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-login', handleLogin);
            handlers.push(['ctt-login', handleLogin]);
        }
        if (props.onLogout) {
            const handleLogout = (event) => { var _a; return (_a = props.onLogout) === null || _a === void 0 ? void 0 : _a.call(props, event); };
            element.addEventListener('ctt-logout', handleLogout);
            handlers.push(['ctt-logout', handleLogout]);
        }
        if (props.onCreateAccount) {
            const handleCreateAccount = (event) => { var _a; return (_a = props.onCreateAccount) === null || _a === void 0 ? void 0 : _a.call(props, event); };
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
    return React.createElement('ctt-page', Object.assign({ ref: elementRef, className: props.className, style: props.style }, attributes));
});
// Set display names for better debugging
CttButton.displayName = 'CttButton';
CttRadioButton.displayName = 'CttRadioButton';
CttInputField.displayName = 'CttInputField';
CttTextareaField.displayName = 'CttTextareaField';
CttHeader.displayName = 'CttHeader';
CttPage.displayName = 'CttPage';

exports.CttButton = CttButton;
exports.CttHeader = CttHeader;
exports.CttInputField = CttInputField;
exports.CttPage = CttPage;
exports.CttRadioButton = CttRadioButton;
exports.CttTextareaField = CttTextareaField;
//# sourceMappingURL=react.js.map
