import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// AI智能商城 - 双端分层：C端个人采购 / B端机构/加盟方批量采购
const subNav = [
  { path: '/mall', label: '智能商城' },
  { path: '/mall/materials', label: '学材物资中心' },
]

const C_ITEMS = [
  { title: '学员学习工具', desc: '错题帮AI、梅林口语、作业批改助手等个人学习订阅工具' },
  { title: '图书教材', desc: 'AI素养教材、编程入门书、竞赛备赛资料，购买关联对应课程' },
  { title: 'AI教具', desc: '智能硬件、实验套件，配套课程，含器材包' },
  { title: '组合套餐', desc: '课程+教材+教具一站式组合，享套餐折扣' },
]

const B_ITEMS = [
  { title: '机构教学设备', desc: '批量采购教学硬件、AI教具，支持定制规格与批量报价' },
  { title: '赛事物料', desc: '赛事承办所需宣传物料、奖状、证书等，关联赛事DIY定制' },
  { title: '加盟方专属物料', desc: '加盟签约后享专属采购区，品牌授权物料、课程包、教具包' },
  { title: '定制化产品', desc: '依托OEM基座，定制AI课程、教具、学习工具，品牌联名' },
]

export default function Mall() {
  const loc = useLocation()
  const [tab, setTab] = useState('c')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-bingo-dark">AI智能商城</h1>
        {subNav.map(({ path, label }) => (
          <Link key={path} to={path} className={'px-4 py-2 rounded-lg text-sm font-medium ' + (loc.pathname === path ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200')}>
            {label}
          </Link>
        ))}
      </div>
      <p className="text-slate-600 mb-6">商品分类 → 商品列表 → 详情（佣金比例+分享）→ 购物车 → 结算。组合套餐、秒杀/拼团/满减；分享订单自动绑定推广人</p>

      {/* 双端切换 */}
      <div className="flex gap-2 mb-8">
        <button onClick={() => setTab('c')} className={'px-6 py-2 rounded-full text-sm font-medium transition ' + (tab === 'c' ? 'bg-primary text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
          C端 · 学员个人采购
        </button>
        <button onClick={() => setTab('b')} className={'px-6 py-2 rounded-full text-sm font-medium transition ' + (tab === 'b' ? 'bg-primary text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
          B端 · 机构/加盟方采购
        </button>
      </div>

      {/* C端 */}
      {tab === 'c' && (
        <>
          <section className="mb-8">
            <h2 className="section-title mb-4">C端商品分类</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {C_ITEMS.map((item, i) => (
                <div key={i} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-8">
            <h2 className="section-title mb-4">限时促销</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['限时秒杀', '拼团优惠', '组合套餐', '好评有礼'].map((label, i) => (
                <div key={i} className="card p-5 text-center hover:shadow-md transition">
                  <div className="font-semibold text-primary">{label}</div>
                  <p className="text-xs text-slate-500 mt-1">点击查看活动</p>
                </div>
              ))}
            </div>
          </section>

          {/* 缤果学分 · C端学分兑换专区 */}
          <section className="mb-8">
            <h2 className="section-title mb-1">🏅 学分兑换专区</h2>
            <p className="text-slate-600 text-sm mb-4">用缤果学分兑换学习工具、课程券、实物商品；购买商品也可获赠学分</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: '学习工具月卡', cost: '300学分', tag: '纯学分', popular: true },
                { name: '课程优惠券 ¥50', cost: '500学分', tag: '纯学分', popular: false },
                { name: 'AI教具体验装', cost: '1000学分+¥99', tag: '学分+现金', popular: false },
                { name: '赛事报名9折券', cost: '300学分', tag: '纯学分', popular: true },
                { name: '研学体验优惠券', cost: '800学分', tag: '纯学分', popular: false },
                { name: '认证服务5折', cost: '1000学分', tag: '限量', popular: false },
              ].map((item, i) => (
                <div key={i} className={'card p-5 hover:shadow-md hover:border-primary/30 transition ' + (item.popular ? 'border-primary/30' : '')}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm text-bingo-dark">{item.name}</h3>
                    <span className={'text-[10px] px-2 py-0.5 rounded-full ' + (item.tag === '纯学分' ? 'bg-primary/10 text-primary' : item.tag === '限量' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600')}>{item.tag}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-primary font-bold text-sm">{item.cost}</span>
                    <button type="button" className="text-xs px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-cyan-600">兑换</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 card p-4 bg-amber-50 border-amber-200/50 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-700">购买任意商品可获赠对应学分，好评后额外 +10分</p>
              <Link to="/profile#score-bank" className="text-sm text-primary font-medium hover:underline">查看我的学分 →</Link>
            </div>
          </section>
          <div className="mb-6">
            <Link to="/mall/materials" className="btn-primary">进入学材物资中心 →</Link>
          </div>
        </>
      )}

      {/* B端 */}
      {tab === 'b' && (
        <>
          <section className="mb-8">
            <h2 className="section-title mb-1">B端商品分类</h2>
            <p className="text-slate-600 text-sm mb-4">机构/加盟方专属采购区，支持批量报价与定制咨询</p>
            <div className="grid md:grid-cols-2 gap-4">
              {B_ITEMS.map((item, i) => (
                <div key={i} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mb-8">
            <h2 className="section-title mb-4">加盟方专属采购区</h2>
            <div className="card p-6 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20">
              <p className="text-slate-600 mb-4">加盟签约后解锁专属折扣与品牌物料采购权限，复购量越大享受折扣越高</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/franchise" className="btn-primary text-sm px-4 py-2">申请加盟解锁</Link>
                <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">批量采购咨询</button>
              </div>
            </div>
          </section>
          <section>
            <h2 className="section-title mb-4">B端优惠政策</h2>
            <div className="card p-6">
              <ul className="space-y-2 text-sm text-slate-700">
                <li>· 批量采购享阶梯折扣，采购量越大折扣越大</li>
                <li>· 赛事物料与赛事DIY定制联动，一站式采购</li>
                <li>· 复购提醒与加盟扶持进度同步提醒</li>
                <li>· 售后好评享优惠券，助力口碑传播</li>
              </ul>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
