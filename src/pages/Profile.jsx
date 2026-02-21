import { useState } from 'react'
import { Link } from 'react-router-dom'

// 缤果学分 - 打卡签到子模块
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
            { label: '今日可获学分', value: '+30', note: '课程学习·打卡·分享' },
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
                { task: '分享学习成果至朋友圈', score: '+5分', done: false },
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
            <span>全部</span><span>·</span><span>打卡获取</span><span>·</span><span>学习获取</span><span>·</span><span>分享获取</span><span>·</span><span>兑换消耗</span>
          </div>
          <ul className="divide-y divide-slate-100">
            {[
              { type: '打卡', desc: '每日签到打卡 第7天翻倍', score: '+20', date: '今日' },
              { type: '学习', desc: 'AI启蒙通识课 第3章 完课', score: '+15', date: '今日' },
              { type: '分享', desc: '分享课程至朋友圈成功', score: '+5', date: '昨日' },
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

// 个人中心：用户信息、订单/学习/赛事/认证、分享与推广、佣金结算、团队推广(教师/机构)
export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">个人中心</h1>
      <p className="text-slate-600 mb-8">用户信息、订单学习、分享与推广、佣金结算</p>

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

      {/* B端合作入口（新增） */}
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

      {/* 分享与推广【核心】 */}
      <section id="promo" className="mb-10">
        <h2 className="section-title">分享与推广</h2>
        <div className="space-y-4">
          <div className="card p-6 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20">
            <h3 className="font-semibold text-primary mb-3">推广中心首页</h3>
            <ul className="text-sm text-slate-700 space-y-2 mb-4">
              <li>· 个人专属推广码/海报/链接（一键生成、保存、分享至微信好友/朋友圈）</li>
              <li>· 今日/本月推广收益概览（已到账/待结算）</li>
              <li>· 高佣金推荐榜（平台精选高佣金课程/商品，一键分享）</li>
              <li>· 推广活动专场（佣金翻倍、邀新有礼等，实时更新）</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="btn-primary">推广中心</button>
              <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">生成海报/链接</button>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-3">推广订单明细</h3>
            <p className="text-sm text-slate-600 mb-2">筛选：全部 / 待结算 / 已结算 / 失效</p>
            <p className="text-sm text-slate-600">列表：推广商品/课程名称、推广时间、被推广人、订单金额、佣金比例、佣金金额、订单状态、结算时间；点击可查订单详情。</p>
            <Link to="/profile#orders-promo" className="text-primary text-sm mt-2 inline-block">查看明细 →</Link>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-3">佣金结算中心</h3>
            <ul className="text-sm text-slate-700 space-y-1 mb-4">
              <li>· 可提现余额、待结算佣金、已结算佣金</li>
              <li>· 提现：微信零钱，最低 10 元，T+1 到账</li>
              <li>· 提现记录：金额、申请时间、到账时间、状态（审核中/已到账/失败）</li>
              <li>· 结算规则：确认收货后 7 天结算；退款订单扣除对应佣金</li>
            </ul>
            <div className="flex gap-3">
              <button type="button" className="btn-primary">去提现</button>
              <span className="text-sm text-slate-500 self-center">可提现余额：-- 元</span>
            </div>
          </div>

          <div className="card p-6 bg-slate-50">
            <h3 className="font-semibold text-bingo-dark mb-3">推广规则说明</h3>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>· 佣金比例：不同商品/课程/角色比例不同，详情见各详情页</li>
              <li>· 绑定规则：被推广人点击链接/扫码后 30 天内转化计入</li>
              <li>· 退款/失效订单：扣除对应佣金</li>
              <li>· 提现：门槛 10 元，T+1 到账，无手续费</li>
            </ul>
          </div>

          <div className="card p-6 border-amber-200/60 bg-amber-50/50">
            <h3 className="font-semibold text-bingo-dark mb-3">团队推广（仅教师/机构）</h3>
            <p className="text-sm text-slate-600 mb-2">团队成员列表、团队总推广收益、团队佣金分成比例；团队推广数据统计（新增成员、转化订单、总佣金）；团队专属推广素材。</p>
            <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">进入团队推广</button>
          </div>

          {/* ========== 核心概念与规则（展开） ========== */}
          <div id="promo-terms" className="card p-6 bg-slate-50/80">
            <h3 className="font-semibold text-bingo-dark mb-4">核心推广概念</h3>
            <dl className="grid gap-3 text-sm">
              <div><dt className="font-medium text-slate-800">推广人</dt><dd className="text-slate-600 mt-0.5">开通推广权限的用户（学生/家长/教师/机构，企业角色除外）</dd></div>
              <div><dt className="font-medium text-slate-800">被推广人</dt><dd className="text-slate-600 mt-0.5">通过推广人分享的二维码/海报/链接进入小程序的新/老用户</dd></div>
              <div><dt className="font-medium text-slate-800">推广关系</dt><dd className="text-slate-600 mt-0.5">被推广人点击/扫码后与推广人建立的绑定关系，默认有效期 30 天</dd></div>
              <div><dt className="font-medium text-slate-800">有效订单</dt><dd className="text-slate-600 mt-0.5">被推广人在推广关系有效期内完成支付，且无退款/取消的订单</dd></div>
              <div><dt className="font-medium text-slate-800">待结算佣金</dt><dd className="text-slate-600 mt-0.5">有效订单产生的佣金，未达到结算条件的金额</dd></div>
              <div><dt className="font-medium text-slate-800">可提现佣金</dt><dd className="text-slate-600 mt-0.5">达到结算条件，已进入推广人可提现余额的金额</dd></div>
              <div><dt className="font-medium text-slate-800">结算周期</dt><dd className="text-slate-600 mt-0.5">订单确认完成后 7 天（实物商品为确认收货，虚拟商品为购买完成）</dd></div>
              <div><dt className="font-medium text-slate-800">最低提现门槛</dt><dd className="text-slate-600 mt-0.5">10 元（无提现手续费，仅支持微信零钱提现）</dd></div>
            </dl>
          </div>

          {/* 角色与推广权益 */}
          <div className="card p-6 overflow-x-auto">
            <h3 className="font-semibold text-bingo-dark mb-4">角色与推广权益</h3>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 px-3 font-semibold text-slate-800">角色</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-800">专属推广权益</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-800">佣金比例规则</th>
                  <th className="text-left py-2 px-3 font-semibold text-slate-800">团队推广权限</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-3 font-medium text-slate-800">学生/家长</td>
                  <td className="py-3 px-3">个人专属推广码/海报/链接</td>
                  <td className="py-3 px-3">平台统一设置基础佣金比例</td>
                  <td className="py-3 px-3">无</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-3 font-medium text-slate-800">教师/机构</td>
                  <td className="py-3 px-3">定制推广素材、基础佣金额外加成</td>
                  <td className="py-3 px-3">基础佣金比例 +5%～10% 额外加成</td>
                  <td className="py-3 px-3">有（可组建团队享分成）</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 font-medium text-slate-800">企业</td>
                  <td className="py-3 px-3">无推广权限</td>
                  <td className="py-3 px-3">无</td>
                  <td className="py-3 px-3">无</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 核心推广交互流程 */}
          <div className="card p-6">
            <h3 className="font-semibold text-bingo-dark mb-4">核心推广交互流程</h3>
            <div className="space-y-4 text-sm">
              <details className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="px-4 py-3 bg-slate-50 font-medium text-slate-800 cursor-pointer list-none flex items-center justify-between">
                  <span>3.1 推广权限开通流程</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="px-4 py-3 text-slate-600 border-t border-slate-200 space-y-2">
                  <p>用户登录 → 进入【个人中心-分享与推广】，系统自动检测并开通权限（非企业角色默认开通，无需申请）；</p>
                  <p>首次进入推广中心，弹出推广规则说明弹窗，勾选「已阅读并同意」后关闭（仅首次展示）；</p>
                  <p>开通后自动生成个人专属推广码/海报/链接（永久有效，支持重新生成）。</p>
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="px-4 py-3 bg-slate-50 font-medium text-slate-800 cursor-pointer list-none flex items-center justify-between">
                  <span>3.2 推广素材生成与分享流程</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="px-4 py-3 text-slate-600 border-t border-slate-200 space-y-3">
                  <p className="font-medium text-slate-700">通用分享（全业务板块适配）</p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>课程/商品/赛事/集训营等详情页右上角挂载统一样式分享按钮；</li>
                    <li>点击分享 → 弹出【生成海报 / 复制链接 / 分享给微信好友】；</li>
                    <li>生成海报：一键保存至相册，含推广人专属二维码、业务信息、佣金提示；</li>
                    <li>复制链接：自动复制带推广人 ID 的专属链接+推荐文案；</li>
                    <li>分享微信好友：跳转微信好友列表，一键发送海报/链接+推荐文案。</li>
                  </ul>
                  <p className="font-medium text-slate-700 pt-1">推广中心专属分享</p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>【高佣金推荐榜】选择内容 → 【一键分享】执行上述步骤；</li>
                    <li>【个人专属推广码】→【保存/分享】生成通用推广海报，引导被推广人进入首页。</li>
                  </ul>
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="px-4 py-3 bg-slate-50 font-medium text-slate-800 cursor-pointer list-none flex items-center justify-between">
                  <span>3.3 推广关系绑定流程</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="px-4 py-3 text-slate-600 border-t border-slate-200 space-y-2">
                  <p>被推广人通过推广人分享的二维码/海报/链接进入 → 系统自动解析推广人 ID；</p>
                  <p>页面顶部弹出提示【由 XXX 推荐，享专属福利】，自动建立推广关系绑定；</p>
                  <p>若未登录则先引导登录，登录后自动完成绑定；推广关系 30 天内有效，期间消费均计入该推广人；</p>
                  <p>30 天内通过其他推广人链接进入，保留首次绑定，不覆盖；到期后可重新与其他推广人建立绑定。</p>
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="px-4 py-3 bg-slate-50 font-medium text-slate-800 cursor-pointer list-none flex items-center justify-between">
                  <span>3.4 佣金计算与结算流程</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="px-4 py-3 text-slate-600 border-t border-slate-200 space-y-2">
                  <p><strong>佣金计算：</strong>订单实付金额 × 对应佣金比例（不含运费/优惠券抵扣，保留 2 位小数）。</p>
                  <p><strong>状态更新：</strong>支付完成 → 佣金进入【待结算】；达到结算周期 → 自动转为【可提现】；订单退款/取消 → 扣除待结算佣金，已结算从后续可提现抵扣，明细标注「订单失效，佣金扣除」。</p>
                  <p><strong>消息通知：</strong>佣金状态变更（待结算、可提现、扣除）实时推送小程序消息+微信服务通知。</p>
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="px-4 py-3 bg-slate-50 font-medium text-slate-800 cursor-pointer list-none flex items-center justify-between">
                  <span>3.5 佣金提现流程</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="px-4 py-3 text-slate-600 border-t border-slate-200 space-y-2">
                  <p>进入【个人中心-分享与推广-佣金结算中心】查看可提现余额；</p>
                  <p>点击【申请提现】→ 余额 ≥10 元时弹出确认（提现金额、到账方式、到账时间）；</p>
                  <p>确认后系统验证微信实名（与登录微信一致）；验证通过 → 申请进入【审核中】（系统自动，≤10 分钟）；</p>
                  <p>审核通过 → 佣金转入微信零钱，通知【提现成功，已到账微信零钱】；验证失败/余额不足 → 提示原因并引导核对。</p>
                </div>
              </details>
              <details className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="px-4 py-3 bg-slate-50 font-medium text-slate-800 cursor-pointer list-none flex items-center justify-between">
                  <span>3.6 教师/机构团队推广流程</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="px-4 py-3 text-slate-600 border-t border-slate-200 space-y-2">
                  <p>教师/机构进入【推广中心-团队推广】→【邀请团队成员】生成团队专属推广码；</p>
                  <p>其他用户通过该码绑定成为团队成员，建立永久团队关系；</p>
                  <p>团队成员产生推广佣金，按平台设置比例计算团队分成（如团队长享 10%）；团队佣金与个人佣金同步结算，在佣金结算中心单独展示；</p>
                  <p>团队长可查看【团队成员列表、团队总收益、成员转化数据】。</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* 消息说明 */}
      <section className="mb-8">
        <h2 className="section-title">消息通知</h2>
        <p className="text-sm text-slate-600">系统公告、活动提醒、答疑回复、佣金到账提醒、推广订单提醒</p>
      </section>

      <section>
        <h2 className="section-title">老带新 · 邀请有礼</h2>
        <div className="card p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/50">
          <p className="font-medium text-bingo-dark mb-2">邀请新用户注册，双方均可获得专属福利</p>
          <p className="text-sm text-slate-600 mb-4">推荐好友报名课程/赛事，可额外获得佣金奖励，机构推荐新机构合作享返佣</p>
          <div className="flex gap-3">
            <button type="button" className="btn-primary text-sm px-4 py-2">生成邀请海报</button>
            <Link to="/profile#promo" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm hover:bg-primary/10">进入推广中心</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
