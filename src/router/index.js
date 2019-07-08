import Vue from 'vue'
import Router from 'vue-router'

import Login from './login';
import Pages from './pages';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    ...Login,
    ...Pages
  ]
});

router.beforeEach((to, from, next) => {
  let state = sessionStorage.getItem('user');
  if (to.fullPath === '/login') {
    next();
  } else {
    if (state) {
      next();
    } else {
      next('/login');
    }
  }
});

export default router;
