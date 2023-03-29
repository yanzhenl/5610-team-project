import React from "react";

const OrderDetail = (
    {
        orderDetail = {
            "_id" : "1",
            "orderId" : "678",
            "image" : "banana.png",
            "price" : "2.49",
            "count" : 1,
            "name" : "Bananas Organic"
        }
    }
) =>{
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 oh-pad">
                    <img src={`/images/${orderDetail.image}`} className="d-none d-lg-block oh-imag"/>
                </div>
                <div className="col-8 oh-pad">
                    <div>{orderDetail.count}x{orderDetail.price}ea</div>
                    <div>{orderDetail.name}</div>
                </div>
                <div className="col-2 oh-pad-2">
                    <div className="oh-head-2">${orderDetail.price}</div>
                </div>
            </div>
        </li>
    )
}

export default OrderDetail;