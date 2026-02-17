// AI成果展 - 含小小AI创业家、缤果AI学院10万奖金 等栏目
export default function Showcase() {
  const sections = [
    { title: '学员AI作品与学习成果', desc: '图文+视频' },
    { title: '赛事获奖案例、职业教育就业案例', desc: '' },
    { title: '教具实操成果、教材学习落地案例', desc: '' },
    { title: 'AI OEM合作成果展示', desc: '轻量化公信力展示' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI成果展</h1>
      <p className="text-gray-600 mb-8">打造可视化信任背书，降低决策成本，激发学习/消费意愿</p>

      <section className="mb-10">
        <h2 className="section-title">小小AI创业家</h2>
        <div className="card p-6 border-primary/20">
          <p className="text-gray-600">展示青少年在AI应用与创新项目中的创业实践与成果。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">缤果AI学院10万奖金</h2>
        <div className="card p-6 border-primary/20 bg-cyan-50/50">
          <p className="text-gray-600">年度重磅激励计划，总奖金10万元，激励学员与教师参与赛事、认证与成果产出。</p>
        </div>
      </section>

      <section>
        <h2 className="section-title">成果展示</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{s.title}</h3>
              {s.desc && <p className="text-sm text-gray-500 mt-1">{s.desc}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
