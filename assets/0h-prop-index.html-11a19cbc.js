import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as n,c as d,b as l,e,d as o,w as t,f as s}from"./app-7d38ae22.js";const h={},p=l("h1",{id:"_0h-属性配置",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_0h-属性配置","aria-hidden":"true"},"#"),e(" 0H.属性配置")],-1),u=l("p",null,[e("配置项推荐Properties形式，因为这样有利于分隔，层叠和查找。 每个"),l("code",null,"*.properties"),e("都会对应一个"),l("code",null,"*Prop.java"),e("，以强类型的Key映射。")],-1),_={href:"https://docs.oracle.com/cd/E23095_01/Platform.93/ATGProgGuide/html/s0204propertiesfileformat01.html",target:"_blank",rel:"noopener noreferrer"},f=s('<h2 id="_0h-1-属性文件名" tabindex="-1"><a class="header-anchor" href="#_0h-1-属性文件名" aria-hidden="true">#</a> 0H.1.属性文件名</h2><p>在Silencer中，默认约定了配置文件的类型和命名规则。</p><ul><li><code>wings-auto-config.cnf</code> - Silencer功能配置</li><li><code>wings-conf-block-list.cnf</code> - 配置文件黑名单</li><li><code>wings-prop-promotion.cnf</code> - 配置项提升到系统变量</li><li><code>spring-*.properties</code> - spring的配置项</li><li><code>wings-*.properties</code> - wings的配置项</li></ul><h2 id="_0h-2-配置项标记" tabindex="-1"><a class="header-anchor" href="#_0h-2-配置项标记" aria-hidden="true">#</a> 0H.2.配置项标记</h2><p>在文档中，存在以下标记，以增加识别度和可读性。</p><ul><li><code>String</code> - <code>NotNull</code>的类型<code>String</code></li><li><code>String?</code> - <code>Nullable</code>的类型<code>String</code></li><li><code>Boolean</code> - 包装类和原始类型等同，均非空。</li><li><code>empty</code> - 表示为<code>空</code>，即<code>key=</code></li></ul><p>在properties的配置值一般为单行，多行的语法如下</p><ul><li><code>\\</code> - 以其转义末尾的换行。</li><li><code>\\n\\</code> - 在prop中产生一个换行符，如配置sql时，增加可读性。</li></ul><h2 id="_0h-3-配置项列表" tabindex="-1"><a class="header-anchor" href="#_0h-3-配置项列表" aria-hidden="true">#</a> 0H.3.配置项列表</h2>',9);function m(g,k){const i=a("ExternalLinkIcon"),r=a("RouterLink");return n(),d("div",null,[p,u,l("p",null,[l("a",_,[e("Properties File Format"),o(i)])]),f,l("ul",null,[l("li",null,[o(r,{to:"/zh/1-silencer/1d-prop-silencer.html"},{default:t(()=>[e("沉默的属性")]),_:1}),e(" - 自动加载，默认工具和行为")]),l("li",null,[o(r,{to:"/zh/2-faceless/2i-prop-faceless.html"},{default:t(()=>[e("虚空的属性")]),_:1}),e(" - 数据库及操作，I18n的基本配置")]),l("li",null,[o(r,{to:"/zh/2-faceless/2j-prop-flywave.html"},{default:t(()=>[e("飞波的属性")]),_:1}),e(" - Flywave关于schema管理的配置")]),l("li",null,[o(r,{to:"/zh/2-faceless/2k-prop-jooq.html"},{default:t(()=>[e("Jooq的属性")]),_:1}),e(" - Jooq相关的配置")]),l("li",null,[o(r,{to:"/zh/3-slardar/3i-prop-slardar.html"},{default:t(()=>[e("大鱼的属性")]),_:1}),e(" - 有关Slardar，Spring的基本设置")]),l("li",null,[o(r,{to:"/zh/3-slardar/3j-prop-webmvc.html"},{default:t(()=>[e("WebMvc的属性")]),_:1}),e(" - Spring WebMvc的基本设置")]),l("li",null,[o(r,{to:"/zh/3-slardar/3k-prop-function.html"},{default:t(()=>[e("WebFun的属性")]),_:1}),e(" - Spring Web加强功能的设置")]),l("li",null,[o(r,{to:"/zh/3-slardar/3l-prop-hazelcast.html"},{default:t(()=>[e("Hazelcast的属性")]),_:1}),e(" - Hazelcast的设置")]),l("li",null,[o(r,{to:"/zh/4-warlock/4d-prop-warlock.html"},{default:t(()=>[e("术士的属性")]),_:1}),e(" - 有关Warlock登录授权的设置")]),l("li",null,[o(r,{to:"/zh/8-radiant/8b-prop-tinytask.html"},{default:t(()=>[e("小任务属性")]),_:1}),e(" - TinyTask的设置")]),l("li",null,[o(r,{to:"/zh/8-radiant/8d-prop-tinymail.html"},{default:t(()=>[e("小邮件属性")]),_:1}),e(" - TinyMail的设置")])])])}const x=c(h,[["render",m],["__file","0h-prop-index.html.vue"]]);export{x as default};
