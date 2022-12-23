<template>
  <menu-header></menu-header>
  <div class="div_main_cover">
    <el-image class="img_main_cover" :src="'https://lemonlzy.cn/img/index.jpg'" :fit="'cover'" />
    <div class="sig">
      <el-row class="signature">
        <el-space>
          <span class="sig_span">{{ showText }}</span>
        </el-space>
      </el-row>
    </div>
  </div>
  <el-row id="scrollElRow">
    <el-col :span="4"></el-col>
    <el-col :span="12">
      <CardArticleInfo :article-list="list" />
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
      <CardNotice />
      <CardRelatedArticle />
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
  import { onMounted, reactive, ref, toRef } from 'vue';
  import CardUserInfo from '@/components/toc/CardUserInfo.vue';
  import CardNotice from '@/components/toc/CardNotice.vue';
  import CardArticleInfo from '@/components/toc/CardArticleInfo.vue';
  import CommonPage from '@/components/common/CommonPage.vue';
  import useArticle from '@/hooks/api/useArticle';
  import MenuHeader from '@/components/common/MenuHeader.vue';
  import CardRelatedArticle from '@/components/common/CardRelatedArticle.vue';

  const formParam = reactive({ page: 1, size: 10 });
  const link = reactive({
    github: 'https://github.com/lemonlzy',
    email: 'mailto:lzy291980138@163.com',
  });
  let showText = ref('');

  const { articleList } = useArticle();
  const { list, total } = articleList(toRef(formParam, 'page'), toRef(formParam, 'size'), true);

  const handlePageChange = (p: number) => {
    let activeCard = document.getElementById('scrollElRow')!;
    let scrollY = activeCard.offsetTop;

    window.scrollTo({
      top: scrollY,
      left: 0,
    });
    formParam.page = p;
  };

  onMounted(() => {
    appear('Fake it util you become it.');
  });

  const appear = (content: string) => {
    let count = 1;

    function changeContent() {
      showText.value = content.substring(0, count); //截取字符串
      count++;

      if (count != content.length + 1) {
        setTimeout(changeContent, 100);
      }
    }

    changeContent();
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

    .img_main_cover:before {
      position: fixed;
      backdrop-filter: blur(1px);
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
    }

    .sig {
      width: 100%;
      height: 100px;
      position: absolute;
      top: 50vh;

      .signature {
        color: #ffffff;
        font-size: 1.72em;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
        @apply flex items-center justify-center;

        &__text {
          opacity: 0;
          animation: fade-in #{1500ms} ease-out both 1 /*infinite*/
        ;
          @for $idx from 1 through 50 {
            &:nth-child(#{$idx}) {
              animation-delay: #{($idx - 1) * 1500ms};
            }
          }
        }
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
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
