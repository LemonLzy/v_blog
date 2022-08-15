import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'test',
    component: () => import('@/views/toTest.vue'),
  },
  {
    path: '/toc',
    name: 'client',
    component: () => import('@/views/toc/toC.vue'),
  },
];

export default routes;
