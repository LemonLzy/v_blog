<template>
  <v-md-preview-html
    :html="html"
    class="htmlContent"
    preview-class="vuepress-markdown-body"
  ></v-md-preview-html>
</template>

<script lang="ts" setup>
  import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
  import '@kangc/v-md-editor/lib/style/preview-html.css';
  import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

  defineProps<{
    html?: string;
  }>();
</script>

<style lang="scss" scoped>
  .htmlContent {
    max-width: 865px;
  }
</style>
