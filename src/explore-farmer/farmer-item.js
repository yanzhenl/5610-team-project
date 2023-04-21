// import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import {Link} from "react-router-dom";
//
//
// const FarmerItem = (
//     {
//         farmer = {
//             "_id": 1,
//             "profilePicture": "ecofarm.png",
//             "userName": "Eco Farm",
//             "handle": "@ecofarm",
//             "description": "We grow our produce in a sustainable way and we are proud to be able to provide our community with fresh and organic produce."
//         }
//     }
// ) => {
//     return(
//         <Link to={`/farmers/${farmer._id}`}>
//             <li className="list-group-item mt-3 mb-2 d-flex align-items-center farmer-container">
//                 <img width={50} className="rounded-pill float-start inner-content ms-3" src={`/images/${farmer.profilePicture}`} />
//                 <div className="col-11 ms-2 float-start inner-content d-flex justify-content-between">
//                     <div>
//                   <span className="ps-2 fw-bold">
//                     {farmer.userName}
//                   </span>
//                         <i className="fa-solid fa-circle-check ps-1"></i>
//                         <span className="ps-2" style={{color: "dimgray"}}>
//                         {farmer.handle}
//                     </span>
//                         <div className="ps-2 inner-content">
//                             {farmer.description}
//                         </div>
//                     </div>
//                     <div className="d-flex flex-column justify-content-center">
//                         <button className="btn btn-success rounded-pill me-1">Follow</button>
//                     </div>
//                 </div>
//             </li>
//         </Link>
//     );
// };
//
// export default FarmerItem;

import React, {useEffect} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk, profileThunk} from "../services/users/users-thunks";


const FarmerItem = ({ farmer }) => {
    const { currentUser, users } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);


    return(
        <Link to={`/farmers/${users._id}`}>
            <li className="list-group-item mt-3 mb-2 d-flex align-items-center farmer-container">
                <img width={50} className="rounded-pill float-start inner-content ms-3" src={`/images/${farmer.profilePicture}`} />
                <div className="col-11 ms-2 float-start inner-content d-flex justify-content-between">
                    <div>
                  <span className="ps-2 fw-bold">
                    {farmer.businessName}
                  </span>
                        <i className="fa-solid fa-circle-check ps-1"></i>
                        <span className="ps-2" style={{color: "dimgray"}}>
                        {farmer.handle}
                    </span>
                        <div className="ps-2 inner-content">
                            {farmer.bio}
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <button className="btn btn-success rounded-pill me-1">Follow</button>
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default FarmerItem;
