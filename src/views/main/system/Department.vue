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
      <template #testLeader="scope">*{{ scope.row[scope.prop] }}*</template>
    </PageContent>
    <PageModal ref="modalRef"></PageModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageSearch from '@/components/main-content/system/department/PageSearch.vue';
import PageContent from '@/components/main-content/system/department/PageContent.vue';
import PageModal from '@/components/main-content/system/department/PageModal.vue';
import searchConfig from '@/components/main-content/system/department/config/search.config';
import contentConfig from '@/components/main-content/system/department/config/content.config';
// 1.查询
const contentRef = ref<InstanceType<typeof PageContent>>();
function handleSearchClick(formData: any) {
  contentRef.value?.handleSearch(formData);
}
// 2.重置
function handleResetClick() {
  contentRef.value?.handleReset();
}
// 3.新建
const modalRef = ref<InstanceType<typeof PageModal>>();
function handleAddClick() {
  modalRef.value?.changeIsDialogVisible();
}
// 4.编辑
function handleEditClick(userData: any) {
  modalRef.value?.changeIsDialogVisible(userData);
}
</script>

<style></style>
