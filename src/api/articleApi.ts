import useHTTP from '@/api/useHTTP';
import { BasicResp } from '@/api/types';

export interface ArticleListData {
  list: ArticleInfo[];
  total: number;
}

export interface ArticleInfo {
  article_id: number;
  status: boolean;
  title: string;
  summary: string;
  cover: string;
  created_at: number;
  updated_at: number;
}

export const reqArticleList = (page: number, size: number) => {
  //axios http
  return useHTTP<BasicResp<ArticleListData>>({
    url: `/api/articles`,
    method: 'get',
    params: { page, size },
  });
};
