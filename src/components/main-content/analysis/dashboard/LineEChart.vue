<template>
  <div class="sup-echart">
    <div class="title">
      <span class="text">分类商品的销量</span>
    </div>
    <hr />
    <BaseEChart :option="option"></BaseEChart>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import BaseEChart from './BaseEChart.vue';
import { computed } from 'vue';
interface IProps {
  labels: string[];
  values: string[];
}
const props = defineProps<IProps>();
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.labels,
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '分类销量统计',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: props.values,
      },
    ],
  };
});
</script>

<style lang="less" scoped>
.sup-echart {
  background-color: white;
  border: 1px solid rgb(223, 221, 221);
  border-radius: 5px;
  .title {
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    padding-left: 7px;
  }
}
hr {
  border: none;
  border-top: 1px solid #ccc; /* 灰色的线 */
}
</style>
