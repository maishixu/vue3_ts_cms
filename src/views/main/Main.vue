<template>
  <div class="main">
    <el-container class="">
      <el-aside width="240px">
        <NavHeader></NavHeader>
        <NavMain></NavMain>
      </el-aside>
      <el-container>
        <el-header height="40px">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavHeader from '@/components/nav-header/NavHeader.vue';
import NavMain from '@/components/nav-main/NavMain.vue';
</script>
<style lang="less" scoped>
.main {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-aside {
    background-color: hsl(210, 9%, 36%);
  }
  .el-header {
    background-color: rgb(228, 215, 198);
  }
  .el-main {
    background-color: rgb(215, 238, 181);
  }
}
</style>
