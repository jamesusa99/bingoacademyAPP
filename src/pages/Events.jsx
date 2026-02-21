import { useState } from 'react'
import { Link } from 'react-router-dom'

// 赛事中心 - C端：参赛报名/备赛；B端：赛事承办/DIY定制
const C_CATEGORIES = [
  { key: 'white', name: '教育部白名单赛事', desc: '提升升学竞争力，认证级别最高' },
  { key: 'international', name: '国际赛事', desc: '面向全球青少年，国际视野拓展' },
  { key: 'provincial', name: '省级赛事', desc: '区域权威赛事，成绩可关联认证' },
  { key: 'bingo', name: '自有IP·缤果杯', desc: '缤果学院自有品牌赛，全年举办' },
]

export default function Events() {
  const [tab, setTab] = useState('c')
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">赛事中心</h1>
      <p className="text-slate-600 mb-6">赛事列表 → 报名 → 备赛集训 → 成绩查询 → 证书下载；赛事分享有佣金；机构可定制办赛</p>

      {/* 双端切换 */}
      <div className="flex gap-2 mb-8">
        <button onClick={() => setTab('c')} className={'px-6 py-2 rounded-full text-sm font-medium transition ' + (tab === 'c' ? 'bg-primary text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
          C端 · 学员/家长参赛
        </button>
        <button onClick={() => setTab('b')} className={'px-6 py-2 rounded-full text-sm font-medium transition ' + (tab === 'b' ? 'bg-primary text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
          B端 · 机构承办/DIY定制
        </button>
      </div>

      {/* ===== C端 ===== */}
      {tab === 'c' && (
        <>
          <section className="mb-10">
            <h2 className="section-title mb-4">C端赛事分类</h2>
            <p className="text-slate-500 text-sm mb-4">按赛事等级筛选，突出白名单赛事的升学助力价值</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {C_CATEGORIES.map((c) => (
                <Link key={c.key} to={'/events?cat=' + c.key} className="card p-5 hover:shadow-md hover:border-primary/30 transition">
                  <div className="font-semibold text-primary">{c.name}</div>
                  <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="section-title mb-4">C端赛事服务</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: '在线报名', desc: '线上+线下报名，资格审核，报名后可分享海报赚佣金' },
                { title: '备赛集训营', desc: '赛前集训、配套教材教具，集训营分享有佣金' },
                { title: '赛事直播与答疑', desc: '赛事直播、赛后回顾，导师在线答疑' },
                { title: '成绩查询与证书下载', desc: '成绩实时查询，证书可下载并分享至朋友圈' },
              ].map((s, i) => (
                <div key={i} className="card p-5 hover:shadow-md transition">
                  <h3 className="font-semibold text-primary">{s.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 缤果学分 · 备赛打卡入口 */}
          <section className="mb-10">
            <h2 className="section-title mb-1">🏅 备赛打卡领学分</h2>
            <p className="text-slate-600 text-sm mb-4">备赛资料下载、备赛作业完成、赛事报名成功均可获得缤果学分，获奖学员额外赠荣誉学分</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                { action: '赛事报名成功', score: '+20分', note: '报名即到账' },
                { action: '下载备赛资料', score: '+5分', note: '每次限1次' },
                { action: '完成备赛作业打卡', score: '+15分', note: '每日1次' },
                { action: '赛事获奖', score: '+100分', note: '荣誉学分·可兑换高端赛事资格' },
              ].map((s, i) => (
                <div key={i} className="card p-5 border-primary/20 hover:shadow-md transition">
                  <p className="text-sm font-medium text-slate-700">{s.action}</p>
                  <p className="text-primary font-bold text-lg mt-1">{s.score}</p>
                  <p className="text-xs text-slate-400 mt-1">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="card p-5 bg-cyan-50 border-primary/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-medium text-bingo-dark">学分可抵扣赛事报名费</p>
                <p className="text-sm text-slate-600 mt-0.5">100学分=10元抵扣，赛事成果分享至朋友圈额外 +5分</p>
              </div>
              <Link to="/profile#score-bank" className="btn-primary text-sm px-4 py-2">查看我的学分</Link>
            </div>
          </section>

          <section>
            <h2 className="section-title mb-4">往届获奖学员风采</h2>
            <p className="text-slate-600 text-sm mb-4">历届赛事获奖学员与集训营成果，强化信任，助力报名转化</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="card p-6">
                <h3 className="font-semibold text-primary">获奖案例</h3>
                <p className="text-sm text-slate-600 mt-1">白名单赛事、缤果杯获奖名单与作品，关联学员成果与认证</p>
                <Link to="/showcase/awards" className="text-sm text-primary mt-3 inline-block">查看获奖展示 →</Link>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-primary">集训营成果</h3>
                <p className="text-sm text-slate-600 mt-1">赛前集训营出分情况、学员备赛反馈与成绩提升数据</p>
                <button type="button" className="text-sm text-primary mt-3 hover:underline">了解集训营 →</button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ===== B端 ===== */}
      {tab === 'b' && (
        <>
          <section className="mb-10">
            <h2 className="section-title mb-1">赛事DIY定制专区</h2>
            <p className="text-slate-600 text-sm mb-6">机构/教师可发起自定义赛事，总部提供资质审核、赛务支持、宣传物料，定制赛事分享可赚佣金</p>
            <div className="card p-6 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-bingo-dark">首次定制享专属折扣</h3>
                  <p className="text-sm text-slate-600 mt-1">明确定制流程、所需资质、服务内容与支持政策</p>
                </div>
                <Link to="/franchise" className="btn-primary shrink-0">咨询DIY定制</Link>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '赛事承办合作', desc: '机构承办缤果品牌赛事，总部提供赛务、宣传物料、师资支持' },
                { title: '赛事DIY定制', desc: '自定义赛事主题、规则、奖项，适配机构差异化需求' },
                { title: '集训营合作', desc: '批量集训合作享折扣，提升机构学员成绩与留存' },
              ].map((s, i) => (
                <div key={i} className="card p-5 hover:shadow-md hover:border-primary/30 transition">
                  <h3 className="font-semibold text-primary">{s.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="section-title mb-4">B端赛事支持服务</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: '赛事运营支持指南', desc: '赛前宣传、赛中运营、赛后成果展示全流程指导' },
                { title: '宣传物料包', desc: '机构可领取承办宣传物料，支持一键转发至行业群' },
                { title: '合作案例展示', desc: '已合作机构办赛案例、数据成效，强化信任' },
                { title: '资质审核与证书', desc: '赛事承办资质升级认证，认证成果同步至认证中心' },
              ].map((s, i) => (
                <div key={i} className="card p-5 hover:shadow-md transition">
                  <h3 className="font-semibold text-primary">{s.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-title mb-4">合作优惠政策</h2>
            <div className="card p-6 border-primary/20">
              <ul className="space-y-2 text-sm text-slate-700">
                <li>· 批量合作享折扣，合作赛事数量越多，支持力度越大</li>
                <li>· 首次合作专属新客优惠，降低合作门槛</li>
                <li>· 机构推荐新机构合作，推荐方享返佣奖励</li>
                <li>· 赛事定制分享产生转化可赚佣金</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <Link to="/franchise" className="btn-primary text-sm px-4 py-2">立即咨询合作</Link>
                <Link to="/cert" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm hover:bg-primary/10">了解承办资质认证</Link>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
