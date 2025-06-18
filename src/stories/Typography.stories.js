import { typography, baseTypographySizes } from "../tokens/typography.js";
import "./Typography.css";

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
  <div class="typography-container">
    <div class="typography-section">
      <h1>Typography</h1>
      <p>Our typography system provides a consistent hierarchy and readable text across all screen sizes and contexts. All typography uses the ActoCTT font family to maintain brand consistency.</p>
    </div>

    <div class="typography-section">
      <h2>Font Family</h2>
      <div class="font-showcase">
        <div class="font-sample">
          <h3 class="font-name">ActoCTT</h3>
          <p class="font-description">Primary brand font used throughout the design system</p>
          <div class="font-specimen">
            <p class="specimen-text">The quick brown fox jumps over the lazy dog</p>
            <p class="specimen-text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p class="specimen-text">abcdefghijklmnopqrstuvwxyz</p>
            <p class="specimen-text">0123456789 !@#$%^&*()</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

FontFamily.storyName = 'Font Family';

// Body Typography
export const BodyTypography = () => `
  <div class="typography-container">
    <div class="typography-section">
      <h2>Body Typography</h2>
      <p>Body text is used for general content and reading. It provides optimal readability across different screen sizes.</p>

      <div class="typography-showcase">
        <div class="typography-sample">
          <div class="sample-text base-typography-body-s">
            <p>Small Body Text - The quick brown fox jumps over the lazy dog. This text demonstrates the small body typography style used for secondary content, captions, and fine print. Notice how the font size and line height create comfortable reading for smaller text.</p>
          </div>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-body-s</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.body.s} (14px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Weight:</span>
              <span>${typography.fontWeights.normal}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-body-s</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <div class="sample-text base-typography-body-m">
            Medium Body Text - The quick brown fox jumps over the lazy dog. This text demonstrates the medium body typography style used for primary content and general reading. This is the most commonly used body text size.
          </div>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-body-m</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.body.m} (16px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Weight:</span>
              <span>${typography.fontWeights.normal}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-body-m</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <div class="sample-text base-typography-body-l">
            Large Body Text - The quick brown fox jumps over the lazy dog. This text demonstrates the large body typography style used for emphasized content and introductory paragraphs.
          </div>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-body-l</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.body.l} (18px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Weight:</span>
              <span>${typography.fontWeights.normal}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-body-l</code>
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
  <div class="typography-container">
    <div class="typography-section">
      <h2>Title Typography</h2>
      <p>Titles create hierarchy and structure in content. They are available in different sizes optimized for desktop, tablet, and mobile viewports.</p>

      <h3>Desktop Titles</h3>
      <div class="typography-showcase">
        <div class="typography-sample">
          <h4 class="sample-text base-typography-title-desktop-s">
            Small Desktop Title
          </h4>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-desktop-s</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.s} (20px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Weight:</span>
              <span>${typography.fontWeights.bold}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-s</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <h3 class="sample-text base-typography-title-desktop-m">
            Medium Desktop Title
          </h3>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-desktop-m</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.m} (26px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Weight:</span>
              <span>${typography.fontWeights.bold}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-m</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <h2 class="sample-text base-typography-title-desktop-l">
            Large Desktop Title
          </h2>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-desktop-l</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.l} (33px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Weight:</span>
              <span>${typography.fontWeights.normal}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-l</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <h1 class="sample-text base-typography-title-desktop-xl">
            Extra Large Desktop Title
          </h1>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-desktop-xl</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.xl} (42px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Weight:</span>
              <span>${typography.fontWeights.normal}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-xl</code>
            </div>
          </div>
        </div>
      </div>

      <h3>Tablet Titles</h3>
      <div class="responsive-note">
        <strong>Responsive Design:</strong> Tablet titles use the same font sizes as desktop but may have different responsive behavior in your application layout.
      </div>

      <div class="typography-showcase">
        <div class="typography-sample">
          <h4 class="sample-text base-typography-title-tablet-s">
            Small Tablet Title
          </h4>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-tablet-s</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.s} (20px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-s</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <h3 class="sample-text base-typography-title-tablet-m">
            Medium Tablet Title
          </h3>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-tablet-m</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.m} (26px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-m</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <h2 class="sample-text base-typography-title-tablet-l">
            Large Tablet Title
          </h2>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-tablet-l</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.l} (33px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-l</code>
            </div>
          </div>
        </div>
      </div>

      <h3>Mobile Titles</h3>
      <div class="responsive-note">
        <strong>Mobile Optimization:</strong> Mobile titles are optimized for smaller screens and touch interfaces.
      </div>

      <div class="typography-showcase">
        <div class="typography-sample">
          <h4 class="sample-text base-typography-title-mobile-s">
            Small Mobile Title
          </h4>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-mobile-s</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.s} (20px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-s</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <h3 class="sample-text base-typography-title-mobile-m">
            Medium Mobile Title
          </h3>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-title-mobile-m</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>${baseTypographySizes.title.m} (26px)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-title-m</code>
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
  <div class="typography-container">
    <div class="typography-section">
      <h2>Display Typography</h2>
      <p>Display text is used for hero sections, marketing content, and large visual impact. It's designed to grab attention and create visual hierarchy.</p>

      <div class="typography-showcase">
        <div class="typography-sample">
          <h2 class="sample-text base-typography-display-desktop-s">
            Small Display
          </h2>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-display-desktop-s</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>54px</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-display-s</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <h1 class="sample-text base-typography-display-desktop-m">
            Medium Display
          </h1>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-display-desktop-m</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>68px</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-display-m</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <h1 class="sample-text base-typography-display-desktop-l">
            Large Display
          </h1>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-display-desktop-l</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">Font Size:</span>
              <span>86px</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-display-l</code>
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
  <div class="typography-container">
    <div class="typography-section">
      <h2>Label Typography</h2>
      <p>Label text is used for form labels, captions, and small UI text elements.</p>

      <div class="typography-showcase">
        <div class="typography-sample">
          <div class="sample-text base-typography-label-s">
            Small Label Text
          </div>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-label-s</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-label-s</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <div class="sample-text base-typography-label-m">
            Medium Label Text
          </div>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-label-m</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-label-m</code>
            </div>
          </div>
        </div>

        <div class="typography-sample">
          <div class="sample-text base-typography-label-l">
            Large Label Text
          </div>
          <div class="sample-details">
            <div class="detail-row">
              <span class="detail-label">Class:</span>
              <code>.base-typography-label-l</code>
            </div>
            <div class="detail-row">
              <span class="detail-label">CSS Token:</span>
              <code>--ctt-base-font-size-label-l</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

LabelTypography.storyName = 'Label Typography';

// Usage Guidelines
export const UsageGuidelines = () => `
  <div class="typography-container">
    <div class="typography-section">
      <h2>Usage Guidelines</h2>
      
      <div class="usage-guidelines">
        <div class="guideline-item">
          <h4>Hierarchy</h4>
          <p>Use display typography for hero sections and major headings. Title typography creates content structure. Body typography is for readable content.</p>
        </div>
        
        <div class="guideline-item">
          <h4>Responsive Design</h4>
          <p>Desktop, tablet, and mobile variants ensure optimal readability across all devices. Choose the appropriate variant based on your target viewport.</p>
        </div>
        
        <div class="guideline-item">
          <h4>Accessibility</h4>
          <p>All typography maintains WCAG AA contrast ratios. Line heights are optimized for readability and accommodate users with dyslexia.</p>
        </div>
        
        <div class="guideline-item">
          <h4>Brand Consistency</h4>
          <p>ActoCTT font family is used throughout to maintain brand consistency. Fallback fonts ensure graceful degradation.</p>
        </div>
      </div>
    </div>
  </div>
`;

UsageGuidelines.storyName = 'Usage Guidelines';