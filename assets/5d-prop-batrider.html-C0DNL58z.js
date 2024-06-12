import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,o as i,e as s}from"./app-D1G0Arv-.js";const c={},o=s('<h1 id="_5d-batrider-properties" tabindex="-1"><a class="header-anchor" href="#_5d-batrider-properties"><span>5D.Batrider Properties</span></a></h1><p>Properties of servicecomb as microservices.</p><h2 id="_5d-1-spring-servicecomb-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-1-spring-servicecomb-79-properties"><span>5D.1.spring-servicecomb-79.properties</span></a></h2><p>Apache ServiceComb <a href="https://servicecomb.apache.org/references/java-chassis/en_US/" target="_blank" rel="noopener noreferrer">Offical Document</a> Configuration.</p><h3 id="servicecomb-service-application" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-application"><span>servicecomb.service.application</span></a></h3><p><code>String</code>=<code>${spring.application.name:batrider}</code> the name of the application that microservices belongs to.</p><h3 id="servicecomb-service-name" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-name"><span>servicecomb.service.name</span></a></h3><p><code>String</code>=<code>${spring.application.name:batrider}</code> microservice names, which should be unique within the application.</p><h3 id="servicecomb-service-version" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-version"><span>servicecomb.service.version</span></a></h3><p><code>String</code>=<code>0.0.1</code>, microservice version.</p><h3 id="servicecomb-service-zero-config-enabled" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-enabled"><span>servicecomb.service.zero-config.enabled</span></a></h3><p><code>Boolean</code>=<code>true</code>, whether to use zero-config as the service-center.</p><h3 id="servicecomb-service-zero-config-multicast-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-multicast-address"><span>servicecomb.service.zero-config.multicast.address</span></a></h3><p><code>String</code>=<code>0.0.0.0:6666</code>, address for UDP.</p><h3 id="servicecomb-service-zero-config-multicast-group" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-multicast-group"><span>servicecomb.service.zero-config.multicast.group</span></a></h3><p><code>String</code>=<code>225.6.7.8</code>, multicast group address of UDP.</p><h3 id="servicecomb-service-registry-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-registry-address"><span>servicecomb.service.registry.address</span></a></h3><p><code>List&lt;String&gt;</code>=<code>http://localhost:30100</code>, service center address, multiple addresses separated by commas.</p><h3 id="servicecomb-rest-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-rest-address"><span>servicecomb.rest.address</span></a></h3><p><code>String</code>=<code>${server.address:localhost}:${server.port}</code>, service listen address, must be configured as the same as the web container.</p><h3 id="servicecomb-rest-servlet-urlpattern" tabindex="-1"><a class="header-anchor" href="#servicecomb-rest-servlet-urlpattern"><span>servicecomb.rest.servlet.urlPattern</span></a></h3><p><code>String</code>=<code>/servcomber/*</code>, coexisting paths with springMvc.</p><h3 id="server-servlet-path" tabindex="-1"><a class="header-anchor" href="#server-servlet-path"><span>server.servlet.path</span></a></h3><p><code>String</code>=<code>/</code>, default path of SpringMvc, in case of conflict <code>/mvc/</code> is recommended.</p><h3 id="servicecomb-provider-rest-scanrestcontroller" tabindex="-1"><a class="header-anchor" href="#servicecomb-provider-rest-scanrestcontroller"><span>servicecomb.provider.rest.scanRestController</span></a></h3><p><code>Boolean</code>=<code>false</code>, whether to scan the RestController, i.e. not distinguish from @RestSchma.</p><h3 id="servicecomb-handler-chain-consumer-default" tabindex="-1"><a class="header-anchor" href="#servicecomb-handler-chain-consumer-default"><span>servicecomb.handler.chain.Consumer.default</span></a></h3><p><code>List&lt;String&gt;</code>=<code>loadbalance, auth-consumer</code>, default handler chain of Consumer.</p><h3 id="servicecomb-handler-chain-provider-default" tabindex="-1"><a class="header-anchor" href="#servicecomb-handler-chain-provider-default"><span>servicecomb.handler.chain.Provider.default</span></a></h3><p><code>List&lt;String&gt;</code>=<code>auth9-provider</code>, default handler chain of Provider.</p><h2 id="_5d-2-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-2-wings-enabled-79-properties"><span>5D.2.wings-enabled-79.properties</span></a></h2><h2 id="_5d-3-wings-servicecomb-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-3-wings-servicecomb-79-properties"><span>5D.3.wings-servicecomb-79.properties</span></a></h2><h3 id="wings-batrider-handler-auth-skip-schema" tabindex="-1"><a class="header-anchor" href="#wings-batrider-handler-auth-skip-schema"><span>wings.batrider.handler.auth-skip-schema</span></a></h3><p><code>Set&lt;String&gt;</code>=<code>scb-discovery</code>, which schemaId skip to auth.</p><h2 id="_5d-4-wings-warlock-security-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-4-wings-warlock-security-79-properties"><span>5D.4.wings-warlock-security-79.properties</span></a></h2><h3 id="wings-warlock-security-web-ignore" tabindex="-1"><a class="header-anchor" href="#wings-warlock-security-web-ignore"><span>wings.warlock.security.web-ignore</span></a></h3><p><code>Map&lt;String, String&gt;</code>, <code>servicecomb</code>=<code>/servcomber/**</code>, RestSchema URLs without servlet processing.</p>',37),a=[o];function t(n,d){return i(),r("div",null,a)}const h=e(c,[["render",t],["__file","5d-prop-batrider.html.vue"]]),v=JSON.parse('{"path":"/5-batrider/5d-prop-batrider.html","title":"5D.Batrider Properties","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"folder-tree","category":["Batrider","Property"],"description":"5D.Batrider Properties Properties of servicecomb as microservices. 5D.1.spring-servicecomb-79.properties Apache ServiceComb Offical Document Configuration. servicecomb.service.a...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/5-batrider/5d-prop-batrider.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/5-batrider/5d-prop-batrider.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"5D.Batrider Properties"}],["meta",{"property":"og:description","content":"5D.Batrider Properties Properties of servicecomb as microservices. 5D.1.spring-servicecomb-79.properties Apache ServiceComb Offical Document Configuration. servicecomb.service.a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5D.Batrider Properties\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"5D.1.spring-servicecomb-79.properties","slug":"_5d-1-spring-servicecomb-79-properties","link":"#_5d-1-spring-servicecomb-79-properties","children":[{"level":3,"title":"servicecomb.service.application","slug":"servicecomb-service-application","link":"#servicecomb-service-application","children":[]},{"level":3,"title":"servicecomb.service.name","slug":"servicecomb-service-name","link":"#servicecomb-service-name","children":[]},{"level":3,"title":"servicecomb.service.version","slug":"servicecomb-service-version","link":"#servicecomb-service-version","children":[]},{"level":3,"title":"servicecomb.service.zero-config.enabled","slug":"servicecomb-service-zero-config-enabled","link":"#servicecomb-service-zero-config-enabled","children":[]},{"level":3,"title":"servicecomb.service.zero-config.multicast.address","slug":"servicecomb-service-zero-config-multicast-address","link":"#servicecomb-service-zero-config-multicast-address","children":[]},{"level":3,"title":"servicecomb.service.zero-config.multicast.group","slug":"servicecomb-service-zero-config-multicast-group","link":"#servicecomb-service-zero-config-multicast-group","children":[]},{"level":3,"title":"servicecomb.service.registry.address","slug":"servicecomb-service-registry-address","link":"#servicecomb-service-registry-address","children":[]},{"level":3,"title":"servicecomb.rest.address","slug":"servicecomb-rest-address","link":"#servicecomb-rest-address","children":[]},{"level":3,"title":"servicecomb.rest.servlet.urlPattern","slug":"servicecomb-rest-servlet-urlpattern","link":"#servicecomb-rest-servlet-urlpattern","children":[]},{"level":3,"title":"server.servlet.path","slug":"server-servlet-path","link":"#server-servlet-path","children":[]},{"level":3,"title":"servicecomb.provider.rest.scanRestController","slug":"servicecomb-provider-rest-scanrestcontroller","link":"#servicecomb-provider-rest-scanrestcontroller","children":[]},{"level":3,"title":"servicecomb.handler.chain.Consumer.default","slug":"servicecomb-handler-chain-consumer-default","link":"#servicecomb-handler-chain-consumer-default","children":[]},{"level":3,"title":"servicecomb.handler.chain.Provider.default","slug":"servicecomb-handler-chain-provider-default","link":"#servicecomb-handler-chain-provider-default","children":[]}]},{"level":2,"title":"5D.2.wings-enabled-79.properties","slug":"_5d-2-wings-enabled-79-properties","link":"#_5d-2-wings-enabled-79-properties","children":[]},{"level":2,"title":"5D.3.wings-servicecomb-79.properties","slug":"_5d-3-wings-servicecomb-79-properties","link":"#_5d-3-wings-servicecomb-79-properties","children":[{"level":3,"title":"wings.batrider.handler.auth-skip-schema","slug":"wings-batrider-handler-auth-skip-schema","link":"#wings-batrider-handler-auth-skip-schema","children":[]}]},{"level":2,"title":"5D.4.wings-warlock-security-79.properties","slug":"_5d-4-wings-warlock-security-79-properties","link":"#_5d-4-wings-warlock-security-79-properties","children":[{"level":3,"title":"wings.warlock.security.web-ignore","slug":"wings-warlock-security-web-ignore","link":"#wings-warlock-security-web-ignore","children":[]}]}],"git":{"createdTime":1660370231000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":5}]},"readingTime":{"minutes":0.69,"words":208},"filePathRelative":"5-batrider/5d-prop-batrider.md","localizedDate":"August 13, 2022","autoDesc":true}');export{h as comp,v as data};
