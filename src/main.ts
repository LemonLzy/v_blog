import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { createPinia } from 'pinia';
import '@/assets/styles/app.scss';
import '@purge-icons/generated';
import 'element-plus/dist/index.css';
import VueCookies from 'vue3-cookies';

const pinia = createPinia();

let app = createApp(App);
app.use(router);

app.use(VueCookies, {
  expireTimes: '1h',
  path: '/',
  domain: '127.0.0.1',
  secure: false,
  sameSite: '',
});

app.use(pinia);
app.use(ElementPlus, { locale: zhCn });
app.mount('#app');
