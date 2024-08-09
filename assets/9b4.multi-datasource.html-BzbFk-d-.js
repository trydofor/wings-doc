import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,e as o}from"./app-CfZymbb7.js";const r={},i=o('<h1 id="_9b4-multiple-datasource" tabindex="-1"><a class="header-anchor" href="#_9b4-multiple-datasource"><span>9B4.Multiple DataSource</span></a></h1><p>Wings uses single data source by default, when there are multiple data sources, the ideas and considerations of using Jooq.</p><h2 id="_9b4-1-springboot-manually" tabindex="-1"><a class="header-anchor" href="#_9b4-1-springboot-manually"><span>9B4.1.SpringBoot Manually</span></a></h2><p>Features: Manual control, control every operation.</p><blockquote><p>If you need to use jOOQ with multiple data sources, you should create your own DSLContext for each one. See JooqAutoConfiguration for more details.</p><p>In particular, JooqExceptionTranslator and SpringTransactionProvider can be reused to provide similar features to what the auto-configuration does with a single DataSource.</p></blockquote><p>According to<a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto.data-access.configure-jooq-with-multiple-datasources" target="_blank" rel="noopener noreferrer">Configure jOOQ with Two DataSources</a>, Just set multiple DSLContext.</p><p>However, you cannot use the default Dao injection, because it uses the @Primary data source by default. operations on data.</p><ul><li>Use DSLContext to manipulate data</li><li>first new Dao, then setConfiguration(dsl.configuration())</li></ul><h2 id="_9b4-2-jooq-automatically" tabindex="-1"><a class="header-anchor" href="#_9b4-2-jooq-automatically"><span>9B4.2.Jooq Automatically</span></a></h2><p>Features: Batch control via the thread context, CURD type, SQL parameters.</p><blockquote><p>void start(ExecuteContext ctx); Overridable attributes in ExecuteContext:</p><p>ExecuteContext.connectionProvider(ConnectionProvider): The connection provider used for execution. This may be particularly interesting if a Query was de-serialised and is thus lacking the underlying connection</p></blockquote><p>Switch datasource at execution time using ExecuteListener, the steps are as follows</p><ul><li>Define the ConnectionProvider for multiple datasources</li><li>Implement ExecuteListener.start(ExecuteContext)</li><li>Set the execution datasource ExecuteContext.connectionProvider()</li></ul><h2 id="_9b4-3-shardingsphere-automatically" tabindex="-1"><a class="header-anchor" href="#_9b4-3-shardingsphere-automatically"><span>9B4.3.ShardingSphere Automatically</span></a></h2><p>Features: Switch data sources according to the idea of R/W separation.</p><p>Automatically switch data at runtime without changing the code, using ShardingSphere configuration.</p>',16),n=[i];function l(s,c){return a(),t("div",null,n)}const d=e(r,[["render",l],["__file","9b4.multi-datasource.html.vue"]]),h=JSON.parse('{"path":"/9-example/9b.spring-boot/9b4.multi-datasource.html","title":"9B4.Multiple DataSource","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"leaf","category":["Practice","Knowledge"],"description":"9B4.Multiple DataSource Wings uses single data source by default, when there are multiple data sources, the ideas and considerations of using Jooq. 9B4.1.SpringBoot Manually Fea...","GIT_REPO_HEAD":"2024-08-09 96de5f3516d8a63745329bc5d9552c3dafb6ff53","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/9-example/9b.spring-boot/9b4.multi-datasource.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/9-example/9b.spring-boot/9b4.multi-datasource.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"9B4.Multiple DataSource"}],["meta",{"property":"og:description","content":"9B4.Multiple DataSource Wings uses single data source by default, when there are multiple data sources, the ideas and considerations of using Jooq. 9B4.1.SpringBoot Manually Fea..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T08:37:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-18T08:37:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9B4.Multiple DataSource\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T08:37:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9B4.1.SpringBoot Manually","slug":"_9b4-1-springboot-manually","link":"#_9b4-1-springboot-manually","children":[]},{"level":2,"title":"9B4.2.Jooq Automatically","slug":"_9b4-2-jooq-automatically","link":"#_9b4-2-jooq-automatically","children":[]},{"level":2,"title":"9B4.3.ShardingSphere Automatically","slug":"_9b4-3-shardingsphere-automatically","link":"#_9b4-3-shardingsphere-automatically","children":[]}],"git":{"createdTime":1667004352000,"updatedTime":1687077446000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":3}]},"readingTime":{"minutes":0.77,"words":232},"filePathRelative":"9-example/9b.spring-boot/9b4.multi-datasource.md","localizedDate":"October 29, 2022","autoDesc":true}');export{d as comp,h as data};