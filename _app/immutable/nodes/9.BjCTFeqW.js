import{a as s,t as o,f as B,s as e,b as r}from"../chunks/disclose-version.CEbLymSa.js";import{m as C,g as f,t as h,u as t}from"../chunks/runtime.Bfoy81my.js";import{a as _}from"../chunks/render.BgulTz3p.js";import{i as x}from"../chunks/if.Dzn93d5D.js";import{e as E,i as O}from"../chunks/each.BESQNqYv.js";import{s as l,h as q}from"../chunks/i18n.BtEIrC4T.js";import{p as A}from"../chunks/props.CBRLfZBG.js";import{S as D}from"../chunks/SEO.B0teBIrk.js";var F=o('<div class="border-base-content/10 rounded-box flex h-96 w-full grow flex-col items-center justify-center border"><h1 class="text-base-content/30">Coming soon</h1></div>'),G=o('<figure class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"><img loading="lazy" class="border-base-content bg-base-300 rounded-btn border border-opacity-5"></figure>'),H=o('<a class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"><!> <div class="card-body"><h2 class="card-title"> </h2> <p class="text-xs opacity-60"> </p></div></a>'),J=o('<!> <!> <div class="grid justify-items-stretch gap-6"></div>',1);function X(y,w){let $=A(w,"data")(),c=C($.posts);var n=J(),p=B(n);D(p,{title:"daisyUI Blog",desc:"daisyUI blog - Updates, ideas and resources",img:"https://img.daisyui.com/images/blog.webp",$$legacy:!0});var v=e(e(p,!0));x(v,()=>f(c).length===0,i=>{var a=F();s(i,a)});var j=e(e(v,!0));E(j,9,()=>f(c),O,(i,a,L)=>{var d=H(),b=r(d);x(b,()=>t(a).thumbnail,k=>{var u=G(),m=r(u);h(()=>{l(m,"src",t(a).thumbnail),l(m,"alt",t(a).title)}),q(m),s(k,u)});var U=e(e(b,!0)),g=r(U),z=r(g),I=e(e(g,!0)),S=r(I);h(()=>{l(d,"href",`/blog/${t(a).slug}`),_(z,t(a).title),_(S,t(a).desc)}),s(i,d)}),s(y,n)}export{X as component};
