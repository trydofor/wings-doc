import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as o}from"./app-OXbFzGQa.js";const a={},i=o(`<h1 id="_3c-host继承和url重载" tabindex="-1"><a class="header-anchor" href="#_3c-host继承和url重载"><span>3C.Host继承和URL重载</span></a></h1><p>基于Mvc特性实现了同一个后端app多个不同前端的host租户功能。不同于反向代理(nginx)的rewrite，</p><ul><li>extend - 子domain拥有父domain的全部URL</li><li>override - 子domain可以override父domain的URL</li><li>子domain有自己独立的URL</li><li>domain的继承基于host</li></ul><h2 id="_3c-1-场景举例" tabindex="-1"><a class="header-anchor" href="#_3c-1-场景举例"><span>3C.1.场景举例</span></a></h2><p>假设<code>a.com</code>是一个有完整的功能domain，举例包括以下3个URL</p><ul><li>GET /user-list.json - 基于Controller</li><li>GET /css/main.css - 静态资源</li><li>GET /login.html - 基于Controller</li></ul><p>此时，来个加盟商<code>b.com</code>，除了皮肤，顶级域名外，都和<code>a.com</code>一样。 再后来，<code>b.com</code>有了自己的需求，部分界面和url和<code>a.com</code>的需求分叉了。 不同的功能自己实现，放在约定的prefix下，此时URL分布如下，</p><ul><li>GET /login.html - <code>a.com</code>(父)，<code>b.com</code>(子)</li><li>GET /user-list.json - <code>a.com</code>(父)</li><li>GET /css/main.css - <code>a.com</code>(父)</li><li>GET /domain/b/user-list.json - <code>b.com</code>(子)</li><li>GET /domain/b/css/main.css - <code>b.com</code>(子)</li></ul><p>当用户访问以下URL时，按照java的父子类override规则，调用如下，</p><ul><li><code>a.com/login.html</code> - /login.html(父)</li><li><code>a.com/user-list.json</code> - /user-info.list(父)</li><li><code>a.com/css/main.css</code> - /css/main.css(父)</li><li><code>b.com/login.html</code> - /login.html(父)</li><li><code>b.com/user-list.json</code> - /domain/b/user-list.json(子)</li><li><code>b.com/css/main.css</code> - /domain/b/css/main.css(子)</li></ul><p>实际项目中，以上场景多发生在resource和controller的Mapping中。</p><ul><li>resource通常有<code>**</code>匹配，用反射ResourceHttpRequestHandler.getResource检查</li><li>若非ResourceHttpRequestHandler且match<code>**</code>，需要自己设法检查资源是否存在</li><li>暂时不支持viewTemplate，同时也约定模板必须使用全路径</li></ul><p>根据wings mapping约定，避免使用相对路径，所以，b.com要在在class级做前缀</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Controller</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/domain/b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
 
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user-info.json&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">fetchUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 不支持view，需要手动指定</span>
        <span class="token keyword">return</span> <span class="token string">&quot;/domain/b/user-info&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3c-2-实现原理" tabindex="-1"><a class="header-anchor" href="#_3c-2-实现原理"><span>3C.2.实现原理</span></a></h2><p>在SpringMvc体系中，一个请求进入servlet容器后，在worker线程中</p><ul><li>Filter#doFilter <code>before</code> chain.doFilter</li><li>DispatcherServlet#doService <code>call</code> doDispatch</li><li>Filter#doFilter <code>after</code> chain.doFilter</li></ul><p>wings通过WingsDomainFilter，先检查host，如果是继承域，则构造子域全路径url，<br> 通过检查缓存和DispatchServlet中的HandlerMapping再构造RequestWrapper。</p><p>比如用户访问的URL为 /user/login.json，假设满足domain继承，host为trydofor， 在服务器端实际访问的资源是/prefix/trydofor/user/login.json</p><p>即增加了<code>/\${prefix}/\${host}</code>的路径在客户访问URI前。知识点扩展，</p><ul><li>在FilterChain.doFilter调用之前Request可用，而其后Response可用的，注意线程安全和性能</li><li>默认静态资源在classpath中的 <code>/static</code>, <code>/public</code>, <code>/resources</code>, <code>/META-INF/resources</code></li></ul>`,21),c=[i];function l(t,d){return n(),e("div",null,c)}const u=s(a,[["render",l],["__file","3c-host-ext.html.vue"]]);export{u as default};
