import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../../layouts/Layout';
import { NotFound } from '../../pages/NotFound/NotFound';
import { CreateProductPage } from '../../pages/CreateProductPage/CreateProductPage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage/ProductDetailsPage';
import { ProductsPage } from '../../pages/ProductsPage/ProductsPage';
import { HeroPage } from '../../pages/HeroPage/HeroPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <HeroPage />,
        },
        {
          path: '/products',
          element: <ProductsPage />,
        },

        {
          path: '/products/:id',
          element: <ProductDetailsPage />,
        },

        {
          path: '/create-product',
          element: <CreateProductPage />,
        },

        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: '/app' }
);
