import { Link } from 'react-router-dom'

// 加盟合作 - 内容来源 bingoacademy.cn，可前往官网同步更新
export default function Franchise() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="text-primary text-sm hover:underline">← 返回首页</Link>
      </div>
      <h1 className="text-2xl font-bold text-bingo-dark mb-2">加盟合作</h1>
      <p className="text-slate-600 mb-8">携手缤果AI学院，共创AI教育未来。诚邀各地教培机构、学校及教育创业者加入我们的加盟体系。</p>

      {/* 加盟优势 */}
      <section className="mb-10">
        <h2 className="section-title">加盟优势</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card p-6">
            <h3 className="font-semibold text-primary mb-2">品牌背书</h3>
            <p className="text-sm text-slate-600">依托缤果AI学院成熟品牌与AI+竞赛+全链条教育生态，快速建立本地影响力</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-primary mb-2">课程体系</h3>
            <p className="text-sm text-slate-600">标准化课程产品，从素养启蒙到竞赛培优、升学赋能，分层覆盖全学段需求</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-primary mb-2">赛事资源</h3>
            <p className="text-sm text-slate-600">白名单赛事授权、集训营支持，为学员提供权威实战舞台与成果展示机会</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-primary mb-2">师训支持</h3>
            <p className="text-sm text-slate-600">总部师资培训、教学督导、教研支持，保障教学质量与落地效果</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-primary mb-2">运营赋能</h3>
            <p className="text-sm text-slate-600">招生方案、活动策划、物料支持，助力校区快速启动与持续增长</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-primary mb-2">供应链支持</h3>
            <p className="text-sm text-slate-600">教材教具、AI工具产品直供，品质保障、利润空间清晰</p>
          </div>
        </div>
      </section>

      {/* 加盟条件 */}
      <section className="mb-10">
        <h2 className="section-title">加盟条件</h2>
        <ul className="card p-6 space-y-3 text-slate-600">
          <li>· 认同缤果AI学院品牌理念与教育价值观</li>
          <li>· 具备合法办学资质或教育相关经营主体</li>
          <li>· 拥有适宜的教学场地与基础运营条件</li>
          <li>· 具备一定的教育行业经验与本地资源优势</li>
          <li>· 愿意投入师资培训与课程落地</li>
        </ul>
      </section>

      {/* 加盟流程 */}
      <section className="mb-10">
        <h2 className="section-title">加盟流程</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-5 text-center border-primary/20">
            <span className="inline-flex w-10 h-10 rounded-full bg-primary/20 text-primary font-bold items-center justify-center mb-3">1</span>
            <h3 className="font-semibold text-bingo-dark">咨询洽谈</h3>
            <p className="text-sm text-slate-600 mt-1">提交意向，总部专人对接</p>
          </div>
          <div className="card p-5 text-center border-primary/20">
            <span className="inline-flex w-10 h-10 rounded-full bg-primary/20 text-primary font-bold items-center justify-center mb-3">2</span>
            <h3 className="font-semibold text-bingo-dark">实地考察</h3>
            <p className="text-sm text-slate-600 mt-1">总部考察或线上评估</p>
          </div>
          <div className="card p-5 text-center border-primary/20">
            <span className="inline-flex w-10 h-10 rounded-full bg-primary/20 text-primary font-bold items-center justify-center mb-3">3</span>
            <h3 className="font-semibold text-bingo-dark">签约授牌</h3>
            <p className="text-sm text-slate-600 mt-1">签订合作协议，授予品牌授权</p>
          </div>
          <div className="card p-5 text-center border-primary/20">
            <span className="inline-flex w-10 h-10 rounded-full bg-primary/20 text-primary font-bold items-center justify-center mb-3">4</span>
            <h3 className="font-semibold text-bingo-dark">启动运营</h3>
            <p className="text-sm text-slate-600 mt-1">师训、开业支持、持续督导</p>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="card p-8 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20">
        <h2 className="section-title">立即咨询</h2>
        <p className="text-slate-600 mb-6">欢迎致电或添加微信，获取详细加盟政策与区域名额</p>
        <div className="flex flex-wrap gap-6">
          <a href="tel:400-xxx-xxxx" className="flex items-center gap-2 text-primary font-medium hover:underline">
            <span className="text-xl">📞</span> 400-xxx-xxxx
          </a>
          <a href="javascript:void(0)" className="flex items-center gap-2 text-primary font-medium hover:underline">
            <span className="text-xl">💬</span> 微信：bingoacademy
          </a>
          <a href="mailto:join@bingoacademy.cn" className="flex items-center gap-2 text-primary font-medium hover:underline">
            <span className="text-xl">✉️</span> join@bingoacademy.cn
          </a>
        </div>
      </section>
    </div>
  )
}
