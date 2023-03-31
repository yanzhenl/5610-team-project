import { createSlice } from "@reduxjs/toolkit";
import products from './products.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    editProduct(state, action) {
      const index = state.findIndex((product) => product.id === action.payload.id)
      state[index] = action.payload
    }
  }
});
export const {editProduct} = productsSlice.actions;
export default productsSlice.reducer