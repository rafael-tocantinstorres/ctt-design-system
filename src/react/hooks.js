import { useRef, useEffect, useCallback } from 'react';

/**
 * Hook for easier interaction with CTT web components
 * Provides utilities for common patterns like form handling
 */
export const useCttComponent = (componentRef) => {
  const getValue = useCallback(() => {
    if (!componentRef.current) return undefined;
    return componentRef.current.value;
  }, [componentRef]);

  const setValue = useCallback((value) => {
    if (!componentRef.current) return;
    componentRef.current.value = value;
  }, [componentRef]);

  const focus = useCallback(() => {
    if (!componentRef.current) return;
    if (typeof componentRef.current.focus === 'function') {
      componentRef.current.focus();
    }
  }, [componentRef]);

  const blur = useCallback(() => {
    if (!componentRef.current) return;
    if (typeof componentRef.current.blur === 'function') {
      componentRef.current.blur();
    }
  }, [componentRef]);

  return {
    getValue,
    setValue,
    focus,
    blur
  };
};

/**
 * Hook for handling form data with CTT components
 */
export const useCttForm = (initialValues = {}) => {
  const formData = useRef(initialValues);
  const listeners = useRef(new Map());

  const updateField = useCallback((fieldName, value) => {
    formData.current = {
      ...formData.current,
      [fieldName]: value
    };
    
    // Notify listeners
    const fieldListeners = listeners.current.get(fieldName) || [];
    fieldListeners.forEach(callback => callback(value));
  }, []);

  const handleFieldChange = useCallback((fieldName) => (event) => {
    const value = event.detail?.value || event.target?.value;
    updateField(fieldName, value);
  }, [updateField]);

  const getFieldValue = useCallback((fieldName) => {
    return formData.current[fieldName];
  }, []);

  const getAllValues = useCallback(() => {
    return { ...formData.current };
  }, []);

  const reset = useCallback((newValues = initialValues) => {
    formData.current = { ...newValues };
  }, [initialValues]);

  const subscribe = useCallback((fieldName, callback) => {
    if (!listeners.current.has(fieldName)) {
      listeners.current.set(fieldName, []);
    }
    listeners.current.get(fieldName).push(callback);

    // Return unsubscribe function
    return () => {
      const fieldListeners = listeners.current.get(fieldName);
      if (fieldListeners) {
        const index = fieldListeners.indexOf(callback);
        if (index > -1) {
          fieldListeners.splice(index, 1);
        }
      }
    };
  }, []);

  return {
    handleFieldChange,
    getFieldValue,
    getAllValues,
    updateField,
    reset,
    subscribe
  };
};