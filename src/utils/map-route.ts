import router from '@/router/index';
import { useRoute } from 'vue-router';
const route = useRoute();
// 存储所有路由
const localRouter = [
  // 系统总览
  {
    path: '/main/analysis/overview',
    component: () => import('@/views/main/analysis/Overview.vue'),
    name: 'overview',
  },
  {
    path: '/main/analysis/dashboard',
    component: () => import('@/views/main/analysis/Dashboard.vue'),
  },
  // 系统管理
  {
    path: '/main/system/user',
    component: () => import('@/views/main/system/User.vue'),
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
    component: () => import('@/views/main/product/Category.vue'),
  },
  {
    path: '/main/product/goods',
    component: () => import('@/views/main/product/Goods.vue'),
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
// 存储第一个子菜单
export let firstMenu: any = undefined;

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
    // 0. 为根菜单路径匹配首个子菜单路由
    if (!router.getRoutes().find((eRoute) => eRoute.path === item.url)) {
      router.addRoute('main', { path: item.url, redirect: item.children[0].url });
    }
    for (const subItem of item.children) {
      // 1. 找到菜单匹配的路由
      const routeItem = localRouter.find((iRoute) => iRoute.path === subItem.url);
      if (routeItem) {
        router.addRoute('main', routeItem);
      }
      // 2. 找到第一个子菜单
      if (!firstMenu && subItem) {
        firstMenu = subItem;
      }
    }
  }
}

// 3. 找到当前路径的子菜单
export function mapPathToMenu(path: string, userMenu: any) {
  for (const item of userMenu) {
    for (const subItem of item.children) {
      if (subItem.url === path) return subItem;
    }
  }
}

// 4. 找到当前路径的菜单/子菜单
export function mapPathToFullMenu(path: string, userMenu: any) {
  for (const item of userMenu) {
    for (const subItem of item.children) {
      if (subItem.url === path) return [item, subItem];
    }
  }
}

// 5.获取菜单的id
export function mapMenuListToIds(menuList: any[]) {
  const ids: number[] = [];

  function recurseGetId(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children);
      } else {
        ids.push(item.id);
      }
    }
  }
  recurseGetId(menuList);
  return ids;
}

// 6.根据用户菜单获取角色的权限
export function mapMenuListToPermission(userList: any[]) {
  const permissions: any[] = [];
  function recurseGetPermission(userList: any[]) {
    for (const item of userList) {
      if (item.type === 3) {
        permissions.push(item.permission);
      } else [recurseGetPermission(item.children ?? [])];
    }
  }
  recurseGetPermission(userList);
  return permissions;
}
