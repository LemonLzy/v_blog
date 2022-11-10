import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/tome',
    name: 'me',
    redirect: { name: 'new' },
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
    redirect: { name: 'Dashboard' }, // 默认跳转到子路由dashboard
    component: () => import('@/views/AdminView.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/tome/DashBoard.vue'),
      },
      {
        path: 'userList',
        name: 'UserList',
        component: () => import('@/views/tome/ArticleList.vue'),
      },
    ],
  },
];

export default routes;
