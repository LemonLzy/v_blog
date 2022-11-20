import axios from 'axios';
import { Code_Invalid_Token, Code_Success } from '@/app/codes';
import router from '@/router';
import { useCookies } from 'vue3-cookies';

const requests = axios.create({
  // withCredentials: true, // 跨域携带cookies
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
  config = config || {};
  // @ts-ignore
  if (config.headers['Content-Type'] === 'multipart/form-data') {
    let form = new FormData(); // 构造函数 解决传递头部参数格式不正确
    for (let key in config.data) {
      form.append(key, config.data[key]);
    }
    config.data = form;
  }

  let UserInfo = {
    r_token: useCookies().cookies.get('r_token'),
    a_token: useCookies().cookies.get('a_token'),
  };
  try {
    if (UserInfo.r_token) {
      config.headers!['Authorization'] = `Bearer ${UserInfo.a_token}`;
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
    const err = new Error(msg);

    if (code === Code_Invalid_Token) {
      router.push({ name: 'login' }).then();
      return Promise.reject(err);
    }

    if (code != Code_Success) {
      return Promise.reject(err);
    }

    return Promise.resolve(resp);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requests;
