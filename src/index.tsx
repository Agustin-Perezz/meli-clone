import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';

import { AppRoutes } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

