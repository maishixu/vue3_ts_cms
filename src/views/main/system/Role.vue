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
      <template #testLeader="scope">*{{ scope.row[scope.prop] }}*</template>
    </PageContent>
    <PageModal :modalConfig="modalConfig" ref="modalRef"></PageModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import PageSearch from '@/components/page-content/PageSearch.vue';
import PageContent from '@/components/page-content/PageContent.vue';
import PageModal from '@/components/page-content/PageModal.vue';

import searchConfig from '@/components/main-content/system/role/config/search.config';
import contentConfig from '@/components/main-content/system/role/config/content.config';
import modalConfig from '@/components/main-content/system/role/config/modal.config';

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
