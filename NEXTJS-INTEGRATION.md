# Next.js Integration Guide

This guide explains how to integrate CTT Design System with Next.js applications.

## Installation

```bash
npm install ctt-design-system
```

## Basic Setup

### 1. Configure Next.js for Web Components

Create or update your `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose' // Required for ESM packages
  },
  webpack: (config) => {
    // Handle web components
    config.resolve.alias = {
      ...config.resolve.alias,
      'react/jsx-runtime.js': 'react/jsx-runtime',
      'react/jsx-dev-runtime.js': 'react/jsx-dev-runtime',
    };
    return config;
  },
};

module.exports = nextConfig;
```

### 2. Create a Client Component Wrapper

Create `components/CttComponents.js`:

```jsx
'use client';

import { useEffect } from 'react';
import { Button, InputField, TextareaField, RadioButton } from 'ctt-design-system/react';

// Import styles
import 'ctt-design-system/css';

// Re-export for easier imports
export { Button, InputField, TextareaField, RadioButton };

// Optional: Auto-register web components for direct usage
export const CttProvider = ({ children }) => {
  useEffect(() => {
    // Import web components on client side only
    import('ctt-design-system');
  }, []);

  return <>{children}</>;
};
```

### 3. Use in Your Pages/Components

```jsx
// app/page.js or pages/index.js
import { Button, InputField } from '@/components/CttComponents';

export default function HomePage() {
  const handleSubmit = (event) => {
    console.log('Form submitted:', event.detail);
  };

  return (
    <main>
      <h1>Welcome to My App</h1>
      
      <InputField
        label="Username"
        placeholder="Enter your username"
        required
      />
      
      <Button
        variant="primary"
        label="Submit"
        onClick={handleSubmit}
      />
    </main>
  );
}
```

## SSR Considerations

### Dynamic Imports for Web Components

If you need to use web components directly (not the React wrappers), use dynamic imports:

```jsx
'use client';

import { useEffect, useState } from 'react';

export default function MyComponent() {
  const [webComponentsLoaded, setWebComponentsLoaded] = useState(false);

  useEffect(() => {
    import('ctt-design-system').then(() => {
      setWebComponentsLoaded(true);
    });
  }, []);

  if (!webComponentsLoaded) {
    return <div>Loading components...</div>;
  }

  return (
    <div>
      <ctt-button variant="primary" label="Direct Web Component" />
    </div>
  );
}
```

### App Router (Next.js 13+)

Create `app/layout.js`:

```jsx
import { CttProvider } from '@/components/CttComponents';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CttProvider>
          {children}
        </CttProvider>
      </body>
    </html>
  );
}
```

### Pages Router (Next.js 12 and below)

Update `pages/_app.js`:

```jsx
import { CttProvider } from '@/components/CttComponents';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <CttProvider>
      <Component {...pageProps} />
    </CttProvider>
  );
}
```

## TypeScript Setup

### 1. Add Type Declarations

Create `types/ctt.d.ts`:

```typescript
/// <reference types="ctt-design-system/jsx" />

declare module 'ctt-design-system/react' {
  export * from 'ctt-design-system/dist/react/index';
}
```

### 2. Update tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["ctt-design-system/jsx"]
  },
  "include": [
    "types/**/*"
  ]
}
```

## Advanced Patterns

### Form Handling with CTT Hook

```jsx
'use client';

import { useCttForm } from 'ctt-design-system/react';
import { Button, InputField, TextareaField } from '@/components/CttComponents';

export default function ContactForm() {
  const form = useCttForm({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async () => {
    const formData = form.getAllValues();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        form.reset();
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <form>
      <InputField
        label="Name"
        value={form.getFieldValue('name')}
        onChange={form.handleFieldChange('name')}
        required
      />
      
      <InputField
        label="Email"
        type="email"
        value={form.getFieldValue('email')}
        onChange={form.handleFieldChange('email')}
        required
      />
      
      <TextareaField
        label="Message"
        value={form.getFieldValue('message')}
        onChange={form.handleFieldChange('message')}
        rows={4}
        required
      />
      
      <Button
        variant="primary"
        label="Send Message"
        onClick={handleSubmit}
      />
    </form>
  );
}
```

## Styling

### Global Styles

Import the design system styles in your root layout or `_app.js`:

```jsx
import 'ctt-design-system/css';
```

### CSS Modules Integration

```css
/* styles/HomePage.module.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.form {
  display: grid;
  gap: 1rem;
  max-width: 500px;
}

/* Override design system styles if needed */
.customButton :global(ctt-button) {
  --ctt-button-primary-bg: #your-custom-color;
}
```

```jsx
import styles from '@/styles/HomePage.module.css';
import { Button } from '@/components/CttComponents';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.customButton}>
          <Button variant="primary" label="Custom Styled Button" />
        </div>
      </div>
    </div>
  );
}
```

## Best Practices

1. **Use React Wrappers**: They provide better integration with React patterns
2. **Client Components**: Always use `'use client'` for components using web components
3. **Dynamic Imports**: Use dynamic imports for direct web component usage in SSR
4. **Type Safety**: Include TypeScript declarations for better DX
5. **Performance**: Import only the components you need

## Troubleshooting

### Hydration Errors
Use `'use client'` directive and ensure web components are loaded client-side only.

### TypeScript Errors
Make sure to include the JSX type declarations in your tsconfig.json.

### Styling Issues
Ensure CSS is imported at the root level and consider CSS custom properties for theming.