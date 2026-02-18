import { Link } from 'react-router-dom'

// 科学研学 - 研学营列表、研学详情、报名意向、科研实训、升学成果
const AGE_GROUPS = [
  { key: 'enlighten', name: '启蒙班', range: '6-9岁', desc: '趣味科学启蒙、不插电实验' },
  { key: 'advance', name: '进阶班', range: '10-14岁', desc: 'AI通识、机器人入门' },
  { key: 'contest', name: '竞赛班', range: '14-18岁', desc: '竞赛导向、课题研究' },
]

const SAMPLE_CAMPS = [
  { title: 'AI通识科学营', outline: 'AI通识、不插电实验、机器人实操', age: '8-12岁', to: '/research' },
  { title: '数据科学研学营', outline: '数据采集、可视化分析、报告撰写', age: '12-16岁', to: '/research' },
  { title: '机器学习启蒙营', outline: '模型初探、动手训练、成果展示', age: '14-18岁', to: '/research' },
]

const TRAINING_PROJECTS = [
  { title: '机器学习课题', desc: '与高校合作，完成小型ML项目与报告' },
  { title: '数据可视化分析', desc: '真实数据集分析、可视化报告产出' },
]

export default function Research() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">科学研学</h1>
      <p className="text-slate-600 mb-8">按年龄段选营、研学详情与大纲、报名意向申请、科研实训项目、升学成果案例</p>

      {/* 研学营列表：按年龄段 */}
      <section className="mb-10">
        <h2 className="section-title">研学营列表 · 按年龄段</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {AGE_GROUPS.map((g) => (
            <Link key={g.key} to={`/research?age=${g.key}`} className="card p-6 hover:shadow-md transition block">
              <div className="font-semibold text-primary">{g.name}</div>
              <div className="text-sm text-slate-500 mt-1">{g.range}</div>
              <p className="text-sm text-slate-600 mt-2">{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 研学详情：大纲、师资、适配年龄 */}
      <section className="mb-10">
        <h2 className="section-title">研学项目详情</h2>
        <p className="text-slate-600 text-sm mb-4">含研学大纲（AI通识、不插电实验、机器人实操）、师资介绍及适配年龄</p>
        <div className="grid md:grid-cols-3 gap-4">
          {SAMPLE_CAMPS.map((c, i) => (
            <Link key={i} to={c.to} className="card p-6 hover:shadow-md transition block">
              <h3 className="font-semibold text-primary">{c.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{c.outline}</p>
              <span className="inline-block mt-2 text-xs text-slate-500">适配年龄：{c.age}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 报名意向申请 */}
      <section className="mb-10">
        <h2 className="section-title">报名意向申请</h2>
        <div className="card p-6 bg-cyan-50/50 border-primary/20">
          <p className="text-slate-600 mb-4">家长或机构在线填写极简申请表单，支持一键提交。</p>
          <div className="flex flex-wrap gap-3">
            <label className="flex-1 min-w-[140px]">
              <span className="block text-sm text-slate-600 mb-1">孩子姓名 / 机构名称</span>
              <input type="text" placeholder="选填" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
            </label>
            <label className="flex-1 min-w-[140px]">
              <span className="block text-sm text-slate-600 mb-1">联系电话</span>
              <input type="tel" placeholder="必填" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
            </label>
            <label className="flex-1 min-w-[140px]">
              <span className="block text-sm text-slate-600 mb-1">意向营期/年龄段</span>
              <select className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                <option>启蒙班 6-9岁</option>
                <option>进阶班 10-14岁</option>
                <option>竞赛班 14-18岁</option>
              </select>
            </label>
          </div>
          <button type="button" className="btn-primary mt-4">提交意向</button>
        </div>
      </section>

      {/* 科研实训项目 */}
      <section className="mb-10">
        <h2 className="section-title">科研实训项目</h2>
        <p className="text-slate-600 text-sm mb-4">与高校、实验室合作的深度AI研究课题（如机器学习、数据可视化分析报告）</p>
        <div className="grid md:grid-cols-2 gap-4">
          {TRAINING_PROJECTS.map((p, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 升学成果案例 */}
      <section>
        <h2 className="section-title">升学成果案例</h2>
        <p className="text-slate-600 text-sm mb-4">历届学员获奖证书、实操作品及成功对接升学通道的案例</p>
        <div className="card p-6 bg-slate-50">
          <ul className="text-sm text-slate-700 space-y-2">
            <li>· 科创竞赛省一/国赛获奖学员升学去向</li>
            <li>· 数据科学/AI课题成果与综评材料</li>
            <li>· 科技特长生、强基计划对接案例</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
