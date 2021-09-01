import { lazy } from 'react';

// Pages
const LandingPage = lazy(() => import('../views/Landing'));

export const SITEMAP = {
  Landing: {
    name: 'landing',
    path: '/',
    exact: true,
    component: LandingPage,
  },
  Menu: {
    name: 'menu',
    path: '/menu',
    exact: true,
    // component: MenuPage,
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