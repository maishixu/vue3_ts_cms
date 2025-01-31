<template>
  <div class="dashboard">
    <div class="head">
      <!-- 1.顶部卡片 -->
      <el-row :gutter="10">
        <template v-for="item in amountList">
          <el-col :span="6"><CountCard v-bind="item"></CountCard></el-col>
        </template>
      </el-row>
    </div>
    <div class="center">
      <!-- 2.中间图表 -->
      <el-row :gutter="10">
        <el-col :span="14"> <MapEChart :mapOption="showGoodsAddressSale"></MapEChart></el-col>
        <el-col :span="10"> <PieEChart :pieOption="showGoodsCategoryCount"></PieEChart> </el-col>
      </el-row>
    </div>
    <div class="footer">
      <!-- 2.底部图表 -->
      <el-row :gutter="10">
        <el-col :span="12"> <BarEChart v-bind="showGoodsCategoryFavor"></BarEChart> </el-col>
        <el-col :span="12"> <LineEChart v-bind="showGoodsCategorySale"></LineEChart></el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountCard from '@/components/main-content/analysis/dashboard/CountCard.vue';
import PieEChart from '@/components/main-content/analysis/dashboard/PieEChart.vue';
import BarEChart from '@/components/main-content/analysis/dashboard/BarEChart.vue';
import LineEChart from '@/components/main-content/analysis/dashboard/LineEChart.vue';
import MapEChart from '@/components/main-content/analysis/dashboard/MapEChart.vue';
import useAnalysisStore from '@/store/main/analysis';
import { storeToRefs } from 'pinia';

import { computed } from 'vue';

// 1.发起数据的请求
const analysisStore = useAnalysisStore();
analysisStore.fetchAnalysisDataAction();

// 2.从store获取数据
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor, goodsAddressSale } =
  storeToRefs(analysisStore);

// 3.获取数据
// * 商品分类数量
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount,
  }));
});
// * 商品销售数量
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name);
  const values = goodsCategorySale.value.map((item) => item.goodsCount);
  return { labels, values };
});
// * 商品收藏数量
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name);
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor);
  return { labels, values };
});
console.log(showGoodsCategoryFavor);
// * 不同城市的销量
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => ({
    name: item.address,
    value: item.count,
  }));
});
</script>

<style lang="less" scoped>
.center {
  margin-top: 10px;
}
.footer {
  margin-top: 10px;
}
</style>
