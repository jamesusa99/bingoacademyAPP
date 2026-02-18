import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const BANNERS = [
  { title: '课程促销', to: '/courses', desc: '精品课限时优惠' },
  { title: '赛事报名', to: '/events', desc: '权威赛事火热报名中' },
  { title: '公益活动', to: '/charity', desc: '缤果公益与报道' },
  { title: '产教融合合作', to: '/career', desc: '企业实训与就业对接' },
  { title: '推广赚佣金', to: '/profile#promo', desc: '分享课程/商品赚佣金' },
]

export default function Home() {
  const [bannerIndex, setBannerIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setBannerIndex((i) => (i + 1) % BANNERS.length)
    }, 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Banner 轮播 */}
      <section className="mb-8">
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-primary/90 to-cyan-600 text-white shadow-lg">
          <Link to={BANNERS[bannerIndex].to} className="block p-8 sm:p-12 min-h-[160px] flex flex-col justify-center">
            <div className="text-sm opacity-90">{BANNERS[bannerIndex].desc}</div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">{BANNERS[bannerIndex].title}</h2>
            <span className="mt-2 inline-block text-sm underline">点击进入 →</span>
          </Link>
        </div>
        <div className="flex justify-center gap-2 mt-3">
          {BANNERS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`轮播 ${i + 1}`}
              onClick={() => setBannerIndex(i)}
              className={`w-2 h-2 rounded-full transition ${i === bannerIndex ? 'bg-primary scale-125' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </section>

      {/* 使命与愿景 */}
      <section className="py-6 section-tech max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-bingo-dark text-center mb-6 tracking-tight">
          驾驭AI未来：缤果AI学院，您的人工智能教育新范式
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-slate-600 leading-relaxed">
          <p>
            在人工智能浪潮席卷全球的当下，我们不禁要问：何为面向未来的教育？面对日新月异的AI技术，家长又该如何引导孩子成长？
          </p>
          <p>
            缤果AI学院坚信，真正的未来教育，是赋予孩子驾驭工具而非被工具奴役的能力。我们致力于成为家庭与学校在人工智能时代的核心教育伙伴，让每个孩子都能主动探索、创新实践，真正驾驭AI，而非被AI所替代。
          </p>
        </div>
      </section>

      {/* 核心业务入口（卡片式） */}
      <section className="py-6">
        <h2 className="section-title mb-4">核心业务入口</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link to="/courses?type=ai" className="card p-6 text-center hover:shadow-md transition">
            <div className="text-primary font-semibold">AI通识课</div>
            <div className="text-sm text-slate-500 mt-1">启蒙·进阶</div>
          </Link>
          <Link to="/courses?type=contest" className="card p-6 text-center hover:shadow-md transition">
            <div className="text-primary font-semibold">竞赛培优课</div>
            <div className="text-sm text-slate-500 mt-1">白名单·国际赛</div>
          </Link>
          <Link to="/courses?type=exam" className="card p-6 text-center hover:shadow-md transition">
            <div className="text-primary font-semibold">升学赋能课</div>
            <div className="text-sm text-slate-500 mt-1">科技特长生</div>
          </Link>
          <Link to="/mall" className="card p-6 text-center hover:shadow-md transition border-primary/30">
            <div className="text-primary font-semibold">AI智能商城</div>
            <div className="text-sm text-slate-500 mt-1">课程·教材·教具</div>
          </Link>
          <Link to="/events" className="card p-6 text-center hover:shadow-md transition border-primary/30">
            <div className="text-primary font-semibold">赛事中心</div>
            <div className="text-sm text-slate-500 mt-1">报名·集训·证书</div>
          </Link>
          <Link to="/career" className="card p-6 text-center hover:shadow-md transition border-primary/30">
            <div className="text-primary font-semibold">产教融合</div>
            <div className="text-sm text-slate-500 mt-1">岗位·实训·就业</div>
          </Link>
        </div>
      </section>

      {/* 转化钩子区：家长必读课 + 限时福利 */}
      <section className="py-6">
        <h2 className="section-title mb-4">转化钩子</h2>
        <div className="card p-6 bg-gradient-to-r from-cyan-50/90 to-sky-50/90 border-cyan-200/50 shadow-glow mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm text-slate-500">家长必读课限时福利</div>
              <h3 className="text-lg font-semibold text-bingo-dark mt-1">《成为孩子驾驭AI路上的引路人和伙伴》</h3>
              <p className="text-sm text-slate-600 mt-2">原价 99 元 · 现价 <span className="text-primary font-semibold">9.9 元</span></p>
            </div>
            <Link to="/courses?deal=9.9" className="btn-primary shrink-0">立即领取</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link to="/mall?tag=flash" className="card p-5 text-center hover:shadow-md transition">
            <div className="font-semibold text-primary">秒杀</div>
            <p className="text-sm text-slate-600 mt-1">限时特价</p>
          </Link>
          <Link to="/mall?tag=group" className="card p-5 text-center hover:shadow-md transition">
            <div className="font-semibold text-primary">拼团</div>
            <p className="text-sm text-slate-600 mt-1">多人成团更优惠</p>
          </Link>
          <Link to="/profile" className="card p-5 text-center hover:shadow-md transition">
            <div className="font-semibold text-primary">优惠券</div>
            <p className="text-sm text-slate-600 mt-1">领券中心</p>
          </Link>
          <Link to="/profile#promo" className="card p-5 text-center hover:shadow-md transition">
            <div className="font-semibold text-primary">推广佣金翻倍</div>
            <p className="text-sm text-slate-600 mt-1">活动专场</p>
          </Link>
        </div>
      </section>

      {/* 内容推荐区 */}
      <section className="py-8 border-t">
        <h2 className="section-title mb-4">内容推荐 · 猜你喜欢</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/courses" className="card p-5 hover:shadow-md transition">
            <div className="text-sm text-slate-500">热门课程</div>
            <div className="font-semibold text-primary mt-1">精选AI与素养课</div>
            <p className="text-sm text-slate-600 mt-1">进入详情可分享赚佣金</p>
          </Link>
          <Link to="/events" className="card p-5 hover:shadow-md transition">
            <div className="text-sm text-slate-500">最新赛事</div>
            <div className="font-semibold text-primary mt-1">报名与集训营</div>
            <p className="text-sm text-slate-600 mt-1">点击进入</p>
          </Link>
          <Link to="/showcase" className="card p-5 hover:shadow-md transition">
            <div className="text-sm text-slate-500">学员成果</div>
            <div className="font-semibold text-primary mt-1">作品与获奖展示</div>
            <p className="text-sm text-slate-600 mt-1">分享转化可赚佣金</p>
          </Link>
          <Link to="/charity" className="card p-5 hover:shadow-md transition">
            <div className="text-sm text-slate-500">公益案例</div>
            <div className="font-semibold text-primary mt-1">缤果公益与报道</div>
            <p className="text-sm text-slate-600 mt-1">参与得公益积分</p>
          </Link>
        </div>
        <div className="mt-4 card p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/50">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm text-slate-500">高佣金推广推荐</div>
              <h3 className="font-semibold text-bingo-dark mt-1">平台精选高佣金课程/商品，一键分享</h3>
            </div>
            <Link to="/profile#promo" className="btn-primary shrink-0">去推广中心</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
