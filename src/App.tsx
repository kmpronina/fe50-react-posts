import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '#router/appRouter';
import './App.css';
// import { getPosts } from './api/postService';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  // const logPOst = async (postId: number) => {
  //   const data = await getPosts(postId);
  //   console.log(data);
  // };
  // logPOst(1);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
