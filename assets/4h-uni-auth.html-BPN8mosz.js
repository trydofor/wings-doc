import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as a,f as n,r,o as i}from"./app-B4-M_2GK.js";const s={};function l(c,e){const t=r("Mermaid");return i(),o("div",null,[e[0]||(e[0]=a('<h1 id="_4h-联合登录" tabindex="-1"><a class="header-anchor" href="#_4h-联合登录"><span>4H.联合登录</span></a></h1><p>在wings应用中实现联合登录。一个在App1中登录的用户，可以通过App1的session，自动登录联合的其他应用。</p><h2 id="登录流程" tabindex="-1"><a class="header-anchor" href="#登录流程"><span>登录流程</span></a></h2><p>假设有2个Wings应用，App1和App2，组成一个联合登录的Union，当用户登录App1获取TK1后， 用户在访问App2时，通过TK1可以在App2自动上完成登录及Session绑定，情况如下，</p><ul><li>User在App1上登录，并获得TK1，含authType(TP)和SessionId(ID)信息</li><li>User使用TK1访问App2时，会发生， <ul><li>App2上已登录，有TK2时，直接绑定TK1</li><li>App2上未登录，App1自动登录，获取TK2并绑定TK1</li></ul></li><li>任意App#上登出，则在App#上分别销毁TK1和TK2</li></ul>',5)),n(t,{id:"mermaid-41",code:"eJyNkTFvgzAQhff8ipMqRKuEAdShYkhUNUvVJQPtbuCaWDU2tU1bCfHfe8aBQKKqYcH2fffe89ngZ4OywC1ne82qBUAQtFxym0Ib2gNWGKYQ5sxguPL7N6Y5ywUaKrTEh0KpOsMf+6SE0o6+uWf5+wMLqdh1XRAsaMEaq2RT5ajdprBKw6vpNzXTlhe8ZtLCY13Hl0eJE3A0ROs1LB2UglB7LocG94PIVSPHpZC9xLfZbvm8vbvoTVL44oZ7Zfjm9uDoPqOwXhZLbwv913MTZ6JBfcAGci5L2iVHp82JH8J4uyMXA/P8CjTaRktSoRYUBkEq7/yP5czhdJ9xFsN9djMdIl0S0vkzCa3P018XXpZucqPPMP+RmQ34/B0ot2rs2E+F8W2n5xNdMv0FOP7Crw=="})])}const m=p(s,[["render",l],["__file","4h-uni-auth.html.vue"]]),u=JSON.parse('{"path":"/zh/4-warlock/4h-uni-auth.html","title":"4H.联合登录","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"bug-slash","category":["术士","安全"],"description":"4H.联合登录 在wings应用中实现联合登录。一个在App1中登录的用户，可以通过App1的session，自动登录联合的其他应用。 登录流程 假设有2个Wings应用，App1和App2，组成一个联合登录的Union，当用户登录App1获取TK1后， 用户在访问App2时，通过TK1可以在App2自动上完成登录及Session绑定，情况如下， Us...","GIT_REPO_HEAD":"2025-02-02 9cab7f71f34df19a1b0adffd87fa71dbbe019019","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/4-warlock/4h-uni-auth.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/4-warlock/4h-uni-auth.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"4H.联合登录"}],["meta",{"property":"og:description","content":"4H.联合登录 在wings应用中实现联合登录。一个在App1中登录的用户，可以通过App1的session，自动登录联合的其他应用。 登录流程 假设有2个Wings应用，App1和App2，组成一个联合登录的Union，当用户登录App1获取TK1后， 用户在访问App2时，通过TK1可以在App2自动上完成登录及Session绑定，情况如下， Us..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-09T11:57:11.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T11:57:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4H.联合登录\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T11:57:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"登录流程","slug":"登录流程","link":"#登录流程","children":[]}],"git":{"createdTime":1680228107000,"updatedTime":1736423831000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":5,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":0.96,"words":287},"filePathRelative":"zh/4-warlock/4h-uni-auth.md","localizedDate":"2023年3月31日","autoDesc":true}');export{m as comp,u as data};
