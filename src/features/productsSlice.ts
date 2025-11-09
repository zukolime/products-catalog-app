import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import type { Product, ProductFormValues } from '../models/product';
import { apiRequest } from '../helpers/apiRequest';
import { mergeProducts } from '../helpers/mergeProducts';

export interface ProductsState {
  products: Product[];
  filter: 'all' | 'liked';
  loading: boolean;
  error: string | null;
}

type AddProductPayload = Omit<ProductFormValues, 'price'> & { price: number };

const initialState: ProductsState = {
  products: [],
  filter: 'all',
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { request } = apiRequest();
  const data = await request('https://dummyjson.com/products?limit=6');
  return data.products;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<string>) {
      const product = state.products.find((item) => item.id === action.payload);
      if (product) product.liked = !product.liked;
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    addProduct(state, action: PayloadAction<AddProductPayload>) {
      const newProduct: Product = {
        id: uuid(),
        ...action.payload,
        liked: false,
      };

      state.products = [...state.products, newProduct];
    },
    setFilter(state, action: PayloadAction<'all' | 'liked'>) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = mergeProducts(state.products, action.payload);
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching';
      })
      .addDefaultCase(() => {});
  },
});

export const { toggleLike, removeProduct, addProduct, setFilter } = productsSlice.actions;
export default productsSlice.reducer;
