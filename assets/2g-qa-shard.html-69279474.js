import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as r,b as e,e as s,d as i,f as d}from"./app-e023e888.js";const c={},h=d('<h1 id="_2g-分表分库话题" tabindex="-1"><a class="header-anchor" href="#_2g-分表分库话题" aria-hidden="true">#</a> 2G.分表分库话题</h1><p>有关数据库和数据操作的话题</p><h2 id="_2g-01-no-implementation-spi" tabindex="-1"><a class="header-anchor" href="#_2g-01-no-implementation-spi" aria-hidden="true">#</a> 2G.01. No implementation SPI</h2><p>No implementation class load from SPI with type <code>null</code></p><p>命名中避免使用中文，边界测试时，发现shardingsphere可以直接中文表名，但对其他命名会截断错误。 如<code>sharding-algorithms.[中文也分表-inline]</code>，会截断错误，使其<code>.type=null</code>，从而报错， No implementation class load from SPI <code>org.apache.shardingsphere.sharding.spi.ShardingAlgorithm</code> with type <code>null</code></p><h2 id="_2g-02-on-duplicate-key-update" tabindex="-1"><a class="header-anchor" href="#_2g-02-on-duplicate-key-update" aria-hidden="true">#</a> 2G.02.ON DUPLICATE KEY UPDATE</h2><p>INSERT INTO ... ON DUPLICATE KEY UPDATE can not support update for sharding column</p><p>then append sharding column and value to WHERE Clause</p>',8),p={href:"https://github.com/apache/shardingsphere/issues/14025",target:"_blank",rel:"noopener noreferrer"},l=e("p",null,"此功能大概在 5.1.0发布",-1);function m(_,u){const a=o("ExternalLinkIcon");return t(),r("div",null,[h,e("p",null,[e("a",p,[s("https://github.com/apache/shardingsphere/issues/14025"),i(a)])]),l])}const E=n(c,[["render",m],["__file","2g-qa-shard.html.vue"]]);export{E as default};