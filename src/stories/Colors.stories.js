import "../styles/foundations/colors.css";
import "../styles/storybook/storybook-docs.css";

export default {
  title: 'Design System/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Color palette and tokens for the CTT Design System.',
      },
    },
  },
};

// Overview
export const Overview = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h1>Color System</h1>
      <p>Our color system provides a consistent palette that ensures accessibility, brand consistency, and visual hierarchy across all interfaces.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <h4>Primary Colors</h4>
          <p>Main brand identity colors for key interactive elements</p>
        </div>
        <div class="showcase-item">
          <h4>Secondary Colors</h4>
          <p>Supporting colors that complement the primary palette</p>
        </div>
        <div class="showcase-item">
          <h4>Neutral Colors</h4>
          <p>Foundation colors for backgrounds, borders, and subtle UI elements</p>
        </div>
        <div class="showcase-item">
          <h4>Status Colors</h4>
          <p>Semantic colors that communicate different states and feedback</p>
        </div>
      </div>
      
      <div class="usage-note">
        <h4>How to Use Colors</h4>
        <p>Each color in our system provides multiple ways to apply it:</p>
        <ul>
          <li><strong>CSS Variables:</strong> Use directly in your CSS for custom styling</li>
          <li><strong>Background Classes:</strong> Apply as background colors using <code class="class-display">.ctt-bg-*</code> classes</li>
          <li><strong>Text Classes:</strong> Apply as text colors using <code class="class-display">.ctt-text-*</code> classes</li>
          <li><strong>Border Classes:</strong> Apply as border colors using <code class="class-display">.ctt-border-*</code> classes</li>
        </ul>
      </div>
    </div>
  </div>
`;

Overview.storyName = 'Color System Overview';

// Brand Colors - Primary Scale
export const BrandPrimary = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Brand Primary Colors</h2>
      <p>Complete primary color scale from the brand palette. These are the raw color values used throughout the design system.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-brand-primary-100" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary 100</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-primary-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-primary-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-primary-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-primary-100</code>
            </div>
          </div>
          <span class="value-display">#F9CCD3</span>
          <p><strong>Usage:</strong> Light backgrounds, subtle highlights</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-primary-200" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary 200</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-primary-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-primary-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-primary-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-primary-200</code>
            </div>
          </div>
          <span class="value-display">#F299A7</span>
          <p><strong>Usage:</strong> Error light backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-primary-300" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary 300</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-primary-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-primary-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-primary-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-primary-300</code>
            </div>
          </div>
          <span class="value-display">#EC667C</span>
          <p><strong>Usage:</strong> Medium tint variations</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-primary-400" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary 400</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-primary-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-primary-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-primary-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-primary-400</code>
            </div>
          </div>
          <span class="value-display">#E53350</span>
          <p><strong>Usage:</strong> Core primary light</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-primary-500" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary 500</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-primary-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-primary-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-primary-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-primary-500</code>
            </div>
          </div>
          <span class="value-display">#DF0024</span>
          <p><strong>Usage:</strong> Core primary main, focus states</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-primary-600" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary 600</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-primary-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-primary-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-primary-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-primary-600</code>
            </div>
          </div>
          <span class="value-display">#C7001E</span>
          <p><strong>Usage:</strong> Core primary dark, selected borders</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-primary-700" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary 700</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-primary-700</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-primary-700</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-primary-700</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-primary-700</code>
            </div>
          </div>
          <span class="value-display">#B10018</span>
          <p><strong>Usage:</strong> Error main, pressed states</p>
        </div>
      </div>
    </div>
  </div>
`;

BrandPrimary.storyName = 'Brand Primary Scale';

// Core Colors - Semantic Usage
export const PrimaryColors = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Core Primary Colors</h2>
      <p>Semantic primary colors mapped from the brand palette for consistent usage across components.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-primary-light" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary Light</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-primary-light</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-primary-light</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-primary-light</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-primary-light</code>
            </div>
          </div>
          <span class="value-display">#E53350</span>
          <p><strong>Usage:</strong> Hover states, light backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-primary" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary Main</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-primary-main</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-primary</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-primary</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-primary</code>
            </div>
          </div>
          <span class="value-display">#DF0024</span>
          <p><strong>Usage:</strong> Primary buttons, links, active states</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-primary-dark" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Primary Dark</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-primary-dark</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-primary-dark</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-primary-dark</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-primary-dark</code>
            </div>
          </div>
          <span class="value-display">#C7001E</span>
          <p><strong>Usage:</strong> Pressed states, emphasis</p>
        </div>
      </div>
    </div>
  </div>
`;

PrimaryColors.storyName = 'Core Primary Colors';

// Core Secondary Colors
export const SecondaryColors = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Core Secondary Colors</h2>
      <p>Secondary colors provide contrast and hierarchy. These are semantic colors mapped from the brand secondary palette.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-secondary-light" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Secondary Light</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-secondary-light</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-secondary-light</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-secondary-light</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-secondary-light</code>
            </div>
          </div>
          <span class="value-display">#666666</span>
          <p><strong>Usage:</strong> Secondary text, medium contrast</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-secondary" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Secondary Main</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-secondary-main</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-secondary</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-secondary</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-secondary</code>
            </div>
          </div>
          <span class="value-display">#333333</span>
          <p><strong>Usage:</strong> Secondary buttons, headings, high contrast text</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-secondary-dark" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Secondary Dark</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-secondary-dark</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-secondary-dark</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-secondary-dark</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-secondary-dark</code>
            </div>
          </div>
          <span class="value-display">#000000</span>
          <p><strong>Usage:</strong> Maximum contrast text, dark backgrounds</p>
        </div>
      </div>
    </div>
  </div>
`;

SecondaryColors.storyName = 'Core Secondary Colors';

// Neutral Colors
export const NeutralColors = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Neutral Colors</h2>
      <p>Neutral colors provide the foundation for backgrounds, borders, and subtle UI elements. Complete neutral scale from white to black.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-neutral-100" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 100 (White)</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-100</code>
            </div>
          </div>
          <span class="value-display">#FFFFFF</span>
          <p><strong>Usage:</strong> Primary backgrounds, cards, inverse text</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-neutral-200" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 200</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-300); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-400);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-200</code>
            </div>
          </div>
          <span class="value-display">#F7F7F7</span>
          <p><strong>Usage:</strong> Page backgrounds, secondary surfaces</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-neutral-300" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 300</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-400);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-300</code>
            </div>
          </div>
          <span class="value-display">#F2F2F2</span>
          <p><strong>Usage:</strong> Disabled backgrounds, subtle dividers</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-neutral-400" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 400</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-400</code>
            </div>
          </div>
          <span class="value-display">#E9E5E5</span>
          <p><strong>Usage:</strong> Primary borders, dividers</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-neutral-500" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 500</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-500</code>
            </div>
          </div>
          <span class="value-display">#CCCCCC</span>
          <p><strong>Usage:</strong> Disabled text, subtle borders</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-neutral-600" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 600</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-600</code>
            </div>
          </div>
          <span class="value-display">#99999D</span>
          <p><strong>Usage:</strong> Tertiary text, placeholder text</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-neutral-700" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 700</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-700</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-700</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-700</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-700</code>
            </div>
          </div>
          <span class="value-display">#666666</span>
          <p><strong>Usage:</strong> Secondary text, medium contrast</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-neutral-800" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 800</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-800</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-800</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-800</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-800</code>
            </div>
          </div>
          <span class="value-display">#333333</span>
          <p><strong>Usage:</strong> Primary text, high contrast</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-neutral-900" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Neutral 900 (Black)</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-neutral-900</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-neutral-900</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-neutral-900</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-neutral-900</code>
            </div>
          </div>
          <span class="value-display">#000000</span>
          <p><strong>Usage:</strong> Maximum contrast, dark backgrounds</p>
        </div>
      </div>
    </div>
  </div>
`;

NeutralColors.storyName = 'Neutral Colors';

// Status Colors
export const StatusColors = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Status Colors</h2>
      <p>Semantic colors that communicate different states and feedback to users.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-success" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Success</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-success-main</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-success</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-success</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-success</code>
            </div>
          </div>
          <span class="value-display">#28A745</span>
          <p><strong>Usage:</strong> Success messages, confirmations</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-warning" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Warning</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-warning-main</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-warning</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-warning</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-warning</code>
            </div>
          </div>
          <span class="value-display">#FFC107</span>
          <p><strong>Usage:</strong> Warning messages, cautions</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-error" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Error</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-negative-main</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-error</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-error</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-error</code>
            </div>
          </div>
          <span class="value-display">#DC3545</span>
          <p><strong>Usage:</strong> Error messages, destructive actions</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-info" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Info</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-core-color-informative-main</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-info</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-info</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-info</code>
            </div>
          </div>
          <span class="value-display">#17A2B8</span>
          <p><strong>Usage:</strong> Informational messages, tips</p>
        </div>
      </div>
    </div>
  </div>
`;

StatusColors.storyName = 'Status Colors';

// Brand Colors - Secondary Scale
export const BrandSecondary = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Brand Secondary Colors</h2>
      <p>Complete secondary color scale from the brand palette. These neutral colors provide the foundation for text and UI elements.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-brand-secondary-100" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Secondary 100</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-secondary-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-secondary-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-secondary-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-secondary-100</code>
            </div>
          </div>
          <span class="value-display">#CCCCCC</span>
          <p><strong>Usage:</strong> Neutral 500, disabled text</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-secondary-200" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Secondary 200</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-secondary-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-secondary-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-secondary-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-secondary-200</code>
            </div>
          </div>
          <span class="value-display">#99999D</span>
          <p><strong>Usage:</strong> Neutral 600, borders, tertiary text</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-secondary-300" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Secondary 300</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-secondary-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-secondary-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-secondary-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-secondary-300</code>
            </div>
          </div>
          <span class="value-display">#666666</span>
          <p><strong>Usage:</strong> Secondary text, medium contrast</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-secondary-400" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Secondary 400</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-secondary-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-secondary-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-secondary-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-secondary-400</code>
            </div>
          </div>
          <span class="value-display">#333333</span>
          <p><strong>Usage:</strong> Primary text, high contrast</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-secondary-500" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Secondary 500</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-secondary-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-secondary-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-secondary-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-secondary-500</code>
            </div>
          </div>
          <span class="value-display">#000000</span>
          <p><strong>Usage:</strong> Maximum contrast, black text</p>
        </div>
      </div>
    </div>
  </div>
`;

BrandSecondary.storyName = 'Brand Secondary Scale';

// Brand Colors - Teal Scale
export const BrandTeal = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Brand Teal Colors</h2>
      <p>Complete teal color scale from the brand palette. Used for informative states and accent colors.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-brand-teal-100" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Teal 100</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-teal-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-teal-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-teal-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-teal-100</code>
            </div>
          </div>
          <span class="value-display">#CCF2F0</span>
          <p><strong>Usage:</strong> Light informative backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-teal-200" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Teal 200</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-teal-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-teal-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-teal-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-teal-200</code>
            </div>
          </div>
          <span class="value-display">#99E5E1</span>
          <p><strong>Usage:</strong> Informative light backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-teal-300" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Teal 300</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-teal-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-teal-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-teal-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-teal-300</code>
            </div>
          </div>
          <span class="value-display">#66D8D2</span>
          <p><strong>Usage:</strong> Medium teal accents</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-teal-400" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Teal 400</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-teal-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-teal-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-teal-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-teal-400</code>
            </div>
          </div>
          <span class="value-display">#33CBC3</span>
          <p><strong>Usage:</strong> Informative main color</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-teal-500" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Teal 500</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-teal-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-teal-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-teal-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-teal-500</code>
            </div>
          </div>
          <span class="value-display">#00BEB4</span>
          <p><strong>Usage:</strong> Strong teal accents</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-teal-600" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Teal 600</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-teal-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-teal-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-teal-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-teal-600</code>
            </div>
          </div>
          <span class="value-display">#009C97</span>
          <p><strong>Usage:</strong> Dark teal, pressed states</p>
        </div>
      </div>
    </div>
  </div>
`;

BrandTeal.storyName = 'Brand Teal Scale';

// Brand Colors - Green Scale
export const BrandGreen = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Brand Green Colors</h2>
      <p>Complete green color scale from the brand palette. Used for success states and positive feedback.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-brand-green-100" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Green 100</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-green-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-green-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-green-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-green-100</code>
            </div>
          </div>
          <span class="value-display">#F0F6DA</span>
          <p><strong>Usage:</strong> Light success backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-green-200" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Green 200</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-green-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-green-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-green-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-green-200</code>
            </div>
          </div>
          <span class="value-display">#E1EDB5</span>
          <p><strong>Usage:</strong> Success light backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-green-300" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Green 300</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-green-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-green-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-green-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-green-300</code>
            </div>
          </div>
          <span class="value-display">#D2E490</span>
          <p><strong>Usage:</strong> Medium green accents</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-green-400" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Green 400</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-green-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-green-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-green-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-green-400</code>
            </div>
          </div>
          <span class="value-display">#C3DB6B</span>
          <p><strong>Usage:</strong> Success main color</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-green-500" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Green 500</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-green-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-green-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-green-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-green-500</code>
            </div>
          </div>
          <span class="value-display">#B4D246</span>
          <p><strong>Usage:</strong> Strong green accents</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-green-600" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Green 600</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-green-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-green-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-green-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-green-600</code>
            </div>
          </div>
          <span class="value-display">#A5C81F</span>
          <p><strong>Usage:</strong> Dark green, pressed states</p>
        </div>
      </div>
    </div>
  </div>
`;

BrandGreen.storyName = 'Brand Green Scale';

// Brand Colors - Yellow Scale
export const BrandYellow = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Brand Yellow Colors</h2>
      <p>Complete yellow color scale from the brand palette. Used for warning states and attention-grabbing elements.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-brand-yellow-100" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Yellow 100</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-yellow-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-yellow-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-yellow-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-yellow-100</code>
            </div>
          </div>
          <span class="value-display">#FFFBCC</span>
          <p><strong>Usage:</strong> Light warning backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-yellow-200" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Yellow 200</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-yellow-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-yellow-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-yellow-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-yellow-200</code>
            </div>
          </div>
          <span class="value-display">#FFF799</span>
          <p><strong>Usage:</strong> Warning light backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-yellow-300" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Yellow 300</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-yellow-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-yellow-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-yellow-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-yellow-300</code>
            </div>
          </div>
          <span class="value-display">#FFF366</span>
          <p><strong>Usage:</strong> Medium yellow accents</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-yellow-400" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Yellow 400</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-yellow-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-yellow-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-yellow-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-yellow-400</code>
            </div>
          </div>
          <span class="value-display">#FFEF33</span>
          <p><strong>Usage:</strong> Warning main color</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-yellow-500" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Yellow 500</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-yellow-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-yellow-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-yellow-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-yellow-500</code>
            </div>
          </div>
          <span class="value-display">#FFEB00</span>
          <p><strong>Usage:</strong> Strong yellow accents</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-yellow-600" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Yellow 600</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-yellow-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-yellow-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-yellow-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-yellow-600</code>
            </div>
          </div>
          <span class="value-display">#E6D400</span>
          <p><strong>Usage:</strong> Dark yellow, pressed states</p>
        </div>
      </div>
    </div>
  </div>
`;

BrandYellow.storyName = 'Brand Yellow Scale';

// Brand Colors - Purple Scale
export const BrandPurple = () => `
  <div class="docs-container">
    <div class="docs-section">
      <h2>Brand Purple Colors</h2>
      <p>Complete purple color scale from the brand palette. Used for new features and special highlights.</p>
      
      <div class="showcase-grid">
        <div class="showcase-item">
          <div class="ctt-bg-brand-purple-100" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Purple 100</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-purple-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-purple-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-purple-100</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-purple-100</code>
            </div>
          </div>
          <span class="value-display">#E6D2E6</span>
          <p><strong>Usage:</strong> Light new feature backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-purple-200" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Purple 200</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-purple-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-purple-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-purple-200</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-purple-200</code>
            </div>
          </div>
          <span class="value-display">#CDA5CD</span>
          <p><strong>Usage:</strong> New light backgrounds</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-purple-300" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Purple 300</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-purple-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-purple-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-purple-300</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-purple-300</code>
            </div>
          </div>
          <span class="value-display">#B478B4</span>
          <p><strong>Usage:</strong> Medium purple accents</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-purple-400" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Purple 400</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-purple-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-purple-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-purple-400</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-purple-400</code>
            </div>
          </div>
          <span class="value-display">#9B4B9B</span>
          <p><strong>Usage:</strong> New main color</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-purple-500" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Purple 500</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-purple-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-purple-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-purple-500</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-purple-500</code>
            </div>
          </div>
          <span class="value-display">#821E82</span>
          <p><strong>Usage:</strong> Strong purple accents</p>
        </div>
        
        <div class="showcase-item">
          <div class="ctt-bg-brand-purple-600" style="width: 100%; height: 80px; border-radius: 6px; margin-bottom: 1rem; border: 1px solid rgba(0, 0, 0, 0.1);"></div>
          <h4>Purple 600</h4>
          <div style="margin: 0.75rem 0; padding: 0.75rem; background: var(--ctt-core-color-neutral-200); border-radius: 6px; border: 1px solid var(--ctt-core-color-neutral-300);">
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">CSS Variable:</span>
              <code class="token-display">--ctt-brand-purple-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Background Class:</span>
              <code class="class-display">.ctt-bg-brand-purple-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 0.75rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Text Class:</span>
              <code class="class-display">.ctt-text-brand-purple-600</code>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span style="font-family: 'ActoCTT', sans-serif; font-size: 0.75rem; font-weight: 600; color: var(--ctt-core-color-secondary-dark); text-transform: uppercase; letter-spacing: 0.5px;">Border Class:</span>
              <code class="class-display">.ctt-border-brand-purple-600</code>
            </div>
          </div>
          <span class="value-display">#690B69</span>
          <p><strong>Usage:</strong> Dark purple, pressed states</p>
        </div>
      </div>
    </div>
  </div>
`;

BrandPurple.storyName = 'Brand Purple Scale';