import { postUserListData } from '@/service/main/system';
import type { ISystem } from '@/types/main';
import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', {
  state: (): ISystem => ({
    userList: [],
    userCount: 0,
  }),
  actions: {
    // 1.获取用户列表
    async postUserListAction() {
      const userData = await postUserListData();
      this.userList = userData.data.list;
      this.userCount = userData.data.totalCount;
    },
  },
});
