# CTT Design System - Styles Usage Guide

This guide explains how to use the newly organized CSS structure in your projects.

## Quick Start

### For New Projects (Recommended)
Import the main styles file to get all design system styles:

```css
@import 'path/to/ctt-design-system/src/styles/index.css';
```

### For Existing Projects (Backward Compatibility)
The old import path still works:

```css
@import 'path/to/ctt-design-system/src/styles.css';
```

## Selective Imports

If you only need specific parts of the design system:

### Design Tokens Only
```css
@import 'path/to/ctt-design-system/src/styles/foundations/tokens.css';
```

### Utility Classes Only
```css
@import 'path/to/ctt-design-system/src/styles/foundations/tokens.css';
@import 'path/to/ctt-design-system/src/styles/foundations/colors.css';
@import 'path/to/ctt-design-system/src/styles/foundations/typography.css';
@import 'path/to/ctt-design-system/src/styles/foundations/spacing.css';
```

### Components Only
```css
@import 'path/to/ctt-design-system/src/styles/foundations/tokens.css';
@import 'path/to/ctt-design-system/src/styles/components/button.css';
@import 'path/to/ctt-design-system/src/styles/components/icon-button.css';
```

## Usage Examples

### Using Color Utilities
```html
<!-- Background colors -->
<div class="ctt-bg-primary ctt-text-white">Primary background</div>
<div class="ctt-bg-neutral-200">Light gray background</div>

<!-- Text colors -->
<p class="ctt-text-primary">Primary text color</p>
<p class="ctt-text-muted">Muted text color</p>
<p class="ctt-text-error">Error text color</p>

<!-- Border colors -->
<div class="ctt-border ctt-border-primary">Primary border</div>
```

### Using Typography Utilities
```html
<!-- Body text -->
<p class="ctt-body-m">Medium body text</p>
<p class="ctt-body-s ctt-text-muted">Small muted text</p>

<!-- Titles -->
<h1 class="ctt-title-xl">Extra large title</h1>
<h2 class="ctt-title-l">Large title</h2>
<h3 class="ctt-title-m">Medium title</h3>

<!-- Display text -->
<h1 class="ctt-display-l">Large display text</h1>

<!-- Labels -->
<label class="ctt-label-m ctt-font-bold">Form label</label>
```

### Using Spacing Utilities
```html
<!-- Padding -->
<div class="ctt-p-4">16px padding all sides</div>
<div class="ctt-px-6 ctt-py-3">24px horizontal, 12px vertical padding</div>

<!-- Margin -->
<div class="ctt-m-2">8px margin all sides</div>
<div class="ctt-mx-auto">Centered with auto horizontal margin</div>

<!-- Gap (for flexbox/grid) -->
<div class="ctt-gap-4" style="display: flex;">16px gap between items</div>
```

### Using Button Components
```html
<!-- Basic buttons -->
<button class="ctt-button ctt-button--primary ctt-button--medium">
  Primary Button
</button>

<button class="ctt-button ctt-button--secondary ctt-button--small">
  Secondary Button
</button>

<!-- Icon buttons -->
<button class="ctt-icon-button ctt-icon-button--primary ctt-icon-button--medium">
  <svg>...</svg>
</button>

<!-- Button variants -->
<button class="ctt-button ctt-button--success ctt-button--large">
  Success Button
</button>

<button class="ctt-button ctt-button--error ctt-button--medium">
  Error Button
</button>
```

### Combining Utilities
```html
<div class="ctt-bg-white ctt-p-6 ctt-rounded-s ctt-shadow-m">
  <h2 class="ctt-title-m ctt-text-secondary-dark ctt-mb-4">Card Title</h2>
  <p class="ctt-body-m ctt-text-body ctt-mb-6">Card content with proper spacing and typography.</p>
  <button class="ctt-button ctt-button--primary ctt-button--medium">
    Action Button
  </button>
</div>
```

## CSS Custom Properties (Design Tokens)

You can also use the CSS custom properties directly:

```css
.my-custom-component {
  background-color: var(--ctt-core-color-primary-main);
  color: var(--ctt-core-color-neutral-100);
  padding: var(--ctt-core-dimension-100) var(--ctt-core-dimension-150);
  border-radius: var(--ctt-base-border-radius-s);
  font-family: var(--ctt-base-font-family-body);
  font-size: var(--ctt-base-font-size-body-m);
}
```

## File Structure Reference

```
src/styles/
├── index.css                    # Main entry point
├── foundations/                 # Core design system foundations
│   ├── tokens.css              # Design tokens (CSS custom properties)
│   ├── colors.css              # Color utility classes
│   ├── typography.css          # Typography utility classes
│   └── spacing.css             # Spacing utility classes
├── components/                  # Component-specific styles
│   ├── button.css              # Button component styles
│   └── icon-button.css         # Icon button component styles
└── storybook/                  # Storybook documentation styles (not for production)
    ├── colors-docs.css         # Color documentation styles
    └── typography-docs.css     # Typography documentation styles
```

## Important Notes

1. **Production vs Documentation**: Never import files from `src/styles/storybook/` in production applications. These are only for Storybook documentation.

2. **Utility Classes**: All utility classes use `!important` to ensure they override other styles. Use them for quick styling and prototyping.

3. **Component Classes**: Component classes (like `.ctt-button`) are designed to be the base styles for components and don't use `!important`.

4. **Naming Convention**: All classes are prefixed with `ctt-` to avoid conflicts with other CSS frameworks.

5. **Responsive Design**: Some typography utilities include responsive variants (e.g., `.ctt-title-desktop-l`, `.ctt-title-mobile-m`).

## Migration from Old Structure

If you're migrating from the old structure:

1. **Replace imports**: Change `@import './stories/Colors.css'` to `@import '../styles/storybook/colors-docs.css'` in Storybook stories.

2. **Update class names**: Some class names may have changed. Check the new utility classes in the respective CSS files.

3. **Use new entry point**: For new projects, use `@import './styles/index.css'` instead of `@import './styles.css'`.

4. **Separate concerns**: Use utility classes for quick styling and component classes for reusable components.