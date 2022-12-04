<template>
  <el-card
    v-for="article in articleInfo.articleList"
    :key="article.article_id"
    class="article-card"
  >
    <el-row>
      <el-col :span="10" style="cursor: pointer" @click="toDetail(article.article_id)">
        <el-image :src="article.cover" :fit="fit" />
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

  const fit = 'scale-down';

  const toDetail = (articleID: string) => {
    router.push({ name: 'details', params: { id: articleID } });
  };
</script>

<style lang="scss" scoped>
  .content {
    margin: 30px;
  }

  .title {
    color: #1f2d3d;
    font-size: 1.72em;
    line-height: 1.4;
    transition: all 0.2s ease-in-out;
  }

  .title:hover {
    color: #49b1f5;
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
    font-size: 14px;
    color: #4c4948;
    line-height: 2;
    display: -webkit-box; /*必须结合的属性,将对象作为弹性伸缩盒子模型显示*/
    -webkit-line-clamp: 2; /*设置多少行*/
    -webkit-box-orient: vertical; /*必须结合的属性,设置或检索伸缩盒对象的子元素的排列方式*/
    overflow: hidden; /*文本会被修剪，并且剩余的部分不可见*/
    text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
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
</style>
