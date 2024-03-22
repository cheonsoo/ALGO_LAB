import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/store/modules/store';
// @ts-ignore
// import * as Sentry from '@sentry/react';
// import './sentry';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from '@/App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </Provider>
  </QueryClientProvider>
  // </React.StrictMode>
);
