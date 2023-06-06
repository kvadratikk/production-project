import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

type RouteConfig = RouteProps & {
  key?: string;
  icon?: ReactNode;
};

export const routeConfig: RouteConfig[] = [
  {
    path: '',
    element: <MainPage />,
    key: 'Main Page',
    icon: <MainIcon />,
  },
  {
    path: AppRoutes.ABOUT,
    element: <AboutPage />,
    key: 'About',
    icon: <AboutIcon />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
