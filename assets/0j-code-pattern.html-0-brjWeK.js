import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as i,c as r,b as n,e,d as c,w as p,f as t}from"./app--LK20fnS.js";const l={},d=t('<h1 id="_0j-code-pattern" tabindex="-1"><a class="header-anchor" href="#_0j-code-pattern"><span>0J.Code Pattern</span></a></h1><p>Collection of common code patterns in Wings coding practices.</p><h2 id="_0j01-comments-in-config-script" tabindex="-1"><a class="header-anchor" href="#_0j01-comments-in-config-script"><span>0J01.Comments in Config/Script</span></a></h2><p>There are 2 types of comment in Config (<code>*.properties</code>) and Script (<code>*.sh</code>) according to their purpose.</p><ul><li>Toggle code, related to functionality. Use single comments like <code>#</code>.</li><li>Just doc, unrelated to functionality. Use double comments, like <code>##</code>.</li></ul><p>The benefits of this rule are,</p><ul><li>Clearly identifies the purpose of the comments</li><li>Functional code can be toggled quickly, e.g, shortcuts or column editing</li><li>Avoid double comments to be turned on by mistake</li></ul><h2 id="_0j02-swagger-api-doc" tabindex="-1"><a class="header-anchor" href="#_0j02-swagger-api-doc"><span>0J02.Swagger Api Doc</span></a></h2>',8),u=n("code",null,"jsdoc",-1),m=n("code",null,"markdown",-1),g=t(`<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;UastIncorrectHttpHeaderInspection&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Operation</span><span class="token punctuation">(</span>summary <span class="token operator">=</span> <span class="token string">&quot;Verify that the one-time token is valid&quot;</span><span class="token punctuation">,</span> description <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
        # Usage
        Use Oauth2 state as the token and require the same ip, agent and other header as the original client.
        After successful verification, the session and cookie are in the header as a normal login
        ## Params
        * @param token - RequestHeader Oauth2 state as token
        ## Returns
        * @return {401} token is not-found, expired, or failed
        * @return {200 | Result(false, message=&#39;authing&#39;)} in verifying
        * @return {200 | Result(true, data=sessionId)} success
        &quot;&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;\${&quot;</span> <span class="token operator">+</span> <span class="token class-name">WarlockUrlmapProp<span class="token punctuation">.</span>Key</span>$authNonceCheck <span class="token operator">+</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(f,v){const a=s("RouteLink");return i(),r("div",null,[d,n("p",null,[e("Refer to "),c(a,{to:"/0-wings/0a-code-style.html#0a9api-testing-and-docs-convention"},{default:p(()=>[e("0A.9.Api Testing and Docs Convention")]),_:1}),e(", Write documents in "),u,e(" and "),m,e(" formats.")]),g])}const y=o(l,[["render",h],["__file","0j-code-pattern.html.vue"]]),b=JSON.parse('{"path":"/0-wings/0j-code-pattern.html","title":"0J.Code Pattern","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"code","category":["WingsGod","Standard"],"description":"0J.Code Pattern Collection of common code patterns in Wings coding practices. 0J01.Comments in Config/Script There are 2 types of comment in Config (*.properties) and Script (*....","GIT_REPO_HEAD":"2024-02-18 74ed5616b0af3da3be5688225cbb4d65a94da6ab","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/0-wings/0j-code-pattern.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/0-wings/0j-code-pattern.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"0J.Code Pattern"}],["meta",{"property":"og:description","content":"0J.Code Pattern Collection of common code patterns in Wings coding practices. 0J01.Comments in Config/Script There are 2 types of comment in Config (*.properties) and Script (*...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-22T09:32:58.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2023-08-22T09:32:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0J.Code Pattern\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-22T09:32:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"0J01.Comments in Config/Script","slug":"_0j01-comments-in-config-script","link":"#_0j01-comments-in-config-script","children":[]},{"level":2,"title":"0J02.Swagger Api Doc","slug":"_0j02-swagger-api-doc","link":"#_0j02-swagger-api-doc","children":[]}],"git":{"createdTime":1692237469000,"updatedTime":1692696778000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":2}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"0-wings/0j-code-pattern.md","localizedDate":"August 17, 2023","autoDesc":true}');export{y as comp,b as data};