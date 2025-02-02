import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as o,o as n}from"./app-B4-M_2GK.js";const r={};function i(p,e){return n(),a("div",null,e[0]||(e[0]=[o('<h1 id="_2g-分表分库话题" tabindex="-1"><a class="header-anchor" href="#_2g-分表分库话题"><span>2G.分表分库话题</span></a></h1><p>有关数据库和数据操作的话题</p><h2 id="_2g-01-no-implementation-spi" tabindex="-1"><a class="header-anchor" href="#_2g-01-no-implementation-spi"><span>2G.01. No implementation SPI</span></a></h2><p>No implementation class load from SPI with type <code>null</code></p><p>命名中避免使用中文，边界测试时，发现shardingsphere可以直接中文表名，但对其他命名会截断错误。 如<code>sharding-algorithms.[中文也分表-inline]</code>，会截断错误，使其<code>.type=null</code>，从而报错， No implementation class load from SPI <code>org.apache.shardingsphere.sharding.spi.ShardingAlgorithm</code> with type <code>null</code></p><h2 id="_2g-02-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#_2g-02-on-duplicate-key-update"><span>2G.02.ON DUPLICATE KEY UPDATE</span></a></h2><p>INSERT INTO ... ON DUPLICATE KEY UPDATE can not support update for sharding column</p><p>then append sharding column and value to WHERE Clause</p><p><a href="https://github.com/apache/shardingsphere/issues/14025" target="_blank" rel="noopener noreferrer">https://github.com/apache/shardingsphere/issues/14025</a></p><p>此功能大概在 5.1.0发布</p>',10)]))}const d=t(r,[["render",i],["__file","2g-qa-shard.html.vue"]]),c=JSON.parse('{"path":"/zh/2-faceless/2g-qa-shard.html","title":"2G.分表分库话题","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"layer-group","category":["虚空","数据","话题"],"description":"2G.分表分库话题 有关数据库和数据操作的话题 2G.01. No implementation SPI No implementation class load from SPI with type null 命名中避免使用中文，边界测试时，发现shardingsphere可以直接中文表名，但对其他命名会截断错误。 如sharding-algorit...","GIT_REPO_HEAD":"2025-02-02 9cab7f71f34df19a1b0adffd87fa71dbbe019019","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/2-faceless/2g-qa-shard.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/2-faceless/2g-qa-shard.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"2G.分表分库话题"}],["meta",{"property":"og:description","content":"2G.分表分库话题 有关数据库和数据操作的话题 2G.01. No implementation SPI No implementation class load from SPI with type null 命名中避免使用中文，边界测试时，发现shardingsphere可以直接中文表名，但对其他命名会截断错误。 如sharding-algorit..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2G.分表分库话题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"2G.01. No implementation SPI","slug":"_2g-01-no-implementation-spi","link":"#_2g-01-no-implementation-spi","children":[]},{"level":2,"title":"2G.02.ON DUPLICATE KEY UPDATE","slug":"_2g-02-on-duplicate-key-update","link":"#_2g-02-on-duplicate-key-update","children":[]}],"git":{"createdTime":1655901635000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":5,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":0.5,"words":151},"filePathRelative":"zh/2-faceless/2g-qa-shard.md","localizedDate":"2022年6月22日","autoDesc":true}');export{d as comp,c as data};
