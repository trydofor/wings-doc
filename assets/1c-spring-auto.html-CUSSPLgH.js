import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,e as s}from"./app-CcKWV4zH.js";const a={},o=s(`<h1 id="_1c-auto-config-mechanism" tabindex="-1"><a class="header-anchor" href="#_1c-auto-config-mechanism"><span>1C.Auto Config Mechanism</span></a></h1><p>Take advantage of SpringBoot to complete the auto config.</p><h2 id="_1c-1-naming-and-rule" tabindex="-1"><a class="header-anchor" href="#_1c-1-naming-and-rule"><span>1C.1.Naming and Rule</span></a></h2><p>There are special features of Spring naming, mainly focused on the following (the directory structure will be explained in detail later)</p><ul><li><code>/wings-conf/</code> autoload, splitted config files</li><li><code>/wings-i18n/</code> autoload, splitted I18n files</li><li><code>**/spring/boot/</code> manual load, Boot-related config, like <code>spring.facts</code></li><li><code>**/spring/bean/</code> produce bean, as specified by @ComponentScan</li><li><code>**/spring/conf/</code> Configurer or AutoConfiguration</li><li><code>**/spring/prop/</code> Property mapping</li><li><code>**/spring/help/</code> Configuration helper</li><li><code>*Configuration.java</code> conditional load, with config items prefixed by <code>wings.enabled.</code></li></ul><p>When developing with <code>idea</code>, there will be yellow warnings or prompts, that do not affect the operation, but look like an eyesore.</p><ul><li>Prompting &quot;Application context not configured for this file&quot; Just add <code>boot/WingsAutoConfiguration</code> manually in <code>Project Structure</code>/<code>Facets</code>/<code>Spring</code>.</li><li>Prompting &quot;annotation processing&quot;, check in <code>Settings</code>/<code>Annotation Processors</code>/<code>Enable annotation processing</code></li><li>Note: The inner classes in <code>@Configuration</code>, <code>static class</code> are treated as independent and not bound by the outer.</li></ul><p>In Wings project, there will be a <code>wings-enabled.properties</code> to toggle the feature. Set <code>wings.enabled.silencer.verbose=true</code> to view the INFO of the log message.</p><h2 id="_1c-2-property-bind-and-prompt" tabindex="-1"><a class="header-anchor" href="#_1c-2-property-bind-and-prompt"><span>1C.2.Property Bind and Prompt</span></a></h2><p>Properties classes are unified with <code>*Prop.java</code> and <code>@Data</code>, which can be auto prompted after configuration.</p><ul><li>manually add additional-spring-configuration-metadata.json</li><li>auto-generated spring-configuration-metadata.json</li></ul><p>References,</p><ul><li><a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.configuration-metadata" target="_blank" rel="noopener noreferrer">https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#appendix.configuration-metadata</a></li><li><a href="https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding" target="_blank" rel="noopener noreferrer">https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-Configuration-Binding</a></li><li><a href="https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo" target="_blank" rel="noopener noreferrer">https://github.com/spring-projects/spring-boot/wiki/IDE-binding-features#simple-pojo</a></li></ul><h2 id="_1c-3-configuring-by-condition" tabindex="-1"><a class="header-anchor" href="#_1c-3-configuring-by-condition"><span>1C.3.Configuring by Condition</span></a></h2><ul><li>Configuration is <code>*Configuration.java</code> in <code>/spring/bean/</code></li><li>Property is <code>*Prop.java</code> in <code>/spring/prop/</code></li><li>Nested configurations do not inherit from <code>@Conditional</code><ul><li>merged into <code>@ConditionalOnExpression</code></li><li>or customize a <code>@Conditional</code></li></ul></li><li>multiple <code>@Conditional</code> are <code>and</code> logic</li><li>multiple <code>Condition</code> are <code>and</code> logic</li></ul><p>Javadoc of <code>Conditional</code></p><blockquote><p>The <code>@Conditional</code> annotation may be used in any of the following ways:</p><ul><li>as a type-level annotation on any class directly or indirectly annotated with <code>@Component</code>, including <code>@Configuration</code> classes</li><li>as a meta-annotation, for the purpose of composing custom stereotype annotations</li><li>as a method-level annotation on any <code>@Bean</code> method</li></ul><p>If a <code>@Configuration</code> class is marked with <code>@Conditional</code>,all of the <code>@Bean</code> methods, <code>@Import</code> annotations, and <code>@ComponentScan</code> annotations associated with that class will be subject to the conditions.</p><p>NOTE: Inheritance of <code>@Conditional</code> annotations is not supported; any conditions from superclasses or from overridden methods will not be considered.</p></blockquote><h2 id="_1c-4-conditionalonclass-no-effect" tabindex="-1"><a class="header-anchor" href="#_1c-4-conditionalonclass-no-effect"><span>1C.4.ConditionalOnClass No Effect</span></a></h2><p>The following code, ConditionalOnClass placed on the same type of bean declaration, will report a NoClassDefFoundError</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">ConditionalOnClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">SomeService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> SomeService</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> someService</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> SomeService</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Need to change to something like the following, inner class-driven configuration,</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">proxyBeanMethods</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">ConditionalOnClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">SomeService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> SomeServiceConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> SomeService</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> someService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> SomeService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>See <a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.developing-auto-configuration" target="_blank" rel="noopener noreferrer">Creating Your Own Auto-configuration</a></p><h2 id="_1c-5-disable-any-component" tabindex="-1"><a class="header-anchor" href="#_1c-5-disable-any-component"><span>1C.5.Disable any <code>@Component</code></span></a></h2><p>In the Spring <code>@Conditional</code> auto configuration, the <code>On*Bean</code> depends on the registration order of the beans, which makes it difficult to detect problems. Therefore, in Wings, we move the problem to the early startup phase to detect bean conflicts as early as possible. By setting property files, we can disable unnecessary features.</p><p>On <code>@Configuration</code>, <code>@Bean</code> and any <code>@Component</code>, using <code>@ConditionalWingsEnabled</code> and the <code>qualified-key</code> can disable any Component and Bean,</p><p><code>qualified-key</code> = <code>Prefix.</code> + <code>ClassName</code> + <code>.beanMethod</code>? = <code>true|false</code></p><ul><li>Prefix - default wings.enabled</li><li>ClassName - e.g. pro.fessional.wings.silencer.spring.boot.WingsEnabledCondition</li><li>beanMethod - e.g. crc8Long</li></ul><p><code>@*Configuration</code> naming rules are as follows,</p><ul><li><code>*AutoConfiguration</code> - <code>@AutoConfiguration</code> <code>@Import</code> <code>@Configuration</code></li><li><code>*Configuration</code> - top <code>@Configuration</code> and its <code>@Bean</code></li><li><code>*Event</code> - inner <code>@Configuration</code> and its <code>@EventListener</code></li><li><code>*Wired</code> - inner <code>@Configuration</code> and its <code>@Autowired</code></li><li><code>*Bean</code> - inner <code>@Configuration</code> and wrap its single <code>@Bean *</code></li><li><code>*Scan</code> - inner <code>@Configuration</code> for <code>@ComponentScan</code></li></ul><p><code>@ConditionalWingsEnabled</code> has the following enhancements</p><ul><li>abs - <code>absolute-key</code>, without prefix, priority lower then <code>qualified-key</code></li><li>key - <code>relative-key</code>, with prefix, priority lower then <code>absolute-key</code></li><li>value - default value, the lowest priority, if no key found</li><li>and, not - <code>this &amp;&amp; and1 &amp;&amp; and2 &amp;&amp; !not1 &amp;&amp; !not2</code></li></ul><p>where <code>qualified-key</code> is equivalent to <code>id</code>, globally unique and the highest priority, <code>absolute-key</code> and <code>relative-key</code> are equivalent to <code>alias</code>, can be shared without uniqueness. and the priority of these 3 keys is from highest to lowest.</p><ul><li>qualified-key = <code>prefix</code> + <code>ClassName</code> + <code>methodName</code>?</li><li>absolute-key = <code>abs()</code></li><li>relative-key = <code>prefix</code> + <code>key()</code></li><li>default = <code>value()</code></li></ul><p>In addition to the precise control of annotations, the following props can impl the <code>ant-matcher</code> control of <code>qualified-key</code>.</p><ul><li>wings.feature.error</li><li>wings.feature.prefix</li><li>wings.feature.enable</li></ul><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## ... is short for the package</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## @ConditionalWingsEnabled(prefix = &quot;catty.enabled&quot;)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## disable @Bean catBean in WingsEnabledCatConfiguration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">catty.enabled.pro...WingsEnabledCatConfiguration.catBean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## disable InnerCatConfiguration and its Bean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">catty.enabled.pro...WingsEnabledCatConfiguration$</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">InnerCatConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## @Conditional(WingsEnabledCondition.class) or @ConditionalWingsEnabled</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## disable @Bean dogBean in WingsEnabledDogConfiguration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.enabled.pro...WingsEnabledDogConfiguration.dogBean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## disable InnerDogConfiguration and its Bean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">wings.enabled.pro...WingsEnabledDogConfiguration$</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">InnerDogConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1c-6-feature-flags" tabindex="-1"><a class="header-anchor" href="#_1c-6-feature-flags"><span>1C.6. Feature Flags</span></a></h2><p>The Wings FeatureFlags implementation has two levels, as follows.</p><ul><li>Config level - <code>@ConditionalWingsEnabled</code> acts on the <code>@Component</code> and <code>@Bean</code>.</li><li>Thread level - <code>FeatureFlag</code> acts on the logical</li></ul><p>The principle of both is the same, based on <code>wings.feature</code> and <code>wings.enabled</code> properties.</p><p>In business coding, toggling business logic can be achieved by using the following utility classes.</p><ul><li><code>FeatureFlag</code> - get the feature state using Class as key</li><li><code>TweakFeature</code> - dynamically toggle feature at global or thread level</li></ul><p>the prioriy of flag is as the following,</p><ul><li><code>@ConditionalWingsEnabled</code> - confClass or beanMethod <ul><li>qualified-key = <code>prefix.</code> + <code>ClassName</code> + <code>.methodName</code>?</li><li>absolute-key = <code>abs()</code></li><li>relative-key = <code>prefix.</code> + <code>key()</code></li><li>default = <code>value()</code>, only if no prop</li><li><code>and()</code>, then <code>not()</code> - only if this enabled</li></ul></li><li><code>wings.enabled.*</code> - string prop, <code>one-one</code></li><li><code>wings.feature.*</code> - ant style prop, <code>one-many</code>, only if no <code>one-one</code></li><li><code>FeatureFlag</code> - <code>TweakFeature</code>, then <code>WingsEnabledContext</code></li></ul><h2 id="_1c-7-config-bean-order" tabindex="-1"><a class="header-anchor" href="#_1c-7-config-bean-order"><span>1C.7.Config Bean Order</span></a></h2><p>Use the <code>wings.reorder.*</code> attribute, where <code>*</code> is.</p><ul><li><code>beanName</code> - one-to-one by name, high priority</li><li><code>beanClass</code> - one-to-many by type</li></ul><p>The scope of its impact includes.</p><ul><li><code>List&lt;Bean&gt;</code> - injected ordered collection class</li><li><code>.orderedStream()</code> -ObjectProvider ordered stream</li></ul><p>The ordering priority is as follows, NOTE, beans are declared or scanned in different mechanisms that affect priority.</p><ul><li><code>wings.reorder.*</code> configuration, highest priority</li><li>if <code>@Bean</code>, <code>@Order</code> over <code>Ordered</code></li><li>if <code>@Component</code>, <code>Ordered</code> over <code>@Order</code></li></ul><p>this disabled if any of the followings,</p><ul><li>no property or no defined bean found</li><li>wings.enabled.silencer.bean-reorder=false</li></ul><p>also can set Primary by <code>wings.primary.*</code>, but only beanName is supported.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// wings.reorder.getterClass2 = 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> GetterClass</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getterClass2</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// wings.primary.testReorderServiceImpl2=true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// wings.reorder.testReorderServiceImpl2 = 3 # or</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// wings.reorder.pro.fessional.wings.silencer.app.service.impl.TestReorderServiceImpl2=3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Service</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> TestReorderServiceImpl2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56),t=[o];function l(d,r){return n(),e("div",null,t)}const h=i(a,[["render",l],["__file","1c-spring-auto.html.vue"]]),g=JSON.parse('{"path":"/1-silencer/1c-spring-auto.html","title":"1C.Auto Config Mechanism","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"leaf","category":["Silencer","Config"],"description":"1C.Auto Config Mechanism Take advantage of SpringBoot to complete the auto config. 1C.1.Naming and Rule There are special features of Spring naming, mainly focused on the follow...","GIT_REPO_HEAD":"2024-07-12 b7f98fdbcca854143856b6032bf8c1819b601f15","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/1-silencer/1c-spring-auto.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/1-silencer/1c-spring-auto.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"1C.Auto Config Mechanism"}],["meta",{"property":"og:description","content":"1C.Auto Config Mechanism Take advantage of SpringBoot to complete the auto config. 1C.1.Naming and Rule There are special features of Spring naming, mainly focused on the follow..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-04T09:24:48.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-04T09:24:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1C.Auto Config Mechanism\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-04T09:24:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"1C.1.Naming and Rule","slug":"_1c-1-naming-and-rule","link":"#_1c-1-naming-and-rule","children":[]},{"level":2,"title":"1C.2.Property Bind and Prompt","slug":"_1c-2-property-bind-and-prompt","link":"#_1c-2-property-bind-and-prompt","children":[]},{"level":2,"title":"1C.3.Configuring by Condition","slug":"_1c-3-configuring-by-condition","link":"#_1c-3-configuring-by-condition","children":[]},{"level":2,"title":"1C.4.ConditionalOnClass No Effect","slug":"_1c-4-conditionalonclass-no-effect","link":"#_1c-4-conditionalonclass-no-effect","children":[]},{"level":2,"title":"1C.5.Disable any @Component","slug":"_1c-5-disable-any-component","link":"#_1c-5-disable-any-component","children":[]},{"level":2,"title":"1C.6. Feature Flags","slug":"_1c-6-feature-flags","link":"#_1c-6-feature-flags","children":[]},{"level":2,"title":"1C.7.Config Bean Order","slug":"_1c-7-config-bean-order","link":"#_1c-7-config-bean-order","children":[]}],"git":{"createdTime":1655689944000,"updatedTime":1717493088000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":11}]},"readingTime":{"minutes":3.31,"words":993},"filePathRelative":"1-silencer/1c-spring-auto.md","localizedDate":"June 20, 2022","autoDesc":true}');export{h as comp,g as data};