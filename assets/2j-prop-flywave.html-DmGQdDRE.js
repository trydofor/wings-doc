import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,f as e}from"./app-CVp74C-I.js";const l={},t=e('<h1 id="_2j-飞波的属性" tabindex="-1"><a class="header-anchor" href="#_2j-飞波的属性"><span>2J.飞波的属性</span></a></h1><p>有Flywave关于schema管理的配置。</p><h2 id="_2j-1-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-1-wings-flywave-fit-79-properties"><span>2J.1.wings-flywave-fit-79.properties</span></a></h2><p>Flywave对依赖的<code>flywave-init</code>版本进行检查。</p><h3 id="wings-faceless-flywave-auto-init" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-auto-init"><span>wings.faceless.flywave.auto-init</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否允许自动初始化，非空数据库，最好手工初始化</p><h3 id="wings-faceless-flywave-checker" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-checker"><span>wings.faceless.flywave.checker</span></a></h3><p><code>Boolean</code>=<code>true</code>，flywave是否进行数据库的版本检查。</p><h3 id="wings-faceless-flywave-fit-flywave-init-path" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-path"><span>wings.faceless.flywave.fit.flywave-init.path</span></a></h3><p><code>String</code>=<code>classpath*:/wings-flywave/master/00-init/*.sql</code></p><p>sql扫描pattern，逗号分隔。PathMatchingResourcePatternResolver格式</p><h3 id="wings-faceless-flywave-fit-flywave-init-revi" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-revi"><span>wings.faceless.flywave.fit.flywave-init.revi</span></a></h3><p><code>String</code>=<code>2019_0512_01L</code>，revision，逗号分隔</p><h3 id="wings-faceless-flywave-fit-flywave-init-lost" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-lost"><span>wings.faceless.flywave.fit.flywave-init.lost</span></a></h3><p><code>String</code>=<code>WARN</code></p><p>补漏行为，任一指定revi未应用时，只升级不能降级，避免危险的删除动作。 <code>SKIP</code>-跳过|<code>WARN</code>-警告|<code>FAIL</code>-异常|<code>EXEC</code>-强制执行</p><h2 id="_2j-2-wings-flywave-sql-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-2-wings-flywave-sql-79-properties"><span>2J.2.wings-flywave-sql-79.properties</span></a></h2><p>Flywave的Sql解析设置</p><h3 id="wings-faceless-flywave-sql-dialect" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-dialect"><span>wings.faceless.flywave.sql.dialect</span></a></h3><p><code>String</code>=<code>mysql</code>，sql方言，当前只支持<code>mysql</code></p><h3 id="wings-faceless-flywave-sql-delimiter-default" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-delimiter-default"><span>wings.faceless.flywave.sql.delimiter-default</span></a></h3><p><code>String</code>=<code>;</code>，原始分隔符，必须存在。</p><h3 id="wings-faceless-flywave-sql-delimiter-command" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-delimiter-command"><span>wings.faceless.flywave.sql.delimiter-command</span></a></h3><p><code>String</code>=<code>DELIMITER</code>，重定义的分隔符的命令。</p><h3 id="wings-faceless-flywave-sql-comment-single" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-comment-single"><span>wings.faceless.flywave.sql.comment-single</span></a></h3><p><code>String</code>=<code>--</code>，单行注释</p><h3 id="wings-faceless-flywave-sql-comment-multiple" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-comment-multiple"><span>wings.faceless.flywave.sql.comment-multiple</span></a></h3><p><code>String</code>=<code>/* */</code>，多行注释，开头和结束以空格分开表示</p><h3 id="wings-faceless-flywave-sql-format-shard" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-format-shard"><span>wings.faceless.flywave.sql.format-shard</span></a></h3><p><code>String</code>=<code>XXX_[0-9]+</code>，设置分表格式，参考 SqlSegmentProcessor.setShardFormat</p><h3 id="wings-faceless-flywave-sql-format-trace" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-format-trace"><span>wings.faceless.flywave.sql.format-trace</span></a></h3><p><code>String</code>=<code>XXX(_[0-9]+)?__+[a-z]+</code>，设置跟踪表格式，参考 SqlSegmentProcessor.setTraceFormat</p><h2 id="_2j-3-wings-flywave-ver-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-3-wings-flywave-ver-79-properties"><span>2j.3.wings-flywave-ver-79.properties</span></a></h2><p>Flywave对version和journal表的设置。</p><ul><li><code>{{PLAIN_NAME}}</code> 目标表的<code>本表</code>名字</li><li><code>{{TABLE_NAME}}</code> 目标表名字，可能是本表，分表，跟踪表</li><li><code>{{TABLE_BONE}}</code> 目标表字段(至少包含名字，类型，注释)，不含索引和约束</li><li><code>{{TABLE_PKEY}}</code> 目标表的主键中字段名，用来创建原主键的普通索引</li></ul><h3 id="wings-faceless-flywave-ver-schema-version-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-schema-version-table"><span>wings.faceless.flywave.ver.schema-version-table</span></a></h3><p><code>String</code>=<code>sys_schema_version</code>，版本管理表名</p><h3 id="wings-faceless-flywave-ver-schema-journal-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-schema-journal-table"><span>wings.faceless.flywave.ver.schema-journal-table</span></a></h3><p><code>String</code>=<code>=sys_schema_journal</code>，数据日志表名</p><h3 id="wings-faceless-flywave-ver-drop-reg" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-drop-reg"><span>wings.faceless.flywave.ver.drop-reg</span></a></h3><p><code>Map&lt;String, String&gt;</code>，视为drop语句的正则，以做危险提示。</p><ul><li><code>drop-table</code>=<code>^drop\\\\s+table</code></li><li><code>truncate-table</code>=<code>^truncate\\\\s+table</code></li></ul><h3 id="wings-faceless-flywave-ver-journal-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-insert"><span>wings.faceless.flywave.ver.journal-insert</span></a></h3><p>AfterInsert的跟踪表（建立原主键索引），<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-insert"><span>wings.faceless.flywave.ver.trigger-insert</span></a></h3><p>AfterInsert Trigger，<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>ai__{{TABLE_NAME}}<span class="token punctuation">`</span></span> <span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> NEW<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-journal-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-update"><span>wings.faceless.flywave.ver.journal-update</span></a></h3><p>AfterUpdate的跟踪表（建立原主键索引），<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-update"><span>wings.faceless.flywave.ver.trigger-update</span></a></h3><p>AfterUpdate Trigger，<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>au__{{TABLE_NAME}}<span class="token punctuation">`</span></span> <span class="token keyword">AFTER</span> <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;U&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> NEW<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-journal-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-delete"><span>wings.faceless.flywave.ver.journal-delete</span></a></h3><p>BeforeDelete 的跟踪表（建立原主键索引），<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-delete"><span>wings.faceless.flywave.ver.trigger-delete</span></a></h3><p>BeforeDelete Trigger，<code>String</code>，默认</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>bd__{{TABLE_NAME}}<span class="token punctuation">`</span></span> BEFORE <span class="token keyword">DELETE</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> OLD<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',60),p=[t];function o(i,c){return a(),n("div",null,p)}const u=s(l,[["render",o],["__file","2j-prop-flywave.html.vue"]]),k=JSON.parse('{"path":"/zh/2-faceless/2j-prop-flywave.html","title":"2J.飞波的属性","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"enum","category":["虚空","属性"],"description":"2J.飞波的属性 有Flywave关于schema管理的配置。 2J.1.wings-flywave-fit-79.properties Flywave对依赖的flywave-init版本进行检查。 wings.faceless.flywave.auto-init Boolean=false，是否允许自动初始化，非空数据库，最好手工初始化 wings....","GIT_REPO_HEAD":"2024-05-20 6ef1c336bd825d18a7a31be8bd92e8df094dc194","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/2-faceless/2j-prop-flywave.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/2-faceless/2j-prop-flywave.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"2J.飞波的属性"}],["meta",{"property":"og:description","content":"2J.飞波的属性 有Flywave关于schema管理的配置。 2J.1.wings-flywave-fit-79.properties Flywave对依赖的flywave-init版本进行检查。 wings.faceless.flywave.auto-init Boolean=false，是否允许自动初始化，非空数据库，最好手工初始化 wings...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-24T02:14:26.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-11-24T02:14:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2J.飞波的属性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-24T02:14:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"2J.1.wings-flywave-fit-79.properties","slug":"_2j-1-wings-flywave-fit-79-properties","link":"#_2j-1-wings-flywave-fit-79-properties","children":[{"level":3,"title":"wings.faceless.flywave.auto-init","slug":"wings-faceless-flywave-auto-init","link":"#wings-faceless-flywave-auto-init","children":[]},{"level":3,"title":"wings.faceless.flywave.checker","slug":"wings-faceless-flywave-checker","link":"#wings-faceless-flywave-checker","children":[]},{"level":3,"title":"wings.faceless.flywave.fit.flywave-init.path","slug":"wings-faceless-flywave-fit-flywave-init-path","link":"#wings-faceless-flywave-fit-flywave-init-path","children":[]},{"level":3,"title":"wings.faceless.flywave.fit.flywave-init.revi","slug":"wings-faceless-flywave-fit-flywave-init-revi","link":"#wings-faceless-flywave-fit-flywave-init-revi","children":[]},{"level":3,"title":"wings.faceless.flywave.fit.flywave-init.lost","slug":"wings-faceless-flywave-fit-flywave-init-lost","link":"#wings-faceless-flywave-fit-flywave-init-lost","children":[]}]},{"level":2,"title":"2J.2.wings-flywave-sql-79.properties","slug":"_2j-2-wings-flywave-sql-79-properties","link":"#_2j-2-wings-flywave-sql-79-properties","children":[{"level":3,"title":"wings.faceless.flywave.sql.dialect","slug":"wings-faceless-flywave-sql-dialect","link":"#wings-faceless-flywave-sql-dialect","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.delimiter-default","slug":"wings-faceless-flywave-sql-delimiter-default","link":"#wings-faceless-flywave-sql-delimiter-default","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.delimiter-command","slug":"wings-faceless-flywave-sql-delimiter-command","link":"#wings-faceless-flywave-sql-delimiter-command","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.comment-single","slug":"wings-faceless-flywave-sql-comment-single","link":"#wings-faceless-flywave-sql-comment-single","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.comment-multiple","slug":"wings-faceless-flywave-sql-comment-multiple","link":"#wings-faceless-flywave-sql-comment-multiple","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.format-shard","slug":"wings-faceless-flywave-sql-format-shard","link":"#wings-faceless-flywave-sql-format-shard","children":[]},{"level":3,"title":"wings.faceless.flywave.sql.format-trace","slug":"wings-faceless-flywave-sql-format-trace","link":"#wings-faceless-flywave-sql-format-trace","children":[]}]},{"level":2,"title":"2j.3.wings-flywave-ver-79.properties","slug":"_2j-3-wings-flywave-ver-79-properties","link":"#_2j-3-wings-flywave-ver-79-properties","children":[{"level":3,"title":"wings.faceless.flywave.ver.schema-version-table","slug":"wings-faceless-flywave-ver-schema-version-table","link":"#wings-faceless-flywave-ver-schema-version-table","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.schema-journal-table","slug":"wings-faceless-flywave-ver-schema-journal-table","link":"#wings-faceless-flywave-ver-schema-journal-table","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.drop-reg","slug":"wings-faceless-flywave-ver-drop-reg","link":"#wings-faceless-flywave-ver-drop-reg","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.journal-insert","slug":"wings-faceless-flywave-ver-journal-insert","link":"#wings-faceless-flywave-ver-journal-insert","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.trigger-insert","slug":"wings-faceless-flywave-ver-trigger-insert","link":"#wings-faceless-flywave-ver-trigger-insert","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.journal-update","slug":"wings-faceless-flywave-ver-journal-update","link":"#wings-faceless-flywave-ver-journal-update","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.trigger-update","slug":"wings-faceless-flywave-ver-trigger-update","link":"#wings-faceless-flywave-ver-trigger-update","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.journal-delete","slug":"wings-faceless-flywave-ver-journal-delete","link":"#wings-faceless-flywave-ver-journal-delete","children":[]},{"level":3,"title":"wings.faceless.flywave.ver.trigger-delete","slug":"wings-faceless-flywave-ver-trigger-delete","link":"#wings-faceless-flywave-ver-trigger-delete","children":[]}]}],"git":{"createdTime":1687077446000,"updatedTime":1700792066000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":2}]},"readingTime":{"minutes":2.38,"words":714},"filePathRelative":"zh/2-faceless/2j-prop-flywave.md","localizedDate":"2023年6月18日","autoDesc":true}');export{u as comp,k as data};