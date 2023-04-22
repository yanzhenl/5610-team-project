import {createSlice} from "@reduxjs/toolkit";
import {createCommentThunk, findAllCommentsThunk} from "./comments-thunk";

const initialState = {
    comments: [],
    loading: false  //loading flag to display spinner
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: {
        [findAllCommentsThunk.pending]:
            (state) => {
                state.loading = true   //true so UI can display spinner
                state.comments = []
            },
        [findAllCommentsThunk.fulfilled]:
            (state, {payload}) => {   //exrta payload from action object
                state.loading = false  //turn off loading
                state.comments = payload
            },
        [findAllCommentsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error    //report error
            },
        [createCommentThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments.push(payload)
            },

    }
});

export default commentsSlice.reducer;
