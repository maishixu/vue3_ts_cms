<template>
  <div class="PaneAccount">
    <el-form label-width="60px" size="large" :model="account" :rules="accountRules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElForm } from 'element-plus';
import type { FormRules } from 'element-plus';
import type { IAccount } from '@/types';
import useLoginStore from '@/store/login/login';
import { localCache } from '@/utils/cache';
// 登录信息
const account = reactive<IAccount>({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? '',
});
// 登录信息校验
const accountRules: FormRules = {
  name: [
    { required: true, message: '账号不能为空！', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '账号必须由6-20位的字母或数字组成', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '密码不能位空！', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须由3位以上的字母或数字组成', trigger: 'blur' },
  ],
};
// 执行登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>();
const loginStore = useLoginStore();

function loginAction(isRemPwd: boolean) {
  // 验证输入格式是否有效
  formRef.value?.validate((valid) => {
    if (valid) {
      // 发送请求
      loginStore.loginAccountAction(account);
      // 是否记住密码
      if (isRemPwd) {
        localCache.setCache('name', account.name);
        localCache.setCache('password', account.password);
      } else {
        localCache.removeCache('name');
        localCache.removeCache('password');
      }
    } else {
      ElMessage({
        message: '账号或密码格式不正确，请重新输入',
        type: 'warning',
      });
    }
  });
}
defineExpose({
  //暴露方法
  loginAction,
});
</script>

<style lang="less" scoped></style>
