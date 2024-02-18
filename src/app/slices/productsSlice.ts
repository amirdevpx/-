import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "../api/productsApi";
import { RootState } from "../store";

export interface ProductState {
  id: number | string;
  title: string;
  rating: number;
  price: number;
  purchased: boolean;
  discount: number;
  createAt: Date | string;
  image: string;
}

export interface ProductsState {
  list: Array<ProductState>;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  list: [],
  loading: false,
  error: null,
};

export const getAllProductsAsync = createAsyncThunk(
  "products/fetchAllProducts",
  async (limit: number | undefined) => {
    const response = await fetchAllProducts(limit);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export const {} = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products.list;
export const selectLoading = (state: RootState) => state.products.loading;
export default productsSlice.reducer;
