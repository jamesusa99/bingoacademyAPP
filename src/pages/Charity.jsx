// 缤果公益与报道
export default function Charity() {
  const items = [
    { title: '公益助学活动', desc: '捐赠教材/教具、免费公益课，面向青少年/弱势群体' },
    { title: '公益赛事', desc: '公益主题AI赛事，提升品牌影响力' },
    { title: '公益打卡', desc: '用户参与打卡，平台捐赠公益基金' },
    { title: '公益成果展示', desc: '强化品牌公信力，带动潜在C端消费' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">缤果公益与报道</h1>
      <p className="text-slate-600 mb-6">公益项目列表 → 项目详情 → 参与入口 → 成果展示。公益课、公益赛事、教具捐赠（分享无佣金，仅增加公益积分）；报名/打卡捐赠、受助案例与数据；机构/企业公益合作申请入口</p>
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
