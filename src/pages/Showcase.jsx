import { useState } from 'react'

// AI成果展 - 小小AI创业家（优秀学员）、10万奖金（获奖者）、成果展示
const outstandingStudents = [
  { name: '张小明', photo: 'https://ui-avatars.com/api/?name=张小明&background=0891b2&color=fff&size=120' },
  { name: '李思涵', photo: 'https://ui-avatars.com/api/?name=李思涵&background=0891b2&color=fff&size=120' },
  { name: '王梓轩', photo: 'https://ui-avatars.com/api/?name=王梓轩&background=0891b2&color=fff&size=120' },
  { name: '陈雨桐', photo: 'https://ui-avatars.com/api/?name=陈雨桐&background=0891b2&color=fff&size=120' },
  { name: '刘子墨', photo: 'https://ui-avatars.com/api/?name=刘子墨&background=0891b2&color=fff&size=120' },
]

const prizeWinners = [
  { rank: 1, name: '赵一凡', photo: 'https://ui-avatars.com/api/?name=赵一凡&background=0f172a&color=fff&size=120' },
  { rank: 2, name: '孙悦琪', photo: 'https://ui-avatars.com/api/?name=孙悦琪&background=0f172a&color=fff&size=120' },
  { rank: 3, name: '周俊熙', photo: 'https://ui-avatars.com/api/?name=周俊熙&background=0f172a&color=fff&size=120' },
  { rank: 4, name: '吴若溪', photo: 'https://ui-avatars.com/api/?name=吴若溪&background=0f172a&color=fff&size=120' },
  { rank: 5, name: '郑浩然', photo: 'https://ui-avatars.com/api/?name=郑浩然&background=0f172a&color=fff&size=120' },
]

const sections = [
  { title: '学员AI作品与学习成果', desc: '图文+视频' },
  { title: '赛事获奖案例、职业教育就业案例', desc: '' },
  { title: '教具实操成果、教材学习落地案例', desc: '' },
  { title: 'AI OEM合作成果展示', desc: '轻量化公信力展示' },
]

function Avatar({ src, name, alt }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center text-xl font-semibold text-slate-500">
      {!failed && <img src={src} alt={alt} className="w-full h-full object-cover" onError={() => setFailed(true)} />}
      <span className={`w-full h-full flex items-center justify-center bg-primary/20 text-primary ${failed ? '' : 'hidden'}`}>{name.charAt(0)}</span>
    </div>
  )
}

export default function Showcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">AI成果展</h1>
      <p className="text-gray-600 mb-8">打造可视化信任背书，降低决策成本，激发学习/消费意愿</p>

      <section className="mb-10">
        <h2 className="section-title">小小AI创业家</h2>
        <div className="card p-6 border-primary/20">
          <p className="text-gray-600 mb-6">展示青少年在AI应用与创新项目中的创业实践与成果。</p>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">优秀学员列表</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {outstandingStudents.map((s, i) => (
              <li key={i} className="flex flex-col items-center text-center">
                <Avatar src={s.photo} name={s.name} alt={s.name} />
                <span className="text-xs text-primary font-medium mt-2">优秀缤果学员</span>
                <span className="font-medium text-bingo-dark mt-1">{s.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="section-title">缤果AI学院10万奖金</h2>
        <div className="card p-6 border-primary/20 bg-cyan-50/50">
          <p className="text-gray-600 mb-6">年度重磅激励计划，总奖金10万元，激励学员与教师参与赛事、认证与成果产出。</p>
          <h3 className="text-sm font-semibold text-gray-500 mb-4">获奖者名单</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {prizeWinners.map((w, i) => (
              <li key={i} className="flex flex-col items-center text-center">
                <span className="text-lg font-bold text-primary mb-2">第{w.rank}名</span>
                <Avatar src={w.photo} name={w.name} alt={w.name} />
                <span className="font-medium text-bingo-dark mt-2">{w.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="section-title">成果展示</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{s.title}</h3>
              {s.desc && <p className="text-sm text-gray-500 mt-1">{s.desc}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
