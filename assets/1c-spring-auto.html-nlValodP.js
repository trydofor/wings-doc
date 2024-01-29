import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as l,b as n,e,d as a,f as i}from"./app-OXbFzGQa.js";const d={},r=i('<h1 id="_1c-auto-config-mechanism" tabindex="-1"><a class="header-anchor" href="#_1c-auto-config-mechanism"><span>1C.Auto Config Mechanism</span></a></h1><p>Take advantage of SpringBoot to complete the auto config.</p><h2 id="_1c-1-naming-and-rule" tabindex="-1"><a class="header-anchor" href="#_1c-1-naming-and-rule"><span>1C.1.Naming and Rule</span></a></h2><p>There are special features of Spring naming, mainly focused on the following (the directory structure will be explained in detail later)</p><ul><li><code>/wings-conf/</code> autoload, splitted config files</li><li><code>/wings-i18n/</code> autoload, splitted I18n files</li><li><code>**/spring/boot/</code> manual load, Boot-related config, like <code>spring.facts</code></li><li><code>**/spring/bean/</code> produce bean, as specified by @ComponentScan</li><li><code>**/spring/conf/</code> Configurer or AutoConfiguration</li><li><code>**/spring/prop/</code> Property mapping</li><li><code>**/spring/help/</code> Configuration helper</li><li><code>*Configuration.java</code> conditional load, with config items prefixed by <code>wings.enabled.</code></li></ul><p>When developing with <code>idea</code>, there will be yellow warnings or prompts, that do not affect the operation, but look like an eyesore.</p><ul><li>Prompting &quot;Application context not configured for this file&quot; Just add <code>boot/WingsAutoConfiguration</code> manually in <code>Project Structure</code>/<code>Facets</code>/<code>Spring</code>.</li><li>Prompting &quot;annotation processing&quot;, check in <code>Settings</code>/<code>Annotation Processors</code>/<code>Enable annotation processing</code></li><li>Note: The inner classes in <code>@Configuration</code>, <code>static class</code> are treated as independent and not bound by the outer.</li></ul><p>In Wings project, there will be a <code>wings-enabled.properties</code> to toggle the feature. Set <code>wings.enabled.silencer.verbose=true</code> to view the INFO of the log message.</p><h2 id="_1c-2-property-bind-and-prompt" tabindex="-1"><a class="header-anchor" href="#_1c-2-property-bind-and-prompt"><span>1C.2.Property Bind and Prompt</span></a></h2><p>Properties classes are unified with <code>*Prop.java</code> and <code>@Data</code>, which can be auto prompted after configuration.</p><ul><li>manually add additional-spring-configuration-metadata.json</li><li>auto-generated spring-configuration-metadata.json</li></ul><p>References,</p>',12),p={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.configuration-metadata",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo",target:"_blank",rel:"noopener noreferrer"},f=i(`<h2 id="_1c-3-configuring-by-condition" tabindex="-1"><a class="header-anchor" href="#_1c-3-configuring-by-condition"><span>1C.3.Configuring by Condition</span></a></h2><ul><li>Configuration is <code>*Configuration.java</code> in <code>/spring/bean/</code></li><li>Property is <code>*Prop.java</code> in <code>/spring/prop/</code></li><li>Nested configurations do not inherit from <code>@Conditional</code><ul><li>merged into <code>@ConditionalOnExpression</code></li><li>or customize a <code>@Conditional</code></li></ul></li><li>multiple <code>@Conditional</code> are <code>and</code> logic</li><li>multiple <code>Condition</code> are <code>and</code> logic</li></ul><p>Javadoc of <code>Conditional</code></p><blockquote><p>The <code>@Conditional</code> annotation may be used in any of the following ways:</p><ul><li>as a type-level annotation on any class directly or indirectly annotated with <code>@Component</code>, including <code>@Configuration</code> classes</li><li>as a meta-annotation, for the purpose of composing custom stereotype annotations</li><li>as a method-level annotation on any <code>@Bean</code> method</li></ul><p>If a <code>@Configuration</code> class is marked with <code>@Conditional</code>,all of the <code>@Bean</code> methods, <code>@Import</code> annotations, and <code>@ComponentScan</code> annotations associated with that class will be subject to the conditions.</p><p>NOTE: Inheritance of <code>@Conditional</code> annotations is not supported; any conditions from superclasses or from overridden methods will not be considered.</p></blockquote><h2 id="_1c-4-conditionalonclass-no-effect" tabindex="-1"><a class="header-anchor" href="#_1c-4-conditionalonclass-no-effect"><span>1C.4.ConditionalOnClass No Effect</span></a></h2><p>The following code, ConditionalOnClass placed on the same type of bean declaration, will report a NoClassDefFoundError</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token class-name">SomeService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">SomeService</span> <span class="token function">someService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SomeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Need to change to something like the following, inner class-driven configuration,</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span><span class="token punctuation">(</span>proxyBeanMethods <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token class-name">SomeService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SomeServiceConfiguration</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SomeService</span> <span class="token function">someService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SomeService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),m={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.developing-auto-configuration",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="_1c-5-disable-any-component" tabindex="-1"><a class="header-anchor" href="#_1c-5-disable-any-component"><span>1C.5.Disable any <code>@Component</code></span></a></h2><p>In the Spring <code>@Conditional</code> auto configuration, the <code>On*Bean</code> depends on the registration order of the beans, which makes it difficult to detect problems. Therefore, in Wings, we move the problem to the early startup phase to detect bean conflicts as early as possible. By setting property files, we can disable unnecessary features.</p><p>On <code>@Configuration</code>, <code>@Bean</code> and any <code>@Component</code>, using <code>@ConditionalWingsEnabled</code> and the <code>qualified-key</code> can disable any Component and Bean,</p><p><code>qualified-key</code> = <code>Prefix.</code> + <code>ClassName</code> + <code>.beanMethod</code>? = <code>true|false</code></p><ul><li>Prefix - default wings.enabled</li><li>ClassName - e.g. pro.fessional.wings.silencer.spring.boot.WingsEnabledCondition</li><li>beanMethod - e.g. crc8Long</li></ul><p><code>@*Configuration</code> naming rules are as follows,</p><ul><li><code>*AutoConfiguration</code> - <code>@AutoConfiguration</code> <code>@Import</code> <code>@Configuration</code></li><li><code>*Configuration</code> - top <code>@Configuration</code> and its <code>@Bean</code></li><li><code>*Event</code> - inner <code>@Configuration</code> and its <code>@EventListener</code></li><li><code>*Wired</code> - inner <code>@Configuration</code> and its <code>@Autowired</code></li><li><code>*Bean</code> - inner <code>@Configuration</code> and wrap its single <code>@Bean *</code></li><li><code>*Scan</code> - inner <code>@Configuration</code> for <code>@ComponentScan</code></li></ul><p><code>@ConditionalWingsEnabled</code> has the following enhancements</p><ul><li>abs - <code>absolute-key</code>, without prefix, priority lower then <code>qualified-key</code></li><li>key - <code>relative-key</code>, with prefix, priority lower then <code>absolute-key</code></li><li>value - default value, the lowest priority, if no key found</li><li>and, not - <code>this &amp;&amp; and1 &amp;&amp; and2 &amp;&amp; !not1 &amp;&amp; !not2</code></li></ul><p>where <code>qualified-key</code> is equivalent to <code>id</code>, globally unique and the highest priority, <code>absolute-key</code> and <code>relative-key</code> are equivalent to <code>alias</code>, can be shared without uniqueness. and the priority of these 3 keys is from highest to lowest.</p><ul><li>qualified-key = <code>prefix</code> + <code>ClassName</code> + <code>methodName</code>?</li><li>absolute-key = <code>abs()</code></li><li>relative-key = <code>prefix</code> + <code>key()</code></li><li>default = <code>value()</code></li></ul><p>In addition to the precise control of annotations, the following props can impl the <code>ant-matcher</code> control of <code>qualified-key</code>.</p><ul><li>wings.silencer.conditional.error</li><li>wings.silencer.conditional.prefix</li><li>wings.silencer.conditional.enable</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">## ... is short for the package</span>

<span class="token comment">## @ConditionalWingsEnabled(prefix = &quot;catty.enabled&quot;)</span>
<span class="token comment">## disable @Bean catBean in WingsEnabledCatConfiguration</span>
<span class="token key attr-name">catty.enabled.pro...WingsEnabledCatConfiguration.catBean</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment">## disable InnerCatConfiguration and its Bean</span>
<span class="token key attr-name">catty.enabled.pro...WingsEnabledCatConfiguration$InnerCatConfiguration</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token comment">## @Conditional(WingsEnabledCondition.class) or @ConditionalWingsEnabled</span>
<span class="token comment">## disable @Bean dogBean in WingsEnabledDogConfiguration</span>
<span class="token key attr-name">wings.enabled.pro...WingsEnabledDogConfiguration.dogBean</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment">## disable InnerDogConfiguration and its Bean</span>
<span class="token key attr-name">wings.enabled.pro...WingsEnabledDogConfiguration$InnerDogConfiguration</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function b(k,v){const o=t("ExternalLinkIcon");return c(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",p,[e("https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.configuration-metadata"),a(o)])]),n("li",null,[n("a",u,[e("https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding"),a(o)])]),n("li",null,[n("a",g,[e("https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo"),a(o)])])]),f,n("p",null,[e("See "),n("a",m,[e("Creating Your Own Auto-configuration"),a(o)])]),h])}const w=s(d,[["render",b],["__file","1c-spring-auto.html.vue"]]);export{w as default};
