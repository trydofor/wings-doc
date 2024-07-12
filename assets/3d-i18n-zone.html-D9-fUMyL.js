import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,c as l,b as t,d as i,f as h,w as k,e as s,o as p}from"./app-CcKWV4zH.js";const d={},r=s(`<h1 id="_3d-多国语和多时区" tabindex="-1"><a class="header-anchor" href="#_3d-多国语和多时区"><span>3D.多国语和多时区</span></a></h1><p>在Silencer配置中，所有位于<code>wigns-i18n/</code>的I18n的消息，都会自动加载。</p><h2 id="_3d-1-加载顺序" tabindex="-1"><a class="header-anchor" href="#_3d-1-加载顺序"><span>3D.1.加载顺序</span></a></h2><p>通过<code>LocaleResolver</code>，按以下优先级，获得当前locale设置。</p><ol><li>request中被设置的<code>WINGS.I18N_CONTEXT</code></li><li>query string <code>locale</code>, <code>zoneid</code></li><li>http header <code>Accept-Language</code>,<code>Zone-Id</code></li><li>cookie <code>Wings-Locale</code>, <code>Wings-Zoneid</code></li><li>登录用户的SecurityContext中获得wings设置</li><li>系统默认值</li></ol><p>注意：在数据库和配置中<code>zoneid</code>视为一个词，而java中<code>ZoneId</code>是一个类（I大写）， 所以，当从Db中取值，并通过反射赋值时，容易因区分大小写而错过ZoneId的赋值。</p><p><code>LocaleResolver</code>作用在<code>doService</code>中，是在<code>doFilter</code>之后，因此<code>Filter</code>中没有Context.</p><h2 id="_3d-2-locale解析" tabindex="-1"><a class="header-anchor" href="#_3d-2-locale解析"><span>3D.2.Locale解析</span></a></h2><p><code>WingsLocaleResolver</code>是一个servlet实现，不支持webflux。</p><ul><li>用户登录后，自动生成Locale和ZoneId有关的Context</li><li><code>SecurityContextUtil</code>在Mvc层获取相关的Context，由Filter实现</li><li><code>WingsTerminalContext</code>在Service层使用，由TerminalInterceptor实现</li></ul><p>多时区方面，通过Enum类，自动生成业务上的标准时区，以供解析和使用。 在编码命名上，类型关系和命名约定如下，</p><ul><li>language - 对应 StandardLanguageEnum</li><li>timezone - 对应 StandardTimezoneEnum</li><li>locale - 对应 java.util.Locale</li><li>zoneid - 对应 java.time.ZoneId</li></ul><p>在js环境中，用<code>Intl.DateTimeFormat().resolvedOptions().timeZone</code>获得时区。 当客户端无法获得zoneid时，可以取得服务器支持的zone及其offset,country自行判断。</p><h2 id="_3d-3-多国语的占位符" tabindex="-1"><a class="header-anchor" href="#_3d-3-多国语的占位符"><span>3D.3.多国语的占位符</span></a></h2><p>JavaBean Validation的<code>@Valid</code>验证，支持Unified Expression Language (JSR 341) 使用<code>\${}</code>访问外部变量，使用<code>{}</code>访问annotation内变量，如以下例子</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Size</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">( </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">min</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> max</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 14</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> message</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;{common.email.size}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"># 在 i18n信息中设置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">common</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">email</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">size</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">The</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> author email </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;\${validatedValue}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> must be between {min} and {max}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在<code>Message的ResourceBundle</code>中，默认使用java.text.MessageFormat的数组<code>{0}</code>格式。</p><h2 id="_3d-4-项目中i18n实践" tabindex="-1"><a class="header-anchor" href="#_3d-4-项目中i18n实践"><span>3D.4.项目中I18n实践</span></a></h2><p>项目支持I18n，除了为静态Message定义Code外，更大的工作量在于处理动态的业务消息。 比较常见的如输入参数的检查，运行状态的校验，输出结果的确认等。</p><h3 id="_4a-前置条件检查" tabindex="-1"><a class="header-anchor" href="#_4a-前置条件检查"><span>4a.前置条件检查</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 抛出无堆栈的CodeException</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/test/code-exception.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> codeException</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    AssertArgs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">isTrue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">CommonErrorEnum</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">AssertEmpty1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> CodeException</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> CommonErrorEnum</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">AssertEmpty1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 使用Validation注解</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Data</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Ins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">NotBlank</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">message</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;{test.name.empty}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Email</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">message</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;{test.email.invalid}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> email</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/test/binding-error-from.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> bindingErrorFrom</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Valid</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Ins</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ins) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">okData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(ins);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4b-读写分组验证" tabindex="-1"><a class="header-anchor" href="#_4b-读写分组验证"><span>4b.读写分组验证</span></a></h3><p>在Mvc实践中，推荐的模式是，用groups分组，以区分insert和update的验证</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// FormData，一个类包括全部字段，比较简洁，但注意使用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 继承的模式 OutSkuUpd extends OutSkuAdd，比较啰嗦，但强类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Data</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> OutSkuForm</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">NotNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">message</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;{form.validate.updateoutsku.id}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> groups</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Update</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">description</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;规格id，更新时需要&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Long</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// Controller 采用 @Validated 分组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Operation</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">summary</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;修改出库规格&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">PostMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/wh/outsku/update-outsku.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Object</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> updateOutSku</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestBody</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Validated</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Update</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}) </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">OutSkuForm</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ins) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">OK</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4c-运行时状态检查" tabindex="-1"><a class="header-anchor" href="#_4c-运行时状态检查"><span>4c.运行时状态检查</span></a></h3><p>预定义CodeEnum，关联Message资源，通过全局的异常处理输出I18n信息</p><ul><li><code>AssertState</code> - 同AssertArgs，抛出无堆栈异常</li><li><code>MessageException</code> - 抛出带有code的无堆栈异常</li><li><code>CodeException</code> - 默认为有堆栈异常</li><li><code>I18nString</code> - 通过json自动转换为String类型输出</li><li><code>@JsonI18nString</code> - 注解字段，实现自动json转换</li></ul><h3 id="_4d-多国语信息设置" tabindex="-1"><a class="header-anchor" href="#_4d-多国语信息设置"><span>4d.多国语信息设置</span></a></h3>`,28),o=s('<h2 id="_3d-5-三种datetime" tabindex="-1"><a class="header-anchor" href="#_3d-5-三种datetime"><span>3D.5.三种DateTime</span></a></h2><p>多时区，要兼顾数据可读性和编码便利性，在slardar中统一约定如下，</p><ul><li><code>系统时区</code> system - 系统运行的时区，其在Jvm，Db上是统一的</li><li><code>数据时区</code> origin - 数据产生的时区，参与者所在的时区</li><li><code>用户时区</code> client - 数据使用者，阅读数据时希望看到的时区</li></ul><p>在一般情况下，此三者是统一的，比如都在北京时间<code>GMT+8</code>。 在时区不敏感的数据上，一般直接使用LocalDateTime，忽略时区。</p><p>在slardar的适用的业务场景中，在业务层统一使用系统时区，用LocalDateTime。 而在Controller层，负责进行系统和用户时区的双向转换，使用ZonedDateTime。</p><ul><li>时区不敏感或只做本地时间标签的情况，统一使用<code>LocalDateTime</code></li><li>时区敏感时，在Jackson和RequestParam中自动转换 <ul><li>Request时，自动把用户时间调至系统时区</li><li>Response时，自动把系统时间调至用户时区</li></ul></li><li>自动转换类型，目前只有一下3种，其中 <ul><li><code>LocalDateTime</code> 默认关闭，不建议转换</li><li><code>ZonedDatetime</code> 默认关闭，历史兼容性</li><li><code>OffsetDateTime</code> 默认开启</li></ul></li><li>使用<code>@AutoTimeZone</code>标记，明确3种日期的转换行为 <ul><li>用在Dto的Field上，可在RequestBody和ResponseBody中自动转换</li><li>同Spring的@RequestParam一起作用于Param</li></ul></li><li>使用 AutoDtoHelper 在Spring管理外替换Dto属性，目前支持以下注解 <ul><li>@AutoDtoAble - 遍历内部属性</li><li>@AutoTimeZone - 自动转换3种日期</li><li>@AutoI18nString - 自动转换String或I18nString</li></ul></li></ul><p>注意，因util.Date有缺陷，在wings中默认禁用，必须使用<code>java.time.*</code>类。</p><p>举例说明，3个时区的不一样，更多测试用例参考 <code>DateTimeConverterTest.java</code></p><p>例A：一个在线约课应用，中国学生和纽约老师，约定上课时间。那么，</p><ul><li>假设系统运行在UTC时间上，即system=<code>UTC+0</code></li><li>学生和老师client时区，分别为<code>Asia/Shanghai</code>和<code>America/New_York</code></li><li>约课时，需要分别按client显示时间，提高约课体验</li></ul><p>例B：一个跨境电商应用，纽约用户，经海外发货仓，在某宝买东西。那么，</p><ul><li>假设某宝运行在东八区上，即 system=<code>UTC+8</code></li><li>纽约用户的client=<code>America/New_York</code></li><li>LA的发货仓，即 origin=<code>America/Los_Angeles</code></li><li>订单信息，会以client时间显示</li><li>物流信息，会以origin时间显示，一般不做转换</li><li>统计类信息，一般也会以origin时间显示</li></ul>',12);function c(g,y){const a=n("RouteLink");return p(),l("div",null,[r,t("p",null,[i("参考"),h(a,{to:"/zh/0-wings/0i-i18n-message.html"},{default:k(()=>[i("多国语信息")]),_:1})]),o])}const B=e(d,[["render",c],["__file","3d-i18n-zone.html.vue"]]),C=JSON.parse('{"path":"/zh/3-slardar/3d-i18n-zone.html","title":"3D.多国语和多时区","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"language","category":["鱼人","时区","多国语"],"description":"3D.多国语和多时区 在Silencer配置中，所有位于wigns-i18n/的I18n的消息，都会自动加载。 3D.1.加载顺序 通过LocaleResolver，按以下优先级，获得当前locale设置。 request中被设置的WINGS.I18N_CONTEXT query string locale, zoneid http header Ac...","GIT_REPO_HEAD":"2024-07-12 b7f98fdbcca854143856b6032bf8c1819b601f15","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/3-slardar/3d-i18n-zone.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/3-slardar/3d-i18n-zone.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"3D.多国语和多时区"}],["meta",{"property":"og:description","content":"3D.多国语和多时区 在Silencer配置中，所有位于wigns-i18n/的I18n的消息，都会自动加载。 3D.1.加载顺序 通过LocaleResolver，按以下优先级，获得当前locale设置。 request中被设置的WINGS.I18N_CONTEXT query string locale, zoneid http header Ac..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-02T02:16:40.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-03-02T02:16:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3D.多国语和多时区\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-02T02:16:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3D.1.加载顺序","slug":"_3d-1-加载顺序","link":"#_3d-1-加载顺序","children":[]},{"level":2,"title":"3D.2.Locale解析","slug":"_3d-2-locale解析","link":"#_3d-2-locale解析","children":[]},{"level":2,"title":"3D.3.多国语的占位符","slug":"_3d-3-多国语的占位符","link":"#_3d-3-多国语的占位符","children":[]},{"level":2,"title":"3D.4.项目中I18n实践","slug":"_3d-4-项目中i18n实践","link":"#_3d-4-项目中i18n实践","children":[{"level":3,"title":"4a.前置条件检查","slug":"_4a-前置条件检查","link":"#_4a-前置条件检查","children":[]},{"level":3,"title":"4b.读写分组验证","slug":"_4b-读写分组验证","link":"#_4b-读写分组验证","children":[]},{"level":3,"title":"4c.运行时状态检查","slug":"_4c-运行时状态检查","link":"#_4c-运行时状态检查","children":[]},{"level":3,"title":"4d.多国语信息设置","slug":"_4d-多国语信息设置","link":"#_4d-多国语信息设置","children":[]}]},{"level":2,"title":"3D.5.三种DateTime","slug":"_3d-5-三种datetime","link":"#_3d-5-三种datetime","children":[]}],"git":{"createdTime":1655981049000,"updatedTime":1709345800000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":6}]},"readingTime":{"minutes":4.62,"words":1387},"filePathRelative":"zh/3-slardar/3d-i18n-zone.md","localizedDate":"2022年6月23日","autoDesc":true}');export{B as comp,C as data};