import{_ as o,a as i,b as l}from"./bane_minimap_icon-BWt7_-9t.js";import{_ as s}from"./batrider_minimap_icon-T-_vOa2U.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as p,c as g,b as e,e as a,d as n,f as r}from"./app-DPQ-Jc5N.js";const h={},m=r('<h1 id="_9a6-upgrade-3-2-100" tabindex="-1"><a class="header-anchor" href="#_9a6-upgrade-3-2-100"><span>9A6.Upgrade 3.2.100</span></a></h1><p>Upgrade manual from <code>3.2.100</code> after having upgraded to <code>3.0.6-300</code>, including,</p><ul><li>3.2.101 AntiMage</li><li>3.2.110 ArcWarden</li><li>3.2.120 Bane</li><li>3.2.130.SS Batrider</li></ul><h2 id="_9a6-1-antimage-3-2-101" tabindex="-1"><a class="header-anchor" href="#_9a6-1-antimage-3-2-101"><span><img src="'+o+'" alt="Anti-Mage"> 9A6.1.AntiMage 3.2.101</span></a></h2>',4),u=e("code",null,"3.2.101",-1),_={href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"_1a-springboot-upgrade",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1a-springboot-upgrade"},[e("span",null,"1a.SpringBoot Upgrade")])],-1),b={href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.1-Release-Notes",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.2-Release-Notes",target:"_blank",rel:"noopener noreferrer"},S=r('<p>NOTE, do NOT enable <code>spring.threads.virtual.enabled</code>, due to not fully testing.</p><h3 id="_1b-dependency-change" tabindex="-1"><a class="header-anchor" href="#_1b-dependency-change"><span>1b.Dependency Change</span></a></h3><ul><li>ShardingSphere - upstream not adapted to Jakarta EE.</li><li>ServiceComb - not fully tested in wings, RPC mode is recommended.</li><li>kryo - remove outdated serializers, use new version defaults.</li></ul><h2 id="_9a6-2-arcwarden-3-2-110" tabindex="-1"><a class="header-anchor" href="#_9a6-2-arcwarden-3-2-110"><span><img src="'+i+'" alt="Arc Warden"> 9A6.2.ArcWarden 3.2.110</span></a></h2><ul><li>spring boot 3.2.2</li><li>java config instead of jooq-codegen-faceless.xml</li><li>merge awesome and autogen into the main module</li><li>delete HttpHelper, use HttpSecurity.with</li><li>safe table for JDBC，e.g. JournalJdbcHelper</li></ul><h3 id="_2a-feature-flags" tabindex="-1"><a class="header-anchor" href="#_2a-feature-flags"><span>2a.Feature Flags</span></a></h3><p>Add <code>FeatureFlag</code> and <code>TweakFeature</code> with the following breaking changes,</p><ul><li><code>wings.silencer.conditional</code> to <code>wings.feature</code></li><li><code>SilencerConditionalProp</code> to <code>SilencerFeatureProp</code></li><li><code>WingsEnabledCondition.Prefix</code> to <code>WingsEnabledContext.PrefixEnabled</code></li></ul><h3 id="_2b-dependency-change" tabindex="-1"><a class="header-anchor" href="#_2b-dependency-change"><span>2b.Dependency Change</span></a></h3><ul><li>remove <code>spring-boot-properties-migrator</code></li></ul><h2 id="_9a6-3-bane-3-2-120" tabindex="-1"><a class="header-anchor" href="#_9a6-3-bane-3-2-120"><span><img src="'+l+'" alt="Bane"> 9A6.3.Bane 3.2.120</span></a></h2><h3 id="_3a-refactor-async-ttl" tabindex="-1"><a class="header-anchor" href="#_3a-refactor-async-ttl"><span>3a.Refactor Async,TTL</span></a></h3><ul><li>LightTasker to FastScheduler</li><li>HeavyTasker to ScheduledScheduler</li><li>remove execute, referScheduler etc.</li><li><code>wings.slardar.async.heavy.</code> to <code>.fast.</code></li></ul><h2 id="_9a6-4-batrider-3-2-130-ss" tabindex="-1"><a class="header-anchor" href="#_9a6-4-batrider-3-2-130-ss"><span><img src="'+s+'" alt="Batrider"> 9A6.4.Batrider 3.2.130.SS</span></a></h2><h3 id="_4a-mapstruct-livetemplate-wgme" tabindex="-1"><a class="header-anchor" href="#_4a-mapstruct-livetemplate-wgme"><span>4a.MapStruct livetemplate wgme</span></a></h3><ul><li>rename <code>into()</code> in <code>wgmp</code> to <code>to()</code> and <code>of()</code></li><li>affect <code>AuthnDetailsMapper</code></li></ul><h3 id="_4b-loginsuccesshandler-state-class" tabindex="-1"><a class="header-anchor" href="#_4b-loginsuccesshandler-state-class"><span>4b.LoginSuccessHandler State class</span></a></h3><ul><li>change NonceLoginSuccessHandler.onResponse params list to object</li></ul><h3 id="_4c-move-ifnotxxx-from-emptysugar-to-settersugar" tabindex="-1"><a class="header-anchor" href="#_4c-move-ifnotxxx-from-emptysugar-to-settersugar"><span>4c.move IfNotXxx from EmptySugar to SetterSugar</span></a></h3><ul><li>EmptySugar only for empty, add setIf style to pojo</li></ul><h3 id="_4d-mirana-breaking-change" tabindex="-1"><a class="header-anchor" href="#_4d-mirana-breaking-change"><span>4d.mirana breaking change</span></a></h3><ul><li>remove R.NG/.OK to Immutable.NG/.OK</li><li>R.NG()/.OK() return Immutable.NG/.OK</li><li>Z.notNullSure for default value</li><li>Z.notNullSafe for default supplor</li></ul><h3 id="_4e-codestyle-continuation-indent-size" tabindex="-1"><a class="header-anchor" href="#_4e-codestyle-continuation-indent-size"><span>4e.codestyle CONTINUATION_INDENT_SIZE</span></a></h3><ul><li>reimport wings-idea-style.xml</li><li>reformat code, change indent from 8 to 4</li></ul><h3 id="_4f-jooq-supportor-dto" tabindex="-1"><a class="header-anchor" href="#_4f-jooq-supportor-dto"><span>4f.jooq supportor dto</span></a></h3><ul><li>change SelectWhereOrder from inner to normal class</li></ul>',26);function x(v,w){const t=d("ExternalLinkIcon");return p(),g("div",null,[m,e("p",null,[a("version change to "),u,a(", standard "),e("a",_,[a("3-segment"),n(t)]),a(" format. This includes major upgrades of java 17 to 21 and springboot 3.0 to 3.2.")]),f,e("ul",null,[e("li",null,[e("a",b,[a("Spring-Boot-3.1-Release-Notes"),n(t)])]),e("li",null,[e("a",y,[a("Spring-Boot-3.2-Release-Notes"),n(t)])])]),S])}const B=c(h,[["render",x],["__file","9a6.3-2-100.html.vue"]]),E=JSON.parse('{"path":"/9-example/9a.wings-change/9a6.3-2-100.html","title":"9A6.Upgrade 3.2.100","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"change","category":["Practice","Upgrade"],"description":"9A6.Upgrade 3.2.100 Upgrade manual from 3.2.100 after having upgraded to 3.0.6-300, including, 3.2.101 AntiMage 3.2.110 ArcWarden 3.2.120 Bane 3.2.130.SS Batrider Anti-Mage 9A6....","GIT_REPO_HEAD":"2024-06-01 862d44b07717cbc9f7a391a5d32475150c553e7a","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/9-example/9a.wings-change/9a6.3-2-100.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/9-example/9a.wings-change/9a6.3-2-100.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"9A6.Upgrade 3.2.100"}],["meta",{"property":"og:description","content":"9A6.Upgrade 3.2.100 Upgrade manual from 3.2.100 after having upgraded to 3.0.6-300, including, 3.2.101 AntiMage 3.2.110 ArcWarden 3.2.120 Bane 3.2.130.SS Batrider Anti-Mage 9A6...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/antimage_minimap_icon.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T04:57:21.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"9A6.Upgrade 3.2.100"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-01T04:57:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9A6.Upgrade 3.2.100\\",\\"image\\":[\\"https://wings.fessional.pro/antimage_minimap_icon.png\\",\\"https://wings.fessional.pro/arcwarden_minimap_icon.png\\",\\"https://wings.fessional.pro/bane_minimap_icon.png\\",\\"https://wings.fessional.pro/batrider_minimap_icon.png\\"],\\"dateModified\\":\\"2024-06-01T04:57:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9A6.1.AntiMage 3.2.101","slug":"_9a6-1-antimage-3-2-101","link":"#_9a6-1-antimage-3-2-101","children":[{"level":3,"title":"1a.SpringBoot Upgrade","slug":"_1a-springboot-upgrade","link":"#_1a-springboot-upgrade","children":[]},{"level":3,"title":"1b.Dependency Change","slug":"_1b-dependency-change","link":"#_1b-dependency-change","children":[]}]},{"level":2,"title":"9A6.2.ArcWarden 3.2.110","slug":"_9a6-2-arcwarden-3-2-110","link":"#_9a6-2-arcwarden-3-2-110","children":[{"level":3,"title":"2a.Feature Flags","slug":"_2a-feature-flags","link":"#_2a-feature-flags","children":[]},{"level":3,"title":"2b.Dependency Change","slug":"_2b-dependency-change","link":"#_2b-dependency-change","children":[]}]},{"level":2,"title":"9A6.3.Bane 3.2.120","slug":"_9a6-3-bane-3-2-120","link":"#_9a6-3-bane-3-2-120","children":[{"level":3,"title":"3a.Refactor Async,TTL","slug":"_3a-refactor-async-ttl","link":"#_3a-refactor-async-ttl","children":[]}]},{"level":2,"title":"9A6.4.Batrider 3.2.130.SS","slug":"_9a6-4-batrider-3-2-130-ss","link":"#_9a6-4-batrider-3-2-130-ss","children":[{"level":3,"title":"4a.MapStruct livetemplate wgme","slug":"_4a-mapstruct-livetemplate-wgme","link":"#_4a-mapstruct-livetemplate-wgme","children":[]},{"level":3,"title":"4b.LoginSuccessHandler State class","slug":"_4b-loginsuccesshandler-state-class","link":"#_4b-loginsuccesshandler-state-class","children":[]},{"level":3,"title":"4c.move IfNotXxx from EmptySugar to SetterSugar","slug":"_4c-move-ifnotxxx-from-emptysugar-to-settersugar","link":"#_4c-move-ifnotxxx-from-emptysugar-to-settersugar","children":[]},{"level":3,"title":"4d.mirana breaking change","slug":"_4d-mirana-breaking-change","link":"#_4d-mirana-breaking-change","children":[]},{"level":3,"title":"4e.codestyle CONTINUATION_INDENT_SIZE","slug":"_4e-codestyle-continuation-indent-size","link":"#_4e-codestyle-continuation-indent-size","children":[]},{"level":3,"title":"4f.jooq supportor dto","slug":"_4f-jooq-supportor-dto","link":"#_4f-jooq-supportor-dto","children":[]}]}],"git":{"createdTime":1703648131000,"updatedTime":1717217841000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":10}]},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"9-example/9a.wings-change/9a6.3-2-100.md","localizedDate":"December 27, 2023","autoDesc":true}');export{B as comp,E as data};
