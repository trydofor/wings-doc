import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e}from"./app-D1G0Arv-.js";const n={},t=e(`<h1 id="_3f-multiple-caching-and-event" tabindex="-1"><a class="header-anchor" href="#_3f-multiple-caching-and-event"><span>3F.Multiple Caching and Event</span></a></h1><p>Based on Cache2k and Hazelcast, Wings provides hierarchical caching, local and distributed caching, and distributed objects.</p><h2 id="_3f-1-multilevel-caching" tabindex="-1"><a class="header-anchor" href="#_3f-1-multilevel-caching"><span>3F.1.Multilevel Caching</span></a></h2><p>By default, two CacheManagers, Memory and Server, with the following names and implementations, are provided under the JCache convention,</p><ul><li>MemoryCacheManager - Cache2kCacheManager</li><li>ServerCacheManager - such as hazelcast/redis and other</li></ul><p>Because the CacheManager has been injected, it will make SpringBoot&#39;s auto configuration does not meet the conditions and invalid.</p><blockquote><p>If you have not defined a bean of type CacheManager or a CacheResolver named cacheResolver (see CachingConfigurer), Spring Boot tries to detect the following providers (in the indicated order):</p></blockquote><p>Three different cache level prefixes with a different ttl,idle,size</p><ul><li><code>program.</code> - program level, lifetime of the program or service</li><li><code>general.</code> - default configuration, 1 day</li><li><code>service.</code> - service-level, 1 hour</li><li><code>session.</code> - session-level, 10 minutes</li></ul><p>A cache with the same prefix will use the same configuration items (ttl,idle,size).</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">CacheConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">cacheManager</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Manager</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Memory</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Level</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">General</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;OperatorService&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&#39;all&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Level</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">General</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;StandardRegion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">cacheManager</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Manager</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Server</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">CacheEvict</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;&#39;all&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Level</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">General</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;StandardRegion&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">cacheManager</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Manager</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Server</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The naming requirements for cacheName are no special characters. currently separated by <code>~</code> and ending with <code>!</code> means Resolve extension,</p><ul><li><a href="https://github.com/cache2k/cache2k/issues/201" target="_blank" rel="noopener noreferrer">https://github.com/cache2k/cache2k/issues/201</a></li><li>WingsCache - naming rules for specific definitions</li></ul><p>Resolve extension means when specifying <code>cacheResolver</code> and ignoring <code>cacheManager</code> in the <code>@Cache*</code> annotation, If cacheNames ends with <code>!</code>, it will be appended with the full class name, see CacheConst for details. Its use is to unify cache names at the code level, and change them at runtime to the impl class.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">CacheConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> CacheName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> cacheResolver</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> CacheResolver)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> WarlockPermServiceImpl</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> WarlockPermService</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The code shown above has CacheName=<code>WarlockPermService!</code> and the full class name is <code>a.b.c.WarlockPermServiceImpl</code>, then the final cache name is <code>WarlockPermService!a.b.c.WarlockPermServiceImpl</code>.</p><h2 id="_3f-2-multilevel-event" tabindex="-1"><a class="header-anchor" href="#_3f-2-multilevel-event"><span>3F.2.Multilevel Event</span></a></h2><p>EventPublishHelper provides 3 types of event publishing by default, implementing synchronous/asynchronous/standalone/clustered events,</p><ul><li>SyncSpring - synchronous, within the Spring jvm</li><li>AsyncSpring - asynchronous, within the Spring jvm, using slardarEventExecutor thread pool</li><li>AsyncGlobal - asynchronous, topic-based publish-subscribe mechanism</li></ul><p>Note that SpringBoot by default is synchronous and withou exception handling, so that it can be well synchronized to handle business etc. SlardarAsyncConfiguration checks this mechanism at startup and will log a Warn if it is broken.</p><ul><li>ApplicationEventMulticaster - the underlying processing mechanism</li><li>AbstractApplicationContext#initApplicationEventMulticaster() - default bean</li><li>AbstractApplicationContext#publishEvent(Object, ResolvableType) - entry</li><li>SimpleApplicationEventMulticaster - default implementation, no TaskExecutor, no ErrorHandler</li></ul><h2 id="_3f-3-data-cud-event" tabindex="-1"><a class="header-anchor" href="#_3f-3-data-cud-event"><span>3F.3.Data CUD Event</span></a></h2><p>jooq-based listener that handles CUD events for specific tables and fields. Posted by default via AsyncGlobal, available for table and field related cache evictions</p><p>set via <code>TableCudListener</code> and <code>wings.faceless.jooq.cud.table</code>, using RuntimeConf as an example <code>[win_conf_runtime]</code>=<code>key,current,handler</code>, when doing Insert/Update/Delete, the TableChangeEvent with the set field value is published within the cluster.</p><p>The following code can be used to listen and process, and the following code is used to clear the cache according to the authentication table changes,</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// RuntimeConfServiceImpl.java 137-147</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">EventListener</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">CacheEvict</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">allEntries</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> condition</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;#result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> evictAllConfCache</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">TableChangeEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> event) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> tb </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> CacheEventHelper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">receiveTable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(event, EventTables, DELETE </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> UPDATE);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (tb </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;evictAllConfCache by {}, {}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, tb, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getChange</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TableChangeEvent can be triggered automatically by tables and fields in <code>wings.faceless.jooq.cud.table</code>. It can be triggered manually by injecting WingsTableCudHandler. But if there is an automatic trigger, the manual trigger will be ignored.</p><p>Note that the <code>@Cacheable</code> series of annotations, default enhanced by proxy-based AOP, is only available for proxy objects, the following cases can not access the proxy object.</p><ul><li>Internal calls - methods within a class are called from within the class.</li><li>Inheritance calls - <code>default</code> methods on an interface call <code>abstarct</code> methods.</li><li>Static methods - Enhancements cannot be applied to static methods.</li></ul><p>The following programming pattern can get the self reference inside the object,</p><ul><li>independent caching component, see <code>WarlockPermServiceImpl</code></li><li>inject and invoke itself, see <code>RuntimeConfServiceImpl</code></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// cache self-invoke</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Setter</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">onMethod_</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Autowired</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Lazy</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> RuntimeConfServiceImpl</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> thisLazy </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// interface method</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> T</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> TypeDescriptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> type) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // @Cacheable method with Cache surfix</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> thisLazy</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getObjectCache</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key, type);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),l=[t];function h(r,p){return a(),s("div",null,l)}const c=i(n,[["render",h],["__file","3f-cache-event.html.vue"]]),o=JSON.parse('{"path":"/3-slardar/3f-cache-event.html","title":"3F.Multiple Caching and Event","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"layer-group","category":["Slardar","Caching","Event"],"description":"3F.Multiple Caching and Event Based on Cache2k and Hazelcast, Wings provides hierarchical caching, local and distributed caching, and distributed objects. 3F.1.Multilevel Cachin...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/3-slardar/3f-cache-event.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/3-slardar/3f-cache-event.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"3F.Multiple Caching and Event"}],["meta",{"property":"og:description","content":"3F.Multiple Caching and Event Based on Cache2k and Hazelcast, Wings provides hierarchical caching, local and distributed caching, and distributed objects. 3F.1.Multilevel Cachin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3F.Multiple Caching and Event\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3F.1.Multilevel Caching","slug":"_3f-1-multilevel-caching","link":"#_3f-1-multilevel-caching","children":[]},{"level":2,"title":"3F.2.Multilevel Event","slug":"_3f-2-multilevel-event","link":"#_3f-2-multilevel-event","children":[]},{"level":2,"title":"3F.3.Data CUD Event","slug":"_3f-3-data-cud-event","link":"#_3f-3-data-cud-event","children":[]}],"git":{"createdTime":1655981049000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":6}]},"readingTime":{"minutes":2.18,"words":655},"filePathRelative":"3-slardar/3f-cache-event.md","localizedDate":"June 23, 2022","autoDesc":true}');export{c as comp,o as data};
