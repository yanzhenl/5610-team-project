import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, updateUserThunk } from "../../services/users/users-thunks";
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
    }, [profile]);

    const updateProfile = async () => {
        if (profile){
            await dispatch(updateUserThunk(profile));
        }
        dispatch(profileThunk());
        navigate("/profile");
    };

    const handleProfilePicUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfile({...profile, profilePicture: reader.result});
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleBannerPicUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfile({...profile, bannerPicture: reader.result});
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return(
        <div>
            {profile && (
                <div>
                    <div className="row">
                        <div className="col-1">
                            <Link to="/profile"><i className="bi bi-x-lg text-muted"></i></Link>
                        </div>
                        <div className="col-9">
                            <span className="fw-bold mt-4">Edit profile</span>
                        </div>
                        <div className="col-2">
                            <button
                                className="rounded-pill float-end save-button me-2"
                                onClick={updateProfile}>
                                Save
                            </button>

                        </div>

                        <div className="position-relative">
                            <img src={profile.bannerPicture} className="img-fluid mt-2 mb-4 banner" alt="" />
                            <label className="banner-upload-icon-container">
                                <i className="bi bi-camera-fill upload-icon"></i>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="upload-input"
                                    onChange={handleBannerPicUpload}
                                />
                            </label>
                            <img src={profile.profilePicture} className="rounded-circle profile-picture-edit ms-3" alt="" />
                            <label className="profile-upload-icon-container">
                                <i className="bi bi-camera-fill upload-icon"></i>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="upload-input"
                                    onChange={handleProfilePicUpload}
                                />
                            </label>
                        </div>

                    </div>

                    {profile.role !== "FARMER" && (
                        <>
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
                        </>
                    )}

                    {profile.role === "FARMER" && (
                        <>
                            <form className="form-floating mt-5">
                                <input value={profile.businessName} onChange={(e) => setProfile({...profile, businessName: e.target.value})}
                                       className="form-control"/>
                                <label className="floatingInputValue">First name</label>
                            </form>
                        </>
                    )}

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
