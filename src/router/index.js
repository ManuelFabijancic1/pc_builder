import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',

    component: () => import(/* webpackChunkName: "login" */'../views/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',

    component: () => import(/* webpackChunkName: "signup" */'../views/signup.vue')
  },
  {
    path: '/budget',
    name: 'budget',

    component: () => import(/* webpackChunkName: "budget" */'../views/budget.vue')
  },
  {
    path: '/components',
    name: 'components',

    component: () => import(/* webpackChunkName: "components" */'../views/components.vue')
  },
  {
    path: '/componentspecs',
    name: 'componentspecs',

    component: () => import(/* webpackChunkName: "componentspecs" */'../views/componentspecs.vue')
  },
  {
    path: '/computertype',
    name: 'computertype',

    component: () => import(/* webpackChunkName: "computertype" */'../views/computertype.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
