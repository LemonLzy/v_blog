<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-menu-item index="2">About Me</el-menu-item>
  </el-menu>
  <el-row>
    <el-col :span="3"></el-col>
    <el-col :span="15">
      <CardArticleInfo :article-list="articleList" />
      <common-page class="page" :total="100" />
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="4">
      <CardUserInfo
        avatar="https://lemonlzy.cn/img/lemonlzy.jpg"
        nickname="xxx"
        signature="xxx"
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
  import { ref } from 'vue';
  import CardUserInfo from '@/components/toc/CardUserInfo.vue';
  import CardNotice from '@/components/toc/CardNotice.vue';
  import CardArticleInfo from '@/components/toc/CardArticleInfo.vue';
  import CommonPage from '@/components/common/CommonPage.vue';

  const activeIndex = ref('0');

  const articleList = ref([
    {
      tag_id: 2,
      article_id: 2397673181155328,
      title: '测试article1',
      summary: '文章摘要1',
      cover: 'https://lemonlzy.cn/img/lemonlzy.jpg',
      created_at: 1653490049,
    },
    {
      tag_id: 2,
      article_id: 2397673181155328,
      title: '测试article1',
      summary: '文章摘要1',
      cover: 'https://lemonlzy.cn/img/lemonlzy.jpg',
      created_at: 1653490049,
    },
    {
      tag_id: 3,
      article_id: 2397673181155328,
      title: '测试article1',
      summary: '文章摘要1',
      cover: 'https://lemonlzy.cn/img/lemonlzy.jpg',
      created_at: 1653490049,
    },
    {
      tag_id: 3,
      article_id: 2397673181155328,
      title: '测试article1',
      summary: '文章摘要1',
      cover: 'https://lemonlzy.cn/img/lemonlzy.jpg',
      created_at: 1653490049,
    },
  ]);
</script>

<style lang="scss" scoped>
  .body {
    @apply overflow-y-hidden;
  }

  .page {
    margin: 20px;
    justify-content: center;
  }

  .el-image {
    height: 180px;
  }

  .el-card {
    margin-top: 20px;
    @apply rounded-xl;
  }

  .flex-grow {
    flex-grow: 1;
  }
</style>
