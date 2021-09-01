import { lazy } from 'react';

// Pages
const LandingPage = lazy(() => import('../views/Landing'));
const MenuPage = lazy(() => import('../views/Menu'));
const LoginPage = lazy(() => import('../views/Login'));
const QueuePage = lazy(() => import('../views/Queue'));

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
    component: MenuPage,
  },
  Login: {
    name: 'login',
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  Queue: {
    name: 'queue',
    path: '/queue',
    exact: true,
    component: QueuePage,
  },
};