import{s as n,c as t,a as s,A as h,z as a,am as k,o as l}from"./chunks/framework.CmVSId67.js";const m=JSON.parse('{"title":"useWindowSize","description":"This composable extends the functionality of the useWindowSize composable to manage responsive breakpoints","frontmatter":{"title":"useWindowSize","description":"This composable extends the functionality of the useWindowSize composable to manage responsive breakpoints"},"headers":[],"relativePath":"composables/use-breakpoints.md","filePath":"composables/use-breakpoints.md","lastUpdated":1712230421000}'),e={name:"composables/use-breakpoints.md"},p={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),F=k(`<h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light tokyo-night vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#9D7CD8;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#BB9AF7;"> breakpoints</span><span style="--shiki-light:#D73A49;--shiki-dark:#89DDFF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">  &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">sm</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">640px</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">  &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">md</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">768px</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">  &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">lg</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">1024px</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">  &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">xl</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">1280px</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">  &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">2xl</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">1536px</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#9D7CD8;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BB9AF7;">  isLargeScreen</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BB9AF7;">  isMediumScreen</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#BB9AF7;">  isSmallScreen</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#89DDFF;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#7AA2F7;"> useBreakpoints</span><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C0CAF5;">  breakpoints</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">  initialWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#FF9E64;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">  mediumBreakPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">md</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#73DACA;">  largeBreakPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;"> &#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECE6A;">lg</span><span style="--shiki-light:#032F62;--shiki-dark:#89DDFF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#89DDFF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9ABDF5;">})</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>More documentation to come</p></div>`,3);function d(i,D,o,g,y,c){return l(),t("div",null,[s("h1",p,[h(a(i.$frontmatter.title)+" ",1),r]),s("p",null,a(i.$frontmatter.description),1),F])}const A=n(e,[["render",d]]);export{m as __pageData,A as default};
