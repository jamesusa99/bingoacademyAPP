import { Link } from 'react-router-dom'

const posterBanners = [
  { id: 'ai-enlighten', title: 'AI 启蒙通识课', desc: '面向8-14岁 · 建立AI科学认知框架', img: 'https://placehold.co/1200x500/0891b2/ffffff?text=AI%E5%90%AF%E8%92%99%E9%80%9A%E8%AF%86%E8%AF%BE', to: '/courses/detail/ai-enlighten' },
  { id: 'ai-programming', title: 'AI编程入门课', desc: '面向10-15岁 · Python核心语法与计算思维', img: 'https://placehold.co/1200x500/0f172a/ffffff?text=AI%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8%E8%AF%BE', to: '/courses/detail/ai-programming' },
  { id: 'ai-art', title: 'AI 艺术创意工坊', desc: '面向8-15岁 · AIGC工具与提示词工程', img: 'https://placehold.co/1200x500/155e75/ffffff?text=AI%E8%89%BA%E6%9C%AF%E5%88%9B%E6%84%8F%E5%B7%A5%E5%9D%8A', to: '/courses/detail/ai-art' },
  { id: 'ai-robot', title: '智能机器人实战营', desc: '面向9-15岁 · 含器材包 ¥4500', img: 'https://placehold.co/1200x500/0e7490/ffffff?text=%E6%99%BA%E8%83%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AE%9E%E6%88%98%E8%90%A5', to: '/courses/detail/ai-robot' },
]

const categories = [
  { key: 'literacy', name: '素养精品课', desc: 'AI素养课（不止于工具课，更强调元认知与面向未来的素养）', to: '/courses?cat=literacy' },
  {
    key: 'contest',
    name: '竞赛培优课',
    desc: '集训营 + 模拟赛 + 真题精讲 + 一对一答疑；支持按赛事/等级筛选',
    to: '/courses?cat=contest',
  },
  {
    key: 'exam',
    name: '升学赋能课',
    desc: '科技特长生路径课 + 综评/强基材料辅导 + 真题与模拟；可与成长计划升学套餐组合',
    to: '/courses?cat=exam',
  },
  { key: 'career', name: '就业衔接课', desc: 'AI+岗位技能、项目实训与就业衔接', to: '/courses?cat=career' },
]

const stages = [
  { path: '/courses?stage=enlighten', name: '启蒙班', range: '3-12岁' },
  { path: '/courses?stage=advance', name: '进阶班', range: '10-14岁' },
  { path: '/courses?stage=contest', name: '竞赛班', range: '14-18岁' },
  { path: '/courses?stage=exam', name: '升学护航班', range: '高中' },
  { path: '/courses?stage=career', name: '就业衔接班', range: '18+' },
]

const courseTypes = [
  {
    key: 'ace',
    name: '王牌课',
    desc: '平台沉淀的高复购高口碑主打课程',
    img: 'https://placehold.co/640x360/0f172a/ffffff?text=%E7%8E%8B%E7%89%8C%E8%AF%BE',
  },
  {
    key: 'hot',
    name: '爆款课·科技创新',
    desc: '面向竞赛/升学的高转化主题课',
    img: 'https://placehold.co/640x360/0891b2/ffffff?text=%E7%88%86%E6%AC%BE%E8%AF%BE%C2%B7%E7%A7%91%E6%8A%80%E5%88%9B%E6%96%B0',
  },
]

const courseList = [
  {
    id: 'ai-enlighten',
    name: 'AI 启蒙通识课',
    cat: '素养',
    stage: '8-14岁',
    teacher: '缤果讲师团',
    price: '咨询',
    commission: '10%',
    hasTrial: true,
    audience: '8-14岁',
    learningGoal: '建立对人工智能的科学认知框架，理解AI与人类社会的协作关系，培养未来的数字公民素养。',
    keyDesc: '体系化涵盖机器感知、知识表征推理、机器学习与自然交互四大核心模块。课程摒弃枯燥理论，搭配人脸识别、语音控制等丰富的AI互动实验，通过动手实验与互动项目，引导孩子建立对 AI 工作方式的直观理解。',
  },
  {
    id: 'ai-programming',
    name: 'AI编程入门课',
    cat: '编程',
    stage: '10-15岁',
    teacher: '缤果讲师团',
    price: '咨询',
    commission: '10%',
    hasTrial: true,
    audience: '10-15岁',
    learningGoal: '掌握 Python 核心语法，初步建立计算思维，具备开发独立小型软件的能力。',
    keyDesc: '采用Python编程基础+AI场景应用的双重教学法。通过项目制学习，带领学生亲手编写计算器、智能贪吃蛇、迷宫寻路算法等应用程序。在编程项目中引入基础的算法思想与问题拆解方法，为后续学习人工智能打下认知基础。',
  },
  {
    id: 'ai-art',
    name: 'AI 艺术创意工坊',
    cat: '创意',
    stage: '8-15岁',
    teacher: '缤果讲师团',
    price: '咨询',
    commission: '10%',
    hasTrial: true,
    audience: '8-15岁',
    learningGoal: '掌握生成式AI（AIGC）工具的使用，培养「提示词工程」能力与审美表达。',
    keyDesc: '融合即梦、豆包、通义、ComfyUI等工具，带领孩子从零开始构建自己的数字画展或绘本。课程核心不在于绘画技巧，而在于如何将脑中的创意转化为精准的指令，培养跨学科的表达力。',
  },
  {
    id: 'ai-robot',
    name: '智能机器人实战营',
    cat: '硬件',
    stage: '9-15岁',
    teacher: '缤果讲师团',
    price: '¥4500',
    priceNote: '含器材包',
    commission: '10%',
    hasTrial: false,
    audience: '9-15岁',
    learningGoal: '理解传感器原理与嵌入式编程，实现AI算法在物理世界的落地。',
    keyDesc: '使用 Arduino 或树莓派硬件平台，亲手组装具备避障、人脸追踪、自动巡航功能的智能小车。让代码走出屏幕，让孩子在动手拆装中理解工业 4.0 的基本逻辑。',
  },
]

const toolItems = [
  { id: 'tool-1', title: '错题帮AI', desc: '智能错题本与个性化巩固', price: '¥9.9/月' },
  { id: 'tool-2', title: '作业批改助手', desc: '自动批改与点评建议', price: '¥19.9/月' },
  { id: 'tool-3', title: '梅林口语', desc: 'AI口语练习与测评', price: '¥29.9/月' },
  { id: 'tool-4', title: '学习报告生成器', desc: '学习数据可视化与报告', price: '¥0' },
]

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI精品课</h1>
      <p className="text-slate-600 mb-8">按分类选课、按阶段选课、课程类型与课程详情列表一站式呈现</p>

      {/* 海报板（后台可配置） */}
      <section className="mb-10">
        <h2 className="section-title mb-4">课程海报</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {posterBanners.map((p) => (
            <Link key={p.id} to={p.to} className="card overflow-hidden p-0 hover:shadow-md transition">
              <div className="aspect-[16/9] bg-slate-100">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="font-semibold text-primary">{p.title}</div>
                <div className="text-sm text-slate-600 mt-1">{p.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 按分类选课（排序：素养→培优→升学→就业） */}
      <section className="mb-10">
        <h2 className="section-title mb-4">按分类选课</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((c) => (
            <Link key={c.key} to={c.to} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
              <div className="font-semibold text-primary">{c.name}</div>
              <p className="text-sm text-slate-600 mt-2">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title mb-4">按阶段选课</h2>
        <div className="flex flex-wrap gap-3">
          {stages.map((s) => (
            <Link key={s.name} to={s.path} className="card px-5 py-3 hover:shadow-md hover:border-primary/30">
              <span className="font-medium">{s.name}</span>
              <span className="text-slate-500 text-sm ml-2">{s.range}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title mb-4">课程类型</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {courseTypes.map((t) => (
            <div key={t.key} className="card p-0 overflow-hidden hover:shadow-md transition">
              <div className="aspect-[16/9] bg-slate-100">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-primary">{t.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title mb-4">课程详情列表</h2>
        <p className="text-slate-600 text-sm mb-4">每门课程均支持：大纲、讲师、评价、试看、课程佣金比例、分享（海报/链接）、加入学习中心；购买支持微信支付、优惠券、拼团</p>
        <div className="grid md:grid-cols-2 gap-4">
          {courseList.map((c) => (
            <div key={c.id} className="card p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-semibold text-bingo-dark line-clamp-2">{c.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">面向人群：{c.audience} · {c.cat}</p>
                  <p className="text-sm text-slate-600 mt-1 line-clamp-2">{c.keyDesc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-primary font-semibold">{c.price}{c.priceNote ? <span className="text-xs font-normal">（{c.priceNote}）</span> : ''}</div>
                  <div className="text-xs text-slate-500 mt-1">佣金比例 {c.commission}</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link to={`/courses/detail/${c.id}`} className="btn-primary text-sm px-4 py-2">课程介绍</Link>
                {c.hasTrial && <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">试看</button>}
                <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">分享</button>
                <Link to="/profile/study" className="rounded-lg border border-slate-300 text-slate-700 px-4 py-2 text-sm hover:bg-slate-50">添加到学习中心</Link>
                <button type="button" className="rounded-lg border border-slate-300 text-slate-700 px-4 py-2 text-sm hover:bg-slate-50">购买</button>
              </div>
              <p className="text-xs text-slate-500 mt-3">购买：微信支付 / 优惠券 / 拼团（后续接入）</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title mb-4">AI工具库 · 教具联动</h2>
        <p className="text-slate-600 text-sm mb-4">每个基础工具均有独立介绍与购买页；购买记录可进入个人中心的「我的订单」（后续接入订单系统）</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {toolItems.map((item, i) => (
            <Link key={item.id} to={'/tools/detail/' + item.id} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
              <p className="text-xs text-slate-500 mt-2">价格：{item.price}</p>
              <span className="text-sm text-primary mt-3 inline-block">查看详情 →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 个性化成长计划（原「成长计划」板块整合至此） */}
      <section id="growth-plan" className="mb-10 border-t pt-8">
        <h2 className="section-title mb-1">个性化成长计划</h2>
        <p className="text-slate-600 text-sm mb-6">AI能力测评 → 学习方案生成 → 阶段套餐 → 学习跟踪，打通「测评-选课-学习-认证」全链路</p>
        <div className="card p-6 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20 flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-bingo-dark">AI能力测评 · 推荐适合您的课程</h3>
            <p className="text-slate-600 text-sm mt-1">测一测孩子的AI素养与潜力，根据结果智能推荐课程与学习路径。</p>
          </div>
          <button type="button" className="btn-primary shrink-0">去测评</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-6">
            <h3 className="font-semibold text-primary">分阶段成长套餐</h3>
            <p className="text-sm text-slate-600 mt-1">入门→进阶→精通，配套教材、课程、教具，套餐佣金可分享</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-primary">个性化成长规划</h3>
            <p className="text-sm text-slate-600 mt-1">AI测评+定制学习方案，按计划推荐对应课程，专属规划咨询入口</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-primary">成长打卡 · 积分奖励</h3>
            <p className="text-sm text-slate-600 mt-1">积分可兑换教材/教具、课程优惠券；成长进度可分享获赠试学时长</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-primary">长期导师跟进</h3>
            <p className="text-sm text-slate-600 mt-1">1v1导师指导，形成AI创作作品集与个人能力档案，衔接认证中心</p>
          </div>
        </div>
        <div className="mt-4 card p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/50 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm text-slate-500">成长计划专属优惠</div>
            <p className="font-medium text-bingo-dark mt-1">按成长计划报名对应课程，享额外专属折扣</p>
          </div>
          <Link to="/cert" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm hover:bg-primary/10">关联认证中心 →</Link>
        </div>
      </section>

      {/* 缤果学分 · 学习领学分入口 */}
      <section className="mb-10 border-t pt-8">
        <h2 className="section-title mb-1">
          <span className="inline-flex items-center gap-1.5">🏅 学习领学分</span>
        </h2>
        <p className="text-slate-600 text-sm mb-4">完成课程学习、打卡任务，积累「缤果学分」，可兑换优惠券/课程/赛事报名折扣</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { action: '完成课程试听', score: '+5分', note: '每门课每天1次' },
            { action: '完成课程章节', score: '+15分', note: '章节完成自动到账' },
            { action: '课程考试满分', score: '+30分', note: '完课率100%学分翻倍' },
            { action: '成长计划阶段达成', score: '+50分', note: '阶段越高奖励越多' },
          ].map((s, i) => (
            <div key={i} className="card p-5 border-primary/20 hover:shadow-md transition">
              <p className="text-sm font-medium text-slate-700">{s.action}</p>
              <p className="text-primary font-bold text-lg mt-1">{s.score}</p>
              <p className="text-xs text-slate-400 mt-1">{s.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 card p-5 bg-cyan-50 border-primary/20 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-medium text-bingo-dark">学分可抵扣课程学费</p>
            <p className="text-sm text-slate-600 mt-0.5">100学分 = 10元课程抵扣，课程分享至朋友圈额外 +5分</p>
          </div>
          <Link to="/profile#score-bank" className="btn-primary text-sm px-4 py-2">查看我的学分</Link>
        </div>
      </section>
    </div>
  )
}
