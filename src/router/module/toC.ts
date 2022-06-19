import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'client',
    component: () => import('@/views/toC.vue'),
  },
];

export default routes;
