<template>
  <div class="overview">
    <div class="head">
      <div class="text1">
        <h3>项目描述</h3>
      </div>
      <div class="text2">
        <span>
          MaXwell 管理系统是一个基于 Vue 3、Pinia、Vue Router、Vite、Element Plus、TypeScript 和
          ECharts 等技术栈构建的通用后台管理系统解决方案。
        </span>
      </div>
    </div>
    <div class="technic">
      <div class="title">
        <h3>技术栈</h3>
      </div>
      <div class="content">
        <ul>
          <li>- 开发工具：<span class="li-span">Visual Studio Code</span></li>
          <li>- 编程语言：<span class="li-span">TypeScript 4.x + JavaScript</span></li>
          <li>- 构建工具：<span class="li-span">Vite 2.x / Webpack5.x</span></li>
          <li>- 前端框架：<span class="li-span">Vue 3.x</span></li>
          <li>- 路由工具：<span class="li-span">Vue Router 4.x</span></li>
          <li>- 状态管理：<span class="li-span">Pinia</span></li>
          <li>- UI 框架：<span class="li-span">Element Plus</span></li>
          <li>- 可视化：<span class="li-span">Echart5.x</span></li>
          <li>- 富文本：<span class="li-span">WangEditor</span></li>
          <li>- 工具库：<span class="li-span">@vueuse/core + dayjs + countup.js</span></li>
          <li>- CSS 预编译：<span class="li-span">Sass / Less</span></li>
          <li>- HTTP 工具：<span class="li-span">Axios</span></li>
          <li>- Git Hook 工具：<span class="li-span">husky</span></li>
          <li>- 代码规范：<span class="li-span">EditorConfig + Prettier + ESLint</span></li>
          <li>- 提交规范：<span class="li-span">Commitizen + Commitlint</span></li>
          <li>- 自动部署：<span class="li-span">Centos + Jenkins + Nginx</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.overview {
  .head {
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid rgb(230, 229, 229);
    .text1 {
      margin-bottom: 25px;
    }
    .text2 {
      margin-bottom: 5px;
    }
  }
  .technic {
    margin-top: 8px;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid rgb(230, 229, 229);
    .title {
      margin-bottom: 15px;
    }
    .content {
      padding-left: 5px;
      li {
        height: 24px;
      }
      .li-span {
        padding-left: 3px;
        color: rgb(2, 90, 178);
      }
    }
  }
}
hr {
  border: none;
  border-top: 1px solid #ccc; /* 灰色的线 */
  margin: 6px 0; /* 可选，设置上下的间距 */
}
</style>
