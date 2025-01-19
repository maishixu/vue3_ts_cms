import router from '@/router/index';

const localRouter = [
  // 系统总览
  {
    path: '/main/analysis/overview',
    component: () => import('@/views/main/analysis/overview.vue'),
    name: 'overview',
  },
  {
    path: '/main/analysis/dashboard',
    component: () => import('@/views/main/analysis/dashboard.vue'),
  },
  // 系统管理
  {
    path: '/main/system/user',
    component: () => import('@/views/main/system/user.vue'),
  },
  {
    path: '/main/system/department',
    component: () => import('@/views/main/system/Department.vue'),
  },
  {
    path: '/main/system/menu',
    component: () => import('@/views/main/system/Menu.vue'),
  },
  {
    path: '/main/system/role',
    component: () => import('@/views/main/system/Role.vue'),
  },
  // 商品中心
  {
    path: '/main/product/category',
    component: () => import('@/views/main/product/category.vue'),
  },
  {
    path: '/main/product/goods',
    component: () => import('@/views/main/product/goods.vue'),
  },
  // 随便聊聊
  {
    path: '/main/story/chat',
    component: () => import('@/views/main/story/Chat.vue'),
  },
  {
    path: '/main/story/list',
    component: () => import('@/views/main/story/List.vue'),
  },
];
export function mapRoute(userMenu: any) {
  // * 映射前先删除当前的/main路径下所有路由
  router.getRoutes().forEach((route) => {
    if (route.path.startsWith('/main') && route.path !== '/main') {
      if (route) {
        const name = String(route.name);
        router.removeRoute(name);
      }
    }
  });
  for (const item of userMenu) {
    for (const subItem of item.children) {
      // 找到菜单匹配的路由
      const route = localRouter.find((iRoute) => iRoute.path === subItem.url);
      if (route) {
        router.addRoute('main', route);
      }
    }
  }
}
