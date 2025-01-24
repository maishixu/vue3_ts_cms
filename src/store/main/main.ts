import { postDepartmentList, postMenuList, postRoleList } from '@/service/main/main';
import type { IMain } from '@/types/main';
import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: (): IMain => ({
    roleList: [],
    departmentList: [],
    menuList: [],
  }),
  actions: {
    // 1.获取角色列表
    async postRoleListAction() {
      const roleResult = await postRoleList();
      this.roleList = roleResult.data.list;
    },
    // 2.获取部门列表
    async postDepartmentListAction() {
      const departmentResult = await postDepartmentList();
      this.departmentList = departmentResult.data.list;
    },
    // 3.获取菜单列表
    async postMenuListAction() {
      const menuResult = await postMenuList();
      this.menuList = menuResult.data.list;
    },
  },
});
