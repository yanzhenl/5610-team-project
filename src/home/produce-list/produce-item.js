import React from "react";

const ProduceItem = (
    {
        produce = {
            "_id": 123,
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
                <img className="col-1 rounded-pill float-start" src={`/images/${produce.profilePicture}`}/>
                <div className="col-11 float-start">
                <span className="ps-2 fw-bold">
                    {produce.userName}
                </span>
                    <i className="bi bi-check-circle ps-1 wd-blue"></i>
                    <div className="ps-2">
                        {produce.title}
                    </div>
                    <div className="mt-2 ps-2">
                        <img height={200} className="rounded-4 w-100" src={`/images/${produce.producePicture}`}/>
                    </div>
                </div>
            </li>


    );
};
export default ProduceItem;