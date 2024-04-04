import{g as n}from"./chunks/theme.xLSKlAAc.js";import{d as h,c as l,a as i,A as k,z as t,am as p,o as e}from"./chunks/framework.CmVSId67.js";const r={id:"frontmatter-title",tabindex:"-1"},F=i("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=p(`<div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You must install <a href="./../plugins/toaster#install">toaster plugin</a> before use it</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>More info about <a href="./../plugins/toaster">toaster plugin</a> in its documentation</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light tokyo-night vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> data-maz-aos</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">scale-in</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">ts</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#BB9AF7;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#0DB9D7;">useToast</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#7DCFFF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">maz-ui</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#9D7CD8;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#BB9AF7;"> toast</span><span style="--shiki-light:#D73A49;--shiki-dark:#89DDFF;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;"> useToast</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">  toast</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">info message</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">    action</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;">      func</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#BB9AF7;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;"> toast</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;">success</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">clicked</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">      text</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">Click me</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">      closeToast</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#FF9E64;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">  toast</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;">success</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">success message</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">    link</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">      href</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">/composables/use-toast</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">      text</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">Follow me</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">      closeToast</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#FF9E64;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">  toast</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;">warning</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">warning message</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">  toast</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">error message</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#F7768E;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#BA3C97;">&gt;</span></span></code></pre></div>`,4),E=JSON.parse('{"title":"useToast","description":"Vue composable for handling toaster plugin in your components","frontmatter":{"title":"useToast","description":"Vue composable for handling toaster plugin in your components"},"headers":[],"relativePath":"composables/use-toast.md","filePath":"composables/use-toast.md","lastUpdated":1712230421000}'),g={name:"composables/use-toast.md"},A=h({...g,setup(o){const s=n();return s.info("info message",{action:{func:()=>s.success("clicked"),text:"Click me",closeToast:!0}}),s.success("success message",{link:{href:"/composables/use-toast",text:"Follow me",closeToast:!0}}),s.warning("warning message"),s.error("error message"),(a,D)=>(e(),l("div",null,[i("h1",r,[k(t(a.$frontmatter.title)+" ",1),F]),i("p",null,t(a.$frontmatter.description),1),d]))}});export{E as __pageData,A as default};
