import React, {useEffect} from "react";
import farmerArray from "../home/produce-list/produce.json";
import FarmerItem from "./farmer-item";
import {useDispatch} from "react-redux";
import {profileThunk} from "../services/users/users-thunks";

const FarmerList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);

    return (
        <div className="container">
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
            <div className="row">
                {
                    farmerArray.map(farmer => (
                        <div key={farmer.id}>
                            <FarmerItem farmer={farmer} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};
export default FarmerList;
