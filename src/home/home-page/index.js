import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {profileThunk} from "../../services/users/users-thunks";
import "../index.css";

const HomePage = () => {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);

    return(
        <>
            <div className="row mb-4">
                <div className="position-relative mb-2
                                wd-cropped-image wd-image-container">
                    <img src="/images/background.jpeg"
                         className="w-100 mb-3"/>

                    <span className="position-absolute wd-picture-letter
                                   text-light wd-text-shadow
                                   d-none d-lg-block">
                        Welcome to your local Farmer's Market
                    </span>
                </div>

                <div className="position-relative mt-3">
                    <input placeholder="Search produce"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>

            </div>

            <div className="ms-3 mb-2 wd-font-size">
                {currentUser && (
                    <div>
                        Hi {currentUser.firstName}! Here are some recommendations for you today.
                    </div>
                )}
            </div>


        </>
    );
};
export default HomePage;
