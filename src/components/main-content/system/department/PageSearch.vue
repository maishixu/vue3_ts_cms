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
      <!-- <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input placeholder="请输入查询的部门名称" v-model="formData.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="formData.leader" placeholder="请输入查询的部门领导" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="createAt" label="创建时间">
            <el-date-picker
              v-model="formData.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row> -->
      <el-row :gutter="20">
        <el-col :span="23" class="col-btns" style="display: flex; justify-content: flex-end">
          <div class="btns">
            <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
            <el-button icon="Search" @click="handleSearchClick" type="primary">查询</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus';
import { reactive, ref, defineEmits } from 'vue';
// 接受父组件数据
interface IProps {
  searchConfig: {
    formItems: any[];
  };
}
const props = defineProps<IProps>();
// 存储表单数据
const initialFormData: any = {};
for (const item of props.searchConfig.formItems) {
  initialFormData[item.prop] = '';
}
const formData = reactive<any>(initialFormData);
// *与父组件通信
const emit = defineEmits(['resetClick', 'searchClick']);
// 重置功能
const formRef = ref<InstanceType<typeof ElForm>>();
function handleResetClick() {
  formRef.value?.resetFields();
  emit('resetClick');
}
// 查询功能
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
    margin-left: 5px;
    margin-right: 20px;
    .el-form-item {
      margin: 10px 12px;
    }
  }
}
.col-btns {
  margin: 8px 0;
  .btns {
    margin-left: 10px;
  }
  .el-button {
    height: 35px;
  }
}
</style>
