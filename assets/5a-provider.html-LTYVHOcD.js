import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-D1G0Arv-.js";const n={},l=e(`<h1 id="_5a-服务提供者" tabindex="-1"><a class="header-anchor" href="#_5a-服务提供者"><span>5A.服务提供者</span></a></h1><p>使用SpringMvc注解提供服务，并支持同WebMvc同时提供服务</p><h2 id="_5a-1-提供者约定" tabindex="-1"><a class="header-anchor" href="#_5a-1-提供者约定"><span>5A.1.提供者约定</span></a></h2><ul><li>纯接口和pojo定义契约，避免Overloading，如<code>HelloContract</code></li><li><code>SchemaId</code>和<code>path</code>均为烤串命名法，即小写连字符</li><li>包工头<code>@RestSchema</code>实现契约，如<code>HelloContractor</code></li><li>若有Overloading，以不同的path后缀区分，path全局唯一</li><li>仅使用<code>@RestSchema</code>，禁止扫描<code>@RestController</code></li></ul><h2 id="_5a-2-数据类型约定" tabindex="-1"><a class="header-anchor" href="#_5a-2-数据类型约定"><span>5A.2.数据类型约定</span></a></h2><p>数据类型，以Wings的Json约定为准，避免使用复杂类型及结构。</p><p>纯String作为body时，Request的<code>consumes</code>和Response的<code>produces</code> 都需要使用<code>MediaType.TEXT_PLAIN_VALUE</code>，这一点和Spring不同。</p><h2 id="_5a-3-契约风格约定" tabindex="-1"><a class="header-anchor" href="#_5a-3-契约风格约定"><span>5A.3.契约风格约定</span></a></h2><p>契约有Mvc和Rpc两种风格，都可以方便定位和理解。</p><h3 id="_3a-mvc风格-basepath为根路径" tabindex="-1"><a class="header-anchor" href="#_3a-mvc风格-basepath为根路径"><span>3a.Mvc风格，basePath为根路径</span></a></h3><p>同wings中Controller及RequestMapping约定一致。</p><ul><li>类上的basePath为<code>/</code>或<code>/v1</code>，即根路径或版本号</li><li>方法的<code>@RequestMapping</code>为全路径，以<code>SchemaId</code>开头</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RestSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">schemaId</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;batrider-hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> BatriderContractor</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> HelloContract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/batrider-hello/say-hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    method</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> RequestMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">GET</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> produces</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> MediaType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">TEXT_PLAIN_VALUE</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">ResponseBody</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sayHello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Batrider: Hello &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3b-rpc风格-basepath指定schemaid" tabindex="-1"><a class="header-anchor" href="#_3b-rpc风格-basepath指定schemaid"><span>3b.Rpc风格，basePath指定SchemaId</span></a></h3><p>通过IDE联想更容易定位，把SchemaId置于契约接口中，</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> HelloContract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> SchemaId </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;winx-hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sayHello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实现类，提供者直接使用契约上的SchemaId</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RestSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">schemaId</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> HelloContract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">SchemaId</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> HelloContract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">SchemaId</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> HelloContractor</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> HelloContract</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/say-hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    method</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> RequestMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">GET</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> produces</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> MediaType</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">TEXT_PLAIN_VALUE</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">ResponseBody</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sayHello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Winx: Hello &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),t=[l];function h(p,k){return a(),s("div",null,t)}const c=i(n,[["render",h],["__file","5a-provider.html.vue"]]),o=JSON.parse('{"path":"/zh/5-batrider/5a-provider.html","title":"5A.服务提供者","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"cloud-sun","category":["蝙蝠","提供者"],"description":"5A.服务提供者 使用SpringMvc注解提供服务，并支持同WebMvc同时提供服务 5A.1.提供者约定 纯接口和pojo定义契约，避免Overloading，如HelloContract SchemaId和path均为烤串命名法，即小写连字符 包工头@RestSchema实现契约，如HelloContractor 若有Overloading，以不...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/5-batrider/5a-provider.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/5-batrider/5a-provider.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"5A.服务提供者"}],["meta",{"property":"og:description","content":"5A.服务提供者 使用SpringMvc注解提供服务，并支持同WebMvc同时提供服务 5A.1.提供者约定 纯接口和pojo定义契约，避免Overloading，如HelloContract SchemaId和path均为烤串命名法，即小写连字符 包工头@RestSchema实现契约，如HelloContractor 若有Overloading，以不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5A.服务提供者\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"5A.1.提供者约定","slug":"_5a-1-提供者约定","link":"#_5a-1-提供者约定","children":[]},{"level":2,"title":"5A.2.数据类型约定","slug":"_5a-2-数据类型约定","link":"#_5a-2-数据类型约定","children":[]},{"level":2,"title":"5A.3.契约风格约定","slug":"_5a-3-契约风格约定","link":"#_5a-3-契约风格约定","children":[{"level":3,"title":"3a.Mvc风格，basePath为根路径","slug":"_3a-mvc风格-basepath为根路径","link":"#_3a-mvc风格-basepath为根路径","children":[]},{"level":3,"title":"3b.Rpc风格，basePath指定SchemaId","slug":"_3b-rpc风格-basepath指定schemaid","link":"#_3b-rpc风格-basepath指定schemaid","children":[]}]}],"git":{"createdTime":1660370231000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"zh/5-batrider/5a-provider.md","localizedDate":"2022年8月13日","autoDesc":true}');export{c as comp,o as data};
