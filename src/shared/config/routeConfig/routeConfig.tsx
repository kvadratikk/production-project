import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: '',
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: AppRoutes.ABOUT,
    element: <AboutPage />,
  },
};
