import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as e}from"./app-C-isWU7N.js";const t={},o=e(`<h1 id="_5a-serivce-provider" tabindex="-1"><a class="header-anchor" href="#_5a-serivce-provider"><span>5A.Serivce Provider</span></a></h1><p>Use SpringMvc annotations to provide services and cowork with WebMvc.</p><h2 id="_5a-1-provider-convention" tabindex="-1"><a class="header-anchor" href="#_5a-1-provider-convention"><span>5A.1.Provider Convention</span></a></h2><ul><li>Pure interface and pojo definition the <code>contract</code> to avoid Overloading, e.g. <code>HelloContract</code></li><li><code>SchemaId</code> and <code>path</code> are kebab-case, i.e. lowercase hyphens</li><li>Contractor <code>@RestSchema</code> implements the <code>contract</code>, such as <code>HelloContractor</code></li><li>Overloading methods are identified by different suffixes, path is globally unique</li><li>Use only <code>@RestSchema</code>, disable scanning of <code>@RestController</code></li></ul><h2 id="_5a-2-datatype-convention" tabindex="-1"><a class="header-anchor" href="#_5a-2-datatype-convention"><span>5A.2.DataType Convention</span></a></h2><p>Data type follow the Json convention of Wings to avoid using complex types and structures.</p><p>When pure String is used as body, both Request&#39;s <code>consumes</code> and Response&#39;s <code>produces</code> must use <code>MediaType.TEXT_PLAIN_VALUE</code>, which is different from Spring.</p><h2 id="_5a-3-contract-style" tabindex="-1"><a class="header-anchor" href="#_5a-3-contract-style"><span>5A.3.Contract Style</span></a></h2><p>The contract is available in both Mvc and Rpc styles, both of which can be easily located and understood.</p><h3 id="_3a-mvc-style-root-is-basepath" tabindex="-1"><a class="header-anchor" href="#_3a-mvc-style-root-is-basepath"><span>3a.Mvc Style, Root is BasePath</span></a></h3><p>Consistent with the Controller and RequestMapping conventions in wings.</p><ul><li>The basePath on the class is <code>/</code> or <code>/v1</code>, i.e. root path or version</li><li><code>@RequestMapping</code> of the method is the full path, starting with <code>SchemaId</code>.</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestSchema</span><span class="token punctuation">(</span>schemaId <span class="token operator">=</span> <span class="token string">&quot;batrider-hello&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BatriderContractor</span> <span class="token keyword">implements</span> <span class="token class-name">HelloContract</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;/batrider-hello/say-hello&quot;</span><span class="token punctuation">,</span> 
    method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> produces <span class="token operator">=</span> <span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">TEXT_PLAIN_VALUE</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Batrider: Hello &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3b-rpc-style-schemaid-is-basepath" tabindex="-1"><a class="header-anchor" href="#_3b-rpc-style-schemaid-is-basepath"><span>3b.Rpc Style, SchemaId is basePath</span></a></h3><p>Easier to locate by IDE association, placing the SchemaId in the contract interface</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">HelloContract</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token class-name">SchemaId</span> <span class="token operator">=</span> <span class="token string">&quot;winx-hello&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the implementation, the provider uses the contract&#39;s SchemaId directly</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestSchema</span><span class="token punctuation">(</span>schemaId <span class="token operator">=</span> <span class="token class-name">HelloContract<span class="token punctuation">.</span>SchemaId</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token class-name">HelloContract<span class="token punctuation">.</span>SchemaId</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloContractor</span> <span class="token keyword">implements</span> <span class="token class-name">HelloContract</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;/say-hello&quot;</span><span class="token punctuation">,</span> 
    method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> produces <span class="token operator">=</span> <span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">TEXT_PLAIN_VALUE</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Winx: Hello &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[o];function p(i,l){return a(),s("div",null,c)}const u=n(t,[["render",p],["__file","5a-provider.html.vue"]]),v=JSON.parse('{"path":"/5-batrider/5a-provider.html","title":"5A.Serivce Provider","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"cache","category":["Batrider","Provider"],"description":"5A.Serivce Provider Use SpringMvc annotations to provide services and cowork with WebMvc. 5A.1.Provider Convention Pure interface and pojo definition the contract to avoid Overl...","GIT_REPO_HEAD":"2024-03-02 09eb01b7f21b049e7db0de8f3e41119e04bb56e7","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/5-batrider/5a-provider.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/5-batrider/5a-provider.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"5A.Serivce Provider"}],["meta",{"property":"og:description","content":"5A.Serivce Provider Use SpringMvc annotations to provide services and cowork with WebMvc. 5A.1.Provider Convention Pure interface and pojo definition the contract to avoid Overl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T02:16:40.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-03-02T02:16:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5A.Serivce Provider\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-02T02:16:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"5A.1.Provider Convention","slug":"_5a-1-provider-convention","link":"#_5a-1-provider-convention","children":[]},{"level":2,"title":"5A.2.DataType Convention","slug":"_5a-2-datatype-convention","link":"#_5a-2-datatype-convention","children":[]},{"level":2,"title":"5A.3.Contract Style","slug":"_5a-3-contract-style","link":"#_5a-3-contract-style","children":[{"level":3,"title":"3a.Mvc Style, Root is BasePath","slug":"_3a-mvc-style-root-is-basepath","link":"#_3a-mvc-style-root-is-basepath","children":[]},{"level":3,"title":"3b.Rpc Style, SchemaId is basePath","slug":"_3b-rpc-style-schemaid-is-basepath","link":"#_3b-rpc-style-schemaid-is-basepath","children":[]}]}],"git":{"createdTime":1680228107000,"updatedTime":1709345800000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":0.93,"words":280},"filePathRelative":"5-batrider/5a-provider.md","localizedDate":"March 31, 2023","autoDesc":true}');export{u as comp,v as data};