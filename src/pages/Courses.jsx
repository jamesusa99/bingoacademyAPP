import { Link } from 'react-router-dom'

const posterBanners = [
  {
    id: 'literacy-1',
    title: 'AI素养课',
    desc: '面向未来·素养与元认知',
    img: 'https://placehold.co/1200x500/0891b2/ffffff?text=AI%E7%B4%A0%E5%85%BB%E8%AF%BE',
    to: '/courses/detail/literacy-1',
  },
  {
    id: 'contest-1',
    title: '竞赛培优课',
    desc: '集训营·模拟赛·真题精讲',
    img: 'https://placehold.co/1200x500/0f172a/ffffff?text=%E7%AB%9E%E8%B5%9B%E5%9F%B9%E4%BC%98%E8%AF%BE',
    to: '/courses/detail/contest-1',
  },
  {
    id: 'exam-1',
    title: '升学赋能课',
    desc: '科技特长生路径·综评强基',
    img: 'https://placehold.co/1200x500/155e75/ffffff?text=%E5%8D%87%E5%AD%A6%E8%B5%8B%E8%83%BD%E8%AF%BE',
    to: '/courses/detail/exam-1',
  },
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
    id: 'literacy-1',
    name: 'AI素养启蒙·面向未来的第一课',
    cat: '素养',
    stage: '启蒙/进阶',
    teacher: '缤果讲师团',
    price: '¥199',
    commission: '10%',
    hasTrial: true,
  },
  {
    id: 'contest-1',
    name: '白名单赛事通关营',
    cat: '培优',
    stage: '竞赛班',
    teacher: '竞赛教练组',
    price: '¥1299',
    commission: '15%',
    hasTrial: true,
  },
  {
    id: 'exam-1',
    name: '科技特长生路径课',
    cat: '升学',
    stage: '升学护航班',
    teacher: '升学规划导师',
    price: '¥1999',
    commission: '12%',
    hasTrial: false,
  },
  {
    id: 'career-1',
    name: 'AI岗位项目实训·就业衔接',
    cat: '就业',
    stage: '就业衔接班',
    teacher: '企业导师',
    price: '¥2999',
    commission: '8%',
    hasTrial: false,
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
        <div className="grid md:grid-cols-3 gap-4">
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
                  <p className="text-sm text-slate-600 mt-1">分类：{c.cat} · 阶段：{c.stage}</p>
                  <p className="text-sm text-slate-600 mt-1">讲师：{c.teacher}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-primary font-semibold">{c.price}</div>
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
            <Link key={item.id} to={`/tools/detail/${item.id}`} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
              <p className="text-xs text-slate-500 mt-2">价格：{item.price}</p>
              <span className="text-sm text-primary mt-3 inline-block">查看详情 →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
