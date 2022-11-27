<template>
  <v-md-editor
    :height="80 + 'vh'"
    :include-level="[1, 2, 3]"
    :disabled-menus="[]"
    @upload-image="handleUploadImage"
  ></v-md-editor>
</template>

<script lang="ts" setup>
  import VMdEditor from '@kangc/v-md-editor';
  import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
  import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';
  import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
  import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
  import '@kangc/v-md-editor/lib/style/base-editor.css';
  import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
  import '@kangc/v-md-editor/lib/theme/style/github.css';

  import hljs from 'highlight.js/lib/core';
  import json from 'highlight.js/lib/languages/json';
  import go from 'highlight.js/lib/languages/go';
  import python from 'highlight.js/lib/languages/python';
  import java from 'highlight.js/lib/languages/java';
  import { reqImageUpload } from '@/api/fileApi';
  import { Code_Success } from '@/app/codes';
  import { ElMessage } from 'element-plus/es';

  hljs.registerLanguage('json', json);
  hljs.registerLanguage('go', go);
  hljs.registerLanguage('python', python);
  hljs.registerLanguage('java', java);

  VMdEditor.use(githubTheme, {
    Hljs: hljs,
  });
  VMdEditor.use(createTodoListPlugin());
  VMdEditor.use(createTipPlugin());

  defineProps<{
    markdownContent?: string;
  }>();
  defineEmits(['update:markdownContent']);

  // const html = xss.process(VMdEditor.vMdParser.themeConfig.markdownParser.render(modelValue));
  // console.log('html:', html);

  // const emit = defineEmits();
  // const change = (markdownContent, htmlContent) => {
  //   emit('update:modelValue', markdownContent);
  //   emit('htmlContent', htmlContent);
  // };
  const handleUploadImage = async (event, insertImage, files) => {
    // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
    const req = {
      file: files[0],
    };

    let { code, data, msg } = await reqImageUpload(req);
    // 此处只做示例
    if (code === Code_Success) {
      ElMessage.success('上传图片' + msg);
    }
    insertImage({
      url: data.location,
      desc: files[0].name,
    });
  };
</script>

<style lang="scss">
  .v-md-editor {
    margin: 20px;
  }
</style>
