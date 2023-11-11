const e=JSON.parse('{"key":"v-0a2bd850","path":"/zh/0-wings/0a-code-style.html","title":"0A.编码风格","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"linter","category":["神翼","规范"],"description":"Wings项目实践中，主张防御式编程，秉承以下价值观和哲学， 静态优于动态 - 能编码的，就不要反射; 强类型优于弱类型 - 能class或enum，就不要map或const; 编译时优于运行时 - 能编译时解决的，就不要到运行时处理; IDE优于Editor - 有上下文语法的，就不要字符串查找; 奥卡姆剃刀 - 能简单的就不要复杂，能明示的就不要暗...","GIT_REPO_HEAD":"2023-11-11 924abad555b3cbecf64963a60c696f4b28f87a79","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/0-wings/0a-code-style.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/0-wings/0a-code-style.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"0A.编码风格"}],["meta",{"property":"og:description","content":"Wings项目实践中，主张防御式编程，秉承以下价值观和哲学， 静态优于动态 - 能编码的，就不要反射; 强类型优于弱类型 - 能class或enum，就不要map或const; 编译时优于运行时 - 能编译时解决的，就不要到运行时处理; IDE优于Editor - 有上下文语法的，就不要字符串查找; 奥卡姆剃刀 - 能简单的就不要复杂，能明示的就不要暗..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-20T01:00:30.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-10-20T01:00:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0A.编码风格\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-20T01:00:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"0A.1.Java代码可读性优先","slug":"_0a-1-java代码可读性优先","link":"#_0a-1-java代码可读性优先","children":[]},{"level":2,"title":"0A.2.Sql命名snake_case","slug":"_0a-2-sql命名snake-case","link":"#_0a-2-sql命名snake-case","children":[]},{"level":2,"title":"0A.3.配置类properties优先","slug":"_0a-3-配置类properties优先","link":"#_0a-3-配置类properties优先","children":[]},{"level":2,"title":"0A.4.spring注入注意事项","slug":"_0a-4-spring注入注意事项","link":"#_0a-4-spring注入注意事项","children":[]},{"level":2,"title":"0A.5.RequestMapping风格","slug":"_0a-5-requestmapping风格","link":"#_0a-5-requestmapping风格","children":[]},{"level":2,"title":"0A.6.Service和Dto约定","slug":"_0a-6-service和dto约定","link":"#_0a-6-service和dto约定","children":[]},{"level":2,"title":"0A.7.枚举类和code/const值","slug":"_0a-7-枚举类和code-const值","link":"#_0a-7-枚举类和code-const值","children":[]},{"level":2,"title":"0A.8.maven管理的约定","slug":"_0a-8-maven管理的约定","link":"#_0a-8-maven管理的约定","children":[]},{"level":2,"title":"0A.9.Api测试及文档约定","slug":"_0a-9-api测试及文档约定","link":"#_0a-9-api测试及文档约定","children":[]},{"level":2,"title":"0A.A.resource结构","slug":"_0a-a-resource结构","link":"#_0a-a-resource结构","children":[]},{"level":2,"title":"0A.B.自动配置结构","slug":"_0a-b-自动配置结构","link":"#_0a-b-自动配置结构","children":[]},{"level":2,"title":"0A.C.常见的命名约定","slug":"_0a-c-常见的命名约定","link":"#_0a-c-常见的命名约定","children":[]},{"level":2,"title":"0A.D.Event同步内部优先","slug":"_0a-d-event同步内部优先","link":"#_0a-d-event同步内部优先","children":[]},{"level":2,"title":"0A.E.有关过度设计和技术债务","slug":"_0a-e-有关过度设计和技术债务","link":"#_0a-e-有关过度设计和技术债务","children":[]},{"level":2,"title":"0A.F.时间是神奇的类型","slug":"_0a-f-时间是神奇的类型","link":"#_0a-f-时间是神奇的类型","children":[]},{"level":2,"title":"0A.G.非科学家别用浮点型","slug":"_0a-g-非科学家别用浮点型","link":"#_0a-g-非科学家别用浮点型","children":[]},{"level":2,"title":"0A.H.业务数据类型","slug":"_0a-h-业务数据类型","link":"#_0a-h-业务数据类型","children":[]},{"level":2,"title":"0A.I.实际中如何优雅的消除null","slug":"_0a-i-实际中如何优雅的消除null","link":"#_0a-i-实际中如何优雅的消除null","children":[]},{"level":2,"title":"0A.J.类型系统的逆变/协变/PECS","slug":"_0a-j-类型系统的逆变-协变-pecs","link":"#_0a-j-类型系统的逆变-协变-pecs","children":[]},{"level":2,"title":"0A.K.类和方法的泄露（副作用）","slug":"_0a-k-类和方法的泄露-副作用","link":"#_0a-k-类和方法的泄露-副作用","children":[]}],"git":{"createdTime":1687077446000,"updatedTime":1697763630000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":13.4,"words":4019},"filePathRelative":"zh/0-wings/0a-code-style.md","localizedDate":"2023年6月18日","autoDesc":true}');export{e as data};