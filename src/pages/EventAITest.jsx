import { useState } from 'react'
import { Link } from 'react-router-dom'

const TEST_TYPES = [
  { id: 'basic', name: 'AI基础认知测评', event: '通用/各类赛事', duration: 20, price: '免费体验', desc: '测评AI基础概念、工具认知、伦理意识，适合参赛前了解自身基础水平' },
  { id: 'creative', name: 'AI创新能力专项测评', event: '科创类赛事', duration: 40, price: '¥39/次', desc: '测评创新思维、项目设计能力、跨学科应用，测评成绩可纳入赛事初赛参考' },
  { id: 'code', name: 'AI编程与算法测评', event: '编程/机器人赛事', duration: 60, price: '¥59/次', desc: '测评Python编程、机器学习基础、算法逻辑，深度评估技术能力' },
  { id: 'literacy', name: '青少年AI素养综合测评', event: '素养类/升学赛事', duration: 45, price: '¥49/次', desc: '多维度评估AI素养（感知力、理解力、应用力、创造力），生成《AI素养能力图谱》' },
]

const DIMENSIONS = [
  { name: 'AI感知力', value: 88, color: 'bg-cyan-500' },
  { name: 'AI理解力', value: 72, color: 'bg-blue-500' },
  { name: 'AI应用力', value: 65, color: 'bg-indigo-500' },
  { name: 'AI创造力', value: 79, color: 'bg-violet-500' },
  { name: '伦理意识', value: 91, color: 'bg-emerald-500' },
]

const MOCK_QUESTIONS = [
  { id: 1, q: '以下哪项是机器学习的核心概念？', opts: ['A. 预设规则执行', 'B. 数据驱动自动学习', 'C. 手动编写所有逻辑', 'D. 仅适用于图像处理'], ans: 'B' },
  { id: 2, q: '人工智能中的"深度学习"主要依赖以下哪种结构？', opts: ['A. 决策树', 'B. 线性回归', 'C. 神经网络', 'D. 支持向量机'], ans: 'C' },
  { id: 3, q: '以下哪种行为违反了AI伦理原则？', opts: ['A. 用AI辅助医疗诊断', 'B. 用AI生成虚假新闻', 'C. 用AI优化学习路径', 'D. 用AI分析交通流量'], ans: 'B' },
]

export default function EventAITest() {
  const [phase, setPhase] = useState('entry')  // entry | booking | testing | report
  const [selectedTest, setSelectedTest] = useState(null)
  const [bookTime, setBookTime] = useState('')
  const [answers, setAnswers] = useState({})
  const [currentQ, setCurrentQ] = useState(0)

  function startTest(test) { setSelectedTest(test); setPhase('booking') }
  function startFree() { setSelectedTest(TEST_TYPES[0]); setPhase('testing'); setCurrentQ(0) }
  function submitBooking(e) { e.preventDefault(); setPhase('report') }
  function submitTest() { setPhase('report') }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-2">
        <Link to="/events" className="text-sm text-slate-500 hover:text-primary">赛事中心</Link>
        <span className="text-slate-300">/</span>
        <span className="text-sm text-slate-700">AI能力测评中心</span>
      </div>

      {/* ── 入口 ── */}
      {phase === 'entry' && (
        <>
          <div className="card p-8 bg-gradient-to-br from-bingo-dark to-cyan-900 text-white mb-8 rounded-2xl">
            <h1 className="text-2xl font-bold mb-2">AI能力测评中心</h1>
            <p className="text-slate-300 text-sm mb-6">专业评估AI能力，测评报告可用于赛事初赛参考、个人能力认证、学习路径优化</p>
            <div className="flex flex-wrap gap-3">
              <button onClick={startFree} className="bg-primary hover:bg-cyan-500 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition">免费体验测评</button>
              <button onClick={() => setPhase('booking')} className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition">预约专项测评</button>
            </div>
          </div>

          <h2 className="section-title mb-4">选择测评类型</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {TEST_TYPES.map(t => (
              <div key={t.id} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-semibold text-bingo-dark">{t.name}</h3>
                  <span className="text-primary font-bold text-sm shrink-0">{t.price}</span>
                </div>
                <p className="text-sm text-slate-600 mb-1">适用赛事：{t.event}</p>
                <p className="text-sm text-slate-600 mb-3">测评时长：{t.duration}分钟</p>
                <p className="text-xs text-slate-500 mb-4">{t.desc}</p>
                <div className="flex gap-3">
                  {t.price === '免费体验' ? (
                    <button onClick={startFree} className="btn-primary text-xs px-4 py-2">开始测评</button>
                  ) : (
                    <button onClick={() => startTest(t)} className="btn-primary text-xs px-4 py-2">预约测评</button>
                  )}
                  <button type="button" className="rounded-lg border border-primary text-primary text-xs px-4 py-2 hover:bg-primary/10 transition">查看样例报告</button>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-6 bg-cyan-50 border-primary/20">
            <h3 className="font-semibold text-bingo-dark mb-3">测评报告可用于</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🏆', title: '赛事初赛参考', desc: '测评成绩可按主办方设定权重纳入评审' },
                { icon: '📊', title: '个人成长档案', desc: '同步至个人中心，展示AI能力成长轨迹' },
                { icon: '🎓', title: '课程学习推荐', desc: '基于测评结果推荐匹配的AI精品课程' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-medium text-sm text-bingo-dark">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── 预约 ── */}
      {phase === 'booking' && (
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-bingo-dark mb-2">预约专项测评</h1>
          <p className="text-slate-600 text-sm mb-6">选择测评时间，专员确认后推送测评链接至手机</p>
          <form onSubmit={submitBooking} className="card p-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">测评类型 *</label>
              <select required className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary bg-white">
                {TEST_TYPES.map(t => <option key={t.id}>{t.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">适用赛事 *</label>
              <input required className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="请输入赛事名称或选择通用" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">预约时间 *</label>
              <input required type="datetime-local" value={bookTime} onChange={e => setBookTime(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">联系电话 *</label>
              <input required className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="测评链接将发送至此手机号" />
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary flex-1 py-2.5 text-sm">提交预约</button>
              <button type="button" onClick={() => setPhase('entry')} className="flex-1 border border-slate-200 rounded-lg py-2.5 text-sm text-slate-600 hover:bg-slate-50">返回</button>
            </div>
          </form>
        </div>
      )}

      {/* ── 在线测评 ── */}
      {phase === 'testing' && (
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-bingo-dark">AI基础认知测评（免费体验）</h1>
            <span className="text-sm text-slate-500">{currentQ + 1} / {MOCK_QUESTIONS.length}</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 mb-8">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: ((currentQ + 1) / MOCK_QUESTIONS.length * 100) + '%' }} />
          </div>

          {MOCK_QUESTIONS[currentQ] && (
            <div className="card p-8">
              <h2 className="font-semibold text-bingo-dark text-base mb-6">Q{currentQ + 1}. {MOCK_QUESTIONS[currentQ].q}</h2>
              <div className="space-y-3">
                {MOCK_QUESTIONS[currentQ].opts.map((opt, i) => (
                  <button key={i} onClick={() => setAnswers({...answers, [currentQ]: opt[0]})}
                    className={'w-full text-left px-5 py-3 rounded-xl border text-sm transition ' + (answers[currentQ] === opt[0] ? 'border-primary bg-primary/5 text-primary font-medium' : 'border-slate-200 hover:border-primary/30 hover:bg-slate-50')}>
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-8">
                {currentQ > 0 && (
                  <button onClick={() => setCurrentQ(q => q - 1)} className="rounded-lg border border-slate-200 text-slate-600 px-5 py-2.5 text-sm hover:bg-slate-50">上一题</button>
                )}
                {currentQ < MOCK_QUESTIONS.length - 1 ? (
                  <button onClick={() => setCurrentQ(q => q + 1)} className="btn-primary ml-auto px-5 py-2.5 text-sm">下一题</button>
                ) : (
                  <button onClick={submitTest} className="btn-primary ml-auto px-5 py-2.5 text-sm">提交测评</button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── 测评报告 ── */}
      {phase === 'report' && (
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 bg-gradient-to-br from-bingo-dark to-cyan-900 text-white mb-6 rounded-2xl text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h1 className="text-2xl font-bold mb-1">测评完成！</h1>
            <p className="text-slate-300 text-sm">报告生成耗时约10秒，已同步至个人中心</p>
            <div className="mt-4 text-4xl font-bold text-cyan-300">82 <span className="text-base font-normal text-white/60">分</span></div>
            <p className="text-sm text-white/70 mt-1">能力等级：AI进阶学员</p>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="font-semibold text-bingo-dark mb-5">各维度能力得分</h2>
            <div className="space-y-4">
              {DIMENSIONS.map((d, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-700">{d.name}</span>
                    <span className="font-medium text-slate-700">{d.value}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className={'h-2 rounded-full transition-all ' + d.color} style={{ width: d.value + '%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 mb-6">
            <h2 className="font-semibold text-bingo-dark mb-3">个性化建议</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span><span className="text-slate-600"><strong>优势：</strong>AI伦理意识强（91分），AI感知力出色（88分），具备良好的AI基础认知。</span></div>
              <div className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">△</span><span className="text-slate-600"><strong>提升方向：</strong>AI应用力（65分）和理解力（72分）有较大提升空间，建议加强实操训练。</span></div>
              <div className="flex items-start gap-2"><span className="text-primary mt-0.5">→</span><span className="text-slate-600"><strong>推荐课程：</strong>AI精英进阶课 Level 2，重点补强机器学习原理与应用实战模块。</span></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn-primary text-sm px-5 py-2.5">下载PDF报告</button>
            <Link to="/courses" className="rounded-lg border border-primary text-primary text-sm px-5 py-2.5 hover:bg-primary/10 transition">查看推荐课程</Link>
            <button onClick={() => setPhase('entry')} className="rounded-lg border border-slate-200 text-slate-600 text-sm px-5 py-2.5 hover:bg-slate-50">重新测评</button>
          </div>
        </div>
      )}
    </div>
  )
}
