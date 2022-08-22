import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';

import { MeliApp } from './MeliApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MeliApp />
  </React.StrictMode>
);

