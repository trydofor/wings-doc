import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,b as r,d as n,e as i,f as l,g as o,r as t,o as d}from"./app-B4-M_2GK.js";const p={};function g(w,e){const s=t("Badge");return d(),c("div",null,[e[4]||(e[4]=r('<h1 id="_1d-沉默的属性" tabindex="-1"><a class="header-anchor" href="#_1d-沉默的属性"><span>1D.沉默的属性</span></a></h1><p>有关自动加载，默认工具和行为的属性。</p><h2 id="_1d-1-wings-auto-config-cnf" tabindex="-1"><a class="header-anchor" href="#_1d-1-wings-auto-config-cnf"><span>1D.1.wings-auto-config.cnf</span></a></h2><p>Silencer的入口配置，定义了Silencer的自动加载的路径和模式。 存在多个<code>wings-auto-config*.cnf</code>时，按ascii排序，取最后。</p><h3 id="wings-boot-more" tabindex="-1"><a class="header-anchor" href="#wings-boot-more"><span>wings.boot.more</span></a></h3><p><code>List&lt;String&gt;</code>=<code>application*.*, wings-conf/**/*.*</code></p><p>多协议路径下查找，不支持协议头，同名可多次加载，按优先级覆盖。</p><h3 id="wings-boot-once" tabindex="-1"><a class="header-anchor" href="#wings-boot-once"><span>wings.boot.once</span></a></h3><p><code>List&lt;String&gt;</code>=<code>git.properties, META-INF/build-info.properties</code></p><p>多协议路径下查找，不支持协议头，同名仅按优先级加载一次，后续不会覆盖。</p><h3 id="wings-boot-block" tabindex="-1"><a class="header-anchor" href="#wings-boot-block"><span>wings.boot.block</span></a></h3><p><code>String</code>=<code>wings-conf-block-list.cnf</code></p><p>黑名单文件名</p><h3 id="wings-boot-promo" tabindex="-1"><a class="header-anchor" href="#wings-boot-promo"><span>wings.boot.promo</span></a></h3><p><code>String</code>=<code>wings-prop-promotion.cnf</code></p><p>变量提示文件名</p><h2 id="_1d-2-wings-wings-feature-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-2-wings-wings-feature-79-properties"><span>1D.2.wings-wings.feature-79.properties</span></a></h2><h3 id="wings-feature-error" tabindex="-1"><a class="header-anchor" href="#wings-feature-error"><span>wings.feature.error</span></a></h3><p><code>Map&lt;String, Boolean&gt;</code>=<code>empty</code>，映射限定key(ant-matcher)及其错误处理。</p><ul><li><code>*</code>=<code>true</code> 错误以match处理</li><li><code>pro.*</code>=<code>false</code> 以notMatch处理</li></ul><h3 id="wings-feature-prefix" tabindex="-1"><a class="header-anchor" href="#wings-feature-prefix"><span>wings.feature.prefix</span></a></h3><p><code>Map&lt;String, String&gt;</code>=<code>empty</code>，映射限定key(ant-matcher)及其前缀。</p><ul><li><code>*</code>=<code>wings.enabled</code> 重定义所有前缀。</li></ul><h3 id="wings-feature-enable" tabindex="-1"><a class="header-anchor" href="#wings-feature-enable"><span>wings.feature.enable</span></a></h3><p><code>Map&lt;String, Boolean&gt;</code>=<code>empty</code>，映射限定key(ant-matcher)及其是否匹配。</p><ul><li><code>pro.fessional.wings.warlock.database.autogen.tables.daos.*</code>=<code>false</code></li></ul><h2 id="_1d-3-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-3-wings-enabled-79-properties"><span>1D.3.wings-enabled-79.properties</span></a></h2><p>开关Silencer的功能。</p><h3 id="wings-enabled-silencer-autoconf" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-autoconf"><span>wings.enabled.silencer.autoconf</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否启动自动配置 <code>wings-conf</code> 和 <code>wings-i18n</code></p><h3 id="wings-enabled-silencer-verbose" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-verbose"><span>wings.enabled.silencer.verbose</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否显示wings的conditional信息</p><h3 id="wings-enabled-silencer-scanner" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-scanner"><span>wings.enabled.silencer.scanner</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否自动扫描<code>**/spring/bean/**/*.class</code>，在ApplicationPreparedEvent时触发，在<code>@AutoConfiguration</code>之前</p><h3 id="wings-enabled-silencer-audit-prop" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-audit-prop"><span>wings.enabled.silencer.audit-prop</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否审计属性文件和级联关系</p><h3 id="wings-enabled-silencer-mute-console" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-mute-console"><span>wings.enabled.silencer.mute-console</span></a></h3><p><code>Boolean</code>=<code>true</code>, 是否在有file存在是，静默控制台日志</p><h3 id="wings-enabled-silencer-tweak-clock" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-tweak-clock"><span>wings.enabled.silencer.tweak-clock</span></a></h3><p><code>Boolean</code>=<code>true</code>, 是否支持全局或线程的时钟调整</p><h3 id="wings-enabled-silencer-tweak-logback" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-tweak-logback"><span>wings.enabled.silencer.tweak-logback</span></a></h3><p><code>Boolean</code>=<code>true</code>, 是否支持全局或线程的logback调整</p><h3 id="wings-enabled-silencer-tweak-stack" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-tweak-stack"><span>wings.enabled.silencer.tweak-stack</span></a></h3><p><code>Boolean</code>=<code>true</code>, 是否支持全局或线程的CodeException栈调整</p><h3 id="wings-enabled-silencer-bean-reorder" tabindex="-1"><a class="header-anchor" href="#wings-enabled-silencer-bean-reorder"><span>wings.enabled.silencer.bean-reorder</span></a></h3><p><code>Boolean</code>=<code>true</code>, 是否可以通过<code>wings.reorder.*</code>配置Bean的Order</p><h2 id="_1d-4-spring-logging-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-4-spring-logging-79-properties"><span>1D.4.spring-logging-79.properties</span></a></h2><p>为spring的logging提供了以下配置项。</p><ul><li><code>logging.logback.rollingpolicy.max-file-size</code>=<code>500MB</code></li><li><code>logging.logback.rollingpolicy.max-history</code>=<code>30</code></li><li><code>logging.level.root</code>=<code>INFO</code></li><li><code>logging.pattern.dateformat</code>=<code>yyyy-MM-dd HH:mm:ss.SSS</code></li></ul><h2 id="_1d-5-spring-message-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-5-spring-message-79-properties"><span>1D.5.spring-message-79.properties</span></a></h2><p>为spring.messages提供以下默认项。</p><ul><li><code>spring.messages.always-use-message-format</code>=<code>false</code></li><li><code>spring.messages.basename=</code></li><li><code>spring.messages.cache-duration=</code></li><li><code>spring.messages.encoding</code>=<code>UTF-8</code></li><li><code>spring.messages.fallback-to-system-locale</code>=<code>true</code></li><li><code>spring.messages.use-code-as-default-message</code>=<code>true</code></li></ul><h2 id="_1d-6-wings-i18n-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-6-wings-i18n-79-properties"><span>1D.6.wings-i18n-79.properties</span></a></h2><p>为应用设置默认语言和时区，以及多国语资源。</p><h3 id="wings-silencer-i18n-locale" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-locale"><span>wings.silencer.i18n.locale</span></a></h3><p><code>String=</code>，格式为<code>en_US</code>, <code>zh_CN</code>。默认系统语言。</p><p>对应系统变量的<code>user.language</code>, <code>user.country</code></p><h3 id="wings-silencer-i18n-zoneid" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-zoneid"><span>wings.silencer.i18n.zoneid=</span></a></h3><p><code>String=</code>，默认系统时区，如<code>UTC</code>, <code>GMT+8,</code> <code>Asia/Shanghai</code></p><p>对应系统变量的<code>user.timezone</code></p><h3 id="wings-silencer-i18n-bundle" tabindex="-1"><a class="header-anchor" href="#wings-silencer-i18n-bundle"><span>wings.silencer.i18n.bundle</span></a></h3><p><code>List&lt;String&gt;</code>=<code>classpath*:/wings-i18n/**/*.properties</code></p><p>默认的resource配置，逗号分隔的AntPath格式。</p><h2 id="_1d-7-wings-autolog-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-7-wings-autolog-79-properties"><span>1D.7.wings-autolog-79.properties</span></a></h2><p>自动切换appender的日志级别</p><h3 id="wings-silencer-autolog-level" tabindex="-1"><a class="header-anchor" href="#wings-silencer-autolog-level"><span>wings.silencer.autolog.level</span></a></h3><p><code>String</code>=<code>WARN</code>，Slf4j格式</p><p>自动设置日志的级别，如 ALL, TRACE, DEBUG, INFO, WARN, ERROR, OFF</p><h3 id="wings-silencer-autolog-target" tabindex="-1"><a class="header-anchor" href="#wings-silencer-autolog-target"><span>wings.silencer.autolog.target</span></a></h3><p><code>Set&lt;String&gt;</code>=<code>CONSOLE,STDOUT</code></p><p>可被mirana自动被调整的appender名字，逗号分隔</p><h3 id="wings-silencer-autolog-exists" tabindex="-1"><a class="header-anchor" href="#wings-silencer-autolog-exists"><span>wings.silencer.autolog.exists</span></a></h3><p><code>Set&lt;String&gt;</code>=<code>FILE</code></p><p>当存在以上appender出现的时候，进行自动日志调整。</p><h2 id="_1d-8-wings-encrypt-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-8-wings-encrypt-79-properties"><span>1D.8.wings-encrypt-79.properties</span></a></h2><p>自动配置加密功能</p><h3 id="wings-silencer-encrypt-leap-code" tabindex="-1"><a class="header-anchor" href="#wings-silencer-encrypt-leap-code"><span>wings.silencer.encrypt.leap-code</span></a></h3><p><code>String</code>=<code>BY2AH0IC9SX4UTV7GP5LNR6FK1WOE8ZQD3JM</code></p>',78)),n("p",null,[e[1]||(e[1]=i("LeapCode的默认seed，强安全需求时建议修改。")),l(s,{type:"tip",vertical:"top"},{default:o(()=>e[0]||(e[0]=[i("建议")])),_:1})]),e[5]||(e[5]=n("h3",{id:"wings-silencer-encrypt-crc8-long",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#wings-silencer-encrypt-crc8-long"},[n("span",null,"wings.silencer.encrypt.crc8-long")])],-1)),e[6]||(e[6]=n("p",null,[n("code",null,"String"),i("="),n("code",null,"15,13,11,9,7,5,3,1")],-1)),n("p",null,[e[3]||(e[3]=i("Crc8Long的默认seed，强安全需求时建议修改。")),l(s,{type:"tip",vertical:"top"},{default:o(()=>e[2]||(e[2]=[i("建议")])),_:1})]),e[7]||(e[7]=r('<h3 id="wings-silencer-encrypt-aes-key" tabindex="-1"><a class="header-anchor" href="#wings-silencer-encrypt-aes-key"><span>wings.silencer.encrypt.aes-key</span></a></h3><p><code>Map&lt;String,String&gt;</code>，默认的Aes256加密名字和密码，默认<code>${random.uuid}${random.uuid}</code>。</p><ul><li><code>system</code> - 系统默认，每次系统启动时随机生成，停机后消失</li><li><code>ticket</code> - 用于Api Ticket，建议集群内统一</li><li><code>cookie</code> - 用于 Http Cookie，建议集群内统一</li><li><code>config</code> - 用于 配置文件中敏感数据，建议固定</li></ul><h2 id="_1d-9-wings-tweak-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-9-wings-tweak-79-properties"><span>1D.9.wings-tweak-79.properties</span></a></h2><p>应用调节</p><h3 id="wings-silencer-tweak-code-stack" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-code-stack"><span>wings.silencer.tweak.code-stack</span></a></h3><p><code>Boolean</code>=<code>false</code>，CodeException的Global有栈或无栈</p><h3 id="wings-silencer-tweak-clock-offset" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-clock-offset"><span>wings.silencer.tweak.clock-offset</span></a></h3><p><code>Long</code>=<code>0</code>，初始系统时钟 offset ms</p><h3 id="wings-silencer-tweak-mdc-threshold" tabindex="-1"><a class="header-anchor" href="#wings-silencer-tweak-mdc-threshold"><span>wings.silencer.tweak.mdc-threshold</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否配置WingsMdcThresholdFilter</p><h2 id="_1d-a-wings-runtime-77-properties" tabindex="-1"><a class="header-anchor" href="#_1d-a-wings-runtime-77-properties"><span>1D.A.wings-runtime-77.properties</span></a></h2><p>运行时的应用模式</p><h3 id="wings-silencer-runtime-run-mode" tabindex="-1"><a class="header-anchor" href="#wings-silencer-runtime-run-mode"><span>wings.silencer.runtime.run-mode</span></a></h3><p><code>RunMode</code>=<code>Local</code>，默认的运行模式</p><h3 id="wings-silencer-runtime-api-mode" tabindex="-1"><a class="header-anchor" href="#wings-silencer-runtime-api-mode"><span>wings.silencer.runtime.api-mode</span></a></h3><p><code>ApiMode</code>=<code>Nothing</code>，默认的Api模式</p><h2 id="_1d-b-wings-inspect-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-b-wings-inspect-79-properties"><span>1D.B.wings-inspect-79.properties</span></a></h2><p>应用审查功能</p><h3 id="wings-silencer-inspect-properties" tabindex="-1"><a class="header-anchor" href="#wings-silencer-inspect-properties"><span>wings.silencer.inspect.properties</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否审视properties的key,value,所在文件及层叠关系</p><h2 id="_1d-c-wings-scanner-79-properties" tabindex="-1"><a class="header-anchor" href="#_1d-c-wings-scanner-79-properties"><span>1D.C.wings-scanner-79.properties</span></a></h2><h3 id="wings-silencer-scanner-bean" tabindex="-1"><a class="header-anchor" href="#wings-silencer-scanner-bean"><span>wings.silencer.scanner.bean</span></a></h3><p><code>List&lt;String&gt;</code>=<code>spring/bean</code>，当 ApplicationPreparedEvent 时，从 <code>**/spring/bean/**/*.class</code> 扫描 component</p>',24))])}const b=a(p,[["render",g],["__file","1d-prop-silencer.html.vue"]]),f=JSON.parse('{"path":"/zh/1-silencer/1d-prop-silencer.html","title":"1D.沉默的属性","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"folder-tree","category":["沉默","属性"],"description":"1D.沉默的属性 有关自动加载，默认工具和行为的属性。 1D.1.wings-auto-config.cnf Silencer的入口配置，定义了Silencer的自动加载的路径和模式。 存在多个wings-auto-config*.cnf时，按ascii排序，取最后。 wings.boot.more List<String>=application*....","GIT_REPO_HEAD":"2025-02-02 9cab7f71f34df19a1b0adffd87fa71dbbe019019","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/1-silencer/1d-prop-silencer.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/1-silencer/1d-prop-silencer.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"1D.沉默的属性"}],["meta",{"property":"og:description","content":"1D.沉默的属性 有关自动加载，默认工具和行为的属性。 1D.1.wings-auto-config.cnf Silencer的入口配置，定义了Silencer的自动加载的路径和模式。 存在多个wings-auto-config*.cnf时，按ascii排序，取最后。 wings.boot.more List<String>=application*...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1D.沉默的属性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"1D.1.wings-auto-config.cnf","slug":"_1d-1-wings-auto-config-cnf","link":"#_1d-1-wings-auto-config-cnf","children":[{"level":3,"title":"wings.boot.more","slug":"wings-boot-more","link":"#wings-boot-more","children":[]},{"level":3,"title":"wings.boot.once","slug":"wings-boot-once","link":"#wings-boot-once","children":[]},{"level":3,"title":"wings.boot.block","slug":"wings-boot-block","link":"#wings-boot-block","children":[]},{"level":3,"title":"wings.boot.promo","slug":"wings-boot-promo","link":"#wings-boot-promo","children":[]}]},{"level":2,"title":"1D.2.wings-wings.feature-79.properties","slug":"_1d-2-wings-wings-feature-79-properties","link":"#_1d-2-wings-wings-feature-79-properties","children":[{"level":3,"title":"wings.feature.error","slug":"wings-feature-error","link":"#wings-feature-error","children":[]},{"level":3,"title":"wings.feature.prefix","slug":"wings-feature-prefix","link":"#wings-feature-prefix","children":[]},{"level":3,"title":"wings.feature.enable","slug":"wings-feature-enable","link":"#wings-feature-enable","children":[]}]},{"level":2,"title":"1D.3.wings-enabled-79.properties","slug":"_1d-3-wings-enabled-79-properties","link":"#_1d-3-wings-enabled-79-properties","children":[{"level":3,"title":"wings.enabled.silencer.autoconf","slug":"wings-enabled-silencer-autoconf","link":"#wings-enabled-silencer-autoconf","children":[]},{"level":3,"title":"wings.enabled.silencer.verbose","slug":"wings-enabled-silencer-verbose","link":"#wings-enabled-silencer-verbose","children":[]},{"level":3,"title":"wings.enabled.silencer.scanner","slug":"wings-enabled-silencer-scanner","link":"#wings-enabled-silencer-scanner","children":[]},{"level":3,"title":"wings.enabled.silencer.audit-prop","slug":"wings-enabled-silencer-audit-prop","link":"#wings-enabled-silencer-audit-prop","children":[]},{"level":3,"title":"wings.enabled.silencer.mute-console","slug":"wings-enabled-silencer-mute-console","link":"#wings-enabled-silencer-mute-console","children":[]},{"level":3,"title":"wings.enabled.silencer.tweak-clock","slug":"wings-enabled-silencer-tweak-clock","link":"#wings-enabled-silencer-tweak-clock","children":[]},{"level":3,"title":"wings.enabled.silencer.tweak-logback","slug":"wings-enabled-silencer-tweak-logback","link":"#wings-enabled-silencer-tweak-logback","children":[]},{"level":3,"title":"wings.enabled.silencer.tweak-stack","slug":"wings-enabled-silencer-tweak-stack","link":"#wings-enabled-silencer-tweak-stack","children":[]},{"level":3,"title":"wings.enabled.silencer.bean-reorder","slug":"wings-enabled-silencer-bean-reorder","link":"#wings-enabled-silencer-bean-reorder","children":[]}]},{"level":2,"title":"1D.4.spring-logging-79.properties","slug":"_1d-4-spring-logging-79-properties","link":"#_1d-4-spring-logging-79-properties","children":[]},{"level":2,"title":"1D.5.spring-message-79.properties","slug":"_1d-5-spring-message-79-properties","link":"#_1d-5-spring-message-79-properties","children":[]},{"level":2,"title":"1D.6.wings-i18n-79.properties","slug":"_1d-6-wings-i18n-79-properties","link":"#_1d-6-wings-i18n-79-properties","children":[{"level":3,"title":"wings.silencer.i18n.locale","slug":"wings-silencer-i18n-locale","link":"#wings-silencer-i18n-locale","children":[]},{"level":3,"title":"wings.silencer.i18n.zoneid=","slug":"wings-silencer-i18n-zoneid","link":"#wings-silencer-i18n-zoneid","children":[]},{"level":3,"title":"wings.silencer.i18n.bundle","slug":"wings-silencer-i18n-bundle","link":"#wings-silencer-i18n-bundle","children":[]}]},{"level":2,"title":"1D.7.wings-autolog-79.properties","slug":"_1d-7-wings-autolog-79-properties","link":"#_1d-7-wings-autolog-79-properties","children":[{"level":3,"title":"wings.silencer.autolog.level","slug":"wings-silencer-autolog-level","link":"#wings-silencer-autolog-level","children":[]},{"level":3,"title":"wings.silencer.autolog.target","slug":"wings-silencer-autolog-target","link":"#wings-silencer-autolog-target","children":[]},{"level":3,"title":"wings.silencer.autolog.exists","slug":"wings-silencer-autolog-exists","link":"#wings-silencer-autolog-exists","children":[]}]},{"level":2,"title":"1D.8.wings-encrypt-79.properties","slug":"_1d-8-wings-encrypt-79-properties","link":"#_1d-8-wings-encrypt-79-properties","children":[{"level":3,"title":"wings.silencer.encrypt.leap-code","slug":"wings-silencer-encrypt-leap-code","link":"#wings-silencer-encrypt-leap-code","children":[]},{"level":3,"title":"wings.silencer.encrypt.crc8-long","slug":"wings-silencer-encrypt-crc8-long","link":"#wings-silencer-encrypt-crc8-long","children":[]},{"level":3,"title":"wings.silencer.encrypt.aes-key","slug":"wings-silencer-encrypt-aes-key","link":"#wings-silencer-encrypt-aes-key","children":[]}]},{"level":2,"title":"1D.9.wings-tweak-79.properties","slug":"_1d-9-wings-tweak-79-properties","link":"#_1d-9-wings-tweak-79-properties","children":[{"level":3,"title":"wings.silencer.tweak.code-stack","slug":"wings-silencer-tweak-code-stack","link":"#wings-silencer-tweak-code-stack","children":[]},{"level":3,"title":"wings.silencer.tweak.clock-offset","slug":"wings-silencer-tweak-clock-offset","link":"#wings-silencer-tweak-clock-offset","children":[]},{"level":3,"title":"wings.silencer.tweak.mdc-threshold","slug":"wings-silencer-tweak-mdc-threshold","link":"#wings-silencer-tweak-mdc-threshold","children":[]}]},{"level":2,"title":"1D.A.wings-runtime-77.properties","slug":"_1d-a-wings-runtime-77-properties","link":"#_1d-a-wings-runtime-77-properties","children":[{"level":3,"title":"wings.silencer.runtime.run-mode","slug":"wings-silencer-runtime-run-mode","link":"#wings-silencer-runtime-run-mode","children":[]},{"level":3,"title":"wings.silencer.runtime.api-mode","slug":"wings-silencer-runtime-api-mode","link":"#wings-silencer-runtime-api-mode","children":[]}]},{"level":2,"title":"1D.B.wings-inspect-79.properties","slug":"_1d-b-wings-inspect-79-properties","link":"#_1d-b-wings-inspect-79-properties","children":[{"level":3,"title":"wings.silencer.inspect.properties","slug":"wings-silencer-inspect-properties","link":"#wings-silencer-inspect-properties","children":[]}]},{"level":2,"title":"1D.C.wings-scanner-79.properties","slug":"_1d-c-wings-scanner-79-properties","link":"#_1d-c-wings-scanner-79-properties","children":[{"level":3,"title":"wings.silencer.scanner.bean","slug":"wings-silencer-scanner-bean","link":"#wings-silencer-scanner-bean","children":[]}]}],"git":{"createdTime":1656422147000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":23,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":3.01,"words":902},"filePathRelative":"zh/1-silencer/1d-prop-silencer.md","localizedDate":"2022年6月28日","autoDesc":true}');export{b as comp,f as data};
