<template>
  <div class="menu">
    <PageContent :contentConfig="contentConfig" ref="contentRef" style="padding-top: 14px">
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/PageContent.vue';

import contentConfig from '@/components/main-content/system/menu/config/content.config';
</script>

<style lang="less" scoped></style>
