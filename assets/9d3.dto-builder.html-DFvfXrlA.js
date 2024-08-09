import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as n}from"./app-CfZymbb7.js";const l={},e=n(`<h1 id="_9d3-读写分离dto" tabindex="-1"><a class="header-anchor" href="#_9d3-读写分离dto"><span>9D3.读写分离Dto</span></a></h1><p>在Wings中，出于数据保护和防方法泄露的目的，需要入参的Dto是只读状态。</p><h2 id="getter加builder" tabindex="-1"><a class="header-anchor" href="#getter加builder"><span>Getter加Builder</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Getter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Builder</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">ToString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">EqualsAndHashCode</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RwsDto</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Long</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最简单的分离策略，有lombok加持，代码也非常简洁。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">RwsDto</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> p </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> RwsDto</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">builder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                 .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1L</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                 .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                 .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="builder插件" tabindex="-1"><a class="header-anchor" href="#builder插件"><span>Builder插件</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Getter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">ToString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">EqualsAndHashCode</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RwsDto</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Long</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // Alt + Insert &gt; Builder</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在IDEA中使用 <a href="https://plugins.jetbrains.com/plugin/7354-innerbuilder" target="_blank" rel="noopener noreferrer">InnerBuilder</a> ，选中以下选项</p><ul><li>Generate builder methods for final fields</li><li>Generate static newBuilder()method</li><li>Rename newBuilder()to builder()</li><li>Generate builder copy constructor</li></ul><p>相比于lombok，可以在生成的builder方法中，自己动手加料。</p><h2 id="手工搞继承" tabindex="-1"><a class="header-anchor" href="#手工搞继承"><span>手工搞继承</span></a></h2><p>Builder模式，主要是final+同字段赋值的模式，以下是以继承方式的封装。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Getter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">ToString</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">EqualsAndHashCode</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RwsDto</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Long</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Builder</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> builder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Builder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Builder</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RwsDto</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Builder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">            // 初始化固定值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Builder</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Long</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            Objects</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">requireNonNull</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(id);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">            super</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Builder</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">            super</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> RwsDto</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[e];function h(k,p){return a(),s("div",null,t)}const g=i(l,[["render",h],["__file","9d3.dto-builder.html.vue"]]),B=JSON.parse('{"path":"/zh/9-example/9d.wings-boot/9d3.dto-builder.html","title":"9D3.读写分离Dto","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"road","category":["实战","手册"],"description":"9D3.读写分离Dto 在Wings中，出于数据保护和防方法泄露的目的，需要入参的Dto是只读状态。 Getter加Builder 最简单的分离策略，有lombok加持，代码也非常简洁。 Builder插件 在IDEA中使用 InnerBuilder ，选中以下选项 Generate builder methods for final fields G...","GIT_REPO_HEAD":"2024-08-09 96de5f3516d8a63745329bc5d9552c3dafb6ff53","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/9-example/9d.wings-boot/9d3.dto-builder.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/9-example/9d.wings-boot/9d3.dto-builder.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"9D3.读写分离Dto"}],["meta",{"property":"og:description","content":"9D3.读写分离Dto 在Wings中，出于数据保护和防方法泄露的目的，需要入参的Dto是只读状态。 Getter加Builder 最简单的分离策略，有lombok加持，代码也非常简洁。 Builder插件 在IDEA中使用 InnerBuilder ，选中以下选项 Generate builder methods for final fields G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9D3.读写分离Dto\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"Getter加Builder","slug":"getter加builder","link":"#getter加builder","children":[]},{"level":2,"title":"Builder插件","slug":"builder插件","link":"#builder插件","children":[]},{"level":2,"title":"手工搞继承","slug":"手工搞继承","link":"#手工搞继承","children":[]}],"git":{"createdTime":1664338613000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":0.85,"words":256},"filePathRelative":"zh/9-example/9d.wings-boot/9d3.dto-builder.md","localizedDate":"2022年9月28日","autoDesc":true}');export{g as comp,B as data};