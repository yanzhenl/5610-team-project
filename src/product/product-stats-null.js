import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {createLikeThunk, findAllLikesThunk, updateLikesThunk} from "../services/likes/likes-thunk";

const ProductStatsEmpty = ({id}) => {
    const dispatch = useDispatch();
    const [userLiked, setUserLiked] = useState(false);
    const [userDisliked, setUserDisliked] = useState(false);

    const CreateLike = () => {
        if (!userLiked) {
            const newLike = {
                product_id: id.id,
                likes: 1,
                dislikes: 0,
            }
            dispatch(createLikeThunk(newLike))
            setUserLiked(true);
        }
    }

    const CreateDislike = () => {
        if (!userDisliked) {
            const newLike = {
                product_id: id.id,
                likes: 0,
                dislikes: 1,
            }
            dispatch(createLikeThunk(newLike))
            setUserDisliked(true);
        }
    }

    return(
        <div className="row">
            <div className="col-3">
                <i className={`bi ${userLiked ? 'bi-hand-thumbs-up-fill text-danger' : 'bi-hand-thumbs-up'} me-1`} style={{fontSize: '24px'}} onClick={() => {CreateLike()}}/>
            </div>
            <div className="col-3">
                <i className={`bi ${userDisliked ? 'bi-hand-thumbs-down-fill text-dark' : 'bi-hand-thumbs-down'} me-1`} style={{fontSize: '24px'}} onClick={() => {CreateDislike()}}/>
            </div>
        </div>
    );
};

export default ProductStatsEmpty;