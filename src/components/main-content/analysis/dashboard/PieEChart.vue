<template>
  <div class="sup-echart">
    <div class="title">
      <span class="text">分类商品数量</span>
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
  pieOption: any[];
}
const props = defineProps<IProps>();
const option = computed<EChartsOption>(() => {
  return {
    // 手指放上去的时候显示的文本
    tooltip: {
      trigger: 'item',
    },
    // 图例:
    legend: {
      orient: 'horizontal',
      left: 'left',
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        bottom: '-10%',
        data: props.pieOption,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
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
