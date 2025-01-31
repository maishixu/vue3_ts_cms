<template>
  <div class="department">
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
      <template #enableSlot="scope">
        <el-button :type="scope.row.enable ? 'success' : 'danger'" plain size="small">
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </PageContent>
    <PageModal :modalConfig="modalConfigRef" ref="modalRef"></PageModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import PageSearch from '@/components/page-content/PageSearch.vue';
import PageContent from '@/components/page-content/PageContent.vue';
import PageModal from '@/components/page-content/PageModal.vue';

import searchConfig from '@/components/main-content/system/user/search.config';
import contentConfig from '@/components/main-content/system/user/content.config';
import modalConfig from '@/components/main-content/system/user/modal.config';

import { useMainStore } from '@/store/main/main';

// 1.定义数据
const modalConfigRef = computed(() => {
  const mainStore = useMainStore();
  const departmentList = mainStore.departmentList.map((item) => {
    return { label: item.name, value: item.id };
  });
  const roleList = mainStore.roleList.map((item) => {
    return { label: item.name, value: item.id };
  });
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'roleId') {
      item.options?.push(...roleList);
    }
    if (item.prop === 'departmentId') {
      item.options?.push(...departmentList);
    }
  });
  return modalConfig;
});
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
  modalRef.value?.changeIsDialogVisible();
}
// 5.编辑
function handleEditClick(userData: any) {
  modalRef.value?.changeIsDialogVisible(userData);
}
</script>

<style></style>
