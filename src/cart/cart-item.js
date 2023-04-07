import React, {useState} from "react";
import "./cart.css";
import {useDispatch} from "react-redux";

const CartItem = (
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
                <div className="col-6 oh-pad">
                    <div>{cart.price}ea</div>
                    <div>{cart.name}</div>
                </div>
                <div className="ct-flexbox-container col-5">
                    <div className="ct-flexbox-container ct-pad2">
                        <i className="fa-solid fa-minus"></i>
                        <input className="ct-box ct-input" value={cart.count}/>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="ct-pad">
                        <div className="oh-head-2">${cart.total}</div>
                    </div>
                    <div className="ct-pad2">
                        <i className="fa-regular fa-trash-can"></i>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default CartItem;