import { Link, useParams } from 'react-router-dom'

const COURSES = {
  'ai-enlighten': {
    name: 'AI 启蒙通识课',
    poster: 'https://placehold.co/1400x600/0891b2/ffffff?text=AI%E5%90%AF%E8%92%99%E9%80%9A%E8%AF%86%E8%AF%BE',
    teacher: '缤果讲师团',
    audience: '8-14岁',
    learningGoal: '建立对人工智能的科学认知框架，理解AI与人类社会的协作关系，培养未来的数字公民素养。',
    keyDesc: '体系化涵盖机器感知、知识表征推理、机器学习与自然交互四大核心模块。课程摒弃枯燥理论，搭配人脸识别、语音控制等丰富的AI互动实验，通过动手实验与互动项目，引导孩子建立对 AI 工作方式的直观理解。',
    outline: ['机器感知', '知识表征与推理', '机器学习入门', '自然交互与AI实验'],
    trial: true,
    commission: '10%',
    price: '咨询',
    priceNote: null,
  },
  'ai-programming': {
    name: 'AI编程入门课',
    poster: 'https://placehold.co/1400x600/0f172a/ffffff?text=AI%E7%BC%96%E7%A8%8B%E5%85%A5%E9%97%A8%E8%AF%BE',
    teacher: '缤果讲师团',
    audience: '10-15岁',
    learningGoal: '掌握 Python 核心语法，初步建立计算思维，具备开发独立小型软件的能力。',
    keyDesc: '采用Python编程基础+AI场景应用的双重教学法。通过项目制学习，带领学生亲手编写计算器、智能贪吃蛇、迷宫寻路算法等应用程序。在编程项目中引入基础的算法思想与问题拆解方法，为后续学习人工智能打下认知基础。',
    outline: ['Python 核心语法', '计算器项目', '智能贪吃蛇', '迷宫寻路算法与算法思想'],
    trial: true,
    commission: '10%',
    price: '咨询',
    priceNote: null,
  },
  'ai-art': {
    name: 'AI 艺术创意工坊',
    poster: 'https://placehold.co/1400x600/155e75/ffffff?text=AI%E8%89%BA%E6%9C%AF%E5%88%9B%E6%84%8F%E5%B7%A5%E5%9D%8A',
    teacher: '缤果讲师团',
    audience: '8-15岁',
    learningGoal: '掌握生成式AI（AIGC）工具的使用，培养「提示词工程」能力与审美表达。',
    keyDesc: '融合即梦、豆包、通义、ComfyUI等工具，带领孩子从零开始构建自己的数字画展或绘本。课程核心不在于绘画技巧，而在于如何将脑中的创意转化为精准的指令，培养跨学科的表达力。',
    outline: ['AIGC 工具入门', '提示词工程', '数字画展创作', '绘本制作与实践'],
    trial: true,
    commission: '10%',
    price: '咨询',
    priceNote: null,
  },
  'ai-robot': {
    name: '智能机器人实战营',
    poster: 'https://placehold.co/1400x600/0e7490/ffffff?text=%E6%99%BA%E8%83%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AE%9E%E6%88%98%E8%90%A5',
    teacher: '缤果讲师团',
    audience: '9-15岁',
    learningGoal: '理解传感器原理与嵌入式编程，实现AI算法在物理世界的落地。',
    keyDesc: '使用 Arduino 或树莓派硬件平台，亲手组装具备避障、人脸追踪、自动巡航功能的智能小车。让代码走出屏幕，让孩子在动手拆装中理解工业 4.0 的基本逻辑。',
    outline: ['传感器原理与嵌入式编程', 'Arduino/树莓派入门', '避障与自动巡航', '人脸追踪智能小车'],
    trial: false,
    commission: '10%',
    price: '¥4500',
    priceNote: '含器材包',
  },
}

export default function CourseDetail() {
  const { id } = useParams()
  const course = COURSES[id] || COURSES['ai-enlighten']

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
          {course.audience && <p className="text-slate-600 mt-1">面向人群：{course.audience}</p>}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">佣金比例 {course.commission}</span>
            <span className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-700">价格 {course.price}{course.priceNote ? `（${course.priceNote}）` : ''}</span>
            {course.trial && <span className="text-sm px-3 py-1 rounded-full bg-amber-50 text-amber-700">支持试看</span>}
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="section-title mb-4">学习目标</h2>
        <div className="card p-6">
          <p className="text-slate-700 leading-relaxed">{course.learningGoal}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="section-title mb-4">课程特色</h2>
        <div className="card p-6">
          <p className="text-slate-700 leading-relaxed">{course.keyDesc}</p>
        </div>
      </section>

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

