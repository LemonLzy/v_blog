<template>
  <menu-header></menu-header>
  <div class="div_main_cover">
    <el-image class="img_main_cover" :src="'https://lemonlzy.cn/img/index.jpg'" :fit="'cover'" />
    <div class="sig">
      <div class="typer_content">
        <p class="typer_static">Lemon</p>
        <!-- 动态变化的内容-->
        <p class="typer_dynamic">
          <span class="cut">
            <span v-for="(letter, index) in words" :key="index" class="word">{{ letter }}</span>
          </span>
          <!-- 模拟光标-->
          <span class="typer_cursor animation"></span>
        </p>
      </div>
    </div>
    <div class="arrowDiv" @click="rollToArticle">
      <el-icon class="arrowDown" color="#ffffff" :size="30" @click="rollToArticle">
        <ArrowDownBold />
      </el-icon>
    </div>
  </div>
  <el-row id="scrollElRow">
    <el-col :span="3"></el-col>
    <el-col :span="13">
      <card-article-info :article-list="list" />
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
        :article-total="total"
        :link="link"
      />
      <card-notice />
      <card-related-article />
      <card-tag />
      <card-archive />
      <card-web-info />
    </el-col>
  </el-row>
  <common-footer />
  <el-backtop :right="100" :bottom="100" />
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref, toRef, watch } from 'vue';
  import CardUserInfo from '@/components/toc/CardUserInfo.vue';
  import CardNotice from '@/components/toc/CardNotice.vue';
  import CardArticleInfo from '@/components/toc/CardArticleInfo.vue';
  import CommonPage from '@/components/common/CommonPage.vue';
  import useArticle from '@/hooks/api/useArticle';
  import MenuHeader from '@/components/common/MenuHeader.vue';
  import CardRelatedArticle from '@/components/common/CardRelatedArticle.vue';
  import { ArrowDownBold } from '@element-plus/icons';
  import CommonFooter from '@/components/common/CommonFooter.vue';
  import CardWebInfo from '@/components/common/CardWebInfo.vue';
  import CardArchive from '@/components/toc/CardArchive.vue';
  import CardTag from '@/components/toc/CardTag.vue';

  const formParam = reactive({ page: 1, size: 10 });
  const link = reactive({
    github: 'https://github.com/lemonlzy',
    email: 'mailto:lzy291980138@163.com',
  });

  const { articleList } = useArticle();
  const { list, total } = articleList(toRef(formParam, 'page'), toRef(formParam, 'size'), true);
  const rollToArticle = () => {
    const element = document.getElementById('scrollElRow')!;

    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  };
  const handlePageChange = (p: number) => {
    let activeCard = document.getElementById('scrollElRow')!;
    let scrollY = activeCard.offsetTop;

    window.scrollTo({
      top: scrollY,
      left: 0,
    });
    formParam.page = p;
  };

  let str = 'Fake it until you become it.';
  let letters = ref(['']);
  let words = ref(['']);
  let order = ref(1);

  watch(order, () => {
    if (order.value % 2 == 1) {
      str = 'Fake it until you become it.';
    } else {
      str = '万事顺遂.';
    }
  });

  onMounted(() => {
    begin();
  });

  //开始输入的效果动画
  const begin = () => {
    letters.value = str.split('');
    for (let i = 0; i < letters.value.length; i++) {
      setTimeout(write(i), i * 100);
    }
  };

  //开始删除的效果动画
  const back = () => {
    let l = letters.value.length;
    for (let i = 0; i < l; i++) {
      setTimeout(wipe(), i * 50);
    }
  };

  //输入字母
  const write = (i: number) => {
    return () => {
      let l = letters.value.length;
      words.value.push(letters.value[i]);
      /*如果输入完毕，在2s后开始删除*/
      if (i == l - 1) {
        setTimeout(function() {
          back();
        }, 2000);
      }
    };
  };

  const wipe = () => {
    return () => {
      words.value.pop();
      /*如果删除完毕，在300ms后开始输入*/
      if (words.value.length == 1) {
        order.value++;
        setTimeout(function() {
          begin();
        }, 1000);
      }
    };
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
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
    }

    .sig {
      width: 100%;
      height: 100px;
      position: absolute;
      top: 40vh;

      .sig .typer_content {
        font-weight: bold;
        font-size: 50px;
        display: flex;
        flex-direction: row;
        letter-spacing: 2px;
      }

      .typer_static {
        font-size: 2.55em;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
      }

      .typer_dynamic {
        position: relative;
        line-height: 1.5;
        font-size: 1.52em;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
        text-align: center;
      }

      .cut {
        color: #ffffff;
      }

      .typer_cursor {
        position: absolute;
        vertical-align: middle;
        height: 70%;
        width: 3px;
        top: 15%;
        background-color: #ffffff;
        animation: blink 1.3s infinite steps(1, start);
      }

      @keyframes blink {
        0% {
          background-color: white;
        }
        50% {
          background-color: rgb(0, 0, 0, 0);
        }
        100% {
          background-color: white;
        }
      }
    }

    .arrowDiv {
      width: 100%;
      height: 20%;
      top: 95vh;
      position: absolute;
      text-align: center;
      cursor: pointer;
      animation: beat 1.5s linear infinite;
    }

    @keyframes beat {
      25% {
        transform: translateY(-10px);
      }
      50%,
      100% {
        color: #00c4b6;
        transform: translateY(0);
      }
      75% {
        color: gray;
        transform: translateY(10px);
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
