import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,f as t}from"./app-C-isWU7N.js";const a={},o=t(`<h1 id="_5b-service-consumer" tabindex="-1"><a class="header-anchor" href="#_5b-service-consumer"><span>5B.Service Consumer</span></a></h1><p>Prefer to use the Rpc to consum service, also use RestTemplate to simplify the call.</p><h2 id="_5b-1-consumer-convention" tabindex="-1"><a class="header-anchor" href="#_5b-1-consumer-convention"><span>5B.1.Consumer Convention</span></a></h2><ul><li>Let <code>microserviceName</code> be <code>\${servicecomb.service.name}</code></li><li>Let <code>path</code> be the full path to the Mapping, e.g. <code>/full/path/</code></li><li>Rpc locates the service with <code>SchemaId</code> and interface</li><li>Mvc locates the service with a rest-style url <code>cse://microserviceName/path?querystring</code></li><li>Interfaces can be packaged as lib shares or defined by yourself, just make sure the same method signatures</li><li><code>@RpcReference</code> recommends setter injection (2.8.0), also use <code>Invoker.createProxy</code></li></ul><h2 id="_5b-2-consume-style-conversion" tabindex="-1"><a class="header-anchor" href="#_5b-2-consume-style-conversion"><span>5B.2.Consume Style Conversion</span></a></h2><p>Take the call to winx-api&#39;s sayHello as an example, its configuration is as follows.</p><ul><li><code>servicecomb.service.name</code>=<code>winx-api</code></li><li><code>schemaId</code> is <code>@RestSchema(schemaId = &quot;winx-hello&quot;)</code></li><li>base path is <code>@RequestMapping(path = &quot;/&quot;)</code></li><li>path is <code>@RequestMapping(path = &quot;/winx-hello/say-hello&quot;)</code></li></ul><p>The summary of the auto-generation swagger information is as follows,</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">basePath</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
<span class="token key atrule">schemes</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token string">&quot;http&quot;</span>
<span class="token key atrule">paths</span><span class="token punctuation">:</span>
  <span class="token key atrule">/winx-hello/say-hello</span><span class="token punctuation">:</span>
    <span class="token key atrule">get</span><span class="token punctuation">:</span>
      <span class="token key atrule">operationId</span><span class="token punctuation">:</span> <span class="token string">&quot;sayHello&quot;</span>
      <span class="token key atrule">produces</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;text/plain&quot;</span>
      <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;name&quot;</span>
        <span class="token key atrule">in</span><span class="token punctuation">:</span> <span class="token string">&quot;query&quot;</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This service can be accessed by the following call style.</p><ul><li><code>@RpcReference(microserviceName = &quot;winx-api&quot;, schemaId = &quot;winx-hello&quot;)</code></li><li>restTemplate <code>cse://winx-api/winx-hello/say-hello?name=bbb</code></li><li>with auth <code>http://localhost:8095/servcomber/winx-hello/say-hello?name=null</code></li><li>witout auth <code>http://localhost:8085/servcomber/batrider-hello/say-hello?name=undefined</code></li></ul><p>Tracing the <code>OperationLocator</code>, we find the difference as follows.</p><ul><li>Rpc locates by microserviceName, schemaId and method operationId</li><li>restTemplate is located by microserviceName and path</li><li>broswer http is located by endpoint ip and port, rest prefix and path</li><li>path is <code>basePath</code> + <code>paths</code>, basePath is <code>/</code> by default</li></ul>`,13),i=[o];function c(l,r){return n(),s("div",null,i)}const d=e(a,[["render",c],["__file","5b-consumer.html.vue"]]),m=JSON.parse('{"path":"/5-batrider/5b-consumer.html","title":"5B.Service Consumer","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"cache","category":["Batrider","Consumer"],"description":"5B.Service Consumer Prefer to use the Rpc to consum service, also use RestTemplate to simplify the call. 5B.1.Consumer Convention Let microserviceName be ${servicecomb.service.n...","GIT_REPO_HEAD":"2024-03-02 09eb01b7f21b049e7db0de8f3e41119e04bb56e7","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/5-batrider/5b-consumer.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/5-batrider/5b-consumer.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"5B.Service Consumer"}],["meta",{"property":"og:description","content":"5B.Service Consumer Prefer to use the Rpc to consum service, also use RestTemplate to simplify the call. 5B.1.Consumer Convention Let microserviceName be ${servicecomb.service.n..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T08:37:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-18T08:37:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5B.Service Consumer\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T08:37:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"5B.1.Consumer Convention","slug":"_5b-1-consumer-convention","link":"#_5b-1-consumer-convention","children":[]},{"level":2,"title":"5B.2.Consume Style Conversion","slug":"_5b-2-consume-style-conversion","link":"#_5b-2-consume-style-conversion","children":[]}],"git":{"createdTime":1680228107000,"updatedTime":1687077446000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":0.84,"words":251},"filePathRelative":"5-batrider/5b-consumer.md","localizedDate":"March 31, 2023","autoDesc":true}');export{d as comp,m as data};