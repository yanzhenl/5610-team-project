import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findWishListByUserId} from "../services/wishList-service";

function WishList() {
    const dispatch = useDispatch();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        findWishListByUserId(currentUser._id)
            .then(wishList => setWishList(wishList))
        console.log(wishList)
    }, [currentUser._id])

    return (
        <div>
            <h1>Wish List</h1>
            <ul className="list-group">
                {
                    wishList.map(wish => {
                        return (
                            <li key={wish._id} className="list-group-item">
                                <h3>{wish.productId}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default WishList;