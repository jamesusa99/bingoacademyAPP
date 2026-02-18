import { Link } from 'react-router-dom'

// 赛事中心 - 白名单/国际/省级/缤果杯；报名、集训营、直播、定制
const categories = [
  { key: 'white', name: '教育部白名单赛事' },
  { key: 'international', name: '国际赛事' },
  { key: 'provincial', name: '省级赛事' },
  { key: 'bingo', name: '自有IP·缤果杯' },
]
const services = [
  'AI相关赛事报名（线上+线下）',
  '赛事集训营（付费集训、配套教材/教具）',
  '赛事直播、回顾、获奖公示',
  '赛事定制服务（个人/机构）',
]
export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">赛事中心</h1>
      <p className="text-slate-600 mb-6">赛事列表 → 赛事详情 → 报名 → 集训营 → 赛事进行 → 成绩查询。时间/组别/报名条件/奖项、集训营佣金比例；报名缴费与资格审核、赛前辅导与直播答疑、成绩与证书下载；赛事定制服务（机构/教师可享推广佣金）</p>

      <section className="mb-10">
        <h2 className="section-title">赛事分类</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link key={c.key} to={`/events?cat=${c.key}`} className="card px-5 py-3 hover:shadow-md">
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">赛事服务</h2>
        <ul className="space-y-2">
          {services.map((s, i) => (
            <li key={i} className="card p-4 flex items-center">
              <span className="text-primary font-medium">{s}</span>
              <span className="text-xs text-slate-500 ml-2">分享报名/备赛物资有分佣</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
