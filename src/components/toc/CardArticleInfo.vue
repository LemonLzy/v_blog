<template>
  <el-card
    v-for="article in articleInfo.articleList"
    :key="article.article_id"
    class="article-card"
  >
    <el-row>
      <el-col :span="10">
        <el-image :src="article.cover" :fit="fit" lazy />
      </el-col>
      <el-col :span="14">
        <div class="content">
          <el-row>
            <el-col>
              <div class="title">{{ article.title }}</div>
            </el-col>
            <el-col>
              <div class="pub_time">{{ article.created_at }}</div>
            </el-col>
            <el-col>
              <div class="summary">{{ article.summary }}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
  const articleInfo = defineProps<{
    articleList: {
      article_id: number;
      title: string;
      summary: string;
      cover: string;
      created_at: number;
    }[];
  }>();
  const fit = 'scale-down';
</script>

<style lang="scss" scoped>
  .content {
    @apply flex items-center justify-between;

    .pub_time {
      @apply text-xs;
    }
  }

  .el-image {
    height: 180px;
  }

  .text {
    font-size: 14px;
  }

  .article-card {
    height: 220px;
  }

  .el-card {
    margin-top: 20px;
    @apply rounded-xl;
  }

  .flex-grow {
    flex-grow: 1;
  }
</style>
