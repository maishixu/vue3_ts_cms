<template>
  <div class="user-content">
    <div class="head">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" plain class="create-btn" @click="handleAddUserClick"
        >创建用户</el-button
      >
    </div>
    <hr />
    <div class="userList">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="55" align="center" />
        <el-table-column prop="name" label="用户名" width="108" align="center" />
        <el-table-column prop="realname" label="真实姓名" width="108" align="center" />
        <el-table-column prop="cellphone" label="电话号码" width="125" align="center" />
        <el-table-column prop="enable" label="状态" width="80" align="center">
          <!-- 状态作用域插槽 -->
          <template #default="scope" align="center">
            <el-button :type="scope.row.enable ? 'success' : 'danger'" plain size="small">
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
        </el-table-column>
        <el-table-column prop="createAt" label="创建时间" align="center">
          <!-- 时间作用域插槽 -->
          <template #default="scope">
            {{ formatUTC(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column prop="updateAt" label="更新时间" align="center">
          <template #default="scope">
            {{ formatUTC(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="135" align="center">
          <template #default="scope">
            <el-button
              class="edit-delete-btn"
              icon="Edit"
              text
              type="primary"
              size="small"
              @click="handleEditUserClick(scope.row)"
              >编辑</el-button
            >
            <el-button
              class="edit-delete-btn"
              icon="Delete"
              text
              type="danger"
              size="small"
              @click="deleteUserClick(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
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
        :total="userCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/main/system';
import { formatUTC } from '@/utils/format';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
// 1.获取userList数据
const systemStore = useSystemStore();
const { userList, userCount } = storeToRefs(systemStore); // 把userList做成响应式的，使异步请求的结果变化也能及时更新页面
// * 根据用户选择构造请求参数
const currentPage = ref(1);
const pageSize = ref(20);
const postData: any = computed(() => ({
  offset: (currentPage.value - 1) * pageSize.value, // 当前偏移
  size: pageSize.value,
}));
// * 首次请求
systemStore.postUserListAction(postData.value);
// * 数量变化时发送请求
function handleSizeChange() {
  systemStore.postUserListAction(postData.value);
}
// * 页面变化时发送请求
function handleCurrentChange() {
  systemStore.postUserListAction(postData.value);
}
// 2.查询操作
function handleSearch(formData: any) {
  currentPage.value = 1;
  const computedParams = {
    ...formData,
    ...postData.value,
  };
  systemStore.postUserListAction(computedParams);
}

// 3.重置
function handleReset() {
  currentPage.value = 1;
  systemStore.postUserListAction(postData.value);
}
// 4.删除
function deleteUserClick(id: number) {
  systemStore.deleteUserDataAction(id);
}
// 5.新建
const emit = defineEmits(['addUserClick', 'editUserClick']);
function handleAddUserClick() {
  emit('addUserClick');
}
// 6.编辑
function handleEditUserClick(userData: any) {
  emit('editUserClick', userData);
}
// **暴露方法
defineExpose({
  handleSearch,
  handleReset,
});
</script>

<style lang="less" scoped>
.user-content {
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
  .userList {
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
