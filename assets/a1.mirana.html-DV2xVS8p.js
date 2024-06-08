import{_ as o}from"./mirana_icon-CkLYJpYd.js";import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as i,b as n,e as a,d as t,f as e}from"./app-anl28Jqc.js";const r={},d=e('<h1 id="a1-米拉娜是月女" tabindex="-1"><a class="header-anchor" href="#a1-米拉娜是月女"><span>A1.米拉娜是月女</span></a></h1><p><img src="https://img.shields.io/maven-central/v/pro.fessional/mirana?color=00DD00" alt="Maven Central">  <img src="https://img.shields.io/nexus/s/pro.fessional/mirana?server=https%3A%2F%2Foss.sonatype.org" alt="Sonatype Snapshots">  <img src="https://coveralls.io/repos/github/trydofor/professional-mirana/badge.svg" alt="Coverage Status"> </p><p><img src="'+o+`" alt="mirana"></p><blockquote><p>POM(.xml), 月女，她有一只神箭，她有一只大猫。</p></blockquote><p>Java8, 零依赖，是<code>guava</code>, <code>commons-*</code>的补充。</p><h2 id="a1-1-如何使用" tabindex="-1"><a class="header-anchor" href="#a1-1-如何使用"><span>A1.1.如何使用</span></a></h2><p>① 自己<code>clone</code>和<code>install</code>最豪横。</p><p>② 使用 maven central 比较稳妥。</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>pro.fessional<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mirana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${mirana.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③ 使用 SNAPSHOT 与时俱进。</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>oss-sonatype<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>oss-sonatype<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://oss.sonatype.org/content/repositories/snapshots/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="a1-2-命名约定" tabindex="-1"><a class="header-anchor" href="#a1-2-命名约定"><span>A1.2.命名约定</span></a></h2><ul><li>Null 等效于null的默认值。</li><li>None 等效于empty的默认值。</li><li>Sugar 表示静态线程安全的工具类，可做kotlin语法糖</li><li>Help 表示和业务关联的或有生命周期的辅助类</li><li>Util 表示静态线程安全的工具类</li></ul><h2 id="a1-3-版本序号" tabindex="-1"><a class="header-anchor" href="#a1-3-版本序号"><span>A1.3.版本序号</span></a></h2>`,14),u=n("code",null,"2.7.0",-1),m={href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"},g=e('<p>在此之前的版本号为开根号+三段法，如√2对应的<code>1.4.0</code>, <code>1.4.1</code>, <code>1.4.14</code>， 若版本不够且不想跳版本，则无限的写下去<code>1.4.14213562373095</code></p><ul><li>√1 = <code>1.0.0</code></li><li>√2 = <code>1.4.0</code>, <code>1.4.1</code>, <code>1.4.14</code></li><li>√3 = <code>1.7.0</code>, <code>1.7.3</code>, <code>1.7.32</code></li><li>√4 = <code>2.0.0</code></li><li>√5 = <code>2.2.0</code>, <code>2.2.3</code>, <code>2.2.4</code></li><li>√6 = <code>2.4.0</code>, <code>2.4.4</code>, <code>2.4.5</code></li><li>√7 = <code>2.6.0</code>, <code>2.6.4</code>, <code>2.6.5</code></li></ul><h2 id="a1-4-项目链接" tabindex="-1"><a class="header-anchor" href="#a1-4-项目链接"><span>A1.4.项目链接</span></a></h2>',3),h={href:"https://github.com/trydofor/professional-mirana",target:"_blank",rel:"noopener noreferrer"},k={href:"https://gitee.com/trydofor/professional-irana",target:"_blank",rel:"noopener noreferrer"};function v(f,y){const s=l("ExternalLinkIcon");return c(),i("div",null,[d,n("p",null,[a("从 "),u,a("开始，回归标准的"),n("a",m,[a("三段法"),t(s)]),a("。")]),g,n("ul",null,[n("li",null,[a("github - "),n("a",h,[a("https://github.com/trydofor/professional-mirana"),t(s)])]),n("li",null,[a("gitee - "),n("a",k,[a("https://gitee.com/trydofor/professional-irana"),t(s)])])])])}const A=p(r,[["render",v],["__file","a1.mirana.html.vue"]]),S=JSON.parse('{"path":"/zh/a-mirana/a1.mirana.html","title":"A1.米拉娜是月女","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"build","category":["米拉","工具"],"description":"A1.米拉娜是月女 Maven Central Sonatype Snapshots Coverage Status mirana POM(.xml), 月女，她有一只神箭，她有一只大猫。 Java8, 零依赖，是guava, commons-*的补充。 A1.1.如何使用 ① 自己clone和install最豪横。 ② 使用 maven centra...","GIT_REPO_HEAD":"2024-06-08 097487d371579fdec58233d1434546304eee9596","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/a-mirana/a1.mirana.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/a-mirana/a1.mirana.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"A1.米拉娜是月女"}],["meta",{"property":"og:description","content":"A1.米拉娜是月女 Maven Central Sonatype Snapshots Coverage Status mirana POM(.xml), 月女，她有一只神箭，她有一只大猫。 Java8, 零依赖，是guava, commons-*的补充。 A1.1.如何使用 ① 自己clone和install最豪横。 ② 使用 maven centra..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/maven-central/v/pro.fessional/mirana?color=00DD00"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-29T08:06:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"A1.米拉娜是月女"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-01-29T08:06:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"A1.米拉娜是月女\\",\\"image\\":[\\"https://img.shields.io/maven-central/v/pro.fessional/mirana?color=00DD00\\",\\"https://img.shields.io/nexus/s/pro.fessional/mirana?server=https%3A%2F%2Foss.sonatype.org\\",\\"https://coveralls.io/repos/github/trydofor/professional-mirana/badge.svg\\",\\"https://wings.fessional.pro/mirana_icon.png\\"],\\"dateModified\\":\\"2024-01-29T08:06:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"A1.1.如何使用","slug":"a1-1-如何使用","link":"#a1-1-如何使用","children":[]},{"level":2,"title":"A1.2.命名约定","slug":"a1-2-命名约定","link":"#a1-2-命名约定","children":[]},{"level":2,"title":"A1.3.版本序号","slug":"a1-3-版本序号","link":"#a1-3-版本序号","children":[]},{"level":2,"title":"A1.4.项目链接","slug":"a1-4-项目链接","link":"#a1-4-项目链接","children":[]}],"git":{"createdTime":1687077446000,"updatedTime":1706515612000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":1,"words":301},"filePathRelative":"zh/a-mirana/a1.mirana.md","localizedDate":"2023年6月18日","autoDesc":true}');export{A as comp,S as data};