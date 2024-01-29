import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as s,c as t,b as e,e as n,d as l,f as r}from"./app-OXbFzGQa.js";const c={},p=e("h1",{id:"_9b5-properties-binding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9b5-properties-binding"},[e("span",null,"9B5.Properties Binding")])],-1),d=e("p",null,"Lists common property binding in ConfigurationProperties.",-1),u={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.external-config.typesafe-configuration-properties",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="_9b5-1-pojo-javabean" tabindex="-1"><a class="header-anchor" href="#_9b5-1-pojo-javabean"><span>9B5.1.Pojo JavaBean</span></a></h2><ul><li>Basic type fields, or use wrapper classes if null is need</li><li>Empty constructors, and good getters/setters specification</li><li>Setters can be omitted for the following types, which are not immutable <ul><li>Map, new is recommended, emptyMap is available, null is not recommended</li><li>Collection, new is recommended, emptySet is available, null is not recommended</li><li>Array, new is recommended, null is not recommended</li><li>nested POJO, new is recommended, null is not recommended</li></ul></li><li>null is not recommended because wings advocate NotNull and the default value</li><li>@ConstructorBinding is not recommended</li></ul><h2 id="_9b5-2-config-3rd-class" tabindex="-1"><a class="header-anchor" href="#_9b5-2-config-3rd-class"><span>9B5.2.Config 3rd Class</span></a></h2><p>Classes that are not able or convenient to directly @ConfigurationProperties, with @Bean annotation.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;another&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">AnotherComponent</span> <span class="token function">anotherComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AnotherComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9b5-3-property-key-style" tabindex="-1"><a class="header-anchor" href="#_9b5-3-property-key-style"><span>9B5.3.Property Key Style</span></a></h2><p>Although Spring supports lax matching, for example,</p><ul><li>kebab - my.main-project.person.first-name</li><li>camel - my.main-project.person.firstName</li><li>underscore - my.main-project.person.first_name</li><li>UPPER - MY_MAINPROJECT_PERSON_FIRSTNAME</li></ul><p>In Wings, it is recommended to use all lowercase kebab for the config in properties. But for environment variables use all-caps UPPER.</p><p>The rules for environment variables are: ① replace <code>.</code>, ② remove <code>-</code>, ③ all-caps</p><ul><li><code>spring.main.log-startup-info</code> - <code>SPRING_MAIN_LOGSTARTUPINFO</code></li><li><code>my.service[0].other</code> - <code>MY_SERVICE_0_OTHER</code></li></ul><h2 id="_9b5-4-map-key-style" tabindex="-1"><a class="header-anchor" href="#_9b5-4-map-key-style"><span>9B5.4.Map Key Style</span></a></h2><p>Bind property <code>my.map</code> to the <code>Map&lt;String,String&gt;</code>, with the following key naming,</p><ul><li><code>key1</code> - <code>my.map.key1=value1</code></li><li><code>/key2</code> - <code>my.map.[/key2]=value2</code></li><li><code>key3</code> - <code>my.map./key3=value3</code></li><li><code>a.b</code> - <code>my.map.a.b=value4</code></li></ul><p>Spring supports <code>scalar</code> values, including <code>enum</code>, <code>java.lang.*</code> (except for Object), and You can omit <code>[]</code>, eg. in the <code>a.b</code>, and <code>spring.mail.properties.mail.debug</code>.</p><p>But Wings recommends</p><ul><li>keys that are not easily confused can be used directly, otherwise it is recommended to use <code>[]</code></li><li>within the spring system, follow the spring style, eg. spring.mail</li></ul><h2 id="_9b5-5-merge-or-overwrite-prop" tabindex="-1"><a class="header-anchor" href="#_9b5-5-merge-or-overwrite-prop"><span>9B5.5.Merge or Overwrite Prop</span></a></h2><p>If properties come from multiple config files, collections are completely overwritten and key-value pairs are merged by key</p><ul><li>Array/List/Set - do not merge, completely overwrite the contents with appearance priority</li><li>Map/Pojo - merge, overwrite value by key with appearance priority</li></ul><h2 id="_9b5-6-duration-and-period" tabindex="-1"><a class="header-anchor" href="#_9b5-6-duration-and-period"><span>9B5.6.Duration and Period</span></a></h2><p>Spring can handle java.time.Duration and Period with <code>all lowercase</code> units</p><ul><li><p><code>@DurationUnit</code> milliseconds by default</p></li><li><p><code>us</code> - microseconds</p></li><li><p><code>ms</code> - milliseconds, <code>PT0.5S</code> equals <code>500ms</code></p></li><li><p><code>s</code> - seconds</p></li><li><p><code>m</code> - minutes</p></li><li><p><code>h</code> - hours</p></li><li><p><code>d</code> - days</p></li><li><p><code>@PeriodUnit</code> days by default</p></li><li><p><code>y</code> - years</p></li><li><p><code>m</code> - months</p></li><li><p><code>w</code> - weeks</p></li><li><p><code>d</code> - days</p></li></ul><h2 id="_9b5-7-datasize" tabindex="-1"><a class="header-anchor" href="#_9b5-7-datasize"><span>9B5.7.DataSize</span></a></h2><p>Units are <code>All Caps</code></p><ul><li><code>@DataSizeUnit</code> bytes by default</li><li>&#39;B&#39; - bytes</li><li>&#39;KB&#39; - kilobytes</li><li>&#39;MB&#39; - megabytes</li><li>&#39;GB&#39; - gigabytes</li><li>&#39;TB&#39; - terabytes</li></ul><h2 id="_9b5-8-differ-from-value" tabindex="-1"><a class="header-anchor" href="#_9b5-8-differ-from-value"><span>9B5.8.Differ from @Value</span></a></h2><ul><li>@ConfigurationProperties - Relaxed binding, no SpEL support</li><li>@Value - only <code>kebab</code> format can use Relaxed binding, support SpEL</li></ul><p>Important, @Value does not support type-safe complex type injection in prefix style, only single key and simple types.</p>`,29);function h(y,b){const a=i("ExternalLinkIcon");return s(),t("div",null,[p,d,e("p",null,[n("Refer to "),e("a",u,[n("Type-safe Configuration Properties"),l(a)])]),m])}const v=o(c,[["render",h],["__file","9b5.prop-bind.html.vue"]]);export{v as default};
