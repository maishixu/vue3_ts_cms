<template>
  <div class="sup-echart">
    <div class="title">
      <span class="text">分类商品的收藏</span>
    </div>
    <hr />
    <BaseEChart :option="option"></BaseEChart>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import BaseEChart from './BaseEChart.vue';
import { computed } from 'vue';
interface IProps {
  labels: string[];
  values: string[];
}
const props = defineProps<IProps>();
const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      data: props.labels,
      axisLabel: {
        inside: true,
        color: '#fff',
        interval: 0, // 显示所有 X 轴标签
      },
      z: 10,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    yAxis: {
      axisLabel: {
        color: '#999',
      },
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        // 系列图形的样式(每个item的样式)
        // 可以被放到每一项中,针对每一项设置
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' },
          ]),
        },
        // 图形的高亮: 鼠标悬浮时候的状态: hover
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' },
            ]),
          },
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
