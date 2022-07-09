import axios from 'axios';
import { KEY_USER_ID, UserInfo } from '@/store/module/useUserStore';
import { Code_Invalid_Token, Code_Success } from '@/app/codes';
import router from '@/router';

const requests = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
  config = config || {};
  const user = JSON.parse(localStorage.getItem(KEY_USER_ID) || '') as UserInfo;
  if (user.token) {
    config.headers!['Authorization'] = `Bearer ${user.token}`;
  }
  return config;
});

//响应拦截器
requests.interceptors.response.use((resp) => {
  const { code, msg } = resp.data || {};
  if (code != Code_Success) {
    return Promise.reject(msg);
  }
  if (code === Code_Invalid_Token) {
    router.push({ name: 'login' }).then();
    return Promise.reject(msg);
  }

  return Promise.resolve(resp);
});

export default requests;
