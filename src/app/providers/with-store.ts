import { configureStore } from '@reduxjs/toolkit';

import productsReducer, { type ProductsState } from '../../features/productsSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../../helpers/storage';

interface PreloadedState {
  products: ProductsState;
}

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },

  preloadedState: loadFromLocalStorage() as PreloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
