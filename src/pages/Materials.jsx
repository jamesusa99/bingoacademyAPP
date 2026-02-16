// 学材物资中心 - PDF2 专属板块：图书+教具+工具包
const tabs = [
  { key: 'book', name: '图书类', desc: '课程配套教材、竞赛备赛图书、AI通识、升学指导' },
  { key: 'tool', name: '教具类', desc: 'AI实验教具、编程教具、实验器材、学习文具' },
  { key: 'kit', name: '工具包类', desc: '编程工具包、赛事备赛工具包、课程配套工具包' },
]
export default function Materials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">学材物资中心</h1>
      <p className="text-gray-600 mb-8">一站式采购，贴合AI教育、编程学习、赛事备赛；分享可得 8%-12% 分佣</p>

      <section className="mb-8">
        <h2 className="section-title">物资分类</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {tabs.map((t) => (
            <div key={t.key} className="card p-6">
              <h3 className="font-semibold text-primary">{t.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
              <p className="text-xs text-primary mt-3">加入购物车 · 立即购买 · 批量采购 · 部分教具可租赁</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6 bg-indigo-50/50 border-primary/20">
        <h3 className="font-semibold text-primary">物资活动</h3>
        <p className="text-sm text-gray-600 mt-1">限时折扣、满减、组合优惠、积分兑换、教具以旧换新；分享专属活动（分享给好友查看可领优惠券，好友购买您得分佣）</p>
      </section>
    </div>
  )
}
