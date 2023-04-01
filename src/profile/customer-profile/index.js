import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';

function CustomerProfile () {
    const { customer } = useSelector((state) => state.customer);
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fa fa-arrow-left center"></i> 
                </div>
                <div className="col-11">
                    <div className="fw-bold">{customer.firstName} {customer.lastName}</div>
                </div>
                <img src = {customer.bannerPicture} className="img-fluid banner" alt=""/>
                <div className="row mt-2">
                    <div className="col-1">
                        <img src = {customer.profilePicture} className="rounded-circle profile-picture ms-3" alt=""/>
                    </div>
                    <div className="col-9">
                        <div className="fw-bold ms-4 mt-4">{customer.firstName} {customer.lastName}</div>
                        <div className="text-muted ms-4">{customer.handle}</div>
                    </div>
                    <div className="col-2">
                        <Link to="/profile/customer/edit-profile">
                        <button className="rounded-pill float-end mt-2 button">Edit profile</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-black ms-3 mt-2">{customer.bio}</div>
                <div className="text-muted ms-3 mt-2">
                    <i className="fa fa-location-dot mt-2"></i>
                    <span className="ms-1">{customer.location}</span>
                    <i className="fa fa-birthday-cake ms-3 mt-2"></i>
                    <span className="ms-1">{customer.dateOfBirth}</span>
                    <i className="fa-regular fa-calendar ms-3 mt-2"></i>
                    <span className="ms-1">Joined {customer.dateJoined}</span>
                </div>
                <div className="text-muted ms-3 mt-2">
                    <span className="fw-bold text-black">{customer.followingCount}</span>
                    <span className="ms-1">Following</span>
                    <span className="fw-bold text-black ms-3">{customer.followersCount}</span>
                    <span className="ms-1">Followers</span>
                </div>
            </div>
        </div>
    );
};
export default CustomerProfile;