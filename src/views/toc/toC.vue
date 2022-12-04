<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    text-color="#eeeeee"
    background-color="transparent"
    active-text-color="#eeeeee"
  >
    <el-menu-item index="0">Lemon</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">Tags</el-menu-item>
    <el-menu-item index="2">About Me</el-menu-item>
  </el-menu>
  <div class="div_main_cover">
    <el-image class="img_main_cover" :src="'https://lemonlzy.cn/img/index.jpg'" :fit="'cover'" />
  </div>
  <el-row id="scrollElRow">
    <el-col :span="4"></el-col>
    <el-col :span="12">
      <CardArticleInfo class="cardArticleInfo" :article-list="list" />
      <common-page
        class="page"
        :total="total"
        :size="formParam.size"
        :page="formParam.page"
        @current-change="handlePageChange"
      />
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
  <el-backtop :right="100" :bottom="100" />
</template>

<script lang="ts" setup>
  import { reactive, ref, toRef } from 'vue';
  import CardUserInfo from '@/components/toc/CardUserInfo.vue';
  import CardNotice from '@/components/toc/CardNotice.vue';
  import CardArticleInfo from '@/components/toc/CardArticleInfo.vue';
  import CommonPage from '@/components/common/CommonPage.vue';
  import useArticle from '@/hooks/api/useArticle';

  const activeIndex = ref('0');
  const formParam = reactive({ page: 1, size: 10 });
  const link = reactive({
    github: 'https://github.com/lemonlzy',
    email: 'mailto:lzy291980138@163.com',
  });

  const { articleList } = useArticle();
  const { list, total } = articleList(toRef(formParam, 'page'), toRef(formParam, 'size'), true);

  const handlePageChange = (p: number) => {
    let activeCard = document.getElementById('scrollElRow')!;
    let scrollY = activeCard.offsetTop;

    window.scrollTo({
      top: scrollY,
      left: 0,
      // behavior: 'smooth',
    });
    formParam.page = p;
  };
</script>

<style lang="scss" scoped>
  .body {
    @apply overflow-y-hidden;
  }

  .div_main_cover {
    @apply w-full;
    @apply h-full;

    .img_main_cover {
      @apply w-full;
      @apply h-full;
    }
  }

  .page {
    margin: 20px;
    justify-content: center;
  }

  // 设置el-menu悬浮于背景图之上
  .el-menu-demo {
    @apply w-full;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    border: transparent;
    z-index: 9999;
  }

  // 设置el-menu的选中背景为透明背景
  .el-menu--horizontal > .el-menu-item.is-active {
    background: transparent;
  }

  // 设置el-menu的下边框为空
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    text-decoration: none;
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
