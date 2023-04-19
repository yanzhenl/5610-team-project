import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findAllUsersThunk, profileThunk, updateUserThunk} from "../../services/users/users-thunks";
import {findUserById} from "../../services/users/users-service";
import {useNavigate, useParams} from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";

function CustomerProfile() {
    const {userId} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const fetchProfile = async () => {
        if (userId) {
            const user = await findUserById(userId);
            setProfile(user);
            return;
        }
        const response = await dispatch(profileThunk());
        setProfile(response.payload);
    };
    const loadScreen = async () => {
        await fetchProfile();
    };

    useEffect(() => {
        loadScreen();
    }, [userId]);

    return (
        <div>
            {profile && (
                <div>
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-arrow-left center"></i>
                        </div>
                        <div className="col-11">
                            <div className="fw-bold">
                                {profile.firstName} {profile.lastName}
                            </div>
                        </div>
                        <img
                            src={profile.bannerPicture}
                            className="img-fluid banner"
                            alt=""
                        />
                        <div className="row mt-2">
                            <div className="col-1">
                                <img
                                    src={profile.profilePicture}
                                    className="rounded-circle profile-picture ms-3"
                                    alt=""
                                />
                            </div>
                            <div className="col-8 ms-4">
                                <div className="fw-bold ms-4 mt-4">
                                    {profile.firstName} {profile.lastName}
                                </div>
                                <div className="text-muted ms-4">{profile.handle}</div>
                            </div>
                            <div className="col-2 ms-5">
                                {profile !== currentUser ? (
                                    <button className="rounded-pill float-end mt-2 btn btn-sm btn-warning">
                                        Follow
                                    </button>
                                ) : (
                                    <Link to={"/profile/customer/edit-profile"}>
                                    <button className="rounded-pill float-end mt-2 button">
                                    Edit profile
                                    </button>
                                    </Link>
                                )}
                                {/*<Link to={"/profile/customer/edit-profile"}>*/}
                                {/*    <button className="rounded-pill float-end mt-2 button">*/}
                                {/*        Edit profile*/}
                                {/*    </button>*/}
                                {/*</Link>*/}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-black ms-3 mt-2">{profile.bio}</div>
                        <div className="text-muted ms-3 mt-2">
                            <i className="fa fa-location-dot mt-2"></i>
                            <span className="ms-1">{profile.location}</span>
                            <i className="fa fa-birthday-cake ms-3 mt-2"></i>
                            <span className="ms-1">{profile.dateOfBirth}</span>
                            <i className="fa-regular fa-calendar ms-3 mt-2"></i>
                            <span className="ms-1">Joined {profile.dateJoined}</span>
                        </div>
                        <div className="text-muted ms-3 mt-2">
              <span className="fw-bold text-black">
                {profile.followingCount}
              </span>
                            <span className="ms-1">Following</span>
                            <span className="fw-bold text-black ms-3">
                {profile.followersCount}
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
