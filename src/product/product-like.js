import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {createLikeThunk, findAllLikesThunk} from "../services/likes/likes-thunk";
import ProductStats from "./product-stats";
import {createLike} from "../services/likes/likes-service";
import ProductStatsNull from "./product-stats-null";

const ProductLike = (id) =>{
    const {likes, loading} = useSelector(
        state => state.likesData
    )
    //const {total, setTotal} = useState(likes)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllLikesThunk())
        },[]);
    const filtered = likes.filter(like => like.product_id === id.id)
    if(filtered.length == 0){
        return(
            <ul className="list-group">
                {
                    //likes.map(like => <ProductStats id={like._id} like={like}/>)
                    //<ProductStats likes={likes} id={id}/>
                    //console.log(id)
                    <ProductStatsNull id={id}/>
                }
            </ul>
        )
    }
    else {
        return (
            <ul className="list-group">
                {
                    //likes.map(like => <ProductStats id={like._id} like={like}/>)
                    likes.filter(like => like.product_id === id.id).map(item => <ProductStats key={item._id}
                                                                                              like={item}/>)
                }
            </ul>
        )
    }


}

export default ProductLike;