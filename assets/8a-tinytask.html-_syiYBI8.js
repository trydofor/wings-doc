import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as l,f as e}from"./app-OXbFzGQa.js";const s={},n=e('<h1 id="_8a-小任务模块" tabindex="-1"><a class="header-anchor" href="#_8a-小任务模块"><span>8A.小任务模块</span></a></h1><p>基于Spring Schedule提供了以database为中心的任务调度</p><ul><li>自动发现和执行</li><li>中途取消，启动，修改配置</li><li>设置任务通知</li><li>查询任务执行历史</li></ul><h2 id="_8a-1-设计要求" tabindex="-1"><a class="header-anchor" href="#_8a-1-设计要求"><span>8A.1.设计要求</span></a></h2><p>TinyTask设计为强类型，静态的，因此默认限制了动态添加任务。</p><ul><li>任务对象必须是SpringBean</li><li>使用@TinyTask.Auto注解的类可自动发现</li><li>入口方法必须使用@TinyTask注解标注</li><li>通过配置文件设置任务属性</li><li>最终配置以database为准，除非version覆盖</li><li>任务仅在限定的app和run mode中启动</li><li>任务自身可进行并发控制(Jvm及Database)</li></ul><h2 id="_8a-2-配置覆盖" tabindex="-1"><a class="header-anchor" href="#_8a-2-配置覆盖"><span>8A.2.配置覆盖</span></a></h2><p>任务可自动或手动添加，以@TinyTask.Auto注解的Bean会自动开始， 此外，通过TinyTaskService.schedule方法手动开始。</p><p>任务的配置会首先进行合并，优先级为从高到低依次为。</p><ul><li>任务自身key的属性值</li><li>任务的default值</li><li>annotation注解值</li></ul><p>以上合并后的配置文件，成为taks的property，会和database中当前值比较version 以version大者优先，相等时，以database（win_task_define表）优先。</p><h2 id="_8a-3-任务调度" tabindex="-1"><a class="header-anchor" href="#_8a-3-任务调度"><span>8A.3.任务调度</span></a></h2><p>任务按执行时间，分为light和heavy任务，对应2个不同的线程池。 一般任务秒级完成的为轻任务，在fast线程池中执行，否则则heavy中执行。</p><p>一个任务必须设置cron/idle/rate中任意一个值，以进行任务调度， 如果同时设置，则cron高于idle，idle高于rate覆盖。</p><h2 id="_8a-4-任务控制" tabindex="-1"><a class="header-anchor" href="#_8a-4-任务控制"><span>8A.4.任务控制</span></a></h2><p>TinyTask默认提供了控制的Controller</p><ul><li>task-running - 运行中的任务列表</li><li>task-defined - 定义的任务列表</li><li>task-result - 任务历史列表</li><li>task-cancel - 取消一个任务</li><li>task-launch - 启动任务</li><li>task-force - 强制执行任务</li><li>task-enable - 启动或禁用任务</li><li>task-prop-save - 更新任务配置</li><li>task-prop-load - 任务载入属性</li><li>task-prop-conf - 任务配置属性</li><li>task-prop-diff - 任务属性差异</li></ul><p>推荐在编码中进行任务控制，比较安全和强类型</p><ul><li>TinyTaskConfService - 配置相关服务</li><li>TinyTaskExecService - 执行相关服务</li><li>TinyTaskService - 调度任务入口</li></ul>',19),t=[n];function r(p,o){return i(),l("div",null,t)}const h=a(s,[["render",r],["__file","8a-tinytask.html.vue"]]);export{h as default};
