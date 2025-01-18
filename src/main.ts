import { createApp } from 'vue';
import App from './App.vue';

// 重置样式
import 'normalize.css';
import './assets/css/index.less';
// 页面路由
import router from './router';
// 状态管理
import pinia from './store';
// 第三方组件
// 组件使用插件自动引入
import 'element-plus/dist/index.css'; //样式
import registerIcons from './global/register-icons'; //图标

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(registerIcons); // 注册图标
app.mount('#app');
