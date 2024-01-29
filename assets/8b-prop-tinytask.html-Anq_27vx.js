import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,f as t}from"./app-OXbFzGQa.js";const i={},s=t('<h1 id="_8b-小任务属性" tabindex="-1"><a class="header-anchor" href="#_8b-小任务属性"><span>8B.小任务属性</span></a></h1><h2 id="_8b-1-wings-tinytask-exec-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-1-wings-tinytask-exec-79-properties"><span>8B.1.wings-tinytask-exec-79.properties</span></a></h2><h3 id="wings-tiny-task-exec-dryrun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-exec-dryrun"><span>wings.tiny.task.exec.dryrun</span></a></h3><p><code>Boolean</code>=<code>false</code>，是否干跑，仅记录日志不真正执行任务</p><h2 id="_8b-2-wings-flywave-fit-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-2-wings-flywave-fit-79-properties"><span>8B.2.wings-flywave-fit-79.properties</span></a></h2><h3 id="wings-faceless-flywave-fit-tiny-task" tabindex="-1"><a class="header-anchor" href="#wings-faceless-flywave-fit-tiny-task"><span>wings.faceless.flywave.fit.tiny-task</span></a></h3><p>数据库依赖，引入此lib后，自动执行此脚本</p><ul><li><code>path</code>=<code>classpath*:/wings-flywave/master/06-task/*.sql</code></li><li><code>revi</code>=<code>2020_1026_01L</code></li><li><code>lost</code>=<code>EXEC</code></li></ul><h2 id="_8b-3-wings-tinytask-beat-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-3-wings-tinytask-beat-79-properties"><span>8B.3.wings-tinytask-beat-79.properties</span></a></h2><p>TinyTask自身任务，清理日志和心跳健康</p><h3 id="wings-tiny-task-define-tinytaskcleanresult" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-tinytaskcleanresult"><span>wings.tiny.task.define[TinyTaskCleanResult]</span></a></h3><p><code>timing-cron</code>=<code>0 1 2 * * *</code></p><h3 id="wings-tiny-task-define-tinytaskcheckhealth" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-tinytaskcheckhealth"><span>wings.tiny.task.define[TinyTaskCheckHealth]</span></a></h3><p>每空闲300秒，检查一下健康状态</p><ul><li><code>timing-idle</code>=<code>300</code></li><li><code>notice-when</code>=<code>tail,done</code></li></ul><h2 id="_8b-4-wings-tinytask-define-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-4-wings-tinytask-define-79-properties"><span>8B.4.wings-tinytask-define-79.properties</span></a></h2><p>任务的Default配置 <code>wings.tiny.task.define[default]</code></p><h3 id="wings-tiny-task-define-default-enabled" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-enabled"><span>wings.tiny.task.define[default].enabled</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否可以注册及执行，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-autorun" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-autorun"><span>wings.tiny.task.define[default].autorun</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否可以自动注册并启动，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-version" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-version"><span>wings.tiny.task.define[default].version</span></a></h3><p><code>Integer</code>=<code>0</code>，版本号，版本高的配置覆盖版本低的，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-bean" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-bean"><span>wings.tiny.task.define[default].tasker-bean</span></a></h3><p><code>String</code>，由TinyTasker注解的Bean，格式为Class#method，默认自动识别，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-para" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-para"><span>wings.tiny.task.define[default].tasker-para</span></a></h3><p><code>String</code>=<code>null</code>，任务的参数，对象数组的json格式，默认null或空无参数，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-name" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-name"><span>wings.tiny.task.define[default].tasker-name</span></a></h3><p><code>String</code>，任务名字，用于通知和日志，可读性好一些，默认为<code>[短类名#方法名]</code>，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-task-fast" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-task-fast"><span>wings.tiny.task.define[default].task-fast</span></a></h3><p><code>Boolean</code>=<code>true</code>，是否为轻任务，执行快，秒级完成，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-apps" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-apps"><span>wings.tiny.task.define[default].tasker-apps</span></a></h3><p><code>String</code>=<code>${spring.application.name}</code>，所属程序，逗号分隔，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-tasker-runs" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-tasker-runs"><span>wings.tiny.task.define[default].tasker-runs</span></a></h3><p><code>String</code>，执行模式，RunMode(product|test|develop|local)，逗号分隔忽略大小写，默认所有，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-notice-bean" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-bean"><span>wings.tiny.task.define[default].notice-bean</span></a></h3><p><code>String</code>=<code>pro.fessional.wings.slardar.notice.DingTalkNotice</code></p><p>通知Bean，SmallNotice类型，格式为Class，默认无通知。null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-notice-when" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-when"><span>wings.tiny.task.define[default].notice-when</span></a></h3><p><code>String</code>=<code>fail</code>，通知的时机，exec|fail|done|feed，逗号分隔忽略大小写，默认fail。null及空时使用Default配置</p><ul><li>时机大概表述为：exec;try{run...;done}catch{fail}</li><li>exec - 初始任务；done - 执行成功；fail - 执行失败；feed - 方法返回非空</li></ul><h3 id="wings-tiny-task-define-default-notice-conf" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-notice-conf"><span>wings.tiny.task.define[default].notice-conf</span></a></h3><p><code>String</code>，通知Bean的配置文件名字，默认自动，空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-zone" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-zone"><span>wings.tiny.task.define[default].timing-zone</span></a></h3><p><code>String</code>，调度时区的ZoneId格式，默认系统时区，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-type" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-type"><span>wings.tiny.task.define[default].timing-type</span></a></h3><p><code>String</code>=<code>cron</code>，调度表达式类型，影响timingCron的解析方式，默认为spring cron格式，null及空时使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-cron" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-cron"><span>wings.tiny.task.define[default].timing-cron</span></a></h3><p><code>String</code>，调度表达式内容，最高优先级，受timingType影响，默认spring cron格式（秒分时日月周），不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-idle" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-idle"><span>wings.tiny.task.define[default].timing-idle</span></a></h3><p><code>Integer</code>=<code>0</code>，固定空闲相连（秒），优先级次于timingCron，相当于fixedDelay，结束到开始，0为无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-rate" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-rate"><span>wings.tiny.task.define[default].timing-rate</span></a></h3><p><code>Integer</code>=<code>0</code>，固定频率开始（秒），优先级次于timingIdle，相当于fixedRate，开始到开始，0为无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-miss" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-miss"><span>wings.tiny.task.define[default].timing-miss</span></a></h3><p><code>Integer</code>=<code>0</code>，错过调度（misfire）多少秒内，需要补救执行，0表示不补救，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-timing-beat" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-timing-beat"><span>wings.tiny.task.define[default].timing-beat</span></a></h3><p><code>Integer</code>=<code>0</code>，心跳间隔秒数，若任务的last_exec距今超过2个心跳，则视其为异常。默认自动，取rate或idle最大值，cron需要自行指定，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-from" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-from"><span>wings.tiny.task.define[default].during-from</span></a></h3><p><code>String</code>，调度开始的日期时间，timingZone时区，yyyy-MM-dd HH:mm:ss，0表示无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-stop" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-stop"><span>wings.tiny.task.define[default].during-stop</span></a></h3><p><code>String</code>，调度结束的日期时间，timingZone时区，yyyy-MM-dd HH:mm:ss，0表示无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-exec" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-exec"><span>wings.tiny.task.define[default].during-exec</span></a></h3><p><code>Integer</code>=<code>0</code>，总计初始执行多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-fail" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-fail"><span>wings.tiny.task.define[default].during-fail</span></a></h3><p><code>Integer</code>=<code>0</code>，连续失败多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-done" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-done"><span>wings.tiny.task.define[default].during-done</span></a></h3><p><code>Integer</code>=<code>0</code>，总计成功执行多少次后，结束调度，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-during-boot-0" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-during-boot-0"><span>wings.tiny.task.define[default].during-boot=0</span></a></h3><p><code>Integer</code>=<code>0</code>，每应用每启动时重新计数，总计成功执行多少次后，结束调度，默认无效，不会使用Default配置</p><h3 id="wings-tiny-task-define-default-result-keep" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-define-default-result-keep"><span>wings.tiny.task.define[default].result-keep</span></a></h3><p><code>Integer</code>=<code>60</code>，执行结果保存的天数，默认60天，0为不保存，null时使用Default配置</p><h2 id="_8b-5-wings-tinytask-urlmap-79-properties" tabindex="-1"><a class="header-anchor" href="#_8b-5-wings-tinytask-urlmap-79-properties"><span>8B.5.wings-tinytask-urlmap-79.properties</span></a></h2><p>内置功能的URL</p><h3 id="wings-tiny-task-urlmap-task-running" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-running"><span>wings.tiny.task.urlmap.task-running</span></a></h3><p><code>String</code>=<code>/admin/task/task-running.json</code>，运行中的任务列表</p><h3 id="wings-tiny-task-urlmap-task-defined" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-defined"><span>wings.tiny.task.urlmap.task-defined</span></a></h3><p><code>String</code>=<code>/admin/task/task-defined.json</code>，定义的任务列表</p><h3 id="wings-tiny-task-urlmap-task-result" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-result"><span>wings.tiny.task.urlmap.task-result</span></a></h3><p><code>String</code>=<code>/admin/task/task-result.json</code>，任务历史列表</p><h3 id="wings-tiny-task-urlmap-task-cancel" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-cancel"><span>wings.tiny.task.urlmap.task-cancel</span></a></h3><p><code>String</code>=<code>/admin/task/task-cancel.json</code>，取消一个任务</p><h3 id="wings-tiny-task-urlmap-task-launch" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-launch"><span>wings.tiny.task.urlmap.task-launch</span></a></h3><p><code>String</code>=<code>=/admin/task/task-launch.json</code>，启动任务</p><h3 id="wings-tiny-task-urlmap-task-force" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-force"><span>wings.tiny.task.urlmap.task-force</span></a></h3><p><code>String</code>=<code>/admin/task/task-force.json</code>，强制执行任务</p><h3 id="wings-tiny-task-urlmap-task-enable" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-enable"><span>wings.tiny.task.urlmap.task-enable</span></a></h3><p><code>String</code>=<code>/admin/task/task-enable.json</code>，启动或禁用任务</p><h3 id="wings-tiny-task-urlmap-task-prop-save" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-save"><span>wings.tiny.task.urlmap.task-prop-save</span></a></h3><p><code>String</code>=<code>/admin/task/task-prop-save.json</code>，更新任务配置</p><h3 id="wings-tiny-task-urlmap-task-prop-load" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-load"><span>wings.tiny.task.urlmap.task-prop-load</span></a></h3><p><code>String</code>=<code>/admin/task/task-prop-load.json</code>，任务载入属性</p><h3 id="wings-tiny-task-urlmap-task-prop-conf" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-conf"><span>wings.tiny.task.urlmap.task-prop-conf</span></a></h3><p><code>String</code>=<code>/admin/task/task-prop-conf.json</code>，任务配置属性</p><h3 id="wings-tiny-task-urlmap-task-prop-diff" tabindex="-1"><a class="header-anchor" href="#wings-tiny-task-urlmap-task-prop-diff"><span>wings.tiny.task.urlmap.task-prop-diff</span></a></h3><p><code>String</code>=<code>/admin/task/task-prop-diff.json</code>，任务属性差异</p>',95),d=[s];function r(o,c){return a(),n("div",null,d)}const f=e(i,[["render",r],["__file","8b-prop-tinytask.html.vue"]]);export{f as default};
