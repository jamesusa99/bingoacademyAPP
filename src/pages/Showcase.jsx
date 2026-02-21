import { useState } from 'react'
import { Link } from 'react-router-dom'

// 缤纷成果 - 双端分层：C端（学员成果）/ B端（机构/加盟/生态成果）
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
      <span className={'w-full h-full flex items-center justify-center bg-primary/20 text-primary' + (failed ? '' : ' hidden')}>{name.charAt(0)}</span>
    </div>
  )
}

export default function Showcase() {
  const [tab, setTab] = useState('c')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">缤纷成果</h1>
      <p className="text-slate-600 mb-6">成果分类 → 成果列表 → 成果详情；图文/短视频展示、点赞/评论/分享，作品关联课程/工具购买，分享转化可赚佣金</p>

      {/* 双端切换标签 */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setTab('c')}
          className={'px-6 py-2 rounded-full text-sm font-medium transition ' + (tab === 'c' ? 'bg-primary text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}
        >
          C端 · 学员成果
        </button>
        <button
          onClick={() => setTab('b')}
          className={'px-6 py-2 rounded-full text-sm font-medium transition ' + (tab === 'b' ? 'bg-primary text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}
        >
          B端 · 机构/生态成果
        </button>
      </div>

      {/* ===== C端：学员成果 ===== */}
      {tab === 'c' && (
        <>
      {/* C端成果分类 */}
      <section className="mb-8">
        <h2 className="section-title">C端成果分类</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/showcase/works" className="card px-5 py-3 hover:shadow-md hover:border-primary/30">学员作品</Link>
          <Link to="/showcase/awards" className="card px-5 py-3 hover:shadow-md hover:border-primary/30">赛事获奖</Link>
          <Link to="/showcase/school" className="card px-5 py-3 hover:shadow-md hover:border-primary/30">校企合作</Link>
          <Link to="/showcase/materials" className="card px-5 py-3 hover:shadow-md hover:border-primary/30">教材教具</Link>
        </div>
      </section>
        </>
      )}

      {/* ===== B端：机构/生态成果 ===== */}
      {tab === 'b' && (
        <section className="mb-8">
          <h2 className="section-title">B端成果分类</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="card p-6 hover:shadow-md hover:border-primary/30 transition">
              <h3 className="font-semibold text-primary mb-2">加盟案例专题</h3>
              <p className="text-sm text-slate-600">各地加盟校区运营数据、招生成效、盈利案例展示，附加盟咨询入口</p>
              <Link to="/franchise" className="text-sm text-primary mt-3 inline-block">了解加盟合作 →</Link>
            </div>
            <div className="card p-6 hover:shadow-md hover:border-primary/30 transition">
              <h3 className="font-semibold text-primary mb-2">机构合作成效</h3>
              <p className="text-sm text-slate-600">与缤果合作的教培机构、学校落地数据看板，课程引入、师训与学员成果</p>
              <a href="/#/b" className="text-sm text-primary mt-3 inline-block">申请合作 →</a>
            </div>
            <div className="card p-6 hover:shadow-md hover:border-primary/30 transition">
              <h3 className="font-semibold text-primary mb-2">AI OEM合作成果</h3>
              <p className="text-sm text-slate-600">课程/教具/工具定制成果展示，品牌联名与技术输出案例，轻量化公信力展示</p>
              <a href="/#/oem" className="text-sm text-primary mt-3 inline-block">了解OEM合作 →</a>
            </div>
          </div>
          <div className="card p-5 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-medium text-bingo-dark">加盟优势提炼 · 扶持政策一览</p>
              <p className="text-sm text-slate-600 mt-1">品牌授权 · 课程体系 · 赛事资源 · 师训支持 · 运营赋能</p>
            </div>
            <Link to="/franchise" className="btn-primary shrink-0">立即咨询加盟</Link>
          </div>
        </section>
      )}

      {/* C端专属：学员成果详情 */}
      {tab === 'c' && (
      <>
      <section className="mb-10">
        <h2 className="section-title">小小AI创业家</h2>
        <div className="card p-6 border-primary/20">
          <p className="text-slate-600 mb-6">展示青少年在AI应用与创新项目中的创业实践与成果。</p>
          <h3 className="text-sm font-semibold text-slate-500 mb-4">优秀学员列表</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {outstandingStudents.map((s, i) => {
              return (
                <li key={i} className="flex flex-col items-center text-center">
                  <Avatar src={s.photo} name={s.name} alt={s.name} />
                  <span className="text-xs text-primary font-medium mt-2">优秀缤果学员</span>
                  <span className="font-medium text-bingo-dark mt-1">{s.name}</span>
                  <Link to={'/showcase/venture/' + (i + 1)} className="text-xs text-primary hover:underline mt-2">创业成果</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">缤果AI学院10万奖金</h2>
        <div className="card p-6 border-primary/20 bg-cyan-50/50">
          <p className="text-slate-600 mb-6">年度重磅激励计划，总奖金10万元，激励学员与教师参与赛事、认证与成果产出。</p>
          <h3 className="text-sm font-semibold text-slate-500 mb-4">获奖者名单</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {prizeWinners.map((w, i) => {
              return (
                <li key={i} className="flex flex-col items-center text-center">
                  <span className="text-lg font-bold text-primary mb-2">第{w.rank}名</span>
                  <Avatar src={w.photo} name={w.name} alt={w.name} />
                  <span className="font-medium text-bingo-dark mt-2">{w.name}</span>
                  <Link to={'/showcase/award/' + w.rank} className="text-xs text-primary hover:underline mt-2">获奖案例</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">成果列表与详情</h2>
        <p className="text-slate-600 text-sm mb-4">详情页支持：图文/短视频展示、点赞/评论/分享；作品关联课程/工具购买入口；定制化成果服务提交入口；分享按钮，分享后产生转化可赚佣金</p>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => {
            return (
              <div key={i} className="card p-6">
                <h3 className="font-semibold text-primary">{s.title}</h3>
                {s.desc && <p className="text-sm text-slate-500 mt-1">{s.desc}</p>}
              </div>
            )
          })}
        </div>
      </section>

      </>
      )}

      {/* 缤果学分 · 成果可视化（C端共用） */}
      {tab === 'c' && (
        <section className="mb-10 border-t pt-8">
          <h2 className="section-title mb-1">🏅 学分成果展示</h2>
          <p className="text-slate-600 text-sm mb-4">学员累计缤果学分、等级与成就，与课程/赛事/研学成果并列展示，强化"学习数字资产"价值</p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {[
              { name: '张小明', level: '学分之星 ⭐⭐⭐⭐', total: 3420, badge: '本月学分榜 No.1' },
              { name: '李思涵', level: '学分达人 ⭐⭐⭐', total: 2180, badge: '课程完课率 100%' },
              { name: '王梓轩', level: '进阶学员 ⭐⭐', total: 1560, badge: '赛事获奖荣誉分' },
            ].map((s, i) => (
              <div key={i} className="card p-5 flex items-center gap-4 hover:shadow-md hover:border-primary/30 transition">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg shrink-0">{s.name.charAt(0)}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-bingo-dark text-sm">{s.name}</p>
                  <p className="text-xs text-slate-500">{s.level}</p>
                  <p className="text-primary font-bold mt-1">{s.total.toLocaleString()} 分</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded bg-amber-100 text-amber-700 shrink-0 text-center leading-tight">{s.badge}</span>
              </div>
            ))}
          </div>
          <div className="card p-5 bg-cyan-50 border-primary/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-medium text-bingo-dark">学分等级达「学分之星」可获专属展示位</p>
              <p className="text-sm text-slate-600 mt-0.5">分享学分成果至朋友圈，分享成功额外 +5分，助力品牌传播</p>
            </div>
            <Link to="/profile#score-bank" className="btn-primary text-sm px-4 py-2">查看我的学分</Link>
          </div>
        </section>
      )}

      {/* 荣誉与公益：两端共用 */}
      <section id="honor" className="mb-10 border-t pt-8">
        <h2 className="section-title mb-1">品牌背书 · 荣誉与公益</h2>
        <p className="text-slate-600 text-sm mb-6">缤果AI学院荣誉展示、行业动态与公益项目，强化品牌公信力</p>
        <div className="card overflow-hidden mb-6">
          <ul className="divide-y divide-slate-100">
            {[
              { type: '荣誉', text: '缤果AI学院获「年度AI教育创新机构」称号', date: '2025-01' },
              { type: '热点', text: '教育部发文推进中小学AI教育，素养与伦理并重', date: '2025-02' },
              { type: '荣誉', text: '缤果学员在全国青少年AI挑战赛中获一等奖', date: '2025-01' },
              { type: '行业', text: '青少年AI赛事白名单扩容，科创素养成升学加分项', date: '2025-02' },
              { type: '热点', text: '多省市将AI素养纳入综合素质评价', date: '2025-01' },
              { type: '行业', text: '产教融合政策加码，企业与院校合作AI实训', date: '2024-12' },
            ].map((r, i) => (
              <li key={i} className="px-4 py-3 flex flex-wrap items-center gap-2 hover:bg-slate-50 transition">
                <span className={'text-xs px-2 py-0.5 rounded ' + (r.type === '荣誉' ? 'bg-amber-100 text-amber-800' : r.type === '热点' ? 'bg-red-50 text-red-700' : 'bg-slate-100 text-slate-600')}>
                  {r.type}
                </span>
                <span className="text-slate-700 text-sm flex-1">{r.text}</span>
                <span className="text-slate-400 text-xs">{r.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="text-base font-semibold text-bingo-dark mb-3">公益项目</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: '公益助学活动', desc: '捐赠教材/教具、免费公益课，面向青少年/弱势群体' },
            { title: '公益赛事', desc: '公益主题AI赛事，提升品牌影响力' },
            { title: '公益打卡', desc: '用户参与打卡，平台捐赠公益基金' },
            { title: '公益成果展示', desc: '强化品牌公信力，带动潜在C端消费' },
          ].map((item, i) => (
            <div key={i} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
              <button type="button" className="text-sm text-primary mt-3 hover:underline">参与报名 →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
