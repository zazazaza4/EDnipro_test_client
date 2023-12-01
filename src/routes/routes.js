import { lazy } from 'react';

import { ROUTES } from '@/helpers/constants';

const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/auth/login.jsx'));
const Register = lazy(() => import('@/pages/auth/register.jsx'));
const ProjectDetailes = lazy(() => import('@/pages/project-details'));

export const publicRoutes = [
  {
    path: ROUTES.LOGIN,
    Component: Login,
  },
  {
    path: ROUTES.REGISTER,
    Component: Register,
  },
];

export const privateRoutes = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.PROJECT,
    Component: ProjectDetailes,
  },
];
