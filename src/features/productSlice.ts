import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Product } from '../models/product';
import { getHttp } from '../helpers/getHttp';

interface ProductState {
  product: Product;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: {
    id: '',
    title: '',
    description: '',
    thumbnail: '',
    liked: false,
  },
  loading: false,
  error: null,
};

export const fetchProductById = createAsyncThunk('product/fetchProductById', (id: string) => {
  const { request } = getHttp();
  return request(`https://dummyjson.com/products/${id}`);
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // toggleLike(state, action: PayloadAction<number>) {
    //   const product = state.product.find((item) => item.id === action.payload);
    //   if (product) product.liked = !product.liked;
    // },
    // removeProduct(state, action: PayloadAction<number>) {
    //   state.product = state.product.filter((item) => item.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching';
      })
      .addDefaultCase(() => {});
  },
});

// export const { toggleLike, removeProduct } = productSlice.actions;
export default productSlice.reducer;
