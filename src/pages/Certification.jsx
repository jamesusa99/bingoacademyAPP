// 认证中心 - 面向教师、机构、学校；慧师计划、教师认证
export default function Certification() {
  const teacherItems = [
    { title: '教师认证', desc: '面向教师与培训师的AI教学能力认证' },
    { title: '职业教育相关认证', desc: '对接行业标准，提升证书含金量' },
    { title: '教学法与AI工具认证', desc: '双师课、教具使用、赛事指导能力认证' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">认证中心</h1>
      <p className="text-slate-600 mb-4">面向教师、机构、学校。认证列表 → 认证详情 → 报名 → 备考 → 考核 → 证书；认证辅导课佣金比例、备考资料/课程分享；证书查询/下载/分享；认证与就业/升学挂钩（产教融合企业优先录用）</p>
      <div className="card p-6 bg-amber-50/60 border-amber-200/50 mb-8">
        <h3 className="font-semibold text-bingo-dark mb-2">权威性与国际性</h3>
        <p className="text-slate-600 text-sm">认证体系对接教育部白名单赛事与行业标准，部分认证获国际机构认可，证书可在升学综评、留学与就业场景中作为能力证明。合作机构与认证背书持续更新，详见各认证详情页。</p>
      </div>

      {/* 慧师计划：针对教师、机构、学校的学习、培训与能力提升 */}
      <section className="mb-10">
        <h2 className="section-title">慧师计划</h2>
        <p className="text-slate-600 text-sm mb-6">面向教师、机构、学校的学习、培训与能力提升，助力掌握AI教学、赛事指导与素养课程落地</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-6 border-primary/20 hover:shadow-md transition">
            <h3 className="font-semibold text-primary">教师学习</h3>
            <p className="text-sm text-slate-600 mt-1">AI素养与元认知课程、AI工具在教学中的应用，支持按阶段进阶学习</p>
          </div>
          <div className="card p-6 border-primary/20 hover:shadow-md transition">
            <h3 className="font-semibold text-primary">师资培训</h3>
            <p className="text-sm text-slate-600 mt-1">线下/线上师训、教材教具使用培训、赛事带赛能力培训、双师课实操</p>
          </div>
          <div className="card p-6 border-primary/20 hover:shadow-md transition">
            <h3 className="font-semibold text-primary">能力提升与认证</h3>
            <p className="text-sm text-slate-600 mt-1">教师认证、教学法认证、AI工具认证，提升教学与带赛能力</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">教师认证</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {teacherItems.map((item, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              {item.desc && <p className="text-sm text-slate-600 mt-1">{item.desc}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
