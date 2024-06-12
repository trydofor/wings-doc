import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as t,e as n}from"./app-D1G0Arv-.js";const i={},o=n('<h1 id="_2g-sharding-faq-topic" tabindex="-1"><a class="header-anchor" href="#_2g-sharding-faq-topic"><span>2G.Sharding Faq Topic</span></a></h1><p>Topics about database sharding and splitting.</p><h2 id="_2g-01-no-implementation-spi" tabindex="-1"><a class="header-anchor" href="#_2g-01-no-implementation-spi"><span>2G.01. No implementation SPI</span></a></h2><p>No implementation class load from SPI with type <code>null</code></p><p>Avoid using Chinese in naming, for boundary test, find shardingsphere can directly handle Chinese table name, but for other naming will cause some parsing error.</p><p>Such as <code>sharding-algorithms.[sharding-inline]</code>, it will fail and make its <code>.type=null</code>, thus reporting an error.</p><p>No implementation class load from SPI <code>org.apache.shardingsphere.sharding.spi.ShardingAlgorithm</code> with type <code>null</code></p><h2 id="_2g-02-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#_2g-02-on-duplicate-key-update"><span>2G.02.ON DUPLICATE KEY UPDATE</span></a></h2><p>INSERT INTO ... ON DUPLICATE KEY UPDATE can not support update for sharding column</p><p>then append sharding column and value to WHERE Clause</p><p><a href="https://github.com/apache/shardingsphere/issues/14025" target="_blank" rel="noopener noreferrer">https://github.com/apache/shardingsphere/issues/14025</a></p><p>This feature was released around 5.1.0</p>',12),r=[o];function s(p,l){return t(),a("div",null,r)}const h=e(i,[["render",s],["__file","2g-qa-shard.html.vue"]]),m=JSON.parse('{"path":"/2-faceless/2g-qa-shard.html","title":"2G.Sharding Faq Topic","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"layer-group","category":["Faceless","Database","Topic"],"description":"2G.Sharding Faq Topic Topics about database sharding and splitting. 2G.01. No implementation SPI No implementation class load from SPI with type null Avoid using Chinese in nami...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/2-faceless/2g-qa-shard.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/2-faceless/2g-qa-shard.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"2G.Sharding Faq Topic"}],["meta",{"property":"og:description","content":"2G.Sharding Faq Topic Topics about database sharding and splitting. 2G.01. No implementation SPI No implementation class load from SPI with type null Avoid using Chinese in nami..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2G.Sharding Faq Topic\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"2G.01. No implementation SPI","slug":"_2g-01-no-implementation-spi","link":"#_2g-01-no-implementation-spi","children":[]},{"level":2,"title":"2G.02.ON DUPLICATE KEY UPDATE","slug":"_2g-02-on-duplicate-key-update","link":"#_2g-02-on-duplicate-key-update","children":[]}],"git":{"createdTime":1655901635000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":0.4,"words":119},"filePathRelative":"2-faceless/2g-qa-shard.md","localizedDate":"June 22, 2022","autoDesc":true}');export{h as comp,m as data};
