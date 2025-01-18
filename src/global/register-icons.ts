// 注册图标插件

import type { App } from 'vue'; // app组件的类型
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { DEFAULT_FORMATS_DATE } from 'element-plus';

function registerIcons(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}

export default registerIcons;
