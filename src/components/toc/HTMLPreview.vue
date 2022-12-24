<template>
  <el-card>
    <v-md-preview-html
      :html="html"
      class="htmlPreview"
      preview-class="vuepress-markdown-body"
      @copy-code-success="handleCopyCodeSuccess"
    ></v-md-preview-html>
  </el-card>
</template>

<script lang="ts" setup>
  import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
  import '@kangc/v-md-editor/lib/style/preview-html.css';
  import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
  import createCopyCodePreview from '@kangc/v-md-editor/lib/plugins/copy-code/preview';
  import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
  import { ElMessage } from 'element-plus/es';

  VMdPreviewHtml.use(createCopyCodePreview());

  defineProps<{
    html?: string;
  }>();

  const handleCopyCodeSuccess = () => {
    ElMessage.success('复制成功');
  };
</script>

<style lang="scss" scoped>
  .htmlPreview {
    max-width: 865px;
  }
</style>
