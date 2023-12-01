import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c as d,b as l,e as i,d as e,w as a,f as r}from"./app-10f3c89c.js";const u={},g=l("h1",{id:"_0h-properties-index",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_0h-properties-index","aria-hidden":"true"},"#"),i(" 0H.Properties Index")],-1),f=l("p",null,[i("Config is recommended in the properties flavor because it is easy to separate, cascade and lookup. Each "),l("code",null,"*.properties"),i(" has a strong type key mapping"),l("code",null,"*Prop.java"),i(".")],-1),h={href:"https://docs.oracle.com/cd/E23095_01/Platform.93/ATGProgGuide/html/s0204propertiesfileformat01.html",target:"_blank",rel:"noopener noreferrer"},p=r('<h2 id="_0h-1-properties-file" tabindex="-1"><a class="header-anchor" href="#_0h-1-properties-file" aria-hidden="true">#</a> 0H.1.Properties File</h2><p>In Silencer, the default config naming rules are as follows.</p><ul><li><code>wings-auto-config*.cnf</code> - Silencer config</li><li><code>wings-conf-block-list.cnf</code> - Block list of config</li><li><code>wings-prop-promotion.cnf</code> - Promote config items to system variables</li><li><code>spring-*.properties</code> - Spring config</li><li><code>wings-*.properties</code> - Wings config</li></ul><h2 id="_0h-2-item-annotation" tabindex="-1"><a class="header-anchor" href="#_0h-2-item-annotation" aria-hidden="true">#</a> 0H.2.Item Annotation</h2><p>To improve recognition and readability, the following annotations are included in the document.</p><ul><li><code>String</code> - <code>NotNull</code> type of <code>String</code></li><li><code>String?</code> - <code>Nullable</code> type of <code>String</code></li><li><code>Boolean</code> - The primitive type and its wrapper class, non-null.</li><li><code>=</code> - Means <code>empty</code>, eg. <code>key=</code> means <code>key</code> is empty</li></ul><p>The config value in the properties is usually a single line, and the multiple lines syntax as follows</p><ul><li><code>\\</code> - Backslash escape the new line</li><li><code>\\n\\</code> - Generate a line break in the prop to improve readability.</li></ul><h2 id="_0h-3-properties-files" tabindex="-1"><a class="header-anchor" href="#_0h-3-properties-files" aria-hidden="true">#</a> 0H.3.Properties Files</h2>',9),m=r('<h2 id="_0h-4-wings-enabled-pro-fessional-wings" tabindex="-1"><a class="header-anchor" href="#_0h-4-wings-enabled-pro-fessional-wings" aria-hidden="true">#</a> 0H.4.wings.enabled.pro.fessional.wings</h2><p><code>@ConditionalWingsEnabled</code> are grouped by module, orderd by ascii.</p><ul><li><code>empty</code> means default true</li><li><code>(false)</code> means default false</li><li><code>= key</code> means <code>absolute-key</code></li></ul><h3 id="silencer-spring" tabindex="-1"><a class="header-anchor" href="#silencer-spring" aria-hidden="true">#</a> .silencer.spring</h3><ul><li>.conf.SilencerAutoConfiguration</li><li>.bean.SilencerConfiguration <ul><li>.applicationInspectRunner</li><li>.messageSourceHelper</li></ul></li><li>.bean.SilencerRunnerConfiguration <ul><li>$ReadyEvent - on ApplicationReadyEvent</li><li>$StartedEvent - on ApplicationStartedEvent</li></ul></li><li>.conf.SilencerCurseAutoConfiguration</li><li>.bean.SilencerCurseConfiguration <ul><li>.auditPropRunner (false) = <code>wings.enabled.silencer.audit-prop</code></li><li>.muteConsoleRunner = <code>wings.enabled.silencer.mute-console</code></li><li>.runtimeMode</li></ul></li><li>.bean.SilencerEncryptConfiguration <ul><li>.aes256</li><li>.crc8Long</li><li>.leapCode</li><li>.secretProvider</li></ul></li><li>.bean.SilencerTweakConfiguration <ul><li>$ClockWired = <code>wings.enabled.silencer.tweak-clock</code></li><li>$LogbackWired = <code>wings.enabled.silencer.tweak-logback</code></li><li>$StackWired = <code>wings.enabled.silencer.tweak-stack</code></li></ul></li></ul><h3 id="faceless-spring" tabindex="-1"><a class="header-anchor" href="#faceless-spring" aria-hidden="true">#</a> .faceless.spring</h3><ul><li>.conf.FacelessAutoConfiguration</li><li>.bean.FacelessConfiguration <ul><li>.commitJournalModify</li><li>.dataSourceContext</li><li>.flakeIdService = <code>wings.enabled.faceless.simple-flakeid</code></li><li>.journalService = <code>wings.enabled.faceless.simple-journal</code></li><li>.standardI18nService</li></ul></li><li>.bean.FacelessLightIdConfiguration <ul><li>$LayoutWired - init LightIdLayout</li><li>.blockProvider</li><li>.dbLightIdProvider</li><li>.jvmLightIdProvider</li><li>.lightIdLoader</li><li>.lightIdService</li><li>.lightSequenceModify</li><li>.lightSequenceSelect</li></ul></li><li>.conf.FlywaveAutoConfiguration (false)=<code>wings.enabled.faceless.flywave</code></li><li>.bean.FlywaveConfiguration <ul><li>.revisionCheckerRunner = <code>wings.faceless.flywave.checker</code></li><li>.schemaDefinitionLoader</li><li>.schemaFulldumpManager</li><li>.schemaJournalManager</li><li>.schemaShardingManager</li><li>.schemaVersionManger</li><li>.sqlSegmentProcessor</li><li>.sqlStatementParser</li></ul></li><li>.conf.FacelessJooqAutoConfiguration</li><li>.bean.FacelessJooqConfiguration <ul><li>.jooqAutoQualifyFieldListener = <code>wings.faceless.jooq.conf.auto-qualify</code></li><li>.jooqWingsConfigCustomizer</li></ul></li><li>.bean.FacelessJooqCudConfiguration <ul><li>$CudListenerBean = <code>wings.faceless.jooq.conf.listen-cud</code></li><li>$JournalDiffWired</li><li>.jooqJournalDeleteListener = <code>wings.faceless.jooq.conf.journal-delete</code></li></ul></li><li>.conf.FacelessShardAutoConfiguration</li><li>.bean.FacelessShardingSphereConfiguration <ul><li>.shardingDataSourceContext</li><li>.writeRouteOnlyAround</li></ul></li></ul><h3 id="slardar-spring" tabindex="-1"><a class="header-anchor" href="#slardar-spring" aria-hidden="true">#</a> .slardar.spring</h3><ul><li>.conf.SlardarAsyncAutoConfiguration</li><li>.bean.SlardarAsyncConfiguration <ul><li>.applicationTaskExecutor</li><li>.slardarHeavyScheduler</li><li>.taskExecutor</li><li>.taskScheduler</li><li>.taskSchedulerHelper</li></ul></li><li>.conf.SlardarCacheAutoConfiguration</li><li>.bean.SlardarCacheConfiguration <ul><li>$CacheAop</li><li>$CacheMgr</li><li>.cache2kCacheManager</li></ul></li><li>.conf.SlardarAutoConfiguration</li><li>.bean.SlardarDateTimeConfiguration <ul><li>.localDateStringConverter</li><li>.localDateTimeStringConverter</li><li>.localTimeStringConverter</li><li>.offsetDateTimeStringConverter</li><li>.stringLocalDateConverter</li><li>.stringLocalDateTimeConverter</li><li>.stringLocalTimeConverter</li><li>.stringOffsetDateTimeConverter</li><li>.stringZonedDateTimeConverter</li><li>.zonedDateTimeStringConverter</li></ul></li><li>.bean.SlardarDingNoticeConfiguration <ul><li>.dingTalkNotice</li></ul></li><li>.bean.SlardarDoubleKillConfiguration = <code>wings.enabled.slardar.double-kill</code><ul><li>.doubleKillAround</li></ul></li><li>.bean.SlardarEventConfiguration <ul><li>.attributeEventListener</li><li>.eventPublishHelperRunner</li><li>.slardarEventExecutor</li></ul></li><li>.bean.SlardarI18nConfiguration <ul><li>.autoDtoHelperRunner</li><li>.localValidatorFactoryBean</li></ul></li><li>.bean.SlardarJacksonConfiguration <ul><li>.emptyValuePropertyFilter</li><li>.i18nResultPropertyFilter</li></ul></li><li>.bean.SlardarMonitorConfiguration <ul><li>$LogMonitor = <code>wings.enabled.slardar.monitor-log</code></li><li>.dingTalkReport</li><li>.jvmMonitor = <code>wings.enabled.slardar.monitor-jvm</code></li><li>.monitorTask</li></ul></li><li>.bean.SlardarOkhttpConfiguration <ul><li>.okhttpClient</li><li>.okhttpClientBuilder</li><li>.okhttpConnectionPool</li><li>.okhttpHelperRunner</li><li>.okhttpHostCookieJar</li><li>.okhttpRedirectNopInterceptor</li></ul></li><li>.bean.SlardarTweakConfiguration <ul><li>.okhttpTweakLogInterceptor</li><li>.tweakEventListener</li></ul></li><li>.conf.SlardarHazelAutoConfiguration</li><li>.bean.HazelcastConfigConfiguration <ul><li>.wingsHazelcastAloneCustomizer (false) = <code>wings.enabled.slardar.hazelcast-standalone</code></li><li>.wingsHazelcastCacheCustomizer</li></ul></li><li>.bean.HazelcastServiceConfiguration <ul><li>$FlakeIdServiceBean</li><li>$GlobalPublisherWired</li><li>.hazelcastCacheManager</li><li>.hazelcastGlobalLock</li><li>.hzLightIdProvider</li></ul></li><li>.conf.SlardarHazelSessionAutoConfiguration</li><li>.bean.SlardarHazelSessionConfiguration <ul><li>.sessionRegistry</li><li>.wingsSessionHelper</li></ul></li><li>.conf.SlardarBootAdminAutoConfiguration</li><li>.bean.SlardarBootAdminClientConfiguration <ul><li>.registrationClient</li></ul></li><li>.bean.SlardarBootAdminServerConfiguration <ul><li>.basicAuthHttpHeadersProvider</li><li>.bootAdminMappingOrderPostProcessor</li><li>.dingTalkNotifier</li></ul></li><li>.conf.SlardarSprintAutoConfiguration</li><li>.bean.SlardarActuatorConfiguration <ul><li>.slardarCacheManageEndpoint</li></ul></li><li>.bean.SlardarSecurityConfiguration <ul><li>.httpSessionEventPublisher</li><li>.localeContextHolderTerminalContextListener</li><li>.passsaltEncoder</li><li>.passwordEncoder</li><li>.terminalContextListenerRunner</li><li>.wingsSecBeanInitConfigurer</li></ul></li><li>.conf.SlardarWebCnfAutoConfiguration</li><li>.bean.SlardarLocaleConfiguration <ul><li>.localeResolver</li></ul></li><li>.bean.SlardarOkhttpWebConfiguration <ul><li>.okhttpRestTemplate</li><li>.restTemplateBuilder</li></ul></li><li>.conf.SlardarWebFunAutoConfiguration</li><li>.bean.SlardarCookieConfiguration (false) = <code>wings.enabled.slardar.cookie</code><ul><li>.wingsCookieFilter</li><li>.wingsCookieInterceptor</li></ul></li><li>.bean.SlardarDebounceConfiguration = <code>wings.enabled.slardar.debounce</code><ul><li>.debounceInterceptor</li></ul></li><li>.bean.SlardarDomainExtendConfiguration (false) = <code>wings.enabled.slardar.domainx</code><ul><li>.wingsDomainExtendFilter</li></ul></li><li>.bean.SlardarDoubleKillWebConfiguration = <code>wings.enabled.slardar.double-kill</code><ul><li>.doubleKillExceptionResolver</li></ul></li><li>.bean.SlardarFirstBloodConfiguration (false) = <code>wings.enabled.slardar.first-blood</code><ul><li>.firstBloodImageHandler = <code>wings.enabled.slardar.first-blood-image</code></li><li>.firstBloodInterceptor</li></ul></li><li>.bean.SlardarJacksonWebConfiguration <ul><li>.customizeJacksonDatetime = <code>wings.enabled.slardar.jackson-datetime</code></li><li>.customizeJacksonEmpty = <code>wings.enabled.slardar.jackson-empty</code></li><li>.customizeJacksonNumber = <code>wings.enabled.slardar.jackson-number</code></li><li>.customizeJacksonResource = <code>wings.enabled.slardar.jackson-resource</code></li><li>.customizeJacksonResult = <code>wings.enabled.slardar.jackson-result</code></li><li>.jacksonCustomizerFilter</li><li>.jacksonFilterProvider</li><li>.jacksonHelperRunner</li></ul></li><li>.bean.SlardarPageQueryConfiguration = <code>wings.enabled.slardar.pagequery</code><ul><li>.pageQueryArgumentResolver</li></ul></li><li>.bean.SlardarRemoteConfiguration <ul><li>.wingsRemoteResolver</li></ul></li><li>.bean.SlardarReuseStreamConfiguration = <code>wings.enabled.slardar.restream</code><ul><li>.wingsReuseStreamFilter</li></ul></li><li>.bean.SlardarRighterConfiguration = <code>wings.enabled.slardar.righter</code><ul><li>.righterExceptionResolver</li><li>.righterInterceptor</li></ul></li><li>.bean.SlardarSessionConfiguration = <code>wings.enabled.slardar.session</code><ul><li>.httpSessionIdResolver</li><li>.slardarCookieSerializerCustomizer</li></ul></li><li>.bean.SlardarSwaggerConfiguration = <code>wings.enabled.slardar.swagger</code><ul><li>.slardarOpenApiCustomizer</li></ul></li><li>.bean.SlardarTerminalConfiguration = <code>wings.enabled.slardar.terminal</code><ul><li>.remoteTerminalBuilder</li><li>.securityTerminalBuilder</li><li>.terminalInterceptor</li></ul></li><li>.bean.SlardarUndertowConfiguration <ul><li>.ut026010Customizer</li></ul></li><li>.bean.SlardarWebMvcConfiguration <ul><li>.mvcRequestMatcherBuilder</li></ul></li><li>.monitor.viewer.LogViewer = <code>wings.slardar.monitor.view.enable</code></li></ul><h3 id="warlock-spring" tabindex="-1"><a class="header-anchor" href="#warlock-spring" aria-hidden="true">#</a> .warlock.spring</h3><ul><li>.conf.WarlockAutoConfiguration</li><li>.bean.WarlockAutoRunConfiguration <ul><li>.databaseCheckerRunner</li><li>.registerEnumUtilRunner</li></ul></li><li>.bean.WarlockLockBeanConfiguration <ul><li>.databaseGlobalLock</li><li>.jvmStaticGlobalLock</li></ul></li><li>.bean.WarlockTableChangeConfiguration <ul><li>.tableChangePublisher</li><li>.wingsTableCudHandler</li></ul></li><li>.bean.WarlockWatchingConfiguration (false) = <code>wings.enabled.warlock.watching</code><ul><li>.slowSqlJooqListener</li><li>.watchingAround</li></ul></li><li>.conf.WarlockAwesomeAutoConfiguration</li><li>.bean.WarlockAwesomeConfiguration <ul><li>$JooqDaoScan</li><li>.registerRuntimeModeRunner</li><li>.runtimeConfService</li></ul></li><li>.conf.WarlockBondAutoConfiguration</li><li>.bean.WarlockBondBeanConfiguration <ul><li>autoRegisterCacheConst</li><li>defaultDaoAuthnCombo</li><li>warlockDangerService</li><li>warlockGrantService</li><li>warlockPermService</li><li>warlockPermServiceCaching</li><li>warlockRoleService</li><li>warlockRoleServiceCaching</li><li>warlockUserAuthnService</li><li>warlockUserBasisService</li><li>warlockUserLoginService</li></ul></li><li>.conf.WarlockShadowAutoConfiguration</li><li>.bean.WarlockExceptionConfiguration <ul><li>.defaultExceptionResolver</li></ul></li><li>.bean.WarlockJournalConfiguration <ul><li>.terminalJournalService</li></ul></li><li>.bean.WarlockJustAuthConfiguration <ul><li>.authStateCache</li><li>.justAuthRequestBuilder</li><li>.justAuthRequestSuccessHandler</li></ul></li><li>.bean.WarlockOauthTicketConfiguration <ul><li>.warlockOauthService</li><li>.warlockTicketService</li></ul></li><li>.bean.WarlockOtherBeanConfiguration <ul><li>$BindingErrorScan</li><li>$MvcRestScan</li><li>.righterSecretProvider</li></ul></li><li>.bean.WarlockWatching2Configuration <ul><li>.slowResponseInterceptor</li></ul></li><li>.conf.WarlockSecurityAutoConfiguration</li><li>.bean.WarlockSecurityBeanConfiguration <ul><li>accessDeniedHandler</li><li>authAppPermChecker</li><li>authenticationEventPublisher</li><li>authStateBuilder</li><li>authZonePermChecker</li><li>comboWarlockAuthnService</li><li>comboWarlockAuthzService</li><li>comboWingsAuthCheckService</li><li>defaultPermRoleCombo</li><li>defaultUserAuthnAutoReg</li><li>defaultUserDetailsCombo</li><li>grantedAuthorityDefaults</li><li>justAuthLoginPageCombo</li><li>justAuthUserAuthnAutoReg</li><li>justAuthUserDetailsCombo</li><li>listAllLoginPageCombo</li><li>loginFailureHandler</li><li>loginFailureHandlerDefault</li><li>loginSuccessHandler</li><li>logoutSuccessHandler</li><li>memoryTypedAuthzCombo</li><li>memoryUserDetailsCombo</li><li>nonceUserDetailsCombo</li><li>warlockFailedLoginListener</li><li>warlockPermNormalizer</li><li>warlockSuccessLoginListener</li><li>wingsAuthDetailsSource</li><li>wingsAuthPageHandler</li><li>wingsAuthTypeParser</li><li>wingsUserDetailsService</li></ul></li><li>.bean.WarlockSecurityConfConfiguration <ul><li>.securityFilterChain = <code>wings.enabled.warlock.sec-http-chain</code></li><li>.warlockSecurityAuthHttpConfigure = <code>wings.enabled.warlock.sec-http-auth</code></li><li>.warlockSecurityAutoHttpConfigure = <code>wings.enabled.warlock.sec-http-auto</code></li><li>.warlockSecurityBindHttpConfigure = <code>wings.enabled.warlock.sec-http-bind</code></li><li>.warlockSecurityHttpBaseConfigure = <code>wings.enabled.warlock.sec-http-base</code></li><li>.warlockWebCustomizer = <code>wings.enabled.warlock.sec-web-auto</code></li></ul></li><li>.bean.WarlockSecurityDummyConfiguration (false) = <code>wings.enabled.warlock.dummy-service</code><ul><li>warlockGrantService</li><li>warlockPermService</li><li>warlockRoleService</li><li>warlockUserAuthnService</li><li>warlockUserBasisService</li><li>warlockUserLoginService</li></ul></li><li>.controller <ul><li>.admin.AdminTweakController = <code>wings.enabled.warlock.mvc-tweak</code></li><li>.auth.LoginPageController = <code>wings.enabled.warlock.mvc-login</code></li><li>.auth.LoginProcController = <code>wings.enabled.warlock.mvc-proc</code></li><li>.auth.SimpleOauthController = <code>wings.enabled.warlock.mvc-oauth</code></li><li>.mock.MockSampleController = <code>wings.enabled.warlock.mvc-mock</code></li><li>.test.TestEnvsController = <code>wings.enabled.warlock.mvc-test</code></li><li>.user.AuthedUserController = <code>wings.enabled.warlock.mvc-user</code></li><li>.admin.AdminAuthnController = <code>wings.enabled.warlock.mvc-auth</code></li></ul></li></ul><h3 id="tiny-mail" tabindex="-1"><a class="header-anchor" href="#tiny-mail" aria-hidden="true">#</a> .tiny.mail</h3><ul><li>.spring.conf.TinyMailAutoConfiguration</li><li>.spring.bean.TinyMailConfiguration <ul><li>$DaoServScan - scan <code>database</code> and <code>service</code></li><li>$MvcRestScan - scan <code>controller</code></li><li>.mailConfigProvider</li><li>.mailNotice</li><li>.mailSenderManager</li><li>.mailSenderProvider</li></ul></li><li>.controller.MailListController = <code>wings.enabled.tiny.mail.mvc-list</code></li><li>.controller.MailSendController = <code>wings.enabled.tiny.mail.mvc-send</code></li><li>.service.impl.TinyMailListServiceImpl</li><li>.service.impl.TinyMailServiceImpl</li></ul><h3 id="tiny-task" tabindex="-1"><a class="header-anchor" href="#tiny-task" aria-hidden="true">#</a> .tiny.task</h3><ul><li>.spring.conf.TinyTaskAutoConfiguration</li><li>.spring.bean.TinyTaskConfiguration <ul><li>$DaoServScan - scan <code>database</code> and <code>service</code></li><li>$MvcRestScan - scan <code>controller</code></li><li>.tinyTaskerAutoRunner = <code>wings.enabled.tiny.task.autorun</code></li></ul></li><li>.controller.TaskConfController = <code>wings.enabled.tiny.task.mvc-conf</code></li><li>.controller.TaskExecController = <code>wings.enabled.tiny.task.mvc-exec</code></li><li>.controller.TaskListController = <code>wings.enabled.tiny.task.mvc-list</code></li><li>.service.impl.TinyTaskBeatServiceImpl</li><li>.service.impl.TinyTaskConfServiceImpl</li><li>.service.impl.TinyTaskExecServiceImpl</li><li>.service.impl.TinyTaskListServiceImpl</li><li>.service.impl.TinyTaskServiceImpl</li></ul>',15);function b(k,C){const t=n("ExternalLinkIcon"),o=n("RouterLink");return s(),d("div",null,[g,f,l("p",null,[l("a",h,[i("Properties File Format"),e(t)])]),p,l("ul",null,[l("li",null,[e(o,{to:"/1-silencer/1d-prop-silencer.html"},{default:a(()=>[i("Silencer Properties")]),_:1}),i(" - Autoload default utility and feature")]),l("li",null,[e(o,{to:"/2-faceless/2i-prop-faceless.html"},{default:a(()=>[i("Faceless Properties")]),_:1}),i(" - Database Acess, basic I18n configuration")]),l("li",null,[e(o,{to:"/2-faceless/2j-prop-flywave.html"},{default:a(()=>[i("Flywave Properties")]),_:1}),i(" - Flywave's config for schema management")]),l("li",null,[e(o,{to:"/2-faceless/2k-prop-jooq.html"},{default:a(()=>[i("Jooq Properties")]),_:1}),i(" - Jooq config")]),l("li",null,[e(o,{to:"/3-slardar/3i-prop-slardar.html"},{default:a(()=>[i("Slardar Properties")]),_:1}),i(" - Basic config of Slardar and Spring")]),l("li",null,[e(o,{to:"/3-slardar/3j-prop-webmvc.html"},{default:a(()=>[i("WebMvc Properties")]),_:1}),i(" - Basic config of Spring WebMvc")]),l("li",null,[e(o,{to:"/3-slardar/3k-prop-function.html"},{default:a(()=>[i("WebFun Properties")]),_:1}),i(" - Basic config of Spring Web")]),l("li",null,[e(o,{to:"/3-slardar/3l-prop-hazelcast.html"},{default:a(()=>[i("Hazelcast Properties")]),_:1}),i(" - Hazelcast config")]),l("li",null,[e(o,{to:"/4-warlock/4d-prop-warlock.html"},{default:a(()=>[i("Warlock Properties")]),_:1}),i(" - Warlock login autnn config")]),l("li",null,[e(o,{to:"/8-radiant/8b-prop-tinytask.html"},{default:a(()=>[i("TinyTask Properties")]),_:1}),i(" - TinyTask config")]),l("li",null,[e(o,{to:"/8-radiant/8d-prop-tinymail.html"},{default:a(()=>[i("TinyMail Properties")]),_:1}),i(" - TinyMail config")])]),m])}const v=c(u,[["render",b],["__file","0h-prop-index.html.vue"]]);export{v as default};
