import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Albums = lazy(() => import('./index'));
const Photo = lazy(() => import('./Photo'));

const Router = () => (
  <Routes>
    <Route
      path='*'
      element={
        <Suspense>
          <Albums />
        </Suspense>
      }
    />
    <Route
      path='/photo'
      element={
        <Suspense>
          <Photo />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
