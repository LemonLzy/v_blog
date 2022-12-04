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
  {
    path: '/toc/details/:id',
    name: 'details',
    component: () => import('@/views/toc/toCDetail.vue'),
  },
];

export default routes;
