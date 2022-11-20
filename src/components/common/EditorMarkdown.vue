<template>
  <v-md-editor
    v-model="value"
    :height="markdown.height + 'vh'"
    :include-level="[1, 2, 3]"
    :disabled-menus="[]"
    @upload-image="handleUploadImage"
  ></v-md-editor>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  import VMdEditor from '@kangc/v-md-editor';
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

  const markdown = defineProps<{
    content: string;
    height: string;
  }>();

  const emit = defineEmits(['update:content']);
  const value = computed({
    get() {
      return markdown.content;
    },
    set(value) {
      emit('update:content', value);
    },
  });

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
  // const markdown = defineProps({
  //   modelValue: {
  //     type: String,
  //     default: '',
  //   },
  //   height: {
  //     type: Number,
  //     default: 80,
  //   },
  // });
</script>

<style lang="scss">
  .v-md-editor {
    margin: 20px;
  }
</style>
