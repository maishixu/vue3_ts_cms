<template>
  <div class="count-card">
    <div class="head">
      <span class="text">{{ props.title }}</span>
      <div class="icon">
        <el-tooltip :content="props.tips" placement="top" effect="light">
          <el-icon><Warning /></el-icon>
        </el-tooltip>
      </div>
    </div>
    <div class="content">
      <span v-if="props.amount === 'saleroom'">￥</span>
      <span class="text" ref="countup1Ref">{{ props.number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ props.subtitle }}：</span>
      <span v-if="props.amount === 'saleroom'">￥</span>
      <span ref="countup2Ref">{{ props.number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countUp.js';
import { onMounted, ref } from 'vue';
// 1.接收数据
interface IProps {
  amount: string;
  title: string;
  tips: string;
  subtitle: string;
  number1: number;
  number2: number;
}
const props = defineProps<IProps>();
// 2.数字动画
const countup1Ref = ref<HTMLElement>();
const countup2Ref = ref<HTMLElement>();
onMounted(() => {
  const countup1 = new CountUp(countup1Ref.value!, props.number1, {
    duration: 4, // * 持续时间
  });
  countup1.start();
  const countup2 = new CountUp(countup2Ref.value!, props.number2, {
    duration: 2, // * 持续时间
  });
  countup1.start();
  countup2.start();
});
</script>

<style lang="less" scoped>
.count-card {
  margin-top: 2px;
  height: 100px;
  background-color: white;
  border-radius: 5px;
  border: #ebe9e9 solid 1px;
  .head {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    color: #898989;
  }
  .content {
    padding-left: 8px;
    font-size: 30px;
    font-weight: 500;
  }
  .footer {
    padding: 8px;
  }
}
</style>
