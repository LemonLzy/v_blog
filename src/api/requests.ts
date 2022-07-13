import axios from 'axios';
import { KEY_USER_ID, UserInfo } from '@/store/module/useUserStore';
import { Code_Invalid_Token, Code_Success } from '@/app/codes';
import router from '@/router';
import { errorMessage } from 'style-resources-loader/lib/utils';

const requests = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
  config = config || {};
  try {
    const user = JSON.parse(localStorage.getItem(KEY_USER_ID) || '') as UserInfo;
    if (user.r_token) {
      config.headers!['Authorization'] = `Bearer ${user.r_token}`;
    }
  } catch (e) {
    console.log(e);
  }
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (resp) => {
    const { code, msg } = resp.data || {};
    if (code != Code_Success) {
      const err = new Error(msg);
      return Promise.reject(err);
    }
    if (code === Code_Invalid_Token) {
      router.push({ name: 'login' }).then();
      const err = new Error(msg);
      return Promise.reject(err);
    }

    return Promise.resolve(resp);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requests;
