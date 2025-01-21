<template>
  <div class="user">
    <UserSearch @searchClick="handleSearchClick" @resetClick="handleResetClick"></UserSearch>
    <UserContent
      @addUserClick="handleAddUserClick"
      @editUserClick="handleEditUserClick"
      ref="contentRef"
    ></UserContent>
    <UserModal ref="modalRef"></UserModal>
  </div>
</template>

<script setup lang="ts">
import UserSearch from '@/components/main-content/system/user/UserSearch.vue';
import UserContent from '@/components/main-content/system/user/UserContent.vue';
import UserModal from '@/components/main-content/system/user/UserModal.vue';
import { ref } from 'vue';

// 1.查询
const contentRef = ref<InstanceType<typeof UserContent>>();
function handleSearchClick(formData: any) {
  contentRef.value?.handleSearch(formData);
}
// 2.重置
function handleResetClick() {
  contentRef.value?.handleReset();
}
// 3.新建
const modalRef = ref<InstanceType<typeof UserModal>>();
function handleAddUserClick() {
  modalRef.value?.changeIsDialogVisible();
}
// 4.编辑
function handleEditUserClick(userData: any) {
  modalRef.value?.changeIsDialogVisible(userData);
}
</script>

<style></style>
