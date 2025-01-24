<template>
  <div class="role">
    <PageSearch
      @search-click="handleSearchClick"
      @reset-click="handleResetClick"
      :searchConfig="searchConfig"
    ></PageSearch>
    <PageContent
      @add-data-click="handleAddClick"
      @edit-data-click="handleEditClick"
      :contentConfig="contentConfig"
      ref="contentRef"
    >
    </PageContent>
    <PageModal :modalConfig="modalConfig" :menuData="menuData" ref="modalRef">
      <template #menuSlot>
        <el-tree
          ref="treeRef"
          style="max-width: 600px"
          show-checkbox
          :data="menuList"
          node-key="id"
          :props="{
            children: 'children',
            label: 'name',
          }"
          @check="handelCheckClick"
        />
      </template>
    </PageModal>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';

import PageSearch from '@/components/page-content/PageSearch.vue';
import PageContent from '@/components/page-content/PageContent.vue';
import PageModal from '@/components/page-content/PageModal.vue';

import searchConfig from '@/components/main-content/system/role/config/search.config';
import contentConfig from '@/components/main-content/system/role/config/content.config';
import modalConfig from '@/components/main-content/system/role/config/modal.config';
import { useMainStore } from '@/store/main/main';
import { storeToRefs } from 'pinia';
import { mapMenuListToIds } from '@/utils/map-route';
import { ElTree } from 'element-plus';
// 1.获取角色列表
const mainSystem = useMainStore();
const { menuList } = storeToRefs(mainSystem);
let menuData = ref({});
function handelCheckClick(data1: any, data2: any) {
  menuData.value = { menuList: [...data2.checkedKeys, ...data2.halfCheckedKeys] };
}
// 2.查询
const contentRef = ref<InstanceType<typeof PageContent>>();
function handleSearchClick(formData: any) {
  contentRef.value?.handleSearch(formData);
}
// 3.重置
function handleResetClick() {
  contentRef.value?.handleReset();
}
// 4.新建
const modalRef = ref<InstanceType<typeof PageModal>>();
function handleAddClick() {
  treeRef.value?.setCheckedKeys([]);
  modalRef.value?.changeIsDialogVisible();
}
// 5.编辑
const treeRef = ref<InstanceType<typeof ElTree>>();
function handleEditClick(pageData: any) {
  // * 等modal显示后再进行DOM操作,否则拿不到treeRef
  modalRef.value?.changeIsDialogVisible(pageData);
  nextTick(() => {
    const ids = mapMenuListToIds(pageData.menuList);
    treeRef.value?.setCheckedKeys(ids);
  });
}
</script>

<style></style>
