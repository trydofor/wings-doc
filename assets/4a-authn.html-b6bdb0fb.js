import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c,b as e,e as t,d as n,f as o}from"./app-7d38ae22.js";const l={},d=o('<h1 id="_4a-integrated-authn" tabindex="-1"><a class="header-anchor" href="#_4a-integrated-authn" aria-hidden="true">#</a> 4A.Integrated Authn</h1><p>Support multiple logins, such as username password, Basic extension, Oauth 3rd, etc., safe and easy to control the source of users.</p><h2 id="_4a-1-integrate-github" tabindex="-1"><a class="header-anchor" href="#_4a-1-integrate-github" aria-hidden="true">#</a> 4A.1.Integrate Github</h2><p>Since Github is the most common and easiest, use it as a demo for Oauth login.</p><p>Set up and write down <code>App ID</code>, <code>Client ID</code> and <code>Client secret</code> on Github <code>Settings</code> | <code>Developer settings</code> | <code>GitHub Apps</code>, and be careful not to leak them.</p>',5),p={href:"http://localhost:8084",target:"_blank",rel:"noopener noreferrer"},h={href:"http://localhost:8084/auth/github/login.json",target:"_blank",rel:"noopener noreferrer"},u=o('<h2 id="_4a-2-return-401-or-302" tabindex="-1"><a class="header-anchor" href="#_4a-2-return-401-or-302" aria-hidden="true">#</a> 4A.2.Return 401 or 302</h2><p>If access failed with <code>UNAUTHORIZED</code>, spring throws an AccessDeniedException. The ExceptionTranslationFilter then selects the appropriate AuthenticationEntryPoint.</p><p>In Wings, there are 2 AuthenticationEntryPoint by default.</p><ul><li>LoginUrlAuthenticationEntryPoint - the user/pass login for common user</li><li>BasicAuthenticationEntryPoint - basic authentication for monitoring</li></ul><p>LoginUrl can select which form of login to provide to the user by login-forward setting.</p><p>On the EntryPoint selection, <code>http header</code> can be set to satisfy specific matching rules. The following settings can skip basic authentication rules, see HttpBasicConfigurer.registerDefaults for details</p><ul><li>Without the <code>X-Requested-With: XMLHttpRequest</code> header</li><li>Include any of the following values in <code>Accept</code><ul><li>application/xhtml+xml</li><li>image/*</li><li>text/html</li><li>text/plain</li></ul></li></ul><h2 id="_4a-3-openapi3-features" tabindex="-1"><a class="header-anchor" href="#_4a-3-openapi3-features" aria-hidden="true">#</a> 4A.3.OpenAPI3 Features</h2><p>In the OpenAPI3 specification, <code>Accept</code>, <code>Content-Type</code> and <code>Authorization</code> are not allowed to be modified.</p>',9),g={href:"https://swagger.io/docs/specification/describing-parameters/#header-parameters",target:"_blank",rel:"noopener noreferrer"},f=o(`<blockquote><p>Note: Header parameters named Accept, Content-Type and Authorization are not allowed. To describe these headers, use the corresponding OpenAPI keywords:</p></blockquote><p>Wings default configuration of swagger provides text and json types, corresponding to LoginUrl and Basic&#39;s EntryPoint respectively.</p><p>302 in swagger is automatically redirected to the target page, and finally displayed in 200. This process can be seen in debug or curl.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-vX</span> <span class="token string">&#39;POST&#39;</span> <span class="token punctuation">\\</span>
  <span class="token string">&#39;http://localhost:8084/user/authed-user.json&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-H</span> <span class="token string">&#39;accept: text/html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(b,_){const a=s("ExternalLinkIcon");return r(),c("div",null,[d,e("ul",null,[e("li",null,[t("Homepage URL - "),e("a",p,[t("http://localhost:8084"),n(a)])]),e("li",null,[t("Callback URL - "),e("a",h,[t("http://localhost:8084/auth/github/login.json"),n(a)])])]),u,e("p",null,[e("a",g,[t("https://swagger.io/docs/specification/describing-parameters/#header-parameters"),n(a)])]),f])}const v=i(l,[["render",m],["__file","4a-authn.html.vue"]]);export{v as default};
