import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as t,e as n}from"./app-D1G0Arv-.js";const i={},o=n(`<h1 id="_4g-time-watching" tabindex="-1"><a class="header-anchor" href="#_4g-time-watching"><span>4G.Time Watching</span></a></h1><p>Out-of-the-box simple performance analysis, slow request logging, which is a debugging feature, disabled by default.</p><ul><li>Module switch - wings.enabled.warlock.watching=false</li><li>Data layer - wings.warlock.watching.jooq-threshold=60</li><li>Service layer - wings.warlock.watching.service-threshold=200</li><li>Web layer - wings.warlock.watching.controller-threshold=2000</li></ul><p>With the above configuration file, set whether the module is on or off, and the threshold for slow response for each layer. <code>-1</code> means off, while <code>0</code> means all on, and the other formal values are thresholds for slow, milliseconds.</p><h2 id="_4g-1-underlying-principle" tabindex="-1"><a class="header-anchor" href="#_4g-1-underlying-principle"><span>4G.1.Underlying Principle</span></a></h2><p>The <code>timing</code> functions at each level, placed in different project modules, and Warlock to auto config them.</p><ul><li>Controller layer, based on the Interceptor, works for all URLs by default</li><li>Service layer, based on AOP, requires @Watching annotations to mark methods manually</li><li>Database layer, based on Jooq&#39;s ExecuteListener, works for all jooq by default</li></ul><p><code>Timing</code> is automatically enabled in the Context of the Wings, based on the call count, and 0 is considered as finished. Whether it is running or finished, the following statistics will automatically output in the log at the end of call by default.</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>+--s--ms------ns-+---%-+---------------+---------------</span></span>
<span class="line"><span>|  1,426,497,039 | 100 | thread  | task and timing</span></span>
<span class="line"><span>|    922,167,066 |  64 | XNIO-4  | /test/watching.json</span></span>
<span class="line"><span>|    504,329,973 |  35 | wings-1 | AsyncWatch.BadSelect</span></span>
<span class="line"><span>|    504,059,463 |  35 | wings-1 | ¦-AsyncWatch.sleep</span></span>
<span class="line"><span>|    663,100,505 |  46 | XNIO-4  | ¦-Service#normalFetch</span></span>
<span class="line"><span>|    128,767,339 |   9 | XNIO-4  | ¦-¦-JooqSlowSql:SelectQuery</span></span>
<span class="line"><span>|    213,964,147 |  14 | XNIO-4  | ¦-Service#errorFetch</span></span>
<span class="line"><span>|    199,774,730 |  14 | XNIO-4  | ¦-¦-JooqSlowSql:SelectQuery</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Column 1 is the elapsed time, up to 999 seconds, accurate to ns</li><li>Column 2 is the percentage, based on the sum of the elapsed time of level 0.</li><li>Column 3 is the thread, where the time is spent</li><li>Column 4 is the <code>call relationship</code> and remark, used to analyze the call relationship</li></ul><p><code>timing</code> forms <code>call relations</code> according to <code>start time</code> to <code>end time</code>, and is displayed in a tree structure. In a linear call, the <code>call relationship</code> is also equal to the execution relationship. However, with multi-threading, it is necessary to sort by threads.</p><h2 id="_4g-2-usage" tabindex="-1"><a class="header-anchor" href="#_4g-2-usage"><span>4G.2.Usage</span></a></h2><p>First of all, you should enable the Watching module so that Warlock can config it automatically, and then set each threshold to be on if it is not negative.</p><p>In the default WebMvc, <code>Controller</code>, <code>Service</code> and <code>Database</code> belong to the containing relationship. Therefore, a simple slow response analysis is on Controller and Database.</p><p>Suppose, in the Controller layer, we define 3 seconds as the threshold, and in the Database layer, we define 100ms as the threshold, and set the configuration directly.</p><p>If you need to count the Service layer, you need to manually add the <code>@Watching</code> annotation to the methods to be watched.</p><h2 id="_4g-3-caution" tabindex="-1"><a class="header-anchor" href="#_4g-3-caution"><span>4G.3.Caution</span></a></h2><p>This feature is somewhat invasive and is mainly used for tuning during development, it is recommended to close it in the online products to avoid wasting unnecessary resources.</p><p>Non-invasive and dynamic program diagnosis, recommended to use <a href="https://github.com/alibaba/arthas" target="_blank" rel="noopener noreferrer">Arthas</a></p>`,19),s=[o];function l(r,c){return t(),a("div",null,s)}const p=e(i,[["render",l],["__file","4g-watching.html.vue"]]),g=JSON.parse('{"path":"/4-warlock/4g-watching.html","title":"4G.Time Watching","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"bug-slash","category":["Warlock","Tweaking"],"description":"4G.Time Watching Out-of-the-box simple performance analysis, slow request logging, which is a debugging feature, disabled by default. Module switch - wings.enabled.warlock.watch...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/4-warlock/4g-watching.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/4-warlock/4g-watching.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"4G.Time Watching"}],["meta",{"property":"og:description","content":"4G.Time Watching Out-of-the-box simple performance analysis, slow request logging, which is a debugging feature, disabled by default. Module switch - wings.enabled.warlock.watch..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4G.Time Watching\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"4G.1.Underlying Principle","slug":"_4g-1-underlying-principle","link":"#_4g-1-underlying-principle","children":[]},{"level":2,"title":"4G.2.Usage","slug":"_4g-2-usage","link":"#_4g-2-usage","children":[]},{"level":2,"title":"4G.3.Caution","slug":"_4g-3-caution","link":"#_4g-3-caution","children":[]}],"git":{"createdTime":1669187346000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":5}]},"readingTime":{"minutes":1.64,"words":493},"filePathRelative":"4-warlock/4g-watching.md","localizedDate":"November 23, 2022","autoDesc":true}');export{p as comp,g as data};
