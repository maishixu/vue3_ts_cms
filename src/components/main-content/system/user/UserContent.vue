<template>
  <div class="user-content">
    <div class="head">
      <h3 class="title">用户列表</h3>
      <el-button type="primary" plain class="create-btn">创建用户</el-button>
    </div>
    <hr />
    <div class="userList">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="55" align="center" />
        <el-table-column prop="name" label="用户名" width="102" align="center" />
        <el-table-column prop="realname" label="真实姓名" width="102" align="center" />
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
          <el-button class="edit-delete-btn" icon="Edit" text type="primary" size="small"
            >编辑</el-button
          >
          <el-button class="edit-delete-btn" icon="Delete" text type="danger" size="small"
            >删除</el-button
          >
        </el-table-column>
      </el-table>
    </div>
    <div>分页</div>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/main/system';
import { formatUTC } from '@/utils/format';
import { storeToRefs } from 'pinia';
// 获取userList数据
const systemStore = useSystemStore();
const { userList } = storeToRefs(systemStore); // 把userList做成响应式的，使异步请求的结果变化也能及时刷新页面
systemStore.postUserListAction();
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
