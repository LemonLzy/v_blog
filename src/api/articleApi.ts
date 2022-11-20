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

export interface ArticleCreateData {
  tag_id: number;
  status: number;
  user_id: number;
  title: string;
  content: string;
  rich_text: string;
  cover: string;
}

export const reqArticleCreate = (params: ArticleCreateData) => {
  //axios http
  return useHTTP<BasicResp<null>>({
    url: `/api/article`,
    method: 'post',
    data: { ...params },
  });
};
