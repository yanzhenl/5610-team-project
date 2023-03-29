import React from "react";
import "./order.css";
import {useSelector} from "react-redux";
import OrderDetail from "./order-detail"

const OrderDetailList = () =>{
    const detailsArray = useSelector(state => state.detail);
    return(
        <ul className="list-group">
            {
                detailsArray.map(detail =>
                    <OrderDetail key={detail._id} orderDetail={detail}/>)
            }
        </ul>
    );
}

export default OrderDetailList;