import { useState } from 'react'

// AI学习社（含 AI牛人社 - 优秀导师列表）
const certifiedMentors = [
  { name: '林教授', photo: 'https://ui-avatars.com/api/?name=林教授&background=0891b2&color=fff&size=120' },
  { name: '黄老师', photo: 'https://ui-avatars.com/api/?name=黄老师&background=0891b2&color=fff&size=120' },
  { name: '何导师', photo: 'https://ui-avatars.com/api/?name=何导师&background=0891b2&color=fff&size=120' },
  { name: '徐老师', photo: 'https://ui-avatars.com/api/?name=徐老师&background=0891b2&color=fff&size=120' },
  { name: '马导师', photo: 'https://ui-avatars.com/api/?name=马导师&background=0891b2&color=fff&size=120' },
]

const items = [
  { title: '按学习场景分群', desc: '职业教育群、赛事集训群、教具使用群' },
  { title: '导师答疑、学员交流、作业点评', desc: '' },
  { title: '社群专属福利', desc: '教材/教具优惠券、课程秒杀、赛事优先报名' },
  { title: '裂变活动', desc: '邀请好友进群领免费课、解锁教具体验装' },
]

function MentorAvatar({ src, name }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center text-xl font-semibold text-slate-500">
      {!failed && <img src={src} alt={name} className="w-full h-full object-cover" onError={() => setFailed(true)} />}
      <span className={`w-full h-full flex items-center justify-center bg-primary/20 text-primary ${failed ? '' : 'hidden'}`}>{name.charAt(0)}</span>
    </div>
  )
}

export default function Community() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI学习社（精英圈）</h1>
      <p className="text-slate-600 mb-6">社群列表 → 社群详情 → 群聊/直播/文件。按课程/赛事/地域/年级创建或加入；群公告、群文件、群直播、专属推广福利；导师答疑、学员互评、打卡积分排行榜；邀请入群产生转化可赚佣金</p>

      <section className="mb-10">
        <h2 className="section-title">AI牛人社</h2>
        <div className="card p-6 border-primary/20">
          <p className="text-slate-600 mb-6">汇聚AI教育领域的牛人导师与优秀学员，分享实战经验、答疑解惑、共创内容。</p>
          <h3 className="text-sm font-semibold text-slate-500 mb-4">优秀导师列表</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {certifiedMentors.map((m, i) => (
              <li key={i} className="flex flex-col items-center text-center">
                <MentorAvatar src={m.photo} name={m.name} />
                <span className="text-xs text-primary font-medium mt-2">缤果认证导师</span>
                <span className="font-medium text-bingo-dark mt-1">{m.name}</span>
              </li>
            ))}
          </ul>
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
