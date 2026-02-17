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
      <p className="text-gray-600 mb-8">按阶段选课、课程类型与AI工具库一站式呈现</p>

      <section className="mb-10">
        <h2 className="section-title">按阶段选课</h2>
        <div className="flex flex-wrap gap-3">
          {stages.map((s) => (
            <Link key={s.name} to={s.path} className="card px-5 py-3 hover:shadow-md hover:border-primary/30">
              <span className="font-medium">{s.name}</span>
              <span className="text-gray-500 text-sm ml-2">{s.range}</span>
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
              <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">AI工具库</h2>
        <p className="text-gray-600 text-sm mb-4">免费/付费工具、教具联动、OEM定制，与课程学习配套使用</p>
        <div className="grid md:grid-cols-2 gap-4">
          {toolItems.map((item, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
