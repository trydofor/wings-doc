import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as i,e as l}from"./app-D1G0Arv-.js";const n={},c=l('<h1 id="_1a-conf自动配置" tabindex="-1"><a class="header-anchor" href="#_1a-conf自动配置"><span>1A.Conf自动配置</span></a></h1><p>支持配置文件的<code>分割</code>，<code>覆盖</code>，<code>禁用</code>和<code>profile</code>，更有利于工程化的管理。</p><ul><li>分割 - 指配置项可以按模块，功能，自由组成独立的配置文件</li><li>覆盖 - 配置项按一定的优先级（加载顺序）可以覆盖</li><li>禁用 - 可以通过block-list，禁止某配置文件加载</li><li>profile，同spring规则。</li></ul><p>wings对配置文件的处理方式，是<code>层叠</code>和<code>过滤</code>，配置以路径顺序和编号大小排序。</p><ul><li>层叠 - 按优先级（前面的高）排序，高的叠住低的</li><li>过滤 - 通过profile进行排他过滤</li></ul><h2 id="_1a-1-分割config" tabindex="-1"><a class="header-anchor" href="#_1a-1-分割config"><span>1A.1.分割Config</span></a></h2><p>实际项目开发中，只有一个大的<code>application.*</code>，不利于分工和协作，应该分隔，</p><ul><li>spring-datasource.properties</li><li>spring-mail-79.properties</li><li>logger-logback-79.properties</li></ul><p>通过<code>EnvironmentPostProcessor</code>扫描<code>各路径</code>中<code>/wings-conf/**/*.*</code>，规则同 <a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#features.external-config" target="_blank" rel="noopener noreferrer">Externalized Configuration</a> ，和配置文件有关的<code>各路径</code>如下，其后者优先级高（为与spring文档叙述一致，程序中倒序执行，FIFO优先级）。</p><ol start="0"><li>路径中，优先加载<code>application.*</code>，次之<code>wings-conf/**/*.*</code></li><li>以<code>/</code>结尾的当做目录，否则作为文件</li><li>任何非<code>classpath:</code>,<code>classpath*:</code>的，都以<code>file:</code>扫描</li><li><code>classpath:/</code>会被以<code>classpath*:/</code>扫描</li><li>default <code>classpath:/,classpath:/config/,file:./,file:./config/</code></li><li>OS environment variables. <code>SPRING_CONFIG_LOCATION</code></li><li>Java System properties <code>spring.config.location</code></li><li>Command line arguments. `--spring.config.location</li></ol><p>每个配置文件都由以下部分构成:<code>dirname</code> + <code>basename</code> + <code>seq</code> + <code>profile</code> + <code>extname</code>. 例如, <code>classpath:/wings-conf/</code> + <code>wings-mirana</code> + <code>-79</code> + <code>@dev</code> + <code>.properties</code>.</p><p>目前只加载 <code>*.yml</code>, <code>*.yaml</code>,<code>*.xml</code>, <code>*.properties</code>扩展名的配置文件。 工程提供的默认配置，文件名字后面都会加上<code>-79</code>，方便根据文件名排序设置默认值。</p><p>相同<code>basename</code>为同一配置，无序号的视序号为<code>70</code>，比默认的<code>79</code>要高，会覆盖默认配置。 配置文件，以Resource首先按扫描顺序排序，然后按base归类，按seq升序调整（值覆盖有关）。</p><p>所有配置文件必须为UTF8编码，可以更好的支持unicode，可以直接写中文注释或内容。 Wings在装载配置时对非ascii进行自动转义，以兼容spring默认的按byte读取行为。</p><h2 id="_1a-2-配置profile" tabindex="-1"><a class="header-anchor" href="#_1a-2-配置profile"><span>1A.2.配置Profile</span></a></h2><p>文件名不含<code>@</code>，<code>profile</code>名不包括<code>.</code>，以避免解析错误。和spring对比如下，</p><ul><li><code>application.properties</code></li><li><code>application-{profile}.properties</code></li><li><code>wings-conf/wings-test-module-79.properties</code></li><li><code>wings-conf/wings-test-module-79@{profile}.properties</code></li></ul><p>相同<code>basename</code>的config视为同一组，并移除非活动的profile配置， 以<code>@</code>区分profile，因为wings的配置文件名中存在<code>-</code>，无法兼容spring格式。 在使用<code>spring.profiles.active</code>时，要确保配置文件按spring约定加载。</p><p>wings和spring的profile在处理上也有区别，默认wings优先于spring处理。</p><ul><li>application-{profile}，wings扫描排序，spring处理</li><li>wings-conf/layered-config@{profile}，wings扫描及处理</li><li>有profile叠住无profile的配置，多个激活profile层叠覆盖</li><li>避免在wings-conf/中存在application命名的配置，导致spring和wings双重处理</li></ul><p>SpringBoot仅支持单application配置，多profile形式，所以配置文件上仅有路径优先级。 多profile时，处理顺序为①排除非激活 ②激活的排字符序（后者优先）③无profile的垫底。</p><p>Wings支持多配置，多profile，其路径优先级和profile优先级与spring一致。 在多配置优先级，处理顺序为 ①profile ②路径 ③文件序号 ④字符顺序（前者优先）</p><h2 id="_1a-3-加载黑名单" tabindex="-1"><a class="header-anchor" href="#_1a-3-加载黑名单"><span>1A.3.加载黑名单</span></a></h2><p>存在于<code>/wings-conf/wings-conf-block-list.cnf</code>的文件名，不会自动加载。</p><ul><li>一行一个文件名，区分大小写</li><li><code>#</code>开头标识注释，自动忽略首尾空白</li><li>以<code>String.endWith</code>判断，全路径精确匹配</li><li>排除单个<code>@profile</code>的配置文件，需要单独指定</li></ul><h2 id="_1a-4-配置项提升" tabindex="-1"><a class="header-anchor" href="#_1a-4-配置项提升"><span>1A.4.配置项提升</span></a></h2><p>有些非Spring体系的功能，通过System.getProperties获得属性。 因此需要把需要的配置项，从spring写入System.properties。</p><ul><li>System若不存在，则写入，即 <code>-Dkey=value</code>优先级最高</li><li>变量名保存在<code>/wings-conf/wings-prop-promotion.cnf</code>中</li><li>一行一个属性名，区分大小写，<code>#</code>表注释</li></ul><h2 id="_1a-5-logging-logback" tabindex="-1"><a class="header-anchor" href="#_1a-5-logging-logback"><span>1A.5.logging/logback</span></a></h2><p>参考<code>wings-logging-79.properties</code>配置，默认使用springboot配置。</p><ul><li>只需要console输出（如果docker内）不需要额外设置</li><li>同时需要console和file时，增加以下配置<code>logging.file.name=/tmp/wings-example.log</code></li><li>只需要file时，再增加<code>logging.config=classpath:logback-fileonly.xml</code></li><li>可按名字配置appender日志级别，若存在FILE时，CONSOLE自动切到WARN以上(仅logback)</li></ul><p>推荐的logging配置，默认INFO，指定包名的DEBUG</p><ul><li>logging.level.root=INFO</li><li>logging.level.org.springframework.web=DEBUG</li><li>logging.level.org.jooq=DEBUG</li><li>logging.level.忽略的包路径=OFF</li></ul><p>推荐使用<code>wings-starter.sh</code>启动，用<code>wings-starter.env</code>设置基础参数。</p><h2 id="_1a-6-动态调节" tabindex="-1"><a class="header-anchor" href="#_1a-6-动态调节"><span>1A.6.动态调节</span></a></h2><p>根据业务需求，按特定条件，触发线程级的日志输出。</p><ul><li>TweakLogger - 仅支持logback，通过LogbackFilter完成</li><li>TweakClock - 全局或线程级调整时间</li><li>TweakStack - 全局或线程级是否输出Stack</li><li>TweakFeature - 全局或线程级开关功能</li></ul><h2 id="_1a-7-参考资料" tabindex="-1"><a class="header-anchor" href="#_1a-7-参考资料"><span>1A.7.参考资料</span></a></h2><p><a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/" target="_blank" rel="noopener noreferrer">参考资料 docs.spring.io</a></p><ul><li>&quot;4.1.6. Application Events and Listeners&quot;</li><li>&quot;4.2. Externalized Configuration&quot;</li><li>&quot;9.2.3. Change the Location of External Properties of an Application&quot;</li><li>&quot;9.1.3. Customize the Environment or ApplicationContext Before It Starts&quot;</li></ul>',40),a=[c];function r(t,p){return i(),o("div",null,a)}const g=e(n,[["render",r],["__file","1a-wings-conf.html.vue"]]),f=JSON.parse('{"path":"/zh/1-silencer/1a-wings-conf.html","title":"1A.Conf自动配置","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"gear","category":["沉默","配置"],"description":"1A.Conf自动配置 支持配置文件的分割，覆盖，禁用和profile，更有利于工程化的管理。 分割 - 指配置项可以按模块，功能，自由组成独立的配置文件 覆盖 - 配置项按一定的优先级（加载顺序）可以覆盖 禁用 - 可以通过block-list，禁止某配置文件加载 profile，同spring规则。 wings对配置文件的处理方式，是层叠和过滤，配...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/1-silencer/1a-wings-conf.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/1-silencer/1a-wings-conf.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"1A.Conf自动配置"}],["meta",{"property":"og:description","content":"1A.Conf自动配置 支持配置文件的分割，覆盖，禁用和profile，更有利于工程化的管理。 分割 - 指配置项可以按模块，功能，自由组成独立的配置文件 覆盖 - 配置项按一定的优先级（加载顺序）可以覆盖 禁用 - 可以通过block-list，禁止某配置文件加载 profile，同spring规则。 wings对配置文件的处理方式，是层叠和过滤，配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1A.Conf自动配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"1A.1.分割Config","slug":"_1a-1-分割config","link":"#_1a-1-分割config","children":[]},{"level":2,"title":"1A.2.配置Profile","slug":"_1a-2-配置profile","link":"#_1a-2-配置profile","children":[]},{"level":2,"title":"1A.3.加载黑名单","slug":"_1a-3-加载黑名单","link":"#_1a-3-加载黑名单","children":[]},{"level":2,"title":"1A.4.配置项提升","slug":"_1a-4-配置项提升","link":"#_1a-4-配置项提升","children":[]},{"level":2,"title":"1A.5.logging/logback","slug":"_1a-5-logging-logback","link":"#_1a-5-logging-logback","children":[]},{"level":2,"title":"1A.6.动态调节","slug":"_1a-6-动态调节","link":"#_1a-6-动态调节","children":[]},{"level":2,"title":"1A.7.参考资料","slug":"_1a-7-参考资料","link":"#_1a-7-参考资料","children":[]}],"git":{"createdTime":1655901635000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":4.15,"words":1245},"filePathRelative":"zh/1-silencer/1a-wings-conf.md","localizedDate":"2022年6月22日","autoDesc":true}');export{g as comp,f as data};
