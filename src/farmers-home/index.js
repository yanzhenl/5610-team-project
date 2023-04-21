import React, {useEffect, useState} from 'react'
import ProductList from "../product";
import {useParams} from "react-router";


const FarmersHomeComponent = () => {
    const { businessName: paramBusinessName } = useParams();
    const [businessName, setBusinessName] = useState(paramBusinessName);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        if (paramBusinessName) {
            setBusinessName(paramBusinessName);
        }
    }, [paramBusinessName]);

    return (
        <>
            <div className="row mb-4">
                <div className="position-relative mb-2 wd-cropped-image wd-image-container">
                    <img src="/images/background.jpeg" className="w-100 mb-3"/>

                    {(!currentUser || currentUser.role !== "FARMER") && (
                        <span className="position-absolute wd-picture-letter
                                     text-light wd-text-shadow
                                     d-none d-lg-block">
                        Welcome to {businessName}'s Home Page
                        </span>
                    )}
                </div>

                <div className="ms-3 mt-3 wd-font-size">
                    {currentUser && currentUser.role === "FARMER" && (
                        <div>
                            Hi {currentUser.businessName}! Your products are ready in the market.
                        </div>
                    )}
                </div>
            </div>

            <div>
                <ProductList/>
            </div>
        </>
    );
};

export default FarmersHomeComponent
