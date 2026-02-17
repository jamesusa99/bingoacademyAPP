import { Link, useLocation } from 'react-router-dom'
import { mainNav, authNav } from '../config/nav'

export default function Layout({ children }) {
  const loc = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-bingo-dark text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 min-h-14 flex-wrap">
            <Link to="/" className="shrink-0 flex items-center gap-1 font-semibold text-base sm:text-lg whitespace-nowrap">
              <span className="text-primary">缤果</span>
              <span>AI学院</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-1 shrink min-w-0 overflow-x-auto">
              {mainNav.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-2 py-2 rounded-md text-sm whitespace-nowrap ${
                    loc.pathname === path ? 'bg-primary text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-1 shrink-0">
              {authNav.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm whitespace-nowrap ${
                    loc.pathname === path ? 'bg-primary text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {/* 移动端折叠导航 */}
          <div className="lg:hidden pb-3 flex flex-wrap gap-1">
            {mainNav.slice(0, 6).map(({ path, label }) => (
              <Link key={path} to={path} className="px-2 py-1 text-xs rounded bg-white/10">{label}</Link>
            ))}
            <Link to="/mall" className="px-2 py-1 text-xs rounded bg-white/10">AI智能商城</Link>
            <Link to="/profile" className="px-2 py-1 text-xs rounded bg-primary">个人中心</Link>
            <Link to="/login" className="px-2 py-1 text-xs rounded bg-white/10">登录</Link>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-bingo-dark text-gray-400 text-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between gap-6">
          <div>
            <span className="text-primary font-semibold">缤果AI学院</span>
            <p className="mt-1">AI课程 + 权威赛事 · 启蒙-进阶-竞赛-升学-就业</p>
          </div>
          <div className="flex gap-6">
            <div>
              <div className="text-white font-medium mb-2">C端</div>
              <Link to="/courses" className="block hover:text-white">AI精品课</Link>
              <Link to="/events" className="block hover:text-white">赛事中心</Link>
              <Link to="/career" className="block hover:text-white">就业直通车</Link>
              <Link to="/mall" className="block hover:text-white">AI智能商城</Link>
              <Link to="/profile" className="block hover:text-white">个人中心</Link>
            </div>
            <div>
              <div className="text-white font-medium mb-2">B端合作</div>
              <a href="/#/b" className="block hover:text-white">学校/机构</a>
              <a href="/#/b" className="block hover:text-white">加盟商</a>
              <a href="/#/b" className="block hover:text-white">赛事合作方</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-6 pt-6 border-t border-gray-700 text-center">
          专家团队 · 赛事授权 · 正品保障 · 分享分佣
        </div>
      </footer>
    </div>
  )
}
