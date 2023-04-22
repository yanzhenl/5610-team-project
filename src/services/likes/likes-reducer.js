import {createSlice} from "@reduxjs/toolkit";
import {createLikeThunk, findAllLikesThunk, findLikesByPidThunk, updateLikesThunk} from "./likes-thunk";


const initialState = {
    likes: [],
    loading: false
}

const likesSlice = createSlice({
    name: 'likes',
    initialState,
    extraReducers: {
        [findAllLikesThunk.pending]:
            (state) => {
                state.loading = true
                state.likes = []
            },
        [findAllLikesThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.likes = payload
            },
        [findAllLikesThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findLikesByPidThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.likes = payload
            },
        [findLikesByPidThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [updateLikesThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                const likeNdx = state.likes.findIndex((t) => t._id === payload._id);  //find index of updated tuit in array
                state.likes[likeNdx] = {                                                  //merge old tuit with updated tuit
                    ...state.likes[likeNdx],
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
