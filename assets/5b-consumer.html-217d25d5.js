import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as n}from"./app-7d38ae22.js";const t={},o=n(`<h1 id="_5b-service-consumer" tabindex="-1"><a class="header-anchor" href="#_5b-service-consumer" aria-hidden="true">#</a> 5B.Service Consumer</h1><p>Prefer to use the Rpc to consum service, also use RestTemplate to simplify the call.</p><h2 id="_5b-1-consumer-convention" tabindex="-1"><a class="header-anchor" href="#_5b-1-consumer-convention" aria-hidden="true">#</a> 5B.1.Consumer Convention</h2><ul><li>Let <code>microserviceName</code> be <code>\${servicecomb.service.name}</code></li><li>Let <code>path</code> be the full path to the Mapping, e.g. <code>/full/path/</code></li><li>Rpc locates the service with <code>SchemaId</code> and interface</li><li>Mvc locates the service with a rest-style url <code>cse://microserviceName/path?querystring</code></li><li>Interfaces can be packaged as lib shares or defined by yourself, just make sure the same method signatures</li><li><code>@RpcReference</code> recommends setter injection (2.8.0), also use <code>Invoker.createProxy</code></li></ul><h2 id="_5b-2-consume-style-conversion" tabindex="-1"><a class="header-anchor" href="#_5b-2-consume-style-conversion" aria-hidden="true">#</a> 5B.2.Consume Style Conversion</h2><p>Take the call to winx-api&#39;s sayHello as an example, its configuration is as follows.</p><ul><li><code>servicecomb.service.name</code>=<code>winx-api</code></li><li><code>schemaId</code> is <code>@RestSchema(schemaId = &quot;winx-hello&quot;)</code></li><li>base path is <code>@RequestMapping(path = &quot;/&quot;)</code></li><li>path is <code>@RequestMapping(path = &quot;/winx-hello/say-hello&quot;)</code></li></ul><p>The summary of the auto-generation swagger information is as follows,</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">basePath</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This service can be accessed by the following call style.</p><ul><li><code>@RpcReference(microserviceName = &quot;winx-api&quot;, schemaId = &quot;winx-hello&quot;)</code></li><li>restTemplate <code>cse://winx-api/winx-hello/say-hello?name=bbb</code></li><li>with auth <code>http://localhost:8095/servcomber/winx-hello/say-hello?name=null</code></li><li>witout auth <code>http://localhost:8085/servcomber/batrider-hello/say-hello?name=undefined</code></li></ul><p>Tracing the <code>OperationLocator</code>, we find the difference as follows.</p><ul><li>Rpc locates by microserviceName, schemaId and method operationId</li><li>restTemplate is located by microserviceName and path</li><li>broswer http is located by endpoint ip and port, rest prefix and path</li><li>path is <code>basePath</code> + <code>paths</code>, basePath is <code>/</code> by default</li></ul>`,13),i=[o];function l(c,r){return s(),a("div",null,i)}const d=e(t,[["render",l],["__file","5b-consumer.html.vue"]]);export{d as default};
