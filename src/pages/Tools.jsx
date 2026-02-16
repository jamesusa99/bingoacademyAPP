// AI工具库 - 免费/付费工具、教具联动、OEM定制
export default function Tools() {
  const items = [
    { title: '免费基础工具', desc: 'AI题库、知识点检索、作业批改、教材配套工具' },
    { title: '付费进阶工具', desc: 'AI论文辅助、技能实训、赛事答题工具' },
    { title: '教具联动工具', desc: '适配自有教具的AI实操工具' },
    { title: 'OEM工具定制入口', desc: '面向C端轻量化AI工具定制' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI工具库</h1>
      <p className="text-gray-600 mb-8">强化AI核心优势，差异化竞争力，带动高价值转化</p>
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
