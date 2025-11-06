import { configureStore } from '@reduxjs/toolkit';

import productsReducer from '../../features/productsSlice';
import productReducer from '../../features/productSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
