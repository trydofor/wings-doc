import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,b as e,e as n,d as s,f as o}from"./app-8226c3fd.js";const r={},p=o(`<h1 id="_2b-typesafe-dsl-sqlmapping" tabindex="-1"><a class="header-anchor" href="#_2b-typesafe-dsl-sqlmapping" aria-hidden="true">#</a> 2B.Typesafe DSL SqlMapping</h1><blockquote><p>Time Walk, Rushes to a target location while backtracking any damage taken in the last 2 seconds. Faceless Void is invulnerable during Time Walk.</p></blockquote><ul><li>Auto generate the Jooq code, eg. pojo, table, dao.</li><li>Typesafe Jooq ensures the stability of the data changes and refactorings.</li></ul><h2 id="_2b-1-typesafe-database-operation" tabindex="-1"><a class="header-anchor" href="#_2b-1-typesafe-database-operation" aria-hidden="true">#</a> 2B.1.Typesafe Database Operation</h2><p>SqlMapping is recommended because the ORM is too heavy, and Jooq and JdbcTemplate are welcome in the project.</p><p>MyBatis is the first choice for most projects in China, inherent in its excellence, but its lack of constraint power and the laziness of developers makes string-based sql difficult to refactory safely, and the following problems will come easily.</p><ul><li>Often <code>select *</code> queries with lots of useless fields</li><li>Easy to write large complex SQL to difficult to split the service</li><li>String-based and weak type limit the intelligent refactoring of the IDE</li></ul><p>Jooq and its strong types make programming better than configuration, syntax better than strings, SQL expression friendly and just the right amount of ability to limit the ability to do the right things.</p><p>Use <code>WingsCodeGenerator</code> to auto generate jooq code programmatically (without maven). By convention, the generated code is under <code>database/autogen/</code> and the manual code is under <code>database/manual/</code>.</p><p>If you encounter a compilation error caused by wings or jooq and cannot generate code in the current project, you need to create a new small project, only rely on the new version of wings, and run the code generation tool.</p><p>Automatically generated <code>*Dao</code> have a lot of usable methods. They can be used to manipulate the database directly.</p><ul><li><code>getAlias</code> get the alias used for select, <code>Table as az</code><ul><li>At runtime, the Table is unique, named by the excel index format</li><li>When self-naming, use numeric endings to avoid conflicts with the system.</li></ul></li><li><code>getTable</code> get the table for modification without alias, <code>Table</code></li><li>Bulk insert and update large amounts of data, using batch of PreparedStatement</li><li>Use mysql special syntax, <code>insert ignore</code> or <code>replace into</code> to handle duplicate data</li><li>Partially update of unique records using <code>on duplicate key update</code> or <code>select+insert+update</code>.</li></ul><p>Important note, when using alias table and plain table together, you must guarantee that they are come from the same Dao instance, otherwise a syntax error will be thrown.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">val</span> da <span class="token operator">=</span> dao<span class="token punctuation">.</span>alias
<span class="token comment">// val rd = dao.fetch(da.Id.eq(id))</span>
<span class="token comment">// alias and table are different ref, syntax error thrown.</span>
<span class="token comment">// select * from win_user where \`y8\`.\`id\` = ?</span>

<span class="token keyword">val</span> rd <span class="token operator">=</span> dao<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span>da<span class="token punctuation">,</span> da<span class="token punctuation">.</span>Id<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When there are complex data operations and the code must be written by hand, the following conventions are used.</p><ul><li>Any database operations should be done inside the <code>database</code> package</li><li>DSLContext and DataSource should not leave the database layer</li><li><code>single/</code> package, means single table, can contain simple conditional subqueries, one package name for one table</li><li><code>couple/</code> package, means multiple tables, usually join queries or subqueries, package name is named using the main table</li><li>Coupled operations, suggest tagging <code>@CouplingSelect</code>, <code>@CouplingModify</code></li><li><code>select|modify</code> correspond to database operations respectively</li><li>Also <code>select|insert|update|delete</code> can be classified, but with lots of @Autowired</li><li>Data transfer ends with Dto and is placed closest to the use</li><li>Dto exists as a static inner class, use lombok @Value or @Data</li><li><code>forUpdate</code> with lock operation, method name ends with <code>Lock</code></li><li>Class name should be in <code>TableName</code>+<code>Insert|Modify</code></li><li>jooq <code>Record</code> is equivalent to <code>Dao</code> should not be used externally, it should be <code>Pojo</code> or <code>Dto</code> to transfer data</li><li>Mainly use Dao, just do the DSL and other related operations</li></ul><p>In naming, the interface should be named directly , without prefix and suffix, Dto are placed inside the interface as a part of the contract. Implementation classes, placed inside the <code>impl/</code> package, with a suffix to indicate a different way of implementation.</p><ul><li><code>Jooq</code> - Jooq implementation</li><li><code>Jdbc</code> - JdbcTemplate implementation</li><li><code>Impl</code> - Mixed implementation</li></ul><p>When forcing the use of the master in read/write separation, you can use <code>@MasterRouteOnly</code>, eg. <code>LightId</code></p>`,19),d={href:"http://jdbi.org",target:"_blank",rel:"noopener noreferrer"},u=o('<h2 id="_2b-2-sharding-compatibility" tabindex="-1"><a class="header-anchor" href="#_2b-2-sharding-compatibility" aria-hidden="true">#</a> 2B.2.Sharding Compatibility</h2><p><code>flywave</code> extends and enhances jooq&#39;s <code>Dao</code> and splits by type into <code>reader</code> and <code>writer</code> tables, and tracking tables.</p><p>It is highly recommended to use <code>Dao</code> for basic CRUD operations, see <code>JooqShardingTest.kt</code>. When constructing complex sql with DSL, read/write separation should be considered. For more complex sql it is recommended to use jdbcTemplate.</p><p>Jooq generates code that uses <code>table.column</code> to qualify filed by default, but ShardingJdbc does not currently support this . The best solution is to wait until ShardingJdbc support it, and the easiest way at the moment is to change the Jooq generation policy, see the following Issue.</p>',4),h={href:"https://github.com/jOOQ/jOOQ/issues/8893",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/jOOQ/jOOQ/pull/9055",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/apache/incubator-shardingsphere/issues/2859",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"table.column",-1),f={href:"https://github.com/apache/shardingsphere/issues/5330",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/apache/shardingsphere/issues/5210",target:"_blank",rel:"noopener noreferrer"},v=o('<p>Prior to jooq <code>3.18</code>, use <code>spring.wings.faceless.jooq.enabled.auto-qualify=true</code> to enable the automatic processing of qualified names, with the rule that <code>no qualified name if no alias</code>.</p><p>The main reason for using Jooq is <code>The Art of Restraint</code>, which avoids writing hard SQL that is too hard to maintain.</p><ul><li>Encourage single table operations in the <code>single</code> package, using <code>plain</code> (eg. WinUserLoginTable)</li><li>When operating on multiple tables, <code>alias</code> (eg. WinUserLoginTable.asA2) is preferred</li><li>INSERT uses <code>plain</code>, not <code>alias</code>.</li><li>DELETE uses <code>plain</code>, not <code>alias</code>.</li><li>UPDATE uses <code>alias</code> over <code>plain</code>.</li><li>SELECT use <code>plain</code> for single table; <code>alias</code> over <code>plain</code> for multiple tables</li><li><strong>Don&#39;t</strong> use Chinese table names, the example code is just an extreme test.</li></ul><h2 id="_2b-3-record-mapper" tabindex="-1"><a class="header-anchor" href="#_2b-3-record-mapper" aria-hidden="true">#</a> 2B.3.Record Mapper</h2><p>Jooq has Mappers by default, both case sensitive, as follows</p><ul><li>DefaultRecordMapper is for Record#into(Class), Result#into(Class)</li><li>DefaultRecordUnmapper is for DSL.newRecord(Table, Object), Record#from(Object)</li></ul><p>SimpleFlatMapper is more lenient and case-insensitive, but has the following shortcomings.</p>',7),y={href:"https://github.com/arnaudroger/SimpleFlatMapper/issues/764",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,"No support for primitive type, such as int.class, only Integer.class",-1),_=e("p",null,"Officially inactive for more than 2 years after the last commit on 2020-05-11, wings has removed it in October 2022.",-1),q=e("p",null,"ModelMapper is also better, but its size is too large (4.5M), currently, there is no need to use it, and it is not fully tested in wings.",-1),x=e("h2",{id:"_2b-4-mock-test-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2b-4-mock-test-data","aria-hidden":"true"},"#"),n(" 2B.4.Mock Test Data")],-1),D={href:"https://www.jooq.org/doc/latest/manual/sql-execution/mocking-connection",target:"_blank",rel:"noopener noreferrer"},j=o(`<ul><li><code>@Bean ConnectionProvider</code> - global inject, app level</li><li><code>Dao.setDslContext</code> - instance level (default singleton)</li></ul><p>Refering the following source code,</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@ConditionalOnProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;wings.faceless.testing.mock-jooq&quot;</span><span class="token punctuation">,</span> havingValue <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ConnectionProvider</span> <span class="token function">mockConnectionProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MockDataProvider</span> provider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MockTstNormalTableDataProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">MockConnection</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MockConnection</span><span class="token punctuation">(</span>provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DefaultConnectionProvider</span> delegate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultConnectionProvider</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MockConnectionProvider</span><span class="token punctuation">(</span>delegate<span class="token punctuation">,</span> provider<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">manualInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> provider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MockTstNormalTableDataProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// provider.setRecord(m);</span>
    <span class="token class-name">MockConnection</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MockConnection</span><span class="token punctuation">(</span>provider<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DSLContext</span> dsl <span class="token operator">=</span> <span class="token constant">DSL</span><span class="token punctuation">.</span><span class="token function">using</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> <span class="token class-name">SQLDialect</span><span class="token punctuation">.</span><span class="token constant">MYSQL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tstNormalTableDao<span class="token punctuation">.</span><span class="token function">setDslContext</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> dsl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TstNormalTable</span><span class="token punctuation">&gt;</span></span> r2 <span class="token operator">=</span> tstNormalTableDao<span class="token punctuation">.</span><span class="token function">fetchById</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// clean</span>
    tstNormalTableDao<span class="token punctuation">.</span><span class="token function">setDslContext</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2b-9-references" tabindex="-1"><a class="header-anchor" href="#_2b-9-references" aria-hidden="true">#</a> 2B.9.References</h2>`,4),T={href:"https://github.com/trydofor/jOOQ/commit/0be23d2e90a1196def8916b9625fbe2ebffd4753",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.jooq.org/doc/3.12/manual/sql-execution/crud-with-updatablerecords/batch-execution-for-crud/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.jooq.org/doc/3.12/manual/sql-execution/batch-execution/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.jooq.org/doc/3.12/manual/sql-building/table-expressions/aliased-tables/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.jooq.org/doc/3.12/manual/sql-execution/",target:"_blank",rel:"noopener noreferrer"};function J(L,I){const a=i("ExternalLinkIcon");return l(),c("div",null,[p,e("p",null,[n("JdbcTemplate is used for functional or complex database operations. If you have a lot of jdbc operations in your project and jdbcTemplate is less powerful, you can consider "),e("a",d,[n("JDBI"),s(a)])]),u,e("ul",null,[e("li",null,[e("a",h,[n("JOOQ#8893 Add Settings.renderTable"),s(a)])]),e("li",null,[e("a",m,[n("JOOQ#9055 should NO table qualify if NO table alias"),s(a)])]),e("li",null,[e("a",k,[n("ShardingSphere#2859 "),b,n(" can not sharding"),s(a)])]),e("li",null,[e("a",f,[n("ShardingSphere#5330 replace into"),s(a)])]),e("li",null,[e("a",g,[n("ShardingSphere#5210 on duplicate key update"),s(a)])])]),v,e("ul",null,[e("li",null,[e("a",y,[n("bug with intoArray"),s(a)])]),w]),_,q,x,e("p",null,[n("According to "),e("a",D,[n("Mocking Connection"),s(a)]),n(", there are 2 Mock way in wings,")]),j,e("ul",null,[e("li",null,[e("a",T,[n("Jooq patch"),s(a)])]),e("li",null,[e("a",S,[n("Batch Execution record"),s(a)])]),e("li",null,[e("a",C,[n("Batch Execution jdbc"),s(a)])]),e("li",null,[e("a",M,[n("Aliases in table splitting"),s(a)])]),e("li",null,[e("a",O,[n("Sql Execution"),s(a)])])])])}const E=t(r,[["render",J],["__file","2b-jooq.html.vue"]]);export{E as default};
