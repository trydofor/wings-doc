import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,f as n}from"./app-10f3c89c.js";const r={},d=n(`<h1 id="_8d-小邮件属性" tabindex="-1"><a class="header-anchor" href="#_8d-小邮件属性" aria-hidden="true">#</a> 8D.小邮件属性</h1><h2 id="_8d-1-spring-mail-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-1-spring-mail-79-properties" aria-hidden="true">#</a> 8D.1.spring-mail-79.properties</h2><p>spring-boot-starter-mail的配置，分为账号类和属性类</p><h3 id="spring-mail-host" tabindex="-1"><a class="header-anchor" href="#spring-mail-host" aria-hidden="true">#</a> spring.mail.host</h3><p><code>String</code>，邮件主机，如smtp.qq.com</p><h3 id="spring-mail-username" tabindex="-1"><a class="header-anchor" href="#spring-mail-username" aria-hidden="true">#</a> spring.mail.username</h3><p><code>String</code>，登录名，一般与发件人一致，否则会有发送错误</p><h3 id="spring-mail-password" tabindex="-1"><a class="header-anchor" href="#spring-mail-password" aria-hidden="true">#</a> spring.mail.password</h3><p><code>String</code>，登录密码</p><h3 id="spring-mail-protocol" tabindex="-1"><a class="header-anchor" href="#spring-mail-protocol" aria-hidden="true">#</a> spring.mail.protocol</h3><p><code>String</code>=<code>smtp</code>，邮件协议，默认smtp</p><h3 id="spring-mail-port" tabindex="-1"><a class="header-anchor" href="#spring-mail-port" aria-hidden="true">#</a> spring.mail.port</h3><p><code>int</code>=<code>465</code>，端口号</p><h3 id="spring-mail-properties-mail-smtp-auth" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-auth" aria-hidden="true">#</a> spring.mail.properties.mail.smtp.auth</h3><p><code>String</code>=<code>true|false</code>，是否进行smtp验证，基本都需要。</p><h3 id="spring-mail-properties-mail-smtp-starttls-enable" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-starttls-enable" aria-hidden="true">#</a> spring.mail.properties.mail.smtp.starttls.enable</h3><p><code>String</code>=<code>true|false</code>，是否使用tls，一般都需要。</p><h3 id="spring-mail-properties-mail-smtp-ssl-enable" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-ssl-enable" aria-hidden="true">#</a> spring.mail.properties.mail.smtp.ssl.enable</h3><p><code>String</code>=<code>true|false</code>，是否使用ssl，视邮件服务商是否支持。</p><h3 id="spring-mail-properties-mail-smtp-connectiontimeout" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-connectiontimeout" aria-hidden="true">#</a> spring.mail.properties.mail.smtp.connectiontimeout</h3><p><code>String</code>=<code>90000</code>，链接超时毫秒数，默认90秒</p><h3 id="spring-mail-properties-mail-smtp-timeout" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-timeout" aria-hidden="true">#</a> spring.mail.properties.mail.smtp.timeout</h3><p><code>String</code>=<code>90000</code>，读超时毫秒数，默认90秒</p><h3 id="spring-mail-properties-mail-smtp-writetimeout" tabindex="-1"><a class="header-anchor" href="#spring-mail-properties-mail-smtp-writetimeout" aria-hidden="true">#</a> spring.mail.properties.mail.smtp.writetimeout</h3><p><code>String</code>=<code>90000</code>，写超时毫秒数，默认90秒</p><h2 id="_8d-3-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-3-wings-flywave-fit-79-properties" aria-hidden="true">#</a> 8D.3.wings-flywave-fit-79.properties</h2><h3 id="wings-faceless-flywave-fit-tiny-mail" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-tiny-mail" aria-hidden="true">#</a> wings.faceless.flywave.fit.tiny-mail</h3><p>数据库依赖，引入此lib后，自动执行次脚本</p><ul><li><code>path</code>=<code>classpath*:/wings-flywave/master/07-mail/*.sql</code></li><li><code>revi</code>=<code>2020_1027_01L</code></li><li><code>lost</code>=<code>EXEC</code></li></ul><h2 id="_8d-4-wings-tinymail-config-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-4-wings-tinymail-config-79-properties" aria-hidden="true">#</a> 8D.4.wings-tinymail-config-79.properties</h2><p>配置默认账号，及多个发送账号，<code>TinyMailConfig</code>类型，继承<code>spring.mail</code>， 默认配置名为<code>default</code>，自动复用<code>spring.mail</code>的值，为其他账号，提供默认配置。</p><p>默认配置项，仅当其他配置项是无效值时才使用，并且对于<code>properties.*</code>值，仅key存在时使用。</p><h3 id="wings-tiny-mail-config-default-from" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-from" aria-hidden="true">#</a> wings.tiny.mail.config.default.from</h3><p><code>String</code>，默认发件人</p><h3 id="wings-tiny-mail-config-default-to" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-to" aria-hidden="true">#</a> wings.tiny.mail.config.default.to</h3><p><code>String[]</code>，默认收件人，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-config-default-cc" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-cc" aria-hidden="true">#</a> wings.tiny.mail.config.default.cc</h3><p><code>String[]</code>，默认抄送，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-config-default-bcc" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-bcc" aria-hidden="true">#</a> wings.tiny.mail.config.default.bcc</h3><p><code>String[]</code>，默认暗送，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-config-default-reply" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-reply" aria-hidden="true">#</a> wings.tiny.mail.config.default.reply</h3><p><code>String</code>，默认回复，字符串</p><h3 id="wings-tiny-mail-config-default-html" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-config-default-html" aria-hidden="true">#</a> wings.tiny.mail.config.default.html</h3><p><code>Boolean</code>=<code>true</code>，默认是否发送html邮件(text/html)，否则纯文本(text/plain)</p><h3 id="gmail参考配置" tabindex="-1"><a class="header-anchor" href="#gmail参考配置" aria-hidden="true">#</a> gmail参考配置</h3><p>推荐使用app专用密码，不要使用登录密码。 <code>properties.*</code>仅为空时，使用默认值，不存在的key不使用默认值。 如<code>properties.mail.debug</code>被注释掉，不会使用default的值。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">wings.tiny.mail.config.gmail.host</span><span class="token punctuation">=</span><span class="token value attr-value">smtp.gmail.com</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.username</span><span class="token punctuation">=</span><span class="token value attr-value">\${GMAIL_USER:}</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.password</span><span class="token punctuation">=</span><span class="token value attr-value">\${GMAIL_PASS:}</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.protocol</span><span class="token punctuation">=</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.port</span><span class="token punctuation">=</span><span class="token value attr-value">587</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.properties.mail.smtp.auth</span><span class="token punctuation">=</span>
<span class="token key attr-name">wings.tiny.mail.config.gmail.properties.mail.smtp.starttls.enable</span><span class="token punctuation">=</span>
<span class="token comment">#wings.tiny.mail.config.gmail.properties.mail.debug=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8d-5-wings-tinymail-sender-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-5-wings-tinymail-sender-79-properties" aria-hidden="true">#</a> 8D.5.wings-tinymail-sender-79.properties</h2><h3 id="wings-tiny-mail-sender-dryrun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-dryrun" aria-hidden="true">#</a> wings.tiny.mail.sender.dryrun</h3><p><code>Boolean</code>=<code>false</code>，是否干跑，仅记录日志不真正执行任务</p><h3 id="wings-tiny-mail-sender-biz-id" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-biz-id" aria-hidden="true">#</a> wings.tiny.mail.sender.biz-id</h3><p><code>String</code>=<code>X-Biz-Id</code>，biz-id的Header，业务侧定位邮件，默认为mail的主键</p><h3 id="wings-tiny-mail-sender-biz-mark" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-biz-mark" aria-hidden="true">#</a> wings.tiny.mail.sender.biz-mark</h3><p><code>String</code>=<code>X-Biz-Mark</code>，biz-mark的Header，业务侧定位数据，比如订单号等</p><h3 id="wings-tiny-mail-sender-err-send" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-err-send" aria-hidden="true">#</a> wings.tiny.mail.sender.err-send</h3><p><code>Duration</code>=<code>5m</code>，发送失败 MailSendException 时，默认等待多少时间，默认5分钟</p><h3 id="wings-tiny-mail-sender-err-auth" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-err-auth" aria-hidden="true">#</a> wings.tiny.mail.sender.err-auth</h3><p><code>Duration</code>=<code>1h</code>，认证失败 MailAuthenticationException 时，默认等待多少时间，默认1小时</p><h3 id="wings-tiny-mail-sender-err-host" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-err-host" aria-hidden="true">#</a> wings.tiny.mail.sender.err-host</h3><p><code>Map&lt;BigDecimal, String&gt;</code>，包含以下异常信息时，对此host进行多少秒的等待。 秒为key，以小数部分仅用来区分key，负数为建议停止重发。</p><ul><li><code>3600.001</code>=<code>frequency limited</code></li></ul><h3 id="wings-tiny-mail-sender-err-mail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-err-mail" aria-hidden="true">#</a> wings.tiny.mail.sender.err-mail</h3><p><code>Map&lt;BigDecimal, String&gt;</code>，包含以下异常信息时，对此邮件的重发进行多少秒的等待。 秒为key，以小数部分仅用来区分key，负数为建议停止重发。</p><ul><li><code>-501001.001</code>=<code>from address must be same as authorization user</code></li></ul><p><code>501</code>为错误号，<code>001</code>为host编号，<code>.001</code>为区别位</p><h3 id="wings-tiny-mail-sender-per-idle" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-per-idle" aria-hidden="true">#</a> wings.tiny.mail.sender.per-idle</h3><p><code>Map&lt;String, Duration&gt;</code>，同一邮件host每次登录的间隔，避免限频，0为无视。</p><p><code>smtp.qq.com</code>=<code>500ms</code>，如qq邮箱，间隔500毫秒</p><h3 id="wings-tiny-mail-sender-max-idle" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-max-idle" aria-hidden="true">#</a> wings.tiny.mail.sender.max-idle</h3><p><code>Map&lt;String, Duration&gt;</code>，同一邮件host最多等待时间，小于时等待，否则抛出MailWaitException，0为无视</p><ul><li><code>smtp.qq.com</code>=<code>5s</code>，如qq邮箱，等待超过5秒时，抛出MailWaitException</li></ul><h3 id="wings-tiny-mail-sender-force-to" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-force-to" aria-hidden="true">#</a> wings.tiny.mail.sender.force-to</h3><p><code>String[]</code>，强制替换真实的to，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-sender-force-cc" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-force-cc" aria-hidden="true">#</a> wings.tiny.mail.sender.force-cc</h3><p><code>String[]</code>，强制替换真实的cc，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-sender-force-bcc" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-force-bcc" aria-hidden="true">#</a> wings.tiny.mail.sender.force-bcc</h3><p><code>String[]</code>，强制替换真实的bcc，字符串数组，逗号分隔</p><h3 id="wings-tiny-mail-sender-force-prefix" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-sender-force-prefix" aria-hidden="true">#</a> wings.tiny.mail.sender.force-prefix</h3><p><code>String</code>，强制增加真实的subject前缀</p><h2 id="_8d-6-wings-tinymail-service-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-6-wings-tinymail-service-79-properties" aria-hidden="true">#</a> 8D.6.wings-tinymail-service-79.properties</h2><h3 id="wings-tiny-mail-service-max-fail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-max-fail" aria-hidden="true">#</a> wings.tiny.mail.service.max-fail</h3><p><code>Integer</code>=<code>3</code>，同一邮件最大失败次数</p><p>wings.tiny.mail.service.max-done</p><p><code>Integer</code>=<code>1</code>，同一邮件最大成功次数</p><h3 id="wings-tiny-mail-service-max-next" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-max-next" aria-hidden="true">#</a> wings.tiny.mail.service.max-next</h3><p><code>Duration</code>=<code>1d</code>，超过多少时间的邮件不需要发送，默认1天</p><h3 id="wings-tiny-mail-service-try-next" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-try-next" aria-hidden="true">#</a> wings.tiny.mail.service.try-next</h3><p><code>Duration</code>=<code>1m</code>，失败后多久进行重试，默认1分钟</p><h3 id="wings-tiny-mail-service-batch-size" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-batch-size" aria-hidden="true">#</a> wings.tiny.mail.service.batch-size</h3><p><code>Integer</code>=<code>10</code>，批量发送时，一次发的最大件数</p><h3 id="wings-tiny-mail-service-warn-size" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-warn-size" aria-hidden="true">#</a> wings.tiny.mail.service.warn-size</h3><p><code>Integer</code>=<code>50</code>，超过此容量时，以Warn记录日志</p><h3 id="wings-tiny-mail-service-boot-scan" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-boot-scan" aria-hidden="true">#</a> wings.tiny.mail.service.boot-scan</h3><p><code>Duration</code>=<code>60s</code>，启动后多久，扫描未发送的邮件，<code>0</code>为不扫描</p><h3 id="wings-tiny-mail-service-only-app" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-only-app" aria-hidden="true">#</a> wings.tiny.mail.service.only-app</h3><p><code>Boolean</code>=<code>false</code>，是否仅发送本app的邮件</p><h3 id="wings-tiny-mail-service-only-run" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-service-only-run" aria-hidden="true">#</a> wings.tiny.mail.service.only-run</h3><p><code>Boolean</code>=<code>true</code>，是否仅发送本RumMode的邮件</p><h2 id="_8d-7-wings-tinymail-urlmap-79-properties" tabindex="-1"><a class="header-anchor" href="#_8d-7-wings-tinymail-urlmap-79-properties" aria-hidden="true">#</a> 8D.7.wings-tinymail-urlmap-79.properties</h2><h3 id="wings-tiny-mail-urlmap-list-all" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-list-all" aria-hidden="true">#</a> wings.tiny.mail.urlmap.list-all</h3><p><code>String</code>=<code>/admin/mail/list-all.json</code>，获取全部邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-list-failed" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-list-failed" aria-hidden="true">#</a> wings.tiny.mail.urlmap.list-failed</h3><p><code>String</code>=<code>/admin/mail/list-failed.json</code>，获取失败邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-list-undone" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-list-undone" aria-hidden="true">#</a> wings.tiny.mail.urlmap.list-undone</h3><p><code>String</code>=<code>/admin/mail/list-undone.json</code>，获取未成功邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-by-bizmark" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-by-bizmark" aria-hidden="true">#</a> wings.tiny.mail.urlmap.by-bizmark</h3><p><code>String</code>=<code>/admin/mail/by-bizmark.json</code>，根据Biz-Mark获取邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-by-recipient" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-by-recipient" aria-hidden="true">#</a> wings.tiny.mail.urlmap.by-recipient</h3><p><code>String</code>=<code>/admin/mail/by-recipient.json</code>，根据正则比较收件人to/cc/bcc获取邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-by-sender" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-by-sender" aria-hidden="true">#</a> wings.tiny.mail.urlmap.by-sender</h3><p><code>String</code>=<code>/admin/mail/by-sender.json</code>，根据收件人from获取邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-by-subject" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-by-subject" aria-hidden="true">#</a> wings.tiny.mail.urlmap.by-subject</h3><p><code>String</code>=<code>/admin/mail/by-subject.json</code>，根据正则比较邮件标题获取邮件的简要信息，默认倒序</p><h3 id="wings-tiny-mail-urlmap-load-detail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-load-detail" aria-hidden="true">#</a> wings.tiny.mail.urlmap.load-detail</h3><p><code>String</code>=<code>/admin/mail/load-detail.json</code>，获取邮件详情</p><h3 id="wings-tiny-mail-urlmap-send-mail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-send-mail" aria-hidden="true">#</a> wings.tiny.mail.urlmap.send-mail</h3><p><code>String</code>=<code>/admin/mail/send-mail.json</code>，新建或编辑邮件，并同步立即或异步定时发送，<code>-1</code>为失败，<code>0</code>为同步，否则为异步</p><h3 id="wings-tiny-mail-urlmap-send-save" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-send-save" aria-hidden="true">#</a> wings.tiny.mail.urlmap.send-save</h3><p><code>String</code>=<code>/admin/mail/send-save.json</code>，仅新建或编辑邮件，但并不发送</p><h3 id="wings-tiny-mail-urlmap-send-retry" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-send-retry" aria-hidden="true">#</a> wings.tiny.mail.urlmap.send-retry</h3><p><code>String</code>=<code>/admin/mail/send-retry.json</code>，同步重试失败的邮件，发送成功或失败，或异常</p><h3 id="wings-tiny-mail-urlmap-send-scan" tabindex="-1"><a class="header-anchor" href="#wings-tiny-mail-urlmap-send-scan" aria-hidden="true">#</a> wings.tiny.mail.urlmap.send-scan</h3><p><code>String</code>=<code>/admin/mail/send-scan.json</code>，同步扫需要描补发的邮件，并异步发送，返回补发的件数</p>`,123),s=[d];function t(c,l){return i(),a("div",null,s)}const m=e(r,[["render",t],["__file","8d-prop-tinymail.html.vue"]]);export{m as default};
