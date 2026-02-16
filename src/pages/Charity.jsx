// 缤果公益行 - 公益助学、公益赛事、打卡、成果
export default function Charity() {
  const items = [
    { title: '公益助学活动', desc: '捐赠教材/教具、免费公益课，面向青少年/弱势群体' },
    { title: '公益赛事', desc: '公益主题AI赛事，提升品牌影响力' },
    { title: '公益打卡', desc: '用户参与打卡，平台捐赠公益基金' },
    { title: '公益成果展示', desc: '强化品牌公信力，带动潜在C端消费' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">缤果公益行</h1>
      <p className="text-gray-600 mb-8">提升品牌美誉度，传递社会责任，带动品牌传播</p>
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
