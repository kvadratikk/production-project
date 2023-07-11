import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
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
    path: AppRoutes.PROFILE,
    element: <ProfilePage />,
    key: 'Profile Page',
    icon: <ProfileIcon />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
