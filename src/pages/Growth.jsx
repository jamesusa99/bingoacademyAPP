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
      <p className="text-slate-600 mb-6">AI能力测评 → 学习方案生成 → 阶段套餐 → 学习跟踪。入门/进阶/高阶测评、个性化学习路径、启蒙/进阶/竞赛/升学/就业套餐（套餐佣金比例与分享）、学习日历/任务打卡/积分兑换、1v1导师跟进（导师可分享学员方案赚佣金）</p>
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
