<template>
  <el-card
    v-for="article in articleInfo.articleList"
    :key="article.article_id"
    class="article-card"
  >
    <el-row>
      <el-col :span="10" style="cursor: pointer" @click="toDetail(article.article_id)">
        <el-image :src="article.cover" :fit="fit" lazy />
      </el-col>
      <el-col :span="14">
        <div class="content">
          <el-row>
            <el-col>
              <div class="title" style="cursor: pointer" @click="toDetail(article.article_id)">
                {{ article.title }}
              </div>
            </el-col>
            <el-col class="created">
              <el-space>
                <el-icon class="createdIcon" :size="13">
                  <Calendar />
                </el-icon>
                <div class="createdText">发表于 {{ article.created_at }}</div>
              </el-space>
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
  import { useRouter } from 'vue-router';
  import { Calendar } from '@element-plus/icons';

  const router = useRouter();
  const articleInfo = defineProps<{
    articleList: {
      article_id: string;
      title: string;
      summary: string;
      cover: string;
      created_at: number;
    }[];
  }>();

  const fit = 'cover';

  const toDetail = (articleID: string) => {
    router.push({ name: 'details', params: { id: articleID } });
  };
</script>

<style lang="scss" scoped>
  .content {
    margin-left: 30px;
  }

  .title {
    @apply text-2xl;
  }

  .created {
    margin-top: 10px;

    .createdIcon {
      color: #858585;
    }

    .createdText {
      @apply text-xs;
      color: #858585;
    }
  }

  .summary {
    @apply text-sm;
  }

  .el-image {
    height: 180px;
    transition: all 0.375s ease-in-out;
  }

  .el-image:hover {
    transform: scale(1.1, 1.1);
  }

  .article-card {
    height: 220px;
    margin-top: 20px;
    @apply rounded-xl;
  }

  ::selection {
    background: #00c4b6;
    color: #f7f7f7;
  }
</style>
