import React from "react";
import { useDispatch } from "react-redux";
import { closeStore } from "./store-reducer";
import "../index.css"

const StoreItem = (
    { 
        store = {
            _id: 123,
            storeName: "Thompson Farms",
            description :"New England's premier farm-to-table produce market.",
            picture: "../images/store.png",
            closed: false
        }
    }
) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeStore(store));
    };
    return (
        <div className="card card-style">
        <img
          src={store.picture}
          className="card-img-top store-picture p-2"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{store.storeName}</h5>
          <p className="card-text description-text">
            {store.description}
          </p>
          <div className="mt-auto d-flex justify-content-between">
            {store.closed ? (
              <button className="btn btn-secondary btn-sm mx-3">Store Closed</button>
            ) : (
              <button href="#" className="btn button-blue btn-sm mx-3">
                Home Page
              </button>
            )}
            <button
              onClick={() => handleClose(store)}
              className="btn btn-warning ms-2 btn-sm mx-3"
            >
              {store.closed ? "Open Store" : "Close Store"}
            </button>
          </div>
        </div>
      </div>
    );
};

export default StoreItem;