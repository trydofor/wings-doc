import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as r,c as l,b as n,e as s,d as a,f as t}from"./app-O8GUlV1o.js";const c={},p=t('<h1 id="_9b2-actuator-admin监控" tabindex="-1"><a class="header-anchor" href="#_9b2-actuator-admin监控"><span>9B2.actuator/admin监控</span></a></h1><p>wings体系下，默认启动了基本的监控</p><ul><li>Wings 启停和日志通知</li><li>Hazelcast Management Center</li><li>Spring Boot Admin</li><li>Prometheus Grafana</li><li>Sentry 日志监控</li></ul><h2 id="_9b2-1-启停和日志" tabindex="-1"><a class="header-anchor" href="#_9b2-1-启停和日志"><span>9B2.1.启停和日志</span></a></h2><p>Wings自身的监控，分为启动脚本(wings-starter.sh)和程序自身(app)两个部分，默认使用钉钉通知。</p><ul><li>wings-starter.sh - 通过cron: (1)pid是否存在，(2)log是否增长</li><li>wings app - 启动，停止，JVM指标，以及日志中WARN的信息</li></ul><h3 id="启动脚本监控" tabindex="-1"><a class="header-anchor" href="#启动脚本监控"><span>启动脚本监控</span></a></h3><p>通过<code>warn</code>参数，执行监控功能，建议使用crontab定期执行，需要配置参数如下</p><ul><li><code>WARN_TXT</code> - 前置文本，如钉钉中的关键词等</li><li><code>WARN_AGO</code> - 秒数，非空时且日志在N秒内未增长，则报告</li><li><code>WARN_RUN</code> - webhook，非空时，用来发生报告，默认钉钉</li></ul><h3 id="程序自身监控" tabindex="-1"><a class="header-anchor" href="#程序自身监控"><span>程序自身监控</span></a></h3><p>程序自身监控的缺点是【谁来监控监控者】，需要程序自身能够健康的执行。 默认配置详见wings-monitor.properties，需要关注的配置项有，</p><ul><li><code>spring.application.name</code> - 定位app，必须设置</li><li><code>wings.slardar.monitor.cron</code> - 默认每10分钟扫描一次</li><li><code>.log.default.file</code> - 默认日志文件 <code>logging.file.name</code></li><li><code>.view.domain</code> - 对外的查看日志的url，建议设置</li><li><code>.ding-notice</code> - 钉钉设置，默认使用monitor</li></ul><h2 id="_9b2-2-hazelcast监控" tabindex="-1"><a class="header-anchor" href="#_9b2-2-hazelcast监控"><span>9B2.2.hazelcast监控</span></a></h2><p>Hazelcast版本随spring boot同步更新，主要用作caching, Session，其次是Event和Lock，Messaging等。</p>',14),d={href:"https://docs.hazelcast.com/imdg/4.2/",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"在wings的基本应用中，一般只有3个节点(admin/devops/front)构成的集群，使用log和ManagementCenter监控。 因3节点集群的强壮性刚好够用，以CP Subsystem Unsafe Mode运行，仅能提供弱一致性保证，不如CP的强一致性。",-1),u=n("ul",null,[n("li",null,"CP Subsystem Management APIs are not available."),n("li",null,"split-brain protection is not supported.")],-1),v={href:"https://docs.hazelcast.com/management-center/5.0/",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://repository.hazelcast.com/download/management-center/hazelcast-management-center-5.0.4.zip
<span class="token function">unzip</span> hazelcast-management-center-5.0.4.zip
<span class="token builtin class-name">cd</span> hazelcast-management-center-5.0.4
<span class="token function">nohup</span> bin/start.sh <span class="token number">8090</span> <span class="token operator">&gt;</span>hazelcast-management-center.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={href:"http://localhost:8090",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"_9b2-3-spring-boot-admin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9b2-3-spring-boot-admin"},[n("span",null,"9B2.3.Spring Boot Admin")])],-1),g=n("p",null,"以devops为server，其他app为client，自动启动和注册，参考wings-boot-admin.properties配置。 其中需要注意的是，用户权限设置，密码是否强壮，钉钉token和关键词是否正确。",-1),_=n("p",null,"其中，server和client间是basic验证的wings定制版，以时间戳和md5摘要，取代明文传送密码，但安全性仍不高。 因此，除了密码强壮外，尽量注意内网隔离，传输层加密，尽量使用https等。",-1),f=n("p",null,"如演示工程结构一样，在devops的dependency中增加spring-boot-admin-starter-server 而在其他boot应用，如admin中，增加spring-boot-admin-starter-client依赖。 同时，分别配置wings-boot-admin.properties。 演示工程中在common统一配置的。",-1),y=n("h2",{id:"_9b2-4-prometheus-grafana",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9b2-4-prometheus-grafana"},[n("span",null,"9B2.4.Prometheus Grafana")])],-1),w={href:"https://prometheus.io/docs/prometheus/latest/getting_started/",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>prometheus 仅作为数据库，并且裸奔，没有用户验证，需要自己保护</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 检查 prometheus</span>
<span class="token function">curl</span> <span class="token parameter variable">-G</span> http://localhost:8093/actuator/prometheus <span class="token parameter variable">-u</span> <span class="token string">&quot;boot-admin-client:<span class="token variable">\${DING_TALK_TOKEN}</span>&quot;</span>
<span class="token comment"># prometheus配置文件</span>
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

<span class="token comment"># 启动docker</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> prometheus <span class="token punctuation">\\</span>
 <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /Users/trydofor/Docker/prometheus/conf:/etc/prometheus <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /Users/trydofor/Docker/prometheus/data:/prometheus <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 <span class="token punctuation">\\</span>
prom/prometheus

<span class="token comment"># prometheus配置文件</span>
<span class="token function">tee</span> /Users/trydofor/Docker/grafana/conf/grafana.ini <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[security]
admin_user = admin
admin_password = <span class="token variable">\${DING_TALK_TOKEN}</span>
EOF</span>

<span class="token comment"># 启动docker</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> grafana-oss <span class="token punctuation">\\</span>
 <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /Users/trydofor/Docker/grafana/conf:/etc/grafana <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> /Users/trydofor/Docker/grafana/data:/var/lib/grafana <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token punctuation">\\</span>
grafana/grafana-oss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后导入 预定义的面板。</p>`,3),z={href:"https://grafana.com/grafana/dashboards/4701",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"_9b2-5-sentry-日志监控",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9b2-5-sentry-日志监控"},[n("span",null,"9B2.5.Sentry 日志监控")])],-1),N={href:"https://sentry.io",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/getsentry/self-hosted",target:"_blank",rel:"noopener noreferrer"},B=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#https://develop.sentry.dev/self-hosted/</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> sendtry.tgz https://github.com/getsentry/self-hosted/archive/refs/tags/22.2.0.tar.gz 
<span class="token function">tar</span> xzf sendtry.tgz
<span class="token builtin class-name">cd</span> self-hosted-22.2.0/
./install.sh
<span class="token comment"># https://docs.docker.com/engine/install/ubuntu/</span>
<span class="token comment"># https://docs.docker.com/engine/install/linux-postinstall/</span>
<span class="token comment"># 修改mail.*对应的邮件配置项，</span>
<span class="token function">vi</span> sentry/config.yml
<span class="token comment">#mail.backend: &#39;smtp&#39;</span>
<span class="token comment">#mail.host: &#39;smtp.exmail.qq.com&#39;</span>
<span class="token comment">#mail.port: 465</span>
<span class="token comment">#mail.use-ssl: true</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token comment"># 修改其他配置，可以先stop再up</span>
<span class="token function">docker-compose</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(M,D){const e=o("ExternalLinkIcon");return r(),l("div",null,[p,n("p",null,[n("a",d,[s("Hazelcast IMDG"),a(e)]),s(" 开源版是Apache2许可证（包括独立部署和SpringBoot中的Runtime形式）， 相比于Pro和Enterprise版，主要缺少了Persistence和Security suite，在内网中影响不大。")]),m,u,n("p",null,[n("a",v,[s("Management Center"),a(e)]),s(" 无许可时，仅能监控最多3个成员的集群。 使用时注意要设置强壮密码，公网上要禁用一些不安全选项，如script")]),h,n("p",null,[s("访问 "),n("a",b,[s("http://localhost:8090"),a(e)]),s("，同时设置好足够强度的密码即可。 wings-starter.sh同级目录下生成diagnostics.log，可查看Metric及其他信息。wings默认的period.seconds是600，即10分钟。")]),k,g,_,f,y,n("p",null,[s("使用 "),n("a",w,[s("prometheus"),a(e)]),s(" pull数据。 若需要push形式，可使用 pushgateway")]),x,n("p",null,[n("a",z,[s("JVM Micrometer / 4701"),a(e)])]),q,n("p",null,[s("可以使用"),n("a",N,[s("官方服务"),a(e)]),s("或者"),n("a",A,[s("官方docker"),a(e)])]),B])}const T=i(c,[["render",E],["__file","9b2.actuator-admin.html.vue"]]);export{T as default};