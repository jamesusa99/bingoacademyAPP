import { Link } from 'react-router-dom'

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

      {/* 基础服务入口 */}
      <section className="mb-10">
        <h2 className="section-title">我的服务</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link to="/profile#orders" className="card p-4 text-center hover:shadow-md transition">我的订单</Link>
          <Link to="/profile/study" className="card p-4 text-center hover:shadow-md transition">我的学习</Link>
          <Link to="/profile#events" className="card p-4 text-center hover:shadow-md transition">我的赛事</Link>
          <Link to="/profile#cert" className="card p-4 text-center hover:shadow-md transition">我的认证</Link>
          <Link to="/profile#favorite" className="card p-4 text-center hover:shadow-md transition">我的收藏</Link>
          <Link to="/profile#messages" className="card p-4 text-center hover:shadow-md transition">消息通知</Link>
          <Link to="/profile#settings" className="card p-4 text-center hover:shadow-md transition">设置</Link>
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
        </div>
      </section>

      {/* 消息说明 */}
      <section className="mb-8">
        <h2 className="section-title">消息通知</h2>
        <p className="text-sm text-slate-600">系统公告、活动提醒、答疑回复、佣金到账提醒、推广订单提醒</p>
      </section>

      <section>
        <h2 className="section-title">B端合作入口</h2>
        <p className="text-slate-600 text-sm mb-3">学校/机构、加盟商、赛事合作方请使用独立账号登录</p>
        <a href="/#/b" className="btn-primary">前往B端登录</a>
      </section>
    </div>
  )
}
