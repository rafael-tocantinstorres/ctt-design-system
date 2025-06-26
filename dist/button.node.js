import { nothing, html, LitElement, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t$1.trustedTypes,s=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$1="?"+h,n=`<${o$1}>`,r=document,l=()=>r.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r.createTreeWalker(r,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e$2+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$2)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$1)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r).importNode(i,true);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(false,true,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.3.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={CHILD:2},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=E,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===E||null==r)return this._t=void 0,this.it=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=e$1(e);

/**
 * Design Tokens - Colors
 * Core and Base color definitions for the CTT Design System
 * These match the CSS custom properties in tokens.css
 */

// Brand Colors - Raw color values (Primitive tokens)
const brandColors = {
  primary: {
    100: '#F9CCD3',
    200: '#F299A7',
    300: '#EC667C',
    400: '#E53350',
    500: '#DF0024',
    600: '#C7001E',
    700: '#B10018',
  },
  
  secondary: {
    100: '#CCCCCC',
    200: '#99999D',
    300: '#666666',
    400: '#333333',
    500: '#000000',
  },

  teal: {
    100: '#CCF2F0',
    200: '#99E5E1',
    300: '#66D8D2',
    400: '#33CBC3',
    500: '#00BEB4',
    600: '#009C97',
  },

  green: {
    100: '#F0F6DA',
    200: '#E1EDB5',
    300: '#D2E490',
    400: '#C3DB6B',
    500: '#B4D246',
    600: '#A5C81F',
  },

  yellow: {
    100: '#FFFBCC',
    200: '#FFF799',
    300: '#FFF366',
    400: '#FFEF33',
    500: '#FFEB00',
    600: '#E6D400',
  },

  purple: {
    100: '#E6D2E6',
    200: '#CDA5CD',
    300: '#B478B4',
    400: '#9B4B9B',
    500: '#821E82',
    600: '#690B69',
  },
};

// Core Colors - Semantic color assignments (System tokens)
const coreColors = {
  primary: {
    light: '#E53350', // --ctt-brand-primary-400
    main: '#DF0024',  // --ctt-brand-primary-500
    dark: '#C7001E',  // --ctt-brand-primary-600
  },
  
  secondary: {
    light: '#666666', // --ctt-brand-secondary-300
    main: '#333333',  // --ctt-brand-secondary-400
    dark: '#000000',  // --ctt-brand-secondary-500
  },

  new: {
    light: '#CDA5CD', // --ctt-brand-purple-200
    main: '#9B4B9B',  // --ctt-brand-purple-400
  },

  informative: {
    light: '#99E5E1', // --ctt-brand-teal-200
    main: '#33CBC3',  // --ctt-brand-teal-400
  },

  success: {
    light: '#E1EDB5', // --ctt-brand-green-200
    main: '#C3DB6B',  // --ctt-brand-green-400
  },

  warning: {
    light: '#FFF799', // --ctt-brand-yellow-200
    main: '#FFEF33',  // --ctt-brand-yellow-400
  },

  error: {
    light: '#F299A7', // --ctt-brand-primary-200
    main: '#B10018',  // --ctt-brand-primary-700
  },

  neutral: {
    100: '#FFFFFF',
    200: '#F7F7F7',
    300: '#F2F2F2',
    400: '#E9E5E5',
    500: '#CCCCCC', // --ctt-brand-secondary-100
    600: '#99999D', // --ctt-brand-secondary-200
    700: '#666666', // --ctt-brand-secondary-300
    800: '#333333', // --ctt-brand-secondary-400
    900: '#000000', // --ctt-brand-secondary-500
  },
};

// Base Colors - Component-level semantic colors
const baseColors = {
  // Page colors
  page: {
    bgDefault: '#FFFFFF',  // --ctt-core-color-neutral-100
    bgCloudy: '#F7F7F7',   // --ctt-core-color-neutral-200
  },

  // Container colors
  container: {
    bgDefault: '#FFFFFF',   // --ctt-core-color-neutral-100
    bgDisabled: '#F2F2F2',  // --ctt-core-color-neutral-300
    borderDefault: '#99999D', // --ctt-core-color-neutral-600
    borderDisabled: '#CCCCCC', // --ctt-core-color-neutral-500
    borderSelected: '#C7001E', // --ctt-core-color-primary-dark
  },

  // Text colors
  text: {
    primary: '#333333',   // --ctt-core-color-secondary-main
    secondary: '#666666', // --ctt-core-color-secondary-light
    tertiary: '#99999D',  // --ctt-core-color-neutral-600
    inverse: '#FFFFFF',   // --ctt-core-color-neutral-100
    disabled: '#CCCCCC',  // --ctt-core-color-neutral-500
  },

  // Background colors
  background: {
    primary: '#FFFFFF',   // --ctt-core-color-neutral-100
    secondary: '#F7F7F7', // --ctt-core-color-neutral-200
    tertiary: '#F2F2F2',  // --ctt-core-color-neutral-300
    inverse: '#000000',   // --ctt-core-color-secondary-dark
  },

  // Border colors
  border: {
    primary: '#E9E5E5',   // --ctt-core-color-neutral-400
    secondary: '#CCCCCC', // --ctt-core-color-neutral-500
    focus: '#DF0024',     // --ctt-core-color-primary-main
    error: '#B10018',     // --ctt-core-color-negative-main
    disabled: '#F2F2F2',  // --ctt-core-color-neutral-300
  },
};

// Combined export for easy access
const colors = {
  brand: brandColors,
  core: coreColors,
  base: baseColors,
};

/**
 * Design Tokens - Typography
 * Font families, sizes, weights, and line-heights for the CTT Design System
 * Aligned with CSS custom properties in tokens.css
 */

// Font Families - Aligned with CSS tokens
const fontFamilies = {
  primary: "'ActoCTT', sans-serif", // Matches --ctt-core-font-family-brand
  body: "'ActoCTT', sans-serif",    // Matches --ctt-base-font-family-body
  title: "'ActoCTT', sans-serif",   // Matches --ctt-base-font-family-title
  display: "'ActoCTT', sans-serif", // Matches --ctt-base-font-family-display
  label: "'ActoCTT', sans-serif",   // Matches --ctt-base-font-family-label
  mono: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace",
};

// Font Sizes - Aligned with CSS scaled tokens (in rem for scalability)
const fontSizes = {
  // Core scaled sizes - matching CSS tokens
  xs: '0.75rem',     // 12px - matches --ctt-core-font-size-scaled-75
  sm: '0.875rem',    // 14px - matches --ctt-core-font-size-scaled-87
  base: '1rem',      // 16px - matches --ctt-core-font-size-scaled-100
  lg: '1.125rem',    // 18px - matches --ctt-core-font-size-scaled-112
  xl: '1.25rem',     // 20px - matches --ctt-core-font-size-scaled-125
  '2xl': '1.625rem', // 26px - matches --ctt-core-font-size-scaled-162
  '3xl': '2.0625rem', // 33px - matches --ctt-core-font-size-scaled-206
  '4xl': '2.25rem',  // 36px - matches --ctt-core-font-size-scaled-225
  '5xl': '2.625rem', // 42px - matches --ctt-core-font-size-scaled-262
  '6xl': '3rem',     // 48px - matches --ctt-core-font-size-scaled-300
  '7xl': '4rem',     // 64px - matches --ctt-core-font-size-scaled-400
  '8xl': '4.25rem',  // 68px - matches --ctt-core-font-size-scaled-425
};

// Font Weights - Aligned with CSS core tokens
const fontWeights = {
  thin: 250,        // matches --ctt-core-font-weight-250
  light: 300,       // matches --ctt-core-font-weight-300
  normal: 400,      // matches --ctt-core-font-weight-400 (book)
  medium: 500,      // matches --ctt-core-font-weight-500
  bold: 700,        // matches --ctt-core-font-weight-700
  black: 900,       // matches --ctt-core-font-weight-900
};

// Line Heights - Aligned with CSS core tokens
const lineHeights = {
  xs: '100%',       // matches --ctt-core-line-height-xs (tight)
  s: '110%',        // matches --ctt-core-line-height-s (normal)
  m: '130%',        // matches --ctt-core-line-height-m (relaxed)
  l: '150%',        // matches --ctt-core-line-height-l (loose)
  // Legacy aliases for backward compatibility
  none: '100%',     // Current button line-height
  tight: '110%',
  normal: '130%',
  relaxed: '150%',
  loose: '200%',
};

// Letter Spacing - Keeping existing values for flexibility
const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// Typography Scale - Aligned with CSS base tokens
const typographyScale = {
  // Display styles - matching CSS base tokens
  displayLarge: {
    fontSize: fontSizes['8xl'],  // 68px - matches --ctt-base-font-size-display-l
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.display,
  },
  displayMedium: {
    fontSize: fontSizes['6xl'],  // 48px - matches --ctt-base-font-size-display-m
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.display,
  },
  displaySmall: {
    fontSize: fontSizes['4xl'],  // 36px - matches --ctt-base-font-size-display-s
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.display,
  },

  // Title styles - matching CSS base tokens
  titleXL: {
    fontSize: fontSizes['5xl'],  // 42px - matches --ctt-base-font-size-title-xl
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.title,
  },
  titleLarge: {
    fontSize: fontSizes['3xl'],  // 33px - matches --ctt-base-font-size-title-l
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    fontFamily: fontFamilies.title,
  },
  titleMedium: {
    fontSize: fontSizes['2xl'],  // 26px - matches --ctt-base-font-size-title-m
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.s,
    fontFamily: fontFamilies.title,
  },
  titleSmall: {
    fontSize: fontSizes.xl,      // 20px - matches --ctt-base-font-size-title-s
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.s,
    fontFamily: fontFamilies.title,
  },

  // Body text - matching CSS base tokens
  bodyLarge: {
    fontSize: fontSizes.lg,      // 18px - matches --ctt-base-font-size-body-l
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.m,
    fontFamily: fontFamilies.body,
  },
  bodyMedium: {
    fontSize: fontSizes.base,    // 16px - matches --ctt-base-font-size-body-m
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.m,
    fontFamily: fontFamilies.body,
  },
  bodySmall: {
    fontSize: fontSizes.sm,      // 14px - matches --ctt-base-font-size-body-s
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.m,
    fontFamily: fontFamilies.body,
  },

  // Label styles - matching CSS base tokens
  labelLarge: {
    fontSize: fontSizes.lg,      // 18px - matches --ctt-base-font-size-label-l
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },
  labelMedium: {
    fontSize: fontSizes.base,    // 16px - matches --ctt-base-font-size-label-m
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },
  labelSmall: {
    fontSize: fontSizes.sm,      // 14px - matches --ctt-base-font-size-label-s
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xs,
    fontFamily: fontFamilies.label,
  },

  // Component-specific - Button styles
  button: {
    large: {
      fontSize: fontSizes.lg,    // 18px - matches --ctt-base-font-size-label-l
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.xs,
      fontFamily: fontFamilies.label,
    },
    medium: {
      fontSize: fontSizes.base,  // 16px - matches --ctt-base-font-size-label-m
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.xs,
      fontFamily: fontFamilies.label,
    },
    small: {
      fontSize: fontSizes.sm,    // 14px - matches --ctt-base-font-size-label-s
      fontWeight: fontWeights.normal,
      lineHeight: lineHeights.xs,
      fontFamily: fontFamilies.label,
    },
  },

  // Legacy aliases for backward compatibility
  h1: {
    fontSize: fontSizes['5xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontSize: fontSizes['4xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontSize: fontSizes['3xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontSize: fontSizes['2xl'],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Utility
  body: {
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal,
  },
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.wide,
  },
  overline: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase',
  },
  code: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    fontFamily: fontFamilies.mono,
  },
};

// Combined export
const typography = {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  scale: typographyScale,
};

/**
 * Design Tokens - Main Export
 * Central export point for all design tokens in the CTT Design System
 */


const tokens = {
  colors,
  typography,
};

/**
 * Design Tokens Utilities
 * Helper functions for working with design tokens
 */


/**
 * Gets a token value by path (e.g., 'colors.core.primary.500')
 * @param {string} path - Dot-separated path to token
 * @param {Object} tokensObj - Tokens object (default: all tokens)
 * @returns {*} Token value or undefined
 */
function getToken(path, tokensObj = tokens) {
  return path.split('.').reduce((obj, key) => obj?.[key], tokensObj);
}

// Export commonly used token combinations
({
  primary: {
    backgroundColor: getToken('colors.core.primary.500'),
    color: getToken('colors.base.neutral.white'),
  },
  secondary: {
    color: getToken('colors.base.text.primary'),
    boxShadow: `${getToken('colors.base.shadow.md')} 0px 0px 0px 1px inset`,
  },
  typography: {
    small: tokens.typography.scale.button.small,
    medium: tokens.typography.scale.button.medium,
    large: tokens.typography.scale.button.large,
  },
});

/**
 * Typography helper functions for consistent usage
 */
const typographyHelpers = {
  // Font family helpers
  getFontFamily: (type = 'primary') => tokens.typography.fontFamilies[type] || tokens.typography.fontFamilies.primary,
  
  // Font size helpers
  getFontSize: (size = 'base') => tokens.typography.fontSizes[size] || tokens.typography.fontSizes.base,
  
  // Font weight helpers
  getFontWeight: (weight = 'normal') => tokens.typography.fontWeights[weight] || tokens.typography.fontWeights.normal,
  
  // Line height helpers
  getLineHeight: (height = 'normal') => tokens.typography.lineHeights[height] || tokens.typography.lineHeights.normal,
  
  // Typography scale helpers
  getTypographyScale: (scale = 'bodyMedium') => tokens.typography.scale[scale] || tokens.typography.scale.bodyMedium,
  
  // Button typography helpers
  getButtonTypography: (size = 'medium') => tokens.typography.scale.button[size] || tokens.typography.scale.button.medium,
};

/** Primary UI component for user interaction */
const Button = ({ 
  variant = 'primary',
  size = 'medium', 
  label, 
  onclick,
  iconLeft = false,
  iconLeftElement = '',
  iconRight = false,
  iconRightElement = '',
  borderRadius = 'pill',
  backgroundColor = null,
  disabled = false,
  ariaLabel = null
}) => {
  
  // Get typography tokens for the size
  const typography = typographyHelpers.getButtonTypography(size);
  
  // Create style object with tokens and user overrides
  const buttonStyles = {
    fontFamily: typography.fontFamily || tokens.typography.fontFamilies.label,
    fontSize: typography.fontSize,
    fontWeight: typography.fontWeight,
    lineHeight: typography.lineHeight,
    ...(backgroundColor && { backgroundColor }),
  };

  // Map borderRadius values to CSS class names
  const borderRadiusClass = {
    'pill': 'pill',
    'small': 'small-radius',
    'extraSmall': 'extra-small-radius'
  }[borderRadius] || 'pill';

  // Build CSS classes
  const classes = [
    'ctt-button',
    `ctt-button--${size}`,
    `ctt-button--${variant}`,
    `ctt-button--${borderRadiusClass}`
  ].join(' ');

  // Render button content with icons
  const renderContent = () => {
    const parts = [];
    
    if (iconLeft && iconLeftElement) {
      parts.push(html`<span class="ctt-button__icon ctt-button__icon--left">${o(iconLeftElement)}</span>`);
    }
    
    if (label) {
      parts.push(html`<span class="ctt-button__label">${label}</span>`);
    }
    
    if (iconRight && iconRightElement) {
      parts.push(html`<span class="ctt-button__icon ctt-button__icon--right">${o(iconRightElement)}</span>`);
    }
    
    return parts;
  };

  // Determine accessible name - use ariaLabel if provided, otherwise use label
  // For icon-only buttons, ariaLabel should be provided
  const accessibleName = ariaLabel || label;
  const hasVisibleLabel = label && label.trim().length > 0;

  return html`
    <button
      type="button"
      class=${classes}
      style=${styleMap(buttonStyles)}
      ?disabled=${disabled}
      aria-label=${!hasVisibleLabel && accessibleName ? accessibleName : nothing}
      @click=${onclick}
    >
      ${renderContent()}
    </button>
  `;
};

/**
 * Button Web Component
 * 
 * A web component wrapper for the Button component.
 * This allows the component to be used in any framework or vanilla HTML.
 * 
 * Usage:
 * <ctt-button variant="primary" size="medium" label="Click me"></ctt-button>
 * <ctt-button variant="secondary" size="large" label="Save" icon-left icon-left-element="<svg>...</svg>"></ctt-button>
 * <ctt-button variant="tertiary" border-radius="small" label="Cancel" disabled></ctt-button>
 */
class CttButton extends LitElement {
  static properties = {
    variant: { type: String },
    size: { type: String },
    label: { type: String },
    onclick: { type: Function },
    iconLeft: { type: Boolean, attribute: 'icon-left' },
    iconLeftElement: { type: String, attribute: 'icon-left-element' },
    iconRight: { type: Boolean, attribute: 'icon-right' },
    iconRightElement: { type: String, attribute: 'icon-right-element' },
    borderRadius: { type: String, attribute: 'border-radius' },
    backgroundColor: { type: String, attribute: 'background-color' },
    disabled: { type: Boolean },
    ariaLabel: { type: String, attribute: 'aria-label' }
  };

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'medium';
    this.label = 'Button';
    this.iconLeft = false;
    this.iconLeftElement = '';
    this.iconRight = false;
    this.iconRightElement = '';
    this.borderRadius = 'pill';
    this.disabled = false;
    this.ariaLabel = null;
  }

  render() {
    return Button({
      variant: this.variant,
      size: this.size,
      label: this.label,
      onclick: () => this._handleClick(),
      iconLeft: this.iconLeft,
      iconLeftElement: this.iconLeftElement,
      iconRight: this.iconRight,
      iconRightElement: this.iconRightElement,
      borderRadius: this.borderRadius,
      backgroundColor: this.backgroundColor,
      disabled: this.disabled,
      ariaLabel: this.ariaLabel
    });
  }

  /**
   * Handle click events and dispatch custom events
   */
  _handleClick() {
    // Don't dispatch event if button is disabled
    if (this.disabled) return;
    
    this.dispatchEvent(new CustomEvent('ctt-click', {
      bubbles: true,
      composed: true,
      detail: { 
        variant: this.variant,
        size: this.size,
        label: this.label,
        iconLeft: this.iconLeft,
        iconRight: this.iconRight,
        borderRadius: this.borderRadius,
        disabled: this.disabled
      }
    }));
  }
}

// Register custom element (browser only)
if (typeof customElements !== 'undefined' && !customElements.get('ctt-button')) {
  customElements.define('ctt-button', CttButton);
}

// Node.js/SSR entry point for Button component
// Exports the class without auto-registration and provides SSR render helper


// SSR render helper
async function renderCttButton(props = {}) {
  try {
    // Dynamic import to avoid bundling SSR in browser
    const { render } = await import('@lit-labs/ssr');
    const { collectResult } = await import('@lit-labs/ssr/lib/render-result.js');
    
    // Register the component if needed
    if (typeof customElements !== 'undefined' && !customElements.get('ctt-button')) {
      customElements.define('ctt-button', CttButton);
    }
    
    // Convert props to attributes
    const attributes = Object.entries(props)
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? key : '';
        }
        return `${key}="${String(value).replace(/"/g, '&quot;')}"`;
      })
      .filter(Boolean)
      .join(' ');
    
    const template = `<ctt-button ${attributes}></ctt-button>`;
    const ssrResult = render(template);
    const result = await collectResult(ssrResult);
    
    return result;
  } catch (error) {
    console.warn('SSR rendering failed, falling back to template:', error.message);
    // Fallback to basic template
    const attributes = Object.entries(props)
      .map(([key, value]) => {
        if (typeof value === 'boolean') {
          return value ? key : '';
        }
        return `${key}="${String(value).replace(/"/g, '&quot;')}"`;
      })
      .filter(Boolean)
      .join(' ');
    
    return `<ctt-button ${attributes}></ctt-button>`;
  }
}

export { CttButton, CttButton as default, renderCttButton };
//# sourceMappingURL=button.node.js.map
