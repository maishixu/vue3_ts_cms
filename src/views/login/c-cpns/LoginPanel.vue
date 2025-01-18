<template>
  <div class="LoginPanel">
    <!-- 顶部标题 -->
    <h1 class="title">通用后台管理系统</h1>
    <!-- 中间tabs切换 -->
    <el-tabs type="border-card" stretch v-model="activeName">
      <el-tab-pane label="账号登录" name="account">
        <template #label>
          <!-- 标题插槽 -->
          <div class="label">
            <el-icon><User /></el-icon>
            <span class="text">账号登录</span>
          </div>
        </template>
        <PaneAccount ref="accountRef"></PaneAccount>
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <template #label>
          <div class="label">
            <el-icon><Iphone /></el-icon>
            <span class="text">手机登录</span>
          </div>
        </template>
        <PanePhone></PanePhone>
      </el-tab-pane>
    </el-tabs>
    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large" @click="handleLoginBtn">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import PaneAccount from './PaneAccount.vue';
import PanePhone from './PanePhone.vue';
import { localCache } from '@/utils/cache';

// 密码状态管理
const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false);
watch(isRemPwd, (newValue) => {
  localCache.setCache('isRemPwd', newValue);
});

const activeName = ref('account');
const accountRef = ref<InstanceType<typeof PaneAccount>>(); // 获取组件的实例类型

function handleLoginBtn() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isRemPwd.value);
    // console.log('用户在进行账号登录');
  } else {
    // console.log('用户在进行手机登录');
  }
}
</script>

<style lang="less" scoped>
.LoginPanel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 0px;
    width: 100%;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      margin-left: 5px;
    }
  }
}
</style>
