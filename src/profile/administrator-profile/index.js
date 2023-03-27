import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css';

function AdministratorProfile () {
    const { administrator } = useSelector((state) => state.administrator);
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="fa fa-arrow-left center"></i> 
                </div>
                <div className="col-11">
                    <div className="fw-bold">{administrator.firstName} {administrator.lastName}</div>
                </div>
                <img src = {administrator.bannerPicture} className="img-fluid banner" alt=""/>
                <div className="row mt-2">
                    <div className="col-1">
                        <img src = {administrator.profilePicture} className="rounded-circle profile-picture ms-3" alt=""/>
                    </div>
                    <div className="col-9">
                        <div className="fw-bold ms-4 mt-4">{administrator.firstName} {administrator.lastName}</div>
                        <div className="text-muted ms-4">{administrator.handle}</div>
                    </div>
                    <div className="col-2">
                        <Link to="/tuiter/edit-profile">
                        <button className="rounded-pill float-end mt-2 button">Edit profile</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-black ms-3 mt-2">{administrator.bio}</div>
                <div className="text-muted ms-3 mt-2">
                    <i className="fa fa-location-dot mt-2"></i>
                    <span className="ms-1">{administrator.location}</span>
                    <i className="fa fa-birthday-cake ms-3 mt-2"></i>
                    <span className="ms-1">{administrator.dateOfBirth}</span>
                    <i className="fa-regular fa-calendar ms-3 mt-2"></i>
                    <span className="ms-1">Joined {administrator.dateJoined}</span>
                </div>
                <div className="text-muted ms-3 mt-2">
                    <span className="fw-bold text-black">{administrator.followingCount}</span>
                    <span className="ms-1">Following</span>
                    <span className="fw-bold text-black ms-3">{administrator.followersCount}</span>
                    <span className="ms-1">Followers</span>
                </div>
            </div>
        </div>
    );
};
export default AdministratorProfile;