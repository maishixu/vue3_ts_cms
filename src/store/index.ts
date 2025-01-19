import { createPinia } from 'pinia';
import useLoginStore from './login/login';
import type { App } from 'vue';
function store(app: App<Element>) {
  // 安装pinia
  const pinia = createPinia();
  app.use(pinia);
  // 加载动态路由
  const loginStore = useLoginStore();
  loginStore.loadUserMenu();
}

export default store;
