<template>
  <div class="tinymce-box">
    <editor v-model="textContent" :init="init" :disabled="disabled" @onClick="onClick"></editor>
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'; // tinymce默认hidden，不引入不显示
  import Editor from '@tinymce/tinymce-vue';
  import 'tinymce/themes/silver/theme'; // 主题文件
  import 'tinymce/icons/default';
  import 'tinymce/models/dom';
  // tinymce插件可按自己的需要进行导入
  // 更多插件参考：https://www.tiny.cloud/docs/plugins/
  import 'tinymce/plugins/image'; // 插入上传图片插件
  import 'tinymce/plugins/importcss'; // 图片工具
  import 'tinymce/plugins/table'; // 插入表格插件
  import 'tinymce/plugins/lists'; // 列表插件
  import 'tinymce/plugins/charmap'; // 特殊字符
  import 'tinymce/plugins/codesample'; // 插入代码
  import 'tinymce/plugins/code'; // 查看源码
  import 'tinymce/plugins/fullscreen'; // 全屏
  import 'tinymce/plugins/link'; //
  import 'tinymce/plugins/preview'; // 预览
  import 'tinymce/plugins/template'; // 插入模板
  import 'tinymce/plugins/save'; // 保存
  import 'tinymce/plugins/searchreplace'; // 查询替换
  import 'tinymce/plugins/pagebreak'; // 分页
  import 'tinymce/plugins/insertdatetime'; // 时间插入
  import 'tinymce/plugins/autoresize'; // 自动大小
  import 'tinymce/plugins/advlist';

  export default {
    name: 'TinyMce',
    components: { Editor },
    props: {
      value: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      plugins: {
        type: [String, Array],
        default: 'code lists advlist image link preview autoresize',
      },
      toolbar: {
        type: [String, Array],
        default:
          'undo redo | styleselect | bold | italic | strikethrough | bullist | numlist | link | blockquote | image | preview | print',
      },
    },
    data() {
      return {
        init: {
          language_url: '/tinymce/langs/zh-Hans.js',
          language: 'zh-Hans',
          // 皮肤：这里引入的是public下的资源文件
          skin_url: '/tinymce/skins/ui/oxide',
          // skin_url: 'tinymce/skins/ui/oxide-dark',//黑色系
          plugins: this.plugins,
          toolbar: this.toolbar,
          branding: false,
          menubar: true,
          statusbar: false,
          autoresize_bottom_margin: 50,
          autoresize_on_init: false,
          min_height: 600,
          max_height: 600,
          init_instance_callback: (editor) => {
            console.log('初始化完成：', editor);
          },
          // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
          // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
          images_upload_handler: (blobInfo, success) => {
            const img = 'data:image/jpeg;base64,' + blobInfo.base64();
            console.log('图片上传处理：', img);
            success(img);
          },
        },
        textContent: this.value,
      };
    },
    watch: {
      value(newValue) {
        this.textContent = newValue;
      },
      textContent(newValue) {
        // 自定义事件给父组件传递数据
        this.$emit('input', newValue);
      },
    },
    // 组件挂载完毕
    mounted() {
      // 初始化 tinymce
      tinymce.init({});
    },
    methods: {
      // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
      // 需要什么事件可以自己增加
      onClick(e) {
        // 自定义事件给父组件传递数据
        this.$emit('onClick', e, tinymce);
      },
      // 可以添加一些自己的自定义事件，如清空内容
      clear() {
        this.textContent = '';
      },
    },
  };
</script>

<style scoped>
  .tinymce-box {
    margin: 20px;
  }
</style>
