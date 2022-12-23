<template>
  <menu-header></menu-header>
  <cover-preview
    :cover="articleDetails.cover"
    :title="articleDetails.title"
    :show-date="true"
    :created="articleDetails.created"
    :updated="articleDetails.updated"
  />
  <el-row id="scrollElRow">
    <el-col :span="4"></el-col>
    <el-col :span="12">
      <ArticlePreview :html="articleDetails.htmlContent" />
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="4">
      <CardUserInfo
        avatar="https://lemonlzy.cn/img/lemonlzy.jpg"
        nickname="Lemonlzy"
        signature="Show me the code."
        category="50"
        tags="13"
        article-total="10"
        :link="link"
      />
      <CardNotice />
      <CardRelatedArticle />
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import CardUserInfo from '@/components/toc/CardUserInfo.vue';
  import CardNotice from '@/components/toc/CardNotice.vue';
  import ArticlePreview from '@/components/toc/HTMLPreview.vue';
  import { onMounted, reactive } from 'vue';
  import { useRoute } from 'vue-router';
  import { reqArticleDetails } from '@/api/articleApi';
  import { Code_Success } from '@/app/codes';
  import { ElMessage } from 'element-plus/es';
  import { ref } from 'vue';
  import MenuHeader from '@/components/common/MenuHeader.vue';
  import CoverPreview from '@/components/common/CoverPreview.vue';
  import CardRelatedArticle from '@/components/common/CardRelatedArticle.vue';

  const route = useRoute();
  const articleDetails = reactive({
    htmlContent: ref(''),
    cover: ref(''),
    title: ref(''),
    created: ref(''),
    updated: ref(''),
  });
  const link = reactive({
    github: 'https://github.com/lemonlzy',
    email: 'mailto:lzy291980138@163.com',
  });

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
      articleDetails.htmlContent = data.content;
      articleDetails.cover = data.cover;
      articleDetails.title = data.title;
      articleDetails.created = data.created_at;
      articleDetails.updated = data.updated_at;
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
