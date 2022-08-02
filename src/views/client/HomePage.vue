<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row v-for="article in article_list" :span="8">
          <el-col>
            <el-card :body-style="{ padding: '0px' }">
              <img src="article.cover" class="image" alt="文章图片" />
              <div class="title">
                <h1>
                  <strong>{{ article.title }}</strong>
                </h1>

<!--                <div class="bottom">-->
<!--                  <time class="time">{{ currentDate }}</time>-->

<!--                  <el-button text class="button">Operating</el-button>-->
<!--                </div>-->
              </div>
              <div class="summary">
                <span>{{ article.summary }}</span>
              </div>

              <div class="create_time">
                <span>{{ article.created_at }}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  // export default {
  //   name: "HomePage"
  // };

  const article_list = ref([
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
  ]);

  // 发起接口请求

</script>

<style scoped>
  .title {
    padding: 14px;
  }
  .summary {
    padding: 14px;
  }
</style>

<!--{-->
<!--"code": 0,-->
<!--"msg": "成功",-->
<!--"data": {-->
<!--"articles": [            {-->
<!--"tag_id": 2,-->
<!--"article_id": 2397673181155328,-->
<!--"title": "测试article1",-->
<!--"summary": "文章摘要1",-->
<!--"cover": "https://lemonlzy.cn/img/lemonlzy.jpg",-->
<!--"created_at": 1653490049-->
<!--},-->
<!--{-->
<!--"tag_id": 1,-->
<!--"article_id": 1952630976811008,-->
<!--"title": "测试更新",-->
<!--"summary": "文章摘要",-->
<!--"cover": "https://lemonlzy.cn/img/lemonlzy.jpg",-->
<!--"created_at": 1653383943-->
<!--}-->
<!--],-->
<!--"tags": [            "tag1",-->
<!--"tag2"-->
<!--]-->
<!--}-->
<!--}-->

