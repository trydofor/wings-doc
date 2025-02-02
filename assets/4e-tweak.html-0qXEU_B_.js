import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as o,o as r}from"./app-B4-M_2GK.js";const l={};function n(i,e){return r(),a("div",null,e[0]||(e[0]=[o('<h1 id="_4e-动态调节" tabindex="-1"><a class="header-anchor" href="#_4e-动态调节"><span>4E.动态调节</span></a></h1><p>可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。</p><h2 id="_4e-1-实现原理" tabindex="-1"><a class="header-anchor" href="#_4e-1-实现原理"><span>4E.1.实现原理</span></a></h2><p>在SilencerCurse模块中，存在以下结构类似的类，用于全局控制</p><ul><li>TweakClock - 调试时钟</li><li>TweakLogger - 调试日志级别，仅限于Logback</li><li>TweakStack - 调试CodeException的异常堆栈</li></ul><p>其原理是，static或ThreadLocal设置参数，按需取得有效值。</p><h2 id="_4e-2-使用方法" tabindex="-1"><a class="header-anchor" href="#_4e-2-使用方法"><span>4E.2.使用方法</span></a></h2><p>设置好AdminTweakController的URL及其权限，避免滥用，造成不良后果。</p><p>对于时钟的调试，需要在编码时，需要进行以下替换，</p><ul><li>System.currentTimeMillis - Now.millis()</li><li>java.time.Xxxx.now - Now.xxx()</li><li>任何需要调试的日期，都应该从Now取值</li></ul><p>在Slardar中，通过TerminalInterceptor设置TerminalContext， 此时，通过TweakEventListener及对应的事件，可完成单应用或集群的调试控制。</p><p>OkHttpTweakLogInterceptor可以使okhttp日志与TweakLogger联动</p><p>而在WarlockShow中，提供了AdminTweakController，可供管理员按用户简单调试。</p><p>因系统级全局设置影响较大，Wings中没有提供默认实现。</p><h2 id="_4e-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_4e-3-注意事项"><span>4E.3.注意事项</span></a></h2><p>线程级调试，主要基于TransmittableThreadLocal自动完成，使用时要遵守其约定， 尤其在Wings配置的线程池外，自行启动的线程，需要注意Context复制，避免丢失。</p><p>业务中的日期时间，尽量使用Now，其性能损失非常小，却可以为业务代理穿越时间线的能力。 不用轻易调制系统时钟，避免造成事件混乱，甚至启动时检查失败。</p>',17)]))}const s=t(l,[["render",n],["__file","4e-tweak.html.vue"]]),d=JSON.parse('{"path":"/zh/4-warlock/4e-tweak.html","title":"4E.动态调节","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"bug-slash","category":["术士","调试"],"description":"4E.动态调节 可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。 4E.1.实现原理 在SilencerCurse模块中，存在以下结构类似的类，用于全局控制 TweakClock - 调试时钟 TweakLogger - 调试日志级别，仅限于Logback TweakStack - 调试CodeException的异常堆栈 其原...","GIT_REPO_HEAD":"2025-02-02 9cab7f71f34df19a1b0adffd87fa71dbbe019019","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/4-warlock/4e-tweak.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/4-warlock/4e-tweak.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"4E.动态调节"}],["meta",{"property":"og:description","content":"4E.动态调节 可以在运行时，按全局或线程级别，动态的设置系统时钟，日志级别，异常堆栈。 4E.1.实现原理 在SilencerCurse模块中，存在以下结构类似的类，用于全局控制 TweakClock - 调试时钟 TweakLogger - 调试日志级别，仅限于Logback TweakStack - 调试CodeException的异常堆栈 其原..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-01-09T11:57:11.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T11:57:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4E.动态调节\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T11:57:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"4E.1.实现原理","slug":"_4e-1-实现原理","link":"#_4e-1-实现原理","children":[]},{"level":2,"title":"4E.2.使用方法","slug":"_4e-2-使用方法","link":"#_4e-2-使用方法","children":[]},{"level":2,"title":"4E.3.注意事项","slug":"_4e-3-注意事项","link":"#_4e-3-注意事项","children":[]}],"git":{"createdTime":1667209534000,"updatedTime":1736423831000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":10,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"zh/4-warlock/4e-tweak.md","localizedDate":"2022年10月31日","autoDesc":true}');export{s as comp,d as data};
