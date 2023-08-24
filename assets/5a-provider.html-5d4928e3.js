import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as e}from"./app-7d38ae22.js";const t={},o=e(`<h1 id="_5a-服务提供者" tabindex="-1"><a class="header-anchor" href="#_5a-服务提供者" aria-hidden="true">#</a> 5A.服务提供者</h1><p>使用SpringMvc注解提供服务，并支持同WebMvc同时提供服务</p><h2 id="_5a-1-提供者约定" tabindex="-1"><a class="header-anchor" href="#_5a-1-提供者约定" aria-hidden="true">#</a> 5A.1.提供者约定</h2><ul><li>纯接口和pojo定义契约，避免Overloading，如<code>HelloContract</code></li><li><code>SchemaId</code>和<code>path</code>均为烤串命名法，即小写连字符</li><li>包工头<code>@RestSchema</code>实现契约，如<code>HelloContractor</code></li><li>若有Overloading，以不同的path后缀区分，path全局唯一</li><li>仅使用<code>@RestSchema</code>，禁止扫描<code>@RestController</code></li></ul><h2 id="_5a-2-数据类型约定" tabindex="-1"><a class="header-anchor" href="#_5a-2-数据类型约定" aria-hidden="true">#</a> 5A.2.数据类型约定</h2><p>数据类型，以Wings的Json约定为准，避免使用复杂类型及结构。</p><p>纯String作为body时，Request的<code>consumes</code>和Response的<code>produces</code> 都需要使用<code>MediaType.TEXT_PLAIN_VALUE</code>，这一点和Spring不同。</p><h2 id="_5a-3-契约风格约定" tabindex="-1"><a class="header-anchor" href="#_5a-3-契约风格约定" aria-hidden="true">#</a> 5A.3.契约风格约定</h2><p>契约有Mvc和Rpc两种风格，都可以方便定位和理解。</p><h3 id="mvc风格-basepath为根路径" tabindex="-1"><a class="header-anchor" href="#mvc风格-basepath为根路径" aria-hidden="true">#</a> Mvc风格，basePath为根路径</h3><p>同wings中Controller及RequestMapping约定一致。</p><ul><li>类上的basePath为<code>/</code>或<code>/v1</code>，即根路径或版本号</li><li>方法的<code>@RequestMapping</code>为全路径，以<code>SchemaId</code>开头</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestSchema</span><span class="token punctuation">(</span>schemaId <span class="token operator">=</span> <span class="token string">&quot;batrider-hello&quot;</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rpc风格-basepath指定schemaid" tabindex="-1"><a class="header-anchor" href="#rpc风格-basepath指定schemaid" aria-hidden="true">#</a> Rpc风格，basePath指定SchemaId</h3><p>通过IDE联想更容易定位，把SchemaId置于契约接口中，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">HelloContract</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token class-name">SchemaId</span> <span class="token operator">=</span> <span class="token string">&quot;winx-hello&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在实现类，提供者直接使用契约上的SchemaId</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestSchema</span><span class="token punctuation">(</span>schemaId <span class="token operator">=</span> <span class="token class-name">HelloContract<span class="token punctuation">.</span>SchemaId</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),p=[o];function c(l,i){return a(),s("div",null,p)}const r=n(t,[["render",c],["__file","5a-provider.html.vue"]]);export{r as default};
