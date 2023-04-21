import React from "react";
import "../index.css";

const ProduceItem = (
    {
        produce = {
            "_id": 1,
            "profilePicture": "ecofarm.png",
            "userName": "Eco Farm",
            "title": "Fresh and organic parsley",
            "producePicture": "parsely.png",
            "price": "$1.75/lb"
        }
    }
) => {
    return(

            <li className="list-group-item">

                <div className="mt-2 ps-2">
                    <img height={200} className="w-100 rounded-4"
                         src={`/images/${produce.producePicture}`}/>
                </div>
                <div className="mt-2 ps-2 mb-2 wd-truncate-title"
                     style={{fontSize: "0.9rem", color: "dimgray"}}>
                    {produce.title}
                </div>
                <span className="mt-1 ms-2 fw-bold">
                    {produce.price}
                </span>
                <span>
                    <button type="button" className="float-end btn btn-outline-primary btn-sm"
                            style={{ borderRadius: '25px', padding: '0.15rem 0.75rem' }}>
                      <i className="bi bi-cart-plus"></i>
                    </button>
                </span>

            </li>

    );
};
export default ProduceItem;
