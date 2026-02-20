import { useState, useEffect } from 'react'

const QUICK_REPLIES = [
  { q: '课程咨询', a: '您好！我们提供AI素养课、竞赛培优课、升学赋能课等，您可进入「AI精品课」查看详情，或致电/微信联系我们获取专属推荐。' },
  { q: '赛事报名', a: '我们承接多项白名单赛事及国际赛，请进入「赛事中心」查看最新赛程与报名方式，也可联系客服获取赛事集训营信息。' },
  { q: '加盟合作', a: '欢迎加入缤果AI学院加盟体系！我们提供品牌授权、课程体系、师训支持、赛事资源等，请进入「加盟合作」页面了解详情，或直接联系我们。' },
  { q: '联系客服', a: '您可通过以下方式联系我们：\n📞 电话：400-xxx-xxxx\n💬 微信：bingoacademy\n✉️ 邮箱：contact@bingoacademy.cn' },
]

export default function ChatPopup() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: '您好！我是缤果AI学院小助手，请问有什么可以帮您？您可以点击下方快捷问题，或直接输入咨询。' },
  ])
  const [input, setInput] = useState('')
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (shown) return
    const t = setTimeout(() => {
      setOpen(true)
      setShown(true)
    }, 3000)
    return () => clearTimeout(t)
  }, [shown])

  const send = (text) => {
    if (!text.trim()) return
    const userMsg = { role: 'user', text: text.trim() }
    setMessages((m) => [...m, userMsg])
    setInput('')

    const match = QUICK_REPLIES.find((r) => r.q === text.trim())
    const reply = match ? match.a : '感谢您的留言！我们的客服会尽快回复，您也可直接拨打 400-xxx-xxxx 或添加微信 bingoacademy 咨询。'
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: reply }])
    }, 600)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:bg-cyan-600 transition flex items-center justify-center"
        aria-label="打开客服咨询"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[480px]">
          <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
            <span className="font-semibold">缤果AI学院 · 在线咨询</span>
            <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/20 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={'flex ' + (msg.role === 'user' ? 'justify-end' : 'justify-start')}
              >
                <div
                  className={
                    'max-w-[85%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ' +
                    (msg.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-slate-700')
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-slate-100">
            <div className="flex gap-2 flex-wrap mb-2">
              {QUICK_REPLIES.map((r, i) => (
                <button
                  key={i}
                  onClick={() => send(r.q)}
                  className="text-xs px-2 py-1 rounded-full bg-slate-100 hover:bg-primary/20 text-slate-600 hover:text-primary"
                >
                  {r.q}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="输入您的问题..."
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={() => send(input)}
                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-cyan-600"
              >
                发送
              </button>
            </div>
          </div>
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex gap-4 text-xs text-slate-500">
            <a href="tel:400-xxx-xxxx" className="hover:text-primary">📞 电话</a>
            <a href="javascript:void(0)" className="hover:text-primary">💬 微信</a>
            <a href="mailto:contact@bingoacademy.cn" className="hover:text-primary">✉️ 邮件</a>
          </div>
        </div>
      )}
    </>
  )
}
