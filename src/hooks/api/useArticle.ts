import { ref, Ref, watch } from 'vue';
import { ArticleInfo, reqArticleList } from '@/api/articleApi';
import { Code_Success } from '@/app/codes';

// function + composition api = hooks，hooks就是类似于函数，提供对逻辑的复用，利用了vue3的响应式模块
const useArticle = () => {
  const articleList = (page: Ref<number>, size: Ref<number>, immediate = false) => {
    const list = ref<ArticleInfo[]>([]);
    const total = ref(0);
    const loading = ref(false);
    const refresh = async () => {
      loading.value = true;
      let { data, code } = await reqArticleList(page.value, size.value);
      loading.value = false;
      if (code === Code_Success) {
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

export default useArticle;
