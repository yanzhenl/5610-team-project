import {createSlice} from "@reduxjs/toolkit";
import {createLikeThunk, findAllLikesThunk, findLikesByPidThunk, updateLikesThunk} from "./likes-thunk";


const initialState = {
    likes: [],
    loading: false  //loading flag to display spinner
}

const likesSlice = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [findAllLikesThunk.pending]:
            (state) => {
                state.loading = true   //true so UI can display spinner
                state.likes = []
            },
        [findAllLikesThunk.fulfilled]:
            (state, {payload}) => {   //exrta payload from action object
                state.loading = false  //turn off loading
                state.likes = payload
            },
        [findAllLikesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error    //report error
            },
        [findLikesByPidThunk.fulfilled]:
            (state, {payload}) => {   //exrta payload from action object
                state.loading = false  //turn off loading
                state.likes = payload
            },
        [findLikesByPidThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error    //report error
            },
        [updateLikesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                const likeNdx = state.likes.findIndex((t) => t._id === payload._id);  //find index of updated tuit in array
                state.tuits[likeNdx] = {                                                  //merge old tuit with updated tuit
                    ...state.tuits[likeNdx],
                    ...payload
                };
            },
        [createLikeThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.likes.push(payload)
            },

    }
});

export default likesSlice.reducer;