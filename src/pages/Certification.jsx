// 能力认证中心 - 学员认证、教师认证、等级认证、考核、证书
export default function Certification() {
  const learnerItems = [
    { title: '学员认证', desc: '面向学员的AI技能与素养认证体系' },
    { title: 'AI技能等级认证', desc: '分等级考核，配套认证教材、辅导课程' },
    { title: '认证考核报名、备考资料、模拟测评', desc: '' },
    { title: '认证证书查询、展示', desc: '增强成就感，带动分享裂变' },
  ]
  const teacherItems = [
    { title: '教师认证', desc: '面向教师与培训师的AI教学能力认证' },
    { title: '职业教育相关认证', desc: '对接行业标准，提升证书含金量' },
    { title: '教学法与AI工具认证', desc: '双师课、教具使用、赛事指导能力认证' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">能力认证中心</h1>
      <p className="text-gray-600 mb-8">学习-考核-认证闭环，学员认证与教师认证双轨并进</p>

      <section className="mb-10">
        <h2 className="section-title">学员认证</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {learnerItems.map((item, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              {item.desc && <p className="text-sm text-gray-600 mt-1">{item.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">教师认证</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {teacherItems.map((item, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              {item.desc && <p className="text-sm text-gray-600 mt-1">{item.desc}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
