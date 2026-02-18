import { Link, useParams } from 'react-router-dom'

const COURSES = {
  'literacy-1': {
    name: 'AI素养启蒙·面向未来的第一课',
    poster: 'https://placehold.co/1400x600/0891b2/ffffff?text=AI%E7%B4%A0%E5%85%BB%E8%AF%BE',
    teacher: '缤果讲师团',
    outline: ['AI素养与元认知', 'AI工具正确使用与边界', '创作实践：从想法到作品', '能力档案与认证衔接'],
    trial: true,
    commission: '10%',
    price: '¥199',
  },
  'contest-1': {
    name: '白名单赛事通关营',
    poster: 'https://placehold.co/1400x600/0f172a/ffffff?text=%E7%AB%9E%E8%B5%9B%E5%9F%B9%E4%BC%98%E8%AF%BE',
    teacher: '竞赛教练组',
    outline: ['赛制与评审标准', '真题精讲与题型拆解', '模拟赛与讲评', '一对一答疑与复盘'],
    trial: true,
    commission: '15%',
    price: '¥1299',
  },
  'exam-1': {
    name: '科技特长生路径课',
    poster: 'https://placehold.co/1400x600/155e75/ffffff?text=%E5%8D%87%E5%AD%A6%E8%B5%8B%E8%83%BD%E8%AF%BE',
    teacher: '升学规划导师',
    outline: ['路径规划与时间线', '综评/强基材料辅导', '真题与模拟面试', '作品集与证书规划'],
    trial: false,
    commission: '12%',
    price: '¥1999',
  },
  'career-1': {
    name: 'AI岗位项目实训·就业衔接',
    poster: 'https://placehold.co/1400x600/0e7490/ffffff?text=%E5%B0%B1%E4%B8%9A%E8%A1%94%E6%8E%A5%E8%AF%BE',
    teacher: '企业导师',
    outline: ['岗位能力模型', '项目实训与代码评审', '简历优化与面试辅导', '内推与产教融合对接'],
    trial: false,
    commission: '8%',
    price: '¥2999',
  },
}

export default function CourseDetail() {
  const { id } = useParams()
  const course = COURSES[id] || COURSES['literacy-1']

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/courses" className="text-primary text-sm hover:underline">← 返回 AI精品课</Link>
      </div>

      <div className="card overflow-hidden p-0 mb-6">
        <div className="aspect-[16/9] bg-slate-100">
          <img src={course.poster} alt={course.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-bingo-dark">{course.name}</h1>
          <p className="text-slate-600 mt-2">讲师：{course.teacher}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">佣金比例 {course.commission}</span>
            <span className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-700">价格 {course.price}</span>
            {course.trial && <span className="text-sm px-3 py-1 rounded-full bg-amber-50 text-amber-700">支持试看</span>}
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="section-title mb-4">课程大纲</h2>
        <div className="card p-6">
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            {course.outline.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="section-title mb-4">功能入口</h2>
        <div className="card p-6">
          <div className="flex flex-wrap gap-2">
            {course.trial && <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">试看</button>}
            <button type="button" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm">分享（海报/链接）</button>
            <Link to="/profile/study" className="rounded-lg border border-slate-300 text-slate-700 px-4 py-2 text-sm hover:bg-slate-50">添加到学习中心</Link>
            <button type="button" className="btn-primary text-sm px-4 py-2">立即购买</button>
          </div>
          <p className="text-xs text-slate-500 mt-3">购买支持：微信支付 / 优惠券 / 拼团（后续接入）</p>
        </div>
      </section>
    </div>
  )
}

