import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as d,b as e,e as n,d as a,w as p,f as s}from"./app-7d38ae22.js";const r={},u=s('<h1 id="_0a-编码风格" tabindex="-1"><a class="header-anchor" href="#_0a-编码风格" aria-hidden="true">#</a> 0A.编码风格</h1><p>Wings项目实践中，主张防御式编程，秉承以下价值观和哲学，</p><ul><li>静态优于动态 - 能编码的，就不要反射</li><li>强类型优于弱类型 - 能class或enum，就不要map或const</li><li>编译时优于运行时 - 能编译时解决的，就不要到运行时处理</li><li>IDE优于Editor - 有上下文语法的，就不要字符串查找</li><li>奥卡姆剃刀 - 能简单的就不要复杂，能明示的就不要暗示</li><li>命名必须明确 - 明确业务语义，可读性优先，不怕长，不怕怪</li><li>边界外参数不可信 - 边界层做验证和转换，边界内则都可信</li></ul><p>防御式编程，处处考虑边界和异常，May The <code>false</code> Be With You !</p><h2 id="_0a-1-java代码可读性优先" tabindex="-1"><a class="header-anchor" href="#_0a-1-java代码可读性优先" aria-hidden="true">#</a> 0A.1.Java代码可读性优先</h2><p>遵循标准的java规范（Idea提示即可），但可读性优先。</p><ul><li><code>static final</code> 不必全大写。如<code>log</code>比<code>LOG</code>可读性好</li><li><code>BIG_SNAKE</code>可使用<code>PascalNaming</code>，因为大写单词不如小写易读</li><li>全大写名词（缩写或专有）只首字母大写驼峰法。<code>Json</code>,<code>Html</code>,<code>Id</code></li><li>前缀，后缀及缩写，必须2个字母起，建议3个字母（驼峰法）</li><li>英文无法明确的行业黑话，可使用中文，但不建议用拼音。</li><li>要求4-8字母的单词都记住，命名采用动宾或副词结构。</li><li>以Empty消除null，Set/List/Array/Map用empty</li><li>显示标注@NotNull，@Nullable，@Contract，声明null约束</li><li>正向的业务语义，使用正向的词汇，参数等，如true</li><li>使用<code>@Param.InOut/Out</code>及相应的后缀注解可被修改参数</li></ul>',7),m={href:"https://java-code-review.moilioncircle.com",target:"_blank",rel:"noopener noreferrer"},k=s('<h2 id="_0a-2-sql命名snake-case" tabindex="-1"><a class="header-anchor" href="#_0a-2-sql命名snake-case" aria-hidden="true">#</a> 0A.2.Sql命名snake_case</h2><p>即全小写，下划线分割。因实践中发现，小写词比大写容易识别。</p><ul><li>数据库，表名，字段名，全小写。</li><li>SQL关键词，内置词等建议<code>大写</code>，以区别。</li><li><code>index</code>以<code>ix_</code>,<code>uq_</code>,<code>ft_</code>,<code>pk_</code>区分索引类型。</li><li><code>trigger</code>以<code>(ai|au|db)__</code>表示触发的时机。</li></ul><p>wings主张业务表SQL化，即使用SQL管理表及数据，而GUI或对象映射都是辅助功能。 SQL脚本可以很好的编辑，比较，文档化，包括业务表的分层，编号及注释格式。</p><ul><li>表<code>编号/名字:解释</code> - 105/常量枚举:自动生成enum类</li><li>字段<code>注释/解释:选项1|选项2</code> - 验证账号/身份辨识:邮箱|手机|union_id|api_key</li></ul><p>编号由业务层规划，如10x为系统，11x为应用，12x为用户，13x为权限，2xx为商品，3xx为订单等。</p><h2 id="_0a-3-配置类properties优先" tabindex="-1"><a class="header-anchor" href="#_0a-3-配置类properties优先" aria-hidden="true">#</a> 0A.3.配置类properties优先</h2><p>尽量使用<code>properties</code>格式，因<code>yml</code>的缩进在局部编辑时，容易出现困扰。</p><ul><li>一组有关联的属性，放在一个<code>properties</code>，分成文件便于版本管理</li><li><code>spring-wings-enabled.properties</code>用于ConditionalOnProperty配置 <ul><li>统一使用<code>spring.wings.**.enabled.*=true|false</code>格式</li><li>多模块时，模块本身为<code>spring.wings.**.enabled.module=true</code></li></ul></li><li><code>spring-*</code>放置spring官方配置key</li><li><code>wings-*</code>放置wings配置key， <ul><li>带有工程或模块代号，如<code>wings.slardar.*</code></li><li>提供默认配置，使用<code>-79</code>序号</li></ul></li><li>推荐<code>kebab-caseae</code>命名，即<code>key</code>全小写，使用<code>-</code>分割</li><li>说明类型的注释，使用两个单号注释，如Properties中<code>##</code></li><li>功能关闭类的注释，使用单个单行注释，如Properties中<code>#</code></li></ul><h2 id="_0a-4-spring注入注意事项" tabindex="-1"><a class="header-anchor" href="#_0a-4-spring注入注意事项" aria-hidden="true">#</a> 0A.4.spring注入注意事项</h2><ul><li>优先使用<code>constructor</code>注入，用<code>lombok</code>的<code>@RequiredArgsConstructor</code></li><li>次之使用<code>setter</code>注入，用<code>lombok</code>的<code>@Setter(onMethod_ = {@Autowired})</code> 或<code>kotlin</code>的<code>@Autowired lateinit var</code></li><li>尽量避免使用<code>Field</code>注入，坏处自己搜一搜</li><li>通常required时constructor注入，optional时setter注入</li><li>但注入过多，使参数列表过长，影响理解和使用时， 使用setter注入，加上<code>afterPropertiesSet</code>检查</li></ul><p>使用<code>@Resource</code>，<code>@Inject</code>和<code>@Autowired</code>，有细微差别，</p><ul><li>Resource由CommonAnnotationBeanPostProcessor处理， 查找顺序为①BeanName ②BeanType ③Qualifier</li><li>Autowired和Inject由AutowiredAnnotationBeanPostProcessor处理， 查找顺序为①BeanType ②Qualifier ③BeanName</li><li>type优先用Autowired和Inject，name优先用Resource(细粒度，难控制)</li><li>在spring体系下推荐<code>@Autowired</code>，考虑兼容性用<code>@Inject</code></li></ul><p>继承父类时的注入规定（类无法得知是否被继承）</p><ul><li>父类中有@Setter注入时，字段以protected替代private</li><li>不希望子类覆盖时，需要final setter，避免父类无法注入</li><li>继承时，一旦父类有setter，请不要override，除非确保DI无碍</li><li>继承时，不希望父类DI，可子类override，并自行注入</li></ul><h2 id="_0a-5-requestmapping风格" tabindex="-1"><a class="header-anchor" href="#_0a-5-requestmapping风格" aria-hidden="true">#</a> 0A.5.RequestMapping风格</h2>',16),v=s(`<ul><li>在方法上写全路径<code>@RequestMapping(&quot;/a/b/c.html&quot;)</code></li><li>在controller上写版本号<code>@RequestMapping(&quot;/v1&quot;)</code></li><li>不要相写相对路径，这样才可以通过URL直接搜索匹配</li><li>不要使用prefix拼接路径(view，url)，避免无意义的碎片</li><li>不管REST还是其他，url必须有扩展名，用来标识MIME和过滤</li></ul><h2 id="_0a-6-service和dto约定" tabindex="-1"><a class="header-anchor" href="#_0a-6-service和dto约定" aria-hidden="true">#</a> 0A.6.Service和Dto约定</h2><p>interface上使用annotation时，遵循以下规则，</p><ul><li><code>@Component</code>类注解，不要放在接口上，放在具体实现上</li><li>功能约定类，放在接口上，如<code>@Transactional</code></li></ul><p>Service定义为接口，Service中的Dto，定义为内类，作为锲约。 Dto间的转换和复制，使用工具类生成Helper静态对拷属性。 禁止使用反射，不仅是因为性能损失，主要是动态性，脱离了编译时检查。</p><p>直接单向输出的model对象，可以使用map，否则一定强类型的class。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TradeService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Getter</span>
    <span class="token annotation punctuation">@RequiredArgsConstructor</span>
    <span class="token keyword">enum</span> <span class="token class-name">Err</span> <span class="token keyword">implements</span> <span class="token class-name">CodeEnum</span> <span class="token punctuation">{</span>
        <span class="token class-name">RateFailed</span><span class="token punctuation">(</span><span class="token string">&quot;fedex.rate.unknown&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fedex查询价格错误&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">;</span>

        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> code<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> hint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Data</span>
    <span class="token keyword">class</span> <span class="token class-name">TradeInfo</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">long</span> orderId<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> amountOrder<span class="token punctuation">;</span>
        <span class="token comment">// others</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* docs */</span>
    <span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">MoneyInfo</span> ai<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">TradeInfo</span> ti<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Journal</span> journal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0a-7-枚举类和code-const值" tabindex="-1"><a class="header-anchor" href="#_0a-7-枚举类和code-const值" aria-hidden="true">#</a> 0A.7.枚举类和code/const值</h2><p>因强类型原则，所有code和const都应该变成enum，在业务层传递。</p><ul><li>在service层，通过自动java模板生成enum，通过<code>*EnumUtil</code>，转换</li><li>在db层，以基本类型(int,varchar)读取和写入</li><li>在用户层，以多国语形式显示枚举内容</li><li>不能enum的魔法值，使用@MagicConstant标注</li></ul><h2 id="_0a-8-maven管理的约定" tabindex="-1"><a class="header-anchor" href="#_0a-8-maven管理的约定" aria-hidden="true">#</a> 0A.8.maven管理的约定</h2><ul><li>多模块有主工程（parent|packaging=pom）和子工程（module|packaging=jar）</li><li>主工程在dependencyManagement定义lib，不管理具体dependency</li><li>子工程自己管理dependency，不可以重新定义版本号</li><li>依赖冲突时，maven遵循路径最短原则，所以在就近工程重新定义</li></ul><h2 id="_0a-9-api测试及文档约定" tabindex="-1"><a class="header-anchor" href="#_0a-9-api测试及文档约定" aria-hidden="true">#</a> 0A.9.Api测试及文档约定</h2><p>wings默认开启swagger，访问路径为<code>/swagger-ui/index.html</code></p><p>因swagger注解容易使doc部分冗长，且SpringDoc做了比较智能的推导， 所以在能够表述清楚时，建议简化注解，参考以下注解。</p><ul><li>@Operation，以tag,summary,description等表述清楚</li><li>@Schema，输入或输出对象</li><li>@Parameter， 输入参数</li><li>@ApiResponse，必要时使用</li></ul><p>在description中，支持Markdown，辅助jsdoc，可使文档更加清晰。</p>`,17),h={href:"https://jsdoc.app/tags-param.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://jsdoc.app/tags-returns.html",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[e("code",null,"@param [name=trydofor] - Somebody's name.")],-1),_=e("li",null,[e("code",null,"@return {200|Result(Dto)} 正常返回对象，status=200"),n(" - 小括号表示泛型(避免转义)。")],-1),f=e("li",null,[e("code",null,"@return {200|Result(false)} 错误时返回，status=200"),n(" - 小括号表示简单约定参数。")],-1),A=s(`<p>使用swagger时，不可使用弱口令，在正式服上可通过以下属性关闭。</p><ul><li>springdoc.api-docs.enabled=true</li><li>springdoc.swagger-ui.enabled=true</li></ul><h2 id="_0a-a-resource结构" tabindex="-1"><a class="header-anchor" href="#_0a-a-resource结构" aria-hidden="true">#</a> 0A.A.resource结构</h2><p>文件或包，一般以wings或项目代号为前缀。前缀表示统一服务，项目代号为项目特有。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src/main/resources
├── META-INF - spring 自动配置入口等
│   └── spring.factories - EnableAutoConfiguration入口
├── extra-conf/ - 非自动加载的其他配置
├── wings-conf/ - wings自动加载配置 xml|yml|yaml|properties
├── wings-flywave/ - flywave数据库版本管理，
│   ├── branch/* - 分支脚本，如维护，功能
│   └── master/* - 主线脚本，上线中
└── wings-i18n/ - wings自动加载 bundle
│   ├── base-validator_en.properties - 英文版
│   └── base-validator_ja.properties - 日文版
└── application.properties - spring 默认配置，用于覆盖wings
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0a-b-自动配置结构" tabindex="-1"><a class="header-anchor" href="#_0a-b-自动配置结构" aria-hidden="true">#</a> 0A.B.自动配置结构</h2><p>wings对<code>spring/bean</code>包有特殊处理，可以自动 @ComponentScan</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>src/**/spring - spring有个配置
├── bean/ - 自动扫描，产生可被Autowired的Bean
│   └── WingsLightIdConfiguration.java - 内部用项目前缀，对外使用Wings前缀
├── boot/ - spring boot 配置用，不产生Bean
│   └── WingsAutoConfiguration.java - 兼容IDE和starter的配置入口
├── conf/ - 配置辅助类Configurer
├── help/ - 工具辅助类
└── prop/ - 属性类，自动生成spring-configuration-metadata.json
    └── FacelessEnabledProp.java - 开关类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>@Configuration</code>类中配置<code>@Bean</code>时，对其依赖的注入，遵循以下原则，</p><ul><li>优先使用Constructor+final形式</li><li>使用Bean声明方法的参数</li><li>可使用Config的Field注入</li><li>避免使用Config的Setter注入，因为不能及时暴露依赖错误</li><li>一般方法的Autowired用于工具类初始化</li></ul><h2 id="_0a-c-常见的命名约定" tabindex="-1"><a class="header-anchor" href="#_0a-c-常见的命名约定" aria-hidden="true">#</a> 0A.C.常见的命名约定</h2><ul><li>接口默认实现为<code>Default*</code></li><li>适配器类为<code>*Adapter</code></li></ul><p>常用命名组合，单词顺序和词义尽量保持一致，可读性优先。</p><ul><li>Ins/Out</li><li>Query/Reply</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Service中Journal 枚举类</span>
<span class="token keyword">enum</span> <span class="token class-name">Jane</span> <span class="token punctuation">{</span>
    <span class="token class-name">Create</span><span class="token punctuation">,</span> <span class="token comment">// 新建</span>
    <span class="token class-name">Modify</span><span class="token punctuation">,</span> <span class="token comment">// 修改</span>
    <span class="token class-name">Remove</span><span class="token punctuation">,</span> <span class="token comment">// 逻辑删除</span>
    <span class="token class-name">Delete</span><span class="token punctuation">,</span> <span class="token comment">// 物理删除</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0a-d-event同步内部优先" tabindex="-1"><a class="header-anchor" href="#_0a-d-event同步内部优先" aria-hidden="true">#</a> 0A.D.Event同步内部优先</h2><ul><li>内部Event，内部Publish，内部Listen</li><li>能内部Listen的，就不用外部的Subscribe</li><li>能同步的，就不用异步</li></ul><h2 id="_0a-e-有关过度设计和技术债务" tabindex="-1"><a class="header-anchor" href="#_0a-e-有关过度设计和技术债务" aria-hidden="true">#</a> 0A.E.有关过度设计和技术债务</h2><p>因为需求的渐进明细，外部的环境变化，几乎所有业务系统的开发都是演进式。 基于以上事实，在实际交付中，力求完美很容易误人误事，应该遵循以下规则：</p><ul><li>仅做高出能力的10%的挑战，小于20%的远见</li><li>任何技术或方案的妥协都不得牺牲质量，做事不可糊弄</li><li>每次迭代，偿还10%-20%的技术债务</li></ul><h2 id="_0a-f-时间是神奇的类型" tabindex="-1"><a class="header-anchor" href="#_0a-f-时间是神奇的类型" aria-hidden="true">#</a> 0A.F.时间是神奇的类型</h2><p>系统内有2种时间<code>系统时间</code>和<code>本地时间</code>，数据库和java类型映射上，</p><ul><li><code>日期时间</code>，以<code>DATETIME</code>或<code>DATETIME(3)</code>和<code>LocalDateTime</code>存储</li><li><code>日期</code>，以<code>DATE</code>和<code>LocalDate</code>存储</li><li><code>时间</code>，以<code>TIME</code>或<code>TIME(3)</code>和<code>LocalTime</code>存储</li><li><code>时区</code>，以<code>VARCHAR(40)</code>或<code>INT(11)</code>存储</li><li>特别场景，以<code>BIGINT(20)</code>或<code>VARCHAR(20)</code>存储</li></ul><p>以跨境电商场景为例，服务器群采用<code>UTC</code>时区（系统时间），中国用户<code>Asia/Shanghai</code>（用户时间）, 纽约NY商家<code>America/New_York</code>（数据时间），洛杉矶LA商家<code>America/Los_Angeles</code>（数据时间）。</p><p>本地日时，必须有<code>时区</code>配合，又分为<code>用户时间</code>和<code>数据时间</code>，命名后缀如下，</p><ul><li><code>时区</code> - 以<code>_tz</code>或<code>_zid</code>为后缀，内容为<code>ZoneId</code>的字符串名字</li><li><code>日时</code> -系统/用户/数据，分别以<code>_dt</code>/<code>_udt</code>/<code>_ldt</code>结尾</li><li><code>日期</code> -系统/用户/数据，分别以<code>_dd</code>/<code>_udd</code>/<code>_ldd</code>结尾</li><li><code>时间</code> - 系统/用户/数据，分别以<code>_tm</code>/<code>_utm</code>/<code>_ltm</code>结尾</li></ul><p>举例，北京时间<code>2020-08-09 01:00:00</code>，中国用户C1，分别在NY和LA商家下单。</p><ul><li>Sys_dt(UTC) = <code>2020-08-08 17:00:00</code></li><li>C1_udt(Asia/Shanghai, UTC+8) = <code>2020-08-09 01:00:00</code></li><li>NY_ldt(America/New_York, UTC-4) = <code>2020-08-08 13:00:00</code></li><li>LA_ldt(America/Los_Angeles, UTC-7) = <code>2020-08-08 10:00:00</code></li></ul><p>哎，不对啊，记得纽约是<code>西五区</code>啊，应该<code>UTC-5</code>啊，怎么时间不对呢？ 系统中不要使用<code>UTC-5</code>，所以需要city标志<code>zoneid</code>， 因为同一经线上国家很多，并且时区本非按经线换分，有些区域存在<code>夏令时</code>。</p><p>系统时区，推荐为核心用户所在时区，要考虑UTC是否为最优解。</p><p>于是，以下场景时，我们会用到不同的时间，</p><ul><li>当跟踪系统日志时，我们使用<code>Sys_dt</code>，可以保证统一的时间线</li><li>当统计北美商家<code>上午</code>的营运报表时，我们使用<code>*_ldt</code></li><li>当追求用户体验，用户不关心时区时，用户看到的所有时间都是<code>C1_udt</code></li><li>有些行业惯例（航空，物流）使用本地时间，我们使用<code>*_ldt</code></li></ul><p>按数据的读写比例，在时间存储时，要考虑，</p><ul><li>统计类业务，通常写入时转化，存入用户本地时间（和时区），读取时不转换</li><li>协作类业务，通常写入时，使用系统时间，读取时转换</li></ul><p>如果需要转换时间，需要在用户界面统一（如controller）处理。</p><p>对应java7过来的选手，参考以下替代关系。</p><ul><li>Instant 代替 Date</li><li>LocalDateTime 代替 Calendar</li><li>DateTimeFormatter 代替 SimpleDateFormat</li></ul><h2 id="_0a-g-非科学家别用浮点型" tabindex="-1"><a class="header-anchor" href="#_0a-g-非科学家别用浮点型" aria-hidden="true">#</a> 0A.G.非科学家别用浮点型</h2><p>wings中不应该有浮点类型float/double，而只有整数(int/long)，小数用BigDecimal， 他们对应的数据库类型分别为 INT/BIGINT/DECIMAL。</p><p>但在实践过程中，因科普不到位，一些外部惯性未被消除而污染wings代码，尤其在js体系中更为明显。</p><ul><li><code>0.1</code> + <code>0.2</code> = <code>0.30000000000000004</code></li><li><code>0.12</code> - <code>0.02</code> = <code>0.099999999999999</code></li></ul><p>其根本原因在于IEEE754格式，浮点型不适合非科学计算场景，除科学家外普通人慎用。 <code>Effective Java</code>是java从业人员必备知识，在此不做赘述，参考以下章节： &quot;Avoid Float and Double If Exact Answers Are Required&quot;</p><h2 id="_0a-h-业务数据类型" tabindex="-1"><a class="header-anchor" href="#_0a-h-业务数据类型" aria-hidden="true">#</a> 0A.H.业务数据类型</h2><p>Wings中推荐使用以下类型，主要考虑了sql和json的兼容性，sql主要是mysql和h2database</p><table><thead><tr><th>JAVA</th><th>MYSQL/H2</th><th>JS/JSON</th></tr></thead><tbody><tr><td>Boolean/boolean</td><td>TINYINT(1)/BOOLEAN</td><td>boolean</td></tr><tr><td>Integer/int</td><td>INT/INT(11)</td><td>number</td></tr><tr><td>Long/long</td><td>BIGINT/BIGINT(20)</td><td>BigInt/bigint</td></tr><tr><td>BigDecimal</td><td>DECIMAL(M,D)</td><td>string</td></tr><tr><td>String</td><td>CHAR(N)/VARCHAR(N)/TEXT</td><td>string</td></tr><tr><td>LocalDateTime</td><td>DATETIME(3)</td><td>string</td></tr><tr><td>LocalDate</td><td>DATE</td><td>string</td></tr><tr><td>LocalTime</td><td>TIME(3)</td><td>string</td></tr><tr><td>byte[]</td><td>BLOB</td><td>string(base64_urlsafe)</td></tr></tbody></table><h2 id="_0a-i-实际中如何优雅的消除null" tabindex="-1"><a class="header-anchor" href="#_0a-i-实际中如何优雅的消除null" aria-hidden="true">#</a> 0A.I.实际中如何优雅的消除null</h2><p>如同【攻城狮朋友圈】代码的坏味道所讲，wings工程实际，基本上以empty取代了null。</p><ul><li>若null是业务有效值，需要首先做业务判断。</li><li>若null是业务无效值，应该采用PreCheck或以@NotNull及empty取代</li><li>业务方法，一般提供get()和get(boolean)两类方法 <ul><li>get()用于获取NotNull的业务对象，等同于get(true)，肯定语义</li><li>get(false)用于获取可以为null的业务对象，即否定语义</li></ul></li></ul><p>分情况讲，尽管我们都主张避免使null变成业务有效值，但有时系统外的因素不可控。 常见的数据库，API，JNI，都可能导致null进入数据流。此时，应该在进入业务流之前拦截， 或显示的做null判断，比如 <code>Objects.equals</code>，<code>foo == null</code>等。</p><p>需要注意的是，业界流传一种『高级』秘籍，流行到被视为高级程序猿标配。</p><ul><li><code>!&quot;foo&quot;.equals(bar)</code> 可以安全的处理，bar是null的情况</li><li><code>null != foo</code>，null前置，变成左值。</li></ul><p>这两个小技巧在工程中很容易挖坑，应当引起警觉或避免，大概的不好之处如下。</p><ul><li>equals和hashCode的实现，有基本要求的，并非equals都对null友好。</li><li>混淆了逻辑，容易搞丢逻辑分支，<code>!=null</code>和<code>!=foo</code>是两个分支。 <ul><li>若null是业务值，应该采用<code>Objects.equals</code>显示的合并分支；</li><li>否则应assert或PreCheck，null进入业务逻辑，就意味着沦陷了。</li></ul></li><li>null变左值，破坏一致性，好比Junit中expected和actual互换，攻城狮应该维护一致性。</li></ul><p>理论归理论，实际中都有取舍和无奈，要尊重历史，遵守团队约定。在wings中，这样做，</p><ul><li><code>EmptyValue</code>和<code>EmptySugar</code>，在业务中确立了empty值及工具类</li><li>Collection，Map，Array等集合或容器类型，都需要以Empty返回</li><li><code>Null</code>类，定义了用来代替null的类型和检查方法，包括enum等</li><li>方法签名尽量使用<code>@NotNull</code>注解，是IDE辅助检查，编译时解决</li><li><code>AssertArgs</code>和<code>AssertState</code>进行业务assert，支持多国语</li></ul><h2 id="_0a-j-类型系统的逆变-协变-pecs" tabindex="-1"><a class="header-anchor" href="#_0a-j-类型系统的逆变-协变-pecs" aria-hidden="true">#</a> 0A.J.类型系统的逆变/协变/PECS</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ① 字段使用具体类型，还是抽象类型</span>
<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> field1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> field2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ② 方法返回值</span>
<span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">provide1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">provide2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ③ 方法输入参数</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">consume1</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">consume2</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">CharSequence</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ④ Map的方法签名</span>
<span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token class-name">BiFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">V</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> function<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Wings在编码中鼓励，在保证兼容性（主要是行为特性）的情况下，接口（以嘴做比喻）</p><ul><li>吃的时候 - 输入项尽量抽象，尽量吃的更广</li><li>吐的时候 - 输出项尽量具体，尽量嚼的更碎</li><li>内部东西 - 保持原样，用的人知道特征</li></ul><p>以Map举例来说，输入时，使用Map+superK+extendsV来， 输出时，不要抹杀特征，比如是否SortedMap及RandomAccess</p><ul><li>TreeMap是字典序</li><li>LinkedHashMap是插入序</li><li>HashMap是乱序等</li></ul><h2 id="_0a-k-类和方法的泄露-副作用" tabindex="-1"><a class="header-anchor" href="#_0a-k-类和方法的泄露-副作用" aria-hidden="true">#</a> 0A.K.类和方法的泄露（副作用）</h2><p>Wings把非以下特征的方法，统称为泄露或者副作用</p><ul><li>Pure functions（纯函数）</li><li>referential transparency（透明引用）</li><li>Side Effects(副作用）</li></ul><p>编程中，尽量避免方法泄露，规避隐式变量</p>`,65);function w(y,x){const l=i("ExternalLinkIcon"),o=i("RouterLink");return c(),d("div",null,[u,e("p",null,[n("提高编码质量，升级编程技能，请左转至"),e("a",m,[n("攻城狮的Java代码审查"),a(l)])]),k,e("p",null,[n("Url命名主要是场景化的前缀，参考"),a(o,{to:"/zh/0-wings/0b-rest-half.html"},{default:p(()=>[n("RestHalf")]),_:1}),n("。")]),v,e("ul",null,[e("li",null,[n("参考param "),e("a",h,[n("https://jsdoc.app/tags-param.html"),a(l)])]),e("li",null,[n("参考returns "),e("a",g,[n("https://jsdoc.app/tags-returns.html"),a(l)])]),b,_,f]),A])}const C=t(r,[["render",w],["__file","0a-code-style.html.vue"]]);export{C as default};
