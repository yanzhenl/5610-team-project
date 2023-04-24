import {createSlice} from "@reduxjs/toolkit";
import {createCommentThunk, findAllCommentsThunk} from "./comments-thunk";

const initialState = {
    comments: [],
    loading: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [findAllCommentsThunk.pending]:
            (state) => {
                state.loading = true
                state.comments = []
            },
        [findAllCommentsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments = payload
            },
        [findAllCommentsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createCommentThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments.push(payload)
            },

    }
});

export default commentsSlice.reducer;
