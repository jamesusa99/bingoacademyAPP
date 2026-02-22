import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── 学员四级课程体系 ───────────────────────────────────────
const STUDENT_LEVELS = [
  {
    id: 'level1',
    level: 'Level 1',
    title: 'AI精英启蒙课',
    tag: '基础层',
    age: '6–12岁 · 小学阶段',
    color: 'from-cyan-500 to-sky-500',
    bg: 'bg-cyan-50 border-cyan-200/60',
    goal: '具备基础AI感知与探究能力，养成「爱思考、敢尝试」的精英潜质',
    desc: '以趣味化、体验式教学为主，拒绝枯燥理论，让孩子在玩中学，建立AI认知，培育精英潜质，对接2026年小学AI素养教育标准。',
    courses: [
      {
        name: '《AI启蒙：走进智能世界》',
        sub: '适配6-8岁 · 小学低段 · 12课时',
        points: [
          'AI是什么：用动画解读AI，区别于传统科普',
          'AI在生活中的应用：智能机器人、AI绘画、语音助手',
          '虚拟AI宠物喂养实训：语音/手势指令控制',
          'AI伦理启蒙：不沉迷AI、保护个人信息',
        ],
      },
      {
        name: '《AI工具小达人》',
        sub: '适配8-10岁 · 小学中段 · 12课时',
        points: [
          '基础AI工具实操：AI思维导图、AI错题整理、AI拼音助手',
          'AI工具核心逻辑：培养逻辑思维，理解算法原理',
          '虚拟AI学习工坊：在线协作完成学习任务',
          '工具实操比拼，评选「AI工具小精英」',
        ],
      },
      {
        name: '《AI创新小实验》',
        sub: '适配10-12岁 · 小学高段 · 12课时',
        points: [
          '简单AI实验：垃圾分类、声音识别、图像分类',
          '初步接触机器学习基础，生活化语言解读原理',
          '虚拟3D AI实验室，完成实验并生成报告',
          '小组协作完成「AI校园指引机器人」项目',
        ],
      },
    ],
    services: ['AI个性化测评 · 生成《AI精英潜质报告》', '定期推送"AI启蒙家长指南"', '完成课程获"AI精英启蒙徽章"', '优秀学员参与缤果AI小精英夏令营'],
  },
  {
    id: 'level2',
    level: 'Level 2',
    title: 'AI精英进阶课',
    tag: '提升层',
    age: '13–18岁 · 初高中阶段',
    color: 'from-primary to-cyan-600',
    bg: 'bg-sky-50 border-sky-200/60',
    goal: '能独立完成AI基础应用与简单创新，具备「善应用、能突破」的精英素养',
    desc: '衔接初中AI素养要求与高中科技特长生培养标准，兼顾"升学赋能"与"精英能力塑造"，适配2026年科技特长生升学趋势。',
    courses: [
      {
        name: '《AI基础原理与应用》',
        sub: '适配13-15岁 · 初中方向 · 16课时',
        points: [
          'AI核心概念：机器学习、深度学习、神经网络（简化聚焦应用）',
          '常用AI工具进阶：AI视频剪辑、AI文案创作、AI数据可视化',
          'AI与学科融合：辅助数理化、语文作文、英语翻译',
          '对接初中AI白名单赛事，课程同步赛事考点',
        ],
      },
      {
        name: '《机器学习入门与实战》',
        sub: '适配15-18岁 · 高中方向 · 16课时',
        points: [
          '机器学习基础：数据收集、特征提取、模型训练（结合Python）',
          '常用模型：线性回归、决策树、神经网络',
          'AI项目实战：「AI成绩预测」「AI图像识别分类」',
          '科技特长生升学解读：录取标准与备考方法',
        ],
      },
      {
        name: '《AI竞赛培优课》',
        sub: '适配14-18岁 · 初高中通用 · 16课时',
        points: [
          '聚焦2026年AI类白名单赛事拆解与评分标准',
          '项目选题、方案设计到落地展示，全程指导',
          '虚拟赛事场景模拟，还原现场答辩演练',
          '往届获奖案例解析，一对一项目优化指导',
        ],
      },
      {
        name: '《AI伦理与精英思维》',
        sub: '适配13-18岁 · 初高中通用 · 16课时',
        points: [
          'AI伦理深度探讨：AI偏见、隐私保护、社会责任',
          '精英思维培养：批判性思维、创新思维、全球视野',
          'AI伦理辩论赛：「AI应该取代教师吗？」',
          'AI公益项目设计：用AI技术解决社会问题',
        ],
      },
    ],
    services: ['AI个性化学习路径（基于学段与目标智能调整）', '精英导师团：高校教师+赛事评委+特长生教练', '直接对接2026年AI白名单赛事全程服务', '建立AI精英成长档案，区块链存证助力升学'],
  },
  {
    id: 'level3',
    level: 'Level 3',
    title: 'AI精英实战课',
    tag: '落地层',
    age: '16–22岁 · 高中+大学阶段',
    color: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50 border-indigo-200/60',
    goal: '能独立完成AI创新项目，具备「能创新、善落地」的精英核心能力',
    desc: '从"懂AI、用AI"向"创AI、落地AI"过渡，聚焦AI创新项目实战与成果转化，对接高校AI专业学习与青少年科创人才标准。',
    courses: [
      {
        name: '《AI创新项目实战（通用方向）》',
        sub: '20课时 · 跨学科综合项目',
        points: [
          'AI项目全流程：选题→方案设计→技术实现→测试优化→展示',
          '跨学科AI项目开发，科创论文写作与期刊发表指导',
          '虚拟3D AI创新工坊，小组协作完成综合性项目',
          '优秀项目对接科创成果转化平台，获得孵化支持',
        ],
      },
      {
        name: '《AI视觉与机器人编程实战》',
        sub: '20课时 · 硬件+视觉专项',
        points: [
          'AI视觉基础：图像识别、目标检测、人脸识别（结合Python）',
          '机器人编程：智能机器人搭建、编程控制、AI算法适配',
          '线下实训基地：亲手搭建与调试机器人，项目实际落地',
          '对接AI机器人企业，优秀学员获实习机会+专利申请指导',
        ],
      },
      {
        name: '《教育AI实战与开发》',
        sub: '20课时 · 教育科技专项',
        points: [
          '教育AI核心需求分析：教师/学生/家长痛点深挖',
          '教育AI工具开发：AI答疑机器人、AI学情分析系统',
          '教育大模型应用：优化AI教育产品交互与功能',
          '对接中小学试点，项目投入实际使用并收集反馈优化',
        ],
      },
      {
        name: '《AI数据科学与可视化实战》',
        sub: '20课时 · 数据科学专项',
        points: [
          '数据科学基础：数据收集、清洗、分析（Python+Excel）',
          'AI数据建模：机器学习模型在数据科学中的应用',
          '数据可视化：制作专业图表与分析报告',
          '对接企业/高校参与真实数据项目，考取AI数据分析师证书',
        ],
      },
    ],
    services: ['为优秀AI项目提供技术+资金+资源孵化支持', '对接头部AI企业与高校实验室线下实训/实习', '专业导师指导申请AI相关专利与撰写科创论文', '加入缤果AI精英实战社群，与行业专家交流'],
  },
  {
    id: 'level4',
    level: 'Level 4',
    title: 'AI精英赋能课',
    tag: '精英层',
    age: '20–28岁 · 大学+职场初期',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50 border-violet-200/60',
    goal: '成为AI领域专项精英，实现能力变现与职业升级，具备「领潮流、创价值」的精英格局',
    desc: '聚焦AI专项领域深度深耕与价值变现，对接职场AI岗位需求与创业趋势，适配2026年AI职场与创业环境。',
    courses: [
      {
        name: '《AI专项领域精通课》',
        sub: '24课时 · 职场方向·3个细分赛道',
        points: [
          '赛道1：AI大模型应用与Prompt工程（适配所有职场人）',
          '赛道2：AI产品经理（产品逻辑+原型设计+运营迭代）',
          '赛道3：AI算法入门与应用（深度学习+算法实战+面试）',
          '职场精英导师1v1指导，优秀学员获企业内推机会',
        ],
      },
      {
        name: '《AI创业赋能课》',
        sub: '24课时 · 创业方向',
        points: [
          '2026年AI创业趋势与风口：教育AI、中小企业AI赋能蓝海',
          'AI创业计划书撰写、融资技巧与资源对接',
          '虚拟AI创业项目孵化：从选题到商业计划书全流程',
          '对接创业孵化器+投资机构，路演获融资支持',
        ],
      },
      {
        name: '《AI成果变现实战课》',
        sub: '24课时 · 通用方向',
        points: [
          'AI成果变现多路径：工具售卖、接单、课程创作、专利授权',
          'AI接单平台操作技巧与成果包装推广',
          '真实AI变现项目实操：AI文案、数据处理、工具开发订单',
          '搭建AI成果变现对接平台，打造个人AI品牌',
        ],
      },
      {
        name: '《AI精英领导力课》',
        sub: '24课时 · 通用方向',
        points: [
          'AI时代领导力核心：创新领导力、资源整合、团队管理',
          '跨领域资源整合：对接技术、资金、市场资源',
          '全球AI趋势洞察：2026-2030年行业发展方向',
          '加入缤果AI精英领袖社群，对接全球AI领域精英资源',
        ],
      },
    ],
    services: ['精英导师1v1指导职业规划、岗位提升、创业孵化', '对接头部AI企业/投资机构/创业孵化器/变现平台', '获得《缤果AI精英认证证书》，入选精英人才库', '课程终身免费更新，定期精英交流活动'],
  },
]

// ─── 家长四级课程体系 ───────────────────────────────────────
const PARENT_LEVELS = [
  {
    id: 'parent1',
    level: 'Parent 1',
    title: 'AI启蒙家长课',
    tag: '基础层',
    age: '孩子6–12岁家长',
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-50 border-emerald-200/60',
    goal: '建立正确AI认知，掌握低龄孩子AI启蒙引导方法，守护孩子创新兴趣',
    courses: [
      {
        name: '《AI启蒙家长必修课》',
        sub: '适配孩子6-8岁家长 · 8课时',
        points: [
          '2026年低龄AI启蒙趋势：为什么小学低年级要做AI启蒙',
          '低龄孩子AI启蒙核心方法：趣味引导、场景融入、兴趣保护',
          'AI使用风险防控：避免沉迷、保护个人信息、辨别不良内容',
          '联动学员课程，配合「家庭AI探究任务」精准引导',
        ],
      },
      {
        name: '《AI工具家长课》',
        sub: '适配孩子8-12岁家长 · 8课时',
        points: [
          '小学阶段主流AI学习工具解读，家长快速上手',
          'AI与孩子学习高效结合技巧，避免"过度依赖"',
          '孩子AI创新兴趣的保护与引导方法',
          '配备AI启蒙家长导师，1v1解答个性化困惑',
        ],
      },
    ],
  },
  {
    id: 'parent2',
    level: 'Parent 2',
    title: 'AI进阶家长课',
    tag: '提升层',
    age: '孩子13–18岁家长',
    color: 'from-teal-500 to-cyan-600',
    bg: 'bg-teal-50 border-teal-200/60',
    goal: '了解AI升学政策与赛事价值，掌握孩子AI学习引导与思维培养方法，助力升学赋能',
    courses: [
      {
        name: '《初中AI家长赋能课》',
        sub: '适配孩子13-15岁家长 · 10课时',
        points: [
          '2026年初中AI素养教育政策解读与核心要求',
          'AI与初中各科学习融合逻辑，避免"无效使用"',
          '初中孩子AI学习引导技巧，平衡学习与文化课',
          '初中AI白名单赛事解读，指导家长支持孩子报名备赛',
        ],
      },
      {
        name: '《高中AI家长升学课》',
        sub: '适配孩子15-18岁家长 · 10课时',
        points: [
          '2026年科技特长生（AI方向）升学政策深度解读',
          '高中AI竞赛与升学关联：高含金量赛事规划指南',
          '孩子AI创新能力支撑：资源协助、压力疏导',
          '邀请AI特长生家长+升学导师分享经验，个性化规划建议',
        ],
      },
    ],
  },
  {
    id: 'parent3',
    level: 'Parent 3',
    title: 'AI实战家长课',
    tag: '落地层',
    age: '孩子16–22岁家长',
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50 border-blue-200/60',
    goal: '理解AI创新项目与成果转化价值，掌握孩子职业/升学方向指引方法，助力实战能力落地',
    courses: [
      {
        name: '《AI科创家长支撑课》',
        sub: '10课时 · 适配所有该阶段家长',
        points: [
          '2026年AI科创成果转化趋势：项目、专利、论文的变现路径',
          'AI创新项目与专利解读，让家长读懂孩子的成果',
          '如何为孩子提供科创支撑：资源对接+资金支持的正确方式',
          '孩子科创过程中的心理疏导，培养抗挫折能力',
        ],
      },
      {
        name: '《AI方向升学/职业规划家长课》',
        sub: '10课时 · 分目标方向',
        points: [
          'AI方向高校自主招生、考研政策解读与加分优势',
          'AI领域高校专业选择指南：学习内容与就业方向',
          '2026年AI领域就业趋势与热门岗位能力要求',
          '指导家长尊重孩子意愿，避免盲目选择，结合能力兴趣规划',
        ],
      },
    ],
  },
  {
    id: 'parent4',
    level: 'Parent 4',
    title: 'AI精英家长课',
    tag: '精英层',
    age: '孩子20–28岁家长',
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 border-purple-200/60',
    goal: '认可AI时代价值变现逻辑，掌握孩子职业发展与创业支持方法，协同助力精英升级',
    courses: [
      {
        name: '《AI职场家长赋能课》',
        sub: '10课时 · 适配孩子职场方向家长',
        points: [
          '2026年AI职场发展趋势：核心岗位需求与职业晋升路径',
          'AI职场核心竞争力分析：孩子需要具备哪些能力才能立足',
          '家长如何支持孩子职场发展：情感疏导+资源协同+尊重选择',
          '邀请AI职场高管+资深从业者分享经验，掌握最新职场动态',
        ],
      },
      {
        name: '《AI创业家长支撑课》',
        sub: '10课时 · 适配孩子创业方向家长',
        points: [
          '2026年AI创业趋势与风口：蓝海领域、风险与机遇',
          'AI创业核心逻辑与流程，让家长读懂孩子的创业项目',
          '家长支撑创业的正确方式：情感支持+理性资金+风险共担',
          '创业心态培养，引导孩子树立正确创业观、应对失败',
        ],
      },
    ],
  },
]

// ─── 课程对照速查表 ─────────────────────────────────────────
const OVERVIEW_TABLE = [
  { system: '学员精品培育体系', level: 'Level 1', title: 'AI精英启蒙课', age: '6–12岁', tag: '基础层', target: '兴趣启蒙+素养奠基' },
  { system: '学员精品培育体系', level: 'Level 2', title: 'AI精英进阶课', age: '13–18岁', tag: '提升层', target: '能力提升+思维塑造' },
  { system: '学员精品培育体系', level: 'Level 3', title: 'AI精英实战课', age: '16–22岁', tag: '落地层', target: '实战落地+成果转化' },
  { system: '学员精品培育体系', level: 'Level 4', title: 'AI精英赋能课', age: '20–28岁', tag: '精英层', target: '价值变现+长期成长' },
  { system: '家长赋能课程体系', level: 'Parent 1', title: 'AI启蒙家长课', age: '孩子6–12岁', tag: '基础层', target: '认知启蒙+科学引导' },
  { system: '家长赋能课程体系', level: 'Parent 2', title: 'AI进阶家长课', age: '孩子13–18岁', tag: '提升层', target: '升学适配+思维协同' },
  { system: '家长赋能课程体系', level: 'Parent 3', title: 'AI实战家长课', age: '孩子16–22岁', tag: '落地层', target: '成果支撑+方向指引' },
  { system: '家长赋能课程体系', level: 'Parent 4', title: 'AI精英家长课', age: '孩子20–28岁', tag: '精英层', target: '价值共识+资源协同' },
]

const TAG_COLORS = {
  '基础层': 'bg-emerald-100 text-emerald-700',
  '提升层': 'bg-sky-100 text-sky-700',
  '落地层': 'bg-indigo-100 text-indigo-700',
  '精英层': 'bg-violet-100 text-violet-700',
}

export default function Courses() {
  const [activeSystem, setActiveSystem] = useState('student')
  const [expandedId, setExpandedId] = useState(null)

  const levels = activeSystem === 'student' ? STUDENT_LEVELS : PARENT_LEVELS

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── 核心定位 ── */}
      <section className="mb-10">
        <div className="card p-8 bg-gradient-to-br from-bingo-dark to-slate-700 text-white">
          <div className="max-w-4xl">
            <div className="text-xs font-medium text-cyan-300 mb-2 tracking-wider">AI精品课 · 核心定位</div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
              培育具备AI核心素养、创新思维、<br className="hidden sm:block" />实战能力与未来视野的时代精英
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              打破传统AI课程"重工具、轻素养""重理论、轻落地"局限，构建<span className="text-cyan-300 font-medium">素养奠基→能力进阶→实战赋能→价值变现</span>四级精英课程体系，同步配套<span className="text-amber-300 font-medium">AI时代家长赋能课程</span>，实现学员精英培育与家长科学引导双向发力。
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/90">学员端：AI素养→专项能力→实战落地→精英赋能</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-sm text-white/90">家长端：认知升级→引导能力→协同培育→价值共识</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 课程对照总览表 ── */}
      <section className="mb-10">
        <h2 className="section-title mb-1">双体系课程总览</h2>
        <p className="text-slate-600 text-sm mb-4">学员精英培育体系 × 家长赋能课程体系，双体系同频推进，覆盖6-28岁全龄段</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-4 py-3 text-slate-500 font-medium w-28">所属体系</th>
                <th className="text-left px-4 py-3 text-slate-500 font-medium w-24">层级</th>
                <th className="text-left px-4 py-3 text-slate-500 font-medium">课程名称</th>
                <th className="text-left px-4 py-3 text-slate-500 font-medium w-28">适配人群</th>
                <th className="text-left px-4 py-3 text-slate-500 font-medium">核心定位</th>
              </tr>
            </thead>
            <tbody>
              {OVERVIEW_TABLE.map((row, i) => (
                <tr key={i} className={'border-b border-slate-100 hover:bg-slate-50 transition ' + (i >= 4 ? 'bg-amber-50/30' : '')}>
                  <td className="px-4 py-3">
                    <span className={'text-xs font-medium ' + (i < 4 ? 'text-primary' : 'text-amber-600')}>{i < 4 ? '学员体系' : '家长体系'}</span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-500">{row.level}</td>
                  <td className="px-4 py-3 font-medium text-bingo-dark">{row.title}</td>
                  <td className="px-4 py-3 text-slate-600">{row.age}</td>
                  <td className="px-4 py-3">
                    <span className={'text-xs px-2 py-0.5 rounded-full ' + (TAG_COLORS[row.tag] || 'bg-slate-100 text-slate-600')}>{row.tag}</span>
                    <span className="text-slate-500 ml-2">{row.target}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 体系切换 ── */}
      <section className="mb-10">
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => { setActiveSystem('student'); setExpandedId(null) }}
            className={'px-6 py-2.5 rounded-full text-sm font-medium transition ' + (activeSystem === 'student' ? 'bg-primary text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}
          >
            学员精英培育体系
          </button>
          <button
            onClick={() => { setActiveSystem('parent'); setExpandedId(null) }}
            className={'px-6 py-2.5 rounded-full text-sm font-medium transition ' + (activeSystem === 'parent' ? 'bg-amber-500 text-white shadow' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}
          >
            家长赋能课程体系
          </button>
        </div>

        {activeSystem === 'parent' && (
          <div className="card p-4 bg-amber-50 border-amber-200/60 mb-6 flex items-start gap-3">
            <span className="text-amber-500 text-xl shrink-0 mt-0.5">👨‍👩‍👧</span>
            <p className="text-sm text-amber-800">家长赋能课程与学员课程深度绑定、协同发力。每门家长课程均包含<span className="font-medium">「认知科普+方法教学+案例解析+实战演练+一对一答疑」</span>五大模块，帮助家长成为孩子AI成长路上的引路人与同行者。</p>
          </div>
        )}

        <div className="space-y-4">
          {levels.map((lv) => {
            const isOpen = expandedId === lv.id
            return (
              <div key={lv.id} className={'card overflow-hidden border ' + lv.bg}>
                {/* 层级头部 */}
                <button
                  type="button"
                  onClick={() => setExpandedId(isOpen ? null : lv.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-black/[0.02] transition"
                >
                  <div className="flex items-start gap-4">
                    <div className={'shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ' + lv.color + ' flex flex-col items-center justify-center text-white'}>
                      <span className="text-[10px] font-medium opacity-80">{lv.level}</span>
                      <span className="text-xs font-bold leading-tight text-center px-1">{lv.tag}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-bingo-dark text-base">{lv.title}</h3>
                        <span className={'text-xs px-2 py-0.5 rounded-full ' + (TAG_COLORS[lv.tag] || '')}>{lv.tag}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-0.5">{lv.age}</p>
                      <p className="text-sm text-slate-700 mt-1 line-clamp-2">{lv.goal}</p>
                    </div>
                  </div>
                  <span className={'text-slate-400 text-lg shrink-0 transition-transform ' + (isOpen ? 'rotate-180' : '')}>▼</span>
                </button>

                {/* 展开内容 */}
                {isOpen && (
                  <div className="border-t border-black/5 px-6 pb-6 pt-4">
                    <p className="text-slate-600 text-sm mb-5">{lv.desc}</p>

                    {/* 课程卡片 */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      {lv.courses.map((c, ci) => (
                        <div key={ci} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition">
                          <h4 className="font-semibold text-bingo-dark text-sm">{c.name}</h4>
                          <p className="text-xs text-slate-500 mt-0.5 mb-3">{c.sub}</p>
                          <ul className="space-y-1.5">
                            {c.points.map((pt, pi) => (
                              <li key={pi} className="flex items-start gap-2 text-xs text-slate-600">
                                <span className="text-primary mt-0.5 shrink-0">·</span>
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* 配套服务（学员课程专属） */}
                    {lv.services && (
                      <div className="bg-white/70 rounded-xl border border-slate-100 p-5">
                        <h4 className="text-xs font-semibold text-slate-500 mb-3">配套服务</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {lv.services.map((s, si) => (
                            <div key={si} className="flex items-start gap-2 text-xs text-slate-600">
                              <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link to="/profile#score-bank" className="btn-primary text-sm px-5 py-2">立即报名咨询</Link>
                      <button type="button" className="rounded-lg border border-primary text-primary px-5 py-2 text-sm hover:bg-primary/10 transition">免费试听</button>
                      <Link to="/community" className="rounded-lg border border-slate-300 text-slate-600 px-5 py-2 text-sm hover:bg-slate-50 transition">进入学习社交流</Link>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── AI工具库联动 ── */}
      <section className="mb-10">
        <h2 className="section-title mb-4">AI工具库 · 课程联动</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: 'tool-1', title: '错题帮AI', desc: '智能错题本与个性化巩固', price: '¥9.9/月' },
            { id: 'tool-2', title: '作业批改助手', desc: '自动批改与点评建议', price: '¥19.9/月' },
            { id: 'tool-3', title: '梅林口语', desc: 'AI口语练习与测评', price: '¥29.9/月' },
            { id: 'tool-4', title: '学习报告生成器', desc: '学习数据可视化与报告', price: '¥0' },
          ].map((item) => (
            <Link key={item.id} to={'/tools/detail/' + item.id} className="card p-6 hover:shadow-md hover:border-primary/30 transition">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
              <p className="text-xs text-slate-500 mt-2">{item.price}</p>
              <span className="text-sm text-primary mt-3 inline-block">查看详情 →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 个性化成长计划 ── */}
      <section id="growth-plan" className="mb-10 border-t pt-8">
        <h2 className="section-title mb-1">个性化成长计划</h2>
        <p className="text-slate-600 text-sm mb-6">AI能力测评 → 学习方案生成 → 阶段套餐 → 学习跟踪，打通「测评-选课-学习-认证」全链路</p>
        <div className="card p-6 bg-gradient-to-r from-cyan-50 to-sky-50 border-primary/20 flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-semibold text-bingo-dark">AI能力测评 · 推荐适合您的课程</h3>
            <p className="text-slate-600 text-sm mt-1">测一测孩子的AI素养与潜力，根据结果智能推荐课程层级与学习路径。</p>
          </div>
          <button type="button" className="btn-primary shrink-0">去测评</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: '分阶段成长套餐', desc: '入门→进阶→精通，配套教材、课程、教具，套餐佣金可分享' },
            { title: '个性化成长规划', desc: 'AI测评+定制学习方案，按计划推荐对应课程，专属规划咨询入口' },
            { title: '成长打卡 · 积分奖励', desc: '积分可兑换教材/教具、课程优惠券；成长进度可分享获赠试学时长' },
            { title: '长期导师跟进', desc: '1v1导师指导，形成AI创作作品集与个人能力档案，衔接认证中心' },
          ].map((item, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 card p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200/50 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm text-slate-500">成长计划专属优惠</div>
            <p className="font-medium text-bingo-dark mt-1">按成长计划报名对应课程，享额外专属折扣</p>
          </div>
          <Link to="/cert" className="rounded-lg border border-primary text-primary px-4 py-2 text-sm hover:bg-primary/10">关联认证中心 →</Link>
        </div>
      </section>

      {/* ── 缤果学分 · 学习领学分入口 ── */}
      <section className="mb-10 border-t pt-8">
        <h2 className="section-title mb-1">🏅 学习领学分</h2>
        <p className="text-slate-600 text-sm mb-4">完成课程学习、打卡任务，积累「缤果学分」，可兑换优惠券/课程/赛事报名折扣</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { action: '完成课程试听', score: '+5分', note: '每门课每天1次' },
            { action: '完成课程章节', score: '+15分', note: '章节完成自动到账' },
            { action: '课程考试满分', score: '+30分', note: '完课率100%学分翻倍' },
            { action: '成长计划阶段达成', score: '+50分', note: '阶段越高奖励越多' },
          ].map((s, i) => (
            <div key={i} className="card p-5 border-primary/20 hover:shadow-md transition">
              <p className="text-sm font-medium text-slate-700">{s.action}</p>
              <p className="text-primary font-bold text-lg mt-1">{s.score}</p>
              <p className="text-xs text-slate-400 mt-1">{s.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 card p-5 bg-cyan-50 border-primary/20 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-medium text-bingo-dark">学分可抵扣课程学费</p>
            <p className="text-sm text-slate-600 mt-0.5">100学分 = 10元课程抵扣，课程分享至朋友圈额外 +5分</p>
          </div>
          <Link to="/profile#score-bank" className="btn-primary text-sm px-4 py-2">查看我的学分</Link>
        </div>
      </section>
    </div>
  )
}
