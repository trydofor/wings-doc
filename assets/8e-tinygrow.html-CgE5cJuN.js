import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as n}from"./app-CfZymbb7.js";const t={},e=n(`<h1 id="_8e-小成长模块" tabindex="-1"><a class="header-anchor" href="#_8e-小成长模块"><span>8E.小成长模块</span></a></h1><p>简单的数据跟踪和成长分析，异步收集，默认存于数据库。</p><ul><li>AOP拦截，自动跟踪方法的输入，输出和异常</li><li>手动编程，跟踪代码块</li><li>全局或方法级设置忽略的属性</li></ul><h2 id="_8e-1-数据跟踪" tabindex="-1"><a class="header-anchor" href="#_8e-1-数据跟踪"><span>8E.1.数据跟踪</span></a></h2><p>收集方法或代码块的数据，异步分发至数据库。</p><h3 id="自动aop方法" tabindex="-1"><a class="header-anchor" href="#自动aop方法"><span>自动AOP方法</span></a></h3><p>以<code>@TinyTracker</code>注解，通过AOP对方法进行自动跟踪</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">TinyTracker</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> TestTrackData</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> track</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">long</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> str) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> TestTrackData</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> str)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在收集之前，对Tracking进行编辑，可在本AOP类内，定义一个mix方法。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 参数列表，为AOP的参数前面增加 TinyTracking</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> track</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">TinyTracking</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> trk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> str) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  trk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setDataKey</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  trk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setCodeKey</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(str);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>忽略指定类型的属性（HttpServletRequest），可设置全局omit属性或该方法的注解配置</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">TinyTracker</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">omitClass</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> HttpServletRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> TestTrackData</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> track</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">long</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> str</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> HttpServletRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ignore) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> TestTrackData</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> str)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动代码块" tabindex="-1"><a class="header-anchor" href="#手动代码块"><span>手动代码块</span></a></h3><p>在方法内，可以通过<code>TinyTrackHelper.track</code>实现代码块级跟踪</p><p>通过lambda，自动设置<code>elapse</code>, 当<code>out</code>,<code>err</code>为null时自动设置。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> TinyTrackHelper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">track</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key, trk </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    trk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setIns</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(id, str);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    //trk.setOut(out); 设置为lambda的返回值，如果getOut()为null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    //trk.setErr(e); 设置为lambda的异常，如果getErr()为null</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> TestTrackData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(id, str);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 try-catch，手动设置除<code>elapse</code>外的属性。</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">final</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> trk </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> TinyTrackHelper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">track</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> TestTrackData</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> out </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> TestTrackData</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> str)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    trk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setIns</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(id, str);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    trk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setOut</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(out);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Throwable</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> e</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    trk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setErr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(e);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ThrowableUtil</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">runtime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    trk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[e];function h(k,p){return a(),s("div",null,l)}const g=i(t,[["render",h],["__file","8e-tinygrow.html.vue"]]),c=JSON.parse('{"path":"/zh/8-radiant/8e-tinygrow.html","title":"8E.小成长模块","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"piggy-bank","category":["小小","跟踪"],"description":"8E.小成长模块 简单的数据跟踪和成长分析，异步收集，默认存于数据库。 AOP拦截，自动跟踪方法的输入，输出和异常 手动编程，跟踪代码块 全局或方法级设置忽略的属性 8E.1.数据跟踪 收集方法或代码块的数据，异步分发至数据库。 自动AOP方法 以@TinyTracker注解，通过AOP对方法进行自动跟踪 在收集之前，对Tracking进行编辑，可在本...","GIT_REPO_HEAD":"2024-08-09 96de5f3516d8a63745329bc5d9552c3dafb6ff53","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/8-radiant/8e-tinygrow.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/8-radiant/8e-tinygrow.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"8E.小成长模块"}],["meta",{"property":"og:description","content":"8E.小成长模块 简单的数据跟踪和成长分析，异步收集，默认存于数据库。 AOP拦截，自动跟踪方法的输入，输出和异常 手动编程，跟踪代码块 全局或方法级设置忽略的属性 8E.1.数据跟踪 收集方法或代码块的数据，异步分发至数据库。 自动AOP方法 以@TinyTracker注解，通过AOP对方法进行自动跟踪 在收集之前，对Tracking进行编辑，可在本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-29T04:44:08.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-07-29T04:44:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8E.小成长模块\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-29T04:44:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"8E.1.数据跟踪","slug":"_8e-1-数据跟踪","link":"#_8e-1-数据跟踪","children":[{"level":3,"title":"自动AOP方法","slug":"自动aop方法","link":"#自动aop方法","children":[]},{"level":3,"title":"手动代码块","slug":"手动代码块","link":"#手动代码块","children":[]}]}],"git":{"createdTime":1722228248000,"updatedTime":1722228248000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":1}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"zh/8-radiant/8e-tinygrow.md","localizedDate":"2024年7月29日","autoDesc":true}');export{g as comp,c as data};