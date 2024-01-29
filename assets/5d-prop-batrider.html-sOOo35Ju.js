import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o,c as i,b as e,e as r,d as n,f as d}from"./app-OXbFzGQa.js";const t={},p=e("h1",{id:"_5d-蝙蝠的属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5d-蝙蝠的属性"},[e("span",null,"5D.蝙蝠的属性")])],-1),h=e("p",null,"有关Batrider微服务的设置",-1),l=e("h2",{id:"_5d-1-spring-servicecomb-79-properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5d-1-spring-servicecomb-79-properties"},[e("span",null,"5D.1.spring-servicecomb-79.properties")])],-1),v={href:"https://servicecomb.apache.org/references/java-chassis/zh_CN/",target:"_blank",rel:"noopener noreferrer"},b=d('<h3 id="servicecomb-service-application" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-application"><span>servicecomb.service.application</span></a></h3><p><code>String</code>=<code>${spring.application.name:batrider}</code> 微服务所属的应用名</p><h3 id="servicecomb-service-name" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-name"><span>servicecomb.service.name</span></a></h3><p><code>String</code>=<code>${spring.application.name:batrider}</code> 微服务名, 应确保应用内部唯一</p><h3 id="servicecomb-service-version" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-version"><span>servicecomb.service.version</span></a></h3><p><code>String</code>=<code>0.0.1</code> 微服务版本号</p><h3 id="servicecomb-service-zero-config-enabled" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-enabled"><span>servicecomb.service.zero-config.enabled</span></a></h3><p><code>Boolean</code>=<code>true</code> 是否使用zero-config作为服务中心</p><h3 id="servicecomb-service-zero-config-multicast-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-multicast-address"><span>servicecomb.service.zero-config.multicast.address</span></a></h3><p><code>String</code>=<code>0.0.0.0:6666</code> UDP的本地bind地址</p><h3 id="servicecomb-service-zero-config-multicast-group" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-zero-config-multicast-group"><span>servicecomb.service.zero-config.multicast.group</span></a></h3><p><code>String</code>=<code>225.6.7.8</code> UDP multicast多播group地址</p><h3 id="servicecomb-service-registry-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-service-registry-address"><span>servicecomb.service.registry.address</span></a></h3><p><code>List&lt;String&gt;</code>=<code>http://localhost:30100</code> 服务中心的地址信息，可以配置多个，用逗号分隔</p><h3 id="servicecomb-rest-address" tabindex="-1"><a class="header-anchor" href="#servicecomb-rest-address"><span>servicecomb.rest.address</span></a></h3><p><code>String</code>=<code>${server.address:localhost}:${server.port}</code> 服务监听地址，必须配置为与web容器监听相同</p><h3 id="servicecomb-rest-servlet-urlpattern" tabindex="-1"><a class="header-anchor" href="#servicecomb-rest-servlet-urlpattern"><span>servicecomb.rest.servlet.urlPattern</span></a></h3><p><code>String</code>=<code>/servcomber/*</code> 与springMvc同时存在路径</p><h3 id="server-servlet-path" tabindex="-1"><a class="header-anchor" href="#server-servlet-path"><span>server.servlet.path</span></a></h3><p><code>String</code>=<code>/</code> SpringMvc默认的路径，冲突时设置，推荐<code>/mvc/</code></p><h3 id="servicecomb-provider-rest-scanrestcontroller" tabindex="-1"><a class="header-anchor" href="#servicecomb-provider-rest-scanrestcontroller"><span>servicecomb.provider.rest.scanRestController</span></a></h3><p><code>Boolean</code>=<code>false</code> 是否扫描RestController，即不和@RestSchma区分</p><h3 id="servicecomb-handler-chain-consumer-default" tabindex="-1"><a class="header-anchor" href="#servicecomb-handler-chain-consumer-default"><span>servicecomb.handler.chain.Consumer.default</span></a></h3><p><code>List&lt;String&gt;</code>=<code>loadbalance, auth-consumer</code> 消费者默认处理链</p><h3 id="servicecomb-handler-chain-provider-default" tabindex="-1"><a class="header-anchor" href="#servicecomb-handler-chain-provider-default"><span>servicecomb.handler.chain.Provider.default</span></a></h3><p><code>List&lt;String&gt;</code>=<code>auth9-provider</code> 提供者默认处理链</p><h2 id="_5d-2-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-2-wings-enabled-79-properties"><span>5D.2.wings-enabled-79.properties</span></a></h2><h2 id="_5d-3-wings-servicecomb-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-3-wings-servicecomb-79-properties"><span>5D.3.wings-servicecomb-79.properties</span></a></h2><h3 id="wings-batrider-handler-auth-skip-schema" tabindex="-1"><a class="header-anchor" href="#wings-batrider-handler-auth-skip-schema"><span>wings.batrider.handler.auth-skip-schema</span></a></h3><p><code>Set&lt;String&gt;</code>=<code>scb-discovery</code> 不需要验证的schemaId</p><h2 id="_5d-4-wings-warlock-security-79-properties" tabindex="-1"><a class="header-anchor" href="#_5d-4-wings-warlock-security-79-properties"><span>5D.4.wings-warlock-security-79.properties</span></a></h2><h3 id="wings-warlock-security-web-ignore" tabindex="-1"><a class="header-anchor" href="#wings-warlock-security-web-ignore"><span>wings.warlock.security.web-ignore</span></a></h3><p><code>Map&lt;String, String&gt;</code>类型，<code>servicecomb</code>=<code>/servcomber/**</code> RestSchema的URL不需要servlet处理</p>',33);function m(g,f){const c=a("ExternalLinkIcon");return o(),i("div",null,[p,h,l,e("p",null,[r("Apache ServiceComb "),e("a",v,[r("官方文档"),n(c)]),r("中的配置")]),b])}const x=s(t,[["render",m],["__file","5d-prop-batrider.html.vue"]]);export{x as default};
