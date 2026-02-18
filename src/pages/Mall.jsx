import { Link, useLocation } from 'react-router-dom'

// AI智能商城（含学材物资中心）
const subNav = [
  { path: '/mall', label: '智能商城' },
  { path: '/mall/materials', label: '学材物资中心' },
]

export default function Mall() {
  const loc = useLocation()
  const items = [
    { title: '自有产品', desc: '图书教材、AI教具、课程套餐、认证资料' },
    { title: '定制化产品', desc: '依托OEM基座，定制AI课程、教具、学习工具' },
    { title: '组合套餐', desc: '课程+教材+教具一站式，提升客单价' },
    { title: '会员专属折扣、限时秒杀、满减活动', desc: '' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-bingo-dark">AI智能商城</h1>
        {subNav.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              loc.pathname === path ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <p className="text-slate-600 mb-6">商品分类（课程/教材/教具/工具/1v1辅导）→ 商品列表 → 详情（佣金比例+分享）→ 购物车 → 结算。组合套餐、会员专属价/秒杀/拼团/满减、会员推广佣金翻倍；分享订单自动绑定推广人</p>
      <div className="mb-6">
        <Link to="/mall/materials" className="btn-primary">进入学材物资中心 →</Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="card p-6">
            <h3 className="font-semibold text-primary">{item.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
