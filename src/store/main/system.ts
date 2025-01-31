import {
  createPageData,
  createUser,
  deletePageData,
  deleteUserData,
  editPageData,
  editUserData,
  postPageListData,
  postUserListData,
} from '@/service/main/system';
import type { ISystem } from '@/types/main';
import { defineStore } from 'pinia';
import { useMainStore } from './main';
import { localCache } from '@/utils/cache';

export const useSystemStore = defineStore('system', {
  state: (): ISystem => ({
    userList: [],
    userCount: 0,

    pageList: [],
    pageCount: 0,
  }),
  actions: {
    // 1.查询用户
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

    /* 封装：增删改查 */
    // 1.查
    async postPageListAction(pageName: string, postData: any) {
      // if (localCache.getCache('isQuery') === 'false') {
      //   return;
      // }
      const departmentData = await postPageListData(pageName, postData);
      this.pageList = departmentData.data.list;
      this.pageCount = departmentData.data.totalCount;
    },
    // 2.删
    async deletePageDataAction(pageName: string, id: number) {
      await deletePageData(pageName, id); // * 删除请求
      this.postPageListAction(pageName, { offset: 0, size: 20 }); // * 重新请求数据
      // * 重新获取获取角色/部门/菜单列表
      const mainStore = useMainStore();
      await mainStore.postRoleListAction();
      await mainStore.postDepartmentListAction();
      await mainStore.postMenuListAction();
    },
    // 3.增
    async createPageDataAction(pageName: string, formData: any) {
      await createPageData(pageName, formData);
      this.postPageListAction(pageName, { offset: 0, size: 20 });
      // * 重新获取获取角色/部门/菜单列表
      const mainStore = useMainStore();
      await mainStore.postRoleListAction();
      await mainStore.postDepartmentListAction();
      await mainStore.postMenuListAction();
    },
    // 4.改
    async editPageDataAction(pageName: string, id: number, formData: any) {
      await editPageData(pageName, id, formData);
      this.postPageListAction(pageName, { offset: 0, size: 20 });
      // * 重新获取获取角色/部门/菜单列表
      const mainStore = useMainStore();
      await mainStore.postRoleListAction();
      await mainStore.postDepartmentListAction();
      await mainStore.postMenuListAction();
    },
  },
});
