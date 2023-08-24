import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as i}from"./app-7d38ae22.js";const n={},r=i(`<h1 id="_9c1-备份及恢复mysql" tabindex="-1"><a class="header-anchor" href="#_9c1-备份及恢复mysql" aria-hidden="true">#</a> 9C1.备份及恢复mysql</h1><p>适用于 mysql 5.7/8.0，native/cloud数据库。适用mysqldump备份，适用mysql恢复</p><h2 id="_9c1-1-备份时事项" tabindex="-1"><a class="header-anchor" href="#_9c1-1-备份时事项" aria-hidden="true">#</a> 9C1.1.备份时事项</h2><p>使用 wings-mysql-dump.sh 脚本进行备份，选择wings.dba权限即可。 若使用 mysqlpump，注意是<code>pump</code>不是<code>dump</code>，需要额外的权限。</p><p>根据dump文件中的<code>.tip</code>文件进行 scp，gzip 操作。</p><h2 id="_9c1-2-恢复时事项" tabindex="-1"><a class="header-anchor" href="#_9c1-2-恢复时事项" aria-hidden="true">#</a> 9C1.2.恢复时事项</h2><p>使用mysqldump的备份时，在trigger时，需要调整其中的DEFINER <code>sed -E &#39;s/DEFINER=[^*]+//g&#39;</code></p><p>使用mysqlpump的备份时，需要注意sql中的原database限定，避免错库。 <code>sed -E &#39;s/\`OLD_DB\`/\`NEW_DB\`/g&#39;</code></p><h2 id="_9c1-3-数据脱敏" tabindex="-1"><a class="header-anchor" href="#_9c1-3-数据脱敏" aria-hidden="true">#</a> 9C1.3.数据脱敏</h2><p>一般情况，需要对正式数据进行脱敏处理，包括但不限于，</p><ul><li>密码类，如dev中，统一设置，避免泄露或错误登录。</li><li>隐私类，如姓名，身份证，地址，合规性替换。</li><li>通讯类，如邮件，api地址</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> win_user_authn  <span class="token keyword">SET</span> password <span class="token operator">=</span><span class="token string">&#39;{noop}DevGr8Ag4in&#39;</span> <span class="token keyword">WHERE</span> id <span class="token operator">&gt;=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9c1-4-已知问题" tabindex="-1"><a class="header-anchor" href="#_9c1-4-已知问题" aria-hidden="true">#</a> 9C1.4.已知问题</h2><p>云数据库的root，通常没有SHUTDOWN和SUPER权限，甚至更多，以避免破坏配置。</p><h3 id="_01-error-1227-the-super-privilege" tabindex="-1"><a class="header-anchor" href="#_01-error-1227-the-super-privilege" aria-hidden="true">#</a> 01.<code>ERROR 1227: the SUPER privilege</code></h3><p>在wings体系内，恢复trigger时，因导出语句有<code>DEFINER=</code>，故提示权限不足。 需要设置trigger权限，并满足以下条件之一或全部。</p><ul><li>mysql导入时，按dump中的tip执行，或手工执行sed替换</li><li>服务器端 <code>log_bin_trust_function_creators = 1</code>，提示SUPER权限</li></ul><h3 id="_02-error-1071-max-key-length-is-767" tabindex="-1"><a class="header-anchor" href="#_02-error-1071-max-key-length-is-767" aria-hidden="true">#</a> 02.<code>ERROR 1071: max key length is 767</code></h3><p>服务器端设置 <code>innodb_large_prefix = 1</code> 但某些云默认配置关闭了此选项。 可以通过控制台提交参数修改，无需重启。以下是字符集及char,byte的知识点。</p><ul><li>UTF-8MB4 - 767/4=191</li><li>UTF-8MB4 - 767/3=255</li><li>打开后，从 767 扩展到 3072 bytes</li></ul><h3 id="_03-reload-privilege-s-for-this" tabindex="-1"><a class="header-anchor" href="#_03-reload-privilege-s-for-this" aria-hidden="true">#</a> 03.<code>RELOAD privilege(s) for this</code></h3><blockquote><p>Access denied; you need (at least one of) the RELOAD privilege(s) for this operation (1227)</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">GRANT</span> RELOAD <span class="token keyword">ON</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">TO</span> <span class="token string">&#39;maintain&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span>
FLUSH <span class="token keyword">PRIVILEGES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_04-server-that-has-gtids" tabindex="-1"><a class="header-anchor" href="#_04-server-that-has-gtids" aria-hidden="true">#</a> 04.<code>server that has GTIDs</code></h3><blockquote><p>Warning: A partial dump from a server that has GTIDs will by default include the GTIDs of all transactions</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[mysqldump]
set-gtid-purged=OFF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_05-unknown-table-column-statistics" tabindex="-1"><a class="header-anchor" href="#_05-unknown-table-column-statistics" aria-hidden="true">#</a> 05.<code>Unknown table &#39;column_statistics&#39;</code></h3><blockquote><p>Unknown table &#39;column_statistics&#39; in information_schema (1109)</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[mysqldump]
column-statistics=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_06-row-size-too-large-8126" tabindex="-1"><a class="header-anchor" href="#_06-row-size-too-large-8126" aria-hidden="true">#</a> 06.<code>Row size too large (&gt; 8126)</code></h3><blockquote><p>Row size too large (&gt; 8126). Changing some columns to TEXT or BLOB or using ROW_FORMAT=DYNAMIC or ROW_FORMAT=COMPRESSED may help. In current row format, BLOB prefix of 768 bytes is stored inline.</p></blockquote><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>[mysqld]
innodb_strict_mode=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_07-public-key-retrieval-is-not-allowed" tabindex="-1"><a class="header-anchor" href="#_07-public-key-retrieval-is-not-allowed" aria-hidden="true">#</a> 07.<code>Public Key Retrieval is not allowed</code></h3><blockquote><p>Public Key Retrieval is not allowed</p></blockquote><p>add <code>useSSL=false</code> and <code>allowPublicKeyRetrieval=true</code> to</p><ul><li>QueryString of jdbc url, or,</li><li>Driver properties of DBeaver</li></ul>`,36),d=[r];function t(l,o){return a(),s("div",null,d)}const u=e(n,[["render",t],["__file","9c1.mysql-dump-restore.html.vue"]]);export{u as default};
