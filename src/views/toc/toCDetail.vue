<template>
  <el-row id="scrollElRow">
    <el-col :span="4"></el-col>
    <el-col :span="12">
      <ArticlePreview :html="htmlContent"></ArticlePreview>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="4">
      <CardUserInfo
        avatar="https://lemonlzy.cn/img/lemonlzy.jpg"
        nickname="Monkey·D·Luffy"
        signature="Show me the code."
        category="xxx"
        tags="xxx"
        article-total="10"
        link="xxx"
      />
      <CardNotice notice="欢迎访问xxx" />
      <el-card class="user-card">
        <div class="pub_time">头像</div>
        <div class="pub_time">昵称</div>
        <div class="pub_time">signature</div>
        <div class="pub_time">文章total</div>
      </el-card>
      <el-card class="user-card">
        <div class="pub_time">头像</div>
        <div class="pub_time">昵称</div>
        <div class="pub_time">分类</div>
        <div class="pub_time">Follow Me</div>
        <div class="pub_time">Link</div>
      </el-card>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import CardUserInfo from '@/components/toc/CardUserInfo.vue';
  import CardNotice from '@/components/toc/CardNotice.vue';
  import ArticlePreview from '@/components/toc/ArticlePreview.vue';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { reqArticleDetails } from '@/api/articleApi';
  import { Code_Success } from '@/app/codes';
  import { ElMessage } from 'element-plus/es';
  import { ref } from 'vue';

  const route = useRoute();
  let htmlContent = ref('');

  onMounted(() => {
    loadBlog();
  });

  const loadBlog = async () => {
    const articleID = route.params.id as string;
    try {
      let { code, data, msg } = await reqArticleDetails(articleID);
      if (code !== Code_Success) {
        ElMessage.error(msg);
        return;
      }
      htmlContent.value = data.content;
      ElMessage.success('获取文章详情' + msg);
      return;
    } catch (e: any) {
      ElMessage.error(e.message);
    }
  };
</script>

<style lang="scss" scoped>
  .body {
    @apply overflow-y-hidden;
  }

  .page {
    margin: 20px;
    justify-content: center;
  }

  .el-card {
    margin-top: 20px;
    @apply rounded-xl;
  }
</style>
