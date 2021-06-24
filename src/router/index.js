import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      needsUser: false,
    },
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
    path: '/computertype',
    name: 'computertype',
    
    component: () => import(/* webpackChunkName: "computertype" */'../views/computertype.vue')
  },
  {
    path: '/componentcpu',
    name: 'componentcpu',
    
    component: () => import(/* webpackChunkName: "componentcpu" */'../views/componentcpu.vue')
  },
  {
    path: '/componentgpu',
    name: 'componentgpu',
    
    component: () => import(/* webpackChunkName: "componentspecs" */'../views/componentgpu.vue')
  },
  {
    path: '/componentram',
    name: 'componentram',
    
    component: () => import(/* webpackChunkName: "componentspecs" */'../views/componentram.vue')
  },
  {
    path: '/componentpowersuply',
    name: 'componentpowersuply',
    
    component: () => import(/* webpackChunkName: "componentspecs" */'../views/componentpowersuply.vue')
  },
  {
    path: '/componentcase',
    name: 'componentcase',
    
    component: () => import(/* webpackChunkName: "componentspecs" */'../views/componentcase.vue')
  },
  {
    path: '/componentstorage',
    name: 'componentstorage',
    
    component: () => import(/* webpackChunkName: "componentspecs" */'../views/componentstorage.vue')
  },
  {
    path: '/componentmotherboard',
    name: 'componentmotherboard',
    
    component: () => import(/* webpackChunkName: "componentspecs" */'../views/componentmotherboard.vue')
  },
  {
    path: '/componentsystemcooling',
    name: 'componentsystemcooling',
    
    component: () => import(/* webpackChunkName: "componentspecs" */'../views/componentsystemcooling.vue')
  },
  {
    path: '/loginhome',
    name: 'loginhome',
    
    component: () => import(/* webpackChunkName: "loginhome" */'../views/loginhome.vue')
  },
  {
    path: '/fastestpc',
    name: 'fastestpc',
    
    component: () => import(/* webpackChunkName: "componentspecs" */'../views/fastestpc.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/*
router.beforeEach((to, from, next) => {
 

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
      next('/');
  } else {
      next();
  }
});
*/
export default router;