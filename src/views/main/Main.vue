<template>
  <div class="main">
    <el-container class="common-layout">
      <!-- 侧边导航 -->
      <el-aside :width="isFold ? '56px' : '210px'">
        <NavHeader :isFold="isFold"></NavHeader>
        <NavMain :isFold="isFold"></NavMain>
      </el-aside>

      <el-container>
        <!-- 顶部 -->
        <el-header height="40px">
          <MainHeader @foldChange="handleFoldChange"></MainHeader>
        </el-header>
        <!-- 内容 -->
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavHeader from '@/components/main-nav/NavHeader.vue';
import NavMain from '@/components/main-nav/NavMain.vue';
import MainHeader from '@/components/main-header/MainHeader.vue';

// 接收折叠状态
import { ref } from 'vue';
const isFold = ref(false);
function handleFoldChange(flag: boolean) {
  isFold.value = flag;
}
</script>
<style lang="less" scoped>
.main {
  height: 100%;
}
.el-container {
  height: 100%;
  .el-aside {
    background-color: hsl(210, 9%, 36%);
    transition: width 0.2s ease;
  }
  .el-header {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-main {
    padding-top: 8px;
    // padding-left: 15px;
    background-color: rgb(247, 247, 247);
  }
}
</style>
