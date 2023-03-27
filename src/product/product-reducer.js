import { createSlice } from "@reduxjs/toolkit";
import products from './products.json';

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {

  }
})
export  default productsSlice.reducer