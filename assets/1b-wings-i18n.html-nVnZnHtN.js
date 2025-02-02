import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as i,o as t}from"./app-B4-M_2GK.js";const s={};function o(r,e){return t(),n("div",null,e[0]||(e[0]=[i('<h1 id="_1b-auto-i18n-message" tabindex="-1"><a class="header-anchor" href="#_1b-auto-i18n-message"><span>1B.Auto I18n Message</span></a></h1><p>Multinational language (I18n) is a more important feature in the Wings.</p><ul><li>Can be separated and cascaded as Conf</li><li>Dynamic business message with Ii8nString and I18nException</li><li>Consider I18n and timezone together</li></ul><h2 id="_1b-1-language-and-timezone" tabindex="-1"><a class="header-anchor" href="#_1b-1-language-and-timezone"><span>1B.1.Language and Timezone</span></a></h2><p>The locale and zoneid of the system can be changed at wings startup by the following config, and the empty value means do nothing.</p><ul><li>wings.silencer.i18n.locale=zh_CN</li><li>wings.silencer.i18n.zoneid=Asia/Shanghai</li><li>wings.silencer.i18n.bundle=classpath*:/wings-i18n/**/*.properties</li></ul><p>Also, Spring itself has good support for I18N, and can be better engineered with a little customization.</p><ul><li>Auto scan for <code>wings.silencer.i18n.bundle</code> config (comma separated paths)</li><li>Load separated i18n messages, path priority cascading like auto-config</li></ul><h2 id="_1b-2-spring-mechanism" tabindex="-1"><a class="header-anchor" href="#_1b-2-spring-mechanism"><span>1B.2.Spring Mechanism</span></a></h2><p>Spring&#39;s loading MessageSource is different from that of configuration, and does not require Unicode escaping.</p><p>Language configuration starts with <code>spring.messages.basename=messages,basic</code>, separated by commas. Chars after basename is considered a language tag, which can exist in a variety of formats (do not contain <code>.</code>, it will be replaced with <code>/</code> to scan)</p><ul><li>message.properties - must exist, with the default of bundle name</li><li>message_en.properties - Recommend, without country, for all english</li><li>message_en_US.properties</li><li>message_en_US_UNIX.properties</li></ul><h2 id="_1b-3-dynamic-message" tabindex="-1"><a class="header-anchor" href="#_1b-3-dynamic-message"><span>1B.3.Dynamic Message</span></a></h2><p>In addition to the static configuration, wings provides CombinableMessageSource. You can programmatically add I18n messages dynamically, such as loading from database.</p>',14)]))}const g=a(s,[["render",o],["__file","1b-wings-i18n.html.vue"]]),d=JSON.parse('{"path":"/1-silencer/1b-wings-i18n.html","title":"1B.Auto I18n Message","lang":"en-US","frontmatter":{"isOriginal":true,"icon":"language","category":["Silencer","I18n"],"description":"1B.Auto I18n Message Multinational language (I18n) is a more important feature in the Wings. Can be separated and cascaded as Conf Dynamic business message with Ii8nString and I...","GIT_REPO_HEAD":"2025-02-02 9cab7f71f34df19a1b0adffd87fa71dbbe019019","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wings.fessional.pro/zh/1-silencer/1b-wings-i18n.html"}],["meta",{"property":"og:url","content":"https://wings.fessional.pro/1-silencer/1b-wings-i18n.html"}],["meta",{"property":"og:site_name","content":"WingsBoot Win Sprint"}],["meta",{"property":"og:title","content":"1B.Auto I18n Message"}],["meta",{"property":"og:description","content":"1B.Auto I18n Message Multinational language (I18n) is a more important feature in the Wings. Can be separated and cascaded as Conf Dynamic business message with Ii8nString and I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-09T11:57:11.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-09T11:57:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1B.Auto I18n Message\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-09T11:57:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"trydofor\\",\\"url\\":\\"https://www.trydofor.com\\"}]}"]]},"headers":[{"level":2,"title":"1B.1.Language and Timezone","slug":"_1b-1-language-and-timezone","link":"#_1b-1-language-and-timezone","children":[]},{"level":2,"title":"1B.2.Spring Mechanism","slug":"_1b-2-spring-mechanism","link":"#_1b-2-spring-mechanism","children":[]},{"level":2,"title":"1B.3.Dynamic Message","slug":"_1b-3-dynamic-message","link":"#_1b-3-dynamic-message","children":[]}],"git":{"createdTime":1655901635000,"updatedTime":1736423831000,"contributors":[{"name":"trydofor","username":"trydofor","email":"trydofor@gmail.com","commits":7,"url":"https://github.com/trydofor"}]},"readingTime":{"minutes":0.7,"words":209},"filePathRelative":"1-silencer/1b-wings-i18n.md","localizedDate":"June 22, 2022","autoDesc":true}');export{g as comp,d as data};
