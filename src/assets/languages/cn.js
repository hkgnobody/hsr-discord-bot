const langs = {
	info_title: "你好！我是 星铁小助手，按下下方按钮以查看更多关于我的资讯",
	info_Uptime: "上线时间",
	info_Servers: "伺服器数量",
	info_MemoryUsage: "记忆体使用率 (Used / Total / Rss)",
	info_Devs: "开发者",

	Ping: "延迟",
	Switch: "切换",
	Refresh: "刷新",
	support_server: "加入支持伺服器！",
	support: "遇到错误或想提供建议?\n请点击下方按钮加入支持伺服器并建立贴文！",

	profile_Searching: "搜寻中...",
	profile_failed: "搜寻不到ID为 <z> 的玩家",
	profile_nonSign: "尚未设置签名",
	profile_character: "查看角色",
	profile_tLevel: "开拓等级",
	profile_qLevel: "均衡等级",
	profile_record: "漫游纪录",
	profile_friends: "好友数量",
	profile_characters: "邂逅角色",
	profile_lightcone: "获得光锥",
	profile_achievement: "达成成就",
	profile_forgottenHall: "忘却之庭",
	profile_memory: "回忆进度",
	profile_memoryOfChaos: "浑沌回忆进度",
	profile_imageLoading: "生成图片中...",
	profile_main: "主页",
	leaderboard_character: "查看排行",
	leaderboard_title: "<z> 遗器总分排行",
	leaderboard_footer: "仅会纪录使用过个人资料的遗器总分",
	leaderboard_score: "**<z>** 分",
	cookie_failed: "请确定已设置正确的 Cookie",
	cookie_failedDesc: "设置 Cookie </account:1160207139151818852>",
	cookie_how: "如何取得 Cookie ?",
	cookie_set: "设置 Cookie",
	cookie_paste: "复制的 Cookie 放这",
	cookie_sus: "Cookie 已绑定至 <z>！",
	cookie_desc:
		"使用**Chrome** 开启[Hoyolab](https://www.hoyolab.com/)，若已登入请登出帐号\n** **\n然后在**养成计算器** 登入帐号，登入后在网址位置输入下方给予的程式码然后把java旁边的+删掉\n** **\n复制显示的Cookie 后再次使用</account:1160207139151818852>",
	uid_non: "尚未设置 UID，设置后即可快速搜寻自己",
	uid_UserNonSet: "此使用者尚未设置 UID",
	uid_failedDesc: "设置 UID </account:1160207139151818852>",
	daily_signed: "开拓者，你今天已经签到过了～",
	daily_sign: "签到成功！",
	daily_desc: "您已获得今日奖励 <a>",
	daily_desc2: "明日奖励为 <b>",
	daily_month: "月份签到",
	daily_signedDay: "已签到 <z> 天",
	daily_missedDay: "遗漏签到 <z> 天",
	daily_failed: "签到失败",
	autoDaily_on: "已开启自动签到",
	autoDaily_off: "已关闭自动签到",
	autoDaily_tag: "自动签到时标注您：<z>",
	autoDaily_time: "自动签到时间：<z> 点",
	notify_failed: "请确定以下资料已设定正确",
	notify_staminaMax: "体力要爆满啦！",
	notify_expeditionMax: "可以领取委托啦！",
	notify_title: "生存索引",
	notify_stamina: "当前体力",
	notify_re: "全部恢复：",
	notify_reAll: "已全部恢复",
	notify_staminaBack: "后备体力",
	notify_daily: "每日实训",
	notify_end: "结束时间：",
	notify_rogue: "模拟宇宙积分",
	notify_cocoon: "历战余响",
	notify_epedition: "委托执行",
	notify_claim: "可领取",
	autoNote_on: "已开启自动通知",
	autoNote_off: "已关闭自动通知",
	autoNote_tag: "自动通知时标注您：<z>",
	autoNote_title: "自动通知",
	autoNote_expedition: "可领取委托时通知：<z>",
	autoNote_stamina: "体力超过 <z> 时通知",
	redeem_failed: "未搜寻到兑换码",
	redeem_sus: "点击下方连结领取兑换码",
	uid_sus: "UID 已设置为",
	warp_title: "查询跃迁纪录",
	warp_input: "在这放入跃迁纪录网址",
	warp_typeCharacter: "限定角色跃迁",
	warp_typeLightcone: "限定光锥跃迁",
	warp_typeRegular: "常驻跃迁",
	warp_loading: "载入 <a> 中",
	warp_err: "请确认已输入正确的跃迁纪录网址",
	warp_errDesc: "如何取得跃迁记录网址 </warp:1120925141338177543>",
	warp_selectMenuTitle: "点击选择迁跃纪录！",
	warp_0: "这是给你的 👑",
	warp_30: "难得一见的欧皇",
	warp_50: "稍微幸运一点的玩家",
	warp_60: "正常的保底玩家",
	warp_80: "你只能靠大保过活了",
	warp_pity: "已累计 <z> 抽未出五星",
	warp_pityFour: "已累计 <z> 抽未出四星",
	warp_average: "平均 <z> 抽一个五星",
	warp_nonAverage: "还未抽出过五星",
	warp_how: "如何获取跃迁纪录",
	warplog_title: "抽卡分析",
	warplog_count: "跃迁总数",
	warplog_cost: "已花费星琼",
	warplog_5count: "五星数量",
	warplog_5countaverage: "平均五星保底",
	warplog_react: "近期五星抽卡",
	warp_howDesc:
		"**1.** 在PC 上打开崩坏：星穹铁道\n**2.** 打开`迁跃`的`历史纪录`\n**3.** 打开Windows PowerShell 并贴上以下指令<z>\n**4.** 复制网址后使用指令</warp:1120003658243915847> 查询迁跃纪录",
	warp_SimFooter: "请不要移动或切换画面以获得更好的跃迁体验",
	warp_skip: "跳过",
	clear_cache: "已清除帐号上的所有资料！",
	forgottenHall_noninfo: "尚未拥有当期混沌回忆资料",
	forgottenHall_selectFloor: "选择楼层",
	forgottenHall_desc: "<s>星 • <r>轮 ",
	forgottenHall_title: "回顾",
	forgottenHall_timeFooter: "统计周期",
	forgottenHall_level: "关卡进度",
	forgottenHall_battle: "战斗次数",
	forgottenHall_useRound: "使用轮",
	forgottenHall_teamSetup: "编队<z>",
	feedback_Title: "提供建议或想法",
	feedback_Label: "您可以在这里提供对于机器人的建议或者想法！",
	feedback_Sus: "您的反馈已提交至开发者，非常感谢！",
	admin_noPer: "你需要拥有 `管理伺服器` 的权限才能使用这个指令",
	admin_removeFail: "删除失败",
	admin_removeFailed: "<z> 设置的讯息频道不在此伺服器中",
	admin_noUserSet: "<z> 尚未设置此功能",
	admin_removeSus: "删除成功",
	admin_removeSusMsg: "已删除 <z> 在 <c> 的讯息通知",
	admin_moveFail: "移动失败",
	admin_moveNoPer: "我在 <z> 缺少了 `发送讯息` 的权限",
	admin_moveSus: "移动成功",
	admin_moveSusMsg: "已将 `<c>` 位使用者的讯息通知移动至 <z>",
	admin_moveFailed: "无法设置讯息通知至 <z>",
	account_nonAcc: "未查询到已设置的帐号！",
	account_setUID: "请先设置一个 UID",
	account_cookieSelectUID: "请选择一个 UID 设置 Cookie",
	account_uidTitle: "设置 UID",
	account_uidDesc: "游戏内的 UID",
	account_listAcc: "已设置的帐号",
	account_linked: "已绑定",
	account_nolink: "未绑定",
	account_editUIDTitle: "请选择要编辑的 UID",
	account_delUIDTitle: "请选择要删除的 UID",
	account_selectEdit: "请选择要编辑的东西",
	account_del: "已删除帐号",
	account_alreadySet: "此 UID 已设置至帐户中",
	account_limit: "无法设置超过 `3` 个帐号",
	guide_character: "查看指南",
	guide_noImage: "目前没有 `<z>` 的指南图片",
	vote_Msg: "你需要为我们投票才可以使用这个功能！",
	vote: "投票",
	news_notice: "通知",
	news_events: "活动",
	news_info: "资讯",
	news_seltype: "请选择一种新闻类别",
	news_selpost: "🐣 请选择一篇文章",
	draw_fail: "制图失败，请稍后再试！",
	draw_wait: "您的制图请求正在排队，剩余 <z> 位使用者",
	draw_NoData: "资料抓取失败",

	year: "年",
	month: "月",
	day: "日",
	support: "加入支持伺服器，来获得更快的协助",
	mainCharacter: "开拓者",
	newLocale: "已设定语言为 `<z>`",
	relic: "遗器评分 <s> • 评级",
	err_code: "错误代码：",
	wait: "请等待 `<time>` 秒后再试一次！",
	wait2: "请等待 `<time>` 后再试一次！",
	auto: "自动",
	warp: "抽",
	total: "总计",
	none: "`暂无`",
	level: "等级",
	level2: "<z>级",
	eidolon: "星魂 <z> 阶",
	charInfo: "角色资讯",
	lightcone: "光锥",
	traces: "行迹",
	relics: "仪器",
	lightconeLevel: "叠影 <z> 阶",
	character_placeholder: "第 <s> 至 <e> 位",
	lightconeSelect: "选择行迹",
	back: "返回",
	relicsSelect: "选择仪器",
	true: "是",
	false: "否"
};

export default langs;
