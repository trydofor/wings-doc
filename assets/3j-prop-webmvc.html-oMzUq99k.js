import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as s,g as r,o as d}from"./app-CV2Jd5ju.js";const i={};function o(n,e){return d(),s("div",null,e[0]||(e[0]=[r('<h1 id="_3j-webmvc的属性" tabindex="-1"><a class="header-anchor" href="#_3j-webmvc的属性"><span>3J.WebMvc的属性</span></a></h1><p>有关Slardar中提供的Spring WebMvc的基本设置</p><h2 id="_3j-1-wings-cookie-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-1-wings-cookie-79-properties"><span>3J.1.wings-cookie-79.properties</span></a></h2><p>以下所有name设置，均为原始名字，即没有prefix和alias之前</p><h3 id="wings-slardar-cookie-prefix" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-prefix"><span>wings.slardar.cookie.prefix</span></a></h3><p><code>String=</code>，Cookie前缀，默认空</p><h3 id="wings-slardar-cookie-alias" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-alias"><span>wings.slardar.cookie.alias</span></a></h3><p><code>Map&lt;String, String&gt;</code>，cookie别名，受前缀影响，如</p><p><code>session</code>=<code>o_0</code>，最后把<code>session</code>变为<code>${prefix}o_0</code></p><h3 id="wings-slardar-cookie-coder" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-coder"><span>wings.slardar.cookie.coder</span></a></h3><p><code>String</code>=<code>aes</code>, cookie编码，默认</p><ul><li><code>aes</code> - aes256</li><li><code>b64</code> - base64</li><li><code>nop</code> - 不加密</li></ul><p>相同配置name时，编码优先级 <code>aes</code> &gt; <code>b64</code> &gt; <code>nop</code></p><h3 id="wings-slardar-cookie-nop" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-nop"><span>wings.slardar.cookie.nop</span></a></h3><p><code>Set&lt;String&gt;</code>=<code>${server.servlet.session.cookie.name}</code></p><h3 id="wings-slardar-cookie-b64" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-b64"><span>wings.slardar.cookie.b64</span></a></h3><p><code>Set&lt;String&gt;=</code></p><h3 id="wings-slardar-cookie-aes" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-aes"><span>wings.slardar.cookie.aes</span></a></h3><p><code>Set&lt;String&gt;=</code></p><h3 id="wings-slardar-cookie-http-only" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-http-only"><span>wings.slardar.cookie.http-only</span></a></h3><p><code>Map&lt;Boolean, Set&lt;String&gt;&gt;=</code></p><p>HttpOnly，js无法读取，不设置时不处理</p><h3 id="wings-slardar-cookie-secure" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-secure"><span>wings.slardar.cookie.secure</span></a></h3><p><code>Map&lt;Boolean, Set&lt;String&gt;&gt;=</code></p><p>https 下发送，不设置时不处理</p><h3 id="wings-slardar-cookie-domain" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-domain"><span>wings.slardar.cookie.domain</span></a></h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;=</code>，为cookie设置指定domain</p><p>如 <code>wings.slardar.cookie.domain[a.com]</code>=<code>b,c</code>， 表示<code>name</code>为<code>b</code>或<code>c</code>的cookie，设置其<code>domain</code>为<code>a.com</code></p><h3 id="wings-slardar-cookie-path" tabindex="-1"><a class="header-anchor" href="#wings-slardar-cookie-path"><span>wings.slardar.cookie.path</span></a></h3><p><code>Map&lt;String, Set&lt;String&gt;&gt;=</code>，为cookie设置指定path</p><p>如 <code>wings.slardar.cookie.path[/admin]</code>=<code>b,c</code>， 表示<code>name</code>为<code>b</code>或<code>c</code>的cookie，设置<code>path</code>为<code>/admin</code></p><h2 id="_3j-2-wings-datetime-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-2-wings-datetime-79-properties"><span>3J.2.wings-datetime-79.properties</span></a></h2><p>json和bind中，支持更宽松的日期，时间和时区格式。</p><h3 id="wings-slardar-datetime-date-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-date-format"><span>wings.slardar.datetime.date.format</span></a></h3><p><code>String</code>=<code>yyyy[-MM][-dd]</code>，LocalDate的输出格式</p><h3 id="wings-slardar-datetime-date-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-date-parser"><span>wings.slardar.datetime.date.parser</span></a></h3><p><code>List&lt;String&gt;</code>，LocalDate输入的解析格式</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>,yyyy[-][/][.][M][-][/][.][d]\\</span></span>\n<span class="line"><span>,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-time-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-time-format"><span>wings.slardar.datetime.time.format</span></a></h3><p><code>String</code>=<code>HH[:mm][:ss]</code>，LocalTime的输出格式</p><h3 id="wings-slardar-datetime-time-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-time-parser"><span>wings.slardar.datetime.time.parser</span></a></h3><p><code>List&lt;String&gt;</code>，LocalTime输入的解析格式</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>H[:m][:s][.SSS]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-datetime-auto" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-datetime-auto"><span>wings.slardar.datetime.datetime.auto</span></a></h3><p><code>Boolean</code>=<code>false</code>，LocalDateTime是否自动转换时区</p><h3 id="wings-slardar-datetime-datetime-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-datetime-format"><span>wings.slardar.datetime.datetime.format</span></a></h3><p><code>String</code>=<code>yyyy[-MM][-dd][ ][HH][:mm][:ss]</code>，LocalDateTime的输出格式</p><h3 id="wings-slardar-datetime-datetime-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-datetime-parser"><span>wings.slardar.datetime.datetime.parser</span></a></h3><p><code>List&lt;String&gt;</code>，LocalDate输入的解析格式</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>,yyyy[-][/][.][M][-][/][.][d][ ][&#39;T&#39;][H][:m][:s][.SSS]\\</span></span>\n<span class="line"><span>,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ][&#39;T&#39;][H][:m][:s][.SSS]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-zoned-auto" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-zoned-auto"><span>wings.slardar.datetime.zoned.auto</span></a></h3><p><code>Boolean</code>=<code>false</code>，ZonedDateTime是否自动转换时区</p><h3 id="wings-slardar-datetime-zoned-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-zoned-format"><span>wings.slardar.datetime.zoned.format</span></a></h3><p><code>String</code>=<code>yyyy[-MM][-dd][ ][HH][:mm][:ss][ ][VV]</code>，ZonedDateTime的输出格式</p><h3 id="wings-slardar-datetime-zoned-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-zoned-parser"><span>wings.slardar.datetime.zoned.parser</span></a></h3><p><code>List&lt;String&gt;</code>，ZonedDateTime输入的解析格式</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>,yyyy[-][/][.][M][-][/][.][d][ ][&#39;T&#39;][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X][&#39;[&#39;][ ][VV][&#39;]&#39;]\\</span></span>\n<span class="line"><span>,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ][&#39;T&#39;][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X][&#39;[&#39;][ ][VV][&#39;]&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-offset-auto" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-offset-auto"><span>wings.slardar.datetime.offset.auto</span></a></h3><p><code>Boolean</code>=<code>false</code>，OffsetDateTime是否自动转换时区</p><h3 id="wings-slardar-datetime-offset-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-offset-format"><span>wings.slardar.datetime.offset.format</span></a></h3><p><code>String</code>=<code>yyyy[-MM][-dd][ ][HH][:mm][:ss][ ][xxx]</code>，OffsetDateTime的输出格式</p><h3 id="wings-slardar-datetime-offset-parser" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-offset-parser"><span>wings.slardar.datetime.offset.parser</span></a></h3><p><code>List&lt;String&gt;</code>，OffsetDateTime输入的解析格式</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>,yyyy[-][/][.][M][-][/][.][d][ ][&#39;T&#39;][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X][&#39;[&#39;][ ][VV][&#39;]&#39;]\\</span></span>\n<span class="line"><span>,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy][ ][&#39;T&#39;][H][:m][:s][.SSS][XXXXX][XXXX][XXX][XX][X][&#39;[&#39;][ ][VV][&#39;]&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-slardar-datetime-clock-offset" tabindex="-1"><a class="header-anchor" href="#wings-slardar-datetime-clock-offset"><span>wings.slardar.datetime.clock-offset</span></a></h3><p><code>long</code>=<code>0</code>，设置系统时钟偏移的offset毫秒数。</p><h2 id="_3j-3-wings-jackson-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-3-wings-jackson-79-properties"><span>3J.3.wings-jackson-79.properties</span></a></h2><p>以下会造成序列化和反序列化不一致。</p><h3 id="wings-slardar-jackson-empty-date" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-empty-date"><span>wings.slardar.jackson.empty-date</span></a></h3><p><code>LocalDate</code>=<code>1000-01-01</code>，<code>空</code>日期不输出，空表示忽略此功能。</p><p>支持LocalDate，LocalDateTime，ZonedDateTime，OffsetDateTime，util.Date</p><h3 id="wings-slardar-jackson-empty-date-offset" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-empty-date-offset"><span>wings.slardar.jackson.empty-date-offset</span></a></h3><p><code>Integer</code>=12，考虑时区影响，和系统时间相差正负[12]小时内，认为<code>空</code></p><h3 id="wings-slardar-jackson-i18n-result" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-i18n-result"><span>wings.slardar.jackson.i18n-result</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否处理I18nResult的message</p><h3 id="wings-slardar-jackson-i18n-result-compatible" tabindex="-1"><a class="header-anchor" href="#wings-slardar-jackson-i18n-result-compatible"><span>wings.slardar.jackson.i18n-result-compatible</span></a></h3><p><code>Integer=</code>, 在R中，是否设置第一个error 作为message</p><ul><li>0, null - 禁止</li><li>1 - 仅设置 message</li><li>2 - 设置 message, i18nCode 和 i18nArgs</li></ul><h2 id="_3j-4-wings-locale-resolver-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-4-wings-locale-resolver-79-properties"><span>3J.4.wings-locale-resolver-79.properties</span></a></h2><h3 id="locale或language" tabindex="-1"><a class="header-anchor" href="#locale或language"><span>Locale或Language</span></a></h3><p>分别通过param，cookie和header的key获得语言</p><ul><li><code>wings.slardar.locale.locale-param</code>=<code>locale</code></li><li><code>wings.slardar.locale.locale-cookie</code>=<code>Wings-Locale</code></li><li><code>wings.slardar.locale.locale-header</code>=<code>Accept-Language</code></li></ul><h3 id="timezone或zoneid" tabindex="-1"><a class="header-anchor" href="#timezone或zoneid"><span>Timezone或Zoneid</span></a></h3><p>分别通过param，cookie和header的key获得时区</p><ul><li><code>wings.slardar.locale.zoneid-param</code>=<code>zoneid</code></li><li><code>wings.slardar.locale.zoneid-cookie</code>=<code>Wings-Zoneid</code></li><li><code>wings.slardar.locale.zoneid-header</code>=<code>Zone-Id</code></li></ul><h2 id="_3j-5-wings-number-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-5-wings-number-79-properties"><span>3J.5.wings-number-79.properties</span></a></h2><p>可定制Number的精度和格式，支持JsonFormat的pattern， 需使用BigDecimal替换Float和Double，避免精度丢失</p><h3 id="wings-slardar-number-integer-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-integer-format"><span>wings.slardar.number.integer.format</span></a></h3><p><code>String</code>=<code>#</code>，Integer, Long的格式，<code>空</code>表示关闭。</p><p>千分位用<code>,</code>占位，在separator设置中会被正确替换。</p><h3 id="wings-slardar-number-integer-round-floor" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-integer-round-floor"><span>wings.slardar.number.integer.round=FLOOR</span></a></h3><p><code>RoundingMode</code>=<code>FLOOR</code>，舍入模式。</p><h3 id="wings-slardar-number-integer-separator" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-integer-separator"><span>wings.slardar.number.integer.separator</span></a></h3><p><code>String</code>=<code>,</code>，当Shape==ANY时，整数位分隔符，如千分位。</p><h3 id="wings-slardar-number-integer-digital" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-integer-digital"><span>wings.slardar.number.integer.digital</span></a></h3><p><code>String</code>=<code>auto</code>，数值以js的string还是number输出</p><ul><li><code>auto</code> - 自动适配，52bit以下number，以上string</li><li><code>true</code> - 强制number，忽略WRITE_NUMBERS_AS_STRINGS</li><li><code>false</code> - 强制string，避免丢失精度</li></ul><p>是否忽略WRITE_NUMBERS_AS_STRINGS，强制写number，需要注意format是否兼容。 例如，在js中用bigint，设置为auto时，边界（含）时会自动切换number和string</p><h3 id="wings-slardar-number-floats-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-floats-format"><span>wings.slardar.number.floats.format</span></a></h3><p><code>String=</code>，如<code>#.00</code>，Float, Double的格式，<code>空</code>表示关闭。</p><p>千分位用<code>,</code>占位，在separator设置中会被正确替换。</p><h3 id="wings-slardar-number-floats-round" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-floats-round"><span>wings.slardar.number.floats.round</span></a></h3><p><code>RoundingMode</code>=<code>FLOOR</code>，舍入模式。</p><h3 id="wings-slardar-number-floats-separator" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-floats-separator"><span>wings.slardar.number.floats.separator</span></a></h3><p><code>String</code>=<code>,</code>，当Shape==ANY时，整数位分隔符，如千分位。</p><h3 id="wings-slardar-number-floats-digital" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-floats-digital"><span>wings.slardar.number.floats.digital</span></a></h3><p><code>String</code>=<code>false</code>，默认强制string，避免精度丢失。</p><h3 id="wings-slardar-number-decimal-format" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-decimal-format"><span>wings.slardar.number.decimal.format</span></a></h3><p><code>String=</code>，如<code>#.00</code>，BigDecimal, BigInteger的格式，<code>空</code>表示关闭。</p><p>千分位用<code>,</code>占位，在separator设置中会被正确替换。</p><h3 id="wings-slardar-number-decimal-round" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-decimal-round"><span>wings.slardar.number.decimal.round</span></a></h3><p><code>RoundingMode</code>=<code>FLOOR</code>，舍入模式。</p><h3 id="wings-slardar-number-decimal-separator" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-decimal-separator"><span>wings.slardar.number.decimal.separator</span></a></h3><p><code>String</code>=<code>,</code>，当Shape==ANY时，整数位分隔符，如千分位。</p><h3 id="wings-slardar-number-decimal-digital" tabindex="-1"><a class="header-anchor" href="#wings-slardar-number-decimal-digital"><span>wings.slardar.number.decimal.digital</span></a></h3><p><code>String</code>=<code>false</code>，默认强制string，避免精度丢失。</p><h2 id="_3j-6-wings-pagequery-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-6-wings-pagequery-79-properties"><span>3J.6.wings-pagequery-79.properties</span></a></h2><p>取代 spring data中的分页。</p><h3 id="wings-slardar-pagequery-page" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-page"><span>wings.slardar.pagequery.page</span></a></h3><p><code>Integer</code>=<code>1</code>，默认页数，第一页</p><h3 id="wings-slardar-pagequery-size" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-size"><span>wings.slardar.pagequery.size</span></a></h3><p><code>Integer</code>=<code>20</code>，默认每页大小</p><h3 id="wings-slardar-pagequery-page-alias" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-page-alias"><span>wings.slardar.pagequery.page-alias</span></a></h3><p><code>List&lt;String&gt;</code>=<code>page,pageNumber</code>，别名</p><h3 id="wings-slardar-pagequery-size-alias" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-size-alias"><span>wings.slardar.pagequery.size-alias</span></a></h3><p><code>List&lt;String&gt;</code>=<code>size,pageSize</code>，别名</p><h3 id="wings-slardar-pagequery-sort-alias" tabindex="-1"><a class="header-anchor" href="#wings-slardar-pagequery-sort-alias"><span>wings.slardar.pagequery.sort-alias</span></a></h3><p><code>List&lt;String&gt;</code>=<code>sort,sortBy</code>，别名</p><h2 id="_3j-7-wings-passcoder-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-7-wings-passcoder-79-properties"><span>3J.7.wings-passcoder-79.properties</span></a></h2><p>密码的加密和加盐配置</p><h3 id="wings-slardar-passcoder-pass-encoder" tabindex="-1"><a class="header-anchor" href="#wings-slardar-passcoder-pass-encoder"><span>wings.slardar.passcoder.pass-encoder</span></a></h3><p><code>String</code>=<code>argon2</code>，默认加密算法。</p><p>支持never|noop|bcrypt|pbkdf2|scrypt|argon2</p><h3 id="wings-slardar-passcoder-pass-decoder" tabindex="-1"><a class="header-anchor" href="#wings-slardar-passcoder-pass-decoder"><span>wings.slardar.passcoder.pass-decoder</span></a></h3><p><code>String</code>=<code>never</code>，默认解密算法。</p><p>支持never|noop|bcrypt|pbkdf2|scrypt|argon2</p><p>setDefaultPasswordEncoderForMatches，id不匹配时，默认解码算法。</p><h3 id="wings-slardar-passcoder-salt-encoder" tabindex="-1"><a class="header-anchor" href="#wings-slardar-passcoder-salt-encoder"><span>wings.slardar.passcoder.salt-encoder</span></a></h3><p><code>String</code>=<code>sha256</code>，默认加盐算法 sha256|sha1|md5</p><h3 id="wings-slardar-passcoder-time-deviation-30" tabindex="-1"><a class="header-anchor" href="#wings-slardar-passcoder-time-deviation-30"><span>wings.slardar.passcoder.time-deviation=30</span></a></h3><p><code>Integer</code>=<code>30</code>，BasicPasswordEncoder 时间戳偏差秒数。</p><h2 id="_3j-8-wings-remote-resolver-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-8-wings-remote-resolver-79-properties"><span>3J.8.wings-remote-resolver-79.properties</span></a></h2><h3 id="wings-slardar-remote-inner-ip" tabindex="-1"><a class="header-anchor" href="#wings-slardar-remote-inner-ip"><span>wings.slardar.remote.inner-ip</span></a></h3><p><code>Map&lt;String, String&gt;</code>，不作为remote ip考虑的内网网段</p><ul><li><code>local-127</code>=<code>127.</code></li><li><code>local-192</code>=<code>192.</code></li><li><code>local-0v6</code>=<code>0:0:0:0:0:0</code></li><li><code>local-0v4</code>=<code>0.0.0.</code></li></ul><h3 id="wings-slardar-remote-ip-header" tabindex="-1"><a class="header-anchor" href="#wings-slardar-remote-ip-header"><span>wings.slardar.remote.ip-header</span></a></h3><p><code>Map&lt;String, String&gt;</code>，使用代理时，通过哪些header获得真实ip</p><ul><li><code>Real-IP</code>=<code>X-Real-IP</code></li><li><code>Forwarded-For</code>=<code>X-Forwarded-For</code></li></ul><h3 id="wings-slardar-remote-agent-header" tabindex="-1"><a class="header-anchor" href="#wings-slardar-remote-agent-header"><span>wings.slardar.remote.agent-header</span></a></h3><p><code>Map&lt;String, String&gt;</code>，用户设备信息头，选择所有信息</p><ul><li><code>User-Agent</code>=<code>User-Agent</code></li></ul><h2 id="_3j-9-wings-session-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-9-wings-session-79-properties"><span>3J.9.wings-session-79.properties</span></a></h2><h3 id="wings-slardar-session-header-name" tabindex="-1"><a class="header-anchor" href="#wings-slardar-session-header-name"><span>wings.slardar.session.header-name</span></a></h3><p><code>String</code>=<code>${server.servlet.session.cookie.name}</code></p><p>使用header解析session的name，空表示不解析</p><h3 id="wings-slardar-session-cookie-name" tabindex="-1"><a class="header-anchor" href="#wings-slardar-session-cookie-name"><span>wings.slardar.session.cookie-name</span></a></h3><p><code>String</code>=<code>${server.servlet.session.cookie.name}</code></p><p>使用cookie解析的session的name，空表示不解析</p><h3 id="wings-slardar-session-cookie-base64" tabindex="-1"><a class="header-anchor" href="#wings-slardar-session-cookie-base64"><span>wings.slardar.session.cookie-base64</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否对session进行base64编码</p><h3 id="wings-slardar-session-cookie-route" tabindex="-1"><a class="header-anchor" href="#wings-slardar-session-cookie-route"><span>wings.slardar.session.cookie-route</span></a></h3><p><code>String=</code>，增加session的jvm route，空表示忽略。</p><h2 id="_3j-a-wings-terminal-79-properties" tabindex="-1"><a class="header-anchor" href="#_3j-a-wings-terminal-79-properties"><span>3J.A.wings-terminal-79.properties</span></a></h2><h3 id="wings-slardar-terminal-exclude-patterns" tabindex="-1"><a class="header-anchor" href="#wings-slardar-terminal-exclude-patterns"><span>wings.slardar.terminal.exclude-patterns</span></a></h3><p><code>Map&lt;String, String&gt;</code>，不需要TerminalInterceptor处理的URL</p><ul><li><code>error</code>=<code>/error</code></li><li><code>api</code>=<code>/api/**</code></li><li><code>oauth</code>=<code>/oauth/**</code></li></ul><h3 id="wings-slardar-terminal-locale-request" tabindex="-1"><a class="header-anchor" href="#wings-slardar-terminal-locale-request"><span>wings.slardar.terminal.locale-request</span></a></h3><p><code>boolean</code>=<code>true</code>，是否从请求获得Locale，而非服务器</p><h3 id="wings-slardar-terminal-timezone-request" tabindex="-1"><a class="header-anchor" href="#wings-slardar-terminal-timezone-request"><span>wings.slardar.terminal.timezone-request</span></a></h3><p><code>boolean</code>=<code>false</code>，是否从请求获得Timezone，而非服务器</p>',170)]))}const l=a(i,[["render",o],["__file","3j-prop-webmvc.html.vue"]]),p=JSON.parse('{"path":"/zh/3-slardar/3j-prop-webmvc.html","title":"3J.WebMvc的属性","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"folder-tree","category":["大鱼","属性"],"description":"3J.WebMvc的属性 有关Slardar中提供的Spring WebMvc的基本设置 3J.1.wings-cookie-79.properties 以下所有name设置，均为原始名字，即没有prefix和alias之前 wings.slardar.cookie.prefix String=，Cookie前缀，默认空 wings.slardar.c...","GIT_REPO_HEAD":"2025-03-19 c2424660b848abc3a7f89f5b7e9b8297d30386c9","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/3-slardar/3j-prop-webmvc.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/3-slardar/3j-prop-webmvc.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"3J.WebMvc的属性"}],["meta",{"property":"og:description","content":"3J.WebMvc的属性 有关Slardar中提供的Spring WebMvc的基本设置 3J.1.wings-cookie-79.properties 以下所有name设置，均为原始名字，即没有prefix和alias之前 wings.slardar.cookie.prefix String=，Cookie前缀，默认空 wings.slardar.c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-05T07:34:35.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-05T07:34:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3J.WebMvc的属性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-05T07:34:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"git":{"createdTime":1656422147000,"updatedTime":1738740875000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":19,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":4.62,"words":1387},"filePathRelative":"zh/3-slardar/3j-prop-webmvc.md","localizedDate":"2022年6月28日","autoDesc":true}');export{l as comp,p as data};
