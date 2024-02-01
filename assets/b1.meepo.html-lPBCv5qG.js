import{_ as n}from"./meepo_icon-EKHHohO8.js";import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,f as e}from"./app-O8GUlV1o.js";const p={},o=e('<h1 id="b1-meepo-hero-template" tabindex="-1"><a class="header-anchor" href="#b1-meepo-hero-template"><span>B1.Meepo Hero Template</span></a></h1><p><img src="https://img.shields.io/maven-central/v/pro.fessional/meepo?color=00DD00" alt="Maven Central">  <img src="https://img.shields.io/nexus/s/pro.fessional/meepo?server=https%3A%2F%2Foss.sonatype.org" alt="Sonatype Snapshots">  <img src="https://coveralls.io/repos/github/trydofor/professional-meepo/badge.svg" alt="Coverage Status"> </p><blockquote><p>Meepo, Five are stronger than one. Divided they stand, united they fall.</p></blockquote><p>a non-professional template engine that does not break the <code>master</code> syntax, and is based on the comments and markup of the <code>master</code> syntax.</p><p><img src="'+n+`" alt="meepo"></p><p>The syntax of most modern template engines will break the syntax of the target file when previewing and editing.</p><p>Meepo solves this problem with high performance like C&#39;s macro by using only static transformations and limited dynamic control.</p><ul><li>Generate <code>*.java</code> from <code>java</code>, both are compilable.</li><li>Generate <code>*.sql</code> from <code>sql</code>, both are executable.</li><li>Generate <code>*.htm</code> from <code>htm</code>, both are previewable.</li><li><code>placeholder</code> supports customizing variable&#39;s boundaries and escaping</li><li>flexible and efficient customizing (dynamic, static, runtime) function using java</li></ul><h2 id="b1-1-how-to-use" tabindex="-1"><a class="header-anchor" href="#b1-1-how-to-use"><span>B1.1.How to use</span></a></h2><p>① DIY <code>clone</code> and <code>install</code> is powerful.</p><p>② Using Maven Central is stable.</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>meepo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${meepo.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③ Using SNAPSHOT is the latest.</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>oss-sonatype<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>oss-sonatype<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://oss.sonatype.org/content/repositories/snapshots/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b1-2-standalone-use" tabindex="-1"><a class="header-anchor" href="#b1-2-standalone-use"><span>B1.2.Standalone use</span></a></h2><p><code>Meepo</code> provides common methods and caching that can handle the most common scenarios.</p><ul><li>File template - use <code>Meepo</code> as entry, <code>#parse</code>, <code>#merge</code></li><li>Placeholder template - use <code>Holder</code> as entry, <code>#piece</code></li><li>String Parsing - use <code>Parser</code> to construct <code>Gene</code>, <code>#parse</code></li></ul><p>you can customize the use of <code>Parser</code> and <code>Gene</code> to combine the tool as you need.</p><h2 id="b1-3-mvc-integration" tabindex="-1"><a class="header-anchor" href="#b1-3-mvc-integration"><span>B1.3.Mvc Integration</span></a></h2><p><code>spring-mvc</code> module integrates with <code>SpringMvc</code>, can be used independently or pre-processed with other templates.</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional.meepo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-mvc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${meepo-spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="b1-4-spel-integration" tabindex="-1"><a class="header-anchor" href="#b1-4-spel-integration"><span>B1.4.Spel Integration</span></a></h2><p><code>spring-spel</code> module registers the <code>spel</code> engine, provide spring <code>Bean</code> and <code>SpEL</code>.</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional.meepo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-spel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${meepo-spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[o];function l(i,d){return a(),t("div",null,c)}const k=s(p,[["render",l],["__file","b1.meepo.html.vue"]]);export{k as default};