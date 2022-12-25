import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/toTest.vue'),
  },
  {
    path: '/toc',
    name: 'toc',
    component: () => import('@/views/toc/toC.vue'),
  },
  {
    path: '/toc/details/:id',
    name: 'details',
    component: () => import('@/views/toc/toCDetail.vue'),
  },
  {
    path: '/archives',
    name: 'archives',
    component: () => import('@/views/toTest.vue'),
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('@/views/toTest.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/toTest.vue'),
  },
];

export default routes;
