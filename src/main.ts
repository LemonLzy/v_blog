import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { createPinia } from 'pinia';
import '@/assets/styles/index.css';
import '@purge-icons/generated';
import 'element-plus/dist/index.css';

const pinia = createPinia();

let app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus, { locale: zhCn });
app.mount('#app');
