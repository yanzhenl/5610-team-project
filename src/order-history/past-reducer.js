import {createSlice} from "@reduxjs/toolkit";
import pastsArray from "./past.json"

const pastSlice = createSlice({
    name:"past",
    initialState: pastsArray
});

export default pastSlice.reducer;