import * as likesService from "./likes-service"
import {createAsyncThunk} from "@reduxjs/toolkit";


export const findAllLikesThunk = createAsyncThunk(
    "likes/findAll", async () => {
    const likes = await likesService.findAllLikes()
    return likes;
});

export const findLikesByPidThunk = createAsyncThunk(
    "like/findPid", async (like) => {
        const likes = await likesService.findLikesByPid(like)
        return likes
    }
)

export const createLikeThunk = createAsyncThunk(
    'likes/createLike',
    async (like) =>{
        const newLike = await likesService.createLike(like)
        return newLike
    }
)

export const updateLikesThunk =
    createAsyncThunk(
        'likes/updateLike',
        async (like) =>{
            await likesService.updateLike(like)
        }
    )