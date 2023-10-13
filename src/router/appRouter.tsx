import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '#constants/routes';
import Home from '../pages/home';

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: ROUTES.POST,
    element: <div>Post</div>,
  },
]);
