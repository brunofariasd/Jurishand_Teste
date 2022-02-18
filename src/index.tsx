import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage';
import { useAppDispatch, useAppSelector } from './store';
import { updateLoadingRoot } from './store/homePageReducer.store';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const LoadingRoot = useAppSelector((state) => state.homePageReducer);

  useEffect(() => {
    dispatch(updateLoadingRoot(true));
    setTimeout(() => {
      dispatch(updateLoadingRoot(false));
    }, 3000);
  }, []);

  const pageRoutes = React.useCallback(() => {
    return LoadingRoot.loadingRoot ? <LoadingPage /> : <HomePage />;
  }, [LoadingRoot.loadingRoot]);

  return pageRoutes();
};

export default Main;
