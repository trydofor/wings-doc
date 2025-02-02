import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,o as t}from"./app-B4-M_2GK.js";const l={};function n(r,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h1 id="_5b-服务消费者" tabindex="-1"><a class="header-anchor" href="#_5b-服务消费者"><span>5B.服务消费者</span></a></h1><p>优先使用Rpc消费服务，也可用RestTemplate简化调用</p><h2 id="_5b-1-消费者约定" tabindex="-1"><a class="header-anchor" href="#_5b-1-消费者约定"><span>5B.1.消费者约定</span></a></h2><ul><li>令<code>microserviceName</code>为<code>\${servicecomb.service.name}</code></li><li>令<code>path</code>为Mapping的全路径，如<code>/full/path/</code></li><li>Rpc以<code>SchemaId</code>和接口定位服务</li><li>Mvc以rest风格的url定位 <code>cse://microserviceName/path?querystring</code></li><li>接口可打包成lib共享，也可自己定义，只要方法签名一致即可</li><li><code>@RpcReference</code>推荐setter注入(2.8.0)，也可用<code>Invoker.createProxy</code></li></ul><h2 id="_5b-2-消费方式转换" tabindex="-1"><a class="header-anchor" href="#_5b-2-消费方式转换"><span>5B.2.消费方式转换</span></a></h2><p>以调用winx-api的sayHello为例，其配置如下，</p><ul><li><code>servicecomb.service.name</code>=<code>winx-api</code></li><li><code>schemaId</code>为<code>@RestSchema(schemaId = &quot;winx-hello&quot;)</code></li><li>base path为<code>@RequestMapping(path = &quot;/&quot;)</code></li><li>path为<code>@RequestMapping(path = &quot;/winx-hello/say-hello&quot;)</code></li></ul><p>其自动生成的swagger摘要信息如下</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">basePath</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">schemes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">- </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">paths</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  /winx-hello/say-hello</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      operationId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;sayHello&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      produces</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text/plain&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      parameters</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;name&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;query&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        required</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;string&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下的调用方式都可以访问此服务，</p><ul><li><code>@RpcReference(microserviceName = &quot;winx-api&quot;, schemaId = &quot;winx-hello&quot;)</code></li><li>restTemplate <code>cse://winx-api/winx-hello/say-hello?name=bbb</code></li><li>有验证 <code>http://localhost:8095/servcomber/winx-hello/say-hello?name=null</code></li><li>无验证 <code>http://localhost:8085/servcomber/batrider-hello/say-hello?name=undefined</code></li></ul><p>通过观察<code>OperationLocator</code>可以确认，他们的区别如下，</p><ul><li>Rpc根据microserviceName和schemaId以及方法operationId定位</li><li>restTemplate通过microserviceName和path定位</li><li>browser http 通过endpoint的ip端口，rest前缀和path定位</li><li>path为<code>basePath</code>+<code>paths</code>，basePath默认为<code>/</code></li></ul>`,13)]))}const h=i(l,[["render",n],["__file","5b-consumer.html.vue"]]),c=JSON.parse('{"path":"/zh/5-batrider/5b-consumer.html","title":"5B.服务消费者","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"cloud-sun","category":["蝙蝠","消费者"],"description":"5B.服务消费者 优先使用Rpc消费服务，也可用RestTemplate简化调用 5B.1.消费者约定 令microserviceName为${servicecomb.service.name} 令path为Mapping的全路径，如/full/path/ Rpc以SchemaId和接口定位服务 Mvc以rest风格的url定位 cse://micro...","GIT_REPO_HEAD":"2025-02-02 9cab7f71f34df19a1b0adffd87fa71dbbe019019","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/5-batrider/5b-consumer.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/5-batrider/5b-consumer.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"5B.服务消费者"}],["meta",{"property":"og:description","content":"5B.服务消费者 优先使用Rpc消费服务，也可用RestTemplate简化调用 5B.1.消费者约定 令microserviceName为${servicecomb.service.name} 令path为Mapping的全路径，如/full/path/ Rpc以SchemaId和接口定位服务 Mvc以rest风格的url定位 cse://micro..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-09T11:57:11.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T11:57:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5B.服务消费者\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T11:57:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"5B.1.消费者约定","slug":"_5b-1-消费者约定","link":"#_5b-1-消费者约定","children":[]},{"level":2,"title":"5B.2.消费方式转换","slug":"_5b-2-消费方式转换","link":"#_5b-2-消费方式转换","children":[]}],"git":{"createdTime":1660370231000,"updatedTime":1736423831000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":10,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":1.01,"words":303},"filePathRelative":"zh/5-batrider/5b-consumer.md","localizedDate":"2022年8月13日","autoDesc":true}');export{h as comp,c as data};
