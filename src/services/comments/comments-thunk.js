import * as commentsService from "./comments-service"
import {createAsyncThunk} from "@reduxjs/toolkit";

export const findAllCommentsThunk = createAsyncThunk(
    "comments/findAll", async () => {
        const comments = await commentsService.findAllComments()
        return comments;
    });

export const createCommentThunk = createAsyncThunk(
    'likes/createLike',
    async (comment) =>{
        const newComment = await commentsService.createComment(comment)
        return newComment;
    }
)