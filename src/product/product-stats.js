import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {createLikeThunk, findAllLikesThunk, updateLikesThunk} from "../services/likes/likes-thunk";

const ProductStats = ({like}) => {
    const dispatch = useDispatch();
    const [countLike, setCountLike] = useState(like.likes);
    const [countDislike, setCountDislike] = useState(like.dislikes);
    const Like = () => {
        const newLike = {
            ...like,
            likes: like.likes + 1,

        }
        dispatch(updateLikesThunk(newLike));
        setCountLike(countLike + 1);
    }

    const Dislike = () => {
        const newLike = {
            ...like,
            dislikes: like.dislikes + 1,

        }
        dispatch(updateLikesThunk(newLike));
        setCountDislike(countDislike + 1);
    }
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-hand-thumbs-up-fill me-1"  onClick={() => {Like()}}/>
                <span>{countLike}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-hand-thumbs-down-fill me-1"  onClick={() => {Dislike()}}/>
                <span>{countDislike}</span>
            </div>
        </div>
    );
};

export default ProductStats;