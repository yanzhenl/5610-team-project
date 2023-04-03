import { createSlice } from "@reduxjs/toolkit";
import store from './store.json';

const manageStoreSlice = createSlice({
    name: "store",
    initialState: store,
    reducers: {
        closeStore: (state, action) => {
            const store = state.find(store => store._id === action.payload._id);
            store.closed = !store.closed;
        },
    },
});

export default manageStoreSlice.reducer;
export const { closeStore } = manageStoreSlice.actions;