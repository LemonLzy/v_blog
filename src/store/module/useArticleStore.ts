import { defineStore } from 'pinia';

export interface ArticleInfo {
  tag_id: string;
  status: string;
  user_id: string;
  title: string;
  content: string;
  rich_text: string;
  cover: string;
}

export const KEY_ARTICLE_ID = 'article';

const useUserStore = defineStore({
  id: KEY_ARTICLE_ID,
  state: (): Partial<ArticleInfo> => ({
    tagID: '-1',
    status: '0',
    user_id: '0',
    title: '',
    content: '',
    rich_text: '',
    cover: '',
  }),

  actions: {
    submit(article: Partial<ArticleInfo>) {
      this.$state = {
        ...this.$state,
        ...article,
      };
    },
  },
});

//create
const instance = useUserStore();

instance.$subscribe((mutation, state) => {
  localStorage.setItem(instance.$id, JSON.stringify(state));
});

//init
const val = localStorage.getItem(instance.$id);
if (val) {
  instance.submit(JSON.parse(val));
}

export default useUserStore;
