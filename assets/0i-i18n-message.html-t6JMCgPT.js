import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as r,f as t}from"./app-OXbFzGQa.js";const s={},n=t(`<h1 id="_0i-i18n-message" tabindex="-1"><a class="header-anchor" href="#_0i-i18n-message"><span>0I.I18n Message</span></a></h1><p>As <code>*.Properties</code>, Wings enhances the default messages.properties with a separated configuration.</p><h2 id="_0i-1-matching-rule" tabindex="-1"><a class="header-anchor" href="#_0i-1-matching-rule"><span>0I.1.Matching Rule</span></a></h2><p>rules of matching i18n language are <code>lang_region</code> &gt; <code>lang</code> &gt; <code>default</code></p><table><thead><tr><th>Message \\ lang_region</th><th>zh_CN</th><th>zh_TW</th><th>en_US</th><th>zh</th></tr></thead><tbody><tr><td>message.properties</td><td>N</td><td>N</td><td>Y</td><td>N</td></tr><tr><td>message_zh.properties</td><td>Y</td><td>N</td><td>N</td><td>Y</td></tr><tr><td>message_zh_TW.properties</td><td>N</td><td>Y</td><td>N</td><td>N</td></tr></tbody></table><h2 id="_0i-2-builtin-message" tabindex="-1"><a class="header-anchor" href="#_0i-2-builtin-message"><span>0I.2.Builtin Message</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># find wings-i18n path</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> d <span class="token parameter variable">-name</span> <span class="token string">&#39;wings-i18n&#39;</span><span class="token operator">|</span> <span class="token function">egrep</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-E</span> <span class="token string">&#39;target/|test/&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slardar-webmvc-anthnerrorenum" tabindex="-1"><a class="header-anchor" href="#slardar-webmvc-anthnerrorenum"><span>slardar-webmvc AnthnErrorEnum</span></a></h3><p>authn error of spring security.</p><ul><li>error.authn.onlySupports</li><li>error.authn.badCredentials</li><li>error.authn.locked</li><li>error.authn.disabled</li><li>error.authn.expired</li><li>error.authn.credentialsExpired</li><li>error.authn.failureWaiting</li></ul><h3 id="warlock-commonerrorenum" tabindex="-1"><a class="header-anchor" href="#warlock-commonerrorenum"><span>warlock - CommonErrorEnum</span></a></h3><p>common error, eg. assert.</p><ul><li>error.common.assert.empty</li><li>error.common.assert.format</li><li>error.common.assert.notfound</li><li>error.common.assert.existed</li><li>error.common.assert.state</li><li>error.common.assert.param</li><li>error.common.data.notfound</li><li>error.common.data.existed</li><li>error.common.message.unreadable</li></ul>`,13),i=[n];function o(l,d){return a(),r("div",null,i)}const p=e(s,[["render",o],["__file","0i-i18n-message.html.vue"]]);export{p as default};
