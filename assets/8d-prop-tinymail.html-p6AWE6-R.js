import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,f as a}from"./app-Cay0Goiz.js";const s={},l=a(`<h1 id="_8d-小邮件属性" tabindex="-1"><a class="header-anchor" href="#_8d-小邮件属性"><span>8D.小邮件属性</span></a></h1><h2 id="_8d-1-spring-mail-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-1-spring-mail-79-properties"><span>8D.1.spring-mail-79.properties</span></a></h2><p>spring-boot-starter-mail的配置，分为账号类和属性类</p><h3 id="spring-mail-host" tabindex="-1"><a class="header-anchor" href="#spring-mail-host"><span>spring.mail.host</span></a></h3><p><code>String</code>，邮件主机，如smtp.qq.com</p><h3 id="spring-mail-username" tabindex="-1"><a class="header-anchor" href="#spring-mail-username"><span>spring.mail.username</span></a></h3><p><code>String</code>，登录名，一般与发件人一致，否则会有发送错误</p><h3 id="spring-mail-password" tabindex="-1"><a class="header-anchor" href="#spring-mail-password"><span>spring.mail.password</span></a></h3><p><code>String</code>，登录密码</p><h3 id="spring-mail-protocol" tabindex="-1"><a class="header-anchor" href="#spring-mail-protocol"><span>spring.mail.protocol</span></a></h3><p><code>String</code>=<code>smtp</code>，邮件协议，默认smtp</p><h3 id="spring-mail-port" tabindex="-1"><a class="header-anchor" href="#spring-mail-port"><span>spring.mail.port</span></a></h3><p><code>int</code>=<code>465</code>，端口号</p><h3 id="spring-mail-properties-mail-smtp-auth" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-auth"><span>spring.mail.properties.mail.smtp.auth</span></a></h3><p><code>String</code>=<code>true|false</code>，是否进行smtp验证，基本都需要。</p><h3 id="spring-mail-properties-mail-smtp-starttls-enable" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-starttls-enable"><span>spring.mail.properties.mail.smtp.starttls.enable</span></a></h3><p><code>String</code>=<code>true|false</code>，是否使用tls，一般都需要。</p><h3 id="spring-mail-properties-mail-smtp-ssl-enable" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-ssl-enable"><span>spring.mail.properties.mail.smtp.ssl.enable</span></a></h3><p><code>String</code>=<code>true|false</code>，是否使用ssl，视邮件服务商是否支持。</p><h3 id="spring-mail-properties-mail-smtp-connectiontimeout" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-connectiontimeout"><span>spring.mail.properties.mail.smtp.connectiontimeout</span></a></h3><p><code>String</code>=<code>90000</code>，链接超时毫秒数，默认90秒</p><h3 id="spring-mail-properties-mail-smtp-timeout" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-timeout"><span>spring.mail.properties.mail.smtp.timeout</span></a></h3><p><code>String</code>=<code>90000</code>，读超时毫秒数，默认90秒</p><h3 id="spring-mail-properties-mail-smtp-writetimeout" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-writetimeout"><span>spring.mail.properties.mail.smtp.writetimeout</span></a></h3><p><code>String</code>=<code>90000</code>，写超时毫秒数，默认90秒</p><h2 id="_8d-3-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-3-wings-flywave-fit-79-properties"><span>8D.3.wings-flywave-fit-79.properties</span></a></h2><h3 id="wings-faceless-flywave-fit-tiny-mail" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-tiny-mail"><span>wings.faceless.flywave.fit.tiny-mail</span></a></h3><p>数据库依赖，引入此lib后，自动执行次脚本</p><ul><li><code>path</code>=<code>classpath*:/wings-flywave/master/07-mail/*.sql</code></li><li><code>revi</code>=<code>2020_1027_01L</code></li><li><code>lost</code>=<code>EXEC</code></li></ul><h2 id="_8d-4-wings-tinymail-config-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-4-wings-tinymail-config-79-properties"><span>8D.4.wings-tinymail-config-79.properties</span></a></h2><p>配置默认账号，及多个发送账号，<code>TinyMailConfig</code>类型，继承<code>spring.mail</code>， 默认配置名为<code>default</code>，自动复用<code>spring.mail</code>的值，为其他账号，提供默认配置。</p><p>默认配置项，仅当其他配置项是无效值时才使用，并且对于<code>properties.*</code>值，仅key存在时使用。</p><h3 id="wings-tiny-mail-config-default-dryrun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-dryrun"><span>wings.tiny.mail.config.default.dryrun</span></a></h3><p><code>String</code>=<code>[DRYRUN]</code>, 干跑邮件的标题前缀，null时合并，空为禁用。</p><h3 id="wings-tiny-mail-config-default-from" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-from"><span>wings.tiny.mail.config.default.from</span></a></h3><p><code>String</code>=<code>\${MAIL_FROM:}</code>，默认发件人</p><h3 id="wings-tiny-mail-config-default-to" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-to"><span>wings.tiny.mail.config.default.to</span></a></h3><p><code>String[]</code>=<code>\${MAIL_TO:}</code>，默认收件人，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-config-default-cc" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-cc"><span>wings.tiny.mail.config.default.cc</span></a></h3><p><code>String[]</code>，默认抄送，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-config-default-bcc" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-bcc"><span>wings.tiny.mail.config.default.bcc</span></a></h3><p><code>String[]</code>，默认暗送，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-config-default-reply" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-reply"><span>wings.tiny.mail.config.default.reply</span></a></h3><p><code>String</code>，默认回复，字符串</p><h3 id="wings-tiny-mail-config-default-html" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-html"><span>wings.tiny.mail.config.default.html</span></a></h3><p><code>Boolean</code>=<code>true</code>，默认是否发送html邮件(text/html)，否则纯文本(text/plain)</p><h3 id="gmail参考配置" tabindex="-1"><a class="header-anchor" href="#gmail参考配置"><span>gmail参考配置</span></a></h3><p>推荐使用app专用密码，不要使用登录密码。 <code>properties.*</code>仅为空时，使用默认值，不存在的key不使用默认值。 如<code>properties.mail.debug</code>被注释掉，不会使用default的值。</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">wings.tiny.mail.config.gmail.host</span><span class="token punctuation">=</span><span class="token value attr-value">smtp.gmail.com</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.username</span><span class="token punctuation">=</span><span class="token value attr-value">\${GMAIL_USER:}</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.password</span><span class="token punctuation">=</span><span class="token value attr-value">\${GMAIL_PASS:}</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.protocol</span><span class="token punctuation">=</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.port</span><span class="token punctuation">=</span><span class="token value attr-value">587</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.properties.mail.smtp.auth</span><span class="token punctuation">=</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.properties.mail.smtp.starttls.enable</span><span class="token punctuation">=</span>
<span class="token comment">#wings.tiny.mail.config.gmail.properties.mail.debug=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8d-5-wings-tinymail-sender-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-5-wings-tinymail-sender-79-properties"><span>8D.5.wings-tinymail-sender-79.properties</span></a></h2><h3 id="wings-tiny-mail-sender-dryrun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-dryrun"><span>wings.tiny.mail.sender.dryrun</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否干跑，仅记录日志不真正执行任务</p><h3 id="wings-tiny-mail-sender-biz-id" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-biz-id"><span>wings.tiny.mail.sender.biz-id</span></a></h3><p><code>String</code>=<code>X-Biz-Id</code>，biz-id的Header，业务侧定位邮件，默认为mail的主键</p><h3 id="wings-tiny-mail-sender-biz-mark" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-biz-mark"><span>wings.tiny.mail.sender.biz-mark</span></a></h3><p><code>String</code>=<code>X-Biz-Mark</code>，biz-mark的Header，业务侧定位数据，比如订单号等</p><h3 id="wings-tiny-mail-sender-err-send" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-err-send"><span>wings.tiny.mail.sender.err-send</span></a></h3><p><code>Duration</code>=<code>5m</code>，发送失败 MailSendException 时，默认等待多少时间，默认5分钟</p><h3 id="wings-tiny-mail-sender-err-auth" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-err-auth"><span>wings.tiny.mail.sender.err-auth</span></a></h3><p><code>Duration</code>=<code>1h</code>，认证失败 MailAuthenticationException 时，默认等待多少时间，默认1小时</p><h3 id="wings-tiny-mail-sender-err-host" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-err-host"><span>wings.tiny.mail.sender.err-host</span></a></h3><p><code>Map&lt;BigDecimal, String&gt;</code>，包含以下异常信息时，对此host进行多少秒的等待。 秒为key，以小数部分仅用来区分key，负数为建议停止重发。</p><ul><li><code>3600.001</code>=<code>frequency limited</code></li></ul><h3 id="wings-tiny-mail-sender-err-mail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-err-mail"><span>wings.tiny.mail.sender.err-mail</span></a></h3><p><code>Map&lt;BigDecimal, String&gt;</code>，包含以下异常信息时，对此邮件的重发进行多少秒的等待。 秒为key，以小数部分仅用来区分key，负数为建议停止重发。</p><ul><li><code>-501001.001</code>=<code>from address must be same as authorization user</code></li></ul><p><code>501</code>为错误号，<code>001</code>为host编号，<code>.001</code>为区别位</p><h3 id="wings-tiny-mail-sender-per-idle" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-per-idle"><span>wings.tiny.mail.sender.per-idle</span></a></h3><p><code>Map&lt;String, Duration&gt;</code>，同一邮件host每次登录的间隔，避免限频，0为无视。</p><p><code>smtp.qq.com</code>=<code>500ms</code>，如qq邮箱，间隔500毫秒</p><h3 id="wings-tiny-mail-sender-max-idle" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-max-idle"><span>wings.tiny.mail.sender.max-idle</span></a></h3><p><code>Map&lt;String, Duration&gt;</code>，同一邮件host最多等待时间，小于时等待，否则抛出MailWaitException，0为无视</p><ul><li><code>smtp.qq.com</code>=<code>5s</code>，如qq邮箱，等待超过5秒时，抛出MailWaitException</li></ul><h3 id="wings-tiny-mail-sender-force-to" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-force-to"><span>wings.tiny.mail.sender.force-to</span></a></h3><p><code>String[]</code>，强制替换真实的to，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-sender-force-cc" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-force-cc"><span>wings.tiny.mail.sender.force-cc</span></a></h3><p><code>String[]</code>，强制替换真实的cc，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-sender-force-bcc" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-force-bcc"><span>wings.tiny.mail.sender.force-bcc</span></a></h3><p><code>String[]</code>，强制替换真实的bcc，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-sender-force-prefix" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-force-prefix"><span>wings.tiny.mail.sender.force-prefix</span></a></h3><p><code>String</code>，强制增加真实的subject前缀</p><h2 id="_8d-6-wings-tinymail-service-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-6-wings-tinymail-service-79-properties"><span>8D.6.wings-tinymail-service-79.properties</span></a></h2><h3 id="wings-tiny-mail-service-max-fail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-max-fail"><span>wings.tiny.mail.service.max-fail</span></a></h3><p><code>Integer</code>=<code>3</code>，同一邮件最大失败次数</p><p>wings.tiny.mail.service.max-done</p><p><code>Integer</code>=<code>1</code>，同一邮件最大成功次数</p><h3 id="wings-tiny-mail-service-max-next" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-max-next"><span>wings.tiny.mail.service.max-next</span></a></h3><p><code>Duration</code>=<code>1d</code>，超过多少时间的邮件不需要发送，默认1天</p><h3 id="wings-tiny-mail-service-try-next" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-try-next"><span>wings.tiny.mail.service.try-next</span></a></h3><p><code>Duration</code>=<code>1m</code>，失败后多久进行重试，默认1分钟</p><h3 id="wings-tiny-mail-service-batch-size" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-batch-size"><span>wings.tiny.mail.service.batch-size</span></a></h3><p><code>Integer</code>=<code>10</code>，批量发送时，一次发的最大件数</p><h3 id="wings-tiny-mail-service-warn-size" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-warn-size"><span>wings.tiny.mail.service.warn-size</span></a></h3><p><code>Integer</code>=<code>50</code>，超过此容量时，以Warn记录日志</p><h3 id="wings-tiny-mail-service-boot-scan" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-boot-scan"><span>wings.tiny.mail.service.boot-scan</span></a></h3><p><code>Duration</code>=<code>60s</code>，启动后多久，扫描未发送的邮件，<code>0</code>为不扫描</p><h3 id="wings-tiny-mail-service-only-app" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-only-app"><span>wings.tiny.mail.service.only-app</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否仅发送本app的邮件</p><h3 id="wings-tiny-mail-service-only-run" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-only-run"><span>wings.tiny.mail.service.only-run</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否仅发送本RumMode的邮件</p><h2 id="_8d-7-wings-tinymail-urlmap-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-7-wings-tinymail-urlmap-79-properties"><span>8D.7.wings-tinymail-urlmap-79.properties</span></a></h2><h3 id="wings-tiny-mail-urlmap-list-all" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-list-all"><span>wings.tiny.mail.urlmap.list-all</span></a></h3><p><code>String</code>=<code>/admin/mail/list-all.json</code>，获取全部邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-list-failed" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-list-failed"><span>wings.tiny.mail.urlmap.list-failed</span></a></h3><p><code>String</code>=<code>/admin/mail/list-failed.json</code>，获取失败邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-list-undone" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-list-undone"><span>wings.tiny.mail.urlmap.list-undone</span></a></h3><p><code>String</code>=<code>/admin/mail/list-undone.json</code>，获取未成功邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-by-bizmark" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-by-bizmark"><span>wings.tiny.mail.urlmap.by-bizmark</span></a></h3><p><code>String</code>=<code>/admin/mail/by-bizmark.json</code>，根据Biz-Mark获取邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-by-recipient" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-by-recipient"><span>wings.tiny.mail.urlmap.by-recipient</span></a></h3><p><code>String</code>=<code>/admin/mail/by-recipient.json</code>，根据正则比较收件人to/cc/bcc获取邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-by-sender" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-by-sender"><span>wings.tiny.mail.urlmap.by-sender</span></a></h3><p><code>String</code>=<code>/admin/mail/by-sender.json</code>，根据收件人from获取邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-by-subject" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-by-subject"><span>wings.tiny.mail.urlmap.by-subject</span></a></h3><p><code>String</code>=<code>/admin/mail/by-subject.json</code>，根据正则比较邮件标题获取邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-load-detail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-load-detail"><span>wings.tiny.mail.urlmap.load-detail</span></a></h3><p><code>String</code>=<code>/admin/mail/load-detail.json</code>，获取邮件详情</p><h3 id="wings-tiny-mail-urlmap-send-mail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-send-mail"><span>wings.tiny.mail.urlmap.send-mail</span></a></h3><p><code>String</code>=<code>/admin/mail/send-mail.json</code>，新建或编辑邮件，并同步立即或异步定时发送，<code>-1</code>为失败，<code>0</code>为同步，否则为异步</p><h3 id="wings-tiny-mail-urlmap-send-save" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-send-save"><span>wings.tiny.mail.urlmap.send-save</span></a></h3><p><code>String</code>=<code>/admin/mail/send-save.json</code>，仅新建或编辑邮件，但并不发送</p><h3 id="wings-tiny-mail-urlmap-send-retry" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-send-retry"><span>wings.tiny.mail.urlmap.send-retry</span></a></h3><p><code>String</code>=<code>/admin/mail/send-retry.json</code>，同步重试失败的邮件，发送成功或失败，或异常</p><h3 id="wings-tiny-mail-urlmap-send-scan" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-send-scan"><span>wings.tiny.mail.urlmap.send-scan</span></a></h3><p><code>String</code>=<code>/admin/mail/send-scan.json</code>，同步扫需要描补发的邮件，并异步发送，返回补发的件数</p>`,125),t=[l];function r(d,p){return e(),n("div",null,t)}const m=i(s,[["render",r],["__file","8d-prop-tinymail.html.vue"]]),g=JSON.parse('{"path":"/zh/8-radiant/8d-prop-tinymail.html","title":"8D.小邮件属性","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"enum","category":["邮件","属性"],"description":"8D.小邮件属性 8D.1.spring-mail-79.properties spring-boot-starter-mail的配置，分为账号类和属性类 spring.mail.host String，邮件主机，如smtp.qq.com spring.mail.username String，登录名，一般与发件人一致，否则会有发送错误 spring....","GIT_REPO_HEAD":"2024-06-08 d7a73e7d60c607023b23709cc3624ae1945962f4","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/8-radiant/8d-prop-tinymail.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/8-radiant/8d-prop-tinymail.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"8D.小邮件属性"}],["meta",{"property":"og:description","content":"8D.小邮件属性 8D.1.spring-mail-79.properties spring-boot-starter-mail的配置，分为账号类和属性类 spring.mail.host String，邮件主机，如smtp.qq.com spring.mail.username String，登录名，一般与发件人一致，否则会有发送错误 spring...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-26T01:18:06.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-01-26T01:18:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8D.小邮件属性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-26T01:18:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"8D.1.spring-mail-79.properties","slug":"_8d-1-spring-mail-79-properties","link":"#_8d-1-spring-mail-79-properties","children":[{"level":3,"title":"spring.mail.host","slug":"spring-mail-host","link":"#spring-mail-host","children":[]},{"level":3,"title":"spring.mail.username","slug":"spring-mail-username","link":"#spring-mail-username","children":[]},{"level":3,"title":"spring.mail.password","slug":"spring-mail-password","link":"#spring-mail-password","children":[]},{"level":3,"title":"spring.mail.protocol","slug":"spring-mail-protocol","link":"#spring-mail-protocol","children":[]},{"level":3,"title":"spring.mail.port","slug":"spring-mail-port","link":"#spring-mail-port","children":[]},{"level":3,"title":"spring.mail.properties.mail.smtp.auth","slug":"spring-mail-properties-mail-smtp-auth","link":"#spring-mail-properties-mail-smtp-auth","children":[]},{"level":3,"title":"spring.mail.properties.mail.smtp.starttls.enable","slug":"spring-mail-properties-mail-smtp-starttls-enable","link":"#spring-mail-properties-mail-smtp-starttls-enable","children":[]},{"level":3,"title":"spring.mail.properties.mail.smtp.ssl.enable","slug":"spring-mail-properties-mail-smtp-ssl-enable","link":"#spring-mail-properties-mail-smtp-ssl-enable","children":[]},{"level":3,"title":"spring.mail.properties.mail.smtp.connectiontimeout","slug":"spring-mail-properties-mail-smtp-connectiontimeout","link":"#spring-mail-properties-mail-smtp-connectiontimeout","children":[]},{"level":3,"title":"spring.mail.properties.mail.smtp.timeout","slug":"spring-mail-properties-mail-smtp-timeout","link":"#spring-mail-properties-mail-smtp-timeout","children":[]},{"level":3,"title":"spring.mail.properties.mail.smtp.writetimeout","slug":"spring-mail-properties-mail-smtp-writetimeout","link":"#spring-mail-properties-mail-smtp-writetimeout","children":[]}]},{"level":2,"title":"8D.3.wings-flywave-fit-79.properties","slug":"_8d-3-wings-flywave-fit-79-properties","link":"#_8d-3-wings-flywave-fit-79-properties","children":[{"level":3,"title":"wings.faceless.flywave.fit.tiny-mail","slug":"wings-faceless-flywave-fit-tiny-mail","link":"#wings-faceless-flywave-fit-tiny-mail","children":[]}]},{"level":2,"title":"8D.4.wings-tinymail-config-79.properties","slug":"_8d-4-wings-tinymail-config-79-properties","link":"#_8d-4-wings-tinymail-config-79-properties","children":[{"level":3,"title":"wings.tiny.mail.config.default.dryrun","slug":"wings-tiny-mail-config-default-dryrun","link":"#wings-tiny-mail-config-default-dryrun","children":[]},{"level":3,"title":"wings.tiny.mail.config.default.from","slug":"wings-tiny-mail-config-default-from","link":"#wings-tiny-mail-config-default-from","children":[]},{"level":3,"title":"wings.tiny.mail.config.default.to","slug":"wings-tiny-mail-config-default-to","link":"#wings-tiny-mail-config-default-to","children":[]},{"level":3,"title":"wings.tiny.mail.config.default.cc","slug":"wings-tiny-mail-config-default-cc","link":"#wings-tiny-mail-config-default-cc","children":[]},{"level":3,"title":"wings.tiny.mail.config.default.bcc","slug":"wings-tiny-mail-config-default-bcc","link":"#wings-tiny-mail-config-default-bcc","children":[]},{"level":3,"title":"wings.tiny.mail.config.default.reply","slug":"wings-tiny-mail-config-default-reply","link":"#wings-tiny-mail-config-default-reply","children":[]},{"level":3,"title":"wings.tiny.mail.config.default.html","slug":"wings-tiny-mail-config-default-html","link":"#wings-tiny-mail-config-default-html","children":[]},{"level":3,"title":"gmail参考配置","slug":"gmail参考配置","link":"#gmail参考配置","children":[]}]},{"level":2,"title":"8D.5.wings-tinymail-sender-79.properties","slug":"_8d-5-wings-tinymail-sender-79-properties","link":"#_8d-5-wings-tinymail-sender-79-properties","children":[{"level":3,"title":"wings.tiny.mail.sender.dryrun","slug":"wings-tiny-mail-sender-dryrun","link":"#wings-tiny-mail-sender-dryrun","children":[]},{"level":3,"title":"wings.tiny.mail.sender.biz-id","slug":"wings-tiny-mail-sender-biz-id","link":"#wings-tiny-mail-sender-biz-id","children":[]},{"level":3,"title":"wings.tiny.mail.sender.biz-mark","slug":"wings-tiny-mail-sender-biz-mark","link":"#wings-tiny-mail-sender-biz-mark","children":[]},{"level":3,"title":"wings.tiny.mail.sender.err-send","slug":"wings-tiny-mail-sender-err-send","link":"#wings-tiny-mail-sender-err-send","children":[]},{"level":3,"title":"wings.tiny.mail.sender.err-auth","slug":"wings-tiny-mail-sender-err-auth","link":"#wings-tiny-mail-sender-err-auth","children":[]},{"level":3,"title":"wings.tiny.mail.sender.err-host","slug":"wings-tiny-mail-sender-err-host","link":"#wings-tiny-mail-sender-err-host","children":[]},{"level":3,"title":"wings.tiny.mail.sender.err-mail","slug":"wings-tiny-mail-sender-err-mail","link":"#wings-tiny-mail-sender-err-mail","children":[]},{"level":3,"title":"wings.tiny.mail.sender.per-idle","slug":"wings-tiny-mail-sender-per-idle","link":"#wings-tiny-mail-sender-per-idle","children":[]},{"level":3,"title":"wings.tiny.mail.sender.max-idle","slug":"wings-tiny-mail-sender-max-idle","link":"#wings-tiny-mail-sender-max-idle","children":[]},{"level":3,"title":"wings.tiny.mail.sender.force-to","slug":"wings-tiny-mail-sender-force-to","link":"#wings-tiny-mail-sender-force-to","children":[]},{"level":3,"title":"wings.tiny.mail.sender.force-cc","slug":"wings-tiny-mail-sender-force-cc","link":"#wings-tiny-mail-sender-force-cc","children":[]},{"level":3,"title":"wings.tiny.mail.sender.force-bcc","slug":"wings-tiny-mail-sender-force-bcc","link":"#wings-tiny-mail-sender-force-bcc","children":[]},{"level":3,"title":"wings.tiny.mail.sender.force-prefix","slug":"wings-tiny-mail-sender-force-prefix","link":"#wings-tiny-mail-sender-force-prefix","children":[]}]},{"level":2,"title":"8D.6.wings-tinymail-service-79.properties","slug":"_8d-6-wings-tinymail-service-79-properties","link":"#_8d-6-wings-tinymail-service-79-properties","children":[{"level":3,"title":"wings.tiny.mail.service.max-fail","slug":"wings-tiny-mail-service-max-fail","link":"#wings-tiny-mail-service-max-fail","children":[]},{"level":3,"title":"wings.tiny.mail.service.max-next","slug":"wings-tiny-mail-service-max-next","link":"#wings-tiny-mail-service-max-next","children":[]},{"level":3,"title":"wings.tiny.mail.service.try-next","slug":"wings-tiny-mail-service-try-next","link":"#wings-tiny-mail-service-try-next","children":[]},{"level":3,"title":"wings.tiny.mail.service.batch-size","slug":"wings-tiny-mail-service-batch-size","link":"#wings-tiny-mail-service-batch-size","children":[]},{"level":3,"title":"wings.tiny.mail.service.warn-size","slug":"wings-tiny-mail-service-warn-size","link":"#wings-tiny-mail-service-warn-size","children":[]},{"level":3,"title":"wings.tiny.mail.service.boot-scan","slug":"wings-tiny-mail-service-boot-scan","link":"#wings-tiny-mail-service-boot-scan","children":[]},{"level":3,"title":"wings.tiny.mail.service.only-app","slug":"wings-tiny-mail-service-only-app","link":"#wings-tiny-mail-service-only-app","children":[]},{"level":3,"title":"wings.tiny.mail.service.only-run","slug":"wings-tiny-mail-service-only-run","link":"#wings-tiny-mail-service-only-run","children":[]}]},{"level":2,"title":"8D.7.wings-tinymail-urlmap-79.properties","slug":"_8d-7-wings-tinymail-urlmap-79-properties","link":"#_8d-7-wings-tinymail-urlmap-79-properties","children":[{"level":3,"title":"wings.tiny.mail.urlmap.list-all","slug":"wings-tiny-mail-urlmap-list-all","link":"#wings-tiny-mail-urlmap-list-all","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.list-failed","slug":"wings-tiny-mail-urlmap-list-failed","link":"#wings-tiny-mail-urlmap-list-failed","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.list-undone","slug":"wings-tiny-mail-urlmap-list-undone","link":"#wings-tiny-mail-urlmap-list-undone","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.by-bizmark","slug":"wings-tiny-mail-urlmap-by-bizmark","link":"#wings-tiny-mail-urlmap-by-bizmark","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.by-recipient","slug":"wings-tiny-mail-urlmap-by-recipient","link":"#wings-tiny-mail-urlmap-by-recipient","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.by-sender","slug":"wings-tiny-mail-urlmap-by-sender","link":"#wings-tiny-mail-urlmap-by-sender","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.by-subject","slug":"wings-tiny-mail-urlmap-by-subject","link":"#wings-tiny-mail-urlmap-by-subject","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.load-detail","slug":"wings-tiny-mail-urlmap-load-detail","link":"#wings-tiny-mail-urlmap-load-detail","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.send-mail","slug":"wings-tiny-mail-urlmap-send-mail","link":"#wings-tiny-mail-urlmap-send-mail","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.send-save","slug":"wings-tiny-mail-urlmap-send-save","link":"#wings-tiny-mail-urlmap-send-save","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.send-retry","slug":"wings-tiny-mail-urlmap-send-retry","link":"#wings-tiny-mail-urlmap-send-retry","children":[]},{"level":3,"title":"wings.tiny.mail.urlmap.send-scan","slug":"wings-tiny-mail-urlmap-send-scan","link":"#wings-tiny-mail-urlmap-send-scan","children":[]}]}],"git":{"createdTime":1687077446000,"updatedTime":1706231886000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":4.33,"words":1298},"filePathRelative":"zh/8-radiant/8d-prop-tinymail.md","localizedDate":"2023年6月18日","autoDesc":true}');export{m as comp,g as data};