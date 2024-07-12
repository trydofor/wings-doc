import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,e as a}from"./app-CcKWV4zH.js";const n={},t=a(`<h1 id="_3g-backend-protection" tabindex="-1"><a class="header-anchor" href="#_3g-backend-protection"><span>3G.Backend Protection</span></a></h1><p>Provide some protection and control for backsend services.</p><h2 id="_3g-1-backend-debounce" tabindex="-1"><a class="header-anchor" href="#_3g-1-backend-debounce"><span>3G.1.Backend Debounce</span></a></h2><p>Similar to the frontend Lodash, but the backend business takes precedence and only supports the leading style debounce of call first and wait later. That is, the business is processing on the first request, and the subsequent request arrives, the following processing is supported,</p><ul><li>Directly return the preset response (default 208 Already Reported) if no reuse of the leading result. otherwise,</li><li>Wait for specified milliseconds, and timeout or wake up by leading process. then,</li><li>Reuse if there is a leading result; otherwise, return the preset response.</li></ul><p><code>@Debounce</code> is based on HandlerInterceptor, request stream reuse and response stream caching. Acts on Controller layer, Session level, with URL and parameters as the basis for judging duplication.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">PostMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/test/debounce-body.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">waiting</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 600</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> header</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;User-Agent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> body</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> reuse</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Object</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> debounceBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> p</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">RequestBody</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Q</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> q) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ok</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(p </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;::&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> seq</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getAndIncrement</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;::&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> q</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getQ</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more examples, see the Debounce doc or the testcase <code>TestDebounceController.java</code></p><h2 id="_3g-2-double-kill" tabindex="-1"><a class="header-anchor" href="#_3g-2-double-kill"><span>3G.2.Double Kill</span></a></h2><p><code>@DoubleKill</code> is different from Debounce, which is a Cacheable-like AOP for Service layer to prevent concurrent processes. The underlying layer is based on business locks, not time intervals, acquiring locks at the beginning and releasing them at the end, and requests that do not get locks are killed.</p><p>The name is from Dota, but the meaning is different, it is kill the second, implemented by Jvm global lock and DoubleKillException.</p><p>Can be used but not recommended for Controller layer, you should explicitly specify parameters by Spel, such as @RequestParam. This is session level control, can be handled with @Bean and returns 202 Accepted by default.</p><p>DoubleKillException returns a fixed json by default, which can be replaced by injecting DoubleKillExceptionResolver. Must pay attention to the Order of ExceptionResolver or ExceptionHandler to avoid exception catching hierarchy errors.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">DoubleKill</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">expression</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;#type + &#39;-&#39; + #p1 * 1000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sleepSecondExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> s) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">DoubleKill</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">expression</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;@httpSessionIdResolver.resolveSessionIds(#p0)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> doubleKill</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">HttpServletRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> request) throws InterruptedException {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10_000</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> R</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ok</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;login page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For detailed usage, see the source code or the test code,</p><ul><li><a href="https://github.com/trydofor/professional-wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/controller/TestDoubleKillController.java" target="_blank" rel="noopener noreferrer">TestDoubleKillController.java</a></li><li><a href="https://github.com/trydofor/professional-wings/blob/master/wings/slardar/src/test/java/pro/fessional/wings/slardar/service/DoubleKillService.java" target="_blank" rel="noopener noreferrer">DoubleKillService.java</a></li></ul><h2 id="_3g-3-captcha" tabindex="-1"><a class="header-anchor" href="#_3g-3-captcha"><span>3G.3.CAPTCHA</span></a></h2><p>For protected resources, captcha is used to sometimes to delay time and sometimes to distinguish behavior. Captcha loading and validation can be done via header or param (default param).</p><p>In SpringSecurity, the conventions for 401 and 403 are as follows, so CAPTCHA uses 406 (Not Acceptable)</p><ul><li>401 - Unauthorized identity not identified</li><li>403 - Forbidden/Access Denied Authentication passed, insufficient authorization</li></ul><p>Slardar&#39;s CAPTCHA is image based and today&#39;s AI can recognize up to 99.9% or more, so it is not secure and is a low level protection for gentlemen only. The default support for Chinese, is 1 Chinese + 3 Alphanum, can be turned off in the configuration. For sensitive information or advanced protection, it is recommended to purchase a 3rd CAPTCHA service.</p><p>Put <code>@FirstBlood</code> on the MappingMethod, usage and workflow is as follows.</p><ul><li>Client normally accesses the URL, such as /test/captcha.json (support GET in order to get the image)</li><li>If the server requires a captcha, it returns a json with 406 (Not Acceptable)</li><li>Client gets Client-Ticket token from header or cookie, and sends it each time</li><li>Client appends quest-captcha-image=\${vcode} to the URL to get the CAPTCHA image (can be used directly) <ul><li>Distinguish the image form by <code>accept</code>, <code>base64</code> is in base64, all others are binary streams</li><li>When <code>vcode</code> is the captcha and passed, return the empty body, otherwise return the new verification image</li></ul></li><li>Client appends check-captcha-image=\${vcode} to the URL, submit the captcha</li><li>Server auto checks Client-Ticket and check-captcha-image to complete validation</li></ul><p>If you need to integrate other CAPTCHAs, such as 3rd services or message CAPTCHAs, just implement and inject FirstBloodHandler.</p><h2 id="_3g-4-anti-forgery" tabindex="-1"><a class="header-anchor" href="#_3g-4-anti-forgery"><span>3G.4.Anti Forgery</span></a></h2><p>Set a signature for the message to be edited in the http header to prevent tampering by the client. Default returns 409(Conflict). See wings-righter-79.properties and RighterContext for details. the Underlying principle and usage are,</p><ul><li>Use the Righter annotation to edit data (false) and commit data (true)</li><li>Set the signature header in the RighterContext when getting the edited data</li><li>When committing, this signature must be submitted and verified, return 409 if wrong signature</li><li>After the signature is passed, the data is obtained through the RighterContext and the program itself checks the data items for consistency.</li></ul><h2 id="_3g-5-terminal-info" tabindex="-1"><a class="header-anchor" href="#_3g-5-terminal-info"><span>3G.5.Terminal Info</span></a></h2><p>Terminal info (eg. ip, agent, locale and timezone) is set in the current thread (and request) via,</p><ul><li><code>HandlerInterceptor</code> - Controller</li><li><code>AuthenticationEventPublisher</code> - Filter (login/logout)</li></ul><h2 id="_3g-6-request-reuse-and-response-caching" tabindex="-1"><a class="header-anchor" href="#_3g-6-request-reuse-and-response-caching"><span>3G.6.Request Reuse and Response Caching</span></a></h2><p>WingsReuseStreamFilter implements circular reading of request stream, and caching of response. When using the following filter, bytes are duplicated and space is wasted, so it is recommended to Override it by yourself.</p><ul><li>CommonsRequestLoggingFilter</li><li>ShallowEtagHeaderFilter</li></ul><p>ReuseStream provides circular reading and is disabled by default, without space or performance loss if not used. It is only used by the filter, interceptor, advice and other mechanisms to enable circular reading when needed.</p><p>You must be aware of the filter order to ensure the wrapper is complete before using it.</p><h2 id="_3g-7-request-and-response-loging" tabindex="-1"><a class="header-anchor" href="#_3g-7-request-and-response-loging"><span>3G.7.Request and Response Loging</span></a></h2><p>Request and response logging can be implemented by injecting RequestResponseLogging into WingsReuseStreamFilter. Unlike CommonsRequestLoggingFilter, this feature is used on demand and supports both request and response.</p><p>Just implement the AbstractRequestResponseLogging bean, the reference code is as follows.</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> RequestResponseLogging</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> requestResponseLogging</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> AbstractRequestResponseLogging</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Condition</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> loggingConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">NotNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> ReuseStreamRequestWrapper</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> req</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getRequestURI</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">contains</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/test/debounce&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Condition</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> cond</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Condition</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            cond</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setRequestEnable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            cond</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setRequestPayload</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            cond</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setRequestHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(s </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">contains</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;User-Agent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            cond</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setResponseEnable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            cond</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setResponsePayload</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> cond;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> logging</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">NotNull</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> String</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(message);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The principle is that the following steps are auto implemented when WingsReuseStreamFilter is configured.</p><ul><li>@AutoConfigureBefore(SlardarRestreamConfiguration.class)</li><li>Get WingsReuseStreamFilter, then setRequestResponseLogging</li></ul><p>Note that <code>POST</code> commits a traditional form data, of the following 2 types, including parameters and files</p><ul><li><code>application/x-www-form-urlencoded</code></li><li><code>multipart/form-data</code></li></ul><p>Because the underlying parameter parsing and get stream is a choose one of two, that is, first parsing then stream exhausted, read stream then parameters are empty. So, if you need to record Payload for these two requests, there are the following differences</p><ul><li>form-urlencoded, which contains query parameters because of the post-constructed body</li><li>form-data, the body is the same as above, the file needs to implement buildRequestPayload to get the pars record</li></ul><h2 id="_3g-8-rest-and-client" tabindex="-1"><a class="header-anchor" href="#_3g-8-rest-and-client"><span>3G.8.Rest and Client</span></a></h2><p>The restTemplate use OkHttp as underlying in wings. Follow SpringBoot official docs and code conventions, OkHttpClient Can Autowired and use directly, the default <strong>trust all ssl certificates</strong>, but in high security, you need to disable it.</p><p>For scope customization use RestTemplateBuilder, for global customization use RestTemplateCustomizer.</p><p><a href="https://docs.spring.io/spring-boot/docs/3.0.3/reference/htmlsingle/#io.rest-client.resttemplate.customization" target="_blank" rel="noopener noreferrer">RestTemplate Customization</a> org.springframework.boot.autoconfigure.web.client.RestTemplateAutoConfiguration</p><p>In springboot 2.x, use http 3.x by default, and just-auth needs 4.x, so you need to manually set okhttp3.version property</p><h2 id="_3g-9-overloadfilter" tabindex="-1"><a class="header-anchor" href="#_3g-9-overloadfilter"><span>3G.9.OverloadFilter</span></a></h2><p>OverloadFilter can limit request concurrency, default <code>false</code></p><ul><li>Set <code>max concurrent requests</code> automatically or manually, and perform <code>fallback</code> when exceeded.</li><li>Log slow response URIs and running status without affecting performance.</li><li>Elegantly stop the server and block all new requests.</li><li>Perform fallback if same IP requests are too frequent.</li></ul><p><code>max concurrent requests</code>, which refers to requests that have been processed by the Controller but not completed.</p><p>Among them, the <code>fast requests</code> or <code>slow requests</code> can be disabled with the following settings.</p><ul><li><code>fast requests</code> - <code>wings.slardar.overload.request-capacity=-1</code></li><li><code>slow request</code> - <code>wings.slardar.overload.response-warn-slow=0</code></li></ul><h2 id="_3g-10-pagination-query" tabindex="-1"><a class="header-anchor" href="#_3g-10-pagination-query"><span>3G.10.Pagination Query</span></a></h2><p>PageQuery and PageDefault are used in Wings instead of Pagable in SpringData.</p><ul><li>PageQuery can only be passed using the QueryString method and is not part of the RequesBody section.</li><li><code>@ParameterObject</code> PageQuery pq</li><li><code>@ParameterObject</code> <code>@PageDefault(size=30)</code> PageQuery pq</li></ul><p>The @ParameterObject annotation is used so that Swagger can automatically recognize it as a Param type</p><p>As with PageQuery, the pagination return uses PageResult as the container and Wings has tool to handle it.</p><p>When PageQuery is used as @RequesBody, it usually looks like this</p><ul><li>as super <code>Ins extends PageQuery</code></li><li>as field <code>private PageQuery pagable</code></li></ul><p>cannot use PageDefault and aliases, and is handled by the following classes, just like a normal json pojo.</p><ul><li>RequestResponseBodyMethodProcessor</li><li>HttpMessageConverter</li></ul><p>Due to aliasing requirements, generally used for compatibility with older systems, so not customized Jackson Deserializer and HandlerMethodArgumentResolver</p>`,66),l=[t];function r(h,p){return e(),i("div",null,l)}const k=s(n,[["render",r],["__file","3g-fun-server.html.vue"]]),c=JSON.parse('{"path":"/3-slardar/3g-fun-server.html","title":"3G.Backend Protection","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"shield-heart","category":["Slardar","Protection","Backend"],"description":"3G.Backend Protection Provide some protection and control for backsend services. 3G.1.Backend Debounce Similar to the frontend Lodash, but the backend business takes precedence ...","GIT_REPO_HEAD":"2024-07-12 b7f98fdbcca854143856b6032bf8c1819b601f15","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/3-slardar/3g-fun-server.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/3-slardar/3g-fun-server.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"3G.Backend Protection"}],["meta",{"property":"og:description","content":"3G.Backend Protection Provide some protection and control for backsend services. 3G.1.Backend Debounce Similar to the frontend Lodash, but the backend business takes precedence ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3G.Backend Protection\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"3G.1.Backend Debounce","slug":"_3g-1-backend-debounce","link":"#_3g-1-backend-debounce","children":[]},{"level":2,"title":"3G.2.Double Kill","slug":"_3g-2-double-kill","link":"#_3g-2-double-kill","children":[]},{"level":2,"title":"3G.3.CAPTCHA","slug":"_3g-3-captcha","link":"#_3g-3-captcha","children":[]},{"level":2,"title":"3G.4.Anti Forgery","slug":"_3g-4-anti-forgery","link":"#_3g-4-anti-forgery","children":[]},{"level":2,"title":"3G.5.Terminal Info","slug":"_3g-5-terminal-info","link":"#_3g-5-terminal-info","children":[]},{"level":2,"title":"3G.6.Request Reuse and Response Caching","slug":"_3g-6-request-reuse-and-response-caching","link":"#_3g-6-request-reuse-and-response-caching","children":[]},{"level":2,"title":"3G.7.Request and Response Loging","slug":"_3g-7-request-and-response-loging","link":"#_3g-7-request-and-response-loging","children":[]},{"level":2,"title":"3G.8.Rest and Client","slug":"_3g-8-rest-and-client","link":"#_3g-8-rest-and-client","children":[]},{"level":2,"title":"3G.9.OverloadFilter","slug":"_3g-9-overloadfilter","link":"#_3g-9-overloadfilter","children":[]},{"level":2,"title":"3G.10.Pagination Query","slug":"_3g-10-pagination-query","link":"#_3g-10-pagination-query","children":[]}],"git":{"createdTime":1655981049000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":11}]},"readingTime":{"minutes":4.54,"words":1361},"filePathRelative":"3-slardar/3g-fun-server.md","localizedDate":"June 23, 2022","autoDesc":true}');export{k as comp,c as data};