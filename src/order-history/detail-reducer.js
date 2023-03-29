import {createSlice} from "@reduxjs/toolkit";
import detailsArray from "./orderDetail.json"

const detailSlice = createSlice({
    name:"detail",
    initialState: detailsArray
});

export default detailSlice.reducer;