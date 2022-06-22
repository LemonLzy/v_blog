import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/tome',
    name: 'me',
    component: () => import('@/views/toMe.vue'),
    children: [
      {
        path: '/article/new',
        name: 'new',
        component: () => import('@/views/ArticleView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue'),
  },
];

export default routes;
