import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { findAllUsersThunk } from "../services/users/users-thunks";
import {Link} from "react-router-dom";


function FarmerList() {
    const { users } = useSelector((state) => state.users);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);

    const farmers = users.filter(user => user.role === 'FARMER');
    console.log(farmers);

    return (
        <div>
            <div className="row mb-4">
                <div className="position-relative mb-2
                                wd-cropped-image wd-image-container">
                    <img src="/images/farmland.jpeg"
                         className="w-100 mb-3"/>
                </div>
            </div>

            <div className="ms-1 wd-explore-title">
                Explore and follow farmers that you may like
            </div>

            <div className="container">
                <div className="row">
                    {farmers.map((farmer) => (
                        farmer.opened &&(
                            <Link to={`/farmers/${farmer.businessName}/${farmer.zipcode}`}
                                  style={{ textDecoration: 'none', color: 'black' }}>
                                <li className="list-group-item mt-3 mb-2 d-flex align-items-center farmer-container">
                                    <img width={50} className="rounded-pill float-start inner-content ms-3"
                                         src={`/images/${farmer.profilePicture}`} />
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
                                            <button className="btn btn-success rounded-pill me-1">Enter</button>
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FarmerList;