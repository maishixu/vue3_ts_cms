import { createPinia } from 'pinia';
import useLoginStore from './login/login';
import type { App } from 'vue';
import { useMainStore } from './main/main';
async function store(app: App<Element>) {
  // 安装pinia
  const pinia = createPinia();
  app.use(pinia);
  // 1.每次刷新加载动态路由
  const loginStore = useLoginStore();
  loginStore.loadUserMenu();
  // 2.每次刷新获取角色/部门列表
  const mainStore = useMainStore();
  await mainStore.postRoleListAction();
  await mainStore.postDepartmentListAction();
}

export default store;
