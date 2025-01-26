<template>
  <div class="base-echart">
    <div ref="echartRef" class="echart"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import ChinaJSON from './data/china.json';

echarts.registerMap('china', ChinaJSON as any);

interface IProps {
  option: EChartsOption;
}
const props = defineProps<IProps>();
const echartRef = ref<InstanceType<typeof HTMLElement>>();
onMounted(() => {
  // 1.准备echart实例
  const echartInstance = echarts.init(echartRef.value!, 'light', { renderer: 'canvas' });
  // 2.绘制图表（数据更新时重新执行）
  watchEffect(() => echartInstance.setOption(props.option));
  // 3.监听window缩放
  window.addEventListener('resize', () => {
    echartInstance.resize();
  });
});
</script>

<style lang="less" scoped>
.echart {
  height: 300px;
}
</style>
