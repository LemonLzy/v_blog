<template>
  <v-md-editor
    :height="80 + 'vh'"
    :include-level="[1, 2, 3]"
    :disabled-menus="[]"
    @upload-image="handleUploadImage"
    @copy-code-success="handleCopyCodeSuccess"
  ></v-md-editor>
</template>

<script lang="ts" setup>
  import VMdEditor from '@kangc/v-md-editor';
  import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
  import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
  import '@kangc/v-md-editor/lib/style/base-editor.css';
  import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
  import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
  import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
  import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';
  import Prism from 'prismjs';

  import { reqImageUpload } from '@/api/fileApi';
  import { Code_Success } from '@/app/codes';
  import { ElMessage } from 'element-plus/es';

  VMdEditor.use(vuepressTheme, {
    Prism,
  });
  VMdEditor.use(createTodoListPlugin());
  VMdEditor.use(createCopyCodePlugin());

  defineProps<{
    markdownContent?: string;
  }>();
  defineEmits(['update:markdownContent']);

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

  const handleCopyCodeSuccess = () => {
    ElMessage.success('复制成功');
  };
</script>

<style lang="scss">
  .v-md-editor {
    margin: 20px;
  }
</style>
