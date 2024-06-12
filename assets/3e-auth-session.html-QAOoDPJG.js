import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as t,e as o}from"./app-D1G0Arv-.js";const r={},s=o('<h1 id="_3e-session和认证" tabindex="-1"><a class="header-anchor" href="#_3e-session和认证"><span>3E.Session和认证</span></a></h1><ul><li>同时支持header-token, cookie-session</li><li>安全不高的url-string的凭证类ticket</li><li>用户可管理session，控制登录，踢人</li><li>可配置的cookie-name，token-name</li><li>不同级别的控制并发登录，如财务只许单端登录</li><li>集成第三方登录，验证码登录，凭证登录</li><li>管理端马甲，超级用户身份切换</li><li>session别名，附加token</li></ul><h2 id="_3e-1-header和cookie" tabindex="-1"><a class="header-anchor" href="#_3e-1-header和cookie"><span>3E.1.header和cookie</span></a></h2><p>默认通过server.servlet.session.cookie.name设置token的名字， 在WingsSessionIdResolver中，同时支持header和cookie两种resolver。 header和cookie同名，默认都是<code>session</code>。</p><p>实施建议，</p><ul><li>不建议使用rememberMe，可设置session的timeout和cookie的maxAge较长时间</li><li>如果没有特殊要求，建议使用cookie体系，因其生态成熟</li></ul><h2 id="_3e-2-cookie的定制功能" tabindex="-1"><a class="header-anchor" href="#_3e-2-cookie的定制功能"><span>3E.2.cookie的定制功能</span></a></h2><p>cookie体系下，可通过定制Filter和Wrapper实现以下功能。</p><ul><li>cookie前缀，适用同domain同path下，多个应用共享一套Session-cookie体系的情况</li><li>cookie别名，用于混淆发布时cookie key的情况，受前缀影响</li><li>cookie编码，用于可读性粒度控制 <ul><li>noop - 不加密，明文，如随机token，没必要消耗计算资源</li><li>b64 - base64,spring默认的加密机制，只用了防止特殊字符干扰</li><li>aes - aes256,非敏感数据的初级加密，基本的防偷窥功能</li></ul></li><li>定制 http-only, secure, domain, path</li></ul><p>其中需要注意的是，</p><ul><li>http-only会使js无法读取，有时需要放开（注意CSRF攻击）</li><li>session的设置，应该在spring-session-79.properties 中设置</li></ul><h2 id="_3e-3-多验证及登录" tabindex="-1"><a class="header-anchor" href="#_3e-3-多验证及登录"><span>3E.3.多验证及登录</span></a></h2><p>加强了SpringSecurity的userPassword登录，通过继承或替换以下类，实现无缝替代。</p><ul><li>WingsBindLoginConfigurer : FormLoginConfigurer</li><li>WingsBindAuthenticationToken : UsernamePasswordAuthenticationToken</li><li>WingsBindAuthenticationFilter : UsernamePasswordAuthenticationFilter</li><li>WingsBindAuthenticationProvider : DaoAuthenticationProvider</li><li>WingsUserDetail : UserDetails</li><li>WingsUserDetailService : UserDetailsService</li></ul><p>使用时，建议直接以bindLogin替换formLogin配置，如果共存，则必须bind的order在前面， 因为Token是继承关系，要保证WingsProvider在DaoAuthenticationProvider前处理。</p><p>举例，实现短信验证或第三方绑定时，只需实现WingsUserDetailService，处理验证类型。</p><ul><li>短信验证，UserDetailsService在缓存中取得passwordEncoder加密后的短信</li><li>第三方绑定，推荐justAuth，设置loginProcessingUrl为callback地址，通过， <ul><li>在AuthnDetailsSource构造的请求中的Authentication.details</li><li>在AuthnProvider先UserDetailsService.load，NotFound时尝试创建用户</li><li>尤其Oauth这种2次获取detail的，强依赖AuthnDetailsSource获取Detail</li></ul></li></ul><p>在使用WingsBindAuthnProvider代替默认的DaoAuthenticationProvider时，有以下方法，</p><ul><li>继承configure(AuthenticationManagerBuilder)，通过wingsHelper手动构建</li><li>无上述继承，直接声明WingsBindAuthnProvider的Bean，自动全局配置（推荐）</li><li>无AuthenticationProvider，有WingsUserDetailsService，自动配置Wings全套（默认）</li></ul><p>当手动配置userDetailsService，和默认配置一样，会自动new一个Provider添加进去。 如果不需要添加Provider，可设置wingsBindAuthnProvider(false)，与原始spring不同。</p><h2 id="_3e-4-实现原理" tabindex="-1"><a class="header-anchor" href="#_3e-4-实现原理"><span>3E.4.实现原理</span></a></h2><p>在spring session加持下，spring security可以完成api预授信和token登录</p><ul><li><a href="https://docs.spring.io/spring-security/site/docs/current/reference/html5/#servlet-preauth" target="_blank" rel="noopener noreferrer">PreAuthenticatedProcessingFilter</a></li><li><a href="https://docs.spring.io/spring-security/site/docs/current/reference/html5/#servlet-preauth" target="_blank" rel="noopener noreferrer">UsernamePasswordAuthenticationFilter</a></li><li>SwitchUserFilter - linux su - 全局套马甲</li><li>RunAsManager - 单方法临时套马甲</li></ul><p>作为提高话题，以下技术点需要阅读源码和定制。</p><ul><li>SessionRepositoryFilter</li><li>UsernamePasswordAuthenticationFilter</li><li>RememberMeAuthenticationFilter</li><li>SwitchUserFilter</li><li>FilterComparator</li></ul><p>Session和SecurityContext的调用关系如下</p><img src="https://www.plantuml.com/plantuml/svg/fPAn2i8m48PtdwAZ3hv01oaKH0T1wk1y94SDf4czkufzUwCjjAKgrIuXN7u-llj9mW8aLM4N9sGstcLOUZRYgTuQAqZHUXEDdZAyLiXo9YXBf3ZIlWdlNJWSsEKgu5H5HkhKXzbTZaXiMD0fx7C7cOuVHzQ3RiTZM1USP9UZj9d_l7RUwYU7KJuglUKqj_G2ndKTpNDG5e5-i_ZICiCD-x1NIGTma6E1JYOnL1Y51NakP-YIeDFXLpu0" alt=""><h2 id="_3e-5-相关知识" tabindex="-1"><a class="header-anchor" href="#_3e-5-相关知识"><span>3E.5.相关知识</span></a></h2><ul><li>RequestContextHolder - SecurityContextHolder</li><li>CookieSerializer HttpSessionIdResolver</li><li>SessionEventHttpSessionListenerAdapter - HttpSessionEventPublisher</li><li>rememberMe - SpringSessionRememberMeServices</li></ul><p>默认使用Hazelcast实现，全默认配置，正式环境需要自行调整</p><p>若使用<code>@Enable*HttpSession</code>表示手动配置，则<code>spring.session.*</code>不会自动配置。 <code>springSessionRepositoryFilter</code>会置顶，以便wrap掉原始的HttpRequest和HttpSession</p>',31),n=[s];function l(a,c){return t(),i("div",null,n)}const h=e(r,[["render",l],["__file","3e-auth-session.html.vue"]]),u=JSON.parse('{"path":"/zh/3-slardar/3e-auth-session.html","title":"3E.Session和认证","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"key","category":["鱼人","认证","授权"],"description":"3E.Session和认证 同时支持header-token, cookie-session 安全不高的url-string的凭证类ticket 用户可管理session，控制登录，踢人 可配置的cookie-name，token-name 不同级别的控制并发登录，如财务只许单端登录 集成第三方登录，验证码登录，凭证登录 管理端马甲，超级用户身份切换 ...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/3-slardar/3e-auth-session.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/3-slardar/3e-auth-session.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"3E.Session和认证"}],["meta",{"property":"og:description","content":"3E.Session和认证 同时支持header-token, cookie-session 安全不高的url-string的凭证类ticket 用户可管理session，控制登录，踢人 可配置的cookie-name，token-name 不同级别的控制并发登录，如财务只许单端登录 集成第三方登录，验证码登录，凭证登录 管理端马甲，超级用户身份切换 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3E.Session和认证\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3E.1.header和cookie","slug":"_3e-1-header和cookie","link":"#_3e-1-header和cookie","children":[]},{"level":2,"title":"3E.2.cookie的定制功能","slug":"_3e-2-cookie的定制功能","link":"#_3e-2-cookie的定制功能","children":[]},{"level":2,"title":"3E.3.多验证及登录","slug":"_3e-3-多验证及登录","link":"#_3e-3-多验证及登录","children":[]},{"level":2,"title":"3E.4.实现原理","slug":"_3e-4-实现原理","link":"#_3e-4-实现原理","children":[]},{"level":2,"title":"3E.5.相关知识","slug":"_3e-5-相关知识","link":"#_3e-5-相关知识","children":[]}],"git":{"createdTime":1655981049000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":2}]},"readingTime":{"minutes":2.86,"words":858},"filePathRelative":"zh/3-slardar/3e-auth-session.md","localizedDate":"2022年6月23日","autoDesc":true}');export{h as comp,u as data};
