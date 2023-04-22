import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {createLikeThunk, findAllLikesThunk} from "../services/likes/likes-thunk";
import ProductStats from "./product-stats";
import ProductStatsEmpty from "./product-stats-null";

const ProductLike = (id) =>{
    const {likes, loading} = useSelector(
        state => state.likesData
    )
    //const {total, setTotal} = useState(likes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllLikesThunk())
        },[]);
    const filtered_like = likes.filter(like => like.product_id === id.id)
    if(filtered_like.length == 0){
        return(
            <ul className="list-group">
                {
                    //likes.map(like => <ProductStats id={like._id} like={like}/>)
                    //<ProductStats likes={likes} id={id}/>
                    //console.log(id)
                    <ProductStatsEmpty id={id}/>
                }
            </ul>
        )
    }
    else {
        return (
            <ul className="list-group">
                {
                    //likes.map(like => <ProductStats id={like._id} like={like}/>)
                    <ProductStats key={filtered_like[0]._id} like={filtered_like[0]}/>
                }
            </ul>
        )
    }


}

export default ProductLike;
