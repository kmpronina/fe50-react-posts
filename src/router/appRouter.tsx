import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '#constants/routes';
import Home from '../pages/home';
import PostPage from '#pages/postPage';
import FavoritePostsPage from '#pages/favoritePostsPage';

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.POST,
    element: <PostPage />,
  },
  {
    path: ROUTES.FAVPOSTS,
    element: <FavoritePostsPage />,
  },
]);
