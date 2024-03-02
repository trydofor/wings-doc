import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as r,c as t,f as a}from"./app-C-UZtMCx.js";const n={},s=a(`<h1 id="_0i-多国语信息" tabindex="-1"><a class="header-anchor" href="#_0i-多国语信息"><span>0I.多国语信息</span></a></h1><p>同<code>*.Properties</code>一样，Wings以分隔的配置来加强默认的messages.properties。</p><h2 id="_0i-1-匹配规则" tabindex="-1"><a class="header-anchor" href="#_0i-1-匹配规则"><span>0I.1.匹配规则</span></a></h2><p>多国语匹配时，匹配message的规则为 <code>lang_region</code> &gt; <code>lang</code> &gt; <code>default</code></p><table><thead><tr><th>Message \\ lang_region</th><th>zh_CN</th><th>zh_TW</th><th>en_US</th><th>zh</th></tr></thead><tbody><tr><td>message.properties</td><td>N</td><td>N</td><td>Y</td><td>N</td></tr><tr><td>message_zh.properties</td><td>Y</td><td>N</td><td>N</td><td>Y</td></tr><tr><td>message_zh_TW.properties</td><td>N</td><td>Y</td><td>N</td><td>N</td></tr></tbody></table><h2 id="_0i-2-内置配置" tabindex="-1"><a class="header-anchor" href="#_0i-2-内置配置"><span>0I.2.内置配置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># find wings-i18n path</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> d <span class="token parameter variable">-name</span> <span class="token string">&#39;wings-i18n&#39;</span><span class="token operator">|</span> <span class="token function">egrep</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;target/|test/&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2a-anthnerrorenum-slardar-webmvc" tabindex="-1"><a class="header-anchor" href="#_2a-anthnerrorenum-slardar-webmvc"><span>2a.AnthnErrorEnum slardar-webmvc</span></a></h3><p>spring security的验证错误</p><ul><li>error.authn.onlySupports</li><li>error.authn.badCredentials</li><li>error.authn.locked</li><li>error.authn.disabled</li><li>error.authn.expired</li><li>error.authn.credentialsExpired</li><li>error.authn.failureWaiting</li></ul><h3 id="_2b-commonerrorenum-warlock" tabindex="-1"><a class="header-anchor" href="#_2b-commonerrorenum-warlock"><span>2b.CommonErrorEnum warlock</span></a></h3><p>通用错误，如assert</p><ul><li>error.common.assert.empty</li><li>error.common.assert.format</li><li>error.common.assert.notfound</li><li>error.common.assert.existed</li><li>error.common.assert.state</li><li>error.common.assert.param</li><li>error.common.data.notfound</li><li>error.common.data.existed</li><li>error.common.message.unreadable</li></ul>`,13),o=[s];function i(l,d){return r(),t("div",null,o)}const p=e(n,[["render",i],["__file","0i-i18n-message.html.vue"]]),h=JSON.parse('{"path":"/zh/0-wings/0i-i18n-message.html","title":"0I.多国语信息","lang":"zh-CN","frontmatter":{"isOriginal":true,"icon":"enum","category":["神翼","首页"],"description":"0I.多国语信息 同*.Properties一样，Wings以分隔的配置来加强默认的messages.properties。 0I.1.匹配规则 多国语匹配时，匹配message的规则为 lang_region > lang > default 0I.2.内置配置 2a.AnthnErrorEnum slardar-webmvc spring secu...","GIT_REPO_HEAD":"2024-03-02 89d41ef12c7b9107a38ca1f0932669d3192676cc","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wings.fessional.pro/0-wings/0i-i18n-message.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/zh/0-wings/0i-i18n-message.html"}],["meta",{"property":"og:site_name","content":"WingsBoot 纹丝不忒"}],["meta",{"property":"og:title","content":"0I.多国语信息"}],["meta",{"property":"og:description","content":"0I.多国语信息 同*.Properties一样，Wings以分隔的配置来加强默认的messages.properties。 0I.1.匹配规则 多国语匹配时，匹配message的规则为 lang_region > lang > default 0I.2.内置配置 2a.AnthnErrorEnum slardar-webmvc spring secu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-02T02:16:40.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-03-02T02:16:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0I.多国语信息\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-02T02:16:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"0I.1.匹配规则","slug":"_0i-1-匹配规则","link":"#_0i-1-匹配规则","children":[]},{"level":2,"title":"0I.2.内置配置","slug":"_0i-2-内置配置","link":"#_0i-2-内置配置","children":[{"level":3,"title":"2a.AnthnErrorEnum slardar-webmvc","slug":"_2a-anthnerrorenum-slardar-webmvc","link":"#_2a-anthnerrorenum-slardar-webmvc","children":[]},{"level":3,"title":"2b.CommonErrorEnum warlock","slug":"_2b-commonerrorenum-warlock","link":"#_2b-commonerrorenum-warlock","children":[]}]}],"git":{"createdTime":1689057959000,"updatedTime":1709345800000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":2}]},"readingTime":{"minutes":0.44,"words":131},"filePathRelative":"zh/0-wings/0i-i18n-message.md","localizedDate":"2023年7月11日","autoDesc":true}');export{p as comp,h as data};
