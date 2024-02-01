import{_ as l}from"./slardar_icon-1attlClE.js";import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as t,c,b as a,d as n,w as o,e,f as d}from"./app-O8GUlV1o.js";const u={},h=d('<h1 id="_3-slardar" tabindex="-1"><a class="header-anchor" href="#_3-slardar"><span>3.Slardar</span></a></h1><p><img src="'+l+'" alt="slardar"></p><blockquote><p>The big fish, a sailor, will starlight your way.</p></blockquote><p>SpringMvc (not WebFlux) wrappers and extensions, such as multi-language, multi-timezone, security, caching, sessions, etc.</p><h2 id="_3-1-module-project" tabindex="-1"><a class="header-anchor" href="#_3-1-module-project"><span>3.1.Module Project</span></a></h2><ul><li>slardar - basic features eg. caching, event, serializing</li><li>slardar-hazel-caching - distributed cache on hazelcast</li><li>slardar-hazel-session - distributed session on hazelcast</li><li>slardar-webmvc - webmvc, session, security-web</li><li>slardar-sprint - hazelcast, security-conf, admin, actuator</li><li>slardar-test - testing utility including login</li></ul><h2 id="_3-2-solution-and-configuration" tabindex="-1"><a class="header-anchor" href="#_3-2-solution-and-configuration"><span>3.2.Solution and Configuration</span></a></h2><p>Slardar is configured by default according to the following architecture and performance,</p><ul><li>Nginx(reverse proxy), mainly post+json service</li><li><code>Undertow</code> as the default Servlet container</li><li><code>Hazelcast</code> as <code>Cache</code> and <code>Session</code></li><li>80% service can <code>30ms</code> end, blocking factor <code>0.9</code></li><li><code>8-core 3GHz</code> cloud hosting, simulating <code>10k*50</code> requests, single application</li><li><code>95th</code>, response=<code>2s</code>, <code>tps</code>=<code>2k-5k</code></li></ul><h2 id="_3-3-springmvc-enhancement" tabindex="-1"><a class="header-anchor" href="#_3-3-springmvc-enhancement"><span>3.3.SpringMvc Enhancement</span></a></h2><p>Base on springmvc, Salrdar provides potential capabilities and out-of-the-box features,</p><ul><li>concurrency control, multi-level caching, event publish/subscribe</li><li>spring-boot-admin and actuator management and monitoring capability</li><li>sentry log collection capability</li><li>Terminal and Security&#39;s Context</li><li>login, permission, session, token and other control capabilities</li></ul><h2 id="_3-4-preconfigured-threadpool" tabindex="-1"><a class="header-anchor" href="#_3-4-preconfigured-threadpool"><span>3.4.Preconfigured ThreadPool</span></a></h2><p>SlardarAsyncConfiguration provides 4 pre-config Ttl threadpools, prefix and purpose are,</p><ul><li><code>win-async-</code> - <code>spring.task.execution.</code> properties for <code>@Async</code></li><li><code>win-task-</code> - <code>spring.task.scheduling.</code> properties for <code>@Scheduled</code></li><li><code>win-event-</code> - <code>wings.slardar.async.event.</code> properties for Spring&#39;s Event</li><li><code>win-heavy-</code> - <code>wings.slardar.async.heavy.</code> properties for Wings heavy task</li></ul><h2 id="_3-5-more-sections" tabindex="-1"><a class="header-anchor" href="#_3-5-more-sections"><span>3.5.More Sections</span></a></h2>',16);function p(g,m){const i=r("RouterLink");return t(),c("div",null,[h,a("ul",null,[a("li",null,[n(i,{to:"/3-slardar/3a-jackson.html"},{default:o(()=>[e("Jackson Convention")]),_:1}),e(" - Json convertion and i18n message")]),a("li",null,[n(i,{to:"/3-slardar/3b-hazelcast.html"},{default:o(()=>[e("Hazelcast Middleware")]),_:1}),e(" - distributed session, chaching, messaging")]),a("li",null,[n(i,{to:"/3-slardar/3c-host-ext.html"},{default:o(()=>[e("Host Extend and URL Override")]),_:1}),e(" - Override URL, Multiple Hosts and skinning")]),a("li",null,[n(i,{to:"/3-slardar/3d-i18n-zone.html"},{default:o(()=>[e("Multiple Time and Lang")]),_:1}),e(" - DateTime, Validation, Locale")]),a("li",null,[n(i,{to:"/3-slardar/3e-auth-session.html"},{default:o(()=>[e("Session and Authn")]),_:1}),e(" - Multiple logins, credentials, hierarchical permissions")]),a("li",null,[n(i,{to:"/3-slardar/3f-cache-event.html"},{default:o(()=>[e("Multiple Caching and Event")]),_:1}),e(" - Multi-level cache, lock, message")]),a("li",null,[n(i,{to:"/3-slardar/3g-fun-server.html"},{default:o(()=>[e("Backend Protection")]),_:1}),e(" - backend debounce, CAPTCHA, anti-tamper")]),a("li",null,[n(i,{to:"/3-slardar/3h-qa-slardar.html"},{default:o(()=>[e("Backend Faq Topic")]),_:1}),e(" - backend topic")])])])}const v=s(u,[["render",p],["__file","index.html.vue"]]);export{v as default};