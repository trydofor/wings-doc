import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,b as e,e as n,d as a,w as p,f as t}from"./app-7d38ae22.js";const d={},u=t(`<h1 id="_0d-devops-topic" tabindex="-1"><a class="header-anchor" href="#_0d-devops-topic" aria-hidden="true">#</a> 0D.DevOps Topic</h1><p>Coding, developing, operating online, and more.</p><h2 id="_0d-01-gethostname-takes-a-long-time" tabindex="-1"><a class="header-anchor" href="#_0d-01-gethostname-takes-a-long-time" aria-hidden="true">#</a> 0D.01.getHostName() takes a long time</h2><blockquote><p>InetAddress.getLocalHost().getHostName() took 5004 milliseconds to respond. Please verify your network configuration (macOS machines may need to add entries to /etc/hosts)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">hostname</span>
<span class="token comment"># output trydofors-Hackintosh.local</span>

<span class="token function">cat</span> /etc/hosts
<span class="token comment"># insert trydofors-Hackintosh.local after localhost</span>
<span class="token number">127.0</span>.0.1     localhost trydofors-Hackintosh.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-02-how-to-create-a-project" tabindex="-1"><a class="header-anchor" href="#_0d-02-how-to-create-a-project" aria-hidden="true">#</a> 0D.02.How to Create a Project</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/trydofor/pro.fessional.wings.git
<span class="token builtin class-name">cd</span> pro.fessional.wings
observe/scripts/wings-init-project.sh

<span class="token comment"># compile and run it yourself without bash script</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">cd</span> example/winx-devops/src/test/java
com/moilioncircle/wings/devops/init/WingsInitProjectSwing.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-03-jackson-and-fastjson" tabindex="-1"><a class="header-anchor" href="#_0d-03-jackson-and-fastjson" aria-hidden="true">#</a> 0D.03.Jackson and Fastjson</h2><p>In wings, as in springboot, jackson is used by default for json and xml binding. However, wings has special conventions for json format, such as date and number are passed as string. When exchanging data with external APIs, the format may not match, so you need to use an alternative solution.</p><ul><li>Use 2 sets of jackson configuration</li><li>Use jackson annotation @JsonRawValue</li><li>Use fastjson2</li></ul><p>When using Jackson and FastJson, the following conventions are followed for security and compatibility reasons,</p><ul><li>FastJson is used for ① reading and writing in a secure environment, ② insecure writing, not reading the external json.</li><li>FastJson is used in static environments, i.e. where Jackson cannot be gracefully injected.</li><li>In addition, everyone should use Jackson.</li></ul><p>Fastjson has been replaced by Fastjson2 in wings. note the following lib dependencies</p><ul><li>JustAuth-1.16.5 - fastjson-1.2.83 no AutoType, parse with default features</li></ul><p>Given the current Fastjson-2.0.18 compatibility and stability is still very problematic and should be avoided.</p><ul><li>FastJsonHelper - Global configuration for FastJson compatibility, all JSON should use this class.</li><li>JacksonHelper - Global configuration for Jackson, recommended for static use.</li></ul><h2 id="_0d-04-comparison-of-bean-mapping" tabindex="-1"><a class="header-anchor" href="#_0d-04-comparison-of-bean-mapping" aria-hidden="true">#</a> 0D.04.Comparison of Bean Mapping</h2><p>According to the following article, it is recommended to use the static type-safe of <code>MapStruct</code>.</p>`,18),h={href:"https://www.baeldung.com/mapstruct",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.baeldung.com/java-mapstruct-mapping-collections",target:"_blank",rel:"noopener noreferrer"},g={href:"https://mapstruct.org/documentation/installation/",target:"_blank",rel:"noopener noreferrer"},b=t("<p>While coding, we often have to deal with various O-data mapping and assignment like DTO, PO, VO, POJO. At the same time we want strongly typed data so that IDE hints are efficient and errors are detected at compile time. This must avoid weak typing (map, json) and reflection (bean copy), which inevitably require code generation tools.</p><p>For more complex mapping, use expression, qualifiedByName, spring injection. The automatically generated code is located in <code>target/generated-sources/annotations/</code></p><p>In wings, it is recommended to use the column editor or RegExp (talked in video share), for using MapStruct You can use the <code>wgmp</code>(live template) provided by wings to do the <code>A2B</code> generator.</p><ul><li>In the business layer code, we recommend MapStruct or column editing or RegExp replacement to do data mapping.</li><li>In jdbc recommended manual RowMapper, avoid using <code>BeanPropertyRowMapper</code>.</li><li>In jooq recommended jooqgen generated record, currently do not need other mapper.</li></ul><p>The converters in pure wings end with <code>-or</code> (convertor) to distinguish from other framework converters.<br> Package names are based on the converter, and class names are distinguished by purpose, usually using <code>-or</code> for pure wings and <code>-er</code> for others.</p><p>According to the following benchmark review of JMH, corresponding to dynamic Mapper can also be considered.</p>",6),f={href:"https://www.baeldung.com/java-performance-mapping-frameworks",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/arey/java-object-mapper-benchmark",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>The main comparison includes project activity, usage type, dependency complexity and resolved issues count.</p><ul><li><code>SimpleFlatMapper</code> is not active</li><li><code>ModelMapper</code> is too large, not recommended for now</li><li><code>JMapper</code> performance and use are very good, but the project is not active</li><li><code>bull</code> support bean and map mapping, more active, easy to use, but the performance is general</li></ul><p>upgraded java-object-mapper-benchmark dependency to java on the laptop simple execution.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Benchmark          (type)   Mode  Cnt         Score         Error  Units
Mapper             Manual  thrpt   25  27226210.883 ± 1350138.859  ops/s
Mapper    MapStruct-1.5.3  thrpt   25  23601713.316 ± 1247240.366  ops/s
Mapper          Selma-1.0  thrpt   25  24161620.968 ±  923848.147  ops/s
Mapper  JMapper-1.6.1.CR2  thrpt   25  19632956.722 ±  963388.556  ops/s
Mapper        datus-1.5.0  thrpt   25  13925750.428 ±  670830.594  ops/s
Mapper        Orika-1.5.4  thrpt   25   2950142.922 ±  203656.089  ops/s
Mapper  ModelMapper-3.1.0  thrpt   25    121694.578 ±   13540.111  ops/s
Mapper   BULL-2.1.2-jdk11  thrpt   25    127806.434 ±   12011.688  ops/s
Mapper        Dozer-6.5.2  thrpt   25     83840.654 ±    3225.088  ops/s
Mapper        ReMap-4.2.6  thrpt   25    505843.993 ±   25950.082  ops/s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-05-file-system-and-object-storage" tabindex="-1"><a class="header-anchor" href="#_0d-05-file-system-and-object-storage" aria-hidden="true">#</a> 0D.05.File System and Object Storage</h2><p>File resources that require access permissions should not be placed on the CDN, and should be stored in your own object storage or physical file system. When using local FS, you need to be aware of the limit of the number of subfiles, which is usually controlled below 30k, for the following reasons.</p><ul><li>The ext2/ext3 filesystems have a hard limit of 31998 links.</li><li>When the number is too large, reads and indexes are too slow.</li></ul><p>If you build your own object storage, the following solution is recommended</p>`,8),_={href:"https://docs.min.io/cn/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/happyfish100/fastdfs",target:"_blank",rel:"noopener noreferrer"},y=e("h2",{id:"_0d-06-client-and-server-info",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0d-06-client-and-server-info","aria-hidden":"true"},"#"),n(" 0D.06.Client and Server Info")],-1),x=e("p",null,"To collect user profiles, parse UA information, use the following,",-1),j={href:"https://www.bitwalker.eu/software/user-agent-utils",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/browscap/browscap/wiki/Using-Browscap",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/blueconic/browscap-java",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"To get information about server, use the following,",-1),S={href:"https://github.com/oshi/oshi",target:"_blank",rel:"noopener noreferrer"},M=e("h2",{id:"_0d-07-security-of-password",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0d-07-security-of-password","aria-hidden":"true"},"#"),n(" 0D.07.Security of Password")],-1),C=e("li",null,"Do NOT limit the max length of password, generally more than 8 chars",-1),I=e("li",null,"Support Unicode chars, punctuation, full/half chars, eg. Chinese password",-1),q=e("li",null,"Do not send in plaintext, simple password hash strategy is md5(pass+':'+pass).toUpperCase(Hex capitalization)",-1),z={href:"https://github.com/emn178/js-md5",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,"Secure data request must be https or other secure channel",-1),F=e("h2",{id:"_0d-08-nat-and-oauth-debug",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0d-08-nat-and-oauth-debug","aria-hidden":"true"},"#"),n(" 0D.08.NAT and Oauth Debug")],-1),P=e("p",null,"When debugging third-party integrations such as Oauth, payments, etc., you need to have a public ip or domain to forward public requests to the development machine for debugging.",-1),N=e("li",null,[n("Temporarily with ssh - "),e("code",null,"ssh -R 9988:127.0.0.1:8080 user@remote")],-1),J={href:"https://gofrp.org/docs/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://natapp.cn/",target:"_blank",rel:"noopener noreferrer"},R=t(`<h2 id="_0d-09-idea-hits-component-scanned" tabindex="-1"><a class="header-anchor" href="#_0d-09-idea-hits-component-scanned" aria-hidden="true">#</a> 0D.09.IDEA Hits Component/Scanned</h2><p>When importing the Wings project, IDEA cannot be able to handle the WingsAutoConfiguration in spring.factsories, and will report a message similar to the following,</p><p>Not registered via @EnableConfigurationProperties, marked as Spring component, or scanned via @ConfigurationPropertiesScan</p><p>At this point, in the Project Structure/Facets/spring, for each main project import <code>Code based configuration</code>, select WingsAutoConfiguration.</p><h2 id="_0d-10-hidden-nullpointerexception-in-jooq" tabindex="-1"><a class="header-anchor" href="#_0d-10-hidden-nullpointerexception-in-jooq" aria-hidden="true">#</a> 0D.10.Hidden NullPointerException in Jooq</h2><p>When mapping enum types in jooq, if the converter is wrong, the following NPE may occur, and the problem cannot be located by stack, and need to analyze the SQL</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.lang.NullPointerException
at org.jooq.impl.DefaultExecuteContext.exception(DefaultExecuteContext.java:737)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.handle(JooqExceptionTranslator.java:83)
at org.springframework.boot.autoconfigure.jooq.JooqExceptionTranslator.exception(JooqExceptionTranslator.java:55)
at org.jooq.impl.ExecuteListeners.exception(ExecuteListeners.java:274)
at org.jooq.impl.AbstractQuery.execute(AbstractQuery.java:390)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-11-input-length-1-error" tabindex="-1"><a class="header-anchor" href="#_0d-11-input-length-1-error" aria-hidden="true">#</a> 0D.11.<code>Input length = 1</code> Error</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Failed to execute goal org.apache.maven.plugins:maven-resources-plugin:3.2.0:resources
  (default-resources) on project xxx-common: Input length = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The reason is that there are non-text files (not readable by string) in the filter directory of the maven-resources-plugin. Do not downgrade to 3.1.0, just add the extension name in nonFilteredFileExtension.</p>`,10),H={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#howto-properties-and-configuration",target:"_blank",rel:"noopener noreferrer"},W=e("h2",{id:"_0d-12-data-can-be-selected-but-wings-cannot",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0d-12-data-can-be-selected-but-wings-cannot","aria-hidden":"true"},"#"),n(" 0D.12.Data Can Be Selected, But Wings Cannot")],-1),B=e("p",null,"Wings is timezone sensitive and generally requires jvm and mysql to be in the same timezone, mainly because, flywave's version management and journal's delete_dt time use datetime, which can quickly find the time difference problem.",-1),L=e("p",null,"Warlock automatically checks the timezone between jvm, jdbc and mysql at startup, and prints an error to console if they do not match.",-1),U=t('<h2 id="_0d-13-how-to-flywave-the-internal-mysql" tabindex="-1"><a class="header-anchor" href="#_0d-13-how-to-flywave-the-internal-mysql" aria-hidden="true">#</a> 0D.13.How To Flywave The Internal Mysql</h2><p>It is recommended to run and monitor the script manually with double check. So use ssh Tunnel to do the port forwarding.</p><p><code>ssh -N -L 3336:127.0.0.1:3306 [USER]@[SERVER_IP]</code></p><ul><li><code>-N</code> Tells SSH not to execute a remote command.</li><li><code>-L</code> 3336:127.0.0.1:3306 local-port, remote-ip, remote-port</li></ul><h2 id="_0d-14-swagger-s-problem" tabindex="-1"><a class="header-anchor" href="#_0d-14-swagger-s-problem" aria-hidden="true">#</a> 0D.14.Swagger&#39;s Problem</h2><p><strong>After version 210, replacing SpringFox with SpringDoc</strong>, using swagger 3.0, some problems no longer exist.</p><p><code>😱 Could not render n, see the console.</code> It is swagger front-end js error, may be the response object level is too deep, resulting in swagger scan time is too long.</p><p><code>Unable to find a model that matches key ...</code></p><ul><li>ModelKey{qualifiedModelName=ModelName{namespace=&#39;java.time&#39;, name=&#39;Instant&#39;}</li><li>ModelKey{qualifiedModelName=ModelName{namespace=&#39;java.time&#39;, name=&#39;LocalDateTime&#39;}</li></ul>',9),G={href:"https://github.com/springfox/springfox/issues/3452",target:"_blank",rel:"noopener noreferrer"},V=t('<p>Wings can automatically inject the exposed AlternateTypeRule bean into the docket.</p><h2 id="_0d-15-classcastexception-or-enum-comparison-failure-during-deserialization" tabindex="-1"><a class="header-anchor" href="#_0d-15-classcastexception-or-enum-comparison-failure-during-deserialization" aria-hidden="true">#</a> 0D.15.ClassCastException or Enum Comparison Failure During Deserialization</h2><p>The deserialization libs involved include, hazelcast, kryo, cache</p><ul><li>Exactly the same class, but throwing ClassCastException on deserialization</li><li>The hash and equals of the same Enum are different, causing the compare or map to fail</li></ul><p>Most likely, the project uses spring-boot-devtools during development, which causes the IDE and jar to be in different classloaders. The IDE uses <code>restart</code> of devtools, while the non-IDE jar is <code>base</code>.</p><ul><li>Option 1, always use <code>spring.hazelcast.config</code> in wings to configure hazelcast</li><li>Option 2, expose your own Config or ClientConfig, and set up a classloader</li><li>Option 3, configure spring-devtools.properties (not recommended)</li></ul>',6),K={href:"https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#",target:"_blank",rel:"noopener noreferrer"},Q=e("h2",{id:"_0d-16-outofmemoryerror-callernotmemberexception-in-hazelcast",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0d-16-outofmemoryerror-callernotmemberexception-in-hazelcast","aria-hidden":"true"},"#"),n(" 0D.16.OutOfMemoryError/CallerNotMemberException in Hazelcast")],-1),Y=e("p",null,"If memory is low, hazelcast will throw OutOfMemoryError and then the cluster will reject the instance with CallerNotMemberException.",-1),$=e("p",null,"Usually the concurrency level is not more than 10,000, allocating 2-4G for instance jvm and reserving a physical memory free for 1 instance in the host can be suitable for most scenarios.",-1),Z=e("blockquote",null,[e("p",null,"For this reason, we recommend that you plan to use only 60% of available memory, with 40% headroom to handle member failure or shutdown.")],-1),X={href:"https://hazelcast.com/blog/how-much-memory-do-i-need-for-my-data/",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://docs.hazelcast.com/hazelcast/5.1/configuration/understanding-configuration",target:"_blank",rel:"noopener noreferrer"},ne=e("h2",{id:"_0d-17-table-doesn-t-exist-when-creating-table",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0d-17-table-doesn-t-exist-when-creating-table","aria-hidden":"true"},"#"),n(" 0D.17."),e("code",null,"Table doesn't exist"),n(" When Creating Table")],-1),ae=e("p",null,[n("Error message "),e("code",null,"Error Code: 1146. table xxx doesn't exist"),n(". This is a contradiction, creating a table just because it does not exist, why won't it allow me to create it.")],-1),se=e("p",null,[n("This is related to the case-sensitive file system, wings Sql style recommends all lowercase, snake_case. In addition, it is also recommended to add "),e("code",null,"lower_case_table_names=1"),n(" to the mysqld configuration")],-1),te={href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names",target:"_blank",rel:"noopener noreferrer"},oe=t(`<h2 id="_0d-18-how-to-unpack-the-springboot-jar" tabindex="-1"><a class="header-anchor" href="#_0d-18-how-to-unpack-the-springboot-jar" aria-hidden="true">#</a> 0D.18.How to Unpack the Springboot Jar</h2><p>The boot.jar generated by executable=true cannot be extracted using <code>jar -xzf</code>, it needs <code>unzip</code>. It is always recommended to use unzip for compatibility and command line simplicity.</p><p>You can&#39;t use jar to unzip because spring repacks in the executable zip format.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># show the file list</span>
<span class="token function">unzip</span> <span class="token parameter variable">-l</span> demo-exmaple-1.0.0-SNAPSHOT.jar
<span class="token comment"># show the content</span>
<span class="token function">head</span> demo-exmaple-1.0.0-SNAPSHOT.jar
<span class="token comment">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment">#    .   ____          _            __ _ _</span>
<span class="token comment">#   /\\\\ / ___&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\</span>
<span class="token comment">#  ( ( )\\___ | &#39;_ | &#39;_| | &#39;_ \\/ _\` | \\ \\ \\ \\</span>
<span class="token comment">#   \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )</span>
<span class="token comment">#    &#39;  |____| .__|_| |_|_| |_\\__, | / / / /</span>
<span class="token comment">#   =========|_|==============|___/=/_/_/_/</span>
<span class="token comment">#   :: Spring Boot Startup Script ::</span>
<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-19-not-eligible-for-auto-proxying" tabindex="-1"><a class="header-anchor" href="#_0d-19-not-eligible-for-auto-proxying" aria-hidden="true">#</a> 0D.19.Not Eligible for Auto-proxying</h2><p>is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)</p><p>There is a loading order for beans in spring, <code>Processor</code>, <code>framework</code> and business beans should be separated. If some beans are loaded before the Processor because of dependencies, they will not be processed correctly and may affect the business.</p><p>If there is no impact on the business after troubleshooting, then the INFO level Warning can be ignored.</p><h2 id="_0d-20-timezone-check-failed-on-application-startup" tabindex="-1"><a class="header-anchor" href="#_0d-20-timezone-check-failed-on-application-startup" aria-hidden="true">#</a> 0D.20.Timezone check failed on application startup</h2><ul><li>Set the correct timezone according to the alert of the exception</li><li>Make sure the jdbc driver mysql-connector version is not lower than 8.0.23</li><li>Set <code>wings.warlock.check.tz-fail=false</code> if you don&#39;t want the check</li><li>Just follow the prompts and unify the time zones of jdbc and wings</li></ul><h2 id="_0d-21-clean-the-log-tmp-files" tabindex="-1"><a class="header-anchor" href="#_0d-21-clean-the-log-tmp-files" aria-hidden="true">#</a> 0D.21.Clean the Log/Tmp Files</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># clean log and tmp</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.log&#39;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;*.tmp&#39;</span>  <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> 
<span class="token comment"># clean flattened pom</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;.pom.xml&#39;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-22-generics-in-json-and-deserialization" tabindex="-1"><a class="header-anchor" href="#_0d-22-generics-in-json-and-deserialization" aria-hidden="true">#</a> 0D.22.Generics in Json and Deserialization</h2><p>In spring, the type is described using ResolvableType and TypeDescriptor.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TypeDescriptor</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> strTd<span class="token punctuation">,</span> strTd<span class="token punctuation">)</span>
<span class="token class-name">TypeDescriptor</span><span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> strTd<span class="token punctuation">)</span>
<span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClassWithGenerics</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Dto</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In FastJson, use com.alibaba.fastjson.TypeReference, Note: TypeReference must be declared on a single line to avoid auto derivation to lose the type.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// these are same</span>
<span class="token class-name">Type</span> tp1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">&lt;</span><span class="token class-name">Dto</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Type</span> tp2 <span class="token operator">=</span> <span class="token class-name">ResolvableType</span><span class="token punctuation">.</span><span class="token function">forClassWithGenerics</span><span class="token punctuation">(</span><span class="token class-name">R</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Dto</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-23-kotlin-may-fail-to-compile" tabindex="-1"><a class="header-anchor" href="#_0d-23-kotlin-may-fail-to-compile" aria-hidden="true">#</a> 0D.23.Kotlin May Fail to Compile</h2><ul><li>kotlin-maven-plugin, to compile both java and kotlin</li><li>kotlin-stdlib-jdk8 This is the latest stdlib</li><li>maven.compiler.target in the mvn profile takes precedence over pom.xml</li><li>whether JAVA_HOME specifies the correct jdk version</li><li><code>wings-kotlin-*</code> profile is auto active if <code>src/*/kotlin/</code> is available</li></ul><h2 id="_0d-24-applicationcontexthelper-s-nullpointerexception" tabindex="-1"><a class="header-anchor" href="#_0d-24-applicationcontexthelper-s-nullpointerexception" aria-hidden="true">#</a> 0D.24.ApplicationContextHelper&#39;s NullPointerException</h2><p>Silencer&#39;s ApplicationContextHelper provides a static Ioc capability with a NPE case,</p><ul><li>Use before <code>PreparedEvent</code> in SpringBoot lifecycle</li><li>Used in different classloaders, such as devtool&#39;s <code>restart</code></li></ul><h2 id="_0d-25-classformaterror-idea-cannot-open-the-project" tabindex="-1"><a class="header-anchor" href="#_0d-25-classformaterror-idea-cannot-open-the-project" aria-hidden="true">#</a> 0D.25.ClassFormatError, IDEA cannot open the project</h2><p>IDEA does not display the project properly and cannot be opened after closing it, but mvn works fine in the command line. Errors has the following message, upgrade IDEA or avoid its Maven plugin upgrade.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.lang.ClassFormatError: 
Illegal exception table range in class file 
kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_0d-26-garbled-chars-in-properties-under-idea" tabindex="-1"><a class="header-anchor" href="#_0d-26-garbled-chars-in-properties-under-idea" aria-hidden="true">#</a> 0D.26.Garbled Chars in properties under IDEA</h2><p>in <code>Preferences</code> | <code>Editor</code> | <code>File Encodings</code> set Default encoding for properties files to <code>UTF8</code></p><p>If it is already UTF8, but some files are still garbled, you can switch to iso8859 and then back to utf8.</p><h2 id="_0d-27-compile-fine-but-idea-says-class-not-found" tabindex="-1"><a class="header-anchor" href="#_0d-27-compile-fine-but-idea-says-class-not-found" aria-hidden="true">#</a> 0D.27.Compile Fine, but IDEA says: Class not found</h2><p>You can clear the cache and index of the current project in IDEA, under the File menu</p><ul><li>try Cache Recovery / Rescan or Refresh, if it doesn&#39;t work well, then</li><li>Invalidate Caches and Restart, if it still doesn&#39;t work, then</li><li>Delete the project, clean up the <code>.idea</code> and other files, re-import</li></ul><h2 id="_0d-28-jooq-try-with-resources-warn" tabindex="-1"><a class="header-anchor" href="#_0d-28-jooq-try-with-resources-warn" aria-hidden="true">#</a> 0D.28.Jooq try-with-resources Warn</h2><p>Jooq&#39;s DSL code is try-with-resources safe. it can safely close the following warning appears in the IDE code check.</p><p>Select <code>ignore AutoCloseable returned by this method</code> to close it by category.</p><blockquote><p>Warning:(62, 18) &#39;SelectSelectStep&lt;Record2&lt;Long, String&gt;&gt;&#39; used without &#39;try&#39;-with-resources statement</p></blockquote><h2 id="_0d-29-statement-with-empty-body" tabindex="-1"><a class="header-anchor" href="#_0d-29-statement-with-empty-body" aria-hidden="true">#</a> 0D.29.Statement with empty body</h2><p>If the following warning appears in the IDE code review, you can edit the rule and pick <code>Comments count as content</code></p><h2 id="_0d-30-idea-inspect-code" tabindex="-1"><a class="header-anchor" href="#_0d-30-idea-inspect-code" aria-hidden="true">#</a> 0D.30.IDEA Inspect Code</h2><p>Exclude the submodlue content under observer, especially the node content in docs.</p><p>Custom Scope <code>WingsCode</code>, Pattern is set as follows.</p><p><code>!file:*/docs//*&amp;&amp;!file:*/meepo//*&amp;&amp;!file:*/mirana//*</code></p><h2 id="_0d-31-lombok-error-cannot-find-symbol" tabindex="-1"><a class="header-anchor" href="#_0d-31-lombok-error-cannot-find-symbol" aria-hidden="true">#</a> 0D.31.Lombok Error: cannot find symbol</h2><blockquote><p>cannot find symbol symbol: method onMethod_() location: @interface lombok.Setter</p></blockquote><p>When a lombok compilation error occurs, you need to follow these steps to troubleshoot it.</p><ul><li>First exclude the IDE influence, and confirm that mvn works well under the console</li><li>Prioritize fixing non-lombok compilation errors</li><li>Prioritize fixing errors in statically written code</li></ul><h2 id="_0d-32-maven-error-non-resolvable-parent-pom" tabindex="-1"><a class="header-anchor" href="#_0d-32-maven-error-non-resolvable-parent-pom" aria-hidden="true">#</a> 0D.32.maven Error: Non-resolvable parent POM</h2><blockquote><p>FATAL Non-resolvable parent POM for com.x.xx:xxx:\${revision}: Could not find artifact pro.fessional:wings:pom:2.6.6.210-SNAPSHOT and &#39;parent.relativePath&#39; points at wrong local POM</p></blockquote><p>The above error is usually in the first installation, the reason is the repository can&#39;t find the wings pom, try the following,</p><ul><li>If the repo exists, set the localRepository in $MVN_HOME/conf/settings.xml to it</li><li>set ossrh-snapshots for wings in the current pom. non-latest wings</li><li>DIY <code>maven install</code> wings project to local, use latest wings</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>ossrh-snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://oss.sonatype.org/content/repositories/snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>releases</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>releases</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50);function ie(re,le){const s=o("ExternalLinkIcon"),i=o("RouterLink");return l(),c("div",null,[u,e("ul",null,[e("li",null,[e("a",h,[n("Quick Guide to MapStruct"),a(s)])]),e("li",null,[e("a",m,[n("Mapping Collections with MapStruct"),a(s)])]),e("li",null,[e("a",g,[n("MapStruct ide&mvn Support"),a(s)])])]),b,e("ul",null,[e("li",null,[e("a",f,[n("MapStruct Performance"),a(s)])]),e("li",null,[e("a",v,[n("java-object-mapper-benchmark"),a(s)])])]),k,e("ul",null,[e("li",null,[e("a",_,[n("https://docs.min.io/cn/"),a(s)]),n(" Recommended")]),e("li",null,[e("a",w,[n("https://github.com/happyfish100/fastdfs"),a(s)])])]),y,x,e("ul",null,[e("li",null,[e("a",j,[n("https://www.bitwalker.eu/software/user-agent-utils"),a(s)]),n(" Browser (discontinued)")]),e("li",null,[e("a",D,[n("https://github.com/browscap/browscap/wiki/Using-Browscap"),a(s)]),n(" Browser Tool Family")]),e("li",null,[e("a",E,[n("https://github.com/blueconic/browscap-java"),a(s)]),n(" Browser (recommended)")])]),T,e("ul",null,[e("li",null,[e("a",S,[n("https://github.com/oshi/oshi"),a(s)])])]),M,e("ul",null,[C,I,q,e("li",null,[n("js side md5 must support UTF8, eg. "),e("a",z,[n("https://github.com/emn178/js-md5"),a(s)])]),A]),F,P,e("ul",null,[N,e("li",null,[n("persistent with frp - "),e("a",J,[n("https://gofrp.org/docs/"),a(s)])]),e("li",null,[n("Simple with netapp - "),e("a",O,[n("https://natapp.cn/"),a(s)])])]),R,e("p",null,[e("a",H,[n("Automatic Property Expansion Using Maven"),a(s)])]),W,B,L,e("p",null,[n("For more information, see "),a(i,{to:"/2-faceless/2h-time-zone.html"},{default:p(()=>[n("Time and Time Zone")]),_:1})]),U,e("p",null,[n("springfox swagger 3.0.0 has bugs that will be fixed in 3.0.1. "),e("a",G,[n("https://github.com/springfox/springfox/issues/3452"),a(s)])]),V,e("p",null,[n("not recommended in the product environment using devtool, refer to the springboot official documentation "),e("a",K,[n("Known Limitations"),a(s)]),n(" using.devtools.restart.limitations)")]),Q,Y,$,Z,e("ul",null,[e("li",null,[e("a",X,[n("https://hazelcast.com/blog/how-much-memory-do-i-need-for-my-data/"),a(s)])]),e("li",null,[e("a",ee,[n("https://docs.hazelcast.com/hazelcast/5.1/configuration/understanding-configuration"),a(s)])])]),ne,ae,se,e("p",null,[e("a",te,[n("https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_lower_case_table_names"),a(s)])]),oe])}const de=r(d,[["render",ie],["__file","0d-qa-devops.html.vue"]]);export{de as default};
