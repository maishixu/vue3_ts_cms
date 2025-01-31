<template>
  <div class="story">
    <PageContent :content-config="contentConfig"> </PageContent>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/PageContent.vue';
import contentConfig from '@/components/main-content/story/content.config';
</script>

<style lang="less" scoped></style>
