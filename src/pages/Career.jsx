import { Link } from 'react-router-dom'

// 产教融合（原就业直通车）：岗位、简历、实训、就业案例
export default function Career() {
  const modules = [
    { title: '企业招生', desc: '企业发布招生/招聘岗位，学员投递，精准对接', to: '/career' },
    { title: '岗位列表 → 岗位详情 → 简历投递', desc: '企业岗位发布、精准匹配、内推', to: '/career' },
    { title: '简历优化 / AI面试辅导', desc: '辅导服务佣金比例展示、分享按钮', to: '/career' },
    { title: '实训项目', desc: '企业实训、订单式培养；实训项目推广佣金开放给教师/机构', to: '/career' },
    { title: '就业案例', desc: '就业案例、薪资数据展示', to: '/career' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">产教融合</h1>
      <p className="text-slate-600 mb-8">企业招生、岗位列表、简历投递、实训项目、就业案例 · 企业对接产教融合</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((item, i) => (
          <Link key={i} to={item.to} className="card p-6 hover:shadow-md transition block">
            <h3 className="font-semibold text-primary">{item.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
          </Link>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500">企业发布岗位、对接产教融合项目、采购课程/教具（暂不开放推广佣金权限）</p>
    </div>
  )
}
