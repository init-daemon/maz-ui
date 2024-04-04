import{x as a}from"./chunks/theme.xLSKlAAc.js";import{d as y,c as D,a as s,A as i,z as p,b as e,x as n,j as t,u as l,t as c,am as g,Y as r,o as d}from"./chunks/framework.CmVSId67.js";const A={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),m=s("blockquote",null,[s("p",null,[i("Can be mixed with "),s("a",{href:"./lazy-img"},"vLazyImg"),i(" directive")])],-1),C=s("h2",{id:"basic-usage",tabindex:"-1"},[i("Basic usage "),s("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic usage"'},"​")],-1),B=s("blockquote",null,[s("p",null,"Click on the photo")],-1),u={src:"https://loremflickr.com/1500/1000"},f=s("br",null,null,-1),v=s("br",null,null,-1),_=g(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light tokyo-night vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#DE5971;">MazCard</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> overflow-hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;">      src</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">https://loremflickr.com/1500/1000</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;">      v-zoom-img</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#73DACA;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">https://loremflickr.com/1500/1000</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#DE5971;">MazCard</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#DE5971;">MazBtn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> v-zoom-img</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#73DACA;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">https://loremflickr.com/1000/500</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9AA5CE;">    Show photo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#DE5971;">MazBtn</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">ts</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#0DB9D7;">vZoomImg</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">maz-ui</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><br>`,3),b={src:"https://loremflickr.com/1200/800"},z=g(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light tokyo-night vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#DE5971;">MazCard</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> overflow-hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;">      src</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">https://loremflickr.com/1200/800</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;">      v-zoom-img</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">zoomImgBinding</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#DE5971;">MazCard</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">ts</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#0DB9D7;">vZoomImg</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">maz-ui</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#9D7CD8;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#BB9AF7;"> zoomImgBinding</span><span style="--shiki-light:#D73A49;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#C0CAF5;"> vZoomImgBinding</span><span style="--shiki-light:#D73A49;--shiki-dark:#89DDFF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">    src</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">https://loremflickr.com/1200/800</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">    alt</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">alt image</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#51597D;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // will be set on the zoomed image</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">    blur</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#FF9E64;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">    scale</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#FF9E64;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">    disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#FF9E64;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span></code></pre></div><h2 id="global-install" tabindex="-1">Global install <a class="header-anchor" href="#global-install" aria-label="Permalink to &quot;Global install&quot;">​</a></h2><p><code>main.ts</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light tokyo-night vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#0DB9D7;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">vue</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#0DB9D7;">vZoomImgInstall</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#BB9AF7;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#0DB9D7;"> vZoomImgOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">maz-ui</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#9D7CD8;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#BB9AF7;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#89DDFF;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">vZoomImgInstall</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">#app</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">)</span></span></code></pre></div>`,4),x=JSON.parse('{"title":"vZoomImg","description":"vZoomImg is a Vue 3 directive to enlarge an image like a modal on click, if you have several images, you can pass them like a carousel","frontmatter":{"title":"vZoomImg","description":"vZoomImg is a Vue 3 directive to enlarge an image like a modal on click, if you have several images, you can pass them like a carousel"},"headers":[],"relativePath":"directives/zoom-img.md","filePath":"directives/zoom-img.md","lastUpdated":1712230421000}'),q={name:"directives/zoom-img.md"},P=y({...q,setup(I){const F={src:"https://loremflickr.com/1200/800",alt:"alt image",blur:!1,scale:!1,disabled:!1};return(h,Z)=>{const k=r("MazCard"),o=r("MazBtn");return d(),D("div",null,[s("h1",A,[i(p(h.$frontmatter.title)+" ",1),E]),s("p",null,p(h.$frontmatter.description),1),m,C,B,e(k,{"overflow-hidden":""},{default:n(()=>[t(s("img",u,null,512),[[l(a),{src:"https://loremflickr.com/1500/1000"}]])]),_:1}),f,v,t((d(),c(o,null,{default:n(()=>[i(" Show photo ")]),_:1})),[[l(a),{src:"https://loremflickr.com/1000/500"}]]),_,e(k,{"overflow-hidden":""},{default:n(()=>[t(s("img",b,null,512),[[l(a),F]])]),_:1}),z])}}});export{x as __pageData,P as default};
