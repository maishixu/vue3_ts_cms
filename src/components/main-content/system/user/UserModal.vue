<template>
  <div class="user-modal">
    <el-dialog
      v-model="isDialogVisible"
      :title="isEdit ? '修改用户信息' : '创建新用户'"
      width="500"
      center
    >
      <div class="form">
        <el-form :model="formData" ref="formRef">
          <el-form-item prop="name" label="用户名">
            <el-input v-model="formData.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码" label-width="53px" v-if="!isEdit">
            <el-input v-model="formData.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item prop="realname" label="真实姓名">
            <el-input v-model="formData.realname" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item prop="cellphone" label="手机号码">
            <el-input v-model="formData.cellphone" placeholder="请输入手机号码"></el-input>
          </el-form-item>
          <el-form-item prop="roleId" label="选择角色">
            <el-select placeholder="请选择角色" v-model="formData.roleId">
              <template v-for="item in roleList" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item prop="departmentId" label="选择部门">
            <el-select placeholder="请选择部门" v-model="formData.departmentId">
              <template v-for="item in departmentList" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
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
import { storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
// 1.显示modal框
const isDialogVisible = ref(false);
const isEdit = ref(false);
const userId = ref();

function changeIsDialogVisible(userData?: any) {
  isDialogVisible.value = true;

  if (userData) {
    isEdit.value = true;
    userId.value = userData.id;
    for (const key in formData) {
      formData[key] = userData[key];
    }
  } else {
    isEdit.value = false;
  }
}
// 2.表单数据
let formData = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: '',
});

// 3.获取角色/部门列表
const mainStore = useMainStore();
const { roleList, departmentList } = storeToRefs(mainStore);
console.log(roleList, departmentList);

// 4.新建和修改用户
const formRef = ref<InstanceType<typeof ElForm>>();
const systemStore = useSystemStore();
function handleConfirmClick() {
  isDialogVisible.value = false;
  if (!isEdit.value) {
    // * 新建
    systemStore.createUserAction(formData);
    formRef.value?.resetFields();
  } else {
    // * 修改
    systemStore.editUserAction(userId.value, formData);
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
