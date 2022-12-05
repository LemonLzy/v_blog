import useHTTP from '@/api/useHTTP';
import { BasicResp } from '@/api/types';

export interface ArticleListData {
  list: ArticleListInfo[];
  total: number;
}

export interface ArticleListInfo {
  article_id: string;
  status: boolean;
  title: string;
  summary: string;
  cover: string;
  content: string;
  created_at: string;
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
  tag: number;
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

export interface ArticleDetails {
  title: string;
  content: string;
  cover: string;
  created_at: string;
  updated_at: string;
}

export const reqArticleDetails = (articleID: string) => {
  //axios http
  return useHTTP<BasicResp<ArticleDetails>>({
    url: `/api/article/${articleID}`,
    method: 'get',
  });
};
