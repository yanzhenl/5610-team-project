import {createSlice} from "@reduxjs/toolkit";
import cartsArray from "./cart.json"

const cartSlice = createSlice({
    name:"cart",
    initialState: cartsArray
});

export default cartSlice.reducer;