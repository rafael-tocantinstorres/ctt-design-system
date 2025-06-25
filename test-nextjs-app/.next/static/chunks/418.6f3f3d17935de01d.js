"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{1418:function(t,e,i){i.r(e),i.d(e,{Button:function(){return eH},Header:function(){return ez},InputField:function(){return eT},Page:function(){return eB},RadioButton:function(){return eM},TextareaField:function(){return ek},useCttComponent:function(){return ex},useCttForm:function(){return ew}});var s=i(7294);let n=globalThis,r=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),o=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(r&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}let h=t=>new a("string"==typeof t?t:t+"",void 0,l),d=(t,...e)=>new a(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,l),c=(t,e)=>{if(r)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),s=n.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}},u=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return h(e)})(t):t,{is:p,defineProperty:g,getOwnPropertyDescriptor:m,getOwnPropertyNames:f,getOwnPropertySymbols:$,getPrototypeOf:b}=Object,_=globalThis,y=_.trustedTypes,v=y?y.emptyScript:"",A=_.reactiveElementPolyfillSupport,E=(t,e)=>t,C={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},S=(t,e)=>!p(t,e),x={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&g(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:n}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){let r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;let t=b(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){let t=this.properties;for(let e of[...f(t),...$(t)])this.createProperty(e,t[e])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(u(i));else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map;for(let e of this.constructor.elementProperties.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){let n=(void 0!==i.converter?.toAttribute?i.converter:C).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){let t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:C;this._$Em=s,this[s]=n.fromAttribute(e,t.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){let s=this.constructor,n=this[t];if(!(((i??=s.getPropertyOptions(t)).hasChanged??S)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t){let{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[E("elementProperties")]=new Map,w[E("finalized")]=new Map,A?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.0");let F=globalThis,H=F.trustedTypes,T=H?H.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+M,B=`<${z}>`,R=document,N=()=>R.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,U=t=>P(t)||"function"==typeof t?.[Symbol.iterator],O="[ 	\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,I=/>/g,V=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,q=/"/g,Z=/^(?:script|style|textarea|title)$/i,Y=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),J=Y(1),K=(Y(2),Y(3),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),X=new WeakMap,Q=R.createTreeWalker(R,129);function tt(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}let te=(t,e)=>{let i=t.length-1,s=[],n,r=2===e?"<svg>":3===e?"<math>":"",l=W;for(let e=0;e<i;e++){let i=t[e],o,a,h=-1,d=0;for(;d<i.length&&(l.lastIndex=d,null!==(a=l.exec(i)));)d=l.lastIndex,l===W?"!--"===a[1]?l=D:void 0!==a[1]?l=I:void 0!==a[2]?(Z.test(a[2])&&(n=RegExp("</"+a[2],"g")),l=V):void 0!==a[3]&&(l=V):l===V?">"===a[0]?(l=n??W,h=-1):void 0===a[1]?h=-2:(h=l.lastIndex-a[2].length,o=a[1],l=void 0===a[3]?V:'"'===a[3]?q:j):l===q||l===j?l=V:l===D||l===I?l=W:(l=V,n=void 0);let c=l===V&&t[e+1].startsWith("/>")?" ":"";r+=l===W?i+B:h>=0?(s.push(o),i.slice(0,h)+k+i.slice(h)+M+c):i+M+(-2===h?e:c)}return[tt(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class ti{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0,l=t.length-1,o=this.parts,[a,h]=te(t,e);if(this.el=ti.createElement(a,i),Q.currentNode=this.el.content,2===e||3===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Q.nextNode())&&o.length<l;){if(1===s.nodeType){if(s.hasAttributes())for(let t of s.getAttributeNames())if(t.endsWith(k)){let e=h[r++],i=s.getAttribute(t).split(M),l=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:l[2],strings:i,ctor:"."===l[1]?to:"?"===l[1]?ta:"@"===l[1]?th:tl}),s.removeAttribute(t)}else t.startsWith(M)&&(o.push({type:6,index:n}),s.removeAttribute(t));if(Z.test(s.tagName)){let t=s.textContent.split(M),e=t.length-1;if(e>0){s.textContent=H?H.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),Q.nextNode(),o.push({type:2,index:++n});s.append(t[e],N())}}}else if(8===s.nodeType){if(s.data===z)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(M,t+1));)o.push({type:7,index:n}),t+=M.length-1}}n++}}static createElement(t,e){let i=R.createElement("template");return i.innerHTML=t,i}}function ts(t,e,i=t,s){if(e===K)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl,r=L(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=ts(t,n._$AS(t,e.values),n,s)),e}class tn{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);Q.currentNode=s;let n=Q.nextNode(),r=0,l=0,o=i[0];for(;void 0!==o;){if(r===o.index){let e;2===o.type?e=new tr(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new td(n,this,t)),this._$AV.push(e),o=i[++l]}r!==o?.index&&(n=Q.nextNode(),r++)}return Q.currentNode=R,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){L(t=ts(this,t,e))?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):U(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ti.createElement(tt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new tn(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new ti(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new tr(this.O(N()),this.O(N()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){let n=this.strings,r=!1;if(void 0===n)(r=!L(t=ts(this,t,e,0))||t!==this._$AH&&t!==K)&&(this._$AH=t);else{let s,l;let o=t;for(t=n[0],s=0;s<n.length-1;s++)(l=ts(this,o[i+s],e,s))===K&&(l=this._$AH[s]),r||=!L(l)||l!==this._$AH[s],l===G?t=G:t!==G&&(t+=(l??"")+n[s+1]),this._$AH[s]=l}r&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class to extends tl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class ta extends tl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class th extends tl{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=ts(this,t,e,0)??G)===K)return;let i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class td{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ts(this,t)}}let tc=F.litHtmlPolyfillSupport;tc?.(ti,tr),(F.litHtmlVersions??=[]).push("3.3.0");let tu=(t,e,i)=>{let s=i?.renderBefore??e,n=s._$litPart$;if(void 0===n){let t=i?.renderBefore??null;s._$litPart$=n=new tr(e.insertBefore(N(),t),t,void 0,i??{})}return n._$AI(t),n},tp=globalThis;class tg extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tu(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}tg._$litElement$=!0,tg.finalized=!0,tp.litElementHydrateSupport?.({LitElement:tg});let tm=tp.litElementPolyfillSupport;tm?.({LitElement:tg}),(tp.litElementVersions??=[]).push("4.2.0");let tf=t=>(...e)=>({_$litDirective$:t,values:e});class t${constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}let tb="important",t_=" !"+tb,ty=tf(class extends t${constructor(t){if(super(t),1!==t.type||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{let s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){let{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(let t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(let t in e){let s=e[t];if(null!=s){this.ft.add(t);let e="string"==typeof s&&s.endsWith(t_);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?tb:""):i[t]=s}}return K}});class tv extends t${constructor(t){if(super(t),this.it=G,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===G||null==t)return this._t=void 0,this.it=t;if(t===K)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}tv.directiveName="unsafeHTML",tv.resultType=1;let tA=tf(tv),tE={primary:"'ActoCTT', sans-serif",body:"'ActoCTT', sans-serif",title:"'ActoCTT', sans-serif",display:"'ActoCTT', sans-serif",label:"'ActoCTT', sans-serif",mono:"'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace"},tC={xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.625rem","3xl":"2.0625rem","4xl":"2.25rem","5xl":"2.625rem","6xl":"3rem","7xl":"4rem","8xl":"4.25rem"},tS={thin:250,light:300,normal:400,medium:500,bold:700,black:900},tx={xs:"100%",s:"110%",m:"130%",l:"150%",none:"100%",tight:"110%",normal:"130%",relaxed:"150%",loose:"200%"},tw={tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},tF={displayLarge:{fontSize:tC["8xl"],fontWeight:tS.normal,lineHeight:tx.tight,fontFamily:tE.display},displayMedium:{fontSize:tC["6xl"],fontWeight:tS.normal,lineHeight:tx.tight,fontFamily:tE.display},displaySmall:{fontSize:tC["4xl"],fontWeight:tS.normal,lineHeight:tx.tight,fontFamily:tE.display},titleXL:{fontSize:tC["5xl"],fontWeight:tS.normal,lineHeight:tx.tight,fontFamily:tE.title},titleLarge:{fontSize:tC["3xl"],fontWeight:tS.normal,lineHeight:tx.tight,fontFamily:tE.title},titleMedium:{fontSize:tC["2xl"],fontWeight:tS.bold,lineHeight:tx.s,fontFamily:tE.title},titleSmall:{fontSize:tC.xl,fontWeight:tS.bold,lineHeight:tx.s,fontFamily:tE.title},bodyLarge:{fontSize:tC.lg,fontWeight:tS.normal,lineHeight:tx.m,fontFamily:tE.body},bodyMedium:{fontSize:tC.base,fontWeight:tS.normal,lineHeight:tx.m,fontFamily:tE.body},bodySmall:{fontSize:tC.sm,fontWeight:tS.normal,lineHeight:tx.m,fontFamily:tE.body},labelLarge:{fontSize:tC.lg,fontWeight:tS.medium,lineHeight:tx.xs,fontFamily:tE.label},labelMedium:{fontSize:tC.base,fontWeight:tS.medium,lineHeight:tx.xs,fontFamily:tE.label},labelSmall:{fontSize:tC.sm,fontWeight:tS.medium,lineHeight:tx.xs,fontFamily:tE.label},button:{large:{fontSize:tC.lg,fontWeight:tS.normal,lineHeight:tx.xs,fontFamily:tE.label},medium:{fontSize:tC.base,fontWeight:tS.normal,lineHeight:tx.xs,fontFamily:tE.label},small:{fontSize:tC.sm,fontWeight:tS.normal,lineHeight:tx.xs,fontFamily:tE.label}},h1:{fontSize:tC["5xl"],fontWeight:tS.bold,lineHeight:tx.tight,letterSpacing:tw.tight},h2:{fontSize:tC["4xl"],fontWeight:tS.bold,lineHeight:tx.tight,letterSpacing:tw.tight},h3:{fontSize:tC["3xl"],fontWeight:tS.bold,lineHeight:tx.normal,letterSpacing:tw.normal},h4:{fontSize:tC["2xl"],fontWeight:tS.bold,lineHeight:tx.normal,letterSpacing:tw.normal},h5:{fontSize:tC.xl,fontWeight:tS.bold,lineHeight:tx.normal,letterSpacing:tw.normal},h6:{fontSize:tC.lg,fontWeight:tS.bold,lineHeight:tx.normal,letterSpacing:tw.normal},body:{fontSize:tC.base,fontWeight:tS.normal,lineHeight:tx.normal,letterSpacing:tw.normal},caption:{fontSize:tC.xs,fontWeight:tS.normal,lineHeight:tx.tight,letterSpacing:tw.wide},overline:{fontSize:tC.xs,fontWeight:tS.medium,lineHeight:tx.tight,letterSpacing:tw.widest,textTransform:"uppercase"},code:{fontSize:tC.sm,fontWeight:tS.normal,lineHeight:tx.normal,fontFamily:tE.mono}},tH={colors:{brand:{primary:{100:"#F9CCD3",200:"#F299A7",300:"#EC667C",400:"#E53350",500:"#DF0024",600:"#C7001E",700:"#B10018"},secondary:{100:"#CCCCCC",200:"#99999D",300:"#666666",400:"#333333",500:"#000000"},teal:{100:"#CCF2F0",200:"#99E5E1",300:"#66D8D2",400:"#33CBC3",500:"#00BEB4",600:"#009C97"},green:{100:"#F0F6DA",200:"#E1EDB5",300:"#D2E490",400:"#C3DB6B",500:"#B4D246",600:"#A5C81F"},yellow:{100:"#FFFBCC",200:"#FFF799",300:"#FFF366",400:"#FFEF33",500:"#FFEB00",600:"#E6D400"},purple:{100:"#E6D2E6",200:"#CDA5CD",300:"#B478B4",400:"#9B4B9B",500:"#821E82",600:"#690B69"}},core:{primary:{light:"#E53350",main:"#DF0024",dark:"#C7001E"},secondary:{light:"#666666",main:"#333333",dark:"#000000"},new:{light:"#CDA5CD",main:"#9B4B9B"},informative:{light:"#99E5E1",main:"#33CBC3"},success:{light:"#E1EDB5",main:"#C3DB6B"},warning:{light:"#FFF799",main:"#FFEF33"},error:{light:"#F299A7",main:"#B10018"},neutral:{100:"#FFFFFF",200:"#F7F7F7",300:"#F2F2F2",400:"#E9E5E5",500:"#CCCCCC",600:"#99999D",700:"#666666",800:"#333333",900:"#000000"}},base:{page:{bgDefault:"#FFFFFF",bgCloudy:"#F7F7F7"},container:{bgDefault:"#FFFFFF",bgDisabled:"#F2F2F2",borderDefault:"#99999D",borderDisabled:"#CCCCCC",borderSelected:"#C7001E"},text:{primary:"#333333",secondary:"#666666",tertiary:"#99999D",inverse:"#FFFFFF",disabled:"#CCCCCC"},background:{primary:"#FFFFFF",secondary:"#F7F7F7",tertiary:"#F2F2F2",inverse:"#000000"},border:{primary:"#E9E5E5",secondary:"#CCCCCC",focus:"#DF0024",error:"#B10018",disabled:"#F2F2F2"}}},typography:{fontFamilies:tE,fontSizes:tC,fontWeights:tS,lineHeights:tx,letterSpacing:tw,scale:tF}};function tT(t,e=tH){return t.split(".").reduce((t,e)=>t?.[e],e)}tT("colors.core.primary.500"),tT("colors.base.neutral.white"),tT("colors.base.text.primary"),tT("colors.base.shadow.md"),tH.typography.scale.button.small,tH.typography.scale.button.medium,tH.typography.scale.button.large;let tk=(t="bodyMedium")=>tH.typography.scale[t]||tH.typography.scale.bodyMedium,tM=(t="medium")=>tH.typography.scale.button[t]||tH.typography.scale.button.medium,tz=({variant:t="primary",size:e="medium",label:i,onclick:s,iconLeft:n=!1,iconLeftElement:r="",iconRight:l=!1,iconRightElement:o="",borderRadius:a="pill",backgroundColor:h=null,disabled:d=!1,ariaLabel:c=null})=>{let u=tM(e),p={fontFamily:u.fontFamily||tH.typography.fontFamilies.label,fontSize:u.fontSize,fontWeight:u.fontWeight,lineHeight:u.lineHeight,...h&&{backgroundColor:h}},g=`ctt-button ctt-button--${e} ctt-button--${t} ctt-button--${{pill:"pill",small:"small-radius",extraSmall:"extra-small-radius"}[a]||"pill"}`,m=c||i,f=i&&i.trim().length>0;return J`
    <button
      type="button"
      class=${g}
      style=${ty(p)}
      ?disabled=${d}
      aria-label=${!f&&m?m:G}
      @click=${s}
    >
      ${(()=>{let t=[];return n&&r&&t.push(J`<span class="ctt-button__icon ctt-button__icon--left">${tA(r)}</span>`),i&&t.push(J`<span class="ctt-button__label">${i}</span>`),l&&o&&t.push(J`<span class="ctt-button__icon ctt-button__icon--right">${tA(o)}</span>`),t})()}
    </button>
  `};class tB extends tg{static properties={variant:{type:String},size:{type:String},label:{type:String},onclick:{type:Function},iconLeft:{type:Boolean,attribute:"icon-left"},iconLeftElement:{type:String,attribute:"icon-left-element"},iconRight:{type:Boolean,attribute:"icon-right"},iconRightElement:{type:String,attribute:"icon-right-element"},borderRadius:{type:String,attribute:"border-radius"},backgroundColor:{type:String,attribute:"background-color"},disabled:{type:Boolean},ariaLabel:{type:String,attribute:"aria-label"}};static styles=d`
    :host {
      display: inline-block;
    }
  `;constructor(){super(),this.variant="primary",this.size="medium",this.label="Button",this.iconLeft=!1,this.iconLeftElement="",this.iconRight=!1,this.iconRightElement="",this.borderRadius="pill",this.disabled=!1,this.ariaLabel=null}render(){return tz({variant:this.variant,size:this.size,label:this.label,onclick:()=>this._handleClick(),iconLeft:this.iconLeft,iconLeftElement:this.iconLeftElement,iconRight:this.iconRight,iconRightElement:this.iconRightElement,borderRadius:this.borderRadius,backgroundColor:this.backgroundColor,disabled:this.disabled,ariaLabel:this.ariaLabel})}_handleClick(){this.disabled||this.dispatchEvent(new CustomEvent("ctt-click",{bubbles:!0,composed:!0,detail:{variant:this.variant,size:this.size,label:this.label,iconLeft:this.iconLeft,iconRight:this.iconRight,borderRadius:this.borderRadius,disabled:this.disabled}}))}}customElements.get("ctt-button")||customElements.define("ctt-button",tB);let tR=globalThis,tN=tR.trustedTypes,tL=tN?tN.createPolicy("lit-html",{createHTML:t=>t}):void 0,tP="$lit$",tU=`lit$${Math.random().toFixed(9).slice(2)}$`,tO="?"+tU,tW=`<${tO}>`,tD=document,tI=()=>tD.createComment(""),tV=t=>null===t||"object"!=typeof t&&"function"!=typeof t,tj=Array.isArray,tq=t=>tj(t)||"function"==typeof t?.[Symbol.iterator],tZ="[ 	\n\f\r]",tY=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tJ=/-->/g,tK=/>/g,tG=RegExp(`>|${tZ}(?:([^\\s"'>=/]+)(${tZ}*=${tZ}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tX=/'/g,tQ=/"/g,t0=/^(?:script|style|textarea|title)$/i,t1=Symbol.for("lit-noChange"),t5=Symbol.for("lit-nothing"),t2=new WeakMap,t3=tD.createTreeWalker(tD,129);function t4(t,e){if(!tj(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tL?tL.createHTML(e):e}let t6=(t,e)=>{let i=t.length-1,s=[],n,r=2===e?"<svg>":3===e?"<math>":"",l=tY;for(let e=0;e<i;e++){let i=t[e],o,a,h=-1,d=0;for(;d<i.length&&(l.lastIndex=d,null!==(a=l.exec(i)));)d=l.lastIndex,l===tY?"!--"===a[1]?l=tJ:void 0!==a[1]?l=tK:void 0!==a[2]?(t0.test(a[2])&&(n=RegExp("</"+a[2],"g")),l=tG):void 0!==a[3]&&(l=tG):l===tG?">"===a[0]?(l=n??tY,h=-1):void 0===a[1]?h=-2:(h=l.lastIndex-a[2].length,o=a[1],l=void 0===a[3]?tG:'"'===a[3]?tQ:tX):l===tQ||l===tX?l=tG:l===tJ||l===tK?l=tY:(l=tG,n=void 0);let c=l===tG&&t[e+1].startsWith("/>")?" ":"";r+=l===tY?i+tW:h>=0?(s.push(o),i.slice(0,h)+tP+i.slice(h)+tU+c):i+tU+(-2===h?e:c)}return[t4(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class t9{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0,l=t.length-1,o=this.parts,[a,h]=t6(t,e);if(this.el=t9.createElement(a,i),t3.currentNode=this.el.content,2===e||3===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=t3.nextNode())&&o.length<l;){if(1===s.nodeType){if(s.hasAttributes())for(let t of s.getAttributeNames())if(t.endsWith(tP)){let e=h[r++],i=s.getAttribute(t).split(tU),l=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:l[2],strings:i,ctor:"."===l[1]?ei:"?"===l[1]?es:"@"===l[1]?en:ee}),s.removeAttribute(t)}else t.startsWith(tU)&&(o.push({type:6,index:n}),s.removeAttribute(t));if(t0.test(s.tagName)){let t=s.textContent.split(tU),e=t.length-1;if(e>0){s.textContent=tN?tN.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],tI()),t3.nextNode(),o.push({type:2,index:++n});s.append(t[e],tI())}}}else if(8===s.nodeType){if(s.data===tO)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(tU,t+1));)o.push({type:7,index:n}),t+=tU.length-1}}n++}}static createElement(t,e){let i=tD.createElement("template");return i.innerHTML=t,i}}function t7(t,e,i=t,s){if(e===t1)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl,r=tV(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=t7(t,n._$AS(t,e.values),n,s)),e}class t8{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??tD).importNode(e,!0);t3.currentNode=s;let n=t3.nextNode(),r=0,l=0,o=i[0];for(;void 0!==o;){if(r===o.index){let e;2===o.type?e=new et(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new er(n,this,t)),this._$AV.push(e),o=i[++l]}r!==o?.index&&(n=t3.nextNode(),r++)}return t3.currentNode=tD,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=t5,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){tV(t=t7(this,t,e))?t===t5||null==t||""===t?(this._$AH!==t5&&this._$AR(),this._$AH=t5):t!==this._$AH&&t!==t1&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):tq(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==t5&&tV(this._$AH)?this._$AA.nextSibling.data=t:this.T(tD.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=t9.createElement(t4(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new t8(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=t2.get(t.strings);return void 0===e&&t2.set(t.strings,e=new t9(t)),e}k(t){tj(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new et(this.O(tI()),this.O(tI()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=t5,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=t5}_$AI(t,e=this,i,s){let n=this.strings,r=!1;if(void 0===n)(r=!tV(t=t7(this,t,e,0))||t!==this._$AH&&t!==t1)&&(this._$AH=t);else{let s,l;let o=t;for(t=n[0],s=0;s<n.length-1;s++)(l=t7(this,o[i+s],e,s))===t1&&(l=this._$AH[s]),r||=!tV(l)||l!==this._$AH[s],l===t5?t=t5:t!==t5&&(t+=(l??"")+n[s+1]),this._$AH[s]=l}r&&!s&&this.j(t)}j(t){t===t5?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ei extends ee{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===t5?void 0:t}}class es extends ee{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==t5)}}class en extends ee{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=t7(this,t,e,0)??t5)===t1)return;let i=this._$AH,s=t===t5&&i!==t5||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==t5&&(i===t5||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class er{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){t7(this,t)}}let el=tR.litHtmlPolyfillSupport;el?.(t9,et),(tR.litHtmlVersions??=[]).push("3.3.0");let eo={ATTRIBUTE:1,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ea=t=>(...e)=>({_$litDirective$:t,values:e});class eh{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}let ed=ea(class extends eh{constructor(t){if(super(t),t.type!==eo.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(e)}let i=t.element.classList;for(let t of this.st)t in e||(i.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return t1}}),ec=t=>void 0===t.strings,eu={},ep=(t,e=eu)=>t._$AH=e,eg=ea(class extends eh{constructor(t){if(super(t),t.type!==eo.PROPERTY&&t.type!==eo.ATTRIBUTE&&t.type!==eo.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ec(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===t1||e===t5)return e;let i=t.element,s=t.name;if(t.type===eo.PROPERTY){if(e===i[s])return t1}else if(t.type===eo.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return t1}else if(t.type===eo.ATTRIBUTE&&i.getAttribute(s)===e+"")return t1;return ep(t),e}}),em=({label:t="",value:e="",name:i="",type:s="text",placeholder:n="",error:r=null,disabled:l=!1,required:o=!1,size:a="medium",id:h=null,onInput:d=null,onChange:c=null,onFocus:u=null,onBlur:p=null,ariaDescribedBy:g=null,...m})=>{let f=h||`ctt-input-${Math.random().toString(36).substr(2,9)}`,$=r?`${f}-error`:null,b=`${f}-label`,_=!!r,y=!!l,v=tk("bodyMedium"),A=tk("labelMedium"),E={fontFamily:v.fontFamily||tH.typography.fontFamilies.body},C={fontFamily:A.fontFamily||tH.typography.fontFamilies.label,fontSize:A.fontSize,fontWeight:A.fontWeight,lineHeight:A.lineHeight},S={fontFamily:v.fontFamily||tH.typography.fontFamilies.body,fontSize:v.fontSize,fontWeight:v.fontWeight,lineHeight:v.lineHeight},x={fontFamily:tH.typography.fontFamilies.body,fontSize:tH.typography.fontSizes.s,fontWeight:tH.typography.fontWeights.normal,lineHeight:tH.typography.lineHeights.s},w={"ctt-input-field":!0,[`ctt-input-field--${a}`]:!0,"ctt-input-field--error":_,"ctt-input-field--disabled":y},F=[g,$].filter(Boolean).join(" ")||G,H=J`
    <svg class="ctt-input-field__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
    </svg>
  `;return J`
    <div 
      class=${ed(w)}
      style=${ty(E)}
    >
      ${t?J`
        <label 
          id=${b}
          for=${f}
          class="ctt-input-field__label"
          style=${ty(C)}
        >
          ${t}${o?J`<span class="ctt-input-field__required" aria-label="required">*</span>`:G}
        </label>
      `:G}
      
      <input
        id=${f}
        name=${i}
        type=${s}
        class=${ed({"ctt-input-field__input":!0,"ctt-input-field__input--error":_,"ctt-input-field__input--disabled":y})}
        style=${ty(S)}
        .value=${eg(e)}
        placeholder=${n||G}
        ?disabled=${y}
        ?required=${o}
        aria-invalid=${_?"true":"false"}
        aria-describedby=${F}
        aria-labelledby=${t?b:G}
        @input=${d}
        @change=${c}
        @focus=${u}
        @blur=${p}
        ...=${m}
      />
      
      ${_?J`
        <div 
          id=${$}
          class="ctt-input-field__error"
          style=${ty(x)}
          role="alert"
          aria-live="polite"
        >
          ${H}
          <span class="ctt-input-field__error-text">${r}</span>
        </div>
      `:G}
    </div>
  `};class ef extends tg{static properties={label:{type:String},value:{type:String},name:{type:String},type:{type:String},placeholder:{type:String},error:{type:String},disabled:{type:Boolean},required:{type:Boolean},size:{type:String},id:{type:String}};static styles=d`
    :host {
      display: block;
    }
  `;constructor(){super(),this.label="",this.value="",this.name="",this.type="text",this.placeholder="",this.error=null,this.disabled=!1,this.required=!1,this.size="medium",this.id=null}render(){return em({label:this.label,value:this.value,name:this.name,type:this.type,placeholder:this.placeholder,error:this.error,disabled:this.disabled,required:this.required,size:this.size,id:this.id,onInput:this._handleInput.bind(this),onChange:this._handleChange.bind(this),onFocus:this._handleFocus.bind(this),onBlur:this._handleBlur.bind(this)})}_handleInput(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("ctt-input",{bubbles:!0,composed:!0,detail:{originalEvent:t,value:this.value,name:this.name}}))}_handleChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("ctt-change",{bubbles:!0,composed:!0,detail:{originalEvent:t,value:this.value,name:this.name}}))}_handleFocus(t){this.dispatchEvent(new CustomEvent("ctt-focus",{bubbles:!0,composed:!0,detail:{originalEvent:t,value:this.value,name:this.name}}))}_handleBlur(t){this.dispatchEvent(new CustomEvent("ctt-blur",{bubbles:!0,composed:!0,detail:{originalEvent:t,value:this.value,name:this.name}}))}}customElements.get("ctt-input-field")||customElements.define("ctt-input-field",ef);let e$=({label:t="",value:e="",name:i="",placeholder:s="",errorText:n=null,disabled:r=!1,required:l=!1,rows:o=4,cols:a=null,resize:h="vertical",id:d=null,onInput:c=null,onChange:u=null,onFocus:p=null,onBlur:g=null,ariaDescribedBy:m=null,...f})=>{let $=d||`ctt-textarea-${Math.random().toString(36).substr(2,9)}`,b=n?`${$}-error`:null,_=`${$}-label`,y=!!n,v=!!r,A=tk("bodyMedium"),E=tk("labelMedium"),C={fontFamily:A.fontFamily||tH.typography.fontFamilies.body},S={fontFamily:E.fontFamily||tH.typography.fontFamilies.label,fontSize:E.fontSize,fontWeight:E.fontWeight,lineHeight:E.lineHeight},x={fontFamily:A.fontFamily||tH.typography.fontFamilies.body,fontSize:A.fontSize,fontWeight:A.fontWeight,lineHeight:A.lineHeight,resize:h},w={fontFamily:tH.typography.fontFamilies.body,fontSize:tH.typography.fontSizes.s,fontWeight:tH.typography.fontWeights.normal,lineHeight:tH.typography.lineHeights.s},F=[m,b].filter(Boolean).join(" ")||G,H=J`
    <svg class="ctt-textarea-field__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
    </svg>
  `;return J`
    <div 
      class=${ed({"ctt-textarea-field":!0,"ctt-textarea-field--error":y,"ctt-textarea-field--disabled":v})}
      style=${ty(C)}
    >
      ${t?J`
        <label 
          id=${_}
          for=${$}
          class="ctt-textarea-field__label"
          style=${ty(S)}
        >
          ${t}${l?J`<span class="ctt-textarea-field__required" aria-label="required">*</span>`:G}
        </label>
      `:G}
      
      <textarea
        id=${$}
        name=${i}
        class=${ed({"ctt-textarea-field__textarea":!0,"ctt-textarea-field__textarea--error":y,"ctt-textarea-field__textarea--disabled":v})}
        style=${ty(x)}
        .value=${eg(e)}
        placeholder=${s||G}
        ?disabled=${v}
        ?required=${l}
        rows=${o}
        cols=${a||G}
        aria-invalid=${y?"true":"false"}
        aria-describedby=${F}
        aria-labelledby=${t?_:G}
        @input=${c}
        @change=${u}
        @focus=${p}
        @blur=${g}
        ...=${f}
      ></textarea>
      
      ${y?J`
        <div 
          id=${b}
          class="ctt-textarea-field__error"
          style=${ty(w)}
          role="alert"
          aria-live="polite"
        >
          ${H}
          <span class="ctt-textarea-field__error-text">${n}</span>
        </div>
      `:G}
    </div>
  `};class eb extends tg{static properties={label:{type:String},value:{type:String},placeholder:{type:String},errorText:{type:String},disabled:{type:Boolean},name:{type:String},required:{type:Boolean},rows:{type:Number},cols:{type:Number},resize:{type:String},id:{type:String}};static styles=d`
    :host {
      display: block;
      width: 100%;
    }
  `;constructor(){super(),this.label="",this.value="",this.placeholder="",this.errorText="",this.disabled=!1,this.name="",this.required=!1,this.rows=4,this.cols=null,this.resize="vertical",this.id=null}render(){return e$({label:this.label,value:this.value,name:this.name,placeholder:this.placeholder,errorText:this.errorText,disabled:this.disabled,required:this.required,rows:this.rows,cols:this.cols,resize:this.resize,id:this.id,onInput:this._onInput.bind(this),onChange:this._onChange.bind(this),onFocus:this._onFocus.bind(this),onBlur:this._onBlur.bind(this)})}_onInput(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("ctt-input",{bubbles:!0,composed:!0,detail:{originalEvent:t,value:this.value,name:this.name}}))}_onChange(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("ctt-change",{bubbles:!0,composed:!0,detail:{originalEvent:t,value:this.value,name:this.name}}))}_onFocus(t){this.dispatchEvent(new CustomEvent("ctt-focus",{bubbles:!0,composed:!0,detail:{originalEvent:t,value:this.value,name:this.name}}))}_onBlur(t){this.dispatchEvent(new CustomEvent("ctt-blur",{bubbles:!0,composed:!0,detail:{originalEvent:t,value:this.value,name:this.name}}))}}customElements.get("textarea-field")||customElements.define("textarea-field",eb);let e_=t=>t??t5,ey=({label:t="",name:e="",value:i="",checked:s=!1,disabled:n=!1,errorText:r="",onChange:l,id:o,className:a="",...h})=>{let d=ed({"ctt-radio-button":!0,"ctt-radio-button--error":!!r,"ctt-radio-button--disabled":n,[a]:!!a}),c=r?`${o||e||"radio"}-error`:void 0,u=J`
    <svg class="ctt-radio-button__error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM8.75 11.25H7.25V9.75H8.75V11.25ZM8.75 8.25H7.25V4.75H8.75V8.25Z" fill="currentColor"/>
    </svg>
  `;return J`
    <div class=${d} id=${e_(o)} ...=${h}>
      <label class="ctt-radio-button__root">
        <input
          class="ctt-radio-button__control"
          type="radio"
          name=${e}
          value=${i}
          .checked=${s}
          ?disabled=${n}
          @change=${t=>{l&&!n&&l({detail:{name:e,value:i,checked:t.target.checked,originalEvent:t}})}}
          aria-invalid=${r?"true":"false"}
          aria-describedby=${e_(c)}
        />
        <span class="ctt-radio-button__label">${t}</span>
      </label>
      ${r?J`
        <div 
          class="ctt-radio-button__error" 
          id=${c}
          role="alert"
          aria-live="polite"
        >
          ${u}
          <span class="ctt-radio-button__error-text">${r}</span>
        </div>
      `:""}
    </div>
  `};class ev extends tg{static get properties(){return{label:{type:String},name:{type:String},value:{type:String},checked:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},errorText:{type:String,attribute:"error-text"}}}static get styles(){return d`
      :host {
        display: block;
      }
    `}constructor(){super(),this.label="",this.name="",this.value="",this.checked=!1,this.disabled=!1,this.errorText=""}render(){return ey({label:this.label,name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,errorText:this.errorText,onChange:this._handleChange.bind(this),id:this.id||`radio-${this.name}-${this.value}`})}_handleChange(t){if(this.disabled){t.preventDefault();return}this.checked=t.detail.checked,this.dispatchEvent(new CustomEvent("ctt-change",{detail:{name:this.name,value:this.value,checked:this.checked,originalEvent:t.detail.originalEvent},bubbles:!0,composed:!0}))}focus(){let t=this.shadowRoot.querySelector(".ctt-radio-button__control");t&&t.focus()}get formValue(){return this.checked?this.value:null}get validity(){return!this.errorText}}customElements.define("radio-button",ev);let eA=({user:t,onLogin:e,onLogout:i,onCreateAccount:s})=>J`
  <header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${t?tz({size:"small",label:"Log out"}):J`${tz({size:"small",label:"Log in"})}
            ${tz({size:"small",label:"Sign up"})}`}
      </div>
    </div>
  </header>
`;class eE extends tg{static properties={user:{type:String}};static styles=d`
    :host {
      display: block;
    }
  `;constructor(){super(),this.user=null}render(){return eA({user:this.user,onLogin:()=>this._handleLogin(),onLogout:()=>this._handleLogout(),onCreateAccount:()=>this._handleCreateAccount()})}_handleLogin(){this.dispatchEvent(new CustomEvent("ctt-header-login",{bubbles:!0,composed:!0,detail:{user:this.user}}))}_handleLogout(){this.dispatchEvent(new CustomEvent("ctt-header-logout",{bubbles:!0,composed:!0,detail:{user:this.user}}))}_handleCreateAccount(){this.dispatchEvent(new CustomEvent("ctt-header-create-account",{bubbles:!0,composed:!0,detail:{user:this.user}}))}}customElements.get("ctt-header")||customElements.define("ctt-header",eE);let eC=({user:t,onLogin:e,onLogout:i,onCreateAccount:s})=>J`
  <article>
    ${eA({user:t,onLogin:e,onLogout:i,onCreateAccount:s})}

    <section class="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook tutorials
        </a>
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span> Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
`;class eS extends tg{static properties={user:{type:String}};static styles=d`
    :host {
      display: block;
    }
  `;constructor(){super(),this.user=null}render(){return eC({user:this.user,onLogin:()=>this._handleLogin(),onLogout:()=>this._handleLogout(),onCreateAccount:()=>this._handleCreateAccount()})}_handleLogin(){this.dispatchEvent(new CustomEvent("ctt-page-login",{bubbles:!0,composed:!0,detail:{user:this.user}}))}_handleLogout(){this.dispatchEvent(new CustomEvent("ctt-page-logout",{bubbles:!0,composed:!0,detail:{user:this.user}}))}_handleCreateAccount(){this.dispatchEvent(new CustomEvent("ctt-page-create-account",{bubbles:!0,composed:!0,detail:{user:this.user}}))}}customElements.get("ctt-page")||customElements.define("ctt-page",eS);let ex=t=>{let e=(0,s.useCallback)(()=>{if(t.current)return t.current.value},[t]);return{getValue:e,setValue:(0,s.useCallback)(e=>{t.current&&(t.current.value=e)},[t]),focus:(0,s.useCallback)(()=>{t.current&&"function"==typeof t.current.focus&&t.current.focus()},[t]),blur:(0,s.useCallback)(()=>{t.current&&"function"==typeof t.current.blur&&t.current.blur()},[t])}},ew=(t={})=>{let e=(0,s.useRef)(t),i=(0,s.useRef)(new Map),n=(0,s.useCallback)((t,s)=>{e.current={...e.current,[t]:s},(i.current.get(t)||[]).forEach(t=>t(s))},[]),r=(0,s.useCallback)(t=>e=>{n(t,e.detail?.value||e.target?.value)},[n]),l=(0,s.useCallback)(t=>e.current[t],[]);return{handleFieldChange:r,getFieldValue:l,getAllValues:(0,s.useCallback)(()=>({...e.current}),[]),updateField:n,reset:(0,s.useCallback)((i=t)=>{e.current={...i}},[t]),subscribe:(0,s.useCallback)((t,e)=>(i.current.has(t)||i.current.set(t,[]),i.current.get(t).push(e),()=>{let s=i.current.get(t);if(s){let t=s.indexOf(e);t>-1&&s.splice(t,1)}}),[])}},eF=(t,e={})=>s.forwardRef((i,n)=>{let r=(0,s.useRef)(),{children:l,...o}=i;(0,s.useEffect)(()=>{let t=r.current;if(!t)return;let e={};return Object.entries(o).forEach(([i,s])=>{if(i.startsWith("on")&&"function"==typeof s){let n=i.slice(2).toLowerCase(),r=`ctt-${n}`,l=t=>{s(t)};t.addEventListener(r,l),e[r]=l}}),()=>{Object.entries(e).forEach(([e,i])=>{t.removeEventListener(e,i)})}},[o]);let a={};return Object.entries(o).forEach(([t,i])=>{if(t.startsWith("on")&&"function"==typeof i)return;let s=(e[t]||t).replace(/([A-Z])/g,"-$1").toLowerCase();"boolean"==typeof i?i&&(a[s]=""):null!=i&&(a[s]=i)}),s.createElement(t,{...a,ref:t=>{r.current=t,n&&("function"==typeof n?n(t):n.current=t)}},l)}),eH=eF("ctt-button",{onClick:"click"}),eT=eF("ctt-input-field",{onChange:"change",onInput:"input"}),ek=eF("ctt-textarea-field",{onChange:"change",onInput:"input"}),eM=eF("ctt-radio-button",{onChange:"change"}),ez=eF("ctt-header"),eB=eF("ctt-page")}}]);