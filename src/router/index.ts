import { LOGIN_TOKEN } from '@/global/constants';
import { localCache } from '@/utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  // 1.路由映射关系
  routes: [
    // 默认导航
    {
      path: '/',
      redirect: '/main',
    },
    // 其他导航
    {
      path: '/login',
      component: () => import('../views/login/Login.vue'),
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/Main.vue'),
    },
    // 幽灵导航（不存在）
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/not-found/NotFound.vue'),
    },
  ],
});
// 2.路由导航守卫
router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN);
  // * 进入主要界面的权限校验
  if (to.path.startsWith('/main') && !token) {
    return '/login';
  }
  // * 默认的主要页面导航
  if (to.path === '/main') {
    router.push('/main/analysis/dashboard');
  }
});

export default router;
