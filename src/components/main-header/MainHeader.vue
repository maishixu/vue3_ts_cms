<template>
  <div class="content">
    <el-icon size="22px" @click="isFoldAction">
      <component :is="isFold ? 'Fold' : 'Expand'"> </component>
    </el-icon>
    <div>></div>
  </div>
  <HeaderInfo></HeaderInfo>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderInfo from '@/components/main-header/HeaderInfo.vue';
const isFold = ref(false);
const emit = defineEmits(['foldChange']);
// 是否折叠侧边栏
function isFoldAction() {
  isFold.value = !isFold.value;
  emit('foldChange', isFold.value);
}
</script>

<style lang="less" header>
.content {
  display: flex;
}
.el-icon:hover {
  cursor: pointer;
}
</style>
