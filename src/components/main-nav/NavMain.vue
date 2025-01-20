<template>
  <div class="nav-main">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      :collapse="isFold"
      :default-active="defaultActive"
      text-color="#fff"
    >
      <el-sub-menu
        v-for="item in localCache.getCache('userMenu')"
        :key="item.id"
        :index="String(item.id)"
      >
        <template #title>
          <el-icon>
            <component :is="item.icon.split('-icon-')[1]"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="cItem in item.children"
          :key="cItem.id"
          :index="String(cItem.id)"
          @click="changeRoute(cItem)"
        >
          * {{ cItem.name }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache';
import { mapPathToMenu } from '@/utils/map-route';
import { computed } from 'vue';
import { useRoute, useRouter, type Router } from 'vue-router';
// 1.接受参数：是否折叠
defineProps({
  isFold: {
    type: Boolean,
    default: false,
  },
});
// 2.根据菜单切换路由
const router = useRouter();
function changeRoute(item: any) {
  router.push(item.url);
}
// 3.根据路径切换当前侧边栏子菜单
const route = useRoute();
const defaultActive = computed(() => {
  const defaultMenu = mapPathToMenu(route.path, localCache.getCache('userMenu'));
  return defaultMenu.id + '';
});
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none !important; /* 清除右边的边框 */
  box-shadow: none !important; /* 清除阴影 */
}
.el-sub-menu {
  .el-icon {
    margin-right: 10px !important;
  }
}
.el-menu-item {
  padding-left: 56px !important;
  color: rgb(230, 228, 228) !important;
  background-color: hsl(208, 9%, 40%);
  height: 45px;
}
.el-menu-item:hover {
  color: white !important;
  background-color: hsl(208, 9%, 29%);
}
.el-menu-item.is-active {
  background-color: hsl(208, 9%, 29%) !important;
  color: white !important;
}
</style>
