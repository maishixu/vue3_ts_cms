<template>
  <div class="page-modal">
    <el-dialog
      v-model="isDialogVisible"
      :title="isEdit ? props.modalConfig.header.editTitle : props.modalConfig.header.newTitle"
      width="500"
      center
    >
      <div class="form">
        <el-form :model="formData" ref="formRef">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.prop">
              <!-- 1.文本输入 -->
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
              </template>
              <!-- 2.时间输入 -->
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <!-- 3.选择输入 -->
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
          </template>
          <!-- <el-form-item prop="name" label="部门名称">
            <el-input v-model="formData.name" placeholder="请输入部门名称"></el-input>
          </el-form-item>
          <el-form-item prop="leader" label="部门领导">
            <el-input v-model="formData.leader" placeholder="请输入部门领导"></el-input>
          </el-form-item>
          <el-form-item prop="parentId" label="上级部门">
            <el-select placeholder="请选择上级部门" v-model="formData.parentId">
              <template v-for="item in departmentList" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item> -->
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="isDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/main/system';
import type { ElForm } from 'element-plus';
import { reactive, ref } from 'vue';
// 1.接收数据
interface IProps {
  modalConfig: {
    pageName: string;
    header: {
      newTitle: string;
      editTitle: string;
    };
    formItems: any[];
  };
}
const props = defineProps<IProps>();

// 2.定义表单
const initialFormData: any = {};
for (const item of props.modalConfig.formItems) {
  initialFormData[item.prop] = '';
}
const formData = reactive<any>(initialFormData);

// 3.显示modal框
const isDialogVisible = ref(false);
const isEdit = ref(false);
const rowId = ref();

function changeIsDialogVisible(rowData?: any) {
  isDialogVisible.value = true;
  // * 如果修改
  if (rowData) {
    isEdit.value = true;
    rowId.value = rowData.id;
    for (const key in formData) {
      formData[key] = rowData[key];
    }
  }
  // * 如果新建
  else {
    for (const key in formData) {
      formData[key] = '';
    }
    isEdit.value = false;
  }
}

// 4.新建和修改
const formRef = ref<InstanceType<typeof ElForm>>();
const systemStore = useSystemStore();
function handleConfirmClick() {
  isDialogVisible.value = false;
  if (!isEdit.value) {
    // * 新建
    systemStore.createPageDataAction(props.modalConfig.pageName, formData);
  } else {
    // * 修改
    systemStore.editPageDataAction(props.modalConfig.pageName, rowId.value, formData);
  }
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
