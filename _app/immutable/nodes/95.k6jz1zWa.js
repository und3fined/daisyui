import{a as te,t as se,f as ne,s as e,b as t}from"../chunks/disclose-version.CEbLymSa.js";import{h as oe}from"../chunks/html.CRu8H1xh.js";import{l as re,s as le}from"../chunks/props.CBRLfZBG.js";import{M as ie}from"../chunks/mdsvex.PcMq7NL7.js";import{T as a}from"../chunks/Translate.DT4qjUTo.js";var pe=se('<!> <!>: <pre class="language-js"><!></pre> <h2 id=""><!>:</h2> <ul><li><h3 id="styled"><a aria-hidden="true" tabindex="-1" href="#styled"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>styled</h3> <p><code>Boolean (default: true)</code></p> <!> <!></li> <li><h3 id="themes"><a aria-hidden="true" tabindex="-1" href="#themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>themes</h3> <p><code>Boolean or array (default: false)</code></p> <!> <!> <!> <!></li> <li><h3 id="base"><a aria-hidden="true" tabindex="-1" href="#base"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>base</h3> <p><code>Boolean (default: true)</code></p> <!></li> <li><h3 id="utils"><a aria-hidden="true" tabindex="-1" href="#utils"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>utils</h3> <p><code>Boolean (default: true)</code></p> <!></li> <li><h3 id="logs"><a aria-hidden="true" tabindex="-1" href="#logs"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>logs</h3> <p><code>Boolean (default: true)</code></p> <!></li> <li><h3 id="darktheme"><a aria-hidden="true" tabindex="-1" href="#darktheme"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>darkTheme</h3> <p><code>String (default: "dark")</code></p> <!></li> <li><h3 id="prefix"><a aria-hidden="true" tabindex="-1" href="#prefix"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>prefix</h3> <p><code>String (default: "")</code></p> <!> <!> <!> <!> <!></li> <li><h3 id="themeroot"><a aria-hidden="true" tabindex="-1" href="#themeroot"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>themeRoot</h3> <p><code>String (default: ":root")</code></p> <!> <!></li></ul>',1);const ce={title:"Config",desc:"How to change the default configuration of daisyUI?",published:!0};function ke(w,I){const S=re(I,["children","$$slots","$$events","$$legacy"]);ie(w,le(()=>S,ce,{children:(U,de)=>{var s=pe(),n=ne(s);a(n,{text:"daisyUI can be configured from your <code>tailwind.config.js</code> file.",$$legacy:!0});var o=e(e(n,!0));a(o,{text:"Default config",$$legacy:!0});var r=e(e(o,!0)),C=t(r);oe(C,()=>`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>

  <span class="token comment">// add daisyUI plugin</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// daisyUI config (optional - here are the default values)</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]</span>
    <span class="token literal-property property">darkTheme</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token comment">// name of one of the included themes for dark mode</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// applies background color and foreground color for root element by default</span>
    <span class="token literal-property property">styled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// include daisyUI colors and design decisions for all components</span>
    <span class="token literal-property property">utils</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// adds responsive and modifier utility classes</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Shows info about daisyUI version and used config in the console when building your CSS</span>
    <span class="token literal-property property">themeRoot</span><span class="token operator">:</span> <span class="token string">":root"</span><span class="token punctuation">,</span> <span class="token comment">// The element that receives theme color CSS variables</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token comment">//...</span>
<span class="token punctuation">&#125;</span></code>`);var l=e(e(r,!0)),T=t(l);a(T,{text:"Config values explained",$$legacy:!0});var B=e(e(l,!0)),i=t(B),j=t(i),R=e(e(j,!0)),p=e(e(R,!0));a(p,{text:"If it's true, components will have colors and style so you won't need to design anything.",$$legacy:!0});var q=e(e(p,!0));a(q,{text:"If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton.",$$legacy:!0});var c=e(e(i,!0)),A=t(c),M=e(e(A,!0)),d=e(e(M,!0));a(d,{text:"If it's true, all themes will be included.",$$legacy:!0});var u=e(e(d,!0));a(u,{text:"If it's false, only light and dark themes will be available.",$$legacy:!0});var h=e(e(u,!0));a(h,{text:"If it's an array, only themes in the array will be included and the first theme will be the default theme.",$$legacy:!0});var W=e(e(h,!0));a(W,{text:"Read more about <a href='/docs/themes/'>themes</a>.",$$legacy:!0});var m=e(e(c,!0)),z=t(m),D=e(e(z,!0)),F=e(e(D,!0));a(F,{text:"If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added.",$$legacy:!0});var y=e(e(m,!0)),H=t(y),N=e(e(H,!0)),P=e(e(N,!0));a(P,{text:"If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added.",$$legacy:!0});var f=e(e(y,!0)),E=t(f),G=e(e(E,!0)),J=e(e(G,!0));a(J,{text:"If it's true, daisyUI shows logs in the terminal while CSS is building.",$$legacy:!0});var k=e(e(f,!0)),K=t(k),L=e(e(K,!0)),O=e(e(L,!0));a(O,{text:"Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme.",$$legacy:!0});var g=e(e(k,!0)),Q=t(g),V=e(e(Q,!0)),v=e(e(V,!0));a(v,{text:"Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes).",$$legacy:!0});var b=e(e(v,!0));a(b,{text:"For example: <code>btn</code> will become <code>prefix-btn</code>.",$$legacy:!0});var x=e(e(b,!0));a(x,{text:"If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts.",$$legacy:!0});var $=e(e(x,!0));a($,{text:"Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes.",$$legacy:!0});var X=e(e($,!0));a(X,{text:"If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>.",$$legacy:!0});var Y=e(e(g,!0)),Z=t(Y),ee=e(e(Z,!0)),_=e(e(ee,!0));a(_,{text:"Which element to attach the theme CSS variables to.",$$legacy:!0});var ae=e(e(_,!0));a(ae,{text:"In certain situations (such as embedding daisyUI in a shadow root) it may be useful to set this to e.g. <code>*</code>, so all components will have access to the required CSS variables.",$$legacy:!0}),te(U,s)},$$slots:{default:!0},$$legacy:!0}))}export{ke as component};
