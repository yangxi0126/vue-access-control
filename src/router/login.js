const Index = () => {
  return import('../pages/login/login.vue');
};

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Index
  }
];

export default routes;
