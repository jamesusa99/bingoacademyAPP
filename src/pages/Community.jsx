import { useState } from 'react'

// AI学习社（含 AI牛人社 - 优秀导师列表）- 顶尖师资来自 bingoacademy.cn
// 照片存放：web/public/images/team/ 下放入 chenjianwen.jpg、wangwenyi.jpg、xufeng.jpg、wangshuang.jpg
const certifiedMentors = [
  {
    name: '陈建文教授/博士',
    photo: '/images/team/chenjianwen.jpg',
    fallback: 'https://ui-avatars.com/api/?name=陈建文&background=0891b2&color=fff&size=120',
    intro: '超过20年视频处理、人工智能算法研究；多模态特征融合情感计算研究；深度内容合成和驱动算法的研究。电子科技大学教授、博士生导师，电子科技大学视觉智能研究中心主任。',
  },
  {
    name: '王文一博士',
    photo: '/images/team/wangwenyi.jpg',
    fallback: 'https://ui-avatars.com/api/?name=王文一&background=0891b2&color=fff&size=120',
    intro: 'AI专家，电子科技大学副教授。研究涉及数据挖掘、人工智能及算法优化等方面。加拿大渥太华大学电子工程与计算机科学硕士、博士。',
  },
  {
    name: '徐枫博士',
    photo: '/images/team/xufeng.jpg',
    fallback: 'https://ui-avatars.com/api/?name=徐枫&background=0891b2&color=fff&size=120',
    intro: '人工智能科学家，北京人工智能研究院研究员，北京市海外高层次人才。曾任三星(美国)研发中心研究员、Thomson汤姆逊公司研究员。美国宾夕法尼亚大学博士后，清华大学电子工程系博士。',
  },
  {
    name: '王爽博士',
    photo: '/images/team/wangshuang.jpg',
    fallback: 'https://ui-avatars.com/api/?name=王爽&background=0891b2&color=fff&size=120',
    intro: '人工智能科学家，美国 Lava Education 与 ScholarOne LLC 联合创始人。主导教育、医疗与AI项目落地，拥有美国人工智能传感网络专利（授权并产生版税）。专注大语言模型、多模态智能与深度学习系统研发，指导学生参与国际竞赛与科研。密苏里大学电子工程与计算机科学博士。',
  },
]

const items = [
  { title: '按学习场景分群', desc: '职业教育群、赛事集训群、教具使用群' },
  { title: '导师答疑、学员交流、作业点评', desc: '' },
  { title: '社群专属福利', desc: '教材/教具优惠券、课程秒杀、赛事优先报名' },
  { title: '裂变活动', desc: '邀请好友进群领免费课、解锁教具体验装' },
]

// 认证合作课程（学习社栏目内）
const certifiedCourses = [
  { name: '错题帮AI', desc: '智能错题本与个性化巩固' },
  { name: '梅林口语', desc: 'AI口语练习与测评' },
  { name: '家庭教育', desc: '家长课堂与亲子共学' },
  { name: '推荐必读书目', desc: '素养与科创阅读书单' },
]

// 授牌合作机构（示例数据，可替换为接口）
const partnerInstitutions = [
  { name: 'XX市青少年科技教育中心', region: '江苏·南京', logo: null },
  { name: 'XX区人工智能教育实践基地', region: '广东·深圳', logo: null },
  { name: 'XX教育集团科创学院', region: '北京', logo: null },
  { name: 'XX外国语学校AI实验室', region: '上海', logo: null },
  { name: 'XX培训学校', region: '浙江·杭州', logo: null },
  { name: 'XX创客教育', region: '四川·成都', logo: null },
]

function MentorAvatar({ src, name, fallback }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    if (fallback && currentSrc === src) {
      setCurrentSrc(fallback)
    } else {
      setFailed(true)
    }
  }
  return (
    <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center text-xl font-semibold text-slate-500">
      {!failed && <img src={currentSrc} alt={name} className="w-full h-full object-cover" onError={handleError} />}
      <span className={'w-full h-full flex items-center justify-center bg-primary/20 text-primary' + (failed ? '' : ' hidden')}>{name.charAt(0)}</span>
    </div>
  )
}

export default function Community() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI学习社</h1>
      <p className="text-slate-600 mb-6">社群列表 → 社群详情 → 群聊/直播/文件。按课程/赛事/地域/年级创建或加入；群公告、群文件、群直播、专属推广福利；导师答疑、学员互评、打卡积分排行榜；邀请入群产生转化可赚佣金</p>

      <section className="mb-10">
        <h2 className="section-title">AI牛人社</h2>
        <div className="card p-6 border-primary/20">
          <p className="text-slate-600 mb-6">汇聚AI教育领域的牛人导师与优秀学员，分享实战经验、答疑解惑、共创内容。</p>
          <h3 className="text-sm font-semibold text-slate-500 mb-4">优秀导师列表</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifiedMentors.map((m, i) => (
              <div key={i} className="card p-6 flex flex-col sm:flex-row gap-4 hover:shadow-md hover:border-primary/30 transition">
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <MentorAvatar src={m.photo} name={m.name} fallback={m.fallback} />
                  <span className="text-xs text-primary font-medium mt-2">缤果认证导师</span>
                  <span className="font-semibold text-bingo-dark">{m.name}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-slate-500 mb-2">导师介绍</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{m.intro}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 授牌合作机构 */}
      <section className="mb-10">
        <h2 className="section-title">授牌合作机构</h2>
        <p className="text-slate-600 text-sm mb-6">与缤果AI学院正式签约的教培机构、学校及实践基地，共同推进AI素养教育落地</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partnerInstitutions.map((p, i) => (
            <div
              key={i}
              className="card p-5 flex flex-col items-center text-center hover:shadow-md hover:border-primary/30 transition group"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-primary/60 group-hover:bg-primary/10 mb-3">
                {p.logo ? <img src={p.logo} alt="" className="w-full h-full object-contain rounded-xl" /> : p.name.charAt(0)}
              </div>
              <div className="font-medium text-bingo-dark text-sm leading-tight line-clamp-2">{p.name}</div>
              <div className="text-xs text-slate-500 mt-1">{p.region}</div>
              <span className="mt-2 inline-block text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                授牌合作
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">学习社栏目</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {items.map((item, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              {item.desc && <p className="text-sm text-slate-600 mt-1">{item.desc}</p>}
            </div>
          ))}
        </div>
        <h3 className="text-base font-semibold text-bingo-dark mb-3">认证合作课程</h3>
        <p className="text-slate-600 text-sm mb-4">与优质内容方合作的认证课程，纳入学习社推荐与共学</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certifiedCourses.map((c, i) => (
            <div key={i} className="card p-5 hover:shadow-md hover:border-primary/30 transition">
              <div className="font-semibold text-primary">{c.name}</div>
              <p className="text-sm text-slate-600 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
