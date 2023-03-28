import React from "react";
import ProduceList from "../produce-list";
import "../index.css";

const HomePage = () => {
    return(
        <>
            <div className="row mb-4">
                {/*<img src={'/images/home-banner.png'} className="mb-3"/>*/}
                <div className="position-relative mb-2">
                    <img src="/images/home-banner.png" className="w-100 mb-3"/>
                    <h1 className="position-absolute wd-picture-letter text-warning">
                        Welcome to your local Farmer's Market</h1>
                </div>

                <div className="col-11 position-relative">
                    <input placeholder="Search produce"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>


            <ProduceList/>
        </>
    );
};
export default HomePage;