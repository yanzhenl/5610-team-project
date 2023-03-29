import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route} from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomePage from "./home-page";


function Home() {
    return (

            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                     style={{"position": "relative"}}>
                    <HomePage/>
                </div>
            </div>
    );
}

export default Home