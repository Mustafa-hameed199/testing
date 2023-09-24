import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { showNav: true}
   },
   {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
         return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      meta: { showNav: true }
   },
   {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { showNav: false }
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
