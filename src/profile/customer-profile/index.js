import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {profileThunk, updateUserThunk} from "../../services/users/users-thunks";
import {findUserById} from "../../services/users/users-service";
import {
    userFollowsUser,
    findFollowsByFollowerId,
    findFollowsByFollowedId,
    findFollowsByFollowerIdAndFollowedId,
    userUnfollowsUser,
} from "../../services/follows-service";
import {useNavigate, useParams} from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../index.css";

function CustomerProfile() {
    const {userId} = useParams();
    let currentUser = useSelector((state) => state.users);
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [profile, setProfile] = useState(currentUser);
    const [following, setFollowing] = useState([]);
    const [follows, setFollows] = useState([]);
    const [follow, setFollow] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchProfile = async () => {
        if (userId) {
            const user = await findUserById(userId);
            setProfile(user);
            return;
        }
        const response = await dispatch(profileThunk());
        setProfile(response.payload);
    };

    const fetchFollow = async () => {
        const data = await findFollowsByFollowerIdAndFollowedId(currentUser._id, profile._id);
        setFollow(data);
    };

    const loadScreen = async () => {
        await fetchProfile();
        await fetchFollowing();
        await fetchFollowers();
        await fetchFollow();
    };

    const followUser = async () => {
        console.log(currentUser._id, profile._id);
        await dispatch(updateUserThunk({
            ...profile,
            followersCount: profile.followersCount + 1,
        }));
        await userFollowsUser(currentUser._id, profile._id);
        await dispatch(updateUserThunk({
            ...currentUser,
            followingCount: currentUser.followingCount + 1,
        }));
        await fetchFollow();
    };

    const unfollowUser = async () => {
        await dispatch(updateUserThunk({
            ...profile,
            followersCount: profile.followersCount - 1,
        }));
        await userUnfollowsUser(currentUser._id, profile._id);
        await dispatch(updateUserThunk({
            ...currentUser,
            followingCount: currentUser.followingCount - 1,
        }));
    }

    const fetchFollowing = async () => {
        const following = await findFollowsByFollowerId(profile._id);
        setFollowing(following);
    };
    const fetchFollowers = async () => {
        const follows = await findFollowsByFollowedId(profile._id);
        setFollows(follows);
    };

    const closeStore = async () => {
        await dispatch(updateUserThunk({
            ...profile,
            opened: !profile.opened,
        }));
        await fetchProfile();
    }

    const handleClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        loadScreen();
    }, [userId, profile._id, follow]);

    return (
        <div>
            {profile && (
                <div>
                    <div className="row">
                        <div className="col-1">
                            <i onClick={handleClick} className="fa fa-arrow-left center"></i>
                        </div>
                        <div className="col-11">
                            <div className="fw-bold">
                                {profile.firstName} {profile.lastName} {profile.businessName}
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
                                    {profile.firstName} {profile.lastName} {profile.businessName}
                                </div>
                                <div className="text-muted ms-4">{profile.handle}</div>
                            </div>
                            <div className="col-2 ms-5">
                                {profile._id !== currentUser._id ? (
                                    follow ? (
                                        <button onClick={unfollowUser}
                                                className="rounded-pill float-end mt-2 btn btn-sm btn-warning">
                                            Unfollow
                                        </button>
                                    ) : (
                                        <button onClick={followUser}
                                                className="rounded-pill float-end mt-2 btn btn-sm btn-warning">
                                            Follow
                                        </button>
                                    )
                                ) : (
                                    <Link to={"/profile/customer/edit-profile"}>
                                        <button className="rounded-pill float-end mt-2 button">
                                            Edit profile
                                        </button>
                                    </Link>
                                )}
                                {profile._id === currentUser._id && currentUser.role === "FARMER" ? (
                                    profile.opened ? (
                                    <button onClick={closeStore}
                                        className="btn btn-sm btn-danger float-end mt-2 rounded-pill me-3">
                                        Close Store
                                    </button>
                                    ) : (
                                        <button onClick={closeStore}
                                            className="btn btn-sm btn-success float-end mt-2 rounded-pill me-3">
                                            Open Store
                                        </button>
                                    )
                                ) : (<> </>)}
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
                            {profile._id !== currentUser._id ? (
                                <></>
                            ) : (
                                <><i className="fa fa-birthday-cake ms-3 mt-2"></i>
                                <span className="ms-1">{profile.dateOfBirth}</span></>
                            )}
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
            {follows && (
                <div>
                    <h2 className="text-center mt-4">Followers</h2>
                    <ul className="list-group flex-user">
                        {follows.map((follow) => (
                            <li key={follow._id} className="list-group-item border-transparent">
                                <Link to={`/profile/${follow.follower._id}`}>
                                    <img src={follow.follower.profilePicture}
                                         alt="" className="rounded-circle profile-picture"/>
                                    <div className="text-center">{follow.follower.username}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {following && (
                <div>
                    <h2 className="text-center mt-4">Following</h2>
                    <ul className="list-group flex-user">
                        {following.map((follow) => (
                            <li key={follow._id} className="list-group-item border-transparent">
                                <Link to={`/profile/${follow.followed._id}`}>
                                    <img src={follow.followed.profilePicture}
                                         alt="" className="rounded-circle profile-picture"/>
                                    <div className="text-center">{follow.followed.username}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CustomerProfile;
