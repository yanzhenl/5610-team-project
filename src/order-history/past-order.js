import React from "react";
import "./order.css";
import {Link} from "react-router-dom";

const PastOrder = (
    {
    order = {
        "orderId" : "678",
        "orderStatus" : "Delivered",
        "placedDate" : "10/22/2022",
        "deliveredData" : "10/23/2022"
    }
}
) =>{
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 oh-pad">
                    <img src="/images/truck.png" className="oh-truck"/>
                </div>
                <div className="col-8">
                    <div className="oh-head">{order.orderStatus}</div>
                    <Link to="/order-history/detail">Order: {order.orderId}</Link>
                    <div>Placed On: {order.placedDate}</div>
                    <div>Delivered On: {order.deliveredData}</div>
                </div>
            </div>
        </li>
    )
}

export default PastOrder;