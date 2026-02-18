import { Link } from 'react-router-dom'

// 科学研学 - 一级界面
export default function Research() {
  const modules = [
    { title: '科学实践营', desc: '线下/营地研学、科学探究项目', to: '/research' },
    { title: 'AI+科学主题', desc: 'AI与科创结合的研学课程与活动', to: '/research' },
    { title: '研学报名与日程', desc: '场次、时间、报名入口', to: '/research' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">科学研学</h1>
      <p className="text-slate-600 mb-8">科学实践、AI+科创研学，探索与成长</p>
      <div className="grid md:grid-cols-3 gap-4">
        {modules.map((item, i) => (
          <Link key={i} to={item.to} className="card p-6 hover:shadow-md transition block">
            <h3 className="font-semibold text-primary">{item.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
