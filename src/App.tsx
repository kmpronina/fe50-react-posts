import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '#router/appRouter';
import './App.css';
import { getPost } from './api/postService';

function App() {
  const logPOst = async (postId: number) => {
    const data = await getPost(postId);
    console.log(data);
  };
  logPOst(1);
  return <RouterProvider router={appRouter} />;
}

export default App;
