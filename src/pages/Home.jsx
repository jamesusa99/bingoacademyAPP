import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 信任背书 */}
      <div className="text-center text-gray-500 text-sm py-4 border-b">
        专家团队 · 合作赛事授权 · 正品保障
      </div>

      {/* 三大课程体系 + 商城入口 */}
      <section className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/courses?type=ai" className="card p-6 text-center hover:shadow-md transition">
            <div className="text-primary font-semibold">AI通识课</div>
            <div className="text-sm text-gray-500 mt-1">启蒙·进阶</div>
          </Link>
          <Link to="/courses?type=contest" className="card p-6 text-center hover:shadow-md transition">
            <div className="text-primary font-semibold">竞赛培优课</div>
            <div className="text-sm text-gray-500 mt-1">白名单·国际赛</div>
          </Link>
          <Link to="/courses?type=exam" className="card p-6 text-center hover:shadow-md transition">
            <div className="text-primary font-semibold">升学赋能课</div>
            <div className="text-sm text-gray-500 mt-1">科技特长生</div>
          </Link>
          <Link to="/mall" className="card p-6 text-center hover:shadow-md transition border-primary/30">
            <div className="text-primary font-semibold">AI智能商城</div>
            <div className="text-sm text-gray-500 mt-1">课程·教材·教具·工具包</div>
          </Link>
        </div>
      </section>

      {/* 分享赚钱 */}
      <section className="py-6">
        <Link to="/profile#commission" className="block card p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-primary font-semibold">分享赚钱</span>
              <span className="text-gray-600 ml-2">专属海报/链接，推荐有奖 10%-20% 返现</span>
            </div>
            <span className="text-primary">查看分佣 →</span>
          </div>
        </Link>
      </section>

      {/* 低价引流 */}
      <section className="py-6">
        <h2 className="section-title">限时福利</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card p-5 text-center">
            <div className="text-lg font-semibold text-primary">0元</div>
            <div className="text-gray-600">AI学情诊断</div>
            <Link to="/courses?deal=0" className="btn-primary mt-3 w-full text-sm">立即领取</Link>
          </div>
          <div className="card p-5 text-center">
            <div className="text-lg font-semibold text-primary">9.9元</div>
            <div className="text-gray-600">体验课秒杀</div>
            <Link to="/courses?deal=9.9" className="btn-primary mt-3 w-full text-sm">去抢购</Link>
          </div>
          <div className="card p-5 text-center">
            <div className="text-lg font-semibold text-primary">19.9元</div>
            <div className="text-gray-600">基础教具秒杀</div>
            <Link to="/mall/materials?deal=19.9" className="btn-primary mt-3 w-full text-sm">去抢购</Link>
          </div>
        </div>
      </section>

      {/* 快捷入口 */}
      <section className="py-8 border-t">
        <h2 className="section-title">探索更多</h2>
        <div className="flex flex-wrap gap-2">
          <Link to="/showcase" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">AI成果展</Link>
          <Link to="/community" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">AI学习社</Link>
          <Link to="/tools" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">AI工具库</Link>
          <Link to="/career" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">就业直通车</Link>
          <Link to="/growth" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">成长计划</Link>
          <Link to="/events" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">赛事中心</Link>
          <Link to="/cert" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">能力认证</Link>
          <Link to="/mall" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">智能商城</Link>
          <Link to="/charity" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">缤果公益行</Link>
        </div>
      </section>
    </div>
  )
}
