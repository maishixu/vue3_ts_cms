/// <reference types="vite/client" />

// 声明vue
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const comments: DefineComponent;
  export default component;
}
