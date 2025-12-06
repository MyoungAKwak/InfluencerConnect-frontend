import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/community/list',
      name: 'community/list',
      component: () => import('../views/community/List.vue'),
    },
    {
      path: '/community/edit',
      name: 'community/edit',
      component: () => import('../views/community/Edit.vue'),
    },
    {
      path: '/board/detail/:id',
      name: 'board-detail',
      component: () => import('../views/board/Detail.vue'),
    },
    {
      path: '/board/edit/:idToEdit?',
      name: 'board-Edit',
      component: () => import('../views/board/Edit.vue'),
    },
    {
      path: '/board/list',
      name: 'board-list',
      component: () => import('../views/board/List.vue'),
    },
    {
      path: '/local/list',
      name: 'local-list',
      component: () => import('../views/local/List.vue'),
    },
    {
      path: '/shipping/list',
      name: 'shipping-list',
      component: () => import('../views/shipping/List.vue'),
    },
    {
      path: '/campaign/list',
      name: 'campaign-list',
      component: () => import('../views/campaign/List.vue'),
    },
    {
      path: '/campaign/edit',
      name: 'campaign-edit',
      component: () => import('../views/campaign/Edit.vue'),
    },
    {
      path: '/campaign/detail',
      name: 'campaign-detail',
      component: () => import('../views/campaign/Detail.vue'),
    },
    {
      path: '/users/login',
      name: 'users-login',
      component: () => import('../views/users/Login.vue'),
    },
    {
      path: '/users/signup',
      name: 'users-signup',
      component: () => import('../views/users/Signup.vue'),
    },
  ],
})

export default router
