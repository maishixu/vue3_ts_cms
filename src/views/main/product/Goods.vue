<template>
  <div class="goods">
    <PageSearch
      :search-config="searchConfig"
      @search-click="handleSearchClick"
      @reset-click="handleResetClick"
    ></PageSearch>
    <PageContent
      @add-data-click="handleAddClick"
      @edit-data-click="handleEditClick"
      :content-config="contentConfig"
      ref="contentRef"
    >
      <template #imgSlot="scope">
        <img
          :src="scope.row.imgUrl"
          alt="Image"
          style="width: 100%; height: 50px; object-fit: cover"
        />
      </template>
    </PageContent>
    <PageModal :modalConfig="modalConfig" ref="modalRef"> </PageModal>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-content/PageSearch.vue';
import PageContent from '@/components/page-content/PageContent.vue';
import PageModal from '@/components/page-content/PageModal.vue';
import searchConfig from '@/components/main-content/product/goods/search.config';
import contentConfig from '@/components/main-content/product/goods/content.config';
import modalConfig from '@/components/main-content/product/goods/modal.config';
import { ref } from 'vue';

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

<style lang="less" scoped></style>
