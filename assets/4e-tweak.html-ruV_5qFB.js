import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,f as o}from"./app-Zgi1NekF.js";const r={},n=o('<h1 id="_4e-动态调节" tabindex="-1"><a class="header-anchor" href="#_4e-动态调节"><span>4E.动态调节</span></a></h1><p>可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。</p><h2 id="_4e-1-实现原理" tabindex="-1"><a class="header-anchor" href="#_4e-1-实现原理"><span>4E.1.实现原理</span></a></h2><p>在SilencerCurse模块中，存在以下结构类似的类，用于全局控制</p><ul><li>TweakClock - 调试时钟</li><li>TweakLogger - 调试日志级别，仅限于Logback</li><li>TweakStack - 调试CodeException的异常堆栈</li></ul><p>其原理是，static或ThreadLocal设置参数，按需取得有效值。</p><h2 id="_4e-2-使用方法" tabindex="-1"><a class="header-anchor" href="#_4e-2-使用方法"><span>4E.2.使用方法</span></a></h2><p>设置好AdminTweakController的URL及其权限，避免滥用，造成不良后果。</p><p>对于时钟的调试，需要在编码时，需要进行以下替换，</p><ul><li>System.currentTimeMillis - Now.millis()</li><li>java.time.Xxxx.now - Now.xxx()</li><li>任何需要调试的日期，都应该从Now取值</li></ul><p>在Slardar中，通过TerminalIterceptor设置TerminalContext， 此时，通过TweakEventListener及对应的事件，可完成单应用或集群的调试控制。</p><p>OkHttpTweakLogInterceptor可以使okhttp日志与TweakLogger联动</p><p>而在WarlockShow中，提供了AdminTweakController，可供管理员按用户简单调试。</p><p>因系统级全局设置影响较大，Wings中没有提供默认实现。</p><h2 id="_4e-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_4e-3-注意事项"><span>4E.3.注意事项</span></a></h2><p>线程级调试，主要基于TransmittableThreadLocal自动完成，使用时要遵守其约定， 尤其在Wings配置的线程池外，自行启动的线程，需要注意Context复制，避免丢失。</p><p>业务中的日期时间，尽量使用Now，其性能损失非常小，却可以为业务代理穿越时间线的能力。 不用轻易调制系统时钟，避免造成事件混乱，甚至启动时检查失败。</p>',17),i=[n];function l(c,p){return t(),a("div",null,i)}const h=e(r,[["render",l],["__file","4e-tweak.html.vue"]]),m=JSON.parse('{"path":"/zh/4-warlock/4e-tweak.html","title":"4E.动态调节","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"debug","category":["术士","调试"],"description":"4E.动态调节 可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。 4E.1.实现原理 在SilencerCurse模块中，存在以下结构类似的类，用于全局控制 TweakClock - 调试时钟 TweakLogger - 调试日志级别，仅限于Logback TweakStack - 调试CodeException的异常堆栈 其原...","GIT_REPO_HEAD":"2024-02-16 ca0321e2984e66843ffa3cce0bc046cabcb1efb0","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/4-warlock/4e-tweak.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/4-warlock/4e-tweak.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"4E.动态调节"}],["meta",{"property":"og:description","content":"4E.动态调节 可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。 4E.1.实现原理 在SilencerCurse模块中，存在以下结构类似的类，用于全局控制 TweakClock - 调试时钟 TweakLogger - 调试日志级别，仅限于Logback TweakStack - 调试CodeException的异常堆栈 其原..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-18T08:37:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-18T08:37:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4E.动态调节\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T08:37:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"4E.1.实现原理","slug":"_4e-1-实现原理","link":"#_4e-1-实现原理","children":[]},{"level":2,"title":"4E.2.使用方法","slug":"_4e-2-使用方法","link":"#_4e-2-使用方法","children":[]},{"level":2,"title":"4E.3.注意事项","slug":"_4e-3-注意事项","link":"#_4e-3-注意事项","children":[]}],"git":{"createdTime":1687077446000,"updatedTime":1687077446000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":1}]},"readingTime":{"minutes":1.29,"words":388},"filePathRelative":"zh/4-warlock/4e-tweak.md","localizedDate":"2023年6月18日","autoDesc":true}');export{h as comp,m as data};
