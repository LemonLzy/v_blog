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
import EditorMarkdown from '@/components/common/EditorMarkdown.vue';
import EditorPreview from '@/components/toc/HTMLPreview.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { ElCollapseTransition } from 'element-plus';

const pinia = createPinia();

const app = createApp(App);
app.use(router);

app.use(VueCookies, {
  expireTimes: '1h',
  path: '/',
  domain: '127.0.0.1',
  secure: false,
  sameSite: '',
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia);
app.use(ElementPlus, { locale: zhCn });
// app.use(VMdPreviewHtml);
app.component('EditorMarkdown', EditorMarkdown);
app.component('EditorPreview', EditorPreview);
app.component(ElCollapseTransition.name, ElCollapseTransition);

app.mount('#app');
