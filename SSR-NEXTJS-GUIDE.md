# CTT Design System - Next.js SSR Integration Guide

This guide shows how to use CTT Design System components with full Server-Side Rendering (SSR) support in Next.js applications.

## Prerequisites

Make sure you have the required dependencies:

```bash
npm install ctt-design-system @lit-labs/ssr
```

## Basic Usage

### 1. Server-Side Rendering

In your Next.js pages or API routes, you can render components on the server:

```javascript
// pages/index.js or pages/api/component.js
import { renderCttButton, renderCttInputField, getCriticalCSS } from 'ctt-design-system/ssr';

export async function getServerSideProps() {
  // Render components on the server
  const buttonHtml = await renderCttButton({
    variant: 'primary',
    size: 'medium',
    label: 'Server Rendered Button'
  });
  
  const inputHtml = await renderCttInputField({
    placeholder: 'Enter your name',
    type: 'text',
    size: 'medium'
  });
  
  const criticalCSS = getCriticalCSS();
  
  return {
    props: {
      buttonHtml,
      inputHtml,
      criticalCSS
    }
  };
}

export default function HomePage({ buttonHtml, inputHtml, criticalCSS }) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <link rel="stylesheet" href="/node_modules/ctt-design-system/dist/styles.css" />
        <link rel="stylesheet" href="/node_modules/ctt-design-system/fonts.css" />
      </Head>
      
      <div>
        <h1>SSR CTT Components</h1>
        <div dangerouslySetInnerHTML={{ __html: buttonHtml }} />
        <div dangerouslySetInnerHTML={{ __html: inputHtml }} />
      </div>
      
      {/* Client-side hydration script */}
      <script type="module" src="/node_modules/ctt-design-system/dist/index.esm.js" />
    </>
  );
}
```

### 2. Client-Side Hydration

For client-side interactions, import the regular components:

```javascript
// pages/_app.js
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load CTT components for client-side hydration
    import('ctt-design-system');
  }, []);

  return <Component {...pageProps} />;
}
```

### 3. Hybrid Approach

You can mix server-rendered and client-rendered components:

```javascript
// components/ContactForm.js
import { useEffect, useState } from 'react';
import { renderCttInputField, renderCttButton } from 'ctt-design-system/ssr';

export default function ContactForm({ ssrComponents }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    // Load components for client interaction
    import('ctt-design-system');
  }, []);
  
  if (!isClient) {
    // Server-rendered content
    return (
      <form>
        <div dangerouslySetInnerHTML={{ __html: ssrComponents.nameInput }} />
        <div dangerouslySetInnerHTML={{ __html: ssrComponents.emailInput }} />
        <div dangerouslySetInnerHTML={{ __html: ssrComponents.submitButton }} />
      </form>
    );
  }
  
  // Client-rendered content with full interactivity
  return (
    <form>
      <ctt-input-field
        placeholder="Your name"
        type="text"
        required
        aria-label="Name"
      />
      <ctt-input-field
        placeholder="Your email"
        type="email"
        required
        aria-label="Email"
      />
      <ctt-button
        variant="primary"
        type="submit"
        label="Send Message"
      />
    </form>
  );
}

// Get server-side props
export async function getServerSideProps() {
  const ssrComponents = {
    nameInput: await renderCttInputField({
      placeholder: 'Your name',
      type: 'text',
      required: true,
      'aria-label': 'Name'
    }),
    emailInput: await renderCttInputField({
      placeholder: 'Your email',
      type: 'email',
      required: true,
      'aria-label': 'Email'
    }),
    submitButton: await renderCttButton({
      variant: 'primary',
      label: 'Send Message',
      type: 'submit'
    })
  };
  
  return {
    props: { ssrComponents }
  };
}
```

## Advanced Configuration

### 1. Font Preloading

Add font preloading to your `_document.js`:

```javascript
// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import { getFontPreloadLinks } from 'ctt-design-system/ssr';

export default function Document() {
  const fontPreloads = getFontPreloadLinks();
  
  return (
    <Html>
      <Head>
        {fontPreloads.map((link, index) => (
          <link key={index} dangerouslySetInnerHTML={{ __html: link }} />
        ))}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### 2. Custom Component Rendering

```javascript
// utils/ssr-helpers.js
import { renderCttComponent } from 'ctt-design-system/ssr';

export async function renderCustomForm(formData) {
  const components = await Promise.all([
    renderCttComponent('ctt-input-field', {
      value: formData.name,
      placeholder: 'Name',
      'aria-label': 'Full name'
    }),
    renderCttComponent('ctt-textarea-field', {
      value: formData.message,
      placeholder: 'Your message',
      rows: 4
    }),
    renderCttComponent('ctt-button', {
      variant: 'primary',
      label: 'Submit',
      type: 'submit'
    })
  ]);
  
  return components.join('\n');
}
```

### 3. Error Handling

```javascript
// utils/ssr-safe-render.js
import { renderCttComponent } from 'ctt-design-system/ssr';

export async function safeRenderComponent(tagName, props, fallback = '') {
  try {
    return await renderCttComponent(tagName, props);
  } catch (error) {
    console.error('SSR rendering failed:', error);
    return fallback || `<${tagName}></${tagName}>`;
  }
}
```

## Performance Tips

1. **Critical CSS**: Always include critical CSS inline for better loading performance
2. **Font Preloading**: Use the provided font preload helpers
3. **Selective Loading**: Only load components you actually use
4. **Caching**: Cache rendered components when possible
5. **Progressive Enhancement**: Start with SSR and enhance with client-side features

## Troubleshooting

### Common Issues

1. **"Component not defined" error**: Make sure you're importing the SSR helpers correctly
2. **Styles not loading**: Ensure CSS files are properly linked in your HTML
3. **Hydration mismatch**: Check that server and client render the same content
4. **Missing @lit-labs/ssr**: Install the peer dependency

### Debug Mode

Enable debug logging:

```javascript
// Set environment variable
process.env.LIT_SSR_DEBUG = 'true';
```

## Examples

Check the `/examples` directory for complete working examples:

- `/examples/nextjs-ssr-basic` - Basic SSR setup
- `/examples/nextjs-ssr-advanced` - Advanced patterns and optimizations