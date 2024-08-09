import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,c as r,b as a,d as e,f as i,w as t,e as o,o as c}from"./app-CfZymbb7.js";const d={},p=o('<h1 id="_0g-ghostship-model" tabindex="-1"><a class="header-anchor" href="#_0g-ghostship-model"><span>0G.GhostShip Model</span></a></h1><p>WingsBoot basic architectural idea is to do the model vertically and overlay the function horizontally. The codename has bean called CruiseModel, later in the Dota series, changed to GhostShip, more wings a little</p><h2 id="_0g-1-aboard-to-the-sea-gosea" tabindex="-1"><a class="header-anchor" href="#_0g-1-aboard-to-the-sea-gosea"><span>0G.1.Aboard to the sea (GoSea)</span></a></h2><p>Chinglish says, <code>Go And Sea</code>, <code>Let&#39;s Me See Sea</code></p><p>In my experience with startups, almost everything is lacking and nothing is certain. The entire team is in the same boat, trying to survive and explore at sea, while trying not to get lost or sink.</p><h2 id="_0g-2-vertical-model-floor" tabindex="-1"><a class="header-anchor" href="#_0g-2-vertical-model-floor"><span>0G.2.Vertical Model (Floor)</span></a></h2><p>The business architecture and model, program architecture and model, have strict boundaries and dependency requirements. Usually, from the bottom to the top like a building floor, they are called Floor-N (N is a natural number)</p><h3 id="_2a-unidirectional-call-avoid-crossing" tabindex="-1"><a class="header-anchor" href="#_2a-unidirectional-call-avoid-crossing"><span>2a.Unidirectional Call, Avoid Crossing</span></a></h3><p>Usually, the upper layer can invoke the same layer or the lower layer, but not vice versa. For example, in the structure of Dao/Ser/Mvc:</p>',9),h=o(`<h3 id="_2b-unidirectional-flow-event-sourcing" tabindex="-1"><a class="header-anchor" href="#_2b-unidirectional-flow-event-sourcing"><span>2b.Unidirectional Flow, Event Sourcing</span></a></h3><p>Data flow and business flow require unidirectional flow. In the case of turbulent flow, unambiguous events should be propagated and tracked.</p><p>For example, data flows from the bottom up, while business flows from the top down.</p><h2 id="_0g-3-horizontal-functions-layer" tabindex="-1"><a class="header-anchor" href="#_0g-3-horizontal-functions-layer"><span>0G.3.Horizontal Functions (Layer)</span></a></h2><p>Functions or modules can combine, inherit, overlay or filter to provide appropriate services to the outside world. Usually, from the inside to the outside, they are called Layer-N (N is a natural number)</p><ul><li><code>messages</code> and <code>properties</code> use overlay</li><li><code>Servlet</code> and <code>Filter</code> use combine and filter</li><li><code>Authn</code> and <code>Authz</code> use combine and inherit</li></ul><h3 id="_3a-clear-boundary-reduce-coupling" tabindex="-1"><a class="header-anchor" href="#_3a-clear-boundary-reduce-coupling"><span>3a.Clear Boundary, Reduce Coupling</span></a></h3><p>Based on business requirements within the domain, define clear boundaries, such as data models, functional modules, etc.</p><h3 id="_3b-single-responsibility-each-to-its-own" tabindex="-1"><a class="header-anchor" href="#_3b-single-responsibility-each-to-its-own"><span>3b.Single Responsibility, Each to Its Own</span></a></h3><p>For a given event, focus on a single task, for a data flow, handle only the current state.</p><h2 id="_0g-4-basic-model" tabindex="-1"><a class="header-anchor" href="#_0g-4-basic-model"><span>0G.4.Basic Model</span></a></h2><ul><li>Presentation - present and interpret user commands, eg. app, web</li><li>Application - validate and transform data, eg. controller, api</li><li>Domain/Biz - handle biz concept and logic, eg. service, dao</li><li>Infrastructure - biz-independent server, eg. db, cache</li></ul><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>▲</span></span>
<span class="line"><span>│ Floor of Abstraction</span></span>
<span class="line"><span>├──────────────┐</span></span>
<span class="line"><span>│ Presentation │</span></span>
<span class="line"><span>├──────────────┴──┬────────┐</span></span>
<span class="line"><span>│ Application     │ LayerA │</span></span>
<span class="line"><span>├─────────────────┴──┬─────┴───┬────────┐</span></span>
<span class="line"><span>│ Domain/Biz         │  LayerB │ LayerD │</span></span>
<span class="line"><span>├────────────────────┴──┬──────┴─┬──────┴─┬────────┐</span></span>
<span class="line"><span>│ Infrastructure        │ Layer1 │ Layer2 │ Layer3 │</span></span>
<span class="line"><span>└───────────────────────┴────────┴────────┴────────┴─────▶</span></span>
<span class="line"><span>                    Layer of Complexity</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function u(g,m){const n=s("Badge");return c(),r("div",null,[p,a("ul",null,[a("li",null,[e("Service can call Dao and Service, but should avoid calling back. "),i(n,{type:"tip",vertical:"top"},{default:t(()=>[e("SHOULD")]),_:1})]),a("li",null,[e("Controller can call Service, but must not be called back. "),i(n,{type:"info",vertical:"top"},{default:t(()=>[e("MUST")]),_:1})]),a("li",null,[e("Controller should not call Dao. "),i(n,{type:"tip",vertical:"top"},{default:t(()=>[e("SHOULD")]),_:1})])]),h])}const f=l(d,[["render",u],["__file","0g-ghost-ship.html.vue"]]),y=JSON.parse('{"path":"/0-wings/0g-ghost-ship.html","title":"0G.GhostShip Model","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"ship","category":["WingsGod","Model"],"description":"0G.GhostShip Model WingsBoot basic architectural idea is to do the model vertically and overlay the function horizontally. The codename has bean called CruiseModel, later in the...","GIT_REPO_HEAD":"2024-08-09 96de5f3516d8a63745329bc5d9552c3dafb6ff53","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/0-wings/0g-ghost-ship.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/0-wings/0g-ghost-ship.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"0G.GhostShip Model"}],["meta",{"property":"og:description","content":"0G.GhostShip Model WingsBoot basic architectural idea is to do the model vertically and overlay the function horizontally. The codename has bean called CruiseModel, later in the..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T00:21:52.000Z"}],["meta",{"property":"article:author","content":"trydofor"}],["meta",{"property":"article:modified_time","content":"2024-06-12T00:21:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"0G.GhostShip Model\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T00:21:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"0G.1.Aboard to the sea (GoSea)","slug":"_0g-1-aboard-to-the-sea-gosea","link":"#_0g-1-aboard-to-the-sea-gosea","children":[]},{"level":2,"title":"0G.2.Vertical Model (Floor)","slug":"_0g-2-vertical-model-floor","link":"#_0g-2-vertical-model-floor","children":[{"level":3,"title":"2a.Unidirectional Call, Avoid Crossing","slug":"_2a-unidirectional-call-avoid-crossing","link":"#_2a-unidirectional-call-avoid-crossing","children":[]},{"level":3,"title":"2b.Unidirectional Flow, Event Sourcing","slug":"_2b-unidirectional-flow-event-sourcing","link":"#_2b-unidirectional-flow-event-sourcing","children":[]}]},{"level":2,"title":"0G.3.Horizontal Functions (Layer)","slug":"_0g-3-horizontal-functions-layer","link":"#_0g-3-horizontal-functions-layer","children":[{"level":3,"title":"3a.Clear Boundary, Reduce Coupling","slug":"_3a-clear-boundary-reduce-coupling","link":"#_3a-clear-boundary-reduce-coupling","children":[]},{"level":3,"title":"3b.Single Responsibility, Each to Its Own","slug":"_3b-single-responsibility-each-to-its-own","link":"#_3b-single-responsibility-each-to-its-own","children":[]}]},{"level":2,"title":"0G.4.Basic Model","slug":"_0g-4-basic-model","link":"#_0g-4-basic-model","children":[]}],"git":{"createdTime":1656137116000,"updatedTime":1718151712000,"contributors":[{"name":"trydofor","email":"trydofor@gmail.com","commits":5}]},"readingTime":{"minutes":1.27,"words":382},"filePathRelative":"0-wings/0g-ghost-ship.md","localizedDate":"June 25, 2022","autoDesc":true}');export{f as comp,y as data};