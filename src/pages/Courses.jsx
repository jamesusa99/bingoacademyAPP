import { Link } from 'react-router-dom'

// AI精品课 - 体验课、职业教育、教材教具配套、定制课
const tabs = [
  { key: 'experience', name: '低价体验课', desc: '9.9元/19.9元 AI基础、职场入门' },
  { key: 'career', name: '职业教育精品课', desc: 'AI+岗位技能、学历提升' },
  { key: 'material', name: '教材/教具配套课程', desc: '同步图书知识点，带动教具复购' },
  { key: 'custom', name: '定制化AI课程', desc: '依托OEM基座，个性化学习' },
]

// 课程中心分层 - PDF2
const stages = [
  { path: '/courses?stage=enlighten', name: '启蒙班', range: '3-12岁' },
  { path: '/courses?stage=advance', name: '进阶班', range: '10-14岁' },
  { path: '/courses?stage=contest', name: '竞赛班', range: '14-18岁' },
  { path: '/courses?stage=exam', name: '升学护航班', range: '高中' },
  { path: '/courses?stage=career', name: '就业衔接班', range: '18+' },
]

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI精品课</h1>
      <p className="text-gray-600 mb-8">核心流量入口，低门槛引流+首单转化，联动教材/教具销售</p>

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

      <section>
        <h2 className="section-title">课程类型</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tabs.map((t) => (
            <div key={t.key} className="card p-6">
              <h3 className="font-semibold text-primary">{t.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
              <p className="text-xs text-primary mt-3">分享本课程可得 10%-20% 分佣</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
