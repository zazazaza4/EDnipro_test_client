import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Spinner } from '@/components/spinner';
import { ROUTES } from '@/helpers/constants';
import Page404 from '@/pages/page404';
import { checkIsAuth } from '@/store/slices/authSlice';

import { privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
  const isAuth = useSelector(checkIsAuth);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        {isAuth ? (
          <>
            {privateRoutes.map(({ path, Component }) => {
              return <Route key={path} path={path} element={<Component />} />;
            })}
            <Route path="*" element={<Page404 />} />
          </>
        ) : (
          <>
            {publicRoutes.map(({ path, Component }) => {
              return <Route path={path} key={path} element={<Component />} />;
            })}
            <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
