// AI成果展 - 学员作品、获奖案例、教具成果、OEM合作展示
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
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((s, i) => (
          <div key={i} className="card p-6">
            <h3 className="font-semibold text-primary">{s.title}</h3>
            {s.desc && <p className="text-sm text-gray-500 mt-1">{s.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
