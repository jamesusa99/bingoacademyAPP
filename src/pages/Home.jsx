import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 信任背书 */}
      <div className="text-center text-gray-500 text-sm py-4 border-b">
        专家团队 · 合作赛事授权 · 正品保障
      </div>

      {/* 使命与痛点 */}
      <section className="py-8">
        <h2 className="section-title text-center">人工智能教育的未来新范式</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
          怎样的教育属于未来？面对 AI，家长怎么做？让孩子会用手上的工具，而不是被工具带着走——
          缤果AI学院致力于成为家庭与学校在人工智能时代的教育伙伴。
        </p>
        <ul className="text-gray-600 text-sm space-y-2 max-w-xl mx-auto">
          <li>· 怎样的教育属于未来？</li>
          <li>· 面对AI，家长怎么做？</li>
          <li>· 如何让孩子驾驭AI，而不是被AI替代？</li>
        </ul>
      </section>

      {/* 课程 + 商城 + 赛事 + 就业（首页六大入口） */}
      <section className="py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
            <div className="text-sm text-gray-500 mt-1">课程·教材·教具</div>
          </Link>
          <Link to="/events" className="card p-6 text-center hover:shadow-md transition border-primary/30">
            <div className="text-primary font-semibold">赛事中心</div>
            <div className="text-sm text-gray-500 mt-1">报名·集训·证书</div>
          </Link>
          <Link to="/career" className="card p-6 text-center hover:shadow-md transition border-primary/30">
            <div className="text-primary font-semibold">就业直通车</div>
            <div className="text-sm text-gray-500 mt-1">简历·面试·内推</div>
          </Link>
        </div>
      </section>

      {/* 家长必读课 */}
      <section className="py-6">
        <div className="card p-6 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm text-gray-500">家长必读课</div>
              <h3 className="text-lg font-semibold text-bingo-dark mt-1">《成为孩子驾驭AI路上的引路人和伙伴》</h3>
              <p className="text-sm text-gray-600 mt-2">价值 99 元 · 现价 <span className="text-primary font-semibold">9.9 元</span> 限时福利</p>
            </div>
            <Link to="/courses?deal=9.9" className="btn-primary shrink-0">立即领取</Link>
          </div>
        </div>
      </section>

      {/* 限时福利：特色主打课、学院主打活动、AI岗位招聘、赛事指导 */}
      <section className="py-6">
        <h2 className="section-title">限时福利</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-5 text-center hover:shadow-md transition">
            <div className="font-semibold text-primary">特色主打课</div>
            <p className="text-sm text-gray-600 mt-1">精选AI与素养课程</p>
            <Link to="/courses" className="btn-primary mt-3 w-full text-sm">去看看</Link>
          </div>
          <div className="card p-5 text-center hover:shadow-md transition">
            <div className="font-semibold text-primary">学院主打活动</div>
            <p className="text-sm text-gray-600 mt-1">限时活动与福利</p>
            <Link to="/courses" className="btn-primary mt-3 w-full text-sm">去看看</Link>
          </div>
          <div className="card p-5 text-center hover:shadow-md transition">
            <div className="font-semibold text-primary">AI岗位招聘</div>
            <p className="text-sm text-gray-600 mt-1">对口就业机会</p>
            <Link to="/career" className="btn-primary mt-3 w-full text-sm">去看看</Link>
          </div>
          <div className="card p-5 text-center hover:shadow-md transition">
            <div className="font-semibold text-primary">赛事指导</div>
            <p className="text-sm text-gray-600 mt-1">备赛与报名服务</p>
            <Link to="/events" className="btn-primary mt-3 w-full text-sm">去看看</Link>
          </div>
        </div>
      </section>

      {/* 探索更多 */}
      <section className="py-8 border-t">
        <h2 className="section-title">探索更多</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          <Link to="/showcase" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">AI成果展</Link>
          <Link to="/community" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">AI学习社</Link>
          <Link to="/growth" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">成长计划</Link>
          <Link to="/cert" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">能力认证</Link>
          <Link to="/mall" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">智能商城</Link>
          <Link to="/charity" className="px-4 py-2 rounded-lg bg-white border hover:border-primary hover:text-primary">缤果公益</Link>
        </div>
      </section>
    </div>
  )
}
