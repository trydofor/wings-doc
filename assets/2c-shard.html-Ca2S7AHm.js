import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as d,c as s,b as e,e as t,d as o,f as n}from"./app-Fb-j-8_i.js";const c={},l=e("h1",{id:"_2c-separation-and-sharding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-separation-and-sharding"},[e("span",null,"2C.Separation and Sharding")])],-1),h=e("blockquote",null,[e("p",null,"Add a state to the inflated data, stop the time, divide and conquer, and combine.")],-1),p=e("p",null,"Use ShardingJdbc to handle RW separation, data sharding to handle large data smoothly. Wings uses shard to broadly represent DataSharding, ReadWrite Splitting/Separation.",-1),u=e("h2",{id:"_2c-1-shortcoming-of-sharding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-1-shortcoming-of-sharding"},[e("span",null,"2C.1.Shortcoming of Sharding")])],-1),g=e("code",null,"ShardingJdbc",-1),m=e("code",null,"journal",-1),_=e("code",null,"plain",-1),f=e("code",null,"flywave",-1),y={href:"https://shardingsphere.apache.org/document/current/cn/features/sharding/principle/parse/",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[t("It may not be necessary to consider shard tables at the beginning of the business, when needed, you can use "),e("code",null,"flywave"),t(" to generate tables and migrate data.")],-1),E=e("p",null,[t("By default, DDL, DCL use "),e("code",null,"plain"),t(" datasource, DML etc. use "),e("code",null,"shard"),t(" datasource to execute. You can also specify the datasource manually to accomplish customized data operations.")],-1),b=e("h2",{id:"_2c-2-things-in-sql-execution",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-2-things-in-sql-execution"},[e("span",null,"2C.2.Things in SQL Execution")])],-1),T={href:"https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-definition.html",target:"_blank",rel:"noopener noreferrer"},D=n("<ul><li><code>ALTER TABLE</code></li><li><code>CREATE INDEX</code></li><li><code>CREATE TABLE</code></li><li><code>CREATE TRIGGER</code></li><li><code>DROP INDEX</code></li><li><code>DROP TABLE</code> can only be one table at a time</li><li><code>DROP TRIGGER</code> specify <code>plain</code> table manually, according to <code>shard</code> table naming rules to execute</li><li><code>TRUNCATE TABLE</code></li></ul><p>Among them, except for the system-generated trigger for <code>journal</code>, manual deletion will cause data inconsistency.</p>",2),x={href:"https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-manipulation.html",target:"_blank",rel:"noopener noreferrer"},L=n("<ul><li><code>DELETE</code></li><li><code>INSERT</code></li><li><code>REPLACE</code></li><li><code>UPDATE</code></li></ul><p>For SQL other than the above types, please use a comment to force to specify <code>datasource</code> and <code>plain</code> table to skip the SQL auto parsing. Theoretically, you should not use flywave to execute SQL other than DDL,DCL and DML, which is outside the scope of versioning.</p>",2);function C(R,A){const a=r("ExternalLinkIcon");return d(),s("div",null,[l,h,p,u,e("p",null,[t("Because "),g,t(" has some SQL parsing problems (index,trigger) when executing SCHEMA changes. So when doing SCHEMA and "),m,t(" operation, use "),_,t(" datasource and finish it with "),f,t(". "),e("a",y,[t("Reference SQL parsing engine"),o(a)])]),S,E,b,e("p",null,[e("a",T,[t("DDL - Data Definition Statements"),o(a)])]),D,e("p",null,[e("a",x,[t("DML - Data Manipulation Statements"),o(a)])]),L])}const k=i(c,[["render",C],["__file","2c-shard.html.vue"]]),q=JSON.parse('{"path":"/2-faceless/2c-shard.html","title":"2C.Separation and Sharding","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"tree","category":["Faceless","Sharding","Separation"],"description":"2C.Separation and Sharding Add a state to the inflated data, stop the time, divide and conquer, and combine. Use ShardingJdbc to handle RW separation, data sharding to handle la...","GIT_REPO_HEAD":"2024-06-01 4324f89a1d61d4d9c659d44027d6273050171a74","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/2-faceless/2c-shard.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/2-faceless/2c-shard.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"2C.Separation and Sharding"}],["meta",{"property":"og:description","content":"2C.Separation and Sharding Add a state to the inflated data, stop the time, divide and conquer, and combine. Use ShardingJdbc to handle RW separation, data sharding to handle la..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-26T00:40:09.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-06-26T00:40:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2C.Separation and Sharding\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-26T00:40:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"2C.1.Shortcoming of Sharding","slug":"_2c-1-shortcoming-of-sharding","link":"#_2c-1-shortcoming-of-sharding","children":[]},{"level":2,"title":"2C.2.Things in SQL Execution","slug":"_2c-2-things-in-sql-execution","link":"#_2c-2-things-in-sql-execution","children":[]}],"git":{"createdTime":1680228107000,"updatedTime":1687740009000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":0.88,"words":264},"filePathRelative":"2-faceless/2c-shard.md","localizedDate":"March 31, 2023","autoDesc":true}');export{k as comp,q as data};
