import React, {useState} from "react";
import "./cart.css";
import {useDispatch} from "react-redux";

const Cart = (
    {
        cart = {
            "_id" : "1",
            "orderId" : "678",
            "image" : "pineapple.png",
            "price" : "2.49",
            "count" : 1,
            "name" : "Native Hawaiian Pineapples",
            "total" : "2.49"
        }
    }
) =>{
    let [count, setCount] = useState('');
    const dispatch = useDispatch();

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 oh-pad">
                    <img src={`/images/${cart.image}`} className="d-none d-lg-block ct-imag"/>
                </div>
                <div className="col-8 oh-pad">
                    <div>{cart.price}ea</div>
                    <div>{cart.name}</div>
                </div>
                <div className="col-1 oh-pad-2 flexbox-container">
                    <i className="fa-solid fa-minus"></i>
                    <input className="ct-box ct-input" value={cart.count}/>
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="col-1 oh-pad-2">
                    <div className="oh-head-2">${cart.total}</div>
                </div>
                <div className="col-1 oh-pad-2">
                    <i className="fa-regular fa-trash-can"></i>
                </div>
            </div>
        </li>
    )

}

export default Cart;