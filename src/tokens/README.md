# CTT Design System - Design Tokens

This document explains the structure and usage of the CTT Design System tokens.

## Token Architecture

Our design tokens follow a **three-tier architecture** for better maintainability and scalability:

```
Brand Tokens → Core Tokens → Base Tokens → Component Tokens
```

### 1. Brand Tokens (Primitive)
Raw color values that define your brand palette. These should rarely change.

```css
--ctt-brand-primary-500: #DF0024;
--ctt-brand-teal-400: #33CBC3;
```

### 2. Core Tokens (System)
Semantic assignments of brand tokens to system-level concepts.

```css
--ctt-core-color-primary-main: var(--ctt-brand-primary-500);
--ctt-core-color-informative-main: var(--ctt-brand-teal-400);
```

### 3. Base Tokens (Component-level)
Context-specific tokens that components use directly.

```css
--ctt-base-color-selectable-primary-unselected-default-bg: var(--ctt-core-color-primary-main);
--ctt-base-font-size-label-m: var(--ctt-core-font-size-scaled-100);
```

## Token Categories

### Colors

#### Brand Colors
- **Primary**: `--ctt-brand-primary-{100-700}`
- **Secondary**: `--ctt-brand-secondary-{100-500}`
- **Teal**: `--ctt-brand-teal-{100-600}`
- **Green**: `--ctt-brand-green-{100-600}`
- **Yellow**: `--ctt-brand-yellow-{100-600}`
- **Purple**: `--ctt-brand-purple-{100-600}`

#### Core Colors
- **Primary**: `--ctt-core-color-primary-{light|main|dark}`
- **Secondary**: `--ctt-core-color-secondary-{light|main|dark}`
- **Feedback**: `--ctt-core-color-{success|warning|negative|informative}-{light|main}`
- **Neutral**: `--ctt-core-color-neutral-{100-900}`

#### Base Colors
- **Page**: `--ctt-base-color-page-bg-{default|cloudy}`
- **Container**: `--ctt-base-color-container-{bg|border}-{default|disabled|selected}`
- **Selectable**: `--ctt-base-color-selectable-{primary|secondary}-{state}-{property}`
- **Feedback**: `--ctt-base-color-feedback-{type}-{bg|fg}-{variant}`
- **Content**: `--ctt-base-color-content-fg-{main|weak|clear|strong|brand}`

### Typography

#### Font Families
```css
--ctt-core-font-family-brand: 'ActoCTT', sans-serif;
--ctt-base-font-family-{body|title|display|label}
```

#### Font Sizes
```css
--ctt-core-font-size-scaled-{75|87|100|112|125|162|206|225|262|300|400|425}
--ctt-base-font-size-{body|title|display|label}-{s|m|l|xl}
```

#### Font Weights
```css
--ctt-core-font-weight-{250|300|400|500|700|900}
--ctt-base-font-weight-{body|title-s-m|title-l-xl|display|label}
```

### Spacing & Sizing

#### Dimensions
```css
--ctt-core-dimension-{0|25|50|75|100|150|200|250|300|350|400|450|500}
```

#### Border Radius
```css
--ctt-core-border-radius-{0|6|12|25|50|100|200|pill}
--ctt-base-border-radius-{none|xs|s|m|pill}
```

#### Border Width
```css
--ctt-core-border-width-{0-6}
--ctt-base-border-width-{selectable|container}-{none|s|m|l}
```

### Shadows
```css
--ctt-core-box-shadow-{none|xs|s|m|l}
--ctt-base-box-shadow-container-{none|xs|s|m|l}
```

## Usage Guidelines

### ✅ Do
- Use base tokens in components: `color: var(--ctt-base-color-content-fg-main)`
- Reference core tokens in base tokens: `--ctt-base-color-page-bg-default: var(--ctt-core-color-neutral-100)`
- Use brand tokens only in core tokens: `--ctt-core-color-primary-main: var(--ctt-brand-primary-500)`

### ❌ Don't
- Use brand tokens directly in components: `color: var(--ctt-brand-primary-500)` ❌
- Skip the token hierarchy: `--ctt-base-color-button-bg: #DF0024` ❌
- Create component-specific colors without base tokens

## Migration from Legacy Tokens

Legacy tokens are temporarily aliased for backward compatibility:

```css
/* Legacy */
--ctt-colors-core-primary-500

/* New */
--ctt-core-color-primary-main
```

## Component Integration

### Example: Button Component
```css
.ctt-button--primary {
  background-color: var(--ctt-base-color-selectable-primary-unselected-default-bg);
  color: var(--ctt-base-color-selectable-primary-unselected-default-fg);
  font-size: var(--ctt-base-font-size-label-m);
  padding: var(--ctt-core-dimension-75) var(--ctt-core-dimension-150);
  border-radius: var(--ctt-base-border-radius-pill);
}
```

## Benefits of This Structure

1. **Maintainability**: Change brand colors in one place, updates cascade through the system
2. **Scalability**: Easy to add new components without creating token conflicts
3. **Consistency**: Semantic naming ensures consistent usage across components
4. **Flexibility**: Multiple levels allow for fine-grained control when needed
5. **Documentation**: Clear hierarchy makes the system self-documenting

## File Structure

```
src/tokens/
├── tokens.css          # Main token definitions
├── button-tokens.css   # Button-specific tokens and styles
├── example.css         # Legacy tokens (deprecated)
└── README.md          # This documentation
```

## Next Steps

1. **Audit existing components** to use the new token structure
2. **Remove legacy token dependencies** once migration is complete
3. **Create component-specific token files** for complex components
4. **Document component token usage** in component README files