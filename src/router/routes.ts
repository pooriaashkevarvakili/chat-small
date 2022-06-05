import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/welcome', component: () => import('src/pages/welcome.vue') },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('pages/chat.vue'),
        props: true,
        beforeEnter: (to, from, next) => {
          if (to.params.name) {
            next()
          } else {
            next({ name: 'welcome' })
          }
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
