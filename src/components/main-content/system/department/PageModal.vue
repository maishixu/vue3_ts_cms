<template>
  <div class="user-modal">
    <el-dialog
      v-model="isDialogVisible"
      :title="isEdit ? '修改部门信息' : '创建新部门'"
      width="500"
      center
    >
      <div class="form">
        <el-form :model="formData" ref="formRef">
          <el-form-item prop="name" label="部门名称">
            <el-input v-model="formData.name" placeholder="请输入部门名称"></el-input>
          </el-form-item>

          <el-form-item prop="leader" label="部门领导">
            <el-input v-model="formData.leader" placeholder="请输入部门领导"></el-input>
          </el-form-item>
          <el-form-item prop="parentId" label="上级部门">
            <el-input v-model="formData.parentId" placeholder="请输入上级部门"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="handleCancelClick">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/main/mian';
import { useSystemStore } from '@/store/main/system';
import type { ElForm } from 'element-plus';
import { reactive, ref } from 'vue';
// 1.显示modal框
const isDialogVisible = ref(false);
const isEdit = ref(false);
const rowId = ref();

function changeIsDialogVisible(rowData?: any) {
  isDialogVisible.value = true;

  if (rowData) {
    isEdit.value = true;
    rowId.value = rowData.id;
    for (const key in formData) {
      formData[key] = rowData[key];
    }
  } else {
    isEdit.value = false;
  }
}
// 2.表单数据
let formData = reactive<any>({
  name: '',
  leader: '',
  parentId: '',
});

// 4.新建和修改
const formRef = ref<InstanceType<typeof ElForm>>();
const systemStore = useSystemStore();
function handleConfirmClick() {
  isDialogVisible.value = false;
  if (!isEdit.value) {
    // * 新建
    systemStore.createPageDataAction('department', formData);
    formRef.value?.resetFields();
  } else {
    // * 修改
    systemStore.editPageDataAction('department', rowId.value, formData);
    formRef.value?.resetFields();
  }
}

// 5.取消按钮逻辑
function handleCancelClick() {
  isDialogVisible.value = false;
  formRef.value?.resetFields();
}
// ** 暴露属性和方法 **
defineExpose({
  changeIsDialogVisible,
});
</script>

<style lang="less" scoped>
.form {
  padding-left: 22px;
  padding-right: 35px;
}
</style>
