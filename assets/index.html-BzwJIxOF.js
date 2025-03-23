import{_ as a}from"./wings-ti6-champion-B5s90q2L.js";import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as n,g as d,h as i,j as t,i as o,k as s,r as c,o as p}from"./app-DosJEJ2M.js";const g={};function m(u,e){const l=c("RouteLink");return p(),n("div",null,[e[20]||(e[20]=d('<h1 id="_0-纹丝不忒" tabindex="-1"><a class="header-anchor" href="#_0-纹丝不忒"><span>0.纹丝不忒</span></a></h1><p><img src="'+a+'" alt="wings ti6"></p><p>WingsBoot(代号神翼)是SpringBoot的一个脚手架，没有魔法和定制，主要有以下特点：</p><ul><li>提供了多语言多时区真实的解决方案（动态语言包，时区，夏令时，闰秒）</li><li>提供了数据库版本和数据的版本管理（安全的表变更，安全的数据维护）</li><li>安排了一套保守约定和稳健工程实践（枚举类，配置文件，模板等约定）</li><li>解决了软件开发中最难的命名问题（允许使用中文命名，解决行业黑话）</li><li>英雄池很深，对技能有独到的理解（读3遍官方文档，debug部分源码）</li><li>不懂代码的看文档，都不看的，别用（这是你的homework，及格线）</li></ul><p>其目标是使小创业团队，平稳的实现从单应用，到分表分库，到服务化的演变。 在任何项目阶段和业务规模下，能够，</p><ul><li>安全快速的重构业务，变更数据模型</li><li>对业务和数据有版本管理，保证兼容性</li><li>运行时的数据变化亦可追溯，复盘，恢复</li><li>对抗业务变化快，设计不足的技术债务</li></ul><h2 id="_0-1-版本号说明" tabindex="-1"><a class="header-anchor" href="#_0-1-版本号说明"><span>0.1.版本号说明</span></a></h2><p>从<code>x01.x.x</code>起，Wings版本号为标准的<a href="https://semver.org/lang/zh-CN/" target="_blank" rel="noopener noreferrer">3段式</a>，并且，</p><ul><li>主版本 - 主要为二进制兼容，包括工程的主要依赖</li><li>次版本 - 主要为结构或框架性新增</li><li>修订号 - 包括功能的增强，选项及配置的增加</li></ul><p>其数值由基于SpringBoot（<code>M.N.P</code>）的开发版（<code>m.n.p-SNAPSHOT</code>）组合而成，</p><p><code>V</code> = <code>M*100+m</code>.<code>N*100+n</code>.<code>P*100+p</code>-<code>SNAPSHOT</code></p><p>因此，当Wings版本为<code>300.201.1230-SNAPSHOT</code>，那么，</p><ul><li>SpringBoot - <code>3.2.12</code></li><li>Wings开发版 - <code>0.1.30-SNAPSHOT</code></li></ul><p>但是，版本为<code>x00.x.x</code>，即wings开发版为<code>0.x.x</code>时，语义降级，</p><ul><li><code>SNAPSHOT</code> 相当于 <code>path</code></li><li><code>path</code> 相当于 <code>minor</code></li><li><code>minor</code> 相当于 <code>major</code></li></ul><p>Wings使用了<code>revision</code>和<code>changelist</code>的CI占位属性，Maven需要3.5.0以上。</p><h2 id="_0-2-项目结构" tabindex="-1"><a class="header-anchor" href="#_0-2-项目结构"><span>0.2.项目结构</span></a></h2><p>Wings由多个子项目构成，都采用了Dota有关的命名，主要包括以下，</p><ul><li>沉默术士 wings/silencer - springboot的工程化装配，I18n等</li><li>虚空假面 wings/faceless - 数据层，分表分库，数据及库的版本管理</li><li>鱼人守卫 wings/slardar - Servlet体系的WebMvc基础约定和封装</li><li>术士大叔 wings/warlock - 综合以上的基础业务模块和功能脚手架</li><li>蝙蝠骑士 wings/batrider - RPC和微服化</li><li>演示例子 example - 集成以上的样板工程和例子</li><li>旁观阵线 observe - 生态内关联项目</li><li>天辉阵线 radiant - 开箱即用的插拔功能模块</li></ul><h2 id="_0-3-技术选型" tabindex="-1"><a class="header-anchor" href="#_0-3-技术选型"><span>0.3.技术选型</span></a></h2><p>遵循Unix哲学，部分回答了<code>为什么</code>和<code>为什么不</code>？</p><ul><li>SpringBoot - 事实标准，从业人员基数大，容易拉扯队伍和技术衔接。</li><li>Jooq/QueryDsl - 基于<code>限制的艺术</code>，看重其强类型而放弃流行的mybatis体系。 jooq强类型，可以受到IDE加持；不能写成过于复杂的SQL，有利于分库，分服务。</li><li>Kotlin - 比<code>scala</code>更胜任<code>更好的java</code>，目前仅在flywave支撑性项目中用了kotlin， 而在主要业务场景，仍然主张【少吃糖，写好java】</li><li>WebMvc - 尽管<code>webflux</code>在模型和性能好于servlet体系，但当前更多的是阻塞IO，多线程场景。</li><li>Lombok - 简化代码，使用了Experimental功能，开发时，需要自己在pom中引入。</li><li>Git-flow - git管理的最佳实践。</li><li>Trunk-based - CI/CD的最佳实践。</li><li>Guava, commons-lang3, commons-io - 进阶必备的工具包。</li><li>ShardingSphere - 分表分库，足以解决90%的<code>数据大</code>的问题。</li><li>Hazelcast - 相比于Redis，Hazelcast更简单，集成度更高。</li><li>ServiceComb - 更工程化和更紧凑的</li></ul><h2 id="_0-4-模块依赖" tabindex="-1"><a class="header-anchor" href="#_0-4-模块依赖"><span>0.4.模块依赖</span></a></h2><p><code>lib</code>格式为依赖lib，否则为Wings模块或功能，无歧义时会简写，如curse, flywave等</p><ul><li>silencer ← mirana | <code>boot-starter</code> | Spring自动配置</li><li>silencer-curse ← silencer | <code>aop</code> | Wings基本功能</li><li>faceless ← curse | meepo | <code>jdbc</code> | 类型主键</li><li>faceless-codegen ← faceless-jooq | <code>jooq-codegen</code> | 代码生成</li><li>faceless-flywave ← faceless | <code>kotlin</code> | 版本管理</li><li>faceless-jooq ← faceless-awesome | <code>jooq</code> | Jooq定制</li><li>faceless-shard ← faceless-awesome | <code>shardingsphere</code> | 分表分库</li><li>slardar ← curse | <code>jackson</code> | <code>fastjson</code> | <code>okhttp</code> | <code>cache</code> | <code>sentry</code> | 业务基础</li><li>slardar-hazel-caching ← slardar | <code>hazelcast</code> | 多级缓存</li><li>slardar-hazel-session ← hazel-caching | slardar-webmvc | 分布式会话</li><li>slardar-webmvc ← slardar | <code>starter-json</code> | <code>starter-web</code> | <code>undertow</code> | <code>security-web</code> | <code>springdoc</code> | Web增强</li><li>slardar-sprint ← hazel-caching | hazel-session | slardar-webmvc | <code>starter-security</code> | <code>starter-actuator</code> | <code>boot-admin</code> | Web集成</li><li>warlock ← slardar | faceless-jooq | Db基础</li><li>warlock-codegen ← warlock-awesome | faceless-codegen | flywave</li><li>warlock-shadow ← slardar-sprint | warlock-awesome | <code>JustAuth</code> | Db|Web|权限</li><li>warlock-bond ← warlock-shadow | auth-perm体系</li></ul><h2 id="_0-5-更多章节" tabindex="-1"><a class="header-anchor" href="#_0-5-更多章节"><span>0.5.更多章节</span></a></h2>',26)),i("ul",null,[i("li",null,[t(l,{to:"/zh/0-wings/0a-code-style.html"},{default:s(()=>e[0]||(e[0]=[o("编码风格")])),_:1}),e[1]||(e[1]=o(" - 价值观，编码哲学，编码风格"))]),i("li",null,[t(l,{to:"/zh/0-wings/0b-rest-half.html"},{default:s(()=>e[2]||(e[2]=[o("RestHalf规范")])),_:1}),e[3]||(e[3]=o(" - 场景化业务的URL规范"))]),i("li",null,[t(l,{to:"/zh/0-wings/0c-dev-tool.html"},{default:s(()=>e[4]||(e[4]=[o("开发工具")])),_:1}),e[5]||(e[5]=o(" - 工欲善其事，必先利其器"))]),i("li",null,[t(l,{to:"/zh/0-wings/0d-qa-devops.html"},{default:s(()=>e[6]||(e[6]=[o("开发运维")])),_:1}),e[7]||(e[7]=o(" - 编码开发，线上运行等话题"))]),i("li",null,[t(l,{to:"/zh/0-wings/0e-qa-config.html"},{default:s(()=>e[8]||(e[8]=[o("配置话题")])),_:1}),e[9]||(e[9]=o(" - maven，properties，spring的配置话题"))]),i("li",null,[t(l,{to:"/zh/0-wings/0f-qa-others.html"},{default:s(()=>e[10]||(e[10]=[o("其他话题")])),_:1}),e[11]||(e[11]=o(" - 未归类的话题"))]),i("li",null,[t(l,{to:"/zh/0-wings/0g-ghost-ship.html"},{default:s(()=>e[12]||(e[12]=[o("幽灵船模型")])),_:1}),e[13]||(e[13]=o(" - wings功能的基本构建模型"))]),i("li",null,[t(l,{to:"/zh/0-wings/0h-prop-index.html"},{default:s(()=>e[14]||(e[14]=[o("属性配置")])),_:1}),e[15]||(e[15]=o(" - wings所有的属性配置"))]),i("li",null,[t(l,{to:"/zh/0-wings/0i-i18n-message.html"},{default:s(()=>e[16]||(e[16]=[o("多国语信息")])),_:1}),e[17]||(e[17]=o(" - 匹配规则及默认信息"))]),i("li",null,[t(l,{to:"/zh/0-wings/0j-code-pattern.html"},{default:s(()=>e[18]||(e[18]=[o("编码模式")])),_:1}),e[19]||(e[19]=o(" - 编码及命名的一些实践"))])])])}const b=r(g,[["render",m],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/zh/0-wings/","title":"0.纹丝不忒","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"compass","category":["神翼","首页"],"description":"0.纹丝不忒 wings ti6 WingsBoot(代号神翼)是SpringBoot的一个脚手架，没有魔法和定制，主要有以下特点： 提供了多语言多时区真实的解决方案（动态语言包，时区，夏令时，闰秒） 提供了数据库版本和数据的版本管理（安全的表变更，安全的数据维护） 安排了一套保守约定和稳健工程实践（枚举类，配置文件，模板等约定） 解决了软件开发中最难...","GIT_REPO_HEAD":"2025-03-23 e4852dad2767b188f41b282e39defeaf611fdd4a","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/0-wings/"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/0-wings/"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"0.纹丝不忒"}],["meta",{"property":"og:description","content":"0.纹丝不忒 wings ti6 WingsBoot(代号神翼)是SpringBoot的一个脚手架，没有魔法和定制，主要有以下特点： 提供了多语言多时区真实的解决方案（动态语言包，时区，夏令时，闰秒） 提供了数据库版本和数据的版本管理（安全的表变更，安全的数据维护） 安排了一套保守约定和稳健工程实践（枚举类，配置文件，模板等约定） 解决了软件开发中最难..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/wings-ti6-champion.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-23T06:18:56.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T06:18:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0.纹丝不忒\\",\\"image\\":[\\"https://wings.fessional.pro/wings-ti6-champion.png\\"],\\"dateModified\\":\\"2025-03-23T06:18:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"git":{"createdTime":1655689944000,"updatedTime":1742710736000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":24,"url":"https://github.com/trydofor"},{"name":"robbietree8","username":"robbietree8","email":"wangzg1988@gmail.com","commits":1,"url":"https://github.com/robbietree8"}]},"readingTime":{"minutes":4.26,"words":1277},"filePathRelative":"zh/0-wings/README.md","localizedDate":"2022年6月20日","autoDesc":true}');export{b as comp,y as data};
