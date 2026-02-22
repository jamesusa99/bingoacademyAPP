import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── 缤果学分银行 ────────────────────────────────────────
function ScoreBank() {
  const [checkedIn, setCheckedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <section id="score-bank" className="mb-10">
      <h2 className="section-title mb-1">缤果学分银行</h2>
      <p className="text-slate-600 text-sm mb-4">打卡签到 · 学习任务 · 积分兑换 · 成长资产</p>

      {/* 学分概览卡 */}
      <div className="card p-6 bg-gradient-to-r from-primary/90 to-cyan-600 text-white mb-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-white/80 text-sm">我的缤果学分</p>
            <p className="text-4xl font-bold mt-1">1,280</p>
            <p className="text-white/70 text-xs mt-1">学分等级：学分达人 ⭐⭐⭐</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-sm">连续打卡</p>
            <p className="text-2xl font-bold">7 天</p>
            <p className="text-white/70 text-xs mt-1">明日继续可得翻倍学分</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          <button
            onClick={() => setCheckedIn(true)}
            disabled={checkedIn}
            className={'px-5 py-2 rounded-lg text-sm font-medium transition ' + (checkedIn ? 'bg-white/20 text-white/60 cursor-default' : 'bg-white text-primary hover:bg-white/90')}
          >
            {checkedIn ? '今日已打卡 ✓' : '立即打卡 +10分'}
          </button>
          <button onClick={() => setActiveTab('exchange')} className="px-5 py-2 rounded-lg text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition">学分兑换</button>
          <button onClick={() => setActiveTab('detail')} className="px-5 py-2 rounded-lg text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition">学分明细</button>
        </div>
      </div>

      {/* 子标签切换 */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {[['overview', '积分中心'], ['checkin', '打卡中心'], ['detail', '学分明细'], ['exchange', '积分兑换'], ['rank', '排行榜']].map(([key, label]) => (
          <button key={key} onClick={() => setActiveTab(key)}
            className={'px-4 py-1.5 rounded-full text-xs font-medium transition ' + (activeTab === key ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
            {label}
          </button>
        ))}
      </div>

      {/* 积分中心 */}
      {activeTab === 'overview' && (
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: '今日可获学分', value: '+30', note: '课程学习·打卡' },
            { label: '本月累计', value: '420', note: '连续打卡翻倍中' },
            { label: '累计兑换', value: '500', note: '已兑换课程券2张' },
          ].map((s, i) => (
            <div key={i} className="card p-5">
              <p className="text-xs text-slate-500">{s.label}</p>
              <p className="text-2xl font-bold text-primary mt-1">{s.value}</p>
              <p className="text-xs text-slate-400 mt-1">{s.note}</p>
            </div>
          ))}
        </div>
      )}

      {/* 打卡中心 */}
      {activeTab === 'checkin' && (
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-3">每日签到打卡</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              {['一', '二', '三', '四', '五', '六', '七'].map((d, i) => (
                <div key={i} className={'w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium ' + (i < 7 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400')}>
                  {d}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600">连续签到7天：基础 +10分/天，连续7天额外 +30分</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-3">学习任务打卡</h3>
            <ul className="space-y-3">
              {[
                { task: '完成课程章节学习', score: '+15分', done: true },
                { task: '提交社群作业', score: '+10分', done: false },
                { task: '完成赛事备赛练习', score: '+20分', done: false },
              ].map((t, i) => (
                <li key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <span className={'text-sm ' + (t.done ? 'line-through text-slate-400' : 'text-slate-700')}>{t.task}</span>
                  <span className={'text-xs font-medium px-2 py-1 rounded-full ' + (t.done ? 'bg-slate-200 text-slate-400' : 'bg-primary/10 text-primary')}>{t.done ? '已完成' : t.score}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 学分明细 */}
      {activeTab === 'detail' && (
        <div className="card overflow-hidden">
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex gap-2 text-xs text-slate-500">
            <span>全部</span><span>·</span><span>打卡获取</span><span>·</span><span>学习获取</span><span>·</span><span>兑换消耗</span>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              { type: '打卡', desc: '每日签到打卡 第7天翻倍', score: '+20', date: '今日' },
              { type: '学习', desc: 'AI启蒙通识课 第3章 完课', score: '+15', date: '今日' },
              { type: '兑换', desc: '兑换课程优惠券×1（-100元）', score: '-100', date: '3天前' },
              { type: '学习', desc: '完成AI能力测评', score: '+30', date: '5天前' },
            ].map((r, i) => (
              <li key={i} className="px-4 py-3 flex items-center justify-between">
                <div>
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary mr-2">{r.type}</span>
                  <span className="text-sm text-slate-700">{r.desc}</span>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <span className={'font-semibold text-sm ' + (r.score.startsWith('-') ? 'text-rose-500' : 'text-emerald-600')}>{r.score}</span>
                  <p className="text-xs text-slate-400">{r.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 积分兑换 */}
      {activeTab === 'exchange' && (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">当前学分：<span className="text-primary font-bold">1,280分</span> · 100分 = 10元抵扣</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: '课程优惠券 ¥50', cost: '500学分', type: '纯学分兑换', tag: '热门' },
              { name: '赛事报名折扣 9折', cost: '300学分', type: '纯学分兑换', tag: '' },
              { name: 'AI启蒙课免费试听', cost: '200学分', type: '纯学分兑换', tag: '新品' },
              { name: '研学体验优惠券', cost: '800学分', type: '纯学分兑换', tag: '' },
              { name: 'AI教具体验装', cost: '1000学分+¥99', type: '学分+现金', tag: '' },
              { name: '认证服务费5折', cost: '1000学分', type: '纯学分兑换', tag: '限量' },
            ].map((item, i) => (
              <div key={i} className="card p-5 hover:shadow-md hover:border-primary/30 transition">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-bingo-dark text-sm">{item.name}</h3>
                  {item.tag && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 shrink-0">{item.tag}</span>}
                </div>
                <p className="text-xs text-slate-500 mt-1">{item.type}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-primary font-bold text-sm">{item.cost}</span>
                  <button type="button" className="text-xs px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-cyan-600">立即兑换</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 排行榜 */}
      {activeTab === 'rank' && (
        <div className="card overflow-hidden">
          <div className="px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
            <p className="font-semibold text-bingo-dark">本月学分排行榜</p>
            <p className="text-xs text-slate-500 mt-1">月度「学分之星」可获免费赛事报名资格或研学优惠券</p>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              { rank: 1, name: '李同学', score: 2860, badge: '🥇' },
              { rank: 2, name: '王同学', score: 2410, badge: '🥈' },
              { rank: 3, name: '张同学', score: 2050, badge: '🥉' },
              { rank: 4, name: '陈同学', score: 1740, badge: '' },
              { rank: 5, name: '赵同学', score: 1520, badge: '' },
            ].map((r, i) => (
              <li key={i} className="px-4 py-3 flex items-center gap-3">
                <span className="w-6 text-center text-sm font-bold text-slate-500">{r.badge || r.rank}</span>
                <span className="flex-1 text-sm text-slate-700">{r.name}</span>
                <span className="font-bold text-primary text-sm">{r.score.toLocaleString()} 分</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* B端机构学分管理 */}
      <div className="mt-4 card p-5 border-primary/20 bg-slate-50">
        <h3 className="font-semibold text-bingo-dark mb-2">B端 · 机构学分管理</h3>
        <p className="text-sm text-slate-600 mb-3">加盟/合作机构可自定义旗下学员学分任务与兑换权益，赋能机构学员激励与留存</p>
        <div className="flex gap-3">
          <Link to="/franchise" className="btn-primary text-sm px-4 py-2">机构学分后台</Link>
          <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">学分规则说明</button>
        </div>
      </div>
    </section>
  )
}

// ─── 推广中心（独立子页面） ────────────────────────────────
function PromoCenter({ onBack }) {
  const [activeTab, setActiveTab] = useState('home')
  const [withdrawing, setWithdrawing] = useState(false)

  const TABS = [
    ['home', '推广首页'],
    ['orders', '推广明细'],
    ['wallet', '佣金结算'],
    ['team', '团队推广'],
    ['rules', '规则说明'],
  ]

  return (
    <div>
      {/* 顶部标题栏 */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-sm text-slate-500 hover:text-primary transition">← 返回个人中心</button>
        <span className="text-slate-300">/</span>
        <span className="text-bingo-dark font-semibold">推广中心</span>
      </div>

      {/* 推广收益总览卡 */}
      <div className="card p-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white mb-5">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <p className="text-white/80 text-sm">可提现佣金</p>
            <p className="text-4xl font-bold mt-1">¥86.50</p>
            <p className="text-white/70 text-xs mt-1">待结算 ¥23.00 · 已累计 ¥1,240.00</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-sm">本月推广订单</p>
            <p className="text-2xl font-bold">12 单</p>
            <p className="text-white/70 text-xs mt-1">转化率 8.3%</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setActiveTab('wallet')}
            className="px-5 py-2 rounded-lg text-sm font-medium bg-white text-amber-600 hover:bg-white/90 transition">立即提现</button>
          <button onClick={() => setActiveTab('orders')}
            className="px-5 py-2 rounded-lg text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition">推广明细</button>
          <button type="button"
            className="px-5 py-2 rounded-lg text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition">生成海报/链接</button>
        </div>
      </div>

      {/* Tab 导航 */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {TABS.map(([key, label]) => (
          <button key={key} onClick={() => setActiveTab(key)}
            className={'px-4 py-1.5 rounded-full text-xs font-medium transition ' + (activeTab === key ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
            {label}
          </button>
        ))}
      </div>

      {/* ── 推广首页 ── */}
      {activeTab === 'home' && (
        <div className="space-y-5">
          {/* 专属推广码 / 海报 */}
          <div className="card p-6 border-primary/20 bg-gradient-to-br from-cyan-50 to-sky-50">
            <h3 className="font-semibold text-bingo-dark mb-4">我的专属推广码</h3>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="w-28 h-28 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center text-slate-300 text-xs">推广二维码</div>
              <div className="flex-1 space-y-2">
                <p className="text-sm text-slate-600">专属推广链接：<span className="font-mono text-xs bg-white px-2 py-1 rounded border border-slate-200">https://bingoacademy.cn/i/USERID</span></p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <button type="button" className="btn-primary text-xs px-4 py-2">保存推广海报</button>
                  <button type="button" className="rounded-lg border border-primary text-primary text-xs px-4 py-2 hover:bg-primary/10">复制推广链接</button>
                  <button type="button" className="rounded-lg border border-slate-200 text-slate-600 text-xs px-4 py-2 hover:bg-slate-50">分享给微信好友</button>
                </div>
              </div>
            </div>
          </div>

          {/* 高佣金推荐榜 */}
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">🔥 高佣金推荐榜</h3>
            <div className="space-y-3">
              {[
                { name: 'AI通识科学营（暑期班）', type: '精品研学', rate: '12%', tag: '热销' },
                { name: '缤果AI赋能课（企业版）', type: '机构课程', rate: '15%', tag: '高佣' },
                { name: '青少年AI创新挑战赛 · 报名套餐', type: '赛事', rate: '8%', tag: '' },
                { name: '学习工具月卡 · 商城', type: '商城商品', rate: '10%', tag: '新品' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-primary/5 transition">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">{i + 1}</span>
                    <div>
                      <p className="text-sm font-medium text-bingo-dark">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {item.tag && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">{item.tag}</span>}
                    <span className="text-sm font-bold text-amber-600">佣金 {item.rate}</span>
                    <button type="button" className="text-xs px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-cyan-600">一键分享</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 推广活动专场 */}
          <div className="card p-6 bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200/60">
            <h3 className="font-semibold text-bingo-dark mb-3">🎁 推广活动专场</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: '暑期佣金翻倍', desc: '7月1日-8月31日，精品营课佣金 ×2', badge: '进行中' },
                { title: '邀新有礼', desc: '每邀请1位新用户注册，额外奖励 +¥5', badge: '长期' },
                { title: '团购裂变奖励', desc: '3人成团推广，额外奖励 +¥20', badge: '进行中' },
                { title: '老带新双向奖励', desc: '被推广人首单完成，双方各得 +100学分', badge: '长期' },
              ].map((act, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-rose-100">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm text-bingo-dark">{act.title}</p>
                    <span className={'text-[10px] px-2 py-0.5 rounded-full ' + (act.badge === '进行中' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500')}>{act.badge}</span>
                  </div>
                  <p className="text-xs text-slate-500">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 邀请新用户 */}
          <div className="card p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/50">
            <h3 className="font-semibold text-bingo-dark mb-2">老带新 · 邀请有礼</h3>
            <p className="text-sm text-slate-600 mb-4">邀请新用户注册，双方均可获得专属福利；推荐好友报名课程/赛事，可额外获得佣金奖励；机构推荐新机构合作享返佣</p>
            <div className="flex gap-3 flex-wrap">
              <button type="button" className="btn-primary text-sm px-4 py-2">生成邀请海报</button>
              <button type="button" className="rounded-lg border border-amber-400 text-amber-700 px-4 py-2 text-sm hover:bg-amber-50">复制邀请链接</button>
            </div>
          </div>
        </div>
      )}

      {/* ── 推广明细 ── */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {['全部', '待结算', '已结算', '失效'].map(s => (
              <button key={s} className="px-3 py-1.5 rounded-full text-xs bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition">{s}</button>
            ))}
          </div>
          <div className="card overflow-hidden">
            <div className="grid grid-cols-6 px-4 py-3 bg-slate-50 border-b border-slate-100 text-xs text-slate-500 font-medium">
              <span className="col-span-2">推广商品</span>
              <span>推广时间</span>
              <span>订单金额</span>
              <span>佣金</span>
              <span>状态</span>
            </div>
            <ul className="divide-y divide-slate-100">
              {[
                { name: 'AI通识科学营·暑期班', date: '今日 14:23', amount: '¥1,280', commission: '¥153.60', status: '待结算', statusColor: 'text-amber-600' },
                { name: '学习工具月卡', date: '昨日 09:11', amount: '¥198', commission: '¥19.80', status: '已结算', statusColor: 'text-emerald-600' },
                { name: '赛事报名套餐', date: '3天前', amount: '¥380', commission: '¥30.40', status: '已结算', statusColor: 'text-emerald-600' },
                { name: '机器人实训营', date: '7天前', amount: '¥2,580', commission: '¥0.00', status: '失效(退款)', statusColor: 'text-slate-400 line-through' },
              ].map((r, i) => (
                <li key={i} className="grid grid-cols-6 px-4 py-3 text-sm items-center">
                  <span className="col-span-2 text-slate-700 font-medium truncate pr-2">{r.name}</span>
                  <span className="text-slate-500 text-xs">{r.date}</span>
                  <span className="text-slate-700">{r.amount}</span>
                  <span className="font-bold text-primary">{r.commission}</span>
                  <span className={'text-xs font-medium ' + r.statusColor}>{r.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── 佣金结算 ── */}
      {activeTab === 'wallet' && (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: '可提现余额', value: '¥86.50', color: 'text-amber-600' },
              { label: '待结算佣金', value: '¥23.00', color: 'text-slate-500' },
              { label: '已累计结算', value: '¥1,240.00', color: 'text-emerald-600' },
            ].map((s, i) => (
              <div key={i} className="card p-5 text-center">
                <p className="text-xs text-slate-500">{s.label}</p>
                <p className={'text-2xl font-bold mt-1 ' + s.color}>{s.value}</p>
              </div>
            ))}
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">申请提现</h3>
            {withdrawing ? (
              <div className="text-center py-6">
                <div className="text-4xl mb-2">✅</div>
                <p className="font-semibold text-bingo-dark mb-1">提现申请已提交</p>
                <p className="text-sm text-slate-500">预计 T+1 个工作日到账微信零钱</p>
                <button onClick={() => setWithdrawing(false)} className="btn-primary text-sm px-6 py-2 mt-4">完成</button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-200/60">
                  <div>
                    <p className="text-sm font-medium text-bingo-dark">可提现余额</p>
                    <p className="text-2xl font-bold text-amber-600 mt-0.5">¥86.50</p>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    <p>到账方式：微信零钱</p>
                    <p>最低提现：¥10</p>
                    <p>T+1 到账，无手续费</p>
                  </div>
                </div>
                <button onClick={() => setWithdrawing(true)} className="btn-primary w-full py-3 text-sm">申请提现 ¥86.50</button>
              </div>
            )}
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-3">提现记录</h3>
            <ul className="divide-y divide-slate-100">
              {[
                { amount: '¥120.00', time: '2025-06-20 10:30', arrive: '2025-06-21', status: '已到账' },
                { amount: '¥56.80', time: '2025-05-15 14:20', arrive: '2025-05-16', status: '已到账' },
              ].map((r, i) => (
                <li key={i} className="py-3 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-bingo-dark">{r.amount}</p>
                    <p className="text-xs text-slate-400">{r.time} · 到账 {r.arrive}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{r.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── 团队推广（教师/机构） ── */}
      {activeTab === 'team' && (
        <div className="space-y-5">
          <div className="card p-6 bg-amber-50 border-amber-200/60">
            <h3 className="font-semibold text-bingo-dark mb-1">团队推广</h3>
            <p className="text-sm text-slate-600 mb-4">仅教师/机构角色可使用。邀请团队成员加入，团队成员每产生一笔佣金，团队长可额外分成</p>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn-primary text-sm px-4 py-2">邀请团队成员</button>
              <button type="button" className="rounded-lg border border-primary text-primary text-sm px-4 py-2 hover:bg-primary/10">团队专属推广素材</button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: '团队成员数', value: '8 人' },
              { label: '团队总收益', value: '¥3,280' },
              { label: '本月新增成员', value: '2 人' },
            ].map((s, i) => (
              <div key={i} className="card p-5 text-center">
                <p className="text-xs text-slate-500">{s.label}</p>
                <p className="text-2xl font-bold text-primary mt-1">{s.value}</p>
              </div>
            ))}
          </div>
          <div className="card overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 font-semibold text-sm text-bingo-dark">团队成员列表</div>
            <ul className="divide-y divide-slate-100">
              {[
                { name: '王老师', joined: '2025-03-10', orders: 12, commission: '¥860' },
                { name: '李老师', joined: '2025-04-02', orders: 8, commission: '¥520' },
                { name: '张老师', joined: '2025-05-15', orders: 3, commission: '¥180' },
              ].map((m, i) => (
                <li key={i} className="px-4 py-3 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-bingo-dark">{m.name}</p>
                    <p className="text-xs text-slate-400">加入 {m.joined}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{m.commission}</p>
                    <p className="text-xs text-slate-400">{m.orders} 单</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── 规则说明 ── */}
      {activeTab === 'rules' && (
        <div className="space-y-4">
          <div className="card p-6 bg-slate-50">
            <h3 className="font-semibold text-bingo-dark mb-4">核心推广规则</h3>
            <dl className="grid gap-3 text-sm">
              {[
                { t: '推广关系有效期', d: '被推广人点击/扫码后 30 天内完成的订单均计入该推广人；30 天内不被其他推广人覆盖（首次绑定优先）' },
                { t: '佣金计算', d: '订单实付金额 × 对应佣金比例（不含运费/优惠券抵扣），保留 2 位小数' },
                { t: '结算周期', d: '订单确认完成后 7 天（虚拟商品为购买完成，实物为确认收货）自动转为可提现' },
                { t: '退款处理', d: '订单退款/取消后，对应佣金从待结算中扣除；已结算的从后续可提现余额抵扣' },
                { t: '提现规则', d: '最低 ¥10，仅支持微信零钱，T+1 到账，无手续费' },
                { t: '佣金比例', d: '学生/家长：平台基础比例；教师/机构：基础比例 +5%～10% 加成；企业角色无推广权限' },
              ].map((item, i) => (
                <div key={i} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <dt className="font-medium text-slate-800 mb-0.5">{item.t}</dt>
                  <dd className="text-slate-600">{item.d}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card p-6 overflow-x-auto">
            <h3 className="font-semibold text-bingo-dark mb-4">角色与推广权益对照</h3>
            <table className="w-full text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 px-3 font-semibold text-slate-800">角色</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-800">专属权益</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-800">佣金加成</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-800">团队推广</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['学生/家长', '个人专属推广码/海报/链接', '基础比例', '无'],
                  ['教师/机构', '定制推广素材 + 额外加成', '基础 +5%～10%', '有（可分成）'],
                  ['企业', '无推广权限', '无', '无'],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    {row.map((cell, j) => <td key={j} className={'py-3 px-3 ' + (j === 0 ? 'font-medium text-slate-800' : '')}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">核心流程说明</h3>
            <div className="space-y-2">
              {[
                ['推广权限开通', '登录后进入推广中心，系统自动开通（非企业角色），首次进入弹出规则说明，确认后生成专属推广码（永久有效）'],
                ['推广素材分享', '课程/商品/赛事详情页均有"分享"按钮，支持生成含推广码的海报保存至相册、复制带ID链接、直接分享微信好友'],
                ['推广关系绑定', '被推广人通过链接/扫码进入后，页面顶部提示"由XXX推荐"，自动建立绑定，30天内消费均计入'],
                ['佣金计算与结算', '支付完成→待结算；7天后自动转为可提现；退款/取消→对应佣金扣除，状态实时推送通知'],
                ['提现流程', '进入佣金结算→余额≥¥10→申请提现→系统验证微信实名→审核中（≤10分钟）→到账微信零钱'],
              ].map(([title, desc], i) => (
                <details key={i} className="border border-slate-200 rounded-xl overflow-hidden group">
                  <summary className="px-4 py-3 bg-slate-50 font-medium text-sm text-bingo-dark cursor-pointer list-none flex items-center justify-between">
                    <span>{i + 1}. {title}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
                  </summary>
                  <div className="px-4 py-3 text-sm text-slate-600 border-t border-slate-100">{desc}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── 个人中心主组件 ────────────────────────────────────────
export default function Profile() {
  const [page, setPage] = useState('main')

  if (page === 'promo') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PromoCenter onBack={() => setPage('main')} />
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">个人中心</h1>
      <p className="text-slate-600 mb-8">用户信息 · 学习服务 · 学分银行 · 推广中心</p>

      {/* 用户信息 */}
      <section className="mb-10">
        <h2 className="section-title">用户信息</h2>
        <div className="card p-6 flex flex-wrap items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-semibold">头</div>
          <div>
            <div className="font-semibold text-bingo-dark">昵称 / 手机号</div>
            <div className="text-sm text-slate-500">角色：学生/家长 · 推广专属二维码/个人名片</div>
          </div>
          <Link to="/login" className="ml-auto rounded-lg border border-primary text-primary px-4 py-2 text-sm">编辑资料</Link>
        </div>
      </section>

      {/* 缤果学分银行 */}
      <ScoreBank />

      {/* C端服务入口 */}
      <section className="mb-10">
        <h2 className="section-title">C端 · 我的服务</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link to="/profile#orders" className="card p-4 text-center hover:shadow-md transition">我的订单</Link>
          <Link to="/profile/study" className="card p-4 text-center hover:shadow-md transition">学习中心</Link>
          <Link to="/profile/works" className="card p-4 text-center hover:shadow-md transition">个人作品</Link>
          <Link to="/profile#events" className="card p-4 text-center hover:shadow-md transition">我的赛事</Link>
          <Link to="/profile#cert" className="card p-4 text-center hover:shadow-md transition">我的认证</Link>
          <Link to="/courses#growth-plan" className="card p-4 text-center hover:shadow-md transition">我的能力档案</Link>
          <Link to="/profile#messages" className="card p-4 text-center hover:shadow-md transition">消息通知</Link>
          <Link to="/profile#settings" className="card p-4 text-center hover:shadow-md transition">设置</Link>
        </div>
      </section>

      {/* B端合作入口 */}
      <section className="mb-10">
        <h2 className="section-title">B端 · 合作/加盟管理</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link to="/franchise" className="card p-4 text-center hover:shadow-md hover:border-primary/30 transition bg-gradient-to-br from-cyan-50 to-sky-50">
            <div className="font-semibold text-primary">加盟申请</div>
            <div className="text-xs text-slate-500 mt-1">加盟进度查询</div>
          </Link>
          <Link to="/events?tab=b" className="card p-4 text-center hover:shadow-md hover:border-primary/30 transition bg-gradient-to-br from-cyan-50 to-sky-50">
            <div className="font-semibold text-primary">赛事DIY定制</div>
            <div className="text-xs text-slate-500 mt-1">定制进度查询</div>
          </Link>
          <a href="/#/b" className="card p-4 text-center hover:shadow-md hover:border-primary/30 transition bg-gradient-to-br from-cyan-50 to-sky-50">
            <div className="font-semibold text-primary">合作管理</div>
            <div className="text-xs text-slate-500 mt-1">机构合作进度</div>
          </a>
          <Link to="/mall?b=1" className="card p-4 text-center hover:shadow-md hover:border-primary/30 transition bg-gradient-to-br from-cyan-50 to-sky-50">
            <div className="font-semibold text-primary">采购订单</div>
            <div className="text-xs text-slate-500 mt-1">加盟方专属采购</div>
          </Link>
        </div>
      </section>

      {/* 推广中心入口 */}
      <section id="promo" className="mb-10">
        <h2 className="section-title">推广中心</h2>
        <div className="card p-6 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-300/40 hover:border-amber-400/60 hover:shadow-md transition cursor-pointer"
          onClick={() => setPage('promo')}>
          <div className="flex flex-wrap items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl shrink-0">📢</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-bingo-dark text-lg">推广中心</h3>
              <p className="text-sm text-slate-600 mt-1">专属推广码 · 海报与链接生成 · 推广订单明细 · 佣金结算提现 · 活动专场 · 邀请有礼 · 团队推广</p>
              <div className="flex gap-4 mt-3 text-xs text-slate-500">
                <span>可提现余额 <strong className="text-amber-600">¥86.50</strong></span>
                <span>待结算 <strong className="text-slate-700">¥23.00</strong></span>
                <span>本月 <strong className="text-slate-700">12 单</strong></span>
              </div>
            </div>
            <button type="button" className="shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition">
              进入推广中心 →
            </button>
          </div>
        </div>
      </section>

      {/* 消息说明 */}
      <section className="mb-8">
        <h2 className="section-title">消息通知</h2>
        <p className="text-sm text-slate-600">系统公告、活动提醒、答疑回复、佣金到账提醒、推广订单提醒</p>
      </section>
    </div>
  )
}
