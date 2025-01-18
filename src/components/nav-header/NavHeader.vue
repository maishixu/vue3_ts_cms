<template>
  <div class="nav-header">
    <img src="@/assets/img/logo.svg" class="img" />
    <h2 class="text">后台管理系统</h2>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.nav-header {
  background-color: hsl(210, 9%, 28%);
  display: flex;
  height: 50px;
  align-items: center;
  // justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  color: white;
  .img {
    height: 100%;
    padding-left: 20px;
    margin-right: 5px;
  }
}
</style>
