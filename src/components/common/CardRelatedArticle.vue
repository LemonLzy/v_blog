<template>
  <el-card>
    <el-row>
      <el-space>
        <el-icon class="relatedIcon" :size="18">
          <Guide />
        </el-icon>
        <div class="card_title">最新文章</div>
      </el-space>
    </el-row>
    <div v-for="article in list.slice(0, 5)" :key="article.article_id" class="relatedList">
      <el-row>
        <el-col
          class="relatedImg"
          :span="10"
          style="cursor: pointer"
          @click="toDetail(article.article_id)"
        >
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
                  <div class="dateText">{{ article.created_at }}</div>
                </el-space>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
  import { Guide } from '@element-plus/icons';
  import router from '@/router';
  import { reactive, toRef } from 'vue';
  import useArticle from '@/hooks/api/useArticle';

  const fit = 'scale-down';
  const formParam = reactive({ page: 1, size: 5 });
  const { articleList } = useArticle();
  const { list } = articleList(toRef(formParam, 'page'), toRef(formParam, 'size'), true);

  const toDetail = (articleID: string) => {
    router.push({ name: 'details', params: { id: articleID } });
  };
</script>

<style lang="scss" scoped>
  .relatedIcon {
    padding-bottom: 6px;
  }

  .card_title {
    padding-bottom: 6px;
    font-size: 16.8px;
    @apply flex items-center justify-center;
  }

  .content {
    margin: 10px;
  }

  .relatedImg {
    margin-bottom: 10px;
    transition: all 0.375s ease-in-out;
    @apply flex items-center justify-center;
  }

  .relatedImg:hover {
    transform: scale(1.2, 1.2);
  }

  .title {
    line-height: 1.5;
    color: #4c4948;
    font-size: 13.3px;
    display: -webkit-box; /*必须结合的属性,将对象作为弹性伸缩盒子模型显示*/
    -webkit-line-clamp: 1; /*设置多少行*/
    -webkit-box-orient: vertical; /*必须结合的属性,设置或检索伸缩盒对象的子元素的排列方式*/
    overflow: hidden; /*文本会被修剪，并且剩余的部分不可见*/
    text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
  }

  .title:hover {
    color: #49b1f5;
  }

  .created {
    color: #858585;
    font-size: 12px;
  }

  .el-card {
    margin-top: 20px;
  }
</style>
