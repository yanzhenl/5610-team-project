import React from "react";
import {useSelector} from "react-redux";
import StoreItem from "./store-item";

const StoreList = () => {
    const stores = useSelector(state => state.store);
    return (
        <div>
            <div className="flex-container mt-5">
                {
                    stores.map(store =>
                        <StoreItem
                            key={store._id} store={store}/>)
                }
            </div>
        </div>
    )
}

export default StoreList;