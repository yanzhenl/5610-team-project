import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {createLikeThunk, findAllLikesThunk, updateLikesThunk} from "../services/likes/likes-thunk";

const ProductStatsEmpty = ({id}) => {
    const dispatch = useDispatch();
    const CreateLike = () => {
        const newLike = {
            product_id: id.id,
            likes:1,
            dislikes:0,
        }
        dispatch(createLikeThunk(newLike))
    }
    const CreateDislike = () => {
        const newLike = {
            product_id: id.id,
            likes:1,
            dislikes:0,
        }
        dispatch(createLikeThunk(newLike))
    }
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-hand-thumbs-up-fill me-1"  onClick={() => {CreateLike()}}/>
            </div>
            <div className="col-3">
                <i className="bi bi-hand-thumbs-down-fill me-1"  onClick={() => {CreateDislike()}}/>
            </div>
        </div>
    );
};

export default ProductStatsEmpty;