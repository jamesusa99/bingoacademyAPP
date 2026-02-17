// AI学习社（含 AI牛人社 栏目）
export default function Community() {
  const items = [
    { title: '按学习场景分群', desc: '职业教育群、赛事集训群、教具使用群' },
    { title: '导师答疑、学员交流、作业点评', desc: '' },
    { title: '社群专属福利', desc: '教材/教具优惠券、课程秒杀、赛事优先报名' },
    { title: '裂变活动', desc: '邀请好友进群领免费课、解锁教具体验装' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI学习社（精英圈）</h1>
      <p className="text-gray-600 mb-8">提升粘性、促进留存复购，私域流量池，社群裂变</p>

      <section className="mb-10">
        <h2 className="section-title">AI牛人社</h2>
        <div className="card p-6 border-primary/20">
          <p className="text-gray-600">汇聚AI教育领域的牛人导师与优秀学员，分享实战经验、答疑解惑、共创内容。</p>
        </div>
      </section>

      <section>
        <h2 className="section-title">学习社栏目</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, i) => (
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
