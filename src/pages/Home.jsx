import { Link } from 'react-router-dom'

const BANNERS = [
  { title: '课程促销', to: '/courses', desc: '精品课限时优惠' },
  { title: '赛事报名', to: '/events', desc: '权威赛事火热报名中' },
  { title: '荣誉与公益', to: '/charity', desc: '荣誉展示与公益报道' },
  { title: '产教融合合作', to: '/career', desc: '企业实训与就业对接' },
  { title: '推广赚佣金', to: '/profile#promo', desc: '分享课程/商品赚佣金活动专场' },
]

const PAIN_POINTS = [
  '孩子总玩AI工具，会不会耽误学习？',
  'AI时代，到底该学什么才不被淘汰？',
  '学校没有AI课，我们该从哪里入手？',
  '孩子对AI感兴趣，但不知道如何系统学？',
  '担心孩子只会用AI，不会思考与创造？',
  '竞赛、升学、素养，AI教育该怎么选？',
  'AI工具那么多，哪些适合青少年？',
  '如何判断孩子适不适合走AI/科创路线？',
  '家长自己不懂AI，怎么引导孩子？',
  '学完AI课程，如何证明能力、对接升学？',
]

const HOT_COURSES = [
  { name: 'AI素养启蒙·面向未来的第一课', to: '/courses?type=literacy', tag: '独门爆款' },
  { name: '白名单赛事通关营', to: '/courses?type=contest', tag: '竞赛' },
  { name: '科技特长生路径课', to: '/courses?type=exam', tag: '升学' },
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 欢迎与痛点：让我猜猜您面对AI遇到的问题 */}
      <section className="mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-bingo-dark text-center mb-4">
          欢迎来到缤果AI学院
        </h2>
        <p className="text-slate-600 text-center mb-6">让我猜猜您面对AI遇到的问题</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {PAIN_POINTS.map((q, i) => (
            <li key={i} className="card px-4 py-3 text-slate-700 hover:border-primary/30 hover:shadow-sm transition">
              {q}
            </li>
          ))}
        </ul>
      </section>

      {/* 广告区：排列式（非轮播） */}
      <section className="mb-8">
        <h2 className="section-title mb-4">热门活动</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {BANNERS.map((b, i) => (
            <Link
              key={i}
              to={b.to}
              className="rounded-xl overflow-hidden bg-gradient-to-r from-primary/85 to-cyan-600 text-white shadow-md hover:shadow-lg transition p-4 sm:p-5 min-h-[100px] flex flex-col justify-center"
            >
              <div className="text-xs opacity-90">{b.desc}</div>
              <div className="font-semibold mt-1.5 text-sm sm:text-base">{b.title}</div>
              <span className="text-xs opacity-90 mt-1">点击进入 →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* AI能力测评 + 对应推荐课程 */}
      <section className="mb-8">
        <h2 className="section-title mb-4">AI能力测评 · 推荐适合您的课程</h2>
        <div className="card p-6 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-slate-600">测一测孩子的AI素养与潜力，根据结果智能推荐课程与学习路径。</p>
            <Link to="/growth" className="text-primary font-medium mt-2 inline-block">去测评 →</Link>
          </div>
          <Link to="/courses" className="btn-primary shrink-0">查看推荐课程</Link>
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

      {/* 核心业务入口（卡片式）：通识→素养 */}
      <section className="py-6">
        <h2 className="section-title mb-4">核心业务入口</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link to="/courses?type=literacy" className="card p-6 text-center hover:shadow-md transition">
            <div className="text-primary font-semibold">AI素养课</div>
            <div className="text-sm text-slate-500 mt-1">面向未来·素养与元认知</div>
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

      {/* 独门爆款课程 */}
      <section className="py-6">
        <h2 className="section-title mb-4">独门爆款课程</h2>
        <p className="text-slate-600 text-sm mb-4">核心打造的几款独家课程，从素养到竞赛到升学一站式覆盖</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {HOT_COURSES.map((c, i) => (
            <Link key={i} to={c.to} className="card p-6 hover:shadow-md transition border-primary/20">
              <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">{c.tag}</span>
              <div className="font-semibold text-primary mt-2">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* 转化钩子区 */}
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
            <div className="font-semibold text-primary mt-1">精选AI素养与培优课</div>
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
            <div className="font-semibold text-primary mt-1">荣誉与公益</div>
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
