import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeStore } from "./farmer-reducer";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";

function FarmerProfile() {
  const { farmer } = useSelector((state) => state.farmer);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeStore(farmer));
  };
  return (
    <div>
      <div className="row">
        <div className="col-1">
          <i className="fa fa-arrow-left center"></i>
        </div>
        <div className="col-11">
          <div className="fw-bold">
            {farmer.firstName} {farmer.lastName}
          </div>
        </div>
        <img src={farmer.bannerPicture} className="img-fluid banner" alt="" />
        <div className="row mt-2">
          <div className="col-1">
            <img
              src={farmer.profilePicture}
              className="rounded-circle profile-picture ms-3"
              alt=""
            />
          </div>
          <div className="col-8 ms-4">
            <div className="fw-bold ms-4 mt-4">
              {farmer.firstName} {farmer.lastName}
            </div>
            <div className="text-muted ms-4">{farmer.handle}</div>
          </div>
          <div className="col-2 ms-5">
            <Link to="/profile/farmer/edit-profile">
              <button className="rounded-pill float-end mt-2 button">
                Edit profile
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-black ms-3 mt-2">{farmer.bio}</div>
        <div className="text-muted ms-3 mt-2">
          <i className="fa fa-location-dot mt-2"></i>
          <span className="ms-1">{farmer.location}</span>
          <i className="fa fa-birthday-cake ms-3 mt-2"></i>
          <span className="ms-1">{farmer.dateOfBirth}</span>
          <i className="fa-regular fa-calendar ms-3 mt-2"></i>
          <span className="ms-1">Joined {farmer.dateJoined}</span>
        </div>
        <div className="text-muted ms-3 mt-2">
          <span className="fw-bold text-black">{farmer.followingCount}</span>
          <span className="ms-1">Following</span>
          <span className="fw-bold text-black ms-3">
            {farmer.followersCount}
          </span>
          <span className="ms-1">Followers</span>
        </div>
      </div>
      <div className="card card-style mt-2">
        <img
          src={farmer.storePicture}
          className="card-img-top store-picture"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{farmer.storeName}</h5>
          <p className="card-text description-text">
            {farmer.storeDescription}
          </p>
          <div className="d-flex justify-content-between">
            {farmer.closed ? (
              <button className="btn btn-secondary">Store Closed</button>
            ) : (
              <button href="#" className="btn button-blue">
                Home Page
              </button>
            )}
            <button
              onClick={() => handleClose(farmer)}
              className="btn btn-warning ms-2"
            >
              {farmer.closed ? "Open Store" : "Close Store"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FarmerProfile;
