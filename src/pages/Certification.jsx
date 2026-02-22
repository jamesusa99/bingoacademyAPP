import React, { useState } from 'react'

// 认证中心 - 面向教师、机构、学校；机构认证、教师认证、慧师计划、学员认证
const INSTITUTION_STEPS = [
  { step: 1, title: '提交申请', desc: '机构在线填写认证申请，提交资质与办学信息' },
  { step: 2, title: '资质审核', desc: '平台对机构资质、场地、师资进行初审' },
  { step: 3, title: '实地/材料核验', desc: '根据需要安排实地考察或补充材料核验' },
  { step: 4, title: '签约授牌', desc: '审核通过后签约，授予合作机构牌匾与授权' },
  { step: 5, title: '持续督导', desc: '定期复评、师训与运营支持，保障认证质量' },
]

// ─── 学员认证数据 ─────────────────────────────────────────
const STUDENT_CERTS = [
  {
    id: 'ai-basic',
    level: 'L1',
    name: 'AI通识能力认证',
    badge: '🌱',
    ageRange: '8-12岁',
    color: 'from-emerald-400 to-teal-500',
    lightColor: 'bg-emerald-50 border-emerald-200/60',
    tagColor: 'bg-emerald-100 text-emerald-700',
    desc: '面向青少年的AI基础认知与工具应用能力认证，覆盖AI通识、不插电实验、基础机器人实操',
    scope: ['AI基础概念与应用', '不插电实验与科学思维', '简单机器人搭建操作', 'AI工具初步体验'],
    output: 'AI通识能力初级证书',
    method: '线上闭卷测评 + 实操作品提交',
    duration: '约 60 分钟',
    price: '¥198',
    match: '青少年AI创新挑战赛 · 学校科技活动背书',
    upgrade: 'ai-intermediate',
  },
  {
    id: 'ai-intermediate',
    level: 'L2',
    name: 'AI创造力应用认证',
    badge: '🚀',
    ageRange: '10-15岁',
    color: 'from-sky-400 to-blue-500',
    lightColor: 'bg-sky-50 border-sky-200/60',
    tagColor: 'bg-sky-100 text-sky-700',
    desc: '聚焦AI工具创意应用与项目制作能力，涵盖AIGC、数据分析基础、机器人竞赛入门',
    scope: ['AIGC创意设计与提示词工程', '数据采集与可视化基础', '机器人竞赛入门实操', '小型AI项目独立完成'],
    output: 'AI创造力应用中级证书',
    method: '线上笔试 + 项目作品集提交 + 在线答辩',
    duration: '约 90 分钟',
    price: '¥298',
    match: '全国青少年AI创新大赛 · 综评素材 · 科技特长生申报',
    upgrade: 'ai-advanced',
  },
  {
    id: 'ai-advanced',
    level: 'L3',
    name: 'AI科创研究认证',
    badge: '🏆',
    ageRange: '13-18岁',
    color: 'from-violet-500 to-purple-600',
    lightColor: 'bg-violet-50 border-violet-200/60',
    tagColor: 'bg-violet-100 text-violet-700',
    desc: '面向具备一定基础的青少年，认证其独立完成AI课题研究、模型训练与成果答辩的能力',
    scope: ['机器学习模型训练与优化', '课题研究方法与报告撰写', 'AI工程实践（Python/TensorFlow基础）', '科研成果答辩与表达'],
    output: 'AI科创研究高级证书 + 高校导师评审意见',
    method: '课题报告提交 + 模型成果展示 + 专家评审答辩',
    duration: '约 120 分钟',
    price: '¥498',
    match: '强基计划科研能力证明 · 综评核心材料 · 海外升学作品集',
    upgrade: null,
  },
  {
    id: 'data-science',
    level: 'L2',
    name: '数据科学素养认证',
    badge: '📊',
    ageRange: '12-18岁',
    color: 'from-amber-400 to-orange-500',
    lightColor: 'bg-amber-50 border-amber-200/60',
    tagColor: 'bg-amber-100 text-amber-700',
    desc: '专项认证青少年数据分析、可视化与数据思维能力，适配数据科学类赛事与综评材料',
    scope: ['数据采集与清洗基础', '数据可视化图表制作', '统计分析基础应用', '数据科学报告撰写'],
    output: '数据科学素养证书',
    method: '线上笔试 + 数据分析报告提交',
    duration: '约 90 分钟',
    price: '¥268',
    match: '信息学联赛辅助材料 · 综评佐证 · 竞赛备赛能力证明',
    upgrade: null,
  },
  {
    id: 'robot',
    level: 'L2',
    name: '机器人工程实践认证',
    badge: '🤖',
    ageRange: '10-18岁',
    color: 'from-cyan-400 to-teal-500',
    lightColor: 'bg-cyan-50 border-cyan-200/60',
    tagColor: 'bg-cyan-100 text-cyan-700',
    desc: '认证青少年机器人搭建、编程控制与赛事实操能力，直接衔接机器人类竞赛参赛资格',
    scope: ['机器人结构搭建与调试', '图形化/代码编程控制', '竞赛任务规则理解与执行', '故障排查与优化迭代'],
    output: '机器人工程实践证书',
    method: '实操考核（现场搭建+调试）+ 理论笔试',
    duration: '约 120 分钟（现场考核）',
    price: '¥368',
    match: '世界机器人大赛 · 全国青少年机器人大赛 · 竞赛报名加分',
    upgrade: null,
  },
]

const CERT_PROCESS = [
  { step: 1, icon: '📋', title: '选择认证', desc: '按年龄段与发展方向选择合适认证，查看详情与备考资料' },
  { step: 2, icon: '📚', title: '备考准备', desc: '购买备考课程或下载备考资料，按大纲系统学习' },
  { step: 3, icon: '📅', title: '预约考核', desc: '选择考核时间（线上/线下），提交报名信息与费用' },
  { step: 4, icon: '✍️', title: '参加考核', desc: '完成线上测评或现场实操，提交作品/报告' },
  { step: 5, icon: '📜', title: '获取证书', desc: '考核通过后 7 个工作日内颁发电子证书，支持下载、打印、在线验证' },
]

// ─── 主组件 ────────────────────────────────────────────────
export default function Certification() {
  const [studentTab, setStudentTab] = useState('overview')
  const [selectedCert, setSelectedCert] = useState(null)
  const [ageFilter, setAgeFilter] = useState('all')
  const [applyForm, setApplyForm] = useState({ name: '', phone: '', certId: '' })
  const [applySubmitted, setApplySubmitted] = useState(false)

  const teacherItems = [
    { title: '教师认证', desc: '面向教师与培训师的AI教学能力认证' },
    { title: '职业教育相关认证', desc: '对接行业标准，提升证书含金量' },
    { title: '教学法与AI工具认证', desc: '双师课、教具使用、赛事指导能力认证' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">认证中心</h1>
      <p className="text-slate-600 mb-4">面向教师、机构、学校。认证列表 → 认证详情 → 报名 → 备考 → 考核 → 证书；认证辅导课佣金比例、备考资料/课程分享；证书查询/下载/分享；认证与就业/升学挂钩（产教融合企业优先录用）</p>
      <div className="card p-6 bg-amber-50/60 border-amber-200/50 mb-8">
        <h3 className="font-semibold text-bingo-dark mb-2">权威性与国际性</h3>
        <p className="text-slate-600 text-sm">认证体系对接教育部白名单赛事与行业标准，部分认证获国际机构认可，证书可在升学综评、留学与就业场景中作为能力证明。合作机构与认证背书持续更新，详见各认证详情页。</p>
      </div>

      {/* 机构认证：模块化流程（一模块 → 下一模块） */}
      <section className="mb-10">
        <h2 className="section-title">机构认证</h2>
        <p className="text-slate-600 text-sm mb-6">教培机构、学校申请成为缤果AI学院认证合作机构，获得授牌与课程/赛事授权</p>
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-2">
          {INSTITUTION_STEPS.map((item, i) => (
            <React.Fragment key={item.step}>
              {/* 模块 */}
              <div className="card p-5 flex-1 min-w-0 border-primary/20 bg-white hover:shadow-md transition mb-4 lg:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {item.step}
                  </span>
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600 pl-9">{item.desc}</p>
              </div>
              {/* 衔接：到下一模块 */}
              {i < INSTITUTION_STEPS.length - 1 && (
                <div className="flex items-center justify-center lg:flex-col lg:w-10 lg:shrink-0 text-slate-400">
                  <span className="lg:rotate-90 lg:mb-1">→</span>
                  <span className="text-xs ml-2 lg:ml-0">下一步</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 教师认证 */}
      <section className="mb-10">
        <h2 className="section-title">教师认证</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {teacherItems.map((item, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              {item.desc && <p className="text-sm text-slate-600 mt-1">{item.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 慧师计划：放在教师认证下面 */}
      <section className="mb-10">
        <h2 className="section-title">慧师计划</h2>
        <p className="text-slate-600 text-sm mb-6">面向教师、机构、学校的学习、培训与能力提升，助力掌握AI教学、赛事指导与素养课程落地</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-6 border-primary/20 hover:shadow-md transition">
            <h3 className="font-semibold text-primary">教师学习</h3>
            <p className="text-sm text-slate-600 mt-1">AI素养与元认知课程、AI工具在教学中的应用，支持按阶段进阶学习</p>
          </div>
          <div className="card p-6 border-primary/20 hover:shadow-md transition">
            <h3 className="font-semibold text-primary">师资培训</h3>
            <p className="text-sm text-slate-600 mt-1">线下/线上师训、教材教具使用培训、赛事带赛能力培训、双师课实操</p>
          </div>
          <div className="card p-6 border-primary/20 hover:shadow-md transition">
            <h3 className="font-semibold text-primary">能力提升与认证</h3>
            <p className="text-sm text-slate-600 mt-1">教师认证、教学法认证、AI工具认证，提升教学与带赛能力</p>
          </div>
        </div>
      </section>

      {/* ── 学员认证 ── */}
      <section id="student-cert">
        <h2 className="section-title mb-1">学员认证</h2>
        <p className="text-slate-600 text-sm mb-5">面向6-18岁青少年学员，覆盖AI通识、数据科学、机器人工程等方向，认证成果可用于赛事报名、综评申报、强基计划与升学背书</p>

        {/* 认证流程 */}
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
                  <div className="flex items-center justify-center sm:pt-4 px-1 text-slate-300 text-lg">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tab 切换 */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {[['overview', '认证项目总览'], ['detail', '认证详情'], ['apply', '在线报名']].map(([k, l]) => (
            <button key={k} onClick={() => setStudentTab(k)}
              className={'px-5 py-1.5 rounded-full text-sm font-medium transition ' + (studentTab === k ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>{l}</button>
          ))}
        </div>

        {/* ── 认证总览 ── */}
        {studentTab === 'overview' && (
          <div className="space-y-5">
            {/* 年龄筛选 */}
            <div className="flex gap-2 flex-wrap">
              {[['all', '全部'], ['8-12', '8-12岁'], ['10-15', '10-15岁'], ['13-18', '13-18岁']].map(([k, l]) => (
                <button key={k} onClick={() => setAgeFilter(k)}
                  className={'px-4 py-1.5 rounded-full text-xs transition ' + (ageFilter === k ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>{l}</button>
              ))}
            </div>

            {/* 认证卡片列表 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {STUDENT_CERTS.filter(c =>
                ageFilter === 'all' || c.ageRange.includes(ageFilter.split('-')[0]) || c.ageRange.includes(ageFilter.split('-')[1])
              ).map(cert => (
                <div key={cert.id}
                  className={'card p-6 hover:shadow-md transition cursor-pointer border ' + cert.lightColor}
                  onClick={() => { setSelectedCert(cert); setStudentTab('detail') }}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={'inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ' + cert.tagColor}>
                      {cert.badge} {cert.level}
                    </div>
                    <span className="text-xs text-slate-400">{cert.ageRange}</span>
                  </div>
                  <h3 className="font-bold text-bingo-dark mb-1">{cert.name}</h3>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed">{cert.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">{cert.price}</span>
                    <button type="button"
                      onClick={e => { e.stopPropagation(); setSelectedCert(cert); setStudentTab('detail') }}
                      className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition">查看详情</button>
                  </div>
                </div>
              ))}
            </div>

            {/* 证书说明 */}
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
        {studentTab === 'detail' && (
          <div>
            {/* 认证切换导航 */}
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
                {/* 头部 */}
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

                {/* 详情网格 */}
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

                {/* 进阶路径提示 */}
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

                {/* 操作按钮 */}
                <div className="flex flex-wrap gap-3 pt-5 border-t border-slate-100">
                  <button onClick={() => { setApplyForm(f => ({ ...f, certId: selectedCert.id })); setStudentTab('apply') }}
                    className="btn-primary px-6 py-2.5 text-sm">立即报名考核</button>
                  <button type="button" className="rounded-lg border border-primary text-primary px-5 py-2.5 text-sm hover:bg-primary/10 transition">下载备考大纲</button>
                  <button type="button" className="rounded-lg border border-slate-200 text-slate-600 px-5 py-2.5 text-sm hover:bg-slate-50 transition">查询/分享证书</button>
                </div>
              </div>
            ) : (
              <div className="card p-10 text-center text-slate-400">
                <p>请从上方选择一个认证项目查看详情</p>
                <button onClick={() => setStudentTab('overview')} className="btn-primary text-sm px-5 py-2 mt-4">返回认证总览</button>
              </div>
            )}
          </div>
        )}

        {/* ── 在线报名 ── */}
        {studentTab === 'apply' && (
          <div className="max-w-xl">
            {applySubmitted ? (
              <div className="card p-10 text-center">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="font-bold text-bingo-dark text-xl mb-2">报名提交成功！</h3>
                <p className="text-slate-600 mb-1">1-2 个工作日内专人联系，确认考核时间</p>
                <p className="text-slate-500 text-sm mb-6">确认信息已发送至您预留的手机号</p>
                <div className="flex gap-3 justify-center">
                  <button onClick={() => { setApplySubmitted(false); setStudentTab('overview') }} className="btn-primary text-sm px-5 py-2">返回认证总览</button>
                  <button onClick={() => setApplySubmitted(false)} className="rounded-lg border border-slate-200 text-slate-600 text-sm px-5 py-2 hover:bg-slate-50">再次报名</button>
                </div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setApplySubmitted(true) }} className="card p-8 space-y-5">
                <h3 className="font-bold text-bingo-dark text-lg">学员认证报名</h3>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">选择认证项目 *</label>
                  <select required
                    value={applyForm.certId}
                    onChange={e => setApplyForm(f => ({ ...f, certId: e.target.value }))}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white">
                    <option value="">请选择认证项目</option>
                    {STUDENT_CERTS.map(c => (
                      <option key={c.id} value={c.id}>{c.badge} {c.name}（{c.ageRange}）—— {c.price}</option>
                    ))}
                  </select>
                </div>

                {[
                  { label: '学员姓名', type: 'text', key: 'name', ph: '请输入学员姓名', req: true },
                  { label: '学员年龄', type: 'number', key: 'age', ph: '请输入学员年龄', req: true },
                  { label: '联系电话', type: 'tel', key: 'phone', ph: '家长手机号（用于接收确认信息）', req: true },
                  { label: '家长姓名', type: 'text', key: 'parent', ph: '请输入家长姓名', req: true },
                ].map(f => (
                  <div key={f.key}>
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
                  <label className="text-sm font-medium text-slate-700 mb-1.5 block">备注信息</label>
                  <textarea rows={2} placeholder="如是否需要备考辅导、已有学习基础等（选填）"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" />
                </div>

                <div className="flex items-start gap-2">
                  <input required type="checkbox" id="cert-agree" className="mt-1" />
                  <label htmlFor="cert-agree" className="text-sm text-slate-600">
                    我已阅读并同意 <button type="button" className="text-primary hover:underline">《认证报名须知》</button> 与 <button type="button" className="text-primary hover:underline">《退费政策》</button>
                  </label>
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="submit" className="btn-primary flex-1 py-3 text-sm">提交报名</button>
                  <button type="reset" className="flex-1 border border-slate-200 rounded-lg py-3 text-sm text-slate-600 hover:bg-slate-50">重置表单</button>
                </div>
              </form>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
