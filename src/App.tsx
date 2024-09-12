import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '#router/appRouter';
import './App.css';
// import { getPosts } from './api/postService';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProviderWrapper from '#containers/providerWrapper';

function App() {
  return (
    <Provider store={store}>
      <ProviderWrapper>
        <RouterProvider router={appRouter} />
      </ProviderWrapper>
    </Provider>
  );
}

export default App;
