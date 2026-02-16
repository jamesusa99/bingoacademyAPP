import { Link } from 'react-router-dom'

// 学习中心（归属个人中心）
export default function Study() {
  const items = [
    { title: '课程学习', desc: 'AI双师课直播/回放、虚拟实验室、编程练习、课后作业' },
    { title: '进度追踪', desc: '课程完成度、知识点掌握、学习报告、家长端查看' },
    { title: '赛事备赛', desc: '历年真题、模拟竞赛、教练1对1答疑、备赛社群' },
    { title: '成果展示', desc: '获奖证书、项目作品、能力成长图谱；分享得积分或分佣' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/profile" className="text-gray-500 hover:text-primary text-sm">← 个人中心</Link>
      </div>
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">学习中心</h1>
      <p className="text-gray-600 mb-8">直播回放、虚拟实验室、学习进度与成果分享</p>
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
