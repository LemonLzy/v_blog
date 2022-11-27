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

  const html = '<h1 data-v-md-heading="测试" data-v-md-line="1">测试</h1>\n' +
    '<h3 data-v-md-heading="小张" data-v-md-line="2">小张</h3>\n' +
    '<hr data-v-md-line="3">\n' +
    '<blockquote data-v-md-line="4">\n' +
    '<p data-v-md-line="4">小张</p>\n' +
    '</blockquote>\n' +
    '<div data-v-md-line="6"><div class="v-md-pre-wrapper v-md-pre-wrapper-python extra-class"><pre class="v-md-hljs-python"><code><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;小张是小猪&quot;</span>)\n' +
    '</code></pre>\n' +
    '</div></div><div class="v-md-plugin-tip tip"><p class="v-md-plugin-tip-title">提示</p>\n' +
    '<div data-v-md-line="11"><div class="v-md-pre-wrapper v-md-pre-wrapper- extra-class"><pre><code>小张\n' +
    '</code></pre>\n' +
    '</div></div></div>\n' +
    '<ul class="v-md-editor__todo-list" data-v-md-line="14">\n' +
    '<li class="v-md-editor__todo-list-item"><span class="v-md-editor__todo-list-checkbox v-md-editor__todo-list-checkbox--checked" style="border-color: #3eaf7c;background-color: #3eaf7c"></span> 小张</li>\n' +
    '<li class="v-md-editor__todo-list-item"><span class="v-md-editor__todo-list-checkbox v-md-editor__todo-list-checkbox--checked" style="border-color: #3eaf7c;background-color: #3eaf7c"></span> 小猪</li>\n' +
    '</ul>\n';
</script>

<style lang="scss" scoped>
  .htmlContent {
    max-width: 865px;
    //display: flex;
    //justify-content: center;
    //align-items: center;
  }
</style>
