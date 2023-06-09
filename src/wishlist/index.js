import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findWishListByUserId} from "../services/wishList-service";
import WishlistDetail from "./WishlistDetail";
import "../profile/index.css";

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
            <ul className="list-group flex-user">
                {
                    wishList.map(wish => {
                        return (
                            /*<li key={wish._id} className="list-group-item">
                                <h3>{wish.productId}</h3>
                            </li>*/
                              <li key={wish._id} className="col-lg-3 col-md-6 col-sm-12 list-group-item me-4">
                                  <WishlistDetail pid={wish.productId}/>
                              </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default WishList;