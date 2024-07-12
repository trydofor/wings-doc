import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,e as i}from"./app-CcKWV4zH.js";const n={},o=i(`<h1 id="_4a-integrated-authn" tabindex="-1"><a class="header-anchor" href="#_4a-integrated-authn"><span>4A.Integrated Authn</span></a></h1><p>Support multiple logins, such as username password, Basic extension, Oauth 3rd, etc., safe and easy to control the source of users.</p><h2 id="_4a-1-integrate-github" tabindex="-1"><a class="header-anchor" href="#_4a-1-integrate-github"><span>4A.1.Integrate Github</span></a></h2><p>Since Github is the most common and easiest, use it as a demo for Oauth login.</p><p>Set up and write down <code>App ID</code>, <code>Client ID</code> and <code>Client secret</code> on Github <code>Settings</code> | <code>Developer settings</code> | <code>GitHub Apps</code>, and be careful not to leak them.</p><ul><li>start TestWarlockBondApplication</li><li>visit <a href="http://localhost:8084/auth/github/login-page.html" target="_blank" rel="noopener noreferrer">http://localhost:8084/auth/github/login-page.html</a> to redirect</li><li>visit <a href="http://localhost:8084/auth/github/login-page.json" target="_blank" rel="noopener noreferrer">http://localhost:8084/auth/github/login-page.json</a> to show json</li><li>auth with github and check the response</li><li>customize LoginSuccessHandler to response in other style</li></ul><h2 id="_4a-2-return-401-or-302" tabindex="-1"><a class="header-anchor" href="#_4a-2-return-401-or-302"><span>4A.2.Return 401 or 302</span></a></h2><p>If access failed with <code>UNAUTHORIZED</code>, spring throws an AccessDeniedException. The ExceptionTranslationFilter then selects the appropriate AuthenticationEntryPoint.</p><p>In Wings, there are 2 AuthenticationEntryPoint by default.</p><ul><li>LoginUrlAuthenticationEntryPoint - the user/pass login for common user</li><li>BasicAuthenticationEntryPoint - basic authentication for monitoring</li></ul><p>LoginUrl can select which form of login to provide to the user by login-forward setting.</p><p>On the EntryPoint selection, <code>http header</code> can be set to satisfy specific matching rules. The following settings can skip basic authentication rules, see HttpBasicConfigurer.registerDefaults for details</p><ul><li>Without the <code>X-Requested-With: XMLHttpRequest</code> header</li><li>Include any of the following values in <code>Accept</code><ul><li>application/xhtml+xml</li><li>image/*</li><li>text/html</li><li>text/plain</li></ul></li></ul><h2 id="_4a-3-openapi3-features" tabindex="-1"><a class="header-anchor" href="#_4a-3-openapi3-features"><span>4A.3.OpenAPI3 Features</span></a></h2><p>In the OpenAPI3 specification, <code>Accept</code>, <code>Content-Type</code> and <code>Authorization</code> are not allowed to be modified.</p><p><a href="https://swagger.io/docs/specification/describing-parameters/#header-parameters" target="_blank" rel="noopener noreferrer">https://swagger.io/docs/specification/describing-parameters/#header-parameters</a></p><blockquote><p>Note: Header parameters named Accept, Content-Type and Authorization are not allowed. To describe these headers, use the corresponding OpenAPI keywords:</p></blockquote><p>Wings default configuration of swagger provides text and json types, corresponding to LoginUrl and Basic&#39;s EntryPoint respectively.</p><p>302 in swagger is automatically redirected to the target page, and finally displayed in 200. This process can be seen in debug or curl.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -vX</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;POST&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &#39;http://localhost:8084/user/authed-user.json&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  -H</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;accept: text/html&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=[o];function s(l,c){return a(),t("div",null,r)}const d=e(n,[["render",s],["__file","4a-authn.html.vue"]]),u=JSON.parse('{"path":"/4-warlock/4a-authn.html","title":"4A.Integrated Authn","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"key","category":["Warlock","Authn"],"description":"4A.Integrated Authn Support multiple logins, such as username password, Basic extension, Oauth 3rd, etc., safe and easy to control the source of users. 4A.1.Integrate Github Sin...","GIT_REPO_HEAD":"2024-07-12 b7f98fdbcca854143856b6032bf8c1819b601f15","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/4-warlock/4a-authn.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/4-warlock/4a-authn.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"4A.Integrated Authn"}],["meta",{"property":"og:description","content":"4A.Integrated Authn Support multiple logins, such as username password, Basic extension, Oauth 3rd, etc., safe and easy to control the source of users. 4A.1.Integrate Github Sin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4A.Integrated Authn\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"4A.1.Integrate Github","slug":"_4a-1-integrate-github","link":"#_4a-1-integrate-github","children":[]},{"level":2,"title":"4A.2.Return 401 or 302","slug":"_4a-2-return-401-or-302","link":"#_4a-2-return-401-or-302","children":[]},{"level":2,"title":"4A.3.OpenAPI3 Features","slug":"_4a-3-openapi3-features","link":"#_4a-3-openapi3-features","children":[]}],"git":{"createdTime":1656137116000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":1.01,"words":303},"filePathRelative":"4-warlock/4a-authn.md","localizedDate":"June 25, 2022","autoDesc":true}');export{d as comp,u as data};