import{_ as l}from"./slardar_icon-BFxzPIL2.js";import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as d,b as a,e,d as t,w as r,f as p}from"./app-RiK7eByG.js";const h={},u=p('<h1 id="_3-slardar" tabindex="-1"><a class="header-anchor" href="#_3-slardar"><span>3.Slardar</span></a></h1><p><img src="'+l+'" alt="slardar"></p><blockquote><p>The big fish, a sailor, will starlight your way.</p></blockquote><p>SpringMvc (not WebFlux) wrappers and extensions, such as multi-language, multi-timezone, security, caching, sessions, etc.</p><h2 id="_3-1-module-project" tabindex="-1"><a class="header-anchor" href="#_3-1-module-project"><span>3.1.Module Project</span></a></h2><ul><li>slardar - basic features eg. caching, event, serializing</li><li>slardar-hazel-caching - distributed cache on hazelcast</li><li>slardar-hazel-session - distributed session on hazelcast</li><li>slardar-webmvc - webmvc, session, security-web</li><li>slardar-sprint - hazelcast, security-conf, admin, actuator</li><li>slardar-test - testing utility including login</li></ul><h2 id="_3-2-solution-and-configuration" tabindex="-1"><a class="header-anchor" href="#_3-2-solution-and-configuration"><span>3.2.Solution and Configuration</span></a></h2><p>Slardar is configured by default according to the following architecture and performance,</p><ul><li>Nginx(reverse proxy), mainly post+json service</li><li><code>Undertow</code> as the default Servlet container</li><li><code>Hazelcast</code> as <code>Cache</code> and <code>Session</code></li><li>80% service can <code>30ms</code> end, blocking factor <code>0.9</code></li><li><code>8-core 3GHz</code> cloud hosting, simulating <code>10k*50</code> requests, single application</li><li><code>95th</code>, response=<code>2s</code>, <code>tps</code>=<code>2k-5k</code></li></ul><h2 id="_3-3-springmvc-enhancement" tabindex="-1"><a class="header-anchor" href="#_3-3-springmvc-enhancement"><span>3.3.SpringMvc Enhancement</span></a></h2><p>Base on springmvc, Salrdar provides potential capabilities and out-of-the-box features,</p><ul><li>concurrency control, multi-level caching, event publish/subscribe</li><li>spring-boot-admin and actuator management and monitoring capability</li><li>sentry log collection capability</li><li>Terminal and Security&#39;s Context</li><li>login, permission, session, token and other control capabilities</li></ul><h2 id="_3-4-preconfigured-threadpool" tabindex="-1"><a class="header-anchor" href="#_3-4-preconfigured-threadpool"><span>3.4.Preconfigured ThreadPool</span></a></h2><p>SlardarAsyncConfiguration provides 4 pre-config Ttl threadpools, prefix and purpose are,</p><ul><li><code>exec-</code> - <code>spring.task.execution.</code> properties <ul><li>for <code>@Async</code> method</li><li><code>app-exec-</code> for <code>Callable</code> RequestMapping</li></ul></li><li><code>task-</code> - <code>spring.task.scheduling.</code> properties for <code>@Scheduled</code></li><li><code>event-</code> - <code>wings.slardar.async.event.</code> properties for Spring&#39;s Event</li><li><code>heavy-</code> - <code>wings.slardar.async.heavy.</code> properties for Wings heavy task</li></ul><p>reference,</p>',16),g={href:"https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.spring.io/spring-framework/reference/integration/scheduling.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.spring.io/spring-boot/reference/features/task-execution-and-scheduling.html",target:"_blank",rel:"noopener noreferrer"},_=a("h2",{id:"_3-5-more-sections",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-5-more-sections"},[a("span",null,"3.5.More Sections")])],-1);function b(y,v){const o=i("ExternalLinkIcon"),n=i("RouteLink");return c(),d("div",null,[u,a("ul",null,[a("li",null,[a("a",g,[e("https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html"),t(o)])]),a("li",null,[a("a",m,[e("https://docs.spring.io/spring-framework/reference/integration/scheduling.html"),t(o)])]),a("li",null,[a("a",f,[e("https://docs.spring.io/spring-boot/reference/features/task-execution-and-scheduling.html"),t(o)])])]),_,a("ul",null,[a("li",null,[t(n,{to:"/3-slardar/3a-jackson.html"},{default:r(()=>[e("Jackson Convention")]),_:1}),e(" - Json convertion and i18n message")]),a("li",null,[t(n,{to:"/3-slardar/3b-hazelcast.html"},{default:r(()=>[e("Hazelcast Middleware")]),_:1}),e(" - distributed session, chaching, messaging")]),a("li",null,[t(n,{to:"/3-slardar/3c-host-ext.html"},{default:r(()=>[e("Host Extend and URL Override")]),_:1}),e(" - Override URL, Multiple Hosts and skinning")]),a("li",null,[t(n,{to:"/3-slardar/3d-i18n-zone.html"},{default:r(()=>[e("Multiple Time and Lang")]),_:1}),e(" - DateTime, Validation, Locale")]),a("li",null,[t(n,{to:"/3-slardar/3e-auth-session.html"},{default:r(()=>[e("Session and Authn")]),_:1}),e(" - Multiple logins, credentials, hierarchical permissions")]),a("li",null,[t(n,{to:"/3-slardar/3f-cache-event.html"},{default:r(()=>[e("Multiple Caching and Event")]),_:1}),e(" - Multi-level cache, lock, message")]),a("li",null,[t(n,{to:"/3-slardar/3g-fun-server.html"},{default:r(()=>[e("Backend Protection")]),_:1}),e(" - backend debounce, CAPTCHA, anti-tamper")]),a("li",null,[t(n,{to:"/3-slardar/3h-qa-slardar.html"},{default:r(()=>[e("Backend Faq Topic")]),_:1}),e(" - backend topic")])])])}const S=s(h,[["render",b],["__file","index.html.vue"]]),M=JSON.parse('{"path":"/3-slardar/","title":"3.Slardar","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"speed","category":["Slardar","Home"],"description":"3.Slardar slardar The big fish, a sailor, will starlight your way. SpringMvc (not WebFlux) wrappers and extensions, such as multi-language, multi-timezone, security, caching, se...","GIT_REPO_HEAD":"2024-05-08 616a405fa7f9f3d7e069b39d7ebd7bb447e5e35e","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/3-slardar/"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/3-slardar/"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"3.Slardar"}],["meta",{"property":"og:description","content":"3.Slardar slardar The big fish, a sailor, will starlight your way. SpringMvc (not WebFlux) wrappers and extensions, such as multi-language, multi-timezone, security, caching, se..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/slardar_icon.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-08T10:07:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"3.Slardar"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-05-08T10:07:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.Slardar\\",\\"image\\":[\\"https://wings.fessional.pro/slardar_icon.png\\"],\\"dateModified\\":\\"2024-05-08T10:07:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3.1.Module Project","slug":"_3-1-module-project","link":"#_3-1-module-project","children":[]},{"level":2,"title":"3.2.Solution and Configuration","slug":"_3-2-solution-and-configuration","link":"#_3-2-solution-and-configuration","children":[]},{"level":2,"title":"3.3.SpringMvc Enhancement","slug":"_3-3-springmvc-enhancement","link":"#_3-3-springmvc-enhancement","children":[]},{"level":2,"title":"3.4.Preconfigured ThreadPool","slug":"_3-4-preconfigured-threadpool","link":"#_3-4-preconfigured-threadpool","children":[]},{"level":2,"title":"3.5.More Sections","slug":"_3-5-more-sections","link":"#_3-5-more-sections","children":[]}],"git":{"createdTime":1680228107000,"updatedTime":1715162865000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":1.08,"words":325},"filePathRelative":"3-slardar/README.md","localizedDate":"March 31, 2023","autoDesc":true}');export{S as comp,M as data};
