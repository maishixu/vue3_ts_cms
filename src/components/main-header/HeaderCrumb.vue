<template>
  <div class="header-crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in currentMenu">
        <el-breadcrumb-item :to="{ path: item.url }" class="aaa">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { localCache } from '@/utils/cache';
import { mapPathToFullMenu } from '@/utils/map-route';
import { useRoute } from 'vue-router';
// 1.根据路径获得父菜单和子菜单
const route = useRoute();
const currentMenu = computed(() => {
  return mapPathToFullMenu(route.path, localCache.getCache('userMenu'));
});
</script>

<style lang="less" scoped>
/* 不被选中时的颜色 */
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
  color: #656565 !important;
  font-weight: 400 !important;
}
/* 被选中时的颜色 */
.el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner {
  color: #3e3e3e !important;
  font-weight: 500 !important;
}
</style>
