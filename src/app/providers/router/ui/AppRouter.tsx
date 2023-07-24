import { routeConfig } from 'app/providers/router/config/routeConfig';
import { getUser } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
  const { authData } = useSelector(getUser);

  const routes = useMemo(() => {
    return routeConfig
      .filter(({ authOnly }) => !(authOnly && !authData))
      .map(({ path, element }) => (
        <Route
          key={path}
          path={`/${path}`}
          element={<div className="page-wrapper">{element}</div>}
        />
      ));
  }, [authData]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
