import { Link } from 'react-router-dom'

// 学习中心：对应个人中心入口，用户将已选课程加入学习中心，在此学习与跟踪进度
export default function Study() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/profile" className="text-slate-500 hover:text-primary text-sm">← 个人中心</Link>
      </div>
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">学习中心</h1>
      <p className="text-slate-600 mb-8">将已选课程添加到学习中心，在此统一学习、记笔记、交作业、看进度与证书</p>

      {/* 我的课程（已添加的课程） */}
      <section className="mb-10">
        <h2 className="section-title">我的课程</h2>
        <p className="text-slate-600 text-sm mb-4">已购买或已添加的课程会出现在此处，点击进入即可学习</p>
        <div className="card p-6 border-primary/20">
          <p className="text-slate-500 text-sm">暂无课程，去 <Link to="/courses" className="text-primary hover:underline">AI精品课</Link> 选课并加入学习中心</p>
        </div>
      </section>

      {/* 学习功能：播放、倍速、笔记、答疑、作业 */}
      <section className="mb-10">
        <h2 className="section-title">学习功能</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="card p-5">
            <span className="font-semibold text-primary">播放</span>
            <p className="text-sm text-slate-600 mt-1">视频/直播回放，支持断点续播</p>
          </li>
          <li className="card p-5">
            <span className="font-semibold text-primary">倍速</span>
            <p className="text-sm text-slate-600 mt-1">0.75x～2x 倍速播放</p>
          </li>
          <li className="card p-5">
            <span className="font-semibold text-primary">笔记</span>
            <p className="text-sm text-slate-600 mt-1">随课记笔记，支持导出与复习</p>
          </li>
          <li className="card p-5">
            <span className="font-semibold text-primary">答疑</span>
            <p className="text-sm text-slate-600 mt-1">课程内提问、导师/助教答疑</p>
          </li>
          <li className="card p-5">
            <span className="font-semibold text-primary">作业提交</span>
            <p className="text-sm text-slate-600 mt-1">在线提交作业，批改与反馈</p>
          </li>
        </ul>
      </section>

      {/* 学习进度：已学/未学、完成度、证书 */}
      <section className="mb-10">
        <h2 className="section-title">学习进度</h2>
        <div className="card p-6 bg-cyan-50/50 border-primary/20">
          <ul className="text-sm text-slate-700 space-y-2">
            <li><strong>已学/未学</strong>：每节课、每个章节可标记已学，列表内区分已学/未学</li>
            <li><strong>完成度</strong>：按章节与课时自动计算课程完成度，支持学习报告查看</li>
            <li><strong>证书获取条件</strong>：完成全部课时并通过考核后，可申请/领取课程证书，在认证中心查看</li>
          </ul>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link to="/courses" className="btn-primary">去选课</Link>
        <Link to="/profile" className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">返回个人中心</Link>
      </div>
    </div>
  )
}
