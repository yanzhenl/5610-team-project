import React from "react";
import {useSelector} from "react-redux";
import PastOrder from "./past-order";
const PastOrderList = () => {
    const pastsArray = useSelector(state => state.past)
    return(
        <ul className="list-group">
            {
            pastsArray.map(past =>
                <PastOrder key={past.orderId} order={past}/>)
            }
        </ul>
    );
};
export default PastOrderList;