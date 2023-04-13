import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { profileThunk } from "../../services/users/users-thunks";
import { useNavigate, useParams } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";

function CustomerProfile() {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  console.log("currentUser:", currentUser);

  return (
    <div>
      {currentUser && (
        <div>
          <div className="row">
            <div className="col-1">
              <i className="fa fa-arrow-left center"></i>
            </div>
            <div className="col-11">
              <div className="fw-bold">
                {currentUser.firstName} {currentUser.lastName}
              </div>
            </div>
            <img
              src={currentUser.bannerPicture}
              className="img-fluid banner"
              alt=""
            />
            <div className="row mt-2">
              <div className="col-1">
                <img
                  src={currentUser.profilePicture}
                  className="rounded-circle profile-picture ms-3"
                  alt=""
                />
              </div>
              <div className="col-8 ms-4">
                <div className="fw-bold ms-4 mt-4">
                  {currentUser.firstName} {currentUser.lastName}
                </div>
                <div className="text-muted ms-4">{currentUser.handle}</div>
              </div>
              <div className="col-2 ms-5">
                <Link to="/profile/customer/edit-profile">
                  <button className="rounded-pill float-end mt-2 button">
                    Edit profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="text-black ms-3 mt-2">{currentUser.bio}</div>
            <div className="text-muted ms-3 mt-2">
              <i className="fa fa-location-dot mt-2"></i>
              <span className="ms-1">{currentUser.location}</span>
              <i className="fa fa-birthday-cake ms-3 mt-2"></i>
              <span className="ms-1">{currentUser.dateOfBirth}</span>
              <i className="fa-regular fa-calendar ms-3 mt-2"></i>
              <span className="ms-1">Joined {currentUser.dateJoined}</span>
            </div>
            <div className="text-muted ms-3 mt-2">
              <span className="fw-bold text-black">
                {currentUser.followingCount}
              </span>
              <span className="ms-1">Following</span>
              <span className="fw-bold text-black ms-3">
                {currentUser.followersCount}
              </span>
              <span className="ms-1">Followers</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CustomerProfile;
