// React wrappers for CTT Design System Web Components
import React, { useRef, useEffect } from 'react';

// Import web components to ensure they're registered
import '../components/Button/ButtonElement.js';
import '../components/InputField/InputFieldElement.js';
import '../components/TextareaField/TextareaFieldElement.js';
import '../components/RadioButton/RadioButtonElement.js';
import '../components/Header/HeaderElement.js';
import '../components/Page/PageElement.js';

/**
 * Generic wrapper for web components that handles React-specific concerns
 */
const createWebComponentWrapper = (tagName, propMap = {}) => {
  return React.forwardRef((props, ref) => {
    const elementRef = useRef();
    const { children, ...webComponentProps } = props;

    // Combine forwarded ref with internal ref
    const combinedRef = (element) => {
      elementRef.current = element;
      if (ref) {
        if (typeof ref === 'function') {
          ref(element);
        } else {
          ref.current = element;
        }
      }
    };

    // Handle event listeners
    useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      const eventListeners = {};

      // Set up event listeners for React event handlers
      Object.entries(webComponentProps).forEach(([key, value]) => {
        if (key.startsWith('on') && typeof value === 'function') {
          const eventName = key.slice(2).toLowerCase();
          const customEventName = `ctt-${eventName}`;
          
          const handler = (event) => {
            // Call the React event handler with the custom event
            value(event);
          };

          element.addEventListener(customEventName, handler);
          eventListeners[customEventName] = handler;
        }
      });

      // Cleanup function
      return () => {
        Object.entries(eventListeners).forEach(([eventName, handler]) => {
          element.removeEventListener(eventName, handler);
        });
      };
    }, [webComponentProps]);

    // Convert React props to web component attributes
    const webComponentAttributes = {};
    Object.entries(webComponentProps).forEach(([key, value]) => {
      // Skip React event handlers - they're handled above
      if (key.startsWith('on') && typeof value === 'function') {
        return;
      }

      // Map React prop names to web component attribute names
      const mappedKey = propMap[key] || key;
      
      // Convert camelCase to kebab-case for attributes
      const attributeName = mappedKey.replace(/([A-Z])/g, '-$1').toLowerCase();
      
      // Handle boolean attributes
      if (typeof value === 'boolean') {
        if (value) {
          webComponentAttributes[attributeName] = '';
        }
      } else if (value !== undefined && value !== null) {
        webComponentAttributes[attributeName] = value;
      }
    });

    return React.createElement(tagName, {
      ...webComponentAttributes,
      ref: combinedRef
    }, children);
  });
};

// Create React wrappers for all components
export const Button = createWebComponentWrapper('ctt-button', {
  onClick: 'click'
});

export const InputField = createWebComponentWrapper('ctt-input-field', {
  onChange: 'change',
  onInput: 'input'
});

export const TextareaField = createWebComponentWrapper('ctt-textarea-field', {
  onChange: 'change',
  onInput: 'input'
});

export const RadioButton = createWebComponentWrapper('ctt-radio-button', {
  onChange: 'change'
});

export const Header = createWebComponentWrapper('ctt-header');

export const Page = createWebComponentWrapper('ctt-page');

// Export hooks for advanced usage
export { useCttComponent, useCttForm } from './hooks.js';