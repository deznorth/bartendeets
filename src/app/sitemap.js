import { lazy } from 'react';

// Pages
const MenuPage = lazy(() => import('../views/Menu'));

export const SITEMAP = {
  Menu: {
    name: 'menu',
    path: '/',
    exact: true,
    component: MenuPage,
  },
  Login: {
    name: 'login',
    path: '/login',
    exact: true,
    // component: ExamplePage,
  },
  Queue: {
    name: 'queue',
    path: '/queue',
    exact: true,
    // component: ExamplePage,
  },
};