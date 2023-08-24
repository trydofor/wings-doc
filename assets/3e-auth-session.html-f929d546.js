import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as l,b as e,e as t,d as i,f as s}from"./app-7d38ae22.js";const c={},u=s('<h1 id="_3e-session-and-authn" tabindex="-1"><a class="header-anchor" href="#_3e-session-and-authn" aria-hidden="true">#</a> 3E.Session and Authn</h1><ul><li>Supports header-token, cookie-session</li><li>Low security url-string credential ticket</li><li>User manageable session, control login, kick out</li><li>Configurable cookie-name, token-name</li><li>Fine control of concurrent logins, eg., single login for finance only</li><li>Integrated 3rd login, captcha login, credential login</li><li>Admin sudo, super user identity switching</li><li>Session aliases, additional tokens</li></ul><h2 id="_3e-1-header-and-cookie" tabindex="-1"><a class="header-anchor" href="#_3e-1-header-and-cookie" aria-hidden="true">#</a> 3E.1.Header and Cookie</h2><p>The token name is set via server.servlet.session.cookie.name by default. WingsSessionIdResolver supports both header and cookie resolver. The header and cookie have the same name and both are <code>session</code> by default.</p><p>Implementation suggestions.</p><ul><li>It is not recommended to use rememberMe, you can set the timeout of session and maxAge of cookie for a longer time</li><li>If there are no special requirements, it is recommended to use the cookie system, because of its ecological maturity</li></ul><h2 id="_3e-2-customize-cookie" tabindex="-1"><a class="header-anchor" href="#_3e-2-customize-cookie" aria-hidden="true">#</a> 3E.2.Customize Cookie</h2><p>Under the cookie system, the following features can be customized by Filter and Wrapper.</p><ul><li>cookie prefix for multiple apps to share session-cookie under the same domain and path.</li><li>cookie alias to obfuscate the cookie name, affected by prefix</li><li>cookie encoding to control readability and security <ul><li>noop - no encryption, plaintext, e.g. random token, no need to cost CPU</li><li>b64 - base64, spring&#39;s default encryption, only to prevent special chars</li><li>aes - aes256, primary encryption for non-sensitive data, basic encryption</li></ul></li><li>customize http-only, secure, domain, path</li></ul><p>One thing to note is that</p><ul><li>http-only will make js unreadable, sometimes you need to let it go (watch out for CSRF attacks)</li><li>session settings, should be set in spring-session-79.properties</li></ul><h2 id="_3e-3-multi-auth-and-login" tabindex="-1"><a class="header-anchor" href="#_3e-3-multi-auth-and-login" aria-hidden="true">#</a> 3E.3.Multi-Auth and Login</h2><p>To seamlessly enhance userPassword login of SpringSecurity, inherit or replace the following classes,</p><ul><li>WingsBindLoginConfigurer : FormLoginConfigurer</li><li>WingsBindAuthenticationToken : UsernamePasswordAuthenticationToken</li><li>WingsBindAuthenticationFilter : UsernamePasswordAuthenticationFilter</li><li>WingsBindAuthenticationProvider : DaoAuthenticationProvider</li><li>WingsUserDetail : UserDetails</li><li>WingsUserDetailService : UserDetailsService</li></ul><p>When using, directly replace the formLogin with bindLogin, and when coexisting, the bind must be in front. Sine Token is an extension to ensure that WingsProvider is processed before DaoAuthenticationProvider.</p><p>For example, when implementing SMS authentication or 3rd binding, only WingsUserDetailService needs to be implemented to handle the authentication type.</p><ul><li>SMS auth, UserDetailsService get the cached and passwordEncoder encrypted SMS</li><li>3rd binding, recommended justAuth, set loginProcessingUrl to callback address, <ul><li>Authentication.details in the request constructed by AuthnDetailsSource</li><li>In AuthnProvider first UserDetailsService.load, if NotFound, then try to create users</li><li>Oauth in particular, , relies heavily on AuthnDetailsSource to get details.</li></ul></li></ul><p>When using WingsBindAuthnProvider instead of the default DaoAuthenticationProvider, there are the following options</p><ul><li>Inherit configure(AuthenticationManagerBuilder) and build it manually via wingsHelper</li><li>Without inheritance, declare the WingsBindAuthnProvider bean and auto-config globally (recommended)</li><li>Without AuthenticationProvider, with WingsUserDetailsService, auto-config using Wings way (default)</li></ul><p>If you manually configure userDetailsService and the default configuration, a new provider will be added automatically. If you do not need to add a provider, you can set wingsBindAuthnProvider(false), different from the Spring default.</p><h2 id="_3e-4-underlying-principle" tabindex="-1"><a class="header-anchor" href="#_3e-4-underlying-principle" aria-hidden="true">#</a> 3E.4.Underlying Principle</h2><p>With the support of Spring Session, Spring Security can perform the Api pre-auth and token login.</p>',22),d={href:"https://docs.spring.io/spring-security/site/docs/current/reference/html5/#servlet-preauth",target:"_blank",rel:"noopener noreferrer"},p={href:"https://docs.spring.io/spring-security/site/docs/current/reference/html5/#servlet-preauth",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"SwitchUserFilter - linux su like, global sudo",-1),g=e("li",null,"RunAsManager - Single method temporary sudo",-1),m=s(`<p>As a skill enhancement, the following technical points need source code reading or customization.</p><ul><li>SessionRepositoryFilter</li><li>UsernamePasswordAuthenticationFilter</li><li>RememberMeAuthenticationFilter</li><li>SwitchUserFilter</li><li>FilterComparator</li></ul><p>The relationship between Session and SecurityContext calls is as follows,</p><div class="language-plantuml line-numbers-mode" data-ext="plantuml"><pre class="language-plantuml"><code><span class="token delimiter punctuation">@startuml</span>
SessionRepositoryFilter <span class="token arrow operator">-&gt;</span> SessionRepositoryRequestWrapper
SecurityContextPersistenceFilter <span class="token arrow operator">-&gt;</span> SecurityContextRepository<span class="token punctuation">:</span> loadContext<span class="token punctuation">(</span><span class="token punctuation">)</span>
SecurityContextRepository <span class="token arrow operator">-&gt;</span> SessionRepositoryRequestWrapper<span class="token punctuation">:</span> getSession<span class="token punctuation">(</span><span class="token punctuation">)</span>
SecurityContextPersistenceFilter <span class="token arrow operator">-&gt;</span> SecurityContextHolder<span class="token punctuation">:</span> setContext<span class="token punctuation">(</span><span class="token punctuation">)</span>
SecurityContextPersistenceFilter <span class="token arrow operator">-&gt;</span> FilterChain<span class="token punctuation">:</span> doFilter<span class="token punctuation">(</span><span class="token punctuation">)</span>
SecurityContextPersistenceFilter <span class="token arrow operator">-&gt;</span> SecurityContextHolder<span class="token punctuation">:</span> clearContext<span class="token punctuation">(</span><span class="token punctuation">)</span>
SecurityContextPersistenceFilter <span class="token arrow operator">-&gt;</span> SecurityContextRepository<span class="token punctuation">:</span> saveContext<span class="token punctuation">(</span><span class="token punctuation">)</span>
SessionManagementFilter <span class="token arrow operator">-&gt;</span> SecurityContextRepository<span class="token punctuation">:</span> containsContext<span class="token punctuation">(</span><span class="token punctuation">)</span>
SessionManagementFilter <span class="token arrow operator">-&gt;</span> SecurityContextRepository<span class="token punctuation">:</span> saveContext<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token delimiter punctuation">@enduml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3e-5-related-knowledge" tabindex="-1"><a class="header-anchor" href="#_3e-5-related-knowledge" aria-hidden="true">#</a> 3E.5.Related Knowledge</h2><ul><li>RequestContextHolder - SecurityContextHolder</li><li>CookieSerializer HttpSessionIdResolver</li><li>SessionEventHttpSessionListenerAdapter - HttpSessionEventPublisher</li><li>rememberMe - SpringSessionRememberMeServices</li></ul><p>Wings uses the Hazelcast implementation with its default configuration, the product environment needs to be configured.</p><p>If you use <code>@Enable*HttpSession</code> to indicate manual configuration, then <code>spring.session.*</code> will not be auto configured. <code>springSessionRepositoryFilter</code> will be on top in order to wrap off the original HttpRequest and HttpSession.</p>`,8);function f(k,y){const n=a("ExternalLinkIcon");return r(),l("div",null,[u,e("ul",null,[e("li",null,[e("a",d,[t("PreAuthenticatedProcessingFilter"),i(n)])]),e("li",null,[e("a",p,[t("UsernamePasswordAuthenticationFilter"),i(n)])]),h,g]),m])}const b=o(c,[["render",f],["__file","3e-auth-session.html.vue"]]);export{b as default};
