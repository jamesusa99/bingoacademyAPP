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
          <Link to="/profile/study" className="card p-4 text-center hover:shadow-md transition">学习中心</Link>
          <Link to="/profile/works" className="card p-4 text-center hover:shadow-md transition">个人作品</Link>
          <Link to="/profile#events" className="card p-4 text-center hover:shadow-md transition">我的赛事</Link>
          <Link to="/profile#cert" className="card p-4 text-center hover:shadow-md transition">我的认证</Link>
          <Link to="/growth" className="card p-4 text-center hover:shadow-md transition">我的能力档案</Link>
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
        <h2 className="section-title">B端合作入口</h2>
        <p className="text-slate-600 text-sm mb-3">学校/机构、加盟商、赛事合作方请使用独立账号登录</p>
        <a href="/#/b" className="btn-primary">前往B端登录</a>
      </section>
    </div>
  )
}
