<template>
  <div class="user-search">
    <!-- 1.输入搜索关键字表单 -->
    <el-form
      :model="formData"
      ref="formRef"
      size="default"
      label-position="right"
      label-width="68px"
    >
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
      <!-- 2.重置/搜索按钮 -->
      <div class="btns">
        <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
        <el-button icon="Search" @click="handleSearchClick" type="primary">查询</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus';
import { reactive, ref, defineEmits } from 'vue';
// 1.接受父组件数据
interface IProps {
  searchConfig: {
    formItems: any[];
  };
}
const props = defineProps<IProps>();
// 2.存储表单数据
const initialFormData: any = {};
for (const item of props.searchConfig.formItems) {
  initialFormData[item.prop] = '';
}
const formData = reactive<any>(initialFormData);

// 3.查询/重置功能
const emit = defineEmits(['resetClick', 'searchClick']);
const formRef = ref<InstanceType<typeof ElForm>>();
function handleResetClick() {
  formRef.value?.resetFields();
  emit('resetClick');
}
function handleSearchClick() {
  emit('searchClick', formData);
}
</script>

<style lang="less" scoped>
.user-search {
  background-color: white;
  border-radius: 5px;
  border: 1px rgb(225, 225, 225) solid;
  .el-form {
    margin: 5px;
    margin-left: 10px;
    margin-right: 20px;
    .el-form-item {
      margin: 10px 12px;
    }
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 14px;
  .el-button {
    height: 35px;
  }
}
</style>
