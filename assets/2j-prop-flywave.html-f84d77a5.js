import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,f as e}from"./app-7d38ae22.js";const t={},p=e('<h1 id="_2j-flywave-properties" tabindex="-1"><a class="header-anchor" href="#_2j-flywave-properties" aria-hidden="true">#</a> 2J.Flywave Properties</h1><p>Flywave properties about schema management.</p><h2 id="_2j-1-spring-wings-enabled-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-1-spring-wings-enabled-79-properties" aria-hidden="true">#</a> 2J.1.spring-wings-enabled-79.properties</h2><p>The default switch for Flywave is,</p><h3 id="spring-wings-faceless-flywave-enabled-module" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-flywave-enabled-module" aria-hidden="true">#</a> spring.wings.faceless.flywave.enabled.module</h3><p><code>Boolean</code>=<code>false</code>, whether to inject Flywave related beans.</p><h3 id="spring-wings-faceless-flywave-enabled-checker" tabindex="-1"><a class="header-anchor" href="#spring-wings-faceless-flywave-enabled-checker" aria-hidden="true">#</a> spring.wings.faceless.flywave.enabled.checker</h3><p><code>Boolean</code>=<code>true</code>, whether flywave performs version checking for database.</p><h2 id="_2j-2-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-2-wings-flywave-fit-79-properties" aria-hidden="true">#</a> 2J.2.wings-flywave-fit-79.properties</h2><p>Flywave checks for dependent <code>flywave-init</code> versions.</p><h3 id="wings-faceless-flywave-auto-init" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-auto-init" aria-hidden="true">#</a> wings.faceless.flywave.auto-init</h3><p><code>Boolean</code>=<code>false</code>, whether to allow auto init, non-empty database, preferably manual init</p><h3 id="wings-faceless-flywave-fit-flywave-init-path" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-path" aria-hidden="true">#</a> wings.faceless.flywave.fit.flywave-init.path</h3><p><code>String</code>=<code>classpath*:/wings-flywave/master/00-init/*.sql</code></p><p>sql scan pattern, comma separated. PathMatchingResourcePatternResolver format</p><h3 id="wings-faceless-flywave-fit-flywave-init-revi" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-revi" aria-hidden="true">#</a> wings.faceless.flywave.fit.flywave-init.revi</h3><p><code>String</code>=<code>2019_0512_01L</code>, revision, comma separated</p><h3 id="wings-faceless-flywave-fit-flywave-init-lost" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-flywave-init-lost" aria-hidden="true">#</a> wings.faceless.flywave.fit.flywave-init.lost</h3><p><code>String</code>=<code>WARN</code>. <code>SKIP</code>-skip|<code>WARN</code>-warn|<code>FAIL</code>-exception|<code>EXEC</code>-force to exec</p><p>Post check, if the specified revi is not applied, only upgrade can be performed, not downgrade to avoid dangerous delete.</p><h2 id="_2j-3-wings-flywave-sql-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-3-wings-flywave-sql-79-properties" aria-hidden="true">#</a> 2J.3.wings-flywave-sql-79.properties</h2><p>Sql parsing settings for Flywave.</p><h3 id="wings-faceless-flywave-sql-dialect" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-dialect" aria-hidden="true">#</a> wings.faceless.flywave.sql.dialect</h3><p><code>String</code>=<code>mysql</code>, sql dialect, currently only supports <code>mysql</code>.</p><h3 id="wings-faceless-flywave-sql-delimiter-default" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-delimiter-default" aria-hidden="true">#</a> wings.faceless.flywave.sql.delimiter-default</h3><p><code>String</code>=<code>;</code>, the original delimiter, required.</p><h3 id="wings-faceless-flywave-sql-delimiter-command" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-delimiter-command" aria-hidden="true">#</a> wings.faceless.flywave.sql.delimiter-command</h3><p><code>String</code>=<code>DELIMITER</code>, the command to redefine the delimiter.</p><h3 id="wings-faceless-flywave-sql-comment-single" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-comment-single" aria-hidden="true">#</a> wings.faceless.flywave.sql.comment-single</h3><p><code>String</code>=<code>--</code>, single line comment</p><h3 id="wings-faceless-flywave-sql-comment-multiple" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-comment-multiple" aria-hidden="true">#</a> wings.faceless.flywave.sql.comment-multiple</h3><p><code>String</code>=<code>/* */</code>, multi-line comments, start and end with a space</p><h3 id="wings-faceless-flywave-sql-format-shard" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-format-shard" aria-hidden="true">#</a> wings.faceless.flywave.sql.format-shard</h3><p><code>String</code>=<code>XXX_[0-9]+</code>, set the shard table format. see SqlSegmentProcessor.setShardFormat.</p><h3 id="wings-faceless-flywave-sql-format-trace" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-sql-format-trace" aria-hidden="true">#</a> wings.faceless.flywave.sql.format-trace</h3><p><code>String</code>=<code>XXX(_[0-9]+)?__+[a-z]+</code>, set the trace table format. see SqlSegmentProcessor.setTraceFormat</p><h2 id="_2j-4-wings-flywave-ver-79-properties" tabindex="-1"><a class="header-anchor" href="#_2j-4-wings-flywave-ver-79-properties" aria-hidden="true">#</a> 2j.4.wings-flywave-ver-79.properties</h2><p>set version and journal table for Flywave.</p><ul><li><code>{{PLAIN_NAME}}</code> The <code>plain</code> table name of the target table</li><li><code>{{TABLE_NAME}}</code> Target table name, can be plain, shard, trace table</li><li><code>{{TABLE_BONE}}</code> Target table field (at least name, type, comments), without indexes and constraints</li><li><code>{{TABLE_PKEY}}</code> The field name in PK of the target table, used to create a normal index copy from the original PK</li></ul><h3 id="wings-faceless-flywave-ver-schema-version-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-schema-version-table" aria-hidden="true">#</a> wings.faceless.flywave.ver.schema-version-table</h3><p><code>String</code>=<code>sys_schema_version</code>, table name of schema version.</p><h3 id="wings-faceless-flywave-ver-schema-journal-table" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-schema-journal-table" aria-hidden="true">#</a> wings.faceless.flywave.ver.schema-journal-table</h3><p><code>String</code>=<code>=sys_schema_journal</code>, table name of journal.</p><h3 id="wings-faceless-flywave-ver-drop-reg" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-drop-reg" aria-hidden="true">#</a> wings.faceless.flywave.ver.drop-reg</h3><p><code>Map&lt;String, String&gt;</code>, RegExp is treated as drop statements for dangerous confirm.</p><ul><li><code>drop-table</code>=<code>^drop\\\\s+table</code></li><li><code>truncate-table</code>=<code>^truncate\\\\s+table</code></li></ul><h3 id="wings-faceless-flywave-ver-journal-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-insert" aria-hidden="true">#</a> wings.faceless.flywave.ver.journal-insert</h3><p>Trace table for AfterInsert (create the original PK index), <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-insert" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-insert" aria-hidden="true">#</a> wings.faceless.flywave.ver.trigger-insert</h3><p>AfterInsert Trigger, <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>ai__{{TABLE_NAME}}<span class="token punctuation">`</span></span> <span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> NEW<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-journal-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-update" aria-hidden="true">#</a> wings.faceless.flywave.ver.journal-update</h3><p>Trace table for AfterUpdate (create the original PK index), <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-update" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-update" aria-hidden="true">#</a> wings.faceless.flywave.ver.trigger-update</h3><p>AfterUpdate Trigger, <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>au__{{TABLE_NAME}}<span class="token punctuation">`</span></span> <span class="token keyword">AFTER</span> <span class="token keyword">UPDATE</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;U&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> NEW<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-journal-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-journal-delete" aria-hidden="true">#</a> wings.faceless.flywave.ver.journal-delete</h3><p>Trace table for BeforeDelete (create the original PK index),<code>String</code>, default</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_dt<span class="token punctuation">`</span></span> <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;1000-01-01 00:00:00&#39;</span><span class="token punctuation">,</span>\n    <span class="token identifier"><span class="token punctuation">`</span>_tp<span class="token punctuation">`</span></span> <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;Z&#39;</span><span class="token punctuation">,</span>\n    {{TABLE_BONE}}<span class="token punctuation">,</span>\n    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>_id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>RAW_TABLE_PK<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>{{TABLE_PKEY}}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">INNODB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>UTF8MB4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wings-faceless-flywave-ver-trigger-delete" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-ver-trigger-delete" aria-hidden="true">#</a> wings.faceless.flywave.ver.trigger-delete</h3><p>BeforeDelete Trigger, <code>String</code>, default</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">`</span>bd__{{TABLE_NAME}}<span class="token punctuation">`</span></span> BEFORE <span class="token keyword">DELETE</span> <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span>\n<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>\n  <span class="token keyword">IF</span> <span class="token punctuation">(</span><span class="token variable">@DISABLE_FLYWAVE</span> <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span> \n    <span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}__<span class="token punctuation">`</span></span> <span class="token keyword">SELECT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token function">NOW</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> t<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>{{TABLE_NAME}}<span class="token punctuation">`</span></span> t\n    <span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>id <span class="token operator">=</span> OLD<span class="token punctuation">.</span>id <span class="token punctuation">;</span>\n  <span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span> \n<span class="token keyword">END</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',64),o=[p];function l(c,i){return a(),n("div",null,o)}const u=s(t,[["render",l],["__file","2j-prop-flywave.html.vue"]]);export{u as default};
