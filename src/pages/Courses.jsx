import { Link } from 'react-router-dom'

// AI精品课（含 AI工具库 整合）
const tabs = [
  { key: 'experience', name: '低价体验课', desc: '9.9元/19.9元 AI基础、职场入门' },
  { key: 'career', name: '职业教育精品课', desc: 'AI+岗位技能、学历提升' },
  { key: 'material', name: '教材/教具配套课程', desc: '同步图书知识点，带动教具复购' },
  { key: 'custom', name: '定制化AI课程', desc: '依托OEM基座，个性化学习' },
]

const stages = [
  { path: '/courses?stage=enlighten', name: '启蒙班', range: '3-12岁' },
  { path: '/courses?stage=advance', name: '进阶班', range: '10-14岁' },
  { path: '/courses?stage=contest', name: '竞赛班', range: '14-18岁' },
  { path: '/courses?stage=exam', name: '升学护航班', range: '高中' },
  { path: '/courses?stage=career', name: '就业衔接班', range: '18+' },
]

const toolItems = [
  { title: '免费基础工具', desc: 'AI题库、知识点检索、作业批改、教材配套工具' },
  { title: '付费进阶工具', desc: 'AI论文辅助、技能实训、赛事答题工具' },
  { title: '教具联动工具', desc: '适配自有教具的AI实操工具' },
  { title: 'OEM工具定制', desc: '面向C端轻量化AI工具定制' },
]

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI精品课</h1>
      <p className="text-slate-600 mb-6">课程分类（素养/培优/升学/就业/家长）→ 课程列表 → 课程详情 → 学习中心；大纲/讲师/评价/试看、佣金比例与分享、微信支付/优惠券/拼团、教具联动</p>

      <section className="mb-10">
        <h2 className="section-title">竞赛培优课 · 升学赋能课 · 与精品课对应</h2>
        <div className="card p-6 bg-slate-50 mb-6">
          <p className="text-slate-600 text-sm mb-2"><strong>竞赛培优课</strong>：交付形式为「集训营 + 模拟赛 + 真题精讲 + 一对一答疑」，在精品课中对应「竞赛班」阶段及「赛事集训营」专题课，支持按赛事/等级筛选。</p>
          <p className="text-slate-600 text-sm"><strong>升学赋能课</strong>：交付形式为「科技特长生路径课 + 综评/强基材料辅导 + 真题与模拟」，在精品课中对应「升学护航班」阶段及「科技特长生」标签，与成长计划中的升学套餐可组合购买。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">AI精品课与成长计划的对应与区别</h2>
        <div className="card p-6 border-primary/20">
          <p className="text-slate-600 text-sm"><strong>AI精品课</strong>：单课选购，按阶段/类型选课，即买即学，适合有明确单课需求的用户。</p>
          <p className="text-slate-600 text-sm mt-2"><strong>成长计划</strong>：先做AI能力测评 → 生成个性化学习路径 → 购买阶段套餐（启蒙/进阶/竞赛/升学/就业）→ 学习跟踪、打卡、1v1导师。适合希望「测评+路径+套餐+长期跟进」一站式服务的用户。成长计划中的套餐会包含多门精品课，并配套教材/教具与导师服务。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">按阶段选课</h2>
        <div className="flex flex-wrap gap-3">
          {stages.map((s) => (
            <Link key={s.name} to={s.path} className="card px-5 py-3 hover:shadow-md hover:border-primary/30">
              <span className="font-medium">{s.name}</span>
              <span className="text-slate-500 text-sm ml-2">{s.range}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">课程类型</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tabs.map((t) => (
            <div key={t.key} className="card p-6">
              <h3 className="font-semibold text-primary">{t.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-xs mt-2">* 原「通识课」升级为面向未来、指向素养的AI素养课（不止于工具课，强调元认知与素养）</p>
      </section>

      <section className="mb-10">
        <h2 className="section-title">课程详情与学习中心</h2>
        <p className="text-slate-600 text-sm mb-4">课程详情：大纲、讲师、评价、试看、课程佣金比例展示、分享按钮（生成海报/链接）。购买：微信支付、优惠券、拼团。学习中心：播放、倍速、笔记、答疑、作业提交；已学/未学、完成度、证书获取条件。</p>
      </section>

      <section className="mb-10">
        <h2 className="section-title">AI工具库 · 教具联动</h2>
        <p className="text-slate-600 text-sm mb-4">课程页可跳转商城购买配套教具，教具同步展示佣金比例；免费/付费工具、OEM定制</p>
        <div className="grid md:grid-cols-2 gap-4">
          {toolItems.map((item, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
