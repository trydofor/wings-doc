import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as s,b as e,e as o,d as a,f as n}from"./app-7d38ae22.js";const r={},l=e("h1",{id:"_2c-separation-and-sharding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-separation-and-sharding","aria-hidden":"true"},"#"),o(" 2C.Separation and Sharding")],-1),h=e("blockquote",null,[e("p",null,"Add a state to the inflated data, stop the time, divide and conquer, and combine.")],-1),u=e("p",null,"Use ShardingJdbc to handle RW separation, data sharding to handle large data smoothly. Wings uses shard to broadly represent DataSharding, ReadWrite Splitting/Separation.",-1),p=e("h2",{id:"_2c-1-shortcoming-of-sharding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-1-shortcoming-of-sharding","aria-hidden":"true"},"#"),o(" 2C.1.Shortcoming of Sharding")],-1),_=e("code",null,"ShardingJdbc",-1),g=e("code",null,"journal",-1),m=e("code",null,"plain",-1),f=e("code",null,"flywave",-1),E={href:"https://shardingsphere.apache.org/document/current/cn/features/sharding/principle/parse/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[o("It may not be necessary to consider shard tables at the beginning of the business, when needed, you can use "),e("code",null,"flywave"),o(" to generate tables and migrate data.")],-1),y=e("p",null,[o("By default, DDL, DCL use "),e("code",null,"plain"),o(" datasource, DML etc. use "),e("code",null,"shard"),o(" datasource to execute. You can also specify the datasource manually to accomplish customized data operations.")],-1),L=e("h2",{id:"_2c-2-things-in-sql-execution",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2c-2-things-in-sql-execution","aria-hidden":"true"},"#"),o(" 2C.2.Things in SQL Execution")],-1),S={href:"https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-definition.html",target:"_blank",rel:"noopener noreferrer"},D=n("<ul><li><code>ALTER TABLE</code></li><li><code>CREATE INDEX</code></li><li><code>CREATE TABLE</code></li><li><code>CREATE TRIGGER</code></li><li><code>DROP INDEX</code></li><li><code>DROP TABLE</code> can only be one table at a time</li><li><code>DROP TRIGGER</code> specify <code>plain</code> table manually, according to <code>shard</code> table naming rules to execute</li><li><code>TRUNCATE TABLE</code></li></ul><p>Among them, except for the system-generated trigger for <code>journal</code>, manual deletion will cause data inconsistency.</p>",2),x={href:"https://dev.mysql.com/doc/refman/8.0/en/sql-syntax-data-manipulation.html",target:"_blank",rel:"noopener noreferrer"},T=n("<ul><li><code>DELETE</code></li><li><code>INSERT</code></li><li><code>REPLACE</code></li><li><code>UPDATE</code></li></ul><p>For SQL other than the above types, please use a comment to force to specify <code>datasource</code> and <code>plain</code> table to skip the SQL auto parsing. Theoretically, you should not use flywave to execute SQL other than DDL,DCL and DML, which is outside the scope of versioning.</p>",2);function R(A,C){const t=d("ExternalLinkIcon");return c(),s("div",null,[l,h,u,p,e("p",null,[o("Because "),_,o(" has some SQL parsing problems (index,trigger) when executing SCHEMA changes. So when doing SCHEMA and "),g,o(" operation, use "),m,o(" datasource and finish it with "),f,o(". "),e("a",E,[o("Reference SQL parsing engine"),a(t)])]),b,y,L,e("p",null,[e("a",S,[o("DDL - Data Definition Statements"),a(t)])]),D,e("p",null,[e("a",x,[o("DML - Data Manipulation Statements"),a(t)])]),T])}const w=i(r,[["render",R],["__file","2c-shard.html.vue"]]);export{w as default};
