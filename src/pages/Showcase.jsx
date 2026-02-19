import { useState } from 'react'
import { Link } from 'react-router-dom'

// 缤纷成果 - 小小AI创业家（优秀学员）、10万奖金（获奖者）、成果展示
const outstandingStudents = [
  { name: '张小明', photo: 'https://ui-avatars.com/api/?name=张小明&background=0891b2&color=fff&size=120' },
  { name: '李思涵', photo: 'https://ui-avatars.com/api/?name=李思涵&background=0891b2&color=fff&size=120' },
  { name: '王梓轩', photo: 'https://ui-avatars.com/api/?name=王梓轩&background=0891b2&color=fff&size=120' },
  { name: '陈雨桐', photo: 'https://ui-avatars.com/api/?name=陈雨桐&background=0891b2&color=fff&size=120' },
  { name: '刘子墨', photo: 'https://ui-avatars.com/api/?name=刘子墨&background=0891b2&color=fff&size=120' },
]

const prizeWinners = [
  { rank: 1, name: '赵一凡', photo: 'https://ui-avatars.com/api/?name=赵一凡&background=0f172a&color=fff&size=120' },
  { rank: 2, name: '孙悦琪', photo: 'https://ui-avatars.com/api/?name=孙悦琪&background=0f172a&color=fff&size=120' },
  { rank: 3, name: '周俊熙', photo: 'https://ui-avatars.com/api/?name=周俊熙&background=0f172a&color=fff&size=120' },
  { rank: 4, name: '吴若溪', photo: 'https://ui-avatars.com/api/?name=吴若溪&background=0f172a&color=fff&size=120' },
  { rank: 5, name: '郑浩然', photo: 'https://ui-avatars.com/api/?name=郑浩然&background=0f172a&color=fff&size=120' },
]

const sections = [
  { title: '学员AI作品与学习成果', desc: '图文+视频' },
  { title: '赛事获奖案例、职业教育就业案例', desc: '' },
  { title: '教具实操成果、教材学习落地案例', desc: '' },
  { title: 'AI OEM合作成果展示', desc: '轻量化公信力展示' },
]

function Avatar({ src, name, alt }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center text-xl font-semibold text-slate-500">
      {!failed && <img src={src} alt={alt} className="w-full h-full object-cover" onError={() => setFailed(true)} />}
      <span className={`w-full h-full flex items-center justify-center bg-primary/20 text-primary ${failed ? '' : 'hidden'}`}>{name.charAt(0)}</span>
    </div>
  )
}

export default function Showcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">缤纷成果</h1>
      <p className="text-slate-600 mb-6">成果分类 → 成果列表 → 成果详情；图文/短视频展示、点赞/评论/分享，作品关联课程/工具购买，定制化成果服务，详情页分享转化可赚佣金</p>

      {/* 成果分类 */}
      <section className="mb-8">
        <h2 className="section-title">成果分类</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/showcase/works" className="card px-5 py-3 hover:shadow-md hover:border-primary/30">学员作品</Link>
          <Link to="/showcase/awards" className="card px-5 py-3 hover:shadow-md hover:border-primary/30">赛事获奖</Link>
          <Link to="/showcase/school" className="card px-5 py-3 hover:shadow-md hover:border-primary/30">校企合作</Link>
          <Link to="/showcase/materials" className="card px-5 py-3 hover:shadow-md hover:border-primary/30">教材教具</Link>
        </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">小小AI创业家</h2>
        <div className="card p-6 border-primary/20">
          <p className="text-slate-600 mb-6">展示青少年在AI应用与创新项目中的创业实践与成果。</p>
          <h3 className="text-sm font-semibold text-slate-500 mb-4">优秀学员列表</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {outstandingStudents.map((s, i) => (
              <li key={i} className="flex flex-col items-center text-center">
                <Avatar src={s.photo} name={s.name} alt={s.name} />
                <span className="text-xs text-primary font-medium mt-2">优秀缤果学员</span>
                <span className="font-medium text-bingo-dark mt-1">{s.name}</span>
                <Link to={`/showcase/venture/${i + 1}`} className="text-xs text-primary hover:underline mt-2">创业成果</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">缤果AI学院10万奖金</h2>
        <div className="card p-6 border-primary/20 bg-cyan-50/50">
          <p className="text-slate-600 mb-6">年度重磅激励计划，总奖金10万元，激励学员与教师参与赛事、认证与成果产出。</p>
          <h3 className="text-sm font-semibold text-slate-500 mb-4">获奖者名单</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {prizeWinners.map((w, i) => (
              <li key={i} className="flex flex-col items-center text-center">
                <span className="text-lg font-bold text-primary mb-2">第{w.rank}名</span>
                <Avatar src={w.photo} name={w.name} alt={w.name} />
                <span className="font-medium text-bingo-dark mt-2">{w.name}</span>
                <Link to={`/showcase/award/${w.rank}`} className="text-xs text-primary hover:underline mt-2">获奖案例</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-title">成果列表与详情</h2>
        <p className="text-slate-600 text-sm mb-4">详情页支持：图文/短视频展示、点赞/评论/分享；作品关联课程/工具购买入口；定制化成果服务提交入口；分享按钮，分享后产生转化可赚佣金</p>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{s.title}</h3>
              {s.desc && <p className="text-sm text-slate-500 mt-1">{s.desc}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
