import myAxios from '../index';
import type { IAccount } from '@/types';

// 登录请求
export function accountLoginRequest(account: IAccount) {
  return myAxios.post({
    url: '/login',
    data: account,
  });
}
// 获取用户信息请求
export function getUserInfoRequest(id: number) {
  return myAxios.get({
    url: `/users/${id}`,
  });
}

// 获取用户菜单请求

export function getUserMenuRequest(id: number) {
  return myAxios.get({
    url: `/role/${id}/menu`,
  });
}
