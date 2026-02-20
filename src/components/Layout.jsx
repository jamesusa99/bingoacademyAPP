import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { allNavGroups, mainNav } from '../config/nav'
import ChatPopup from './ChatPopup'

export default function Layout({ children }) {
  const loc = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-bingo-dark text-white shadow-lg border-b border-cyan-500/20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 lg:gap-6 min-h-14 flex-nowrap">
            <Link to="/" className="shrink-0 flex items-center gap-2">
              <img src="/logo.png" alt="缤果AI学院" className="h-8 sm:h-9 w-auto brightness-0 invert" />
            </Link>
            <nav className="hidden lg:flex flex-1 items-center justify-evenly gap-2 min-w-0 flex-nowrap">
              {allNavGroups.map((group, gi) => (
                <React.Fragment key={gi}>
                  {gi > 0 && (
                    <span className="w-0.5 h-5 bg-cyan-400/80 shrink-0 rounded-full" aria-hidden />
                  )}
                  <div className="flex items-center justify-center gap-1 shrink-0 py-1">
                    {group.map(({ path, label }) => (
                      <Link
                        key={path}
                        to={path}
                        className={`px-2 py-2 rounded-lg text-sm whitespace-nowrap shrink-0 transition-colors ${
                          loc.pathname === path ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </nav>
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
      <ChatPopup />
      <footer className="bg-bingo-dark text-slate-400 text-sm py-8 border-t border-cyan-500/20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between gap-6">
          <div>
            <span className="text-cyan-400 font-semibold">缤果AI学院</span>
            <p className="mt-1">AI课程 + 权威赛事 · 启蒙-进阶-竞赛-升学-就业</p>
          </div>
          <div className="flex gap-6">
            <div>
              <div className="text-white font-medium mb-2">C端</div>
              <Link to="/courses" className="block hover:text-white">AI精品课</Link>
              <Link to="/events" className="block hover:text-white">赛事中心</Link>
              <Link to="/research" className="block hover:text-white">科学研学</Link>
              <Link to="/career" className="block hover:text-white">产教融合</Link>
              <Link to="/mall" className="block hover:text-white">AI智能商城</Link>
              <Link to="/profile" className="block hover:text-white">个人中心</Link>
            </div>
            <div>
              <div className="text-white font-medium mb-2">B端合作</div>
              <a href="/#/b" className="block hover:text-white">学校/机构</a>
              <Link to="/franchise" className="block hover:text-white">加盟商</Link>
              <a href="/#/b" className="block hover:text-white">赛事合作方</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-6 pt-6 border-t border-gray-700 text-center">
          专家团队 · 合作赛事授权 · 正品保障
        </div>
      </footer>
    </div>
  )
}
