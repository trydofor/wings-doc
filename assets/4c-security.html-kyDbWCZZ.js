import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as t,e as s}from"./app-D1G0Arv-.js";const a={},n=s('<h1 id="_4c-customize-security" tabindex="-1"><a class="header-anchor" href="#_4c-customize-security"><span>4C.Customize Security</span></a></h1><p>All Wings projects, features can be customized by configuring <code>*.properties</code> and declaring <code>@Bean</code>. However, there may be complex dependencies between features that require users to take care of, even to read the code.</p><h2 id="_4c-1-customize-login" tabindex="-1"><a class="header-anchor" href="#_4c-1-customize-login"><span>4C.1.Customize Login</span></a></h2><p>The difference between the login page <code>login-page*</code> (with <code>page</code>) and the processing interface <code>*login*</code>, is as follows</p><ul><li>login-page - the login page displayed to the user, typically an automatic 302 redirect at 401</li><li>login - for the processing or callback interface after submitting credentials, executed by filter</li></ul><p>The default login page and returned results provided by Warlock can be modified in the following 4 ways</p><ul><li>expose ComboWingsAuthPageHandler.Combo to add processing details</li><li>expose WingsAuthPageHandler to replace the processing details</li><li>expose wings.warlock.security.login-page to redirect to a custom page</li><li>expose AuthenticationSuccessHandler, AuthenticationFailureHandler to handle login events</li><li>expose LogoutSuccessHandler to handle logout events</li></ul><p>In the default implementation, the sessionId is placed in the cookie and header when login, and the session is deleted when logout.</p><p>Note that the http protocol has case issues with header and cookies, so all lowercase is recommended.</p><ul><li>header RFC2616 <em>not</em> case-sensitive, some agents or tools will automatically convert to all-lowercase</li><li>cookie RFC2019 case sensitive, generally preserved as it is</li><li>Known header is automatically lowercase by default swagger-ui and webpack-dev-server (node http)</li></ul><p>NonceLoginSuccessHandler with NonceTokenSessionHelper implements the function of oauth one-time token for session. So if you need this feature, you must implement your own AuthenticationSuccessHandler to inherit NonceLoginSuccessHandler.</p><p>Oauth can redirect customization by host and state parameters, see AuthStateBuilder for details.</p><ul><li>Redirects - 302, starting with <code>http</code> or <code>/</code></li><li>Write-back - non-empty content, write back directly to response</li><li>For security reasons, the above must be preset in the configuration, see <code>wings.warlock.just-auth.safe-*</code></li></ul><p>Note that <code>safe-host</code> has restrictions on the following features.</p><ul><li>check the <code>{host}</code> of redirect-uri if request with host parameter, and construct uri if it passes</li><li>When redirect in state starts with http, check for host, and if it not pass, write back directly instead of redirecting.</li></ul><h2 id="_4c-2-customize-authz" tabindex="-1"><a class="header-anchor" href="#_4c-2-customize-authz"><span>4C.2.Customize Authz</span></a></h2><ul><li>expose ComboWingsAuthDetailsSource.Combo to add processing details</li><li>expose WingsAuthDetailsSource to replace the processing details</li><li>expose ComboWingsUserDetailsService.Combo to add loading details</li><li>expose WingsUserDetailsService to replace the user loading</li></ul><h2 id="_4c-3-customize-authn" tabindex="-1"><a class="header-anchor" href="#_4c-3-customize-authn"><span>4C.3.Customize Authn</span></a></h2><p>In addition to the default implementation of the User, Role, and Perm system, Warlock supports the following fine-grained customization of users and permissions</p><ul><li>NonceUserDetailsCombo - one-time login</li><li>MemoryUserDetailsCombo - Mount users and perm by uid, login name, login method</li><li>NonceTokenSessionHelper - out of oauth2 process, get SessionId by one-time state</li></ul><h2 id="_4c-4-verify-perm-at-login" tabindex="-1"><a class="header-anchor" href="#_4c-4-verify-perm-at-login"><span>4C.4.Verify Perm at Login</span></a></h2><p>Wings users and permissions are managed in a single database. If different apps need different permissions, For example, in admin page, you must have ROLE_ADMIN to access, otherwise after successful login, all features are 403, which is not friendly.</p><p>So when logging in, use authType prefix, you can directly check ROLE_ADMIN permissions, if not, the login will fail.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.warlock.security.zone-perm.admin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">ROLE_ADMIN</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## Support `authType` and `authZone`, via param or path (PathPattern)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">wings.warlock.security.login-proc-url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/auth/{authType}-{authZone}/login.json</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## Better compatibility, supports both authType and authZone via path</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">#/auth/{authType:[^-]+}{splitter:-?}{authZone:[^-]*}/login.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following URLs can all pass authZone, QueryString is recommended, and PathVariable is used when QueryString NOT supported.</p><ul><li>QueryString - /auth/username/login.json?authZone=admin</li><li>PathVariable - /auth/username-admin/login.json</li></ul><p>In addition, it is also possible to use authedPerm to authenticate permissions after a successful login, which also has automatic logout functionality, with the difference that</p><ul><li>authZone returns as login failure, no session is written, it is a general login action, i.e. loading information and verification.</li><li>authedPerm first login successfully, writes session, and then logout if there is no permission, which is two actions of login + logout.</li></ul><h2 id="_4c-5-authn-by-appname" tabindex="-1"><a class="header-anchor" href="#_4c-5-authn-by-appname"><span>4C.5.Authn by AppName</span></a></h2><p>This feature is not implemented by default, and the following basic principles must be followed when enabling it to prevent misuse.</p><ul><li>Security viewpoint, the authorization should not be expanded, and should be minimized.</li><li>Usage viewpoint, the data structure of the permission should be simple, each app should be independent, mixed use leads to complex.</li></ul><p>ComboWarlockAuthzService.Combo should be customized to adjust permissions according to spring.application.name.</p><h2 id="_4c-6-authn-by-ip" tabindex="-1"><a class="header-anchor" href="#_4c-6-authn-by-ip"><span>4C.6.Authn by Ip</span></a></h2><p>Login or perms can be controlled via remote ip. However, dynamic ip, such as proxies and mobile networks should be considered.</p>',34),o=[n];function l(r,c){return t(),i("div",null,o)}const d=e(a,[["render",l],["__file","4c-security.html.vue"]]),u=JSON.parse('{"path":"/4-warlock/4c-security.html","title":"4C.Customize Security","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"umbrella","category":["Warlock","Security"],"description":"4C.Customize Security All Wings projects, features can be customized by configuring *.properties and declaring @Bean. However, there may be complex dependencies between features...","GIT_REPO_HEAD":"2024-06-12 8f2200ec1261aec9ea295ce5d0754eec274b2be9","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/4-warlock/4c-security.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/4-warlock/4c-security.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"4C.Customize Security"}],["meta",{"property":"og:description","content":"4C.Customize Security All Wings projects, features can be customized by configuring *.properties and declaring @Bean. However, there may be complex dependencies between features..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4C.Customize Security\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"4C.1.Customize Login","slug":"_4c-1-customize-login","link":"#_4c-1-customize-login","children":[]},{"level":2,"title":"4C.2.Customize Authz","slug":"_4c-2-customize-authz","link":"#_4c-2-customize-authz","children":[]},{"level":2,"title":"4C.3.Customize Authn","slug":"_4c-3-customize-authn","link":"#_4c-3-customize-authn","children":[]},{"level":2,"title":"4C.4.Verify Perm at Login","slug":"_4c-4-verify-perm-at-login","link":"#_4c-4-verify-perm-at-login","children":[]},{"level":2,"title":"4C.5.Authn by AppName","slug":"_4c-5-authn-by-appname","link":"#_4c-5-authn-by-appname","children":[]},{"level":2,"title":"4C.6.Authn by Ip","slug":"_4c-6-authn-by-ip","link":"#_4c-6-authn-by-ip","children":[]}],"git":{"createdTime":1656137116000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":4}]},"readingTime":{"minutes":2.34,"words":702},"filePathRelative":"4-warlock/4c-security.md","localizedDate":"June 25, 2022","autoDesc":true}');export{d as comp,u as data};
