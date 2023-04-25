import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {findAllCommentsThunk} from "../services/comments/comments-thunk";
import CommentStat from "./comment-stat";
import CommentAdd from "./comment-add";

const ProductComments = (id) => {
    const {comments, loading} = useSelector(
        state => state.commentsData
    )
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllCommentsThunk())
    }, []);

    const filtered = comments.filter(comment => comment.product_id === id.id);
    if(filtered.length == 0){
        return(
            <CommentAdd pid={id}/>
        )
    }
    else{
        return (
            <>
                <CommentAdd pid={id}/>
                <ul className="list-group mt-4 border-top">
                    {
                        filtered.map((item) => {
                            if (item != null && item.user_id != null && item.content != null && item.content.length != 0) {
                                return <CommentStat comment={item}/>;
                            }
                        })
                    }
                </ul>
            </>

        )

    }
}
export default ProductComments;