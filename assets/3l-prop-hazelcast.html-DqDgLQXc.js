import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as c,c as l,b as e,e as a,d as i,f as t}from"./app-DPtdOwt6.js";const r={},d=e("h1",{id:"_3l-hazelcast的属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3l-hazelcast的属性"},[e("span",null,"3L.Hazelcast的属性")])],-1),p=e("p",null,"有关Slardar中提供的Hazelcast的设置",-1),h={href:"https://docs.hazelcast.com/imdg/4.2/system-properties",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.hazelcast.com/imdg/4.2/management/diagnostics",target:"_blank",rel:"noopener noreferrer"},m=t('<h2 id="_3l-1-wings-prop-promotion-cnf" tabindex="-1"><a class="header-anchor" href="#_3l-1-wings-prop-promotion-cnf"><span>3L.1.wings-prop-promotion.cnf</span></a></h2><ul><li>spring.session.hazelcast.map-name</li><li>wings.slardar.hazelcast.cluster-name</li><li>spring.boot.admin.hazelcast.event-store</li><li>spring.boot.admin.hazelcast.sent-notifications</li><li>hazelcast.jmx</li><li>hazelcast.diagnostics.enabled</li><li>hazelcast.diagnostics.metric.level</li><li>hazelcast.diagnostics.pending.invocations.period.seconds</li><li>hazelcast.diagnostics.slowoperations.period.seconds</li><li>hazelcast.diagnostics.directory</li><li>hazelcast.diagnostics.filename.prefix</li><li>hazelcast.diagnostics.max.rolled.file.size.mb</li><li>hazelcast.diagnostics.max.rolled.file.count</li><li>hazelcast.diagnostics.metrics.period.seconds</li><li>hazelcast.diagnostics.invocation.sample.period.seconds</li><li>hazelcast.diagnostics.invocation.slow.threshold.seconds</li><li>hazelcast.diagnostics.invocation-profiler.period.seconds</li><li>hazelcast.diagnostics.operation-profiler.period.seconds</li><li>hazelcast.diagnostics.memberinfo.period.second</li><li>hazelcast.diagnostics.event.queue.period.seconds</li><li>hazelcast.diagnostics.event.queue.threshold</li><li>hazelcast.diagnostics.event.queue.samples</li><li>hazelcast.diagnostics.systemlog.enabled</li><li>hazelcast.diagnostics.systemlog.partitions</li><li>hazelcast.diagnostics.storeLatency.period.seconds</li><li>hazelcast.diagnostics.storeLatency.reset.period.seconds</li><li>hazelcast.diagnostics.operation-heartbeat.seconds</li><li>hazelcast.diagnostics.operation-heartbeat.max-deviation-percentage</li><li>hazelcast.diagnostics.member-heartbeat.seconds</li><li>hazelcast.diagnostics.member-heartbeat.max-deviation-percentage</li><li>hazelcast.diagnostics.operationthreadsamples.period.seconds</li><li>hazelcast.diagnostics.operationthreadsamples.sampler.period.millis</li><li>hazelcast.diagnostics.operationthreadsamples.includeName</li><li>hazelcast.diagnostics.wan.period.seconds</li></ul><h2 id="_3l-2-spring-hazelcast-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-2-spring-hazelcast-77-properties"><span>3L.2.spring-hazelcast-77.properties</span></a></h2><p>若xml中使用spring变量，需要wings-prop-promotion.cnf提升到system Resource, <code>file:/data/xxx</code>, <code>http://www</code>, <code>classpath:/xxx</code></p><h3 id="spring-hazelcast-config" tabindex="-1"><a class="header-anchor" href="#spring-hazelcast-config"><span>spring.hazelcast.config</span></a></h3><ul><li><code>classpath:/extra-conf/hazelcast-client.xml</code> - 客户端配置</li><li><code>classpath:/extra-conf/hazelcast-server.xml</code> - 服务端配置</li></ul><h2 id="_3l-3-spring-session-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-3-spring-session-77-properties"><span>3L.3.spring-session-77.properties</span></a></h2><p>引入hazelcast后，则默认使用Hazelcast管理session，编号77优先级高于默认。</p><h3 id="spring-session-store-type" tabindex="-1"><a class="header-anchor" href="#spring-session-store-type"><span>spring.session.store-type</span></a></h3><p><code>String</code>=<code>hazelcast</code></p><h2 id="_3l-4-wings-hazelcast-77-properties" tabindex="-1"><a class="header-anchor" href="#_3l-4-wings-hazelcast-77-properties"><span>3L.4.wings-hazelcast-77.properties</span></a></h2><p>Hazelcast默认值，监控及诊断设置，</p>',12),z={href:"https://docs.hazelcast.com/imdg/4.2/management/diagnostics",target:"_blank",rel:"noopener noreferrer"},f={href:"https://codecentric.github.io/spring-boot-admin/current/#clustering-support",target:"_blank",rel:"noopener noreferrer"},u=t('<h3 id="wings-slardar-hazelcast-cluster-name" tabindex="-1"><a class="header-anchor" href="#wings-slardar-hazelcast-cluster-name"><span>wings.slardar.hazelcast.cluster-name</span></a></h3><p><code>String</code>=<code>wings-${git.commit.id.full}</code>，自行修改集群名字。</p><p>因社区版无安全设置，仅通过集群名便可加入，因此建议使用密码强度的名字，如32字符随机数，避开扫描。</p><h3 id="wings-slardar-hazelcast-diagnostics-period-seconds" tabindex="-1"><a class="header-anchor" href="#wings-slardar-hazelcast-diagnostics-period-seconds"><span>wings.slardar.hazelcast.diagnostics.period-seconds</span></a></h3><p><code>Integer</code>=<code>600</code>，diagnostics周期</p><h3 id="spring-boot-admin-hazelcast-event-store" tabindex="-1"><a class="header-anchor" href="#spring-boot-admin-hazelcast-event-store"><span>spring.boot.admin.hazelcast.event-store</span></a></h3><p><code>String</code>=<code>spring-boot-admin-event-store</code></p><p>Name of the Hazelcast-map to store the events</p><h3 id="spring-boot-admin-hazelcast-sent-notifications" tabindex="-1"><a class="header-anchor" href="#spring-boot-admin-hazelcast-sent-notifications"><span>spring.boot.admin.hazelcast.sent-notifications</span></a></h3><p><code>String</code>=<code>spring-boot-admin-sent-notifications</code></p><p>Name of the Hazelcast-map used to deduplicate the notifications.</p><h3 id="hazelcast-jmx" tabindex="-1"><a class="header-anchor" href="#hazelcast-jmx"><span>hazelcast.jmx</span></a></h3><p><code>Boolean</code>=<code>${spring.jmx.enabled:false}</code>，是否开启jmx</p><h3 id="hazelcast-diagnostics-enabled" tabindex="-1"><a class="header-anchor" href="#hazelcast-diagnostics-enabled"><span>hazelcast.diagnostics.enabled</span></a></h3><p><code>Boolean</code>=<code>false</code>，默认关闭，因CPU消耗过高</p><h3 id="hazelcast-diagnostics-其他设置" tabindex="-1"><a class="header-anchor" href="#hazelcast-diagnostics-其他设置"><span>hazelcast.diagnostics 其他设置</span></a></h3><p>通过属性提升，为Hazelcast设置spring设置的属性值。</p><ul><li><code>hazelcast.diagnostics.metric.level</code>=<code>info</code></li><li><code>hazelcast.diagnostics.filename.prefix</code>=<code>${spring.application.name:wings-default}</code></li><li><code>hazelcast.diagnostics.pending.invocations.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.slowoperations.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.metrics.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.invocation.sample.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.invocation-profiler.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.operation-profiler.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.memberinfo.period.second</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.storeLatency.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li><li><code>hazelcast.diagnostics.operationthreadsamples.period.seconds</code>=<code>${wings.slardar.hazelcast.diagnostics.period-seconds}</code></li></ul>',18);function b(_,w){const s=n("ExternalLinkIcon");return c(),l("div",null,[d,p,e("ul",null,[e("li",null,[e("a",h,[a("https://docs.hazelcast.com/imdg/4.2/system-properties"),i(s)])]),e("li",null,[e("a",g,[a("https://docs.hazelcast.com/imdg/4.2/management/diagnostics"),i(s)])])]),m,e("ul",null,[e("li",null,[e("a",z,[a("https://docs.hazelcast.com/imdg/4.2/management/diagnostics"),i(s)])]),e("li",null,[e("a",f,[a("https://codecentric.github.io/spring-boot-admin/current/#clustering-support"),i(s)])])]),u])}const y=o(r,[["render",b],["__file","3l-prop-hazelcast.html.vue"]]),k=JSON.parse('{"path":"/zh/3-slardar/3l-prop-hazelcast.html","title":"3L.Hazelcast的属性","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"enum","category":["大鱼","属性"],"description":"3L.Hazelcast的属性 有关Slardar中提供的Hazelcast的设置 https://docs.hazelcast.com/imdg/4.2/system-properties https://docs.hazelcast.com/imdg/4.2/management/diagnostics 3L.1.wings-prop-promot...","GIT_REPO_HEAD":"2024-06-10 b1ec3d73a48e6ec52c12b931d1822da253f48375","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/3-slardar/3l-prop-hazelcast.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/3-slardar/3l-prop-hazelcast.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"3L.Hazelcast的属性"}],["meta",{"property":"og:description","content":"3L.Hazelcast的属性 有关Slardar中提供的Hazelcast的设置 https://docs.hazelcast.com/imdg/4.2/system-properties https://docs.hazelcast.com/imdg/4.2/management/diagnostics 3L.1.wings-prop-promot..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-18T08:37:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-18T08:37:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3L.Hazelcast的属性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T08:37:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3L.1.wings-prop-promotion.cnf","slug":"_3l-1-wings-prop-promotion-cnf","link":"#_3l-1-wings-prop-promotion-cnf","children":[]},{"level":2,"title":"3L.2.spring-hazelcast-77.properties","slug":"_3l-2-spring-hazelcast-77-properties","link":"#_3l-2-spring-hazelcast-77-properties","children":[{"level":3,"title":"spring.hazelcast.config","slug":"spring-hazelcast-config","link":"#spring-hazelcast-config","children":[]}]},{"level":2,"title":"3L.3.spring-session-77.properties","slug":"_3l-3-spring-session-77-properties","link":"#_3l-3-spring-session-77-properties","children":[{"level":3,"title":"spring.session.store-type","slug":"spring-session-store-type","link":"#spring-session-store-type","children":[]}]},{"level":2,"title":"3L.4.wings-hazelcast-77.properties","slug":"_3l-4-wings-hazelcast-77-properties","link":"#_3l-4-wings-hazelcast-77-properties","children":[{"level":3,"title":"wings.slardar.hazelcast.cluster-name","slug":"wings-slardar-hazelcast-cluster-name","link":"#wings-slardar-hazelcast-cluster-name","children":[]},{"level":3,"title":"wings.slardar.hazelcast.diagnostics.period-seconds","slug":"wings-slardar-hazelcast-diagnostics-period-seconds","link":"#wings-slardar-hazelcast-diagnostics-period-seconds","children":[]},{"level":3,"title":"spring.boot.admin.hazelcast.event-store","slug":"spring-boot-admin-hazelcast-event-store","link":"#spring-boot-admin-hazelcast-event-store","children":[]},{"level":3,"title":"spring.boot.admin.hazelcast.sent-notifications","slug":"spring-boot-admin-hazelcast-sent-notifications","link":"#spring-boot-admin-hazelcast-sent-notifications","children":[]},{"level":3,"title":"hazelcast.jmx","slug":"hazelcast-jmx","link":"#hazelcast-jmx","children":[]},{"level":3,"title":"hazelcast.diagnostics.enabled","slug":"hazelcast-diagnostics-enabled","link":"#hazelcast-diagnostics-enabled","children":[]},{"level":3,"title":"hazelcast.diagnostics 其他设置","slug":"hazelcast-diagnostics-其他设置","link":"#hazelcast-diagnostics-其他设置","children":[]}]}],"git":{"createdTime":1687077446000,"updatedTime":1687077446000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":1}]},"readingTime":{"minutes":1.18,"words":355},"filePathRelative":"zh/3-slardar/3l-prop-hazelcast.md","localizedDate":"2023年6月18日","autoDesc":true}');export{y as comp,k as data};