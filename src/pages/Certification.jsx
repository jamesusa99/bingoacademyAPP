import React, { useState } from 'react'

// ─── 数据层 ───────────────────────────────────────────────

// 九星·四阶体系
const FOUR_STAGES = [
  {
    key: 'qizhi', name: '启智阶', stars: '⭐ 一星—三星', range: '1-3星课程',
    color: 'from-emerald-400 to-teal-500', light: 'bg-emerald-50 border-emerald-200/60',
    tag: 'bg-emerald-100 text-emerald-700', textColor: 'text-emerald-700',
    suitable: '新成立教培机构', weeks: '4-5周',
    perks: ['一星至三星课程授权', '机构基础认证牌匾', '招生宣传物料包', '初级品牌背书'],
    studentLevel: '启智阶学员认证（1-3星结业）',
    teacherLevel: '基础教师认证',
  },
  {
    key: 'jichu', name: '基础阶', stars: '⭐⭐ 四星—六星', range: '4-6星课程',
    color: 'from-sky-400 to-blue-500', light: 'bg-sky-50 border-sky-200/60',
    tag: 'bg-sky-100 text-sky-700', textColor: 'text-sky-700',
    suitable: '发展期教培机构', weeks: '5-6周',
    perks: ['四星至六星课程授权', '机构中级认证证书', '发牌中心联合背书', '营销资源倾斜'],
    studentLevel: '基础阶学员认证（4-6星结业）',
    teacherLevel: '基础教师认证',
  },
  {
    key: 'jinyan', name: '精研阶', stars: '⭐⭐⭐ 七星—八星', range: '7-8星课程',
    color: 'from-violet-500 to-purple-600', light: 'bg-violet-50 border-violet-200/60',
    tag: 'bg-violet-100 text-violet-700', textColor: 'text-violet-700',
    suitable: '成熟品牌教培机构', weeks: '6-7周',
    perks: ['七星至八星课程授权', '高级认证证书+铜牌', '省级发牌中心背书', '定向师资培训支持'],
    studentLevel: '精研阶学员认证（7-8星结业）',
    teacherLevel: '高级教师认证',
  },
  {
    key: 'zhichuang', name: '智创阶', stars: '⭐⭐⭐⭐ 九星', range: '9星课程',
    color: 'from-amber-400 to-orange-500', light: 'bg-amber-50 border-amber-200/60',
    tag: 'bg-amber-100 text-amber-700', textColor: 'text-amber-700',
    suitable: '旗舰/连锁教培机构', weeks: '7-8周', recommended: true,
    perks: ['九星全课程独家授权', '旗舰认证+金牌授牌', '国家级发牌中心背书', '行业TOP机构资源位', '优先赛事联动合作', '一对一运营支持'],
    studentLevel: '智创阶学员认证（9星结业）',
    teacherLevel: '高级教师认证+培训师认证',
  },
]

// 权益对比表
const PERK_COMPARE = [
  { label: '课程授权范围', values: ['一-三星课程', '四-六星课程', '七-八星课程', '九星全部课程'] },
  { label: '品牌背书力度', values: ['基础背书', '中级背书', '高级+省级', '国家级独家背书'] },
  { label: '发牌中心支持', values: ['地区发牌', '省级发牌', '省级+联盟', '国家级发牌中心'] },
  { label: '营销资源倾斜', values: ['基础物料包', '推广资源包', '重点资源倾斜', '行业首推资源位'] },
  { label: '师资培训支持', values: ['基础师训', '定期师训', '专属师训', '一对一定制培训'] },
  { label: '认证周期', values: ['4-5周', '5-6周', '6-7周', '7-8周'] },
  { label: '赛事联动', values: ['—', '基础赛事', '重点赛事', '优先赛事+定制赛事'] },
  { label: '一对一运营支持', values: ['—', '—', '部分支持', '全程专属支持'] },
]

// 学员认证数据
const STUDENT_CERTS = [
  {
    id: 'ai-basic', stage: 'qizhi', level: 'L1', name: 'AI通识能力认证', badge: '🌱',
    ageRange: '8-12岁', color: 'from-emerald-400 to-teal-500',
    lightColor: 'bg-emerald-50 border-emerald-200/60', tagColor: 'bg-emerald-100 text-emerald-700',
    desc: '面向青少年的AI基础认知与工具应用能力认证，覆盖AI通识、不插电实验、基础机器人实操',
    scope: ['AI基础概念与应用', '不插电实验与科学思维', '简单机器人搭建操作', 'AI工具初步体验'],
    output: 'AI通识能力初级证书', method: '线上闭卷测评 + 实操作品提交',
    duration: '约 60 分钟', price: '¥198',
    match: '青少年AI创新挑战赛 · 学校科技活动背书', upgrade: 'ai-intermediate',
  },
  {
    id: 'ai-intermediate', stage: 'jichu', level: 'L2', name: 'AI创造力应用认证', badge: '🚀',
    ageRange: '10-15岁', color: 'from-sky-400 to-blue-500',
    lightColor: 'bg-sky-50 border-sky-200/60', tagColor: 'bg-sky-100 text-sky-700',
    desc: '聚焦AI工具创意应用与项目制作能力，涵盖AIGC、数据分析基础、机器人竞赛入门',
    scope: ['AIGC创意设计与提示词工程', '数据采集与可视化基础', '机器人竞赛入门实操', '小型AI项目独立完成'],
    output: 'AI创造力应用中级证书', method: '线上笔试 + 项目作品集提交 + 在线答辩',
    duration: '约 90 分钟', price: '¥298',
    match: '全国青少年AI创新大赛 · 综评素材 · 科技特长生申报', upgrade: 'ai-advanced',
  },
  {
    id: 'ai-advanced', stage: 'jinyan', level: 'L3', name: 'AI科创研究认证', badge: '🏆',
    ageRange: '13-18岁', color: 'from-violet-500 to-purple-600',
    lightColor: 'bg-violet-50 border-violet-200/60', tagColor: 'bg-violet-100 text-violet-700',
    desc: '面向具备一定基础的青少年，认证其独立完成AI课题研究、模型训练与成果答辩的能力',
    scope: ['机器学习模型训练与优化', '课题研究方法与报告撰写', 'AI工程实践（Python/TensorFlow基础）', '科研成果答辩与表达'],
    output: 'AI科创研究高级证书 + 高校导师评审意见', method: '课题报告提交 + 模型成果展示 + 专家评审答辩',
    duration: '约 120 分钟', price: '¥498',
    match: '强基计划科研能力证明 · 综评核心材料 · 海外升学作品集', upgrade: null,
  },
  {
    id: 'zhichuang-cert', stage: 'zhichuang', level: 'L4', name: '智创阶AI全栈认证', badge: '👑',
    ageRange: '15-18岁', color: 'from-amber-400 to-orange-500',
    lightColor: 'bg-amber-50 border-amber-200/60', tagColor: 'bg-amber-100 text-amber-700',
    desc: '对标九星课程顶阶，全面认证AI全栈开发、课题研究与行业应用能力，含国家级发牌中心背书',
    scope: ['AI全栈项目开发与部署', '跨学科课题研究', '行业应用案例分析', '成果答辩与商业表达'],
    output: '智创阶AI全栈认证证书 + 国家级发牌中心联合颁发', method: '综合作品集 + 专家团答辩',
    duration: '约 180 分钟', price: '¥798',
    match: '强基/自主招生核心材料 · 海外升学作品集 · 行业实习推荐', upgrade: null,
  },
  {
    id: 'data-science', stage: 'jichu', level: 'L2', name: '数据科学素养认证', badge: '📊',
    ageRange: '12-18岁', color: 'from-amber-400 to-orange-500',
    lightColor: 'bg-amber-50 border-amber-200/60', tagColor: 'bg-amber-100 text-amber-700',
    desc: '专项认证青少年数据分析、可视化与数据思维能力，适配数据科学类赛事与综评材料',
    scope: ['数据采集与清洗基础', '数据可视化图表制作', '统计分析基础应用', '数据科学报告撰写'],
    output: '数据科学素养证书', method: '线上笔试 + 数据分析报告提交',
    duration: '约 90 分钟', price: '¥268',
    match: '信息学联赛辅助材料 · 综评佐证 · 竞赛备赛能力证明', upgrade: null,
  },
  {
    id: 'robot', stage: 'jichu', level: 'L2', name: '机器人工程实践认证', badge: '🤖',
    ageRange: '10-18岁', color: 'from-cyan-400 to-teal-500',
    lightColor: 'bg-cyan-50 border-cyan-200/60', tagColor: 'bg-cyan-100 text-cyan-700',
    desc: '认证青少年机器人搭建、编程控制与赛事实操能力，直接衔接机器人类竞赛参赛资格',
    scope: ['机器人结构搭建与调试', '图形化/代码编程控制', '竞赛任务规则理解与执行', '故障排查与优化迭代'],
    output: '机器人工程实践证书', method: '实操考核（现场搭建+调试）+ 理论笔试',
    duration: '约 120 分钟（现场考核）', price: '¥368',
    match: '世界机器人大赛 · 全国青少年机器人大赛 · 竞赛报名加分', upgrade: null,
  },
]

const CERT_PROCESS = [
  { step: 1, icon: '📋', title: '选择认证', desc: '按年龄段与发展方向选择合适认证，查看详情与备考资料' },
  { step: 2, icon: '📚', title: '备考准备', desc: '购买备考课程或下载备考资料，按大纲系统学习' },
  { step: 3, icon: '📅', title: '预约考核', desc: '选择考核时间（线上/线下），提交报名信息与费用' },
  { step: 4, icon: '✍️', title: '参加考核', desc: '完成线上测评或现场实操，提交作品/报告' },
  { step: 5, icon: '📜', title: '获取证书', desc: '考核通过后 7 个工作日内颁发电子证书，支持下载、打印、在线验证' },
]

const INSTITUTION_STEPS = [
  { step: 1, title: '资质提交', desc: '机构在线填写申请，提交营业执照、场地、师资等资质材料', time: '1-2天' },
  { step: 2, title: '课程审核', desc: '平台对照四阶课程体系审核机构课程完整度与教学能力', time: '3-5天' },
  { step: 3, title: '培训考核', desc: '师资通过缤果教师认证，机构完成平台培训', time: '5-10天' },
  { step: 4, title: '授牌认证', desc: '审核通过后签约授牌，颁发认证证书与配套权益', time: '1-2天' },
]

const FAQ_DATA = [
  { q: '机构认证的基本条件是什么？', a: '需具备合法营业执照、固定教学场地、至少2名通过缤果教师认证的师资，并已开展或计划开展AI相关课程教学。' },
  { q: '认证费用包含哪些内容？', a: '基础认证费用包含资质审核、授牌认证、基础物料包。高阶认证含师资培训、发牌中心背书、营销资源包。具体费用请联系商务顾问获取报价。' },
  { q: '认证周期一般多长？', a: '启智阶约4-5周，基础阶约5-6周，精研阶约6-7周，智创阶约7-8周。提供加急通道，需额外费用。' },
  { q: '认证证书有效期多久？需要复审吗？', a: '机构认证证书有效期1年，到期前30天自动提醒续审。续审通过后颁发新证书，保持认证资质连续性。' },
  { q: '学员认证和机构认证有什么关系？', a: '学员认证基于机构四阶认证体系，认证机构颁发的学员证书含机构背书信息，两者互相联动，提升认证权威性。' },
]

// ─── 辅助组件 ────────────────────────────────────────────

function NavBreadcrumb({ items, onNav }) {
  return (
    <div className="flex items-center gap-2 mb-6 text-sm flex-wrap">
      <button onClick={() => onNav('home')} className="text-slate-500 hover:text-primary transition">认证中心</button>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span className="text-slate-300">/</span>
          {i < items.length - 1 ? (
            <button onClick={() => onNav(item.key)} className="text-slate-500 hover:text-primary transition">{item.label}</button>
          ) : (
            <span className="text-bingo-dark font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

// ─── 机构认证 ────────────────────────────────────────────

function InstitutionCert({ onNav }) {
  const [subPage, setSubPage] = useState('home')
  const [selectedStage, setSelectedStage] = useState(null)
  const [applySubmitted, setApplySubmitted] = useState(false)

  if (subPage === 'detail' && selectedStage) {
    const stage = FOUR_STAGES.find(s => s.key === selectedStage)
    return (
      <div>
        <NavBreadcrumb items={[{ label: '机构认证', key: 'inst' }, { label: stage.name + '认证详情' }]} onNav={onNav} />
        <div className={'rounded-2xl p-6 bg-gradient-to-r ' + stage.color + ' text-white mb-6'}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-white/80 text-xs mb-1">{stage.stars} · 适合：{stage.suitable}</p>
              <h2 className="text-2xl font-bold mb-1">{stage.name}认证</h2>
              <p className="text-white/80 text-sm">课程授权范围：{stage.range} · 认证周期约 {stage.weeks}</p>
            </div>
            {stage.recommended && <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold shrink-0">🔥 推荐</span>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* 课程认证清单 */}
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">课程认证清单</h3>
            <ul className="space-y-2">
              {stage.key === 'zhichuang' ? [
                '必开：AI图像识别（五步流程图）', '必开：人脸识别与AI伦理应用',
                '必开：生成式AI全栈开发', '必开：AI商业应用案例设计',
                '选开：跨学科AI科创课题', '标准：每课时含成果作品提交',
              ] : stage.key === 'jinyan' ? [
                '必开：机器学习模型应用课', '必开：Python编程进阶',
                '必开：AI课题研究方法', '选开：数据科学可视化',
                '标准：学员完成率须80%以上',
              ] : stage.key === 'jichu' ? [
                '必开：AI通识进阶课', '必开：机器人竞赛培优课',
                '必开：数据思维基础课', '标准：每班至少6学时/月',
              ] : [
                '必开：AI启蒙通识课', '必开：不插电实验课',
                '必开：简单机器人搭建', '标准：学员满意度4.5分以上',
              ]}.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{item}
                </li>
              ))}
            </ul>
            <button type="button" className="mt-4 text-xs text-primary hover:underline">下载完整课程体系Excel ›</button>
          </div>

          {/* 认证考核标准 */}
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">考核标准</h3>
            <div className="space-y-3">
              {[
                { label: '师资合格率', value: '100% 通过缤果教师认证', icon: '👨‍🏫' },
                { label: '课程完成率', value: '学员须达到80%以上', icon: '📊' },
                { label: '学员满意度', value: '4.5分以上 / 5.0', icon: '⭐' },
                { label: '场地标准', value: '固定教学空间+配套设备', icon: '🏫' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm font-semibold text-bingo-dark">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 发牌中心背书 */}
        <div className="card p-6 bg-slate-50 mb-6">
          <h3 className="font-semibold text-bingo-dark mb-4">发牌中心背书</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'XX人工智能教育协会', role: '认证审核监督', region: stage.key === 'zhichuang' ? '全国' : '省级' },
              { name: 'XX师范大学教育学院', role: '教学质量评估', region: stage.key === 'zhichuang' ? '全国' : '区域' },
              { name: '缤果AI学院认证委员会', role: '授牌颁证', region: '全国' },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 text-primary font-bold text-lg">{d.name.charAt(0)}</div>
                <p className="font-semibold text-sm text-bingo-dark">{d.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{d.role}</p>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full mt-1 inline-block">{d.region}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 申请按钮 */}
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setSubPage('apply')} className="btn-primary px-8 py-3 text-sm font-bold">立即申请{stage.name}认证</button>
          <button onClick={() => setSubPage('home')} className="border border-slate-200 rounded-xl px-5 py-3 text-sm text-slate-600 hover:bg-slate-50">← 返回认证等级列表</button>
        </div>
      </div>
    )
  }

  if (subPage === 'apply') {
    return (
      <div>
        <NavBreadcrumb items={[{ label: '机构认证', key: 'inst' }, { label: '申请认证' }]} onNav={onNav} />
        <div className="max-w-xl">
          {applySubmitted ? (
            <div className="card p-10 text-center">
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="font-bold text-bingo-dark text-xl mb-2">申请已提交！</h3>
              <p className="text-slate-500 text-sm mb-1">专属商务顾问将在 2 个工作日内联系您</p>
              <p className="text-slate-400 text-xs mb-6">同时将发送《认证指南》至您的邮箱</p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => { setApplySubmitted(false); setSubPage('home') }} className="btn-primary text-sm px-6 py-2.5">返回认证中心</button>
                <button onClick={() => setApplySubmitted(false)} className="border border-slate-200 rounded-xl text-sm px-5 py-2.5 text-slate-600">再次填写</button>
              </div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setApplySubmitted(true) }} className="card p-8 space-y-5">
              <h3 className="font-bold text-bingo-dark text-xl">机构认证申请</h3>
              {[
                { label: '机构全称 *', type: 'text', ph: '请输入机构全称' },
                { label: '联系人姓名 *', type: 'text', ph: '负责人姓名' },
                { label: '联系电话 *', type: 'tel', ph: '手机号' },
                { label: '联系邮箱', type: 'email', ph: '用于接收认证指南' },
                { label: '机构所在城市 *', type: 'text', ph: '如：北京市朝阳区' },
              ].map((f, i) => (
                <div key={i}>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">{f.label}</label>
                  <input required={f.label.includes('*')} type={f.type} placeholder={f.ph}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">期望认证等级 *</label>
                <select required className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white">
                  <option value="">请选择</option>
                  {FOUR_STAGES.map(s => <option key={s.key}>{s.name}认证（{s.stars}）</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">现有课程情况</label>
                <textarea rows={3} placeholder="简述机构目前开展的课程类型、学员数量等"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">期望认证时间</label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white">
                  <option>尽快（商务顾问联系确认）</option>
                  <option>一个月内</option>
                  <option>三个月内</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="btn-primary flex-1 py-3 text-sm">提交申请 · 自动发送认证指南</button>
                <button type="button" onClick={() => setSubPage('home')} className="border border-slate-200 rounded-xl py-3 text-sm text-slate-600 hover:bg-slate-50 px-5">取消</button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }

  // 机构认证首页
  return (
    <div>
      <NavBreadcrumb items={[{ label: '机构认证' }]} onNav={onNav} />
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-bingo-dark mb-1">机构认证体系</h2>
        <p className="text-slate-600 text-sm">九星课程·四阶认证体系，赋能教培机构打造行业核心竞争力</p>
      </div>

      {/* 四阶认证路径 */}
      <section className="mb-8">
        <h3 className="font-semibold text-bingo-dark mb-4">选择认证等级</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FOUR_STAGES.map(s => (
            <div key={s.key}
              className={'card p-5 cursor-pointer hover:shadow-lg transition border-2 ' + (s.recommended ? 'border-amber-300 ring-2 ring-amber-200/50' : 'border-transparent hover:border-primary/30')}
              onClick={() => { setSelectedStage(s.key); setSubPage('detail') }}>
              {s.recommended && <div className="text-center mb-2"><span className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">🔥 推荐</span></div>}
              <div className={'h-1 rounded-full bg-gradient-to-r mb-4 ' + s.color} />
              <h4 className={'font-bold text-lg ' + s.textColor}>{s.name}</h4>
              <p className="text-xs text-slate-500 mb-2">{s.stars}</p>
              <p className="text-xs text-slate-600 mb-3">适合：{s.suitable}</p>
              <ul className="space-y-1 mb-4">
                {s.perks.slice(0, 3).map((p, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />{p}
                  </li>
                ))}
              </ul>
              <div className="text-xs text-slate-400">认证周期约 {s.weeks}</div>
              <button type="button" className={'mt-4 w-full py-2 rounded-xl text-xs font-medium transition bg-gradient-to-r ' + s.color + ' text-white hover:opacity-90'}>
                查看详情 →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 权益对比表 */}
      <section className="mb-8">
        <h3 className="font-semibold text-bingo-dark mb-4">四阶认证权益对比</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 bg-slate-50 text-slate-600 font-medium w-32">权益项目</th>
                {FOUR_STAGES.map(s => (
                  <th key={s.key} className={'py-3 px-4 text-center ' + (s.recommended ? 'bg-amber-50' : 'bg-slate-50')}>
                    <span className={'text-xs font-bold px-2 py-0.5 rounded-full ' + s.tag}>{s.name}</span>
                    {s.recommended && <p className="text-[10px] text-amber-600 mt-1">独家权益</p>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERK_COMPARE.map((row, ri) => (
                <tr key={ri} className="border-t border-slate-100 hover:bg-slate-50/50">
                  <td className="py-3 px-4 text-xs text-slate-600">{row.label}</td>
                  {row.values.map((v, vi) => (
                    <td key={vi} className={'py-3 px-4 text-center text-xs ' + (vi === 3 ? 'font-semibold text-amber-600 bg-amber-50/50' : 'text-slate-600')}>
                      {v === '—' ? <span className="text-slate-300">—</span> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 认证申请流程 */}
      <section className="mb-8">
        <h3 className="font-semibold text-bingo-dark mb-4">认证申请流程</h3>
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-2">
          {INSTITUTION_STEPS.map((step, i) => (
            <React.Fragment key={step.step}>
              <div className="card p-5 flex-1 border-primary/20 hover:shadow-md transition">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">{step.step}</span>
                  <h4 className="font-semibold text-primary text-sm">{step.title}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-9 mb-2">{step.desc}</p>
                <p className="text-[10px] text-slate-400 pl-9">⏱ 约 {step.time}</p>
              </div>
              {i < INSTITUTION_STEPS.length - 1 && (
                <div className="flex items-center justify-center lg:w-8 shrink-0 text-slate-300 text-xl">›</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 费用说明 */}
      <section className="card p-6 bg-slate-50 mb-6">
        <h3 className="font-semibold text-bingo-dark mb-4">认证费用说明</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {FOUR_STAGES.map(s => (
            <div key={s.key} className={'rounded-xl p-4 border ' + s.light}>
              <p className={'font-bold text-sm mb-1 ' + s.textColor}>{s.name}</p>
              <p className="text-xs text-slate-500 mb-2">{s.stars}</p>
              <p className="text-lg font-bold text-bingo-dark">面议</p>
              <p className="text-[10px] text-slate-400 mt-1">含基础认证+物料包</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mb-3">增值服务（师资培训、营销支持、发牌中心联合背书）单独报价，可使用「费用计算器」估算总费用</p>
        <button onClick={() => setSubPage('apply')} className="btn-primary text-sm px-6 py-2.5">获取专属报价</button>
      </section>

      <div className="flex gap-3">
        <button onClick={() => setSubPage('apply')} className="btn-primary px-8 py-3 text-sm font-bold">立即申请机构认证</button>
      </div>
    </div>
  )
}

// ─── 学员认证 ────────────────────────────────────────────

function StudentCert({ onNav }) {
  const [tab, setTab] = useState('overview')
  const [selectedCert, setSelectedCert] = useState(null)
  const [ageFilter, setAgeFilter] = useState('all')
  const [stageFilter, setStageFilter] = useState('all')
  const [applySubmitted, setApplySubmitted] = useState(false)
  const [queryResult, setQueryResult] = useState(null)

  return (
    <div>
      <NavBreadcrumb items={[{ label: '学员认证' }]} onNav={onNav} />
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-bingo-dark mb-1">学员认证体系</h2>
        <p className="text-slate-600 text-sm">四阶·双背书体系，认证成果可用于赛事报名、综评申报、强基计划与升学背书</p>
      </div>

      {/* 双背书展示 */}
      <div className="card p-5 bg-gradient-to-r from-indigo-50 to-violet-50 border-indigo-200/60 mb-6">
        <h3 className="font-semibold text-bingo-dark mb-3">双背书体系 · 权威认证保障</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-indigo-100">
            <p className="font-semibold text-sm text-indigo-700 mb-1">① 认证机构背书</p>
            <p className="text-xs text-slate-600">由学员所属的缤果认证机构联合颁发，证书含机构LOGO与认证编号，可点击验证</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-indigo-100">
            <p className="font-semibold text-sm text-violet-700 mb-1">② 发牌中心背书</p>
            <p className="text-xs text-slate-600">由对应级别的发牌中心监督颁发，含发牌机构LOGO与监督电话，官方可查验</p>
          </div>
        </div>
      </div>

      {/* 认证全流程 */}
      <div className="card p-6 mb-6">
        <h3 className="font-semibold text-bingo-dark mb-4">认证全流程</h3>
        <div className="flex flex-col sm:flex-row sm:items-start gap-0 overflow-x-auto">
          {CERT_PROCESS.map((step, i) => (
            <React.Fragment key={step.step}>
              <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-2 flex-1 min-w-[90px]">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl shrink-0">{step.icon}</div>
                <div className="sm:text-center">
                  <p className="text-xs font-semibold text-bingo-dark">{step.title}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed hidden sm:block">{step.desc}</p>
                </div>
              </div>
              {i < CERT_PROCESS.length - 1 && (
                <div className="flex items-center justify-center sm:pt-4 px-1 text-slate-300 text-lg">›</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Tab */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {[['overview', '认证项目总览'], ['detail', '认证详情'], ['apply', '在线报名'], ['verify', '证书查验']].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)}
            className={'px-5 py-1.5 rounded-full text-sm font-medium transition ' + (tab === k ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>{l}</button>
        ))}
      </div>

      {/* ── 认证总览 ── */}
      {tab === 'overview' && (
        <div className="space-y-5">
          {/* 四阶对应导航 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[['all', '全部认证', 'bg-slate-100 text-slate-700'], ...FOUR_STAGES.map(s => [s.key, s.name + '认证', s.tag])].map(([k, l, cls]) => (
              <button key={k} onClick={() => setStageFilter(k)}
                className={'text-xs px-3 py-2 rounded-full font-medium transition ' + (stageFilter === k ? 'ring-2 ring-primary ' + cls : cls + ' opacity-70 hover:opacity-100')}>
                {l}
              </button>
            ))}
          </div>

          {/* 年龄筛选 */}
          <div className="flex gap-2 flex-wrap">
            {[['all', '全部年龄'], ['8-12', '8-12岁'], ['10-15', '10-15岁'], ['13-18', '13-18岁']].map(([k, l]) => (
              <button key={k} onClick={() => setAgeFilter(k)}
                className={'px-4 py-1.5 rounded-full text-xs transition ' + (ageFilter === k ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>{l}</button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STUDENT_CERTS.filter(c =>
              (stageFilter === 'all' || c.stage === stageFilter) &&
              (ageFilter === 'all' || c.ageRange.includes(ageFilter.split('-')[0]) || c.ageRange.includes(ageFilter.split('-')[1]))
            ).map(cert => (
              <div key={cert.id}
                className={'card p-6 hover:shadow-md transition cursor-pointer border ' + cert.lightColor}
                onClick={() => { setSelectedCert(cert); setTab('detail') }}>
                <div className="flex items-start justify-between mb-3">
                  <div className={'inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ' + cert.tagColor}>
                    {cert.badge} {cert.level}
                  </div>
                  <span className="text-xs text-slate-400">{cert.ageRange}</span>
                </div>
                <h3 className="font-bold text-bingo-dark mb-1">{cert.name}</h3>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">{cert.desc}</p>
                {/* 对应认证机构阶段 */}
                <p className="text-[10px] text-indigo-600 mb-2">
                  对应：{FOUR_STAGES.find(s => s.key === cert.stage)?.name}认证机构颁发
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">{cert.price}</span>
                  <button type="button"
                    onClick={e => { e.stopPropagation(); setSelectedCert(cert); setTab('detail') }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition">查看详情</button>
                </div>
              </div>
            ))}
          </div>

          {/* 证书样本预览 */}
          <div className="card p-6 bg-gradient-to-r from-indigo-50 to-violet-50 border-indigo-200/60">
            <h3 className="font-semibold text-bingo-dark mb-3">证书样本预览</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-xl border-2 border-indigo-200 p-4 text-center">
                <p className="text-xs text-slate-400 mb-2">证书正面</p>
                <div className="h-24 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg flex flex-col items-center justify-center gap-1">
                  <p className="text-xs font-bold text-indigo-700">缤果AI学院 · 认证证书</p>
                  <p className="text-[10px] text-slate-500">学员姓名 · 认证等级 · 双背书LOGO</p>
                  <p className="text-[10px] text-slate-400">防伪标识 · 证书编号</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border-2 border-indigo-200 p-4 text-center">
                <p className="text-xs text-slate-400 mb-2">证书背面</p>
                <div className="h-24 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-lg flex flex-col items-center justify-center gap-1">
                  <p className="text-[10px] text-slate-500">证书查询二维码</p>
                  <p className="text-[10px] text-slate-400">扫码验真 · 认证说明</p>
                  <p className="text-[10px] text-indigo-600">支持：分享到朋友圈 / 下载高清图</p>
                </div>
              </div>
            </div>
            <button type="button" className="text-xs text-primary hover:underline">生成我的证书预览（输入信息即可查看效果）→</button>
          </div>

          {/* 证书用途说明 */}
          <div className="card p-5 bg-slate-50 border-slate-200/60">
            <h3 className="font-semibold text-bingo-dark mb-3">证书用途说明</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: '🏅', title: '竞赛报名加分', desc: '部分合作赛事认可认证等级，可直接报名更高组别' },
                { icon: '📁', title: '综评申报材料', desc: '认证证书可作为综评佐证材料，证明AI能力素养' },
                { icon: '🎓', title: '强基/升学背书', desc: '高级认证附高校导师评审意见，适用强基/自主招生' },
                { icon: '🌐', title: '海外升学作品集', desc: '认证成果可纳入Portfolio，提升留学申请竞争力' },
              ].map((u, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 text-center">
                  <div className="text-2xl mb-1">{u.icon}</div>
                  <p className="text-xs font-semibold text-bingo-dark mb-1">{u.title}</p>
                  <p className="text-[11px] text-slate-500">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── 认证详情 ── */}
      {tab === 'detail' && (
        <div>
          <div className="flex gap-2 mb-5 flex-wrap">
            {STUDENT_CERTS.map(c => (
              <button key={c.id} onClick={() => setSelectedCert(c)}
                className={'px-3 py-1.5 rounded-full text-xs font-medium transition ' +
                  (selectedCert?.id === c.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
                {c.badge} {c.name}
              </button>
            ))}
          </div>
          {selectedCert ? (
            <div className="card p-8">
              <div className={'rounded-2xl p-6 bg-gradient-to-r ' + selectedCert.color + ' text-white mb-6'}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-white/80 text-xs mb-1">{selectedCert.level} · {selectedCert.ageRange}</div>
                    <h3 className="text-2xl font-bold mb-1">{selectedCert.name}</h3>
                    <p className="text-white/80 text-sm">{selectedCert.desc}</p>
                  </div>
                  <span className="text-5xl shrink-0">{selectedCert.badge}</span>
                </div>
              </div>
              {/* 对应认证机构信息 */}
              <div className="mb-5 p-4 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-indigo-600 font-medium mb-0.5">对应认证机构</p>
                  <p className="text-sm text-bingo-dark">{FOUR_STAGES.find(s => s.key === selectedCert.stage)?.name}认证机构颁发</p>
                </div>
                <button type="button" className="text-xs text-indigo-600 hover:underline shrink-0">查看认证机构列表 →</button>
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 mb-2">考核范围</h4>
                  <ul className="space-y-1.5">
                    {selectedCert.scope.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  {[
                    { label: '成果产出', value: selectedCert.output },
                    { label: '考核方式', value: selectedCert.method },
                    { label: '考核时长', value: selectedCert.duration },
                    { label: '报名费用', value: selectedCert.price },
                    { label: '适配升学/赛事', value: selectedCert.match },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-xs text-slate-400 w-24 shrink-0 pt-0.5">{item.label}</span>
                      <span className="text-sm text-slate-700 font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              {selectedCert.upgrade && (
                <div className="mb-5 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
                  <span className="text-primary text-xl">⬆️</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-bingo-dark">完成本级认证后，推荐进阶：</p>
                    <p className="text-xs text-slate-500 mt-0.5">{STUDENT_CERTS.find(c => c.id === selectedCert.upgrade)?.name}</p>
                  </div>
                  <button onClick={() => setSelectedCert(STUDENT_CERTS.find(c => c.id === selectedCert.upgrade))}
                    className="text-xs px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-cyan-600 transition shrink-0">查看进阶认证</button>
                </div>
              )}
              <div className="flex flex-wrap gap-3 pt-5 border-t border-slate-100">
                <button onClick={() => { setTab('apply') }} className="btn-primary px-6 py-2.5 text-sm">立即报名考核</button>
                <button type="button" className="rounded-lg border border-primary text-primary px-5 py-2.5 text-sm hover:bg-primary/10 transition">下载备考大纲</button>
                <button onClick={() => setTab('verify')} className="rounded-lg border border-slate-200 text-slate-600 px-5 py-2.5 text-sm hover:bg-slate-50 transition">查询/分享证书</button>
              </div>
            </div>
          ) : (
            <div className="card p-10 text-center text-slate-400">
              <p>请从上方选择一个认证项目查看详情</p>
              <button onClick={() => setTab('overview')} className="btn-primary text-sm px-5 py-2 mt-4">返回认证总览</button>
            </div>
          )}
        </div>
      )}

      {/* ── 在线报名 ── */}
      {tab === 'apply' && (
        <div className="max-w-xl">
          {applySubmitted ? (
            <div className="card p-10 text-center">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="font-bold text-bingo-dark text-xl mb-2">报名提交成功！</h3>
              <p className="text-slate-600 mb-1">1-2 个工作日内专人联系，确认考核时间</p>
              <p className="text-slate-500 text-sm mb-6">确认信息已发送至您预留的手机号</p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => { setApplySubmitted(false); setTab('overview') }} className="btn-primary text-sm px-5 py-2">返回认证总览</button>
                <button onClick={() => setApplySubmitted(false)} className="rounded-lg border border-slate-200 text-slate-600 text-sm px-5 py-2">再次报名</button>
              </div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setApplySubmitted(true) }} className="card p-8 space-y-5">
              <h3 className="font-bold text-bingo-dark text-lg">学员认证报名</h3>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">选择认证项目 *</label>
                <select required className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white">
                  <option value="">请选择认证项目</option>
                  {STUDENT_CERTS.map(c => <option key={c.id}>{c.badge} {c.name}（{c.ageRange}）—— {c.price}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">所属认证机构 *</label>
                <input required type="text" placeholder="搜索并选择缤果认证机构（需为认证机构学员）"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                <p className="text-xs text-slate-400 mt-1">机构信息将联合背书，请确保信息准确</p>
              </div>
              {[
                { label: '学员姓名', type: 'text', ph: '请输入学员姓名', req: true },
                { label: '学员年龄', type: 'number', ph: '请输入学员年龄', req: true },
                { label: '联系电话', type: 'tel', ph: '家长手机号', req: true },
                { label: '家长姓名', type: 'text', ph: '请输入家长姓名', req: true },
              ].map((f, i) => (
                <div key={i}>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">{f.label} {f.req && '*'}</label>
                  <input type={f.type} required={f.req} placeholder={f.ph}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">期望考核时间</label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white">
                  <option>尽快安排（工作人员联系确认）</option>
                  <option>近两周内</option>
                  <option>一个月内</option>
                  <option>暑期（7-8月）</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1.5 block">课程完成证明</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center text-slate-400 text-sm hover:border-primary/40 transition cursor-pointer">
                  点击上传结业证书 / 课程完成截图
                </div>
              </div>
              <div className="flex items-start gap-2">
                <input required type="checkbox" id="cert-agree" className="mt-1" />
                <label htmlFor="cert-agree" className="text-sm text-slate-600">
                  我已阅读并同意 <button type="button" className="text-primary hover:underline">《认证报名须知》</button> 与 <button type="button" className="text-primary hover:underline">《退费政策》</button>
                  ，同时确认背书信息将由认证机构和发牌中心负责。
                </label>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="btn-primary flex-1 py-3 text-sm">提交报名</button>
                <button type="reset" className="flex-1 border border-slate-200 rounded-lg py-3 text-sm text-slate-600 hover:bg-slate-50">重置表单</button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* ── 证书查验 ── */}
      {tab === 'verify' && (
        <div className="max-w-lg">
          <div className="card p-8 mb-5">
            <h3 className="font-bold text-bingo-dark text-lg mb-4">证书查询与验证</h3>
            <div className="flex gap-2 mb-5">
              {['证书编号+姓名', '身份证号+姓名'].map((m, i) => (
                <button key={i} className={'flex-1 py-2 rounded-xl text-sm border transition ' + (i === 0 ? 'border-primary bg-primary/5 text-primary font-medium' : 'border-slate-200 text-slate-600 hover:border-primary/50')}>{m}</button>
              ))}
            </div>
            <div className="space-y-3 mb-5">
              {[
                { label: '证书编号', ph: 'BG-CERT-XXXXXXXX' },
                { label: '学员姓名', ph: '请输入学员姓名' },
              ].map((f, i) => (
                <div key={i}>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">{f.label}</label>
                  <input type="text" placeholder={f.ph}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
              ))}
            </div>
            <button onClick={() => setQueryResult('found')} className="btn-primary w-full py-3 text-sm">查询证书</button>
            <p className="text-xs text-slate-400 text-center mt-3">也可通过证书上的防伪二维码直接扫码查询</p>
          </div>

          {queryResult === 'found' && (
            <div className="card p-6 bg-emerald-50 border-emerald-200/60">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-emerald-600 text-xl">✅</span>
                <h3 className="font-bold text-emerald-700">证书验证通过</h3>
              </div>
              <div className="space-y-2 text-sm mb-4">
                {[
                  ['学员姓名', '张 ** （脱敏处理）'],
                  ['认证等级', 'AI创造力应用认证 L2'],
                  ['认证机构', 'XX缤果认证合作机构'],
                  ['发牌中心', 'XX省级发牌中心'],
                  ['颁发日期', '2025-05-08'],
                  ['有效状态', '有效'],
                ].map(([l, v]) => (
                  <div key={l} className="flex gap-3">
                    <span className="text-slate-500 w-20 shrink-0">{l}</span>
                    <span className="text-bingo-dark font-medium">{v}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <button type="button" className="text-xs bg-emerald-600 text-white px-4 py-2 rounded-lg">分享到朋友圈</button>
                <button type="button" className="text-xs border border-emerald-600 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-50">下载证书图片</button>
                <button type="button" className="text-xs border border-slate-200 text-slate-600 px-4 py-2 rounded-lg">查看认证机构详情</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── 教师认证 + 慧师计划 ─────────────────────────────────

function TeacherCert({ onNav }) {
  const [tab, setTab] = useState('teacher')
  const [huishiSubmitted, setHuishiSubmitted] = useState(false)

  return (
    <div>
      <NavBreadcrumb items={[{ label: '教师认证与慧师计划' }]} onNav={onNav} />
      <div className="flex gap-2 mb-6 flex-wrap">
        {[['teacher', '教师认证'], ['huishi', '慧师计划']].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)}
            className={'px-5 py-2 rounded-full text-sm font-medium transition ' + (tab === k ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>{l}</button>
        ))}
      </div>

      {tab === 'teacher' && (
        <div className="space-y-6">
          <div className="mb-2">
            <h2 className="text-2xl font-bold text-bingo-dark mb-1">教师认证体系</h2>
            <p className="text-slate-600 text-sm">与机构四阶认证对应，确保师资质量，支撑机构认证可信度</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: '📗', title: '基础教师认证', level: '启智阶-基础阶', desc: '面向教授1-6星课程的教师，考核AI基础知识、教学法与课程实操能力', need: '机构启智阶/基础阶认证必备', weeks: '2-3周' },
              { icon: '📘', title: '高级教师认证', level: '精研阶-智创阶', desc: '面向教授7-9星课程的教师，考核AI进阶研究、竞赛指导与实训能力', need: '机构精研阶/智创阶认证必备', weeks: '3-4周' },
              { icon: '📕', title: '培训师认证', level: '智创阶专属', desc: '负责机构内部师资培训，考核课程体系理解、师训方法与教学督导能力', need: '智创阶机构专属配置', weeks: '4-5周' },
            ].map((t, i) => (
              <div key={i} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
                <div className="text-2xl mb-2">{t.icon}</div>
                <h3 className="font-bold text-bingo-dark mb-1">{t.title}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{t.level}</span>
                <p className="text-xs text-slate-600 mt-3 mb-3 leading-relaxed">{t.desc}</p>
                <p className="text-xs text-emerald-600 font-medium mb-1">✓ {t.need}</p>
                <p className="text-xs text-slate-400">认证周期约 {t.weeks}</p>
              </div>
            ))}
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">认证培训体系</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '理论培训', desc: 'AI课程体系知识、教学法、课程背景与行业趋势', hours: '16课时' },
                { title: '实操培训', desc: '课程教学演示、教具使用、竞赛带赛实战', hours: '24课时' },
                { title: '考核认证', desc: '试讲（20分钟）+ 笔试（90分钟），70分及格', hours: '1天' },
              ].map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4">
                  <h4 className="font-semibold text-sm text-bingo-dark mb-1">{s.title}</h4>
                  <p className="text-xs text-slate-600 mb-2">{s.desc}</p>
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 bg-primary/5 border-primary/20">
            <h3 className="font-semibold text-bingo-dark mb-3">教师专属权益</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: '💼', title: '优先推荐就业', desc: '认证教师优先推荐至缤果认证机构' },
                { icon: '📚', title: '缤果师资库收录', desc: '全国机构可见，提升职业曝光度' },
                { icon: '🎓', title: '定期教研活动', desc: '参与缤果官方教研社群与研讨会' },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-primary/10 flex gap-3">
                  <span className="text-xl shrink-0">{p.icon}</span>
                  <div>
                    <p className="font-medium text-sm text-bingo-dark">{p.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'huishi' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-bingo-dark mb-1">慧师计划</h2>
            <p className="text-slate-600 text-sm">缤果优质教师培养计划 · 赋能教师职业成长 · 年培养1000名AI课程优质教师</p>
          </div>

          <div className="card p-6 bg-gradient-to-r from-primary/90 to-cyan-600 text-white">
            <h3 className="text-xl font-bold mb-2">与认证机构定向合作，明确就业通道</h3>
            <p className="text-white/80 text-sm mb-4">完成慧师计划全流程后，优秀学员可直接对接全国缤果认证机构，实现"培养-认证-就业"闭环</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[['年目标', '1000名'], ['合作机构', '50+家'], ['平均就业率', '92%']].map(([l, v]) => (
                <div key={l} className="bg-white/15 rounded-xl p-3 text-center">
                  <p className="text-white/70 text-xs">{l}</p>
                  <p className="font-bold text-xl mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">参与条件</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {[
                { icon: '📄', req: '教育相关专业背景', detail: '师范类、教育类、计算机类等相关专业优先' },
                { icon: '🤖', req: '具备基础AI知识', detail: '了解AI基本概念，有学习AI教育的意愿' },
                { icon: '✅', req: '通过初步筛选', detail: '完成笔试（AI基础）+ 面试（教学意愿）' },
              ].map((c, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 flex gap-3">
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <div>
                    <p className="font-medium text-sm text-bingo-dark">{c.req}</p>
                    <p className="text-xs text-slate-500 mt-1">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" className="text-xs text-primary hover:underline">完成预评估测试，判断是否符合条件 →</button>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">四阶段培养流程</h3>
            <div className="grid sm:grid-cols-4 gap-3">
              {[
                { stage: 1, title: '理论学习', time: '2-3周', desc: 'AI课程体系+教学法+行业背景' },
                { stage: 2, title: '实操训练', time: '3-4周', desc: '模拟教学+教具实操+竞赛指导' },
                { stage: 3, title: '机构实习', time: '4-6周', desc: '入驻合作机构，带班实习' },
                { stage: 4, title: '认证就业', time: '1-2周', desc: '通过认证，推荐至目标机构就业' },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 bg-slate-50 rounded-xl relative">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-2">{s.stage}</div>
                  <p className="font-semibold text-sm text-bingo-dark">{s.title}</p>
                  <p className="text-[10px] text-primary mt-0.5">{s.time}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-lg">
            {huishiSubmitted ? (
              <div className="card p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-bold text-bingo-dark text-lg mb-1">报名成功！</h3>
                <p className="text-slate-500 text-sm mb-4">《慧师计划手册》已发送至您的邮箱，招募专员将在3个工作日内联系</p>
                <button onClick={() => setHuishiSubmitted(false)} className="btn-primary px-6 py-2.5 text-sm">返回</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setHuishiSubmitted(true) }} className="card p-8 space-y-4">
                <h3 className="font-bold text-bingo-dark text-lg">慧师计划报名</h3>
                {[
                  { label: '姓名 *', type: 'text', ph: '请输入姓名' },
                  { label: '手机号 *', type: 'tel', ph: '请输入手机号' },
                  { label: '邮箱', type: 'email', ph: '用于接收慧师计划手册' },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">{f.label}</label>
                    <input required={f.label.includes('*')} type={f.type} placeholder={f.ph}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">期望就业地区</label>
                  <input type="text" placeholder="如：北京/上海/不限" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">个人简历（选填）</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center text-slate-400 text-sm hover:border-primary/40 transition cursor-pointer">
                    点击上传简历（PDF/Word）
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full py-3 text-sm">提交报名 · 免费获取慧师计划手册</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── 认证项目总览 + 发牌中心 ─────────────────────────────

function CertOverview({ onNav }) {
  const [tab, setTab] = useState('overview')
  const [partnerSubmitted, setPartnerSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div>
      <NavBreadcrumb items={[{ label: tab === 'issuance' ? '发牌中心' : '认证项目总览' }]} onNav={onNav} />
      <div className="flex gap-2 mb-6 flex-wrap">
        {[['overview', '认证项目总览'], ['issuance', '发牌中心体系']].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)}
            className={'px-5 py-2 rounded-full text-sm font-medium transition ' + (tab === k ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>{l}</button>
        ))}
      </div>

      {tab === 'overview' && (
        <div className="space-y-7">
          {/* 体系架构图 */}
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">三位一体认证架构</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-2">
              {[
                { icon: '🏫', title: '机构认证', sub: '核心', desc: '提供课程与师资，是认证体系的基础保障', key: 'inst' },
                { icon: '👨‍🏫', title: '教师认证', sub: '支撑', desc: '保障教学质量，支撑机构认证的可信度', key: 'teacher' },
                { icon: '🎓', title: '学员认证', sub: '成果', desc: '体现教学效果，实现认证价值的最终输出', key: 'student' },
              ].map((n, i) => (
                <React.Fragment key={n.key}>
                  <button onClick={() => onNav(n.key)}
                    className="card p-5 w-full md:w-40 text-center hover:shadow-md hover:border-primary/30 hover:bg-primary/5 transition group">
                    <div className="text-3xl mb-2">{n.icon}</div>
                    <p className="font-bold text-bingo-dark group-hover:text-primary">{n.title}</p>
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{n.sub}</span>
                    <p className="text-[11px] text-slate-500 mt-2 leading-snug">{n.desc}</p>
                    <p className="text-[10px] text-primary mt-2">点击进入 →</p>
                  </button>
                  {i < 2 && <div className="text-2xl text-slate-300 hidden md:block">⟺</div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 等级对应关系表 */}
          <div className="overflow-x-auto">
            <h3 className="font-semibold text-bingo-dark mb-4">三大认证等级对应关系</h3>
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">认证阶段</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">机构认证</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">教师认证</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">学员认证</th>
                  <th className="text-left py-3 px-4 text-slate-600 font-medium">对应课程</th>
                </tr>
              </thead>
              <tbody>
                {FOUR_STAGES.map((s, i) => (
                  <tr key={s.key} className={'border-t border-slate-100 ' + (s.recommended ? 'bg-amber-50/50' : '')}>
                    <td className="py-3 px-4">
                      <span className={'text-xs font-bold px-2 py-0.5 rounded-full ' + s.tag}>{s.name}</span>
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-700">{s.name}认证（{s.stars}）</td>
                    <td className="py-3 px-4 text-xs text-slate-700">{s.teacherLevel}</td>
                    <td className="py-3 px-4 text-xs text-slate-700">{s.studentLevel}</td>
                    <td className="py-3 px-4 text-xs text-slate-700">{s.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 认证时间周期表 */}
          <div className="card p-6 bg-slate-50">
            <h3 className="font-semibold text-bingo-dark mb-4">认证时间周期</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {[
                { type: '机构认证', icon: '🏫', times: ['启智阶：4-5周', '基础阶：5-6周', '精研阶：6-7周', '智创阶：7-8周'] },
                { type: '教师认证', icon: '👨‍🏫', times: ['基础教师：2-3周', '高级教师：3-4周', '培训师：4-5周'] },
                { type: '学员认证', icon: '🎓', times: ['L1（1-2星）：1-2周', 'L2（3-6星）：1-2周', 'L3（7-8星）：2周', 'L4（9星）：2-3周'] },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
                  <p className="font-semibold text-sm text-bingo-dark mb-3">{item.icon} {item.type}</p>
                  <ul className="space-y-1.5">
                    {item.times.map((t, j) => (
                      <li key={j} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />{t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">提供加急通道（需额外费用），满足紧急认证需求，请联系商务顾问</p>
          </div>

          {/* 证书用途分类 */}
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">证书用途说明</h3>
            <div className="space-y-4">
              {[
                { type: '机构证书', icon: '🏫', color: 'bg-sky-50 border-sky-200/60', uses: ['招生宣传材料中使用', '机构合作洽谈展示', '政府项目申报背书', '品牌建设与授牌展示'] },
                { type: '教师证书', icon: '👨‍🏫', color: 'bg-emerald-50 border-emerald-200/60', uses: ['职业晋升与薪资谈判', '缤果认证机构求职', '教研活动参与资格', '定向机构推荐就业'] },
                { type: '学员证书', icon: '🎓', color: 'bg-violet-50 border-violet-200/60', uses: ['升学综评申报材料', '白名单赛事报名加分', '强基计划/自主招生背书', '海外升学作品集Portfolio'] },
              ].map((c, i) => (
                <div key={i} className={'card p-4 border ' + c.color}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{c.icon}</span>
                    <p className="font-semibold text-bingo-dark text-sm">{c.type}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {c.uses.map((u, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="text-emerald-500">✓</span>{u}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'issuance' && (
        <div className="space-y-7">
          <div>
            <h2 className="text-2xl font-bold text-bingo-dark mb-1">发牌中心体系</h2>
            <p className="text-slate-600 text-sm">缤果认证体系的监督与背书核心，确保认证公平公正，提升整体权威性</p>
          </div>

          {/* 发牌中心介绍 */}
          <div className="card p-6 bg-gradient-to-r from-bingo-dark to-slate-800 text-white">
            <h3 className="text-xl font-bold mb-2">发牌中心 · 职责与定位</h3>
            <p className="text-white/80 text-sm mb-4">作为认证体系的独立监督机构，负责认证审核监督、质量把关与纠纷处理，确保每一张认证证书的含金量</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {['认证审核监督', '定期质量复查', '品牌联合推广'].map((r, i) => (
                <div key={i} className="bg-white/15 rounded-xl p-3 flex items-center gap-2">
                  <span className="text-cyan-400 text-lg">✓</span>
                  <span className="text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 合作发牌机构 */}
          <div>
            <h3 className="font-semibold text-bingo-dark mb-4">合作发牌机构</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'XX人工智能教育协会', type: '行业协会', region: '全国', field: '负责全国机构认证审核与学员证书监督', logo: '🤝' },
                { name: 'XX师范大学教育学院', type: '教育机构', region: '华东区', field: '负责华东地区教师认证考核与培训', logo: '🎓' },
                { name: 'XX省教育科学研究院', type: '政府部门', region: '省级', field: '负责省级学员认证背书与政策对接', logo: '🏛️' },
                { name: 'XX创新教育联盟', type: '行业协会', region: '华南区', field: '负责华南地区机构认证推广与联合评审', logo: '🔗' },
                { name: 'XX职业技术教育学会', type: '教育机构', region: '全国', field: '职业教育方向认证背书与标准制定', logo: '📋' },
                { name: '缤果AI学院认证委员会', type: '平台委员会', region: '全国', field: '总负责：授牌颁证、体系维护、纠纷处理', logo: '⭐' },
              ].map((d, i) => (
                <div key={i} className="card p-5 hover:shadow-md hover:border-primary/30 transition">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{d.logo}</span>
                    <div>
                      <p className="font-semibold text-sm text-bingo-dark">{d.name}</p>
                      <div className="flex gap-1 mt-0.5">
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{d.type}</span>
                        <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">{d.region}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">{d.field}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 监督投诉 */}
          <div className="card p-6 bg-slate-50">
            <h3 className="font-semibold text-bingo-dark mb-4">监督与投诉渠道</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <p className="font-semibold text-sm text-bingo-dark mb-1">📝 在线投诉表单</p>
                <p className="text-xs text-slate-500 mb-3">填写投诉内容并上传证据材料，3个工作日内响应</p>
                <button type="button" className="text-xs btn-primary px-4 py-2">提交投诉</button>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <p className="font-semibold text-sm text-bingo-dark mb-1">📞 监督电话</p>
                <p className="text-xs text-slate-500 mb-1">工作日 9:00-18:00</p>
                <p className="text-sm font-bold text-primary">400-XXX-XXXX</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">承诺：所有投诉 3 个工作日内响应，重大投诉 1 个工作日内启动调查</p>
          </div>

          {/* 合作申请 */}
          <div className="max-w-xl">
            <h3 className="font-semibold text-bingo-dark mb-4">发牌中心合作申请</h3>
            <div className="card p-5 bg-primary/5 border-primary/20 mb-5">
              <h4 className="font-semibold text-bingo-dark text-sm mb-2">合作优势</h4>
              <ul className="space-y-1">
                {['品牌联合推广，提升机构知名度', '认证收益分成，长期稳定收益', '行业资源对接，扩大合作网络'].map((a, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                    <span className="text-primary">✓</span>{a}
                  </li>
                ))}
              </ul>
            </div>
            {partnerSubmitted ? (
              <div className="card p-8 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <p className="font-bold text-bingo-dark mb-1">申请已提交！</p>
                <p className="text-slate-500 text-sm mb-4">专属客户经理将在 2 个工作日内对接，平均合作周期 4-6 周</p>
                <button onClick={() => setPartnerSubmitted(false)} className="btn-primary px-6 py-2.5 text-sm">返回</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setPartnerSubmitted(true) }} className="card p-6 space-y-4">
                <h4 className="font-bold text-bingo-dark">合作申请表单</h4>
                {[
                  { label: '机构名称 *', ph: '请输入机构全称' },
                  { label: '联系人 *', ph: '负责人姓名' },
                  { label: '联系电话 *', ph: '手机号' },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="text-sm font-medium text-slate-700 mb-1.5 block">{f.label}</label>
                    <input required type="text" placeholder={f.ph}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">合作意向</label>
                  <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white">
                    <option>负责区域认证审核</option>
                    <option>联合背书颁发</option>
                    <option>品牌联合推广</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">资质证明</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center text-slate-400 text-sm cursor-pointer hover:border-primary/40 transition">
                    点击上传营业执照/资质证书
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full py-3 text-sm">提交合作申请</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── 主组件 ───────────────────────────────────────────────

export default function Certification() {
  const [section, setSection] = useState('home')
  const [openFaq, setOpenFaq] = useState(null)
  const [guideSubmitted, setGuideSubmitted] = useState(false)

  function navTo(key) {
    setSection(key)
    window.scrollTo(0, 0)
  }

  if (section === 'inst') return <div className="max-w-7xl mx-auto px-4 py-8"><InstitutionCert onNav={navTo} /></div>
  if (section === 'student') return <div className="max-w-7xl mx-auto px-4 py-8"><StudentCert onNav={navTo} /></div>
  if (section === 'teacher') return <div className="max-w-7xl mx-auto px-4 py-8"><TeacherCert onNav={navTo} /></div>
  if (section === 'overview') return <div className="max-w-7xl mx-auto px-4 py-8"><CertOverview onNav={navTo} /></div>

  // ── 一级首页 ──────────────────────────────────────────
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Banner */}
      <section className="mb-10">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-bingo-dark via-slate-800 to-indigo-900 text-white p-8 sm:p-12">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs text-cyan-300 mb-2 tracking-wider">缤果AI学院 · 认证中心</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
              缤果AI认证体系<br />
              <span className="text-cyan-400">赋能教培机构 · 打造行业权威背书</span>
            </h1>
            <p className="text-slate-300 text-sm mb-1">九星课程认证 + 四阶成长体系，构建机构核心竞争力</p>
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {['机构授牌认证', '学员成长证书', '教师资质认定', '发牌中心背书'].map((t, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/15 text-white/90">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => navTo('inst')} className="bg-primary hover:bg-cyan-500 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition">立即咨询机构认证</button>
              <button onClick={() => navTo('overview')} className="bg-white/15 hover:bg-white/25 text-white px-5 py-2.5 rounded-xl text-sm transition">查看认证总览</button>
            </div>
          </div>
          <div className="absolute right-8 bottom-8 text-8xl opacity-10 select-none">🏆</div>
        </div>
      </section>

      {/* 四大核心入口 */}
      <section className="mb-10">
        <h2 className="section-title mb-4">核心认证体系</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { key: 'inst', icon: '🏫', title: '机构认证', sub: '重点推荐', desc: '九星·四阶认证，赋能教培机构打造品牌竞争力', highlight: '提升招生转化率30%+', badge: '核心', badgeColor: 'bg-primary/15 text-primary border-primary/30' },
            { key: 'student', icon: '🎓', title: '学员认证', sub: '双背书体系', desc: '四阶学员认证，认证机构+发牌中心双重背书', highlight: '可用于升学综评·赛事加分', badge: '新增双背书', badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
            { key: 'teacher', icon: '👨‍🏫', title: '教师认证', sub: '师资赋能', desc: '三类教师认证，保障教学质量，定向就业推荐', highlight: '认证教师优先机构推荐', badge: '含慧师计划', badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
            { key: 'overview', icon: '📊', title: '认证总览', sub: '体系导览', desc: '三位一体认证架构总览，等级对应表+发牌中心', highlight: '含发牌中心合作申请', badge: '含发牌中心', badgeColor: 'bg-amber-100 text-amber-700 border-amber-200' },
          ].map(n => (
            <button key={n.key} onClick={() => navTo(n.key)}
              className="card p-6 text-left hover:shadow-lg hover:border-primary/30 hover:bg-primary/5 transition group">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{n.icon}</span>
                <span className={'text-[10px] px-2 py-0.5 rounded-full border font-medium ' + n.badgeColor}>{n.badge}</span>
              </div>
              <h3 className="font-bold text-bingo-dark text-lg mb-0.5 group-hover:text-primary transition">{n.title}</h3>
              <p className="text-xs text-primary font-medium mb-2">{n.sub}</p>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">{n.desc}</p>
              <p className="text-xs text-emerald-600 font-medium">✓ {n.highlight}</p>
              <p className="text-xs text-primary mt-3 group-hover:underline">进入 {n.title} →</p>
            </button>
          ))}
        </div>
      </section>

      {/* 认证成果数据 */}
      <section className="mb-10">
        <h2 className="section-title mb-4">认证成果与影响力</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { num: '200+', label: '已认证机构', icon: '🏫', note: '覆盖全国20+省市' },
            { num: '15,000+', label: '认证学员人数', icon: '🎓', note: '年增长率 120%' },
            { num: '50+', label: '合作发牌机构', icon: '🏛️', note: '含行业协会/高校' },
            { num: '35', label: '九星课程覆盖城市', icon: '🌏', note: '持续扩展中' },
          ].map((s, i) => (
            <div key={i} className="card p-6 text-center hover:shadow-md hover:border-primary/30 transition">
              <div className="text-2xl mb-2">{s.icon}</div>
              <p className="text-2xl font-bold text-primary">{s.num}</p>
              <p className="text-sm text-bingo-dark font-medium mt-0.5">{s.label}</p>
              <p className="text-xs text-slate-400 mt-1">{s.note}</p>
            </div>
          ))}
        </div>

        {/* 机构案例滚动 */}
        <div className="card p-5">
          <h3 className="font-semibold text-bingo-dark mb-3">认证机构案例</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'XX智创教育', level: '智创阶', city: '北京', quote: '获得缤果认证后，招生转化率提升40%，品牌认知度显著提升' },
              { name: 'XX未来科技培训', level: '精研阶', city: '上海', quote: '认证体系帮我们规范了课程标准，家长信任度明显提高' },
              { name: 'XX AI少儿编程', level: '基础阶', city: '深圳', quote: '授牌认证是我们最重要的招生背书，学员续费率超过85%' },
            ].map((c, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">{c.name.charAt(0)}</div>
                  <div>
                    <p className="font-semibold text-sm text-bingo-dark">{c.name}</p>
                    <p className="text-[10px] text-slate-400">{c.level} · {c.city}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">"{c.quote}"</p>
              </div>
            ))}
          </div>
          <button onClick={() => navTo('inst')} className="mt-4 text-sm text-primary hover:underline">查看更多认证机构案例 →</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="section-title mb-4">常见问题</h2>
        <div className="space-y-2 mb-6">
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition">
                <span className="text-sm font-medium text-bingo-dark">{faq.q}</span>
                <span className={'text-slate-400 transition-transform shrink-0 ml-3 ' + (openFaq === i ? 'rotate-180' : '')}>▼</span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-sm text-slate-600 border-t border-slate-100 pt-3">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        {/* 免费领取认证指南 */}
        <div className="card p-6 bg-indigo-50 border-indigo-200/60">
          <h3 className="font-semibold text-bingo-dark mb-1">免费获取认证指南PDF</h3>
          <p className="text-sm text-slate-600 mb-4">填写手机号，立即获取《缤果AI学院认证中心完整指南》，含认证流程、费用、案例全解析</p>
          {guideSubmitted ? (
            <div className="flex items-center gap-3 text-emerald-600">
              <span className="text-xl">✅</span>
              <span className="text-sm font-medium">已发送至您的手机，请注意查收</span>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setGuideSubmitted(true) }} className="flex flex-wrap gap-2">
              <input required type="tel" placeholder="手机号码"
                className="border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary flex-1 min-w-[140px] bg-white" />
              <button type="submit" className="btn-primary text-sm px-5 py-2 shrink-0">免费获取</button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
