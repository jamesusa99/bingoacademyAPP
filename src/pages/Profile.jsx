// 个人中心 - 资料、服务入口、分佣管理中心（PDF2）
export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">个人中心</h1>
      <p className="text-gray-600 mb-8">用户沉淀、服务入口、分佣管理</p>

      <section id="commission" className="mb-10">
        <h2 className="section-title">分享分佣</h2>
        <div className="card p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-primary/20">
          <div className="font-semibold text-primary mb-2">分佣规则</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>· 推荐新用户购课/报名赛事/采购物资，返现 10%-20%（普通 10%、年费会员 15%、竞赛VIP 20%）</li>
            <li>· 按月结算，每月 1-5 日结算上月已收货/开课分佣</li>
            <li>· 满 50 元可提现至微信零钱，1-2 工作日审核</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <button type="button" className="btn-primary">分佣明细</button>
            <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">推广海报/链接</button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="section-title">服务入口</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['已购课程', '学材物资订单', '积分与优惠券', '收藏', '客服咨询', '升学服务', '消息设置', '账号安全'].map((label) => (
            <div key={label} className="card p-4 text-center hover:shadow-md">
              {label}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">B端合作入口</h2>
        <p className="text-gray-600 text-sm mb-3">学校/机构、加盟商、赛事合作方请使用独立账号登录</p>
        <a href="/#/b" className="btn-primary">前往B端登录</a>
      </section>
    </div>
  )
}
