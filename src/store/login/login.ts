import { defineStore } from 'pinia';
import { accountLoginRequest, getUserInfoRequest, getUserMenuRequest } from '@/service/login/login';
import type { IAccount } from '@/types';
import { localCache } from '@/utils/cache';
import router from '@/router';
import { LOGIN_TOKEN } from '@/global/constants';

interface ILoginState {
  token: string;
  info: any;
  menu: any;
}
const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    info: {},
    menu: {},
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录, 获取token等信息
      const loginResult = await accountLoginRequest(account);
      const id = loginResult.data.id;
      this.token = loginResult.data.token;

      // 2.进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token);

      // 3.获取用户信息
      const userInfo = await getUserInfoRequest(id);
      this.info = userInfo.data;

      // 4.获取用户菜单
      const userMenu = await getUserMenuRequest(this.info.role.id);
      this.menu = userMenu;

      // 5.跳转到主要页面
      router.push('/main');
    },
  },
});

export default useLoginStore;
