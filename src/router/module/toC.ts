import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'client',
    component: () => import('@/views/toC.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/client/HomePage.vue'),
  },
];

export default routes;
