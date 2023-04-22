import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLikesThunk } from '../services/likes/likes-thunk';

const ProductStats = ({ like }) => {
    const dispatch = useDispatch();
    const [countLike, setCountLike] = useState(like.likes);
    const [countDislike, setCountDislike] = useState(like.dislikes);
    const [userLiked, setUserLiked] = useState(false);
    const [userDisliked, setUserDisliked] = useState(false);

    const Like = () => {
        if (!userLiked) {
            const newLike = {
                ...like,
                likes: countLike + 1,
                dislikes: userDisliked ? countDislike - 1 : countDislike,
            };
            console.log('Dispatching Like:', newLike);

            dispatch(updateLikesThunk(newLike));
            setCountLike(countLike + 1);
            setUserLiked(true);
            if (userDisliked) {
                setCountDislike(countDislike - 1);
                setUserDisliked(false);
            }
        }
    };

    const Dislike = () => {
        if (!userDisliked) {
            const newLike = {
                ...like,
                dislikes: countDislike + 1,
                likes: userLiked ? countLike - 1 : countLike,
            };
            console.log('Dispatching Dislike:', newLike);
            dispatch(updateLikesThunk(newLike));
            setCountDislike(countDislike + 1);
            setUserDisliked(true);
            if (userLiked) {
                setCountLike(countLike - 1);
                setUserLiked(false);
            }
        }
    };

    return (
        <div className="row">
            <div className="col-3">
                <i
                    className={`bi ${
                        userLiked ? 'bi-hand-thumbs-up-fill text-danger' : 'bi-hand-thumbs-up'
                    } me-1`}
                    style={{ fontSize: '24px' }}
                    onClick={() => {
                        Like();
                    }}
                />
                <span style={{ fontSize: '20px' }}>{countLike}</span>
            </div>
            <div className="col-3">
                <i
                    className={`bi ${
                        userDisliked
                            ? 'bi-hand-thumbs-down-fill text-dark'
                            : 'bi-hand-thumbs-down'
                    } me-1`}
                    style={{ fontSize: '24px' }}
                    onClick={() => {
                        Dislike();
                    }}
                />
                <span style={{ fontSize: '20px' }}>{countDislike}</span>
            </div>
        </div>
    );
};

export default ProductStats;
