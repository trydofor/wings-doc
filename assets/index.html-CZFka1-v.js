import{_ as i}from"./warlock_icon-DsMZnnfh.js";import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as s,b as t,f as o,w as n,d as e,e as c,o as d}from"./app-CfZymbb7.js";const u={},h=c('<h1 id="_4-warlock" tabindex="-1"><a class="header-anchor" href="#_4-warlock"><span>4.Warlock</span></a></h1><p><img src="'+i+'" alt="warlock"></p><blockquote><p>Hellfire Golem plus FatalBonds can change the situation instantly</p></blockquote><p>Based on Faceless and Slardar, it provides basic user, authn/authz, access control, data isolation, and other features.</p><h2 id="_4-1-module-project" tabindex="-1"><a class="header-anchor" href="#_4-1-module-project"><span>4.1.Module Project</span></a></h2><ul><li>warlock - integrate jooq and slardar</li><li>warlock-shadow - integrate slardar-sprint</li><li>warlock-bond - implement login, autun and authz</li><li>warlock-codegen - codegen for the project</li><li>warlock-test - testing utility and login</li></ul><h2 id="_4-2-access-control" tabindex="-1"><a class="header-anchor" href="#_4-2-access-control"><span>4.2.Access Control</span></a></h2><p>Warlock&#39;s access control, focusing on the following scenarios and technical aspects,</p><ul><li>Filter(Url) - coarse-grained control scenarios, such as roles, functions</li><li>Method(Aop) - fine-grained control functions, such as read, write, delete</li><li>Data - data isolation, such as object control, ACL</li></ul><p>it is more centralized and simple and recommended to use Url prefix, while Aop is more decentralized and more granular.</p><p>When doing the Matcher of Url, try to avoid rule crossover, special rule in the first, AnyRequest in the last as the default rule. If the rules have crossover, match by FIFO, the calling relationship in spring is as follows, and the underlying data is LinkedHashMap.</p><ul><li>FilterSecurityInterceptor.beforeInvocation</li><li>DefaultFilterInvocationSecurityMetadataSource.getAttributes</li></ul><p>The order of wings config is from loose to strict (PermitAll &gt; Authenticated &gt; Authority), and ends with AnyRequest. The Authority are grouped by URL, sorted in reverse order of the ascii of the URL, i.e., the English number comes before <code>*</code> and the loose rule comes after.</p><h2 id="_4-3-partial-usage" tabindex="-1"><a class="header-anchor" href="#_4-3-partial-usage"><span>4.3.Partial Usage</span></a></h2><p>Warlock provides a predefined auth-perm-role system, including table structures, data relationships, etc.</p><p>The default implementation of authn-authz and perm-role system, which depends on the global UserId with certain limitations. In any system, login and permissions have important security and performance implications, usually with a high level of integration and complexity. Therefore, when partially using this feature, you need to check the configuration items and the injected beans one by one.</p><p>In the default implementation, eg. reading and accumulating counts, if the depend table does not exist in the database, it does nothing or returns empty.</p><h2 id="_4-4-full-usage" tabindex="-1"><a class="header-anchor" href="#_4-4-full-usage"><span>4.4.Full Usage</span></a></h2><p>WebSecurity in SpringBoot(before 3.0) needs to extend Adapter with many constraints. Therefore, when using the auto-config feature provided by wings, the following special bean should to be noted.</p><ul><li>WebSecurity - expose WebSecurityCustomizer Bean</li><li>HttpWebSecurity - expose HttpSecurityCustomizer Bean</li></ul><p>Customize WebSecurityConfigurerAdapter, you should pay attention to the lifecycle and order.</p><blockquote><p>Is there an unresolvable circular reference? Error creating bean with name &#39;springSecurityFilterChain&#39;: Requested bean is currently in creation.</p></blockquote><p>The above error occurs when injecting the <code>@Bean</code> of WebSecurityConfiguration. In short, WebSecurity has special beans and its chain calls has sequential requirements.</p><h2 id="_4-5-more-sections" tabindex="-1"><a class="header-anchor" href="#_4-5-more-sections"><span>4.5.More Sections</span></a></h2>',24);function p(m,g){const a=l("RouteLink");return d(),s("div",null,[h,t("ul",null,[t("li",null,[o(a,{to:"/4-warlock/4a-authn.html"},{default:n(()=>[e("Integrated Authn")]),_:1}),e(" - Multiple login, authn and token policies")]),t("li",null,[o(a,{to:"/4-warlock/4b-authz.html"},{default:n(()=>[e("Combined Authz")]),_:1}),e(" - Permission(Perm) and Role token system")]),t("li",null,[o(a,{to:"/4-warlock/4c-security.html"},{default:n(()=>[e("Customize Security")]),_:1}),e(" - Customize login, authn and authz")]),t("li",null,[o(a,{to:"/4-warlock/4e-tweak.html"},{default:n(()=>[e("Dynamic Tweaking")]),_:1}),e(" - Global and thread-level teak time, logging and exceptions")]),t("li",null,[o(a,{to:"/4-warlock/4f-api-oauth.html"},{default:n(()=>[e("Open Api")]),_:1}),e(" - External Api with limited functions")]),t("li",null,[o(a,{to:"/4-warlock/4g-watching.html"},{default:n(()=>[e("Time Watching")]),_:1}),e(" - Timing and logging of slow requests")]),t("li",null,[o(a,{to:"/4-warlock/4h-uni-auth.html"},{default:n(()=>[e("Union Login")]),_:1}),e(" - Association login in wings app union")])])])}const _=r(u,[["render",p],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/4-warlock/","title":"4.Warlock","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"circle-user","category":["Warlock","Home"],"description":"4.Warlock warlock Hellfire Golem plus FatalBonds can change the situation instantly Based on Faceless and Slardar, it provides basic user, authn/authz, access control, data isol...","GIT_REPO_HEAD":"2024-08-09 96de5f3516d8a63745329bc5d9552c3dafb6ff53","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/4-warlock/"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/4-warlock/"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"4.Warlock"}],["meta",{"property":"og:description","content":"4.Warlock warlock Hellfire Golem plus FatalBonds can change the situation instantly Based on Faceless and Slardar, it provides basic user, authn/authz, access control, data isol..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/warlock_icon.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.Warlock\\",\\"image\\":[\\"https://wings.fessional.pro/warlock_icon.png\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"4.1.Module Project","slug":"_4-1-module-project","link":"#_4-1-module-project","children":[]},{"level":2,"title":"4.2.Access Control","slug":"_4-2-access-control","link":"#_4-2-access-control","children":[]},{"level":2,"title":"4.3.Partial Usage","slug":"_4-3-partial-usage","link":"#_4-3-partial-usage","children":[]},{"level":2,"title":"4.4.Full Usage","slug":"_4-4-full-usage","link":"#_4-4-full-usage","children":[]},{"level":2,"title":"4.5.More Sections","slug":"_4-5-more-sections","link":"#_4-5-more-sections","children":[]}],"git":{"createdTime":1680228107000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":5}]},"readingTime":{"minutes":1.64,"words":492},"filePathRelative":"4-warlock/README.md","localizedDate":"March 31, 2023","autoDesc":true}');export{_ as comp,k as data};