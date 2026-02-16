// 成长计划 - 套餐、AI测评、打卡积分、导师
export default function Growth() {
  const items = [
    { title: '分阶段成长套餐', desc: '入门-进阶-精通，配套教材、课程、教具' },
    { title: '个性化成长规划', desc: 'AI测评+定制学习方案' },
    { title: '成长打卡、积分奖励', desc: '积分可兑换教材/教具、课程优惠券' },
    { title: '长期导师跟进', desc: '一对一指导，提升留存' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">成长计划</h1>
      <p className="text-gray-600 mb-8">阶梯式学习体系，提升用户生命周期价值</p>
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
