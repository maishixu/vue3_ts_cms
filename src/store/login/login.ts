import { defineStore } from 'pinia';
import { accountLoginRequest, getUserInfoRequest, getUserMenuRequest } from '@/service/login/login';
import type { IAccount } from '@/types';
import { localCache } from '@/utils/cache';
import { mapRoute } from '@/utils/map-route';
import router from '@/router';
import { LOGIN_TOKEN } from '@/global/constants';
import { useMainStore } from '../main/mian';

interface ILoginState {
  token: string;
  info: any;
  menu: any;
}
const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    info: localCache.getCache('userInfo') ?? {},
    menu: localCache.getCache('userMenu') ?? {},
  }),
  actions: {
    // **点击登录按钮后发生的动作
    async loginAccountAction(account: IAccount) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account);
      const id = loginResult.data.id;
      this.token = loginResult.data.token;
      localCache.setCache(LOGIN_TOKEN, this.token);

      // 2.获取用户信息
      const userInfo = await getUserInfoRequest(id);
      this.info = userInfo.data;

      // 4.获取用户菜单
      const userMenu = await getUserMenuRequest(this.info.role.id);
      this.menu = userMenu.data;

      // 4.进行本地缓存
      localCache.setCache('userInfo', userInfo.data);
      localCache.setCache('userMenu', userMenu.data);

      // 5.动态路由映射
      mapRoute(userMenu.data);

      // 6.跳转到主要页面
      router.push('/main');

      // 7.获取角色/部门列表
      const mainStore = useMainStore();
      await mainStore.postRoleListAction();
      await mainStore.postDepartmentListAction();
    },
    // **根据用户菜单的路由映射
    loadUserMenu() {
      const userMenu = localCache.getCache('userMenu');
      if (userMenu) {
        mapRoute(userMenu);
      }
    },
  },
});

export default useLoginStore;
