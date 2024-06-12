import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o,e as r}from"./app-D1G0Arv-.js";const n={},a=r('<h1 id="_9b4-多数据源操作" tabindex="-1"><a class="header-anchor" href="#_9b4-多数据源操作"><span>9B4.多数据源操作</span></a></h1><p>Wings默认单数据源，当出现多数据源需求时，使用Jooq的思路和注意事项。</p><h2 id="_9b4-1-springboot手动" tabindex="-1"><a class="header-anchor" href="#_9b4-1-springboot手动"><span>9B4.1.SpringBoot手动</span></a></h2><p>特点：手动控制，掌控每一个操作。</p><blockquote><p>If you need to use jOOQ with multiple data sources, you should create your own DSLContext for each one. See JooqAutoConfiguration for more details.</p><p>In particular, JooqExceptionTranslator and SpringTransactionProvider can be reused to provide similar features to what the auto-configuration does with a single DataSource.</p></blockquote><p>根据<a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.data-access.configure-jooq-with-multiple-datasources" target="_blank" rel="noopener noreferrer">Configure jOOQ with Two DataSources</a>，设置多个DSLContext即可。</p><p>但不能使用默认注入Dao操作，因其默认使用@Primary数据源。对数据的操作，</p><ul><li>使用DSLContext操作数据</li><li>先new Dao，然后setConfiguration(dsl.configuration())</li></ul><h2 id="_9b4-2-jooq自动" tabindex="-1"><a class="header-anchor" href="#_9b4-2-jooq自动"><span>9B4.2.Jooq自动</span></a></h2><p>特点：可根据线程上下文，CURD类型，SQL参数，批量控制。</p><blockquote><p>void start(ExecuteContext ctx); Overridable attributes in ExecuteContext:</p><p>ExecuteContext.connectionProvider(ConnectionProvider): The connection provider used for execution. This may be particularly interesting if a Query was de-serialised and is thus lacking the underlying connection</p></blockquote><p>通过ExecuteListener执行时切换数据源，步骤如下，</p><ul><li>定义多数据源的ConnectionProvider</li><li>实现 ExecuteListener.start(ExecuteContext)</li><li>设置执行数据源 ExecuteContext.connectionProvider()</li></ul><h2 id="_9b4-3-shardingsphere自动" tabindex="-1"><a class="header-anchor" href="#_9b4-3-shardingsphere自动"><span>9B4.3.ShardingSphere自动</span></a></h2><p>特点：依照分库的思路，切换数据源。</p><p>在不改变代码的情况下，使用ShardingSphere配置，在运行时自动切换数据。</p>',16),i=[a];function s(l,c){return o(),t("div",null,i)}const u=e(n,[["render",s],["__file","9b4.multi-datasource.html.vue"]]),h=JSON.parse('{"path":"/zh/9-example/9b.spring-boot/9b4.multi-datasource.html","title":"9B4.多数据源操作","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"leaf","category":["实战","基础"],"description":"9B4.多数据源操作 Wings默认单数据源，当出现多数据源需求时，使用Jooq的思路和注意事项。 9B4.1.SpringBoot手动 特点：手动控制，掌控每一个操作。 If you need to use jOOQ with multiple data sources, you should create your own DSLContext f...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/9-example/9b.spring-boot/9b4.multi-datasource.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/9-example/9b.spring-boot/9b4.multi-datasource.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"9B4.多数据源操作"}],["meta",{"property":"og:description","content":"9B4.多数据源操作 Wings默认单数据源，当出现多数据源需求时，使用Jooq的思路和注意事项。 9B4.1.SpringBoot手动 特点：手动控制，掌控每一个操作。 If you need to use jOOQ with multiple data sources, you should create your own DSLContext f..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-18T08:37:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-18T08:37:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9B4.多数据源操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T08:37:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9B4.1.SpringBoot手动","slug":"_9b4-1-springboot手动","link":"#_9b4-1-springboot手动","children":[]},{"level":2,"title":"9B4.2.Jooq自动","slug":"_9b4-2-jooq自动","link":"#_9b4-2-jooq自动","children":[]},{"level":2,"title":"9B4.3.ShardingSphere自动","slug":"_9b4-3-shardingsphere自动","link":"#_9b4-3-shardingsphere自动","children":[]}],"git":{"createdTime":1667004352000,"updatedTime":1687077446000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":1}]},"readingTime":{"minutes":1.02,"words":305},"filePathRelative":"zh/9-example/9b.spring-boot/9b4.multi-datasource.md","localizedDate":"2022年10月29日","autoDesc":true}');export{u as comp,h as data};
