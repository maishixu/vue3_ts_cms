<template>
  <div class="page-modal">
    <el-dialog
      v-model="isDialogVisible"
      :title="isEdit ? props.modalConfig.header.editTitle : props.modalConfig.header.newTitle"
      width="500"
      center
    >
      <div class="form">
        <el-form :model="formData">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item
              label-width="70px"
              label-position="left"
              :label="item.label"
              :prop="item.prop"
              v-show="!isEdit || (isEdit && item.type !== 'password')"
            >
              <!-- 1.文本输入 -->
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
              </template>
              <!-- 2.密码输入 -->
              <template v-if="item.type === 'password'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  show-password
                />
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
              <!-- 4.自定义输入 -->
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
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
import { reactive, ref, toRaw } from 'vue';
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
  menuData?: any;
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
const systemStore = useSystemStore();
function handleConfirmClick() {
  isDialogVisible.value = false;
  const confirmData = { ...formData, ...props?.menuData };
  if (!isEdit.value) {
    // * 新建
    systemStore.createPageDataAction(props.modalConfig.pageName, confirmData);
  } else {
    // * 修改
    systemStore.editPageDataAction(props.modalConfig.pageName, rowId.value, confirmData);
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
