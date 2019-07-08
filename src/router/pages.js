const Page1 = () => {
  return import('../pages/page1.vue');
};

const Page2 = () => {
  return import('../pages/page2.vue');
};

const Page3 = () => {
  return import('../pages/page3.vue');
};

const routes = [
  {
    path: '/page1',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3
  }
];

export default routes;
