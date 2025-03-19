import{_ as r,a as o,b as i,c as t,d as a,e as n,f as s,g as l,h as c,i as d,j as p,k as g}from"./bountyhunter_minimap_icon-BILpiJsx.js";import{_ as f}from"./bloodseeker_minimap_icon-D3FQi4F7.js";import{_ as h}from"./batrider_minimap_icon-T-_vOa2U.js";import{_ as u,a as m,b}from"./bane_minimap_icon-CBdTZu5h.js";import{_}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as y,g as w,o as k}from"./app-CV2Jd5ju.js";const x={};function v(S,e){return k(),y("div",null,e[0]||(e[0]=[w('<h1 id="_9a0-notable-changelog" tabindex="-1"><a class="header-anchor" href="#_9a0-notable-changelog"><span>9A0.Notable Changelog</span></a></h1><p>Incompatible and important features grouped by feather branch in reverse order.</p><h2 id="ongoing-bountyhunter-300-301-741-ss" tabindex="-1"><a class="header-anchor" href="#ongoing-bountyhunter-300-301-741-ss"><span><img src="'+r+'" alt="BountyHunter" title="BountyHunter"> ongoing <a href="https://github.com/trydofor/professional-wings/tree/develop" target="_blank" rel="noopener noreferrer">BountyHunter</a> 300.301.741-SS</span></a></h2><h2 id="_250208-bloodseeker-3-3-140" tabindex="-1"><a class="header-anchor" href="#_250208-bloodseeker-3-3-140"><span><img src="'+f+'" alt="Bloodseeker" title="Bloodseeker"> 250208 <a href="https://github.com/trydofor/professional-wings/tree/3.3.140" target="_blank" rel="noopener noreferrer">Bloodseeker</a> 3.3.140</span></a></h2><ul><li>💥 up deps: boot 3.3, mirana new i18n <a href="https://github.com/trydofor/professional-wings/issues/309" target="_blank" rel="noopener noreferrer">#309</a></li><li>💥 extract i18n text to codeEnum <a href="https://github.com/trydofor/professional-wings/issues/310" target="_blank" rel="noopener noreferrer">#310</a></li><li>💥 TypedRef instead of magic const key <a href="https://github.com/trydofor/professional-wings/issues/311" target="_blank" rel="noopener noreferrer">#311</a></li><li>💥 refactor/remove jackson empty-xxx <a href="https://github.com/trydofor/professional-wings/issues/313" target="_blank" rel="noopener noreferrer">#313</a></li></ul><h2 id="_240831-batrider-3-2-130" tabindex="-1"><a class="header-anchor" href="#_240831-batrider-3-2-130"><span><img src="'+h+'" alt="Batrider" title="Batrider"> 240831 <a href="https://github.com/trydofor/professional-wings/tree/3.2.130" target="_blank" rel="noopener noreferrer">Batrider</a> 3.2.130</span></a></h2><ul><li>🔥 MapStruct livetemplate wgme <a href="https://github.com/trydofor/professional-wings/issues/242" target="_blank" rel="noopener noreferrer">#242</a></li><li>🔥 LoginSuccessHandler state for oauth <a href="https://github.com/trydofor/professional-wings/issues/238" target="_blank" rel="noopener noreferrer">#238</a></li><li>🔥 move IfNotXxx from EmptySugar to SetterSugar <a href="https://github.com/trydofor/professional-wings/issues/239" target="_blank" rel="noopener noreferrer">#239</a></li><li>✨ jooq pojo setXxxIf conditional setter <a href="https://github.com/trydofor/professional-wings/issues/240" target="_blank" rel="noopener noreferrer">#240</a></li><li>🚀 change wings.ancient to wings-boot <a href="https://github.com/trydofor/professional-wings/issues/244" target="_blank" rel="noopener noreferrer">#244</a></li><li>💥 add jooq supporter dto <a href="https://github.com/trydofor/professional-wings/issues/247" target="_blank" rel="noopener noreferrer">#247</a></li><li>🎨 codestyle and livetemplate <a href="https://github.com/trydofor/professional-wings/issues/248" target="_blank" rel="noopener noreferrer">#248</a><ul><li>CONTINUATION_INDENT_SIZE from default 8 to 4</li><li>SPACE_WITHIN_ARRAY_INITIALIZER_BRACES true</li><li>ALIGN_MULTILINE_TERNARY_OPERATION nop</li></ul></li><li>💥 fastjson/jackson compatibility <a href="https://github.com/trydofor/professional-wings/issues/251" target="_blank" rel="noopener noreferrer">#251</a><ul><li>change LocaleZoneIdUtil.Xxx from Supplier to method</li><li>delete FastJsonFilters, FastJsonReaders</li><li>JacksonHelper do NOT auto timezone</li><li>JacksonHelper config plain as wings</li><li>FastjsonHelper delete enableXxx</li></ul></li><li>💥 remove TypeReference <a href="https://github.com/trydofor/professional-wings/issues/252" target="_blank" rel="noopener noreferrer">#252</a><ul><li>FastJsonHelper change method signature</li><li>JacksonHelper delete TypeReference method</li><li>✨ add TypeSugar to handle Type easy</li></ul></li><li>💥 tinytask schema refactor <a href="https://github.com/trydofor/professional-wings/issues/256" target="_blank" rel="noopener noreferrer">#256</a><ul><li>change schema revision=<code>2021_1026_02</code></li><li>✨ add time-tune to tinytask</li></ul></li><li>✨ change conf_runtime <a href="https://github.com/trydofor/professional-wings/issues/262" target="_blank" rel="noopener noreferrer">#262</a><ul><li>from <code>VARCHAR(5000)</code> to <code>TEXT</code> revision=<code>2021_1026_03</code></li><li>add <code>enabled</code> column</li></ul></li><li>💥 keep silencer simple <a href="https://github.com/trydofor/professional-wings/issues/265" target="_blank" rel="noopener noreferrer">#265</a><ul><li><code>spring.help.CommonPropHelper</code> to <code>support.PropHelper</code></li><li><code>SubclassSpringLoader</code> to <code>SubclassGather</code></li><li><code>enhance.TypeSugar</code> to <code>support.TypeSugar</code></li></ul></li><li>JournalService elapse, alive <a href="https://github.com/trydofor/professional-wings/issues/266" target="_blank" rel="noopener noreferrer">#266</a><ul><li>💥 change schema revision=<code>2021_1026_05</code></li><li>✨ create and elapse method</li></ul></li><li>tinymail support lazy edit <a href="https://github.com/trydofor/professional-wings/issues/270" target="_blank" rel="noopener noreferrer">#270</a><ul><li>✨ change schema revision=<code>2021_1026_06</code></li></ul></li><li>💥 tinymail service change signature <a href="https://github.com/trydofor/professional-wings/issues/272" target="_blank" rel="noopener noreferrer">#272</a></li><li>✨ tiny-grow to track data , analyze grow <a href="https://github.com/trydofor/professional-wings/issues/275" target="_blank" rel="noopener noreferrer">#275</a></li><li>🚨 1681 Integer display width is deprecated <a href="https://github.com/trydofor/professional-wings/issues/278" target="_blank" rel="noopener noreferrer">#278</a></li><li>💥 tinytask redefine miss of execute <a href="https://github.com/trydofor/professional-wings/issues/284" target="_blank" rel="noopener noreferrer">#284</a></li></ul><h2 id="_240514-bane-3-2-120" tabindex="-1"><a class="header-anchor" href="#_240514-bane-3-2-120"><span><img src="'+u+'" alt="Bane" title="Bane"> 240514 <a href="https://github.com/trydofor/professional-wings/tree/3.2.120" target="_blank" rel="noopener noreferrer">Bane</a> 3.2.120</span></a></h2><ul><li>🔥 refactor Async and Ttl <a href="https://github.com/trydofor/professional-wings/issues/233" target="_blank" rel="noopener noreferrer">#233</a></li><li>🐛 CodeException fail i18n when logined <a href="https://github.com/trydofor/professional-wings/issues/232" target="_blank" rel="noopener noreferrer">#232</a></li><li>✨ extra bean order by config <a href="https://github.com/trydofor/professional-wings/issues/231" target="_blank" rel="noopener noreferrer">#231</a></li><li>🐛 Failed to find servlet <a href="https://github.com/trydofor/professional-wings/issues/226" target="_blank" rel="noopener noreferrer">#226</a></li></ul><h2 id="_240303-arcwarden-3-2-110" tabindex="-1"><a class="header-anchor" href="#_240303-arcwarden-3-2-110"><span><img src="'+m+'" alt="Arc Warden"> 240303 <a href="https://github.com/trydofor/professional-wings/tree/3.2.110" target="_blank" rel="noopener noreferrer">ArcWarden</a> 3.2.110</span></a></h2><ul><li>📌 spring boot 3.2.2</li><li>♻️ javacode replace xml in jooq codegen <a href="https://github.com/trydofor/professional-wings/issues/198" target="_blank" rel="noopener noreferrer">#198</a></li><li>🔥 merge awesome and autogen module <a href="https://github.com/trydofor/professional-wings/issues/203" target="_blank" rel="noopener noreferrer">#203</a></li><li>🔥 delete HttpHelper, using HttpSecurity.with <a href="https://github.com/trydofor/professional-wings/issues/184" target="_blank" rel="noopener noreferrer">#203</a></li><li>✨ table whitelist for JournalJdbcHelper <a href="https://github.com/trydofor/professional-wings/issues/206" target="_blank" rel="noopener noreferrer">#206</a></li><li>✨💥 Feature flags <a href="https://github.com/trydofor/professional-wings/issues/208" target="_blank" rel="noopener noreferrer">#208</a></li><li>✨ docker or buildpack <a href="https://github.com/trydofor/professional-wings/issues/209" target="_blank" rel="noopener noreferrer">#209</a></li></ul><h2 id="_240129-antimage-3-2-101" tabindex="-1"><a class="header-anchor" href="#_240129-antimage-3-2-101"><span><img src="'+b+'" alt="Anti-Mage"> 240129 <a href="https://github.com/trydofor/professional-wings/tree/3.2.101" target="_blank" rel="noopener noreferrer">AntiMage</a> 3.2.101</span></a></h2><ul><li>📌 dependencies <a href="https://github.com/trydofor/professional-wings/issues/160" target="_blank" rel="noopener noreferrer">#160</a><ul><li>spring boot 3.2.1</li><li>java 21</li><li>shardingsphere 5.4.1</li><li>servicecomb 3.0.0</li><li>jooq 3.18</li></ul></li><li>🔥 old kryo-serializers <a href="https://github.com/trydofor/professional-wings/issues/185" target="_blank" rel="noopener noreferrer">#185</a></li><li>♻️ refactor slf4j TtlMDCAdapter <a href="https://github.com/trydofor/professional-wings/issues/187" target="_blank" rel="noopener noreferrer">#187</a></li><li>✨ dryrun token of mail/dingtalk <a href="https://github.com/trydofor/professional-wings/issues/192" target="_blank" rel="noopener noreferrer">#192</a></li><li>🎂 not publish devs- <a href="https://github.com/trydofor/professional-wings/issues/194" target="_blank" rel="noopener noreferrer">#194</a></li></ul><h2 id="_231212-ti12-team-spirit-3012-300" tabindex="-1"><a class="header-anchor" href="#_231212-ti12-team-spirit-3012-300"><span><img src="'+o+'" alt="Ti12"> 231212 <a href="https://github.com/trydofor/professional-wings/tree/c272b418391197f09eb5e215e8a7735d645f3dc3" target="_blank" rel="noopener noreferrer">Ti12</a> Team Spirit 3012.300</span></a></h2><ul><li>💥 Speed up startup, auto-config <a href="https://github.com/trydofor/professional-wings/issues/142" target="_blank" rel="noopener noreferrer">#142</a></li><li>💥 AttributeHolder, cache2k usage <a href="https://github.com/trydofor/professional-wings/issues/143" target="_blank" rel="noopener noreferrer">#143</a></li><li>💥 disable any @Component by prop <a href="https://github.com/trydofor/professional-wings/issues/86" target="_blank" rel="noopener noreferrer">#86</a><ul><li>remove unnecessary <code>spring-wings-enabled*.properties</code> files</li><li>remove unnecessary <code>spring.wings.*.enabled</code> keys</li><li><code>qualified-key</code> property instead of <code>*.enabled.*</code></li><li>move <code>...flywave.enabled.checker</code> to <code>wings.faceless.flywave.checker</code></li><li>move <code>...flywave.enabled.module</code> to <code>wings.enabled.faceless.flywave</code></li><li>move <code>...faceless.jooq.enabled.*</code> to <code>wings.faceless.jooq.conf.*</code></li><li>move <code>....listen-table-cud</code> to <code>.listen-cud</code></li><li>move <code>...silencer.enabled.*</code> to <code>wings.enabled.silencer.*</code></li><li>move <code>wings.silencer.inspect.properties</code> to <code>wings.enabled.silencer.audit-prop</code></li><li>move <code>...slardar.enabled.*</code> to <code>wings.enabled.slardar.*</code></li><li>move <code>.mock-hazelcast</code> to <code>.hazelcast-standalone</code></li><li>move <code>.datetime</code> to <code>.jackson-datetime</code></li><li>move <code>.number</code> to <code>.jackson-number</code></li><li>move <code>.resource</code> to <code>.jackson-resource</code></li><li>move <code>.domain-extend</code> to <code>.domainx</code></li><li>move <code>...tiny.mail.enabled.*</code> to <code>wings.enabled.tiny.mail.*</code></li><li>move <code>.controller-*</code> to <code>.mvc-*</code></li><li>move <code>...mail.enabled.dryrun</code> to <code>wings.tiny.mail.sender.dryrun</code></li><li>move <code>...tiny.task.enabled.*</code> to <code>wings.enabled.tiny.task.*</code></li><li>move <code>...task.enabled.dryrun</code> to <code>wings.tiny.task.exec.dryrun</code></li><li>move <code>...warlock.enabled.*</code> to <code>wings.enabled.warlock.*</code></li><li>move <code>.security-*</code> to <code>.sec-*</code></li><li>move <code>.security-web-autos</code> to <code>.sec-web-auto</code></li></ul></li><li>🚚 project rename to <code>professional-*</code> <a href="https://github.com/trydofor/professional-wings/issues/159" target="_blank" rel="noopener noreferrer">#159</a><ul><li>pro.fessional.meepo - professional-meepo</li><li>pro.fessional.mirana - professional-mirana</li><li>pro.fessional.wings - professional-wings</li></ul></li><li>♻️ autoreg split to check and do <a href="https://github.com/trydofor/professional-wings/issues/161" target="_blank" rel="noopener noreferrer">#161</a><ul><li>DefaultUserDetailsCombo.autoreg - doRegister</li><li>DefaultUserDetailsCombo.authed - asAuthed</li><li>DefaultUserAuthnAutoReg.beforeSave - Long beforeSave</li></ul></li></ul><h2 id="_231020-ancientapparition-309-300" tabindex="-1"><a class="header-anchor" href="#_231020-ancientapparition-309-300"><span><img src="'+i+'" alt="Ancient Apparition"> 231020 <a href="https://github.com/trydofor/professional-wings/tree/1b22fd7f02793673ef27187fdd7ca8f02671c4dd" target="_blank" rel="noopener noreferrer">AncientApparition</a> 309.300</span></a></h2><ul><li>💥 English in sql/code <a href="https://github.com/trydofor/professional-wings/issues/120" target="_blank" rel="noopener noreferrer">#120</a></li><li>🐛 Change return of WarlockGrantService.entryXxx <a href="https://github.com/trydofor/professional-wings/issues/131" target="_blank" rel="noopener noreferrer">#131</a></li><li>🐛 Null terminal context on auth fail <a href="https://github.com/trydofor/professional-wings/issues/134" target="_blank" rel="noopener noreferrer">#134</a></li><li>💥 XxxContextException instead of NPE in XxxContext <a href="https://github.com/trydofor/professional-wings/issues/139" target="_blank" rel="noopener noreferrer">#139</a></li></ul><h2 id="_230824-eldertitan-307-300" tabindex="-1"><a class="header-anchor" href="#_230824-eldertitan-307-300"><span><img src="'+t+'" alt="Elder Titan"> 230824 <a href="https://github.com/trydofor/professional-wings/tree/262d8f2423fc4e3b11df1fb6a633e6864624d9ed" target="_blank" rel="noopener noreferrer">ElderTitan</a> 307.300</span></a></h2><ul><li>💥 WingsTableCudHandler interface change <a href="https://github.com/trydofor/professional-wings/issues/99" target="_blank" rel="noopener noreferrer">#99</a></li><li>💥 <code>wings.faceless.jooq.cud.insert</code> to <code>.create</code> <a href="https://github.com/trydofor/professional-wings/issues/99" target="_blank" rel="noopener noreferrer">#99</a></li><li>✨ <code>wings.faceless.jooq.cud.table</code>, <code>-</code> ignore table, <code>empty</code> ingore fields <a href="https://github.com/trydofor/professional-wings/issues/99" target="_blank" rel="noopener noreferrer">#99</a></li><li>🔥 ComboWarlockAuthnService without Cacheable <a href="https://github.com/trydofor/professional-wings/issues/104" target="_blank" rel="noopener noreferrer">#104</a></li><li>🐛 expose SpringSessionBackedSessionRegistry <a href="https://github.com/trydofor/professional-wings/issues/106" target="_blank" rel="noopener noreferrer">#106</a></li><li>✨ <code>wgmp</code> live template support reverse mapping <a href="https://github.com/trydofor/professional-wings/issues/110" target="_blank" rel="noopener noreferrer">#110</a></li><li>💥 <code>wings.faceless.lightid.loader</code> to <code>.provider</code> <a href="https://github.com/trydofor/professional-wings/issues/96" target="_blank" rel="noopener noreferrer">#96</a></li><li>✨ mysql password encoder <a href="https://github.com/trydofor/professional-wings/issues/112" target="_blank" rel="noopener noreferrer">#112</a></li><li>🌐 english doc in code/config <a href="https://github.com/trydofor/professional-wings/issues/114" target="_blank" rel="noopener noreferrer">#114</a></li></ul><h2 id="_230621-earthshaker-306-300" tabindex="-1"><a class="header-anchor" href="#_230621-earthshaker-306-300"><span><img src="'+a+'" alt="Earthshaker"> 230621 <a href="https://github.com/trydofor/professional-wings/tree/62d19e764b467e98056fc6409894c57f32f62bc6" target="_blank" rel="noopener noreferrer">EarthShaker</a> 306.300</span></a></h2><ul><li>💥 mirana 2.4.5; move jaxb to silencer-jaxb</li><li>💥 rename ArgsAssert/StateAssert to AssertXxx</li><li>💥 refactor ExceptionResolver to handle cause &amp; i18n</li><li>🐛 code exception to code result</li><li>✨ RestHalf spec for single param</li><li>✨ mysql-dump rsync; list databases;</li><li>✨ reset login failed status and count</li></ul><h2 id="_230411-earthspirit-303-300" tabindex="-1"><a class="header-anchor" href="#_230411-earthspirit-303-300"><span><img src="'+n+'" alt="Earth Spirit"> 230411 <a href="https://github.com/trydofor/professional-wings/tree/11fac72e6e7376d95de7444cfb472f48e14d6643" target="_blank" rel="noopener noreferrer">EarthSpirit</a> 303.300</span></a></h2><ul><li>✨ Session Token Encoder #82</li><li>🔥 remove runtime javadoc: therapi</li><li>💥 upgrade shardingsphere 5.3, refactor DataSourceContext #54</li><li>💥 refactor ModifyAssert to DaoAssert</li><li>💥 Dao.onlyDiedData to DiedDataCondition</li><li>📌 Jooq<code>3.17</code> instead of <code>3.14</code> #55</li><li>📌 SpringBoot use <code>3.0.3</code> #70</li></ul><h2 id="_230301-dragonknight-277-220" tabindex="-1"><a class="header-anchor" href="#_230301-dragonknight-277-220"><span><img src="'+s+'" alt="Dragon Knight"> 230301 <a href="https://github.com/trydofor/professional-wings/tree/337162eb619aa57112c73c08c5ef1386d64e4d2b" target="_blank" rel="noopener noreferrer">DragonKnight</a> 277.220</span></a></h2><ul><li>💥 wings.slardar.cache.nulls to null-live and null-size</li><li>💥 cache2k instead of caffeine</li><li>💥 <code>wings.tiny.*.enabled.</code> properties, add <code>spring.</code> prefix <ul><li><code>wings.tiny.mail.enabled.</code> to <code>spring.wings.tiny.mail.enabled.</code></li><li><code>wings.tiny.task.enabled.</code> to <code>spring.wings.tiny.task.enabled.</code></li></ul></li><li>💥 derive autogen and awesome project as dependencies</li><li>🚚 rename jooqgen to codegen</li><li>🔥 remove errorprone</li><li>🔥 remove javax&#39;s persistence and validation</li></ul><h2 id="_230118-doom-266-210" tabindex="-1"><a class="header-anchor" href="#_230118-doom-266-210"><span><img src="'+l+'" alt="Doom"> 230118 <a href="https://github.com/trydofor/professional-wings/tree/2ed42921c0a460f5caf6144378ff1c927cc8d093" target="_blank" rel="noopener noreferrer">Doom</a> 266.210</span></a></h2><ul><li>💥 DingTalkNotice interface, add msg-type</li><li>♻️ change threadpool prefix, task to async, cron to task</li><li>💥 centrally manage AesKey, prefix from mirana to encrypt <ul><li>spring.wings.enabled.silencer.auto-log to autolog</li><li>spring.wings.enabled.silencer.mirana to encrypt</li><li>wings.silencer.mirana.code to wings.silencer.encrypt</li><li>wings.silencer.mirana.auto-log to wings.silencer.autolog</li><li>wings...aes-key.system to ..silencer.mirana.code.aes-key</li><li>wings...aes-key.cookie to ..slardar.cookie.aes-key</li><li>wings...aes-key.ticket to ..warlock.ticket.aes-key</li></ul></li><li>💥 DingTalkNotice property key, use monitor first, then default <ul><li>wings.slardar.monitor.ding-talk to wings.slardar.ding-notice.default</li></ul></li><li>💥 RuntimeMode move to Silencer</li><li>✨ TinyTask batch component</li><li>✨ TinyMail mail component</li></ul><h2 id="_221130-dawnbreaker" tabindex="-1"><a class="header-anchor" href="#_221130-dawnbreaker"><span><img src="'+c+'" alt="Dawnbreaker"> 221130 <a href="https://github.com/trydofor/professional-wings/tree/7a681ea30f77399bfc8461b4d1249b45eea6e8e8" target="_blank" rel="noopener noreferrer">Dawnbreaker</a></span></a></h2><ul><li>💥 wings.silencer.debug to tweak</li><li>💥 Aes256 instead of Aes128</li><li>💥 wings.warlock.error.all-exception to default-exception</li><li>🔥 remove login(Builder) from TerminalContext</li><li>🔥 remove RolesByUid from GlobalAttribute</li><li>💥 Split okhttp, group by feature, change class name</li></ul><h2 id="_221030-ti11-tundra-esports" tabindex="-1"><a class="header-anchor" href="#_221030-ti11-tundra-esports"><span><img src="'+d+'" alt="Ti11"> 221030 <a href="https://github.com/trydofor/professional-wings/tree/760f545810420084733f7d8aa9390fdbb6b71246" target="_blank" rel="noopener noreferrer">Ti11</a> Tundra Esports</span></a></h2><ul><li>💥 SecurityContextUtil to @Contract(&quot;true -&gt; !null&quot;)</li><li>💥 RighterInterceptor encrypt by HttpSession instead of Security</li><li>💥 GlobalAttributeHolder rename tryAttr and add getAttr</li><li>💥 unite DefaultUserId and Terminal, Unknown to Guest</li><li>💥 XxxHelp rename to XxxHelper</li><li>💥 refactor TweakingContext and TypedReg</li></ul><h2 id="_221014-clockwerk" tabindex="-1"><a class="header-anchor" href="#_221014-clockwerk"><span><img src="'+p+'" alt="Clockwerk"> 221014 <a href="https://github.com/trydofor/professional-wings/tree/4ff27bf31299303956b5e63999a3183d2c474d36" target="_blank" rel="noopener noreferrer">Clockwerk</a></span></a></h2><ul><li>🚀 starter.sh add extra args and remote debug</li><li>💥 standard_i18n template change, refactor codegen</li><li>🔧 unbound cache by default, capacity set 10-20M</li><li>💥 DingTalk config <code>report-keyword</code> to <code>notice-keyword</code></li><li>💥 I18nString&#39;s code and args are immutable</li><li>💥 @JsonI18nString to @AutoI18nString</li><li>✨ 3 DateTime and I18nString can annotate to Dto</li><li>🔥 remove unmaintained SimpleFlatMapper</li><li>💥 SelectOrderCondition instead of BiConsume</li><li>✨ <code>Now</code> util, system and thread-level tweaked clocks</li><li>💥 rename <code>wings.slardar.error.</code> → <code>wings.warlock.error.</code></li><li>💥 LeapCode&#39;s code32 refer to ulid</li></ul><h2 id="_220913-chaosknight" tabindex="-1"><a class="header-anchor" href="#_220913-chaosknight"><span><img src="'+g+'" alt="Chaos Knight"> 220913 <a href="https://github.com/trydofor/professional-wings/tree/731a61c9aea5f5c7bbc6a0ce69f379f14b85a0c9" target="_blank" rel="noopener noreferrer">ChaosKnight</a></span></a></h2><ul><li>💥 EnumUtil enhancement, <code>_</code> instead of <code>𓃬</code></li><li>💥 derive slardar, warlock project, better component support</li><li>💥 adjust Bean&#39;s Ordered const, WarlockOrderConst</li><li>📌 import retrofit2, remove xxl-job</li><li>unify logger to log, spring use common-log and business use @Slf4j</li><li>ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER true → false</li></ul>',35)]))}const E=_(x,[["render",v],["__file","9a0.notable.html.vue"]]),D=JSON.parse('{"path":"/9-example/9a.wings-change/9a0.notable.html","title":"9A0.Notable Changelog","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"chart-simple","category":["Practice","Changelog"],"description":"9A0.Notable Changelog Incompatible and important features grouped by feather branch in reverse order. BountyHunter ongoing BountyHunter 300.301.741-SS Bloodseeker 250208 Bloodse...","GIT_REPO_HEAD":"2025-03-19 c2424660b848abc3a7f89f5b7e9b8297d30386c9","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/9-example/9a.wings-change/9a0.notable.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/9-example/9a.wings-change/9a0.notable.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"9A0.Notable Changelog"}],["meta",{"property":"og:description","content":"9A0.Notable Changelog Incompatible and important features grouped by feather branch in reverse order. BountyHunter ongoing BountyHunter 300.301.741-SS Bloodseeker 250208 Bloodse..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://wings.fessional.pro/bountyhunter_minimap_icon.png \\"BountyHunter\\""}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-19T04:27:29.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-19T04:27:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9A0.Notable Changelog\\",\\"image\\":[\\"https://wings.fessional.pro/bountyhunter_minimap_icon.png \\\\\\"BountyHunter\\\\\\"\\",\\"https://wings.fessional.pro/bloodseeker_minimap_icon.png \\\\\\"Bloodseeker\\\\\\"\\",\\"https://wings.fessional.pro/batrider_minimap_icon.png \\\\\\"Batrider\\\\\\"\\",\\"https://wings.fessional.pro/bane_minimap_icon.png \\\\\\"Bane\\\\\\"\\",\\"https://wings.fessional.pro/arcwarden_minimap_icon.png\\",\\"https://wings.fessional.pro/antimage_minimap_icon.png\\",\\"https://wings.fessional.pro/team_spirit.png\\",\\"https://wings.fessional.pro/ancientapparition_minimap_icon.png\\",\\"https://wings.fessional.pro/eldertitan_minimap_icon.png\\",\\"https://wings.fessional.pro/earthshaker_minimap_icon.png\\",\\"https://wings.fessional.pro/earthspirit_minimap_icon.png\\",\\"https://wings.fessional.pro/dragonknight_minimap_icon.png\\",\\"https://wings.fessional.pro/doom_minimap_icon.png\\",\\"https://wings.fessional.pro/dawnbreaker_minimap_icon.png\\",\\"https://wings.fessional.pro/team_tundra.png\\",\\"https://wings.fessional.pro/clockwerk_minimap_icon.png\\",\\"https://wings.fessional.pro/chaosknight_minimap_icon.png\\"],\\"dateModified\\":\\"2025-03-19T04:27:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"git":{"createdTime":1678432817000,"updatedTime":1742358449000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":51,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":4.04,"words":1212},"filePathRelative":"9-example/9a.wings-change/9a0.notable.md","localizedDate":"March 10, 2023","autoDesc":true}');export{E as comp,D as data};
