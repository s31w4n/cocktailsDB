import './index.css';
import React from 'react';
import { router } from './router';
import { AppProvider } from './context';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
