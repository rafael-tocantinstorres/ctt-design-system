import { typography, baseTypographySizes } from "../tokens/typography.js";
import "../styles/foundations/typography.css";
import "../styles/storybook/storybook-docs.css";

export default {
  title: 'Design System/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Typography system with ActoCTT font family for consistent brand experience.',
      },
    },
  },
};

// Font Family Showcase
export const FontFamily = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h1>Typography</h1>
      <p>Our typography system provides a consistent hierarchy and readable text across all screen sizes and contexts. All typography uses the ActoCTT font family to maintain brand consistency.</p>
      
      <div class="usage-note">
        <h4>How to Use Typography</h4>
        <p>Apply typography styles using foundation utility classes:</p>
        <ul>
          <li><strong>Body Text:</strong> Use <code class="class-display">.ctt-body-s</code>, <code class="class-display">.ctt-body-m</code>, or <code class="class-display">.ctt-body-l</code></li>
          <li><strong>Titles:</strong> Use <code class="class-display">.ctt-title-s</code>, <code class="class-display">.ctt-title-m</code>, <code class="class-display">.ctt-title-l</code>, or <code class="class-display">.ctt-title-xl</code></li>
          <li><strong>Display Text:</strong> Use <code class="class-display">.ctt-display-s</code>, <code class="class-display">.ctt-display-m</code>, or <code class="class-display">.ctt-display-l</code></li>
          <li><strong>Labels:</strong> Use <code class="class-display">.ctt-label-s</code>, <code class="class-display">.ctt-label-m</code>, or <code class="class-display">.ctt-label-l</code></li>
        </ul>
      </div>
    </div>

    <div class="docs-section">
      <h2>Font Family</h2>
      <div class="showcase-item" style="text-align: center;">
        <h4 style="font-family: 'ActoCTT', sans-serif; font-size: 2rem; font-weight: 700; color: var(--ctt-core-color-secondary-dark); margin: 0 0 0.5rem 0;">ActoCTT</h4>
        <p style="font-family: 'ActoCTT', sans-serif; font-size: 1rem; color: var(--ctt-core-color-secondary-main); margin: 0 0 2rem 0;">Primary brand font used throughout the design system</p>
        <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1.5rem;">
          <p style="font-family: 'ActoCTT', sans-serif; font-size: 1.125rem; line-height: 1.4; color: var(--ctt-core-color-secondary-dark); margin: 0 0 0.75rem 0;">The quick brown fox jumps over the lazy dog</p>
          <p style="font-family: 'ActoCTT', sans-serif; font-size: 1.125rem; line-height: 1.4; color: var(--ctt-core-color-secondary-dark); margin: 0 0 0.75rem 0;">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p style="font-family: 'ActoCTT', sans-serif; font-size: 1.125rem; line-height: 1.4; color: var(--ctt-core-color-secondary-dark); margin: 0 0 0.75rem 0;">abcdefghijklmnopqrstuvwxyz</p>
          <p style="font-family: 'ActoCTT', sans-serif; font-size: 1.125rem; line-height: 1.4; color: var(--ctt-core-color-secondary-dark); margin: 0;">0123456789 !@#$%^&*()</p>
        </div>
      </div>
    </div>
  </div>
`;

FontFamily.storyName = 'Font Family';

// Body Typography
export const BodyTypography = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Body Typography</h2>
      <p>Body text is used for general content and reading. It provides optimal readability across different screen sizes.</p>

      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-body-s" style="margin: 0 0 1.5rem 0; padding-left: 1rem;">
            <p>Small Body Text - The quick brown fox jumps over the lazy dog. This text demonstrates the small body typography style used for secondary content, captions, and fine print. Notice how the font size and line height create comfortable reading for smaller text.</p>
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-body-s</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.body.s} (14px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.normal}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-body-s</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <div class="ctt-body-m" style="margin: 0 0 1.5rem 0; padding-left: 1rem;">
            Medium Body Text - The quick brown fox jumps over the lazy dog. This text demonstrates the medium body typography style used for primary content and general reading. This is the most commonly used body text size.
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-body-m</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.body.m} (16px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.normal}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-body-m</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <div class="ctt-body-l" style="margin: 0 0 1.5rem 0; padding-left: 1rem;">
            Large Body Text - The quick brown fox jumps over the lazy dog. This text demonstrates the large body typography style used for emphasized content and introductory paragraphs.
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-body-l</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.body.l} (18px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.normal}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-body-l</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

BodyTypography.storyName = 'Body Typography';

// Title Typography
export const TitleTypography = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Title Typography</h2>
      <p>Titles create hierarchy and structure in content. They are available in different sizes optimized for desktop, tablet, and mobile viewports.</p>

      <div class="showcase-grid">
        <div class="showcase-item">
          <h4 class="ctt-title-s" style="margin: 0 0 1.5rem 0;">
            Small Title - The quick brown fox jumps over the lazy dog
          </h4>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-title-s</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.title.s} (20px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.bold}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-title-s</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <h3 class="ctt-title-m" style="margin: 0 0 1.5rem 0;">
            Medium Title - The quick brown fox jumps over the lazy dog
          </h3>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-title-m</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.title.m} (26px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.bold}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-title-m</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <h2 class="ctt-title-l" style="margin: 0 0 1.5rem 0;">
            Large Title - The quick brown fox jumps over the lazy dog
          </h2>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-title-l</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.title.l} (33px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.normal}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-title-l</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <h1 class="ctt-title-xl" style="margin: 0 0 1.5rem 0;">
            Extra Large Title - The quick brown fox jumps over the lazy dog
          </h1>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-title-xl</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.title.xl} (42px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.normal}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-title-xl</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

TitleTypography.storyName = 'Title Typography';

// Display Typography
export const DisplayTypography = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Display Typography</h2>
      <p>Display text is used for large, prominent headings and hero sections. These styles are designed to make a strong visual impact.</p>

      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-display-s" style="margin: 0 0 1.5rem 0;">
            Small Display - The quick brown fox jumps over the lazy dog
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-display-s</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.display.s} (48px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.bold}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-display-s</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <div class="ctt-display-m" style="margin: 0 0 1.5rem 0;">
            Medium Display - The quick brown fox jumps over the lazy dog
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-display-m</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.display.m} (60px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.bold}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-display-m</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <div class="ctt-display-l" style="margin: 0 0 1.5rem 0;">
            Large Display - The quick brown fox jumps over the lazy dog
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-display-l</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.display.l} (72px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.bold}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-display-l</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

DisplayTypography.storyName = 'Display Typography';

// Label Typography
export const LabelTypography = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Label Typography</h2>
      <p>Labels are used for form fields, buttons, and other UI elements that need clear, readable text.</p>

      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-label-s" style="margin: 0 0 1.5rem 0;">
            Small Label - Form field labels and captions
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-label-s</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.label.s} (12px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.semibold}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-label-s</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <div class="ctt-label-m" style="margin: 0 0 1.5rem 0;">
            Medium Label - Standard form labels and buttons
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-label-m</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.label.m} (14px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.semibold}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-label-m</code>
            </div>
          </div>
        </div>

        <div class="showcase-item">
          <div class="ctt-label-l" style="margin: 0 0 1.5rem 0;">
            Large Label - Prominent labels and section headers
          </div>
          <div style="background: var(--ctt-core-color-neutral-200); border-radius: 6px; padding: 1rem; font-size: 0.875rem;">
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Foundation Class:</span>
              <code class="class-display">.ctt-label-l</code>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Size:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${baseTypographySizes.label.l} (16px)</span>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.5rem; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">Font Weight:</span>
              <span style="color: var(--ctt-core-color-secondary-main);">${typography.fontWeights.semibold}</span>
            </div>
            <div style="display: flex; align-items: center; font-family: 'ActoCTT', sans-serif;">
              <span style="font-weight: 600; color: var(--ctt-core-color-secondary-dark); min-width: 120px; margin-right: 0.5rem;">CSS Token:</span>
              <code class="token-display">--ctt-base-font-size-label-l</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

LabelTypography.storyName = 'Label Typography';