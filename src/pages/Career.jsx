// 就业直通车 - 就业服务、招聘、能力课、案例
export default function Career() {
  const items = [
    { title: '职业教育配套就业服务', desc: '简历优化、面试辅导、企业内推' },
    { title: 'AI相关岗位招聘信息', desc: '精准匹配学员技能' },
    { title: '就业能力提升课', desc: '职场礼仪、岗位实操、AI工具应用' },
    { title: '就业案例展示、学员反馈', desc: '强化信任' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">就业直通车</h1>
      <p className="text-gray-600 mb-8">学习-就业闭环，提升客单价与付费动机</p>
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
