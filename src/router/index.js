import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/c1',
      name: 'c1',
      component: () => import(/* webpackChunkName: "c1" */ '../views/c1/Index.vue')
    },
    {
      path: '/c2',
      name: 'c2',
      component: () => import(/* webpackChunkName: "c2" */ '../views/c2/Index.vue')
    },
    {
      path: '/c3',
      name: 'c3',
      component: () => import(/* webpackChunkName: "c3" */ '../views/c3/Index.vue')
    },
    {
      path: '/truec1',
      name: 'truec1',
      component: () => import(/* webpackChunkName: "c3" */ '../views/truec1/Index.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "help" */ '../views/help/Index.vue')
    },
    // {
    //   path: '/c4',
    //   name: 'c4',
    //   component: () => import(/* webpackChunkName: "c4" */ '../views/c4/Index.vue')
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
  ],
})

export default router
