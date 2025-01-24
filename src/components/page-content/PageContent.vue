<template>
  <div class="page-content">
    <div class="head">
      <h3 class="title">{{ props.contentConfig.header.title }}</h3>
      <el-button
        v-show="isCreate && props.contentConfig.header?.btnTitle"
        type="primary"
        plain
        class="create-btn"
        @click="handleAddDataClick"
        >{{ props.contentConfig.header?.btnTitle }}
      </el-button>
    </div>
    <hr />
    <div class="pageList">
      <el-table :data="pageList" border style="width: 100%" row-key="id">
        <template v-for="item in props.contentConfig.dataList">
          <!-- 1.时间列 -->
          <template v-if="item.type === 'timer'">
            <el-table-column v-bind="item" align="center">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <!-- 2.操作列 -->
          <template v-else-if="item.type === 'handler'">
            <el-table-column v-bind="item" align="center">
              <template #default="scope">
                <el-button
                  v-show="isUpdate"
                  class="edit-delete-btn"
                  icon="Edit"
                  text
                  type="primary"
                  size="small"
                  @click="handleEditClick(scope.row)"
                  >编辑</el-button
                >
                <el-button
                  v-show="isDelete"
                  class="edit-delete-btn"
                  icon="Delete"
                  text
                  type="danger"
                  size="small"
                  @click="deleteClick(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </template>
          <!-- 3.自定义列 -->
          <template v-else-if="item.type === 'custom'">
            <el-table-column v-bind="item" align="center">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop"></slot>
              </template>
            </el-table-column>
          </template>
          <!-- 4.普通列 -->
          <template v-else>
            <el-table-column v-bind="item" align="center" />
          </template>
        </template>
      </el-table>
    </div>
    <hr style="margin-top: 10px" />
    <div class="footer">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20]"
        size="small"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/main/system';
import { localCache } from '@/utils/cache';
import { formatUTC } from '@/utils/format';
import { mapMenuListToPermission } from '@/utils/map-route';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
// 1.接收父组件数据
interface IProps {
  contentConfig: {
    header: any;
    dataList: any[];
    pageName: string;
  };
}
const props = defineProps<IProps>();
// 2.获取角色权限
const permissions = mapMenuListToPermission(localCache.getCache('userMenu'));

const isQuery = permissions.find((item) => item.includes(`${props.contentConfig.pageName}:query`));
if (isQuery) {
  localCache.setCache('isQuery', 'true');
} else {
  localCache.setCache('isQuery', 'false');
}

const isCreate = permissions.find((item) =>
  item.includes(`${props.contentConfig.pageName}:create`),
);
const isDelete = permissions.find((item) =>
  item.includes(`${props.contentConfig.pageName}:delete`),
);
const isUpdate = permissions.find((item) =>
  item.includes(`${props.contentConfig.pageName}:update`),
);
// 2.获取页面数据
const systemStore = useSystemStore();
const { pageList, pageCount } = storeToRefs(systemStore); // 把List做成响应式的，使异步请求的结果变化也能及时更新页面
// * 请求参数
const currentPage = ref(1);
const pageSize = ref(20);
const postData: any = computed(() => ({
  offset: (currentPage.value - 1) * pageSize.value, // 当前偏移
  size: pageSize.value,
}));
// * 首次请求
systemStore.postPageListAction(props.contentConfig.pageName, postData.value);
// * 数量变化(请求)
function handleSizeChange() {
  systemStore.postPageListAction(props.contentConfig.pageName, postData.value);
}
// * 页面变化(请求)
function handleCurrentChange() {
  systemStore.postPageListAction(props.contentConfig.pageName, postData.value);
}

// 3.查询
function handleSearch(formData: any) {
  currentPage.value = 1;
  const computedParams = {
    ...formData,
    ...postData.value,
  };
  systemStore.postPageListAction(props.contentConfig.pageName, computedParams);
}

// 4.重置
function handleReset() {
  currentPage.value = 1;
  systemStore.postPageListAction(props.contentConfig.pageName, postData.value);
}
// 5.删除
function deleteClick(id: number) {
  systemStore.deletePageDataAction(props.contentConfig.pageName, id);
}
// 6.新建
const emit = defineEmits(['addDataClick', 'editDataClick']);
function handleAddDataClick() {
  emit('addDataClick');
}
// 7.编辑
function handleEditClick(rowData: any) {
  emit('editDataClick', rowData);
}
// **暴露方法
defineExpose({
  handleSearch,
  handleReset,
});
</script>

<style lang="less" scoped>
.page-content {
  background-color: white;
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 5px;
  border: 1px rgb(225, 225, 225) solid;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .title {
      font-size: 20px;
    }
    .create-btn {
      height: 30px;
      padding: 5px 7px !important;
      margin-top: 2px;
    }
  }
  .pageList {
    margin-top: 10px;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
  }
}
hr {
  border: none;
  border-top: 1px solid #ccc; /* 灰色的线 */
  margin: 6px 0; /* 可选，设置上下的间距 */
}
.edit-delete-btn {
  margin: 0 6px;
  padding: 0px;
}
</style>
