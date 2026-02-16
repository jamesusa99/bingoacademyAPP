import { Link } from 'react-router-dom'

// AI智能商城 - 自有/定制产品、组合套餐、会员秒杀
export default function Mall() {
  const items = [
    { title: '自有产品', desc: '图书教材、AI教具、课程套餐、认证资料' },
    { title: '定制化产品', desc: '依托OEM基座，定制AI课程、教具、学习工具' },
    { title: '组合套餐', desc: '课程+教材+教具一站式，提升客单价' },
    { title: '会员专属折扣、限时秒杀、满减活动', desc: '' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI智能商城</h1>
      <p className="text-gray-600 mb-8">核心变现阵地，承接所有C端消费，交叉转化</p>
      <div className="mb-6">
        <Link to="/materials" className="btn-primary">进入学材物资中心 →</Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="card p-6">
            <h3 className="font-semibold text-primary">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
