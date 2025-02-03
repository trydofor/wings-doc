import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,b as a,o as t}from"./app-C5_95bv_.js";const l={};function n(r,s){return t(),i("div",null,s[0]||(s[0]=[a(`<h1 id="_9c1-mysql-dump-restore" tabindex="-1"><a class="header-anchor" href="#_9c1-mysql-dump-restore"><span>9C1.Mysql Dump/Restore</span></a></h1><p>Apply to mysql 8.0/5.7, native/cloud database. Support mysqldump backup and mysql restore.</p><h2 id="_9c1-1-things-when-backup" tabindex="-1"><a class="header-anchor" href="#_9c1-1-things-when-backup"><span>9C1.1.Things when Backup</span></a></h2><p>Use the wings-mysql-dump.sh to backup and only need wings.dba privileges. If you use mysqlpump, note that it is <code>pump</code> and not <code>dump</code>, you need additional privileges.</p><p>Do scp, gzip according to the <code>.tip</code> file in the dump file.</p><h2 id="_9c1-2-things-when-restore" tabindex="-1"><a class="header-anchor" href="#_9c1-2-things-when-restore"><span>9C1.2.Things when Restore</span></a></h2><p>When using mysqldump&#39;s backup, you need to adjust the DEFINER trigger <code>sed -E &#39;s/DEFINER=[^*]+//g&#39;</code></p><p>When using mysqlpump&#39;s backup, you need to pay attention to the original database name in sql to avoid getting the wrong database. <code>sed -E &#39;s/\`OLD_DB\`/\`NEW_DB\`/g&#39;</code></p><p>When <code>full-dump.sql</code> includes <code>db#</code> multiple databases and only restore <code>db1</code>. option 1 is recommended to restore in docker-compose.yml.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## (1) Extract the sql of db1 first</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;/^-- Current Database: \`db1\`/,/^-- Current Database: \`/p&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> full-dump.sql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">db1.sql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --protocol=TCP</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 51487</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 127.0.0.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">db1.sql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## (2) prepare db# separately, then import only db1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --protocol=TCP</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 51487</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 127.0.0.1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;CREATE DATABASE db1;&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --one-database</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> db1</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --protocol=TCP</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -P</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 51487</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 127.0.0.1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">full-dump.sql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9c1-3-data-masking" tabindex="-1"><a class="header-anchor" href="#_9c1-3-data-masking"><span>9C1.3.Data Masking</span></a></h2><p>In general, live data must be desensitized, including but not limited to,</p><ul><li>Password category, such as in dev, simple replacement to avoid leaking or wrong login.</li><li>Privacy category, such as name, ID, address, compliance replacement.</li><li>Communication category, such as email, API address</li></ul><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> win_user_authn  </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> password</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;{noop}DevGr8Ag4in&#39;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_9c1-4-known-issues" tabindex="-1"><a class="header-anchor" href="#_9c1-4-known-issues"><span>9C1.4.Known Issues</span></a></h2><p>The root user of the cloud database, usually without the SHUTDOWN and SUPER privileges, or even more.</p><h3 id="_01-error-1227-the-super-privilege" tabindex="-1"><a class="header-anchor" href="#_01-error-1227-the-super-privilege"><span>01.<code>ERROR 1227: the SUPER privilege</code></span></a></h3><p>In Wings, when restoring a trigger with <code>DEFINER=</code> in the statement, it will report insufficient privileges. You must set the privileges of trigger to meet one or all of the following conditions.</p><ul><li>When mysql import, execute the <code>.tip</code> in dump, or manually run <code>sed</code> replacement</li><li>Server-side <code>log_bin_trust_function_creators = 1</code>, asking for SUPER privileges</li></ul><h3 id="_02-error-1071-max-key-length-is-767" tabindex="-1"><a class="header-anchor" href="#_02-error-1071-max-key-length-is-767"><span>02.<code>ERROR 1071: max key length is 767</code></span></a></h3><p>Server-side setting <code>innodb_large_prefix = 1</code>, but some cloud db may disable this option. You can submit parameter changes via console without rebooting.</p><p>The following are the charset, char,byte knowledge.</p><ul><li>UTF-8MB4 - 767/4=191</li><li>UTF-8MB4 - 767/3=255</li><li>Expanded from 767 to 3072 bytes if enabled</li></ul><h3 id="_03-reload-privilege-s-for-this" tabindex="-1"><a class="header-anchor" href="#_03-reload-privilege-s-for-this"><span>03.<code>RELOAD privilege(s) for this</code></span></a></h3><blockquote><p>Access denied; you need (at least one of) the RELOAD privilege(s) for this operation (1227)</p></blockquote><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">GRANT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> RELOAD </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> *.* </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;maintain&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;%&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">FLUSH PRIVILEGES;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_04-server-that-has-gtids" tabindex="-1"><a class="header-anchor" href="#_04-server-that-has-gtids"><span>04.<code>server that has GTIDs</code></span></a></h3><blockquote><p>Warning: A partial dump from a server that has GTIDs will by default include the GTIDs of all transactions</p></blockquote><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[mysqldump]</span></span>
<span class="line"><span>set-gtid-purged=OFF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_05-unknown-table-column-statistics" tabindex="-1"><a class="header-anchor" href="#_05-unknown-table-column-statistics"><span>05.<code>Unknown table &#39;column_statistics&#39;</code></span></a></h3><blockquote><p>Unknown table &#39;column_statistics&#39; in information_schema (1109)</p></blockquote><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[mysqldump]</span></span>
<span class="line"><span>column-statistics=0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_06-row-size-too-large-8126" tabindex="-1"><a class="header-anchor" href="#_06-row-size-too-large-8126"><span>06.<code>Row size too large (&gt; 8126)</code></span></a></h3><blockquote><p>Row size too large (&gt; 8126). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help. In current row format, BLOB prefix of 768 bytes is stored inline.</p></blockquote><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" data-title="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[mysqld]</span></span>
<span class="line"><span>innodb_strict_mode=0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_07-public-key-retrieval-is-not-allowed" tabindex="-1"><a class="header-anchor" href="#_07-public-key-retrieval-is-not-allowed"><span>07.<code>Public Key Retrieval is not allowed</code></span></a></h3><blockquote><p>Public Key Retrieval is not allowed</p></blockquote><p>add <code>useSSL=false</code> and <code>allowPublicKeyRetrieval=true</code> to</p><ul><li>QueryString of jdbc url, or,</li><li>Driver properties of DBeaver</li></ul>`,39)]))}const d=e(l,[["render",n],["__file","9c1.mysql-dump-restore.html.vue"]]),p=JSON.parse(`{"path":"/9-example/9c.server-manual/9c1.mysql-dump-restore.html","title":"9C1.Mysql Dump/Restore","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"database","category":["Practice","Operation"],"description":"9C1.Mysql Dump/Restore Apply to mysql 8.0/5.7, native/cloud database. Support mysqldump backup and mysql restore. 9C1.1.Things when Backup Use the wings-mysql-dump.sh to backup ...","GIT_REPO_HEAD":"2025-02-03 e5471cb053e548efc4c097ea2ec2a693fc99fae9","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/9-example/9c.server-manual/9c1.mysql-dump-restore.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/9-example/9c.server-manual/9c1.mysql-dump-restore.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"9C1.Mysql Dump/Restore"}],["meta",{"property":"og:description","content":"9C1.Mysql Dump/Restore Apply to mysql 8.0/5.7, native/cloud database. Support mysqldump backup and mysql restore. 9C1.1.Things when Backup Use the wings-mysql-dump.sh to backup ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-03T05:35:42.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-03T05:35:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9C1.Mysql Dump/Restore\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-03T05:35:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9C1.1.Things when Backup","slug":"_9c1-1-things-when-backup","link":"#_9c1-1-things-when-backup","children":[]},{"level":2,"title":"9C1.2.Things when Restore","slug":"_9c1-2-things-when-restore","link":"#_9c1-2-things-when-restore","children":[]},{"level":2,"title":"9C1.3.Data Masking","slug":"_9c1-3-data-masking","link":"#_9c1-3-data-masking","children":[]},{"level":2,"title":"9C1.4.Known Issues","slug":"_9c1-4-known-issues","link":"#_9c1-4-known-issues","children":[{"level":3,"title":"01.ERROR 1227: the SUPER privilege","slug":"_01-error-1227-the-super-privilege","link":"#_01-error-1227-the-super-privilege","children":[]},{"level":3,"title":"02.ERROR 1071: max key length is 767","slug":"_02-error-1071-max-key-length-is-767","link":"#_02-error-1071-max-key-length-is-767","children":[]},{"level":3,"title":"03.RELOAD privilege(s) for this","slug":"_03-reload-privilege-s-for-this","link":"#_03-reload-privilege-s-for-this","children":[]},{"level":3,"title":"04.server that has GTIDs","slug":"_04-server-that-has-gtids","link":"#_04-server-that-has-gtids","children":[]},{"level":3,"title":"05.Unknown table 'column_statistics'","slug":"_05-unknown-table-column-statistics","link":"#_05-unknown-table-column-statistics","children":[]},{"level":3,"title":"06.Row size too large (> 8126)","slug":"_06-row-size-too-large-8126","link":"#_06-row-size-too-large-8126","children":[]},{"level":3,"title":"07.Public Key Retrieval is not allowed","slug":"_07-public-key-retrieval-is-not-allowed","link":"#_07-public-key-retrieval-is-not-allowed","children":[]}]}],"git":{"createdTime":1656137116000,"updatedTime":1738560942000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":11,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":1.8,"words":540},"filePathRelative":"9-example/9c.server-manual/9c1.mysql-dump-restore.md","localizedDate":"June 25, 2022","autoDesc":true}`);export{d as comp,p as data};
