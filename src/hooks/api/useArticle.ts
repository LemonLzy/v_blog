import { ref, Ref, watch } from 'vue';
import { ArticleListInfo, reqArticleList } from '@/api/articleApi';
import { Code_Success } from '@/app/codes';

// function + composition api = hooks，hooks就是类似于函数，提供对逻辑的复用，利用了vue3的响应式模块
const useArticle = () => {
  const articleList = (page: Ref<number>, size: Ref<number>, immediate = false) => {
    const list = ref<ArticleListInfo[]>([]);
    const total = ref(0);
    const loading = ref(false);
    const refresh = async () => {
      loading.value = true;
      let { data, code } = await reqArticleList(page.value, size.value);
      loading.value = false;
      if (code === Code_Success) {
        for (let i = 0; i < data.list.length; i++) {
          data.list[i].created_at = conversionTimestamp(data.list[i].created_at.valueOf());
        }
        list.value = data.list || [];
        total.value = data.total || 0;
      }
    };

    watch(
      [page, size],
      async () => {
        await refresh();
      },
      { immediate }
    );

    return {
      loading,
      list,
      total,
      refresh,
    };
  };
  return {
    articleList,
  };
};

function conversionTimestamp(timestamp: string) {
  let date = new Date(Number(timestamp) * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return Y + M + D;
}

export default useArticle;
