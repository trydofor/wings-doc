import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as n}from"./app-7d38ae22.js";const i={},t=n(`<h1 id="_9c1-mysql-dump-resotre" tabindex="-1"><a class="header-anchor" href="#_9c1-mysql-dump-resotre" aria-hidden="true">#</a> 9C1.Mysql Dump/Resotre</h1><p>Apply to mysql 5.7/8.0, native/cloud database. Support mysqldump backup and mysql restore.</p><h2 id="_9c1-1-things-when-backup" tabindex="-1"><a class="header-anchor" href="#_9c1-1-things-when-backup" aria-hidden="true">#</a> 9C1.1.Things when Backup</h2><p>Use the wings-mysql-dump.sh to backup and only need wings.dba privileges. If you use mysqlpump, note that it is <code>pump</code> and not <code>dump</code>, you need additional privileges.</p><p>Do scp, gzip according to the <code>.tip</code> file in the dump file.</p><h2 id="_9c1-2-things-when-restore" tabindex="-1"><a class="header-anchor" href="#_9c1-2-things-when-restore" aria-hidden="true">#</a> 9C1.2.Things when Restore</h2><p>When using mysqldump&#39;s backup, you need to adjust the DEFINER trigger <code>sed -E &#39;s/DEFINER=[^*]+//g&#39;</code></p><p>When using mysqlpump&#39;s backup, you need to pay attention to the original database name in sql to avoid getting the wrong database. <code>sed -E &#39;s/\`OLD_DB\`/\`NEW_DB\`/g&#39;</code></p><h2 id="_9c1-3-data-masking" tabindex="-1"><a class="header-anchor" href="#_9c1-3-data-masking" aria-hidden="true">#</a> 9C1.3.Data Masking</h2><p>In general, live data must be desensitized, including but not limited to,</p><ul><li>Password category, such as in dev, simple replacement to avoid leaking or wrong login.</li><li>Privacy category, such as name, ID, address, compliance replacement.</li><li>Communication category, such as email, API address</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> win_user_authn  <span class="token keyword">SET</span> password <span class="token operator">=</span><span class="token string">&#39;{noop}DevGr8Ag4in&#39;</span> <span class="token keyword">WHERE</span> id <span class="token operator">&gt;=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9c1-4-known-issues" tabindex="-1"><a class="header-anchor" href="#_9c1-4-known-issues" aria-hidden="true">#</a> 9C1.4.Known Issues</h2><p>The root user of the cloud database, usually without the SHUTDOWN and SUPER privileges, or even more.</p><h3 id="_01-error-1227-the-super-privilege" tabindex="-1"><a class="header-anchor" href="#_01-error-1227-the-super-privilege" aria-hidden="true">#</a> 01.<code>ERROR 1227: the SUPER privilege</code></h3><p>In Wings, when restoring a trigger with <code>DEFINER=</code> in the statement, it will report insufficient privileges. You must set the privileges of trigger to meet one or all of the following conditions.</p><ul><li>When mysql import, execute the <code>.tip</code> in dump, or manually run <code>sed</code> replacement</li><li>Server-side <code>log_bin_trust_function_creators = 1</code>, asking for SUPER privileges</li></ul><h3 id="_02-error-1071-max-key-length-is-767" tabindex="-1"><a class="header-anchor" href="#_02-error-1071-max-key-length-is-767" aria-hidden="true">#</a> 02.<code>ERROR 1071: max key length is 767</code></h3><p>Server-side setting <code>innodb_large_prefix = 1</code>, but some cloud db may disable this option. You can submit parameter changes via console without rebooting.</p><p>The following are the charset, char,byte knowledge.</p><ul><li>UTF-8MB4 - 767/4=191</li><li>UTF-8MB4 - 767/3=255</li><li>Expanded from 767 to 3072 bytes if enabled</li></ul><h3 id="_03-reload-privilege-s-for-this" tabindex="-1"><a class="header-anchor" href="#_03-reload-privilege-s-for-this" aria-hidden="true">#</a> 03.<code>RELOAD privilege(s) for this</code></h3><blockquote><p>Access denied; you need (at least one of) the RELOAD privilege(s) for this operation (1227)</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">GRANT</span> RELOAD <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;maintain&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_04-server-that-has-gtids" tabindex="-1"><a class="header-anchor" href="#_04-server-that-has-gtids" aria-hidden="true">#</a> 04.<code>server that has GTIDs</code></h3><blockquote><p>Warning: A partial dump from a server that has GTIDs will by default include the GTIDs of all transactions</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[mysqldump]
set-gtid-purged=OFF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_05-unknown-table-column-statistics" tabindex="-1"><a class="header-anchor" href="#_05-unknown-table-column-statistics" aria-hidden="true">#</a> 05.<code>Unknown table &#39;column_statistics&#39;</code></h3><blockquote><p>Unknown table &#39;column_statistics&#39; in information_schema (1109)</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[mysqldump]
column-statistics=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_06-row-size-too-large-8126" tabindex="-1"><a class="header-anchor" href="#_06-row-size-too-large-8126" aria-hidden="true">#</a> 06.<code>Row size too large (&gt; 8126)</code></h3><blockquote><p>Row size too large (&gt; 8126). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help. In current row format, BLOB prefix of 768 bytes is stored inline.</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[mysqld]
innodb_strict_mode=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_07-public-key-retrieval-is-not-allowed" tabindex="-1"><a class="header-anchor" href="#_07-public-key-retrieval-is-not-allowed" aria-hidden="true">#</a> 07.<code>Public Key Retrieval is not allowed</code></h3><blockquote><p>Public Key Retrieval is not allowed</p></blockquote><p>add <code>useSSL=false</code> and <code>allowPublicKeyRetrieval=true</code> to</p><ul><li>QueryString of jdbc url, or,</li><li>Driver properties of DBeaver</li></ul>`,37),o=[t];function r(d,l){return a(),s("div",null,o)}const p=e(i,[["render",r],["__file","9c1.mysql-dump-restore.html.vue"]]);export{p as default};
