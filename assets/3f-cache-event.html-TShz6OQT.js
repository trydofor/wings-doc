import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as o,b as n,e as l,d as i,f as a}from"./app-MgoxHheT.js";const p={},r=a(`<h1 id="_3f-multiple-caching-and-event" tabindex="-1"><a class="header-anchor" href="#_3f-multiple-caching-and-event"><span>3F.Multiple Caching and Event</span></a></h1><p>Based on Cache2k and Hazelcast, Wings provides hierarchical caching, local and distributed caching, and distributed objects.</p><h2 id="_3f-1-multilevel-caching" tabindex="-1"><a class="header-anchor" href="#_3f-1-multilevel-caching"><span>3F.1.Multilevel Caching</span></a></h2><p>By default, two CacheManagers, Memory and Server, with the following names and implementations, are provided under the JCache convention,</p><ul><li>MemoryCacheManager - Cache2kCacheManager</li><li>ServerCacheManager - such as hazelcast/redis and other</li></ul><p>Because the CacheManager has been injected, it will make SpringBoot&#39;s auto configuration does not meet the conditions and invalid.</p><blockquote><p>If you have not defined a bean of type CacheManager or a CacheResolver named cacheResolver (see CachingConfigurer), Spring Boot tries to detect the following providers (in the indicated order):</p></blockquote><p>Three different cache level prefixes with a different ttl,idle,size</p><ul><li><code>program.</code> - program level, lifetime of the program or service</li><li><code>general.</code> - default configuration, 1 day</li><li><code>service.</code> - service-level, 1 hour</li><li><code>session.</code> - session-level, 10 minutes</li></ul><p>A cache with the same prefix will use the same configuration items (ttl,idle,size).</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@CacheConfig</span><span class="token punctuation">(</span>cacheManager <span class="token operator">=</span> <span class="token class-name">Manager<span class="token punctuation">.</span>Memory</span><span class="token punctuation">,</span> 
cacheNames <span class="token operator">=</span> <span class="token class-name">Level<span class="token punctuation">.</span>General</span> <span class="token operator">+</span> <span class="token string">&quot;OperatorService&quot;</span><span class="token punctuation">)</span>

<span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">&quot;&#39;all&#39;&quot;</span><span class="token punctuation">,</span> 
cacheNames <span class="token operator">=</span> <span class="token class-name">Level<span class="token punctuation">.</span>General</span> <span class="token operator">+</span> <span class="token string">&quot;StandardRegion&quot;</span><span class="token punctuation">,</span> 
cacheManager <span class="token operator">=</span> <span class="token class-name">Manager<span class="token punctuation">.</span>Server</span><span class="token punctuation">)</span>

<span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">&quot;&#39;all&#39;&quot;</span><span class="token punctuation">,</span> 
cacheNames <span class="token operator">=</span> <span class="token class-name">Level<span class="token punctuation">.</span>General</span> <span class="token operator">+</span> <span class="token string">&quot;StandardRegion&quot;</span><span class="token punctuation">,</span> 
cacheManager <span class="token operator">=</span> <span class="token class-name">Manager<span class="token punctuation">.</span>Server</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The naming requirements for cacheName are no special characters. currently separated by <code>~</code> and ending with <code>!</code> means Resolve extension,</p>`,12),u={href:"https://github.com/cache2k/cache2k/issues/201",target:"_blank",rel:"noopener noreferrer"},d=n("li",null,"WingsCache - naming rules for specific definitions",-1),h=a(`<p>Resolve extension means when specifying <code>cacheResolver</code> and ignoring <code>cacheManager</code> in the <code>@Cache*</code> annotation, If cacheNames ends with <code>!</code>, it will be appended with the full class name, see CacheConst for details. Its use is to unify cache names at the code level, and change them at runtime to the impl class.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@CacheConfig</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token class-name">CacheName</span><span class="token punctuation">,</span> cacheResolver <span class="token operator">=</span> <span class="token class-name">CacheResolver</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WarlockPermServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">WarlockPermService</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The code shown above has CacheName=<code>WarlockPermService!</code> and the full class name is <code>a.b.c.WarlockPermServiceImpl</code>, then the final cache name is <code>WarlockPermService!a.b.c.WarlockPermServiceImpl</code>.</p><h2 id="_3f-2-multilevel-event" tabindex="-1"><a class="header-anchor" href="#_3f-2-multilevel-event"><span>3F.2.Multilevel Event</span></a></h2><p>EventPublishHelper provides 3 types of event publishing by default, implementing synchronous/asynchronous/standalone/clustered events,</p><ul><li>SyncSpring - synchronous, within the Spring jvm</li><li>AsyncSpring - asynchronous, within the Spring jvm, using slardarEventExecutor thread pool</li><li>AsyncGlobal - asynchronous, topic-based publish-subscribe mechanism</li></ul><p>Note that SpringBoot by default is synchronous and withou exception handling, so that it can be well synchronized to handle business etc. SlardarAsyncConfiguration checks this mechanism at startup and will log a Warn if it is broken.</p><ul><li>ApplicationEventMulticaster - the underlying processing mechanism</li><li>AbstractApplicationContext#initApplicationEventMulticaster() - default bean</li><li>AbstractApplicationContext#publishEvent(Object, ResolvableType) - entry</li><li>SimpleApplicationEventMulticaster - default implementation, no TaskExecutor, no ErrorHandler</li></ul><h2 id="_3f-3-data-cud-event" tabindex="-1"><a class="header-anchor" href="#_3f-3-data-cud-event"><span>3F.3.Data CUD Event</span></a></h2><p>jooq-based listener that handles CUD events for specific tables and fields. Posted by default via AsyncGlobal, available for table and field related cache evictions</p><p>set via <code>TableCudListener</code> and <code>wings.faceless.jooq.cud.table</code>, using RuntimeConf as an example <code>[win_conf_runtime]</code>=<code>key,current,handler</code>, when doing Insert/Update/Delete, the TableChangeEvent with the set field value is published within the cluster.</p><p>The following code can be used to listen and process, and the following code is used to clear the cache according to the authentication table changes,</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// RuntimeConfServiceImpl.java 137-147</span>
<span class="token annotation punctuation">@EventListener</span>
<span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>allEntries <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> condition <span class="token operator">=</span> <span class="token string">&quot;#result&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">evictAllConfCache</span><span class="token punctuation">(</span><span class="token class-name">TableChangeEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> tb <span class="token operator">=</span> <span class="token class-name">CacheEventHelper</span><span class="token punctuation">.</span><span class="token function">receiveTable</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span> <span class="token class-name">EventTables</span><span class="token punctuation">,</span> <span class="token constant">DELETE</span> <span class="token operator">|</span> <span class="token constant">UPDATE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tb <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;evictAllConfCache by {}, {}&quot;</span><span class="token punctuation">,</span> tb<span class="token punctuation">,</span> event<span class="token punctuation">.</span><span class="token function">getChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TableChangeEvent can be triggered automatically by tables and fields in <code>wings.faceless.jooq.cud.table</code>. It can be triggered manually by injecting WingsTableCudHandler. But if there is an automatic trigger, the manual trigger will be ignored.</p><p>Note that the <code>@Cacheable</code> series of annotations, default enhanced by proxy-based AOP, is only available for proxy objects, the following cases can not access the proxy object.</p><ul><li>Internal calls - methods within a class are called from within the class.</li><li>Inheritance calls - <code>default</code> methods on an interface call <code>abstarct</code> methods.</li><li>Static methods - Enhancements cannot be applied to static methods.</li></ul><p>The following programming pattern can get the self reference inside the object,</p><ul><li>independent caching component, see <code>WarlockPermServiceImpl</code></li><li>inject and invoke itself, see <code>RuntimeConfServiceImpl</code></li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// cache self-invoke</span>
<span class="token annotation punctuation">@Setter</span><span class="token punctuation">(</span>onMethod_ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@Autowired</span><span class="token punctuation">,</span> <span class="token annotation punctuation">@Lazy</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">protected</span> <span class="token class-name">RuntimeConfServiceImpl</span> selfLazy<span class="token punctuation">;</span>
<span class="token comment">// interface method</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">TypeDescriptor</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// @Cacheable method with Cache surfix</span>
    <span class="token keyword">return</span> selfLazy<span class="token punctuation">.</span><span class="token function">getObjectCache</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function v(k,m){const e=t("ExternalLinkIcon");return c(),o("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[l("https://github.com/cache2k/cache2k/issues/201"),i(e)])]),d]),h])}const f=s(p,[["render",v],["__file","3f-cache-event.html.vue"]]);export{f as default};