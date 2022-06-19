import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/tome',
    name: 'me',
    component: () => import('@/views/toMe.vue'),
  },
];

export default routes;
