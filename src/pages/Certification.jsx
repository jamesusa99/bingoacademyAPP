// 认证中心 - 面向教师、机构、学校；机构认证、教师认证、慧师计划
const INSTITUTION_STEPS = [
  { step: 1, title: '提交申请', desc: '机构在线填写认证申请，提交资质与办学信息' },
  { step: 2, title: '资质审核', desc: '平台对机构资质、场地、师资进行初审' },
  { step: 3, title: '实地/材料核验', desc: '根据需要安排实地考察或补充材料核验' },
  { step: 4, title: '签约授牌', desc: '审核通过后签约，授予合作机构牌匾与授权' },
  { step: 5, title: '持续督导', desc: '定期复评、师训与运营支持，保障认证质量' },
]

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

      {/* 机构认证：步骤与流程 */}
      <section className="mb-10">
        <h2 className="section-title">机构认证</h2>
        <p className="text-slate-600 text-sm mb-6">教培机构、学校申请成为缤果AI学院认证合作机构，获得授牌与课程/赛事授权</p>
        <div className="flex flex-col gap-0">
          {INSTITUTION_STEPS.map((item, i) => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <div className={`card flex-1 p-5 ${i < INSTITUTION_STEPS.length - 1 ? 'mb-2' : ''}`}>
                <h3 className="font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 教师认证 */}
      <section className="mb-10">
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

      {/* 慧师计划：放在教师认证下面 */}
      <section>
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
    </div>
  )
}
