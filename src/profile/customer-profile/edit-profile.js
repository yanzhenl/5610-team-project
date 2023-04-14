import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, updateUserThunk } from "../../services/users/users-thunks";
import { findUserById } from "../../services/users/users-service";
import { editProfile } from "./customer-reducer";
import {Link} from "react-router-dom";
import "../index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

function EditCustomerProfile () {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(currentUser);
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    const updateProfile = async () => {
        if (profile){
            dispatch(updateUserThunk(profile));
        }
    };

    return(
        <div>
            {profile && (
                <div>
            <div className="row">
                <div className="col-1">
                    <Link to="/profile/customer"><i className="bi bi-x-lg text-muted"></i></Link>
                </div>
                <div className="col-9">
                    <span className="fw-bold mt-4">Edit profile</span>
                </div>
                <div className="col-2">
                        <button className="rounded-pill float-end save-button me-2" onClick={() => {
                            dispatch(updateProfile);
                            navigate("/profile");
                        }}>Save</button>
                </div>
                
                <div className="position-relative">
                    <img src = {profile.bannerPicture} className="img-fluid mt-2 mb-4 banner" alt=""/>
                    <img src = {profile.profilePicture} className="rounded-circle profile-picture-edit ms-3" alt=""/>
                </div>
            </div>

            <form className="form-floating mt-5">
                <input value={profile.firstName} onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                       className="form-control"/>
                <label className="floatingInputValue">First name</label>
            </form>

            <form className="form-floating mt-4">
                <input value={profile.lastName} onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                       className="form-control"/>
                <label className="floatingInputValue">Last name</label>
            </form>

            <form className="form-floating mt-4">
                <textarea value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})}
                          className="form-control textarea-height"/>
                <label className="floatingInputValue">Bio</label>
            </form>

            <form className="form-floating mt-4">
                <input value={profile.location} onChange={(e) => setProfile({...profile, location: e.target.value})}
                       className="form-control"/>
                <label className="floatingInputValue">Location</label>
            </form>

            <div className="mt-4 ms-2">
                <span className="text-muted">Birth date ·</span>
                <button className="text-primary transparent-button" 
                    onClick={() => setProfile({...profile, editing: !profile.editing})}>Edit</button>
                {profile.editing ? (
                    <div><input onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})} value={profile.dateOfBirth}/></div>
                ) : (
                    <div>{profile.dateOfBirth}</div>
                )}
            </div>
                </div>
            )}
        </div>
    )
}

export default EditCustomerProfile;