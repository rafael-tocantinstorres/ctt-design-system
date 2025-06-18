# CTT Design System - Design Tokens

This directory contains the design tokens for the CTT Design System, providing a centralized way to manage colors, typography, and other design values across all components.

## Structure

```
tokens/
├── colors.js           # Color tokens (core and base colors)
├── typography.js       # Typography tokens (fonts, sizes, weights, etc.)
├── index.js           # Main export file
├── utils.js           # Utility functions for working with tokens
├── tokens.css         # CSS custom properties
├── button-tokens.css  # Component-specific tokens example
└── README.md          # This file
```

## Usage

### JavaScript/Lit Components

```javascript
import { tokens } from '../tokens/index.js';
import { buttonTokens, tokenStyles } from '../tokens/utils.js';

// Direct token access
const primaryColor = tokens.colors.core.primary[500];
const fontFamily = tokens.typography.fontFamilies.primary;

// Using utility functions
const styles = tokenStyles({
  backgroundColor: 'colors.core.primary.500',
  color: 'colors.base.neutral.white',
  fontSize: 'typography.fontSizes.base'
});

// Pre-defined component tokens
const buttonStyle = buttonTokens.primary;
```

### CSS

Import the CSS tokens file:

```css
@import '../tokens/tokens.css';

.my-component {
  background-color: var(--ctt-colors-core-primary-500);
  color: var(--ctt-colors-base-neutral-white);
  font-family: var(--ctt-typography-font-families-primary);
  font-size: var(--ctt-typography-font-sizes-base);
  font-weight: var(--ctt-typography-font-weights-bold);
}
```

## Token Categories

### Colors

#### Core Colors
- **Primary**: Main brand colors (`primary.50` to `primary.900`)
- **Secondary**: Secondary brand colors
- **Success**: Success state colors
- **Warning**: Warning state colors
- **Error**: Error state colors

#### Base Colors
- **Neutral**: Grayscale colors from white to black
- **Text**: Semantic text colors (primary, secondary, tertiary, etc.)
- **Background**: Background colors for different contexts
- **Border**: Border colors for different states
- **Shadow**: Shadow colors with different opacities

### Typography

#### Font Families
- **Primary**: Main UI font (Nunito Sans)
- **Secondary**: Alternative sans-serif
- **Mono**: Monospace font for code

#### Font Sizes
Scale from `xs` (12px) to `6xl` (60px) using rem units for scalability.

#### Font Weights
From `thin` (100) to `black` (900).

#### Line Heights
From `none` (1) to `loose` (2) for different content types.

#### Typography Scale
Pre-defined combinations for common use cases:
- Headings (`h1` to `h6`)
- Body text (`bodyLarge`, `body`, `bodySmall`)
- Component-specific (`button.small`, `button.medium`, `button.large`)
- Utility (`caption`, `overline`, `code`)

## Utility Functions

### `getToken(path, tokensObj)`
Get a token value by dot-separated path:
```javascript
const primaryColor = getToken('colors.core.primary.500');
```

### `getTokenCSSVar(path, prefix)`
Get CSS custom property name:
```javascript
const cssVar = getTokenCSSVar('colors.core.primary.500'); // --ctt-colors-core-primary-500
```

### `tokenStyles(styles)`
Convert token paths to values for styleMap:
```javascript
const styles = tokenStyles({
  backgroundColor: 'colors.core.primary.500',
  fontSize: 'typography.fontSizes.base'
});
```

### `tokensToCSSProperties(obj, prefix, parent)`
Convert token object to CSS custom properties:
```javascript
const cssProps = tokensToCSSProperties(tokens.colors.core.primary, 'ctt', 'colors-core-primary');
```

## Adding New Tokens

1. **Colors**: Add to `colors.js` in the appropriate section
2. **Typography**: Add to `typography.js` in the appropriate category
3. **CSS Variables**: Update `tokens.css` with new CSS custom properties
4. **Utilities**: Update component-specific tokens in `utils.js` if needed

## Examples

### Creating a New Component with Tokens

```javascript
import { html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { tokens } from '../tokens/index.js';

export const Card = ({ title, content }) => {
  const cardStyles = {
    backgroundColor: tokens.colors.base.background.primary,
    border: `1px solid ${tokens.colors.base.border.primary}`,
    borderRadius: '8px',
    padding: '16px',
    fontFamily: tokens.typography.fontFamilies.primary,
  };

  const titleStyles = {
    fontSize: tokens.typography.fontSizes.lg,
    fontWeight: tokens.typography.fontWeights.semibold,
    color: tokens.colors.base.text.primary,
    marginBottom: '8px',
  };

  return html`
    <div style=${styleMap(cardStyles)}>
      <h3 style=${styleMap(titleStyles)}>${title}</h3>
      <p>${content}</p>
    </div>
  `;
};
```

### Using CSS Variables

```css
.card {
  background-color: var(--ctt-colors-base-background-primary);
  border: 1px solid var(--ctt-colors-base-border-primary);
  border-radius: 8px;
  padding: 16px;
  font-family: var(--ctt-typography-font-families-primary);
}

.card__title {
  font-size: var(--ctt-typography-font-sizes-lg);
  font-weight: var(--ctt-typography-font-weights-semibold);
  color: var(--ctt-colors-base-text-primary);
  margin-bottom: 8px;
}
```

## Best Practices

1. **Use semantic tokens**: Prefer `colors.base.text.primary` over `colors.core.secondary.800`
2. **Consistent naming**: Follow the established naming conventions
3. **Scalable units**: Use rem for font sizes and consistent spacing
4. **Component tokens**: Create component-specific token combinations for reusability
5. **CSS Custom Properties**: Use CSS variables for better performance and theme switching
6. **Documentation**: Document any new tokens or patterns you add