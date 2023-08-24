import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as p,b as a,e as n,d as t,w as c,f as d}from"./app-7d38ae22.js";const u={},r=a("h1",{id:"_9a3-upgrade-2-7-7-220",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_9a3-upgrade-2-7-7-220","aria-hidden":"true"},"#"),n(" 9A3.Upgrade 2.7.7.220")],-1),g=a("p",null,"Upgraded build 210 to 220, this is the transition version of 3.0, should not stay for a long time.",-1),k=a("code",null,"2.7",-1),h=a("code",null,"2.6",-1),m={href:"https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.7-Release-Notes",target:"_blank",rel:"noopener noreferrer"},v=a("li",null,"Remove javax to jakarta interference, eg. persistence and validation",-1),f=a("li",null,"rename faceless-jooqgen to faceless-codegen",-1),b=a("li",null,[n("add "),a("code",null,"spring."),n(" prefix to "),a("code",null,"wings.tiny.*.enabled.")],-1),_=a("li",null,"cache2k instead of caffeine, cache.nulls split into null-live and null-size",-1),x=d(`<h2 id="_9a3-1-modify-pom-xml" tabindex="-1"><a class="header-anchor" href="#_9a3-1-modify-pom-xml" aria-hidden="true">#</a> 9A3.1.Modify pom.xml</h2><p>Change version to <code>2.7.7.220-SNAPSHOT</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>wings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.7.7.220-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9a3-2-rework-autogen" tabindex="-1"><a class="header-anchor" href="#_9a3-2-rework-autogen" aria-hidden="true">#</a> 9A3.2.Rework Autogen</h2><p>JooqGen in wings is configured with javax persistence and validation annotations by default. In reality, this does nothing but increase the identifiability of the code, but it is involved in the revolution of javax renaming to jakarta.</p><p>All automatically generated code in their respective <code>*-autogen</code> projects, which are invoked by <code>AutogenDependencyTest</code> in the devs-mvndep module.</p><h3 id="test00dropallandinit" tabindex="-1"><a class="header-anchor" href="#test00dropallandinit" aria-hidden="true">#</a> test00DropAllAndInit()</h3><p>Initialize the database and prepare the data for subsequent code generation.</p><h3 id="test01alltestcode" tabindex="-1"><a class="header-anchor" href="#test01alltestcode" aria-hidden="true">#</a> test01AllTestCode()</h3><p>Jooq&#39;s own tests and examples, including the following,</p><ul><li>test11FacelessJooqTest - faceless-jooq</li><li>test11FacelessShardTest - faceless-shard</li></ul><h3 id="test01allmaincode" tabindex="-1"><a class="header-anchor" href="#test01allmaincode" aria-hidden="true">#</a> test01AllMainCode()</h3><p>The formal dependencies for the Jooq business tables, packaged with the main project, include the following</p><ul><li>test10FacelessAutogen - faceless-autogen/enums</li><li>test20WarlockAutogenEnum - warlock-autogen/enums</li><li>test20WarlockAutogenAuth - warlock-autogen/security</li><li>test21WarlockAutogenJooq - warlock-autogen/database</li><li>test31TinyMailAutogenJooq - tiny-autogen/mail</li><li>test31TinyTaskAutogenJooq - tiny-autogen/task</li></ul><h2 id="_9a3-3-wingsboot-user" tabindex="-1"><a class="header-anchor" href="#_9a3-3-wingsboot-user" aria-hidden="true">#</a> 9A3.3.Wingsboot User</h2><p>Before the operation, commit the workspace and switch to a new branch so that you can control and cross the timeline. The important point is to regenerate the jooq code, the settings turn off the interference of namespace changes javax to jakarta</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jpaAnnotations</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jpaAnnotations</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>validationAnnotations</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>validationAnnotations</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If a dependency problem occurs in the jooq code, you can temporarily add a dependency and then remove it after a successful redo.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- javax.persistence --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>jakarta.persistence<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jakarta.persistence-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- javax.validation.constraints --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>jakarta.validation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jakarta.validation-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>if <code>javax.annotation.Generated</code> not found, use <code>javax.annotation.processing.Generated</code> instead.</li><li>if got <code>*Dao.java</code> deleted, and <code>Skipping DAO generation</code> message, please set PrimaryKey to the table.</li></ul>`,20);function y(j,w){const e=s("ExternalLinkIcon"),o=s("RouterLink");return i(),p("div",null,[r,g,a("ul",null,[a("li",null,[n("boot "),k,n(" instead of "),h,n(", "),a("a",m,[n("Release Notes"),t(e)])]),v,f,b,_,a("li",null,[n("check "),t(o,{to:"/9-example/9a.wings-change/9a0.notable.html"},{default:c(()=>[n("wings notable changelog")]),_:1})])]),x])}const q=l(u,[["render",y],["__file","9a3.277-220.html.vue"]]);export{q as default};
