import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as i,c as l,b as e,e as s,d as a,f as r}from"./app-OXbFzGQa.js";const c={},p=r(`<h1 id="_3h-后端常见话题" tabindex="-1"><a class="header-anchor" href="#_3h-后端常见话题"><span>3H.后端常见话题</span></a></h1><h2 id="_3h-01-error-creating-hazelcastinstance" tabindex="-1"><a class="header-anchor" href="#_3h-01-error-creating-hazelcastinstance"><span>3H.01.Error creating &#39;hazelcastInstance&#39;</span></a></h2><blockquote><p>Error creating bean with name &#39;hazelcastInstance&#39; Invalid content was found starting with element &#39;cluster-name&#39;，</p></blockquote><p>若是有以上信息，是hazelcast 3和4配置的兼容问题，boot-2.2.x为hazelcast 3.12.x</p><h2 id="_3h-02-修改servlet容器" tabindex="-1"><a class="header-anchor" href="#_3h-02-修改servlet容器"><span>3H.02.修改Servlet容器</span></a></h2><p>slardar 默认使用undertow，并提供 spring-servlet-server-79.properties 配置</p><h2 id="_3h-03-session方案的选择" tabindex="-1"><a class="header-anchor" href="#_3h-03-session方案的选择"><span>3H.03.Session方案的选择</span></a></h2><p>其实 hazelcast 是个不错的选择，若选用redis，切记redis必须<code>requirepass</code>。 最后，从redis+redisson的方案，切换成了hazelcast的方案。其理由如下。</p><ul><li>单应用进化的简单性，hazelcast是零依赖</li><li>性能，可用性，运维角度，两者五五开</li></ul><p>关于hazelcast和spring，主要的管理场景是cache,session,security</p><ul><li>spring-boot优先尝试创建client，不成则创建embedded server</li><li>spring session 使用@Enable*HttpSession手动配置</li></ul><p>文档中是hazelcast3的配置，实际支持4。 文档中的例子都是通过编码方式配置的，实际可以通过xml配置，交由boot处理。 系统默认提供了server和client的组播配置。</p><h2 id="_3h-04-异常处理或handler" tabindex="-1"><a class="header-anchor" href="#_3h-04-异常处理或handler"><span>3H.04.异常处理或handler</span></a></h2><p>需要根据spring约定和实际需要，自定义一套机制。 但是不要使用<code>spring.mvc.throw-exception-if-no-handler-found=true</code>， 因为，异常之所以叫异常，就不能当做正常，避免用来处理正常事情。</p><ul><li>controller层异常用<code>@ControllerAdvice</code>或<code>@ExceptionHandler</code></li><li>service层异常，自行做业务处理，或AOP日志</li><li>静态，src/main/resources/public/error/404.html</li><li>模板，src/main/resources/templates/error/5xx.ftl</li><li><code>class MyErrorPageRegistrar implements ErrorPageRegistrar</code></li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@ControllerAdvice</span><span class="token punctuation">(</span>basePackageClasses <span class="token operator">=</span> <span class="token class-name">AcmeController</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AcmeControllerAdvice</span> <span class="token keyword">extends</span> <span class="token class-name">ResponseEntityExceptionHandler</span>
<span class="token comment">// ///////</span>
<span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">resolveErrorView</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),d={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#web.servlet.spring-mvc.error-handling",target:"_blank",rel:"noopener noreferrer"},h=r('<h2 id="_3h-05-启动时warn-ut026010" tabindex="-1"><a class="header-anchor" href="#_3h-05-启动时warn-ut026010"><span>3H.05.启动时Warn UT026010</span></a></h2><p>在未配置websocket时，undertow使用默认buffer，出现以下警告。 需要定制<code>websocketServletWebServerCustomizer</code></p><p>在<code>io.undertow.websockets.jsr.Bootstrap</code> 68行，<code>buffers == null</code> 时 <code>UT026010: Buffer pool was not set on WebSocketDeploymentInfo, the default pool will be used</code> 默认 DefaultByteBufferPool(directBuffers, 1024, 100, 12);</p><h2 id="_3h-06-oauth2的参考资料" tabindex="-1"><a class="header-anchor" href="#_3h-06-oauth2的参考资料"><span>3H.06.OAuth2的参考资料</span></a></h2>',4),u={href:"https://projects.spring.io/spring-security-oauth/docs/oauth2.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://docs.spring.io/spring-security-oauth2-boot/docs/current/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/",target:"_blank",rel:"noopener noreferrer"},f=r('<h2 id="_3h-07-如何配置security" tabindex="-1"><a class="header-anchor" href="#_3h-07-如何配置security"><span>3H.07.如何配置security</span></a></h2><p>security一定是系统中最为重要的部分，也是所有渗透入侵的重点，所以slardar无默认配置。</p><p>配置中可以使用Order，提供多个HttpSecurity。</p><h2 id="_3h-08-多线程下的securitycontext" tabindex="-1"><a class="header-anchor" href="#_3h-08-多线程下的securitycontext"><span>3H.08.多线程下的SecurityContext</span></a></h2><ul><li>DelegatingSecurityContext</li><li>transmittable-thread-local</li></ul><h2 id="_3h-09-成功登陆后跳转" tabindex="-1"><a class="header-anchor" href="#_3h-09-成功登陆后跳转"><span>3H.09.成功登陆后跳转</span></a></h2><p>SavedRequestAwareAuthenticationSuccessHandler和RequestCache 进行搭配即可。 在前后端分离的情况下，不需要后端控制，所以应该关闭RequestCache。</p><ul><li>HTTP Referer header - 有些浏览器不给refer</li><li>saving the original request in the session - 要session支持</li><li>base64 original URL to the redirected login URL - 通常的SSO实现</li></ul><p>不过，spring security默认不支持第三种。如果要定制的话，需要看ExceptionTranslationFilter， 在sendStartAuthentication方法中，对requestCache或authenticationEntryPoint上进行定制。 也可以通过interceptor对loginPage进行定制。</p>',9),m={href:"https://www.baeldung.com/spring-security-redirect-login",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.baeldung.com/spring-security-redirect-logged-in",target:"_blank",rel:"noopener noreferrer"},k=r('<h2 id="_3h-10-以kv传递数组及对象" tabindex="-1"><a class="header-anchor" href="#_3h-10-以kv传递数组及对象"><span>3H.10.以KV传递数组及对象</span></a></h2><p>在http协议中，没有明确的规定数组及对象的传递方法，因此实践中，spring及js体系下有不同的默认规则。</p><ul><li><code>a=1&amp;a=2&amp;a=3</code>，servlet支持，spring支持，js的qs需要<code>{ indices: false }</code> (推荐)</li><li><code>a[]=1&amp;a[]=2&amp;a[]=3</code>，spring支持，js的qs需要<code>{ arrayFormat: &#39;brackets&#39; }</code></li><li><code>a[0]=1&amp;a[1]=2&amp;a[2]=3</code>，spring支持，js的qs默认格式</li></ul><p>其中，servlet支持时，@RequestParam也生效；spring支持，指默认的DataBinding</p><p>参考资料</p>',5),v={href:"https://github.com/ljharb/qs#stringifying",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-beans-conventions",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-ann-matrix-variables",target:"_blank",rel:"noopener noreferrer"};function y(H,S){const n=o("ExternalLinkIcon");return i(),l("div",null,[p,e("p",null,[s("文档位于"),e("a",d,[s("Error Handling"),a(n)])]),h,e("ul",null,[e("li",null,[e("a",u,[s("OAuth 2 Developers Guide"),a(n)])]),e("li",null,[e("a",g,[s("OAuth2 boot"),a(n)])]),e("li",null,[e("a",_,[s("Spring Security"),a(n)])])]),f,e("ul",null,[e("li",null,[e("a",m,[s("https://www.baeldung.com/spring-security-redirect-login"),a(n)])]),e("li",null,[e("a",b,[s("https://www.baeldung.com/spring-security-redirect-logged-in"),a(n)])])]),k,e("ul",null,[e("li",null,[e("a",v,[s("qs#stringifying"),a(n)])]),e("li",null,[e("a",w,[s("Basic and Nested Properties"),a(n)])]),e("li",null,[e("a",x,[s("Matrix Variables"),a(n)])])])])}const A=t(c,[["render",y],["__file","3h-qa-slardar.html.vue"]]);export{A as default};
