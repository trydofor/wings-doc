import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as s,b as e,e as o,d as r,f as t}from"./app-OXbFzGQa.js";const d={},c=e("h1",{id:"_9d2-vueadmin管理端",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9d2-vueadmin管理端"},[e("span",null,"9D2.VueAdmin管理端")])],-1),p=e("p",null,"管理端 winx-admin 有对应的SPA页面，其技术栈是 Vue3+Ts+ElementPlus",-1),_={href:"https://github.com/trydofor/professional-vue-admin-starter",target:"_blank",rel:"noopener noreferrer"},h={href:"https://gitee.com/trydofor/professional-vue-admin-starter",target:"_blank",rel:"noopener noreferrer"},u=t('<p>设置<code>debug=true</code>可获得更详细的运行信息。</p><h2 id="_9d2-1-启动管理端" tabindex="-1"><a class="header-anchor" href="#_9d2-1-启动管理端"><span>9D2.1.启动管理端</span></a></h2><p>直接启动 WinxAdminApplication 即可，默认使用内存用户，H2内存数据库。</p><p>登录及权限配置，由<code>wings.warlock.security</code>的<code>mem-user</code>和<code>mem-auth</code>设置。</p><ul><li><code>winx-admin@fessional.pro</code> 为SPA管理端登录用户</li><li><code>boot-admin-client</code>和<code>boot-admin-server</code>为spring-boot-admin用户</li><li>密码默认为<code>$DING_TALK_TOKEN</code>环境变量，否则为</li><li><code>!!!YOU_MUST_USE_STRONG_PASSWORD_HERE!!!</code></li></ul><p>需要注意的是，H2数据库仅供演示，全部功能需要使用mysql数据库。正常启动admin后， 可以通过Swagger进行简单的Api测试。有权限的接口需要首先登录。</p>',6),m={href:"http://localhost:8091/swagger-ui/index.html",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"_9d2-2-监控及接口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_9d2-2-监控及接口"},[e("span",null,"9D2.2.监控及接口")])],-1),f=e("p",null,"启动 WinxDevopsApplication 可以管理springboot应用。",-1),b=e("code",null,"boot-admin-server",-1),v={href:"http://localhost:8093/login",target:"_blank",rel:"noopener noreferrer"},w=t('<p>如果登录或权限失败，需要检查以下参数是否被修改过。</p><ul><li>spring.boot.admin.server.enabled=true</li><li>wings.warlock.security.login-forward=false</li><li>wings.warlock.security.logout-success-body=</li></ul><p>因wings以假的PostMapping为login生成Swagger文档，这和SpringMvc的 RequestMappingInfoHandlerMapping处理机制会冲突，需求确保排序时， AdminControllerHandlerMapping在RequestMappingHandlerMapping前面。</p><p>若有login/out的url冲突，可设置关闭Swagger文档功能。</p><p><code>spring.wings.warlock.enabled.controller-proc</code>=<code>false</code></p><h2 id="_9d2-3-单页管理端" tabindex="-1"><a class="header-anchor" href="#_9d2-3-单页管理端"><span>9D2.3.单页管理端</span></a></h2><p>就近克隆 vue-admin-starter，然后进入工程目录，根据Readme执行命令。 默认环境，Node16，pnpm7；主要框架 Ts4，Vue3，ElementPlus2，VueI18n9。</p><p>点击【ForTest】可以不登录演示，或配合WinxAdmin后台，可登录演示权限等功能。</p>',8);function x(k,A){const n=i("ExternalLinkIcon");return l(),s("div",null,[c,p,e("ul",null,[e("li",null,[e("a",_,[o("https://github.com/trydofor/professional-vue-admin-starter"),r(n)])]),e("li",null,[e("a",h,[o("https://gitee.com/trydofor/professional-vue-admin-starter"),r(n)])])]),u,e("p",null,[e("a",m,[o("http://localhost:8091/swagger-ui/index.html"),r(n)])]),g,f,e("p",null,[o("以"),b,o(" 登录 "),e("a",v,[o("http://localhost:8093/login"),r(n)])]),w])}const E=a(d,[["render",x],["__file","9d2.vue-admin.html.vue"]]);export{E as default};
