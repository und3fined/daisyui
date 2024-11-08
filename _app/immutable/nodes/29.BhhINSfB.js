import{a as V,t as ee,b as a,s as e,f as ae}from"../chunks/disclose-version.CEbLymSa.js";import{h as i}from"../chunks/html.CRu8H1xh.js";import{l as ie,s as te}from"../chunks/props.CBRLfZBG.js";import{M as ne}from"../chunks/mdsvex-blog.C3NrHY3L.js";var se=ee(`<h2 id="the-manual-way"><a aria-hidden="true" tabindex="-1" href="#the-manual-way"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>The manual way</h2> <p>Setting up Tailwind CSS and PostCSS and then adding daisyUI is not that hard at all, but it can be annoying to do the same process again and again on every project.</p> <ul><li>Install Tailwind CSS and PostCSS and Autoprefixer</li> <li>Create tailwind.config.js file</li> <li>Create postcss.config.js file</li> <li>Add Tailwind CSS to postcss.config.js</li> <li>Install daisyUI</li> <li>Require daisyUI in tailwind.config.js</li></ul> <h2 id="an-easier-way-"><a aria-hidden="true" tabindex="-1" href="#an-easier-way-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>An easier way ✨</h2> <div class="embed-container rounded-box svelte-dhdbrd"><iframe title="npm init daisyui" src="https://www.youtube.com/embed/2b0KzuRZEX8" frameborder="0" allowfullscreen class="svelte-dhdbrd"></iframe></div> <p>Now, you can do all of these with a single command:</p> <pre class="language-undefined"><!></pre> <h2 id="benefits"><a aria-hidden="true" tabindex="-1" href="#benefits"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Benefits</h2> <ul><li>You don’t need to worry about the config files and missing something</li> <li>You don’t need to do the boring work of setup and config every time</li> <li>You can use it in existing projects or new projects</li> <li>You can choose to only install daisyUI</li> <li>You can choose to setup PostCSS and Autoprefixer or to Tailwind CSS CLI instead</li></ul> <h2 id="how-to-use-it"><a aria-hidden="true" tabindex="-1" href="#how-to-use-it"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to use it?</h2> <p><code>npm init daisyui</code> gives you 3 options:</p> <pre class="language-undefined"><!></pre> <p>If it’s a new project of if you didn’t have Tailwind CSS installed, you can choose the second or third option. Otherwise, you can choose the first option and it will skip the Tailwind CSS setup.</p> <h2 id="what-it-does"><a aria-hidden="true" tabindex="-1" href="#what-it-does"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What it does?</h2> <ol><li><p>If you choose the first option</p> <ul><li>Installs daisyUI</li> <li>Adds daiysUI to your tailwind.config.js file.</li></ul></li> <li><p>If you choose the second option</p> <ul><li>Installs Tailwind CSS</li> <li>Creates tailwind.config.js file (<code>npx tailwindcss init</code>) with default config</li> <li>Creates tailwind.css file with <code>@tailwind</code> directives in it</li> <li>Installs daisyUI</li> <li>Adds daiysUI to your tailwind.config.js file.</li></ul></li> <li><p>If you choose the third option</p> <ul><li>Installs Tailwind CSS</li> <li>Creates tailwind.config.js file (<code>npx tailwindcss init</code>) with default config</li> <li>Installs PostCSS and Autoprefixer</li> <li>Creates postcss.config.js file</li> <li>Adds Tailwind CSS and Autoprefixer to postcss.config.js</li> <li>Installs daisyUI</li> <li>Adds daiysUI to your tailwind.config.js file.</li></ul></li></ol> <h2 id="can-i-use-it-with-yarn-or-bun"><a aria-hidden="true" tabindex="-1" href="#can-i-use-it-with-yarn-or-bun"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Can I use it with Yarn or Bun?</h2> <p>Yes.</p> <p>How to initiate Tailwind CSS and daisyUI with Yarn:</p> <pre class="language-undefined"><!></pre> <p>How to initiate Tailwind CSS and daisyUI with Bun:</p> <pre class="language-undefined"><!></pre> <p>You can also use <code>create</code> alias instead of <code>init</code> in NPM:</p> <pre class="language-undefined"><!></pre> <h2 id="what-it-doesnt-do"><a aria-hidden="true" tabindex="-1" href="#what-it-doesnt-do"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What it doesn’t do?</h2> <ol><li><p>It doesn’t setup <code>content</code> config in <code>tailwind.config.js</code> file.
You need to do it yourself because it depends on your file structure. You can read more about it in <a href="https://tailwindcss.com/docs/content-configuration" rel="nofollow" target="_blank">Tailwind CSS docs</a>.</p></li> <li><p>It doesn’t add your CSS file into your HTML.
You need to do it yourself because it depends on your build tool or bundler.
You may want to import it like this:</p> <pre class="language-js"><!></pre> <p>Or put it in HTML like this:</p> <pre class="language-html"><!></pre></li> <li><p>It doesn’t add any scripts in <code>package.json</code> file to build your CSS file.
If you’re using a bundler, it will be handled automatically. Otherwise you may need to add a script to <code>package.json</code> file to build your CSS file.
Like this:</p> <pre class="language-undefined"><!></pre> <p>Or this:</p> <pre class="language-undefined"><!></pre></li></ol> <h2 id="source-code"><a aria-hidden="true" tabindex="-1" href="#source-code"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Source code</h2> <p>It’s open source of course and the source code is here: <a href="https://github.com/daisyui/create-daisyui/" rel="nofollow" target="_blank">https://github.com/daisyui/create-daisyui/</a></p> <p>Let me know if you have any suggestions or feedback.</p>`,1);const oe={title:"Install Tailwind CSS and PostCSS and daisyUI with one command",desc:"It can be annoying to install, setup, config and import all the dependencies. But now, you can do it with a single command.",published:!0,date:"2023-10-6",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/npm-init-daisyui.webp",tags:["Guides"]};function pe(p,h){const f=ie(h,["children","$$slots","$$events","$$legacy"]);ne(p,te(()=>f,oe,{children:(g,le)=>{var t=se(),y=ae(t),m=e(e(y,!0)),w=e(e(m,!0)),v=e(e(w,!0)),b=e(e(v,!0)),S=e(e(b,!0)),n=e(e(S,!0)),_=a(n);i(_,()=>'<code class="language-undefined">npm init daisyui</code>');var k=e(e(n,!0)),I=e(e(k,!0)),C=e(e(I,!0)),x=e(e(C,!0)),s=e(e(x,!0)),j=a(s);i(j,()=>`<code class="language-undefined">🌼 Initializing daisyUI…

? Do you want to setup Tailwind CSS first?
❯ No need. I already have Tailwind
  Yes. Setup Tailwind first
  Yes. Setup Tailwind first (with PostCSS)</code>`);var T=e(e(s,!0)),Y=e(e(T,!0)),U=e(e(Y,!0)),$=e(e(U,!0)),A=e(e($,!0)),P=e(e(A,!0)),o=e(e(P,!0)),H=a(o);i(H,()=>'<code class="language-undefined">yarn create daisyui</code>');var L=e(e(o,!0)),l=e(e(L,!0)),M=a(l);i(M,()=>'<code class="language-undefined">bun create daisyui</code>');var B=e(e(l,!0)),d=e(e(B,!0)),O=a(d);i(O,()=>'<code class="language-undefined">npm create daisyui</code>');var q=e(e(d,!0)),z=e(e(q,!0)),N=a(z),r=e(e(N,!0)),R=a(r),c=e(e(R,!0)),W=a(c);i(W,()=>'<code class="language-js"><span class="token keyword">import</span> <span class="token string">"/output.css"</span></code>');var D=e(e(c,!0)),E=e(e(D,!0)),G=a(E);i(G,()=>'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/output.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>');var K=e(e(r,!0)),X=a(K),u=e(e(X,!0)),Z=a(u);i(Z,()=>'<code class="language-undefined">npx tailwindcss -i tailwind.css -o output.css</code>');var F=e(e(u,!0)),J=e(e(F,!0)),Q=a(J);i(Q,()=>'<code class="language-undefined">npx postcss-cli tailwind.css -o output.css</code>'),V(g,t)},$$slots:{default:!0},$$legacy:!0}))}export{pe as component};
