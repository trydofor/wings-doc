import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as r,b as e,e as n,d as s,f as t}from"./app-OXbFzGQa.js";const c={},p=t(`<h1 id="_3a-jackson-convention" tabindex="-1"><a class="header-anchor" href="#_3a-jackson-convention"><span>3A.Jackson Convention</span></a></h1><p>Conversion of common data types in Mvc server.</p><h2 id="_3a-1-common-type-conventions" tabindex="-1"><a class="header-anchor" href="#_3a-1-common-type-conventions"><span>3A.1.Common Type Conventions</span></a></h2><p>Given the differences between java and js, data transfer, and functionality, the convention is as follows.</p><ul><li>float number to java.BigDecimal and js.string to pass each other</li><li>java.null not to pass each other in Json</li><li>java.integer, interpass with js.number/string</li><li>java.datetime, including <code>util.Date</code>,<code>sql.Date</code>,<code>time.Local*|Zoned*|Instant</code></li><li>java.datetime, in timestamp format with js.number</li><li>java.datetime, in <code>yyyy-MM-dd HH:mm:ss</code> format with js.string</li><li>java.timezone, both in ZoneId string format with js.string</li></ul><h2 id="_3a-2-lost-precision-and-trait" tabindex="-1"><a class="header-anchor" href="#_3a-2-lost-precision-and-trait"><span>3A.2.Lost Precision and Trait</span></a></h2><p>Because of the character of js, there will be precision and character (type, sorting, etc.) loss problems, such as the key of object may lose the original order.</p><ul><li>It is better to have only 2 basic data types in Json: boolean and string</li><li>Js does not handle numeric calculations with precision, and should only be responsible for displaying the results of server-side calculations.</li><li>Due to the special nature of time, there are timezones and daylight saving time, readability is preferred when guaranteeing accuracy</li><li>53bits of long, must use string, because IEE754 cannot be correctly represented</li><li>integer and long, use number by default, consider typescript compatibility</li><li>Ensure jsr310 format compatibility, e.g. rely on <code>jackson-datatype-jsr310</code></li><li>ZoneId should prefer <code>IANA TZDB</code> format, e.g. <code>America/New_York</code></li><li>Serialization and deserialization process with time zone (<code>Z</code>) will lose daylight saving time information</li></ul><p>Note: The property name prefix cannot be a single letter, Wings recommends more than 3 letters. Because <code>sCount</code> will lead to parsing errors, see test OkHttpClientHelperTest.testPostBad</p><h2 id="_3a-3-i18n-of-content" tabindex="-1"><a class="header-anchor" href="#_3a-3-i18n-of-content"><span>3A.3.I18n of Content</span></a></h2><p>Auto I18n conversion of content by annotation and type to string output.</p><ul><li><code>I18nString</code> type is automatically converted</li><li><code>CharSequence</code> with <code>@JsonI18nString</code> annotation is converted as message_code</li><li><code>@JsonI18nString(false)</code> disables auto-conversion</li><li><code>R.I&lt;T&gt;</code> is the common return type and will auto replace <code>message</code> with i18n when <code>i18nCode</code> is present, Auto-conversion uses the injected <code>messageSource</code> and <code>WingsI18nContext</code> to get the appropriate language</li></ul><h2 id="_3a-4-datetime-format" tabindex="-1"><a class="header-anchor" href="#_3a-4-datetime-format"><span>3A.4.DateTime Format</span></a></h2><p>Supports the following date format customizations in java.time, including Json and Spring.</p><ul><li>LocalDate, LocalTime, LocalDateTime, multiple input formats, single output format customization.</li><li>ZonedDateTime, same as <code>Local*</code> support auto-switching to user timezone, off by default.</li><li>OffsetDateTime, same as \`Local* support auto-switching to user timezone, on by default</li></ul><p>For example, the default configuration of wings-datetime-79.properties in the LocalDate support,</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># output in 2021-01-30 format</span>
<span class="token key attr-name">wings.slardar.datetime.date.format</span><span class="token punctuation">=</span><span class="token value attr-value">yyyy[-MM][-dd]</span>
<span class="token comment"># input support 2021-01-30 and Jan/30/2021, etc.</span>
<span class="token key attr-name">wings.slardar.datetime.date.parser</span><span class="token punctuation">=</span><span class="token value attr-value">\\
,yyyy[-][/][.][M][-][/][.][d]\\
,[MMMM][MMM][M][-][/][.][d][-][/][.][yyyy][yy]</span>
<span class="token comment"># see SmartFormatter.java testcase</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3a-5-number-format" tabindex="-1"><a class="header-anchor" href="#_3a-5-number-format"><span>3A.5.Number Format</span></a></h2><p>Int,Long,Float,Double,BigDecimal support (Json) customization of output format and rounding format. Note that in the actual project, Float and Double should be avoided and BigDecimal should be used. Within Wings convention, the only commonly Number types should be Int, Long and BigDecimal.</p><p>For example, the default configuration of Decimal support in wings-number-79.properties is,</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># Keep 2 decimal places, Floor mode</span>
<span class="token key attr-name">wings.slardar.number.decimal.format</span><span class="token punctuation">=</span><span class="token value attr-value">#.00</span>
<span class="token key attr-name">wings.slardar.number.decimal.round</span><span class="token punctuation">=</span><span class="token value attr-value">FLOOR</span>
<span class="token key attr-name">wings.slardar.number.decimal.separator</span><span class="token punctuation">=</span><span class="token value attr-value">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also set, according to Chinese custom, every 4 digits separated by <code>_</code>, add CNY symbol,</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">wings.slardar.number.decimal.format</span><span class="token punctuation">=</span><span class="token value attr-value">￥,####.00</span>
<span class="token key attr-name">wings.slardar.number.decimal.separator</span><span class="token punctuation">=</span><span class="token value attr-value">_</span>
<span class="token comment"># see DecimalFormatTest.java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>digital=auto</code> auto switches between number and string when the JS numeric value exceeds Number.M##_SAFE_INTEGER. By default configuration, <code>auto</code> is used only for int32 and int64, need to be used with caution, check type or disable <code>auto</code>(<code>false</code>)</p><h2 id="_3a-6-empty-data-handling" tabindex="-1"><a class="header-anchor" href="#_3a-6-empty-data-handling"><span>3A.6.Empty Data Handling</span></a></h2><p>This feature is enabled by default and will cause inconsistencies in the serialization and deserialization. Must handle the difference yourself.</p><ul><li>Empty date is considered null, not output to avoid a lot of 1000-01-01 data</li><li>Array/Collection/Map is not output if it is empty</li></ul><h2 id="_3a-7-common-jackson-annotations" tabindex="-1"><a class="header-anchor" href="#_3a-7-common-jackson-annotations"><span>3A.7.Common Jackson Annotations</span></a></h2><ul><li>@JsonRawValue - number not to string, string not escaped</li><li>@JsonFormat - specify the format</li><li>@JsonIgnore/JsonProperty - ignore the field</li><li>@JsonProperty - rename the field</li><li>@JsonNaming - naming rules</li><li>@JsonRootName(value = &quot;user&quot;) - add a root name</li><li>@JsonUnwrapped - without wrapper class</li><li>@JsonSerialize(as=BasicType.class) - output as other</li><li>@JsonView - filter properties with different views (works on RequestMapping)</li></ul><p>Avoid global type filters and mixins in general, session-level annotations are recommended.</p><ul><li>Same pojo, different property names for different scenarios, eg. password and secret</li><li>Same pojo with different values for different scenarios, eg. yyyy-MM-dd and MMM-dd,yyyy</li></ul><p>For the above scenarios, it is still important to follow the principles of static and strong typing, and the following suggestions can usually be used</p><ul><li>Own classes, use @JsonView + different getter to distinguish different scenarios</li><li>3rd classes, using Override subclasses + MapStruct to copy properties</li><li>Custom JsonSerialize or Converter, not recommended</li><li>Custom ResponseBodyAdvice, not recommended</li></ul><p>By default configuration, only @JsonView can act on RequestMapping, other annotations should be noted on Pojo. see,</p>`,34),d={href:"https://www.baeldung.com/jackson-annotations",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/FasterXML/jackson-annotations/wiki/Jackson-Annotations",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.spring-mvc.customize-jackson-objectmapper",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="_3a-8-generic-in-deserialization" tabindex="-1"><a class="header-anchor" href="#_3a-8-generic-in-deserialization"><span>3A.8.Generic in Deserialization</span></a></h2><p>Jackson includes generic types, and parameter types are a necessary skill.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">TypeReference</span> ref <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// TypeFactory has a rich set of type constructs</span>
<span class="token class-name">JavaType</span> type <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getTypeFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">constructCollectionType</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Foo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(f,v){const a=i("ExternalLinkIcon");return l(),r("div",null,[p,e("ul",null,[e("li",null,[e("a",d,[n("baeldung example"),s(a)])]),e("li",null,[e("a",u,[n("jackson annotation"),s(a)])]),e("li",null,[e("a",m,[n("spring customize jackson"),s(a)])])]),h])}const b=o(c,[["render",g],["__file","3a-jackson.html.vue"]]);export{b as default};
