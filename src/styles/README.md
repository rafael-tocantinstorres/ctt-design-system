# CTT Design System - Styles Organization

This directory contains the organized CSS structure for the CTT Design System, separated into clear categories for different use cases.

## Directory Structure

```
src/styles/
├── README.md                    # This file - explains the organization
├── index.css                    # Main entry point for all styles
├── foundations/                 # Core design system foundations
│   ├── tokens.css              # Design tokens (CSS custom properties)
│   ├── colors.css              # Color utility classes for developers
│   ├── typography.css          # Typography utility classes for developers
│   └── spacing.css             # Spacing utility classes for developers
├── components/                  # Component-specific styles
│   ├── button.css              # Button component styles
│   ├── icon-button.css         # Icon button component styles
│   └── [component-name].css    # Future component styles
└── storybook/                  # Storybook documentation styles (not for production)
    ├── colors-docs.css         # Color documentation styles
    ├── typography-docs.css     # Typography documentation styles
    └── [story-name]-docs.css   # Other story documentation styles
```

## Usage

### For Developers (Production Use)
Import the main styles file to get all utility classes and component styles:
```css
@import 'path/to/ctt-design-system/src/styles/index.css';
```

Or import specific categories:
```css
@import 'path/to/ctt-design-system/src/styles/foundations/colors.css';
@import 'path/to/ctt-design-system/src/styles/foundations/typography.css';
@import 'path/to/ctt-design-system/src/styles/components/button.css';
```

### For Storybook (Documentation Only)
Storybook stories should import their specific documentation styles:
```css
@import '../styles/storybook/colors-docs.css';
```

## Style Categories

### 1. Foundations (`src/styles/foundations/`)
- **tokens.css**: All CSS custom properties (design tokens)
- **colors.css**: Color utility classes (`.ctt-bg-primary`, `.ctt-text-secondary`, etc.)
- **typography.css**: Typography utility classes (`.ctt-title-l`, `.ctt-body-m`, etc.)
- **spacing.css**: Spacing utility classes (`.ctt-p-4`, `.ctt-m-2`, etc.)

### 2. Components (`src/styles/components/`)
- Component-specific styles that developers can use
- Each component has its own CSS file
- Includes all variants, sizes, and states

### 3. Storybook (`src/styles/storybook/`)
- Documentation-only styles for Storybook stories
- Visual showcase styles, color swatches, typography samples
- Should NOT be imported in production applications

## Naming Conventions

### Utility Classes (for developers)
- **Colors**: `.ctt-bg-{color}`, `.ctt-text-{color}`, `.ctt-border-{color}`
- **Typography**: `.ctt-{type}-{size}` (e.g., `.ctt-title-l`, `.ctt-body-m`)
- **Spacing**: `.ctt-p-{size}`, `.ctt-m-{size}`, `.ctt-px-{size}`, etc.

### Component Classes (for developers)
- **Base**: `.ctt-{component}` (e.g., `.ctt-button`)
- **Variants**: `.ctt-{component}--{variant}` (e.g., `.ctt-button--primary`)
- **Sizes**: `.ctt-{component}--{size}` (e.g., `.ctt-button--large`)
- **States**: `.ctt-{component}--{state}` (e.g., `.ctt-button--disabled`)

### Documentation Classes (Storybook only)
- Use descriptive names for documentation purposes
- Prefix with story context (e.g., `.colors-container`, `.typography-showcase`)