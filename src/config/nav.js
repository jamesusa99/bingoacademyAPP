// 一级栏目分组：组与组之间用分栏区分
export const mainNavGroups = [
  [{ path: '/', label: '首页' }],
  [{ path: '/showcase', label: '缤纷成果' }],
  [
    { path: '/courses', label: 'AI精品课' },
    { path: '/research', label: '科学研学' },
    { path: '/events', label: '赛事中心' },
    { path: '/community', label: 'AI学习社' },
    { path: '/growth', label: '成长计划' },
  ],
  [{ path: '/cert', label: '认证中心' }],
  [{ path: '/mall', label: 'AI智能商城' }],
  [{ path: '/charity', label: '荣誉与公益' }],
  [{ path: '/profile', label: '个人中心' }],
]

// 第 8 组：登录、注册
export const authNav = [
  { path: '/login', label: '登录' },
  { path: '/register', label: '注册' },
]

// 全部 8 组（含登录注册，用于顶栏分栏展示）
export const allNavGroups = [...mainNavGroups, authNav]

// 扁平列表（用于移动端等，不含登录注册）
export const mainNav = mainNavGroups.flat()
