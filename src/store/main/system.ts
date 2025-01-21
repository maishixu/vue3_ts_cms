import { createUser, deleteUserData, editUserData, postUserListData } from '@/service/main/system';
import type { ISystem } from '@/types/main';
import { defineStore } from 'pinia';

export const useSystemStore = defineStore('system', {
  state: (): ISystem => ({
    userList: [],
    userCount: 0,
  }),
  actions: {
    // 1.获取用户列表
    async postUserListAction(postData: any) {
      const userData = await postUserListData(postData);
      this.userList = userData.data.list;
      this.userCount = userData.data.totalCount;
    },
    // 2.删除用户
    async deleteUserDataAction(id: number) {
      // * 删除请求
      await deleteUserData(id);
      // * 重新请求数据
      this.postUserListAction({ offset: 0, size: 20 });
    },
    // 3.添加用户
    async createUserAction(formData: any) {
      // * 添加请求
      await createUser(formData);
      // * 重新请求数据
      this.postUserListAction({ offset: 0, size: 20 });
    },
    // 4.修改用户
    async editUserAction(id: number, formData: any) {
      // * 修改请求
      await editUserData(id, formData);
      // * 重新请求数据
      this.postUserListAction({ offset: 0, size: 20 });
    },
  },
});
