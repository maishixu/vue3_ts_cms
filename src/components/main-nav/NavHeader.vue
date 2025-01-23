<template>
  <div class="nav-header">
    <img src="@/assets/img/logo.svg" class="img" />
    <h3 class="text" v-show="!isFold">MaXwell 管理系统</h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isFold: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="less" scoped>
.nav-header {
  background-color: hsl(210, 9%, 20%);
  display: flex;
  height: 54px;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 12px;
  color: white;
  .img {
    margin-left: -5px;
    margin-right: 4px;
    height: 90%;
  }
}
</style>
