import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,c as n,b as i,d as s,f as l,w as h,e as r,o as p}from"./app-_DUHdyaw.js";const k={},d=i("h1",{id:"_9a1-upgrade-2-4-2-201",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_9a1-upgrade-2-4-2-201"},[i("span",null,"9A1.Upgrade 2.4.2.201")])],-1),o=i("p",null,"Upgraded build 200 to 201, closer to flywave's engineering practices, with the following major incompatibility,",-1),g=i("li",null,"Adjusted pom.xml structure, former wings-home renamed to wings-project",-1),c=i("li",null,"flywave journal management using the new trigger form",-1),A=i("li",null,"flywave default confirm all, no interaction, need to set askYes manually",-1),y=r(`<h2 id="_9a1-1-maven-setting" tabindex="-1"><a class="header-anchor" href="#_9a1-1-maven-setting"><span>9A1.1.Maven Setting</span></a></h2><p>Change POM&#39;s parent from <code>wings-home:2.4.2.200-SNAPSHOT</code> to <code>wings-project:2.4.2.201-SNAPSHOT</code></p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;pro.fessional&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;wings-project&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;2.4.2.201-SNAPSHOT&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">parent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a1-2-table-restruct" tabindex="-1"><a class="header-anchor" href="#_9a1-2-table-restruct"><span>9A1.2.Table Restruct</span></a></h2><p>Execute the operations in the following order</p><ul><li>Execute 2021-12-20v01-journal-trg-insert.sql to add new journal structure</li><li>Execute JournalManager.manageTriggers(table, true) to delete the old trigger</li><li>Execute JournalManager.checkAndInitDdl(table, cid) to replace the old config to new</li><li>Execute JournalManager.publishInsert/Update/Delete(table, true, cid) to generate a new trigger</li></ul><p>If you need to import the data from the original trace table into the new one, and you want to keep the old data and the new data in the same <code>_id</code> incremental order. then you need to set AUTO_INCREMENT manually so that it is greater than the total number of data in the old table. And manually update the inserted data <code>_id</code> during the operation.</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ALTER</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $count;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> table</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">log</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> _id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $count + _id;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you do not care about the order, or have set AUTO_INCREMENT to start, execute the following SQL to import the data,</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> @tabl</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;win_user_basis&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> @cols</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    SELECT</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> CONCAT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;\`&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, GROUP_CONCAT(COLUMN_NAME SEPARATOR </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;\`, \`&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;\`&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> INFORMATION_SCHEMA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">COLUMNS</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> TABLE_SCHEMA </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> database</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">AND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> TABLE_NAME </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> @tabl</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    ORDER BY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ORDINAL_POSITION</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> @restoreSql</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> CONCAT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        &#39;INSERT INTO &#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@tabl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;$log&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            &#39; SELECT NULL, _dt, _tp, &#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@cols</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39; FROM ((SELECT *,\\&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">U\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39; as _tp FROM &#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        @tabl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;$upd) UNION (SELECT *,\\&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39; as _tp FROM &#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        @tabl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;$del)) as old ORDER BY _dt&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> @restoreSql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">PREPARE stmt </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> @restoreSql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">EXECUTE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> stmt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a1-3-compile-error" tabindex="-1"><a class="header-anchor" href="#_9a1-3-compile-error"><span>9A1.3.Compile Error</span></a></h2><p>Set the method of InteractiveManager according to the compile prompt. If your ever use flywave to manage datas and tables in automatic environment (batch, web), you need to define your own InteractiveManager.askWay implementation. Default implementations are,</p><ul><li>FlywaveInteractiveTty based on console</li><li>FlywaveInteractiveGui based on Swing dialog</li></ul><p>If HeadlessException is thrown at startup, it is possible that AWT Font, Color, etc. are used before wings.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">at </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">awt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">GraphicsEnvironment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">checkHeadless</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">GraphicsEnvironment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">java</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">204</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Needs set in the code <code>System.setProperty(&quot;java.awt.headless&quot;, &quot;false&quot;);</code> closest to or before the main method, Or set <code>-Djava.awt.headless=false</code> to jvm parameters.</p><h2 id="_9a1-4-datasource-change" tabindex="-1"><a class="header-anchor" href="#_9a1-4-datasource-change"><span>9A1.4.DataSource Change</span></a></h2><p>For the data sharding or R/W separation scenario, split the faceless shard project, so that the DataSource uses the Spring format by default.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># Replace with spring default data source</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">spring.datasource.url</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">spring.datasource.username</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">spring.datasource.password</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function B(u,m){const a=t("RouteLink");return p(),n("div",null,[d,o,i("ul",null,[g,c,A,i("li",null,[s("check "),l(a,{to:"/9-example/9a.wings-change/9a0.notable.html"},{default:h(()=>[s("wings notable changelog")]),_:1})])]),y])}const C=e(k,[["render",B],["__file","9a1.242-201.html.vue"]]),F=JSON.parse(`{"path":"/9-example/9a.wings-change/9a1.242-201.html","title":"9A1.Upgrade 2.4.2.201","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"circle-up","category":["Practice","Upgrade"],"description":"9A1.Upgrade 2.4.2.201 Upgraded build 200 to 201, closer to flywave's engineering practices, with the following major incompatibility, Adjusted pom.xml structure, former wings-ho...","GIT_REPO_HEAD":"2024-08-12 452ba76a5f29f0177f594b33ca38683a0b37f9c1","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/9-example/9a.wings-change/9a1.242-201.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/9-example/9a.wings-change/9a1.242-201.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"9A1.Upgrade 2.4.2.201"}],["meta",{"property":"og:description","content":"9A1.Upgrade 2.4.2.201 Upgraded build 200 to 201, closer to flywave's engineering practices, with the following major incompatibility, Adjusted pom.xml structure, former wings-ho..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9A1.Upgrade 2.4.2.201\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"9A1.1.Maven Setting","slug":"_9a1-1-maven-setting","link":"#_9a1-1-maven-setting","children":[]},{"level":2,"title":"9A1.2.Table Restruct","slug":"_9a1-2-table-restruct","link":"#_9a1-2-table-restruct","children":[]},{"level":2,"title":"9A1.3.Compile Error","slug":"_9a1-3-compile-error","link":"#_9a1-3-compile-error","children":[]},{"level":2,"title":"9A1.4.DataSource Change","slug":"_9a1-4-datasource-change","link":"#_9a1-4-datasource-change","children":[]}],"git":{"createdTime":1656137116000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":1.44,"words":433},"filePathRelative":"9-example/9a.wings-change/9a1.242-201.md","localizedDate":"June 25, 2022","autoDesc":true}`);export{C as comp,F as data};
