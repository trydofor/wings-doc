import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as l,b as e,e as n,d as s,f as t}from"./app-Cay0Goiz.js";const c={},p=t('<h1 id="_9b2-actuator-admin-monitor" tabindex="-1"><a class="header-anchor" href="#_9b2-actuator-admin-monitor"><span>9B2.Actuator/Admin Monitor</span></a></h1><p>In Wings, basic monitoring is enabled by default</p><ul><li>Wings start/stop and log notification</li><li>Hazelcast Management Center</li><li>Spring Boot Admin</li><li>Prometheus Grafana</li><li>Sentry Log Monitor</li></ul><h2 id="_9b2-1-start-stop-and-log" tabindex="-1"><a class="header-anchor" href="#_9b2-1-start-stop-and-log"><span>9B2.1.Start/Stop and Log</span></a></h2><p>By default, Wings self-monitoring has two parts: the script (wings-starter.sh) and the application itself (app), which posts notifications via Dingtalk.</p><ul><li>wings-starter.sh - via cron: (1) whether pid exists, (2) whether log grows</li><li>wings app - start, stop, JVM metrics, and WARN in logs</li></ul><h3 id="_1a-script-monitoring" tabindex="-1"><a class="header-anchor" href="#_1a-script-monitoring"><span>1a.Script Monitoring</span></a></h3><p>Using the <code>warn</code> argument to run the monitor, crontab is recommended if monitor periodically, the following properties should be config.</p><ul><li><code>WARN_TXT</code> - preceding text, e.g. keywords in the Dingtalk, etc.</li><li><code>WARN_AGO</code> - seconds, if not empty and the log NOT grow in N seconds, it will report</li><li><code>WARN_RUN</code> - webhook, if not empty and there is any warning, it will report</li></ul><h3 id="_1b-itself-monitoring" tabindex="-1"><a class="header-anchor" href="#_1b-itself-monitoring"><span>1b.Itself Monitoring</span></a></h3><p>The disadvantage of the itself monitoring is &quot;Who monitors the monitor&quot;, it needs the app itself to be able to execute healthily.</p><p>The default config is detailed in wings-monitor.properties, and the key points are,</p><ul><li><code>spring.application.name</code> - locate the app, required</li><li><code>wings.slardar.monitor.cron</code> - scans every 10 minutes by default</li><li><code>.log.default.file</code> - default log file <code>logging.file.name</code></li><li><code>.view.domain</code> - the url to view logs externally, recommended</li><li><code>.ding-notice</code> - Dingtalk settings, <code>monitor</code> by default</li></ul><h2 id="_9b2-2-hazelcast-monitor" tabindex="-1"><a class="header-anchor" href="#_9b2-2-hazelcast-monitor"><span>9B2.2.hazelcast Monitor</span></a></h2><p>Hazelcast keep the same version with spring boot, mainly used as caching, Session, Event and Lock, Messaging and so on.</p>',15),d={href:"https://docs.hazelcast.com/imdg/4.2/",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"In the basic deployment of Wings, there is typically only a 3-node cluster (admin/devops/front) with log and ManagementCenter monitoring. Because the 3-node cluster is just robust enough to run in CP Subsystem Unsafe Mode, it only provides weak consistency assurance, which is not as strong as CP.",-1),u=e("ul",null,[e("li",null,"CP Subsystem Management APIs are not available."),e("li",null,"split-brain protection is not supported.")],-1),h={href:"https://docs.hazelcast.com/management-center/5.0/",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://repository.hazelcast.com/download/management-center/hazelcast-management-center-5.0.4.zip
<span class="token function">unzip</span> hazelcast-management-center-5.0.4.zip
<span class="token builtin class-name">cd</span> hazelcast-management-center-5.0.4
<span class="token function">nohup</span> bin/start.sh <span class="token number">8090</span> <span class="token operator">&gt;</span>hazelcast-management-center.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={href:"http://localhost:8090",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"_9b2-3-spring-boot-admin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b2-3-spring-boot-admin"},[e("span",null,"9B2.3.Spring Boot Admin")])],-1),f=e("p",null,"With devops as server and other apps as client, autostart and registration, see the wings-boot-admin.properties. Among them, we need to take care of the user permission settings, whether the password is strong, and whether the DingTalk token and keywords are correct.",-1),k=e("p",null,"Between server and client, there is a Wings adapted version of BASIC authentication, with timestamp and md5 digest, instead of plaintext transmission of password, but the security is still not high. Therefore, in addition to strong passwords, try to use intranet isolation, transport layer encryption, try to use https, etc.",-1),_=e("p",null,"As in the demo project structure, devops deps on spring-boot-admin-starter-server, And in other boot applications, such as admin, deps on spring-boot-admin-starter-client. Also, configure wings-boot-admin.properties separately. The demo project is configured in common uniformly.",-1),y=e("h2",{id:"_9b2-4-prometheus-grafana",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b2-4-prometheus-grafana"},[e("span",null,"9B2.4.Prometheus Grafana")])],-1),w={href:"https://prometheus.io/docs/prometheus/latest/getting_started/",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>prometheus is only used as a database and is naked, without user authentication, and needs to be protected by itself.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># check prometheus</span>
<span class="token function">curl</span> <span class="token parameter variable">-G</span> http://localhost:8093/actuator/prometheus <span class="token parameter variable">-u</span> <span class="token string">&quot;boot-admin-client:<span class="token variable">\${DING_TALK_TOKEN}</span>&quot;</span>
<span class="token comment"># prometheus config</span>
<span class="token function">tee</span> /Users/trydofor/Docker/prometheus/conf/prometheus.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
scrape_configs:
  - job_name: &quot;wings-winx&quot;
    metrics_path: &quot;/actuator/prometheus&quot;
    static_configs:
      - targets: 
        - &quot;host.docker.internal:8091&quot;
        - &quot;host.docker.internal:8092&quot;
        - &quot;host.docker.internal:8093&quot;
    basic_auth:
      username: &quot;boot-admin-client&quot;
      password: &quot;<span class="token variable">\${DING_TALK_TOKEN}</span>&quot;
EOF</span>

<span class="token comment"># start docker</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> prometheus <span class="token punctuation">\\</span>
 <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /Users/trydofor/Docker/prometheus/conf:/etc/prometheus <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /Users/trydofor/Docker/prometheus/data:/prometheus <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 <span class="token punctuation">\\</span>
prom/prometheus

<span class="token comment"># prometheus config</span>
<span class="token function">tee</span> /Users/trydofor/Docker/grafana/conf/grafana.ini <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[security]
admin_user = admin
admin_password = <span class="token variable">\${DING_TALK_TOKEN}</span>
EOF</span>

<span class="token comment"># start docker</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> grafana-oss <span class="token punctuation">\\</span>
 <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /Users/trydofor/Docker/grafana/conf:/etc/grafana <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /Users/trydofor/Docker/grafana/data:/var/lib/grafana <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token punctuation">\\</span>
grafana/grafana-oss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then import the predefined dashboards.</p>`,3),M={href:"https://grafana.com/grafana/dashboards/4701",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"_9b2-5-sentry-log-monitor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b2-5-sentry-log-monitor"},[e("span",null,"9B2.5.Sentry Log Monitor")])],-1),B={href:"https://sentry.io",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/getsentry/self-hosted",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#https://develop.sentry.dev/self-hosted/</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> sendtry.tgz https://github.com/getsentry/self-hosted/archive/refs/tags/22.2.0.tar.gz 
<span class="token function">tar</span> xzf sendtry.tgz
<span class="token builtin class-name">cd</span> self-hosted-22.2.0/
./install.sh
<span class="token comment"># https://docs.docker.com/engine/install/ubuntu/</span>
<span class="token comment"># https://docs.docker.com/engine/install/linux-postinstall/</span>
<span class="token comment"># Modify the mail.* configuration</span>
<span class="token function">vi</span> sentry/config.yml
<span class="token comment">#mail.backend: &#39;smtp&#39;</span>
<span class="token comment">#mail.host: &#39;smtp.exmail.qq.com&#39;</span>
<span class="token comment">#mail.port: 465</span>
<span class="token comment">#mail.use-ssl: true</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token comment"># Modify others, you can stop and then up</span>
<span class="token function">docker-compose</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function T(q,N){const a=i("ExternalLinkIcon");return r(),l("div",null,[p,e("p",null,[e("a",d,[n("Hazelcast IMDG"),s(a)]),n(" The open source version is licensed under Apache2 (including standalone deployment and Runtime in SpringBoot). Compared to the Pro and Enterprise versions, it lacks the Persistence and Security suite, which has little impact in the intranet.")]),m,u,e("p",null,[e("a",h,[n("Management Center"),s(a)]),n(" can only monitor clusters with up to 3 members when no license is available. Be sure to set strong passwords when using it, and disable some insecure options on the public network, such as script")]),g,e("p",null,[n("Just visit "),e("a",b,[n("http://localhost:8090"),s(a)]),n(" and set a strong enough password. The wings-starter.sh sibling directory generates diagnostics.log to view Metric and other information. wings default period.seconds is 600, i.e. 10 minutes.")]),v,f,k,_,y,e("p",null,[n("Use "),e("a",w,[n("prometheus"),s(a)]),n(" to pull data. If you need push form, use pushgateway.")]),A,e("p",null,[e("a",M,[n("JVM Micrometer / 4701"),s(a)])]),x,e("p",null,[n("You can use "),e("a",B,[n("official service"),s(a)]),n(" or "),e("a",z,[n("official docker"),s(a)])]),S])}const I=o(c,[["render",T],["__file","9b2.actuator-admin.html.vue"]]),P=JSON.parse('{"path":"/9-example/9b.spring-boot/9b2.actuator-admin.html","title":"9B2.Actuator/Admin Monitor","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"rank","category":["Practice","Monitor"],"description":"9B2.Actuator/Admin Monitor In Wings, basic monitoring is enabled by default Wings start/stop and log notification Hazelcast Management Center Spring Boot Admin Prometheus Grafan...","GIT_REPO_HEAD":"2024-06-08 d7a73e7d60c607023b23709cc3624ae1945962f4","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/9-example/9b.spring-boot/9b2.actuator-admin.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/9-example/9b.spring-boot/9b2.actuator-admin.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"9B2.Actuator/Admin Monitor"}],["meta",{"property":"og:description","content":"9B2.Actuator/Admin Monitor In Wings, basic monitoring is enabled by default Wings start/stop and log notification Hazelcast Management Center Spring Boot Admin Prometheus Grafan..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T02:16:40.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-03-02T02:16:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9B2.Actuator/Admin Monitor\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-02T02:16:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9B2.1.Start/Stop and Log","slug":"_9b2-1-start-stop-and-log","link":"#_9b2-1-start-stop-and-log","children":[{"level":3,"title":"1a.Script Monitoring","slug":"_1a-script-monitoring","link":"#_1a-script-monitoring","children":[]},{"level":3,"title":"1b.Itself Monitoring","slug":"_1b-itself-monitoring","link":"#_1b-itself-monitoring","children":[]}]},{"level":2,"title":"9B2.2.hazelcast Monitor","slug":"_9b2-2-hazelcast-monitor","link":"#_9b2-2-hazelcast-monitor","children":[]},{"level":2,"title":"9B2.3.Spring Boot Admin","slug":"_9b2-3-spring-boot-admin","link":"#_9b2-3-spring-boot-admin","children":[]},{"level":2,"title":"9B2.4.Prometheus Grafana","slug":"_9b2-4-prometheus-grafana","link":"#_9b2-4-prometheus-grafana","children":[]},{"level":2,"title":"9B2.5.Sentry Log Monitor","slug":"_9b2-5-sentry-log-monitor","link":"#_9b2-5-sentry-log-monitor","children":[]}],"git":{"createdTime":1680228107000,"updatedTime":1709345800000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":5}]},"readingTime":{"minutes":2.6,"words":780},"filePathRelative":"9-example/9b.spring-boot/9b2.actuator-admin.md","localizedDate":"March 31, 2023","autoDesc":true}');export{I as comp,P as data};