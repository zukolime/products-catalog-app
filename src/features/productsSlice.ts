import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../models/product';

interface ProductsState {
  items: Product[];
  filter: 'all' | 'liked';
}

const initialState: ProductsState = {
  items: [],
  filter: 'all',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
    toggleLike(state, action: PayloadAction<number>) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) product.liked = !product.liked;
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    setFilter(state, action: PayloadAction<'all' | 'liked'>) {
      state.filter = action.payload;
    },
  },
});

export const { setProducts, toggleLike, removeProduct, addProduct, setFilter } = productsSlice.actions;
export default productsSlice.reducer;
