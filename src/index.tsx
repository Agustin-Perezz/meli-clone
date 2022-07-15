import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.scss';

import { AppRoutes } from './routes';
import { ProductsProvider } from './context/products-context';
import { FiltersProvider } from './context/filters-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FiltersProvider>
      <ProductsProvider>
        <AppRoutes />
      </ProductsProvider>
    </FiltersProvider>
  </React.StrictMode>
);

