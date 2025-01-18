<template>
  <div class="PanePhone">
    <el-form label-width="60px" size="large">
      <el-form-item label="手机号" prop="name">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="verify-code">
          <el-input />
          <ElButton class="ver-btn" type="primary">获取验证码</ElButton>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.verify-code {
  display: flex;
  .ver-btn {
    margin-left: 5px;
  }
}
</style>
