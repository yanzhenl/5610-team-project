import React from "react";
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import "../home/index.css";
import {logoutThunk} from "../services/users/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";


const NavigationSidebar = () => {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="wd-sticky-sidebar">
            <div className="list-group">

                <a className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}>
                    <i className="fa-solid fa-seedling float-start pt-1"></i>
                    <span className="d-none d-xl-block float-start ms-2">FreshVibes</span>
                </a>
                <Link to="/home" className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}>
                    <i className="bi bi-house-fill float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Home</span>
                </Link>
                <Link to="/explore-farmer" className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-globe2 float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Explore farmer</span>
                </Link>
                {!currentUser && (
                    <>
                        <Link
                            to="/login"
                            className={`list-group-item list-group-item-action ${
                                active === "login" ? "active" : ""
                            }`}>
                            <i className="bi bi-person-fill-up float-start"></i>
                            <span className="d-none d-xl-block float-start ms-2">Login</span>
                        </Link>
                        <Link
                            to="/register"
                            className={`list-group-item list-group-item-action ${
                                active === "register" ? "active" : ""
                            }`}>
                            <i className="bi bi-person-plus float-start"></i>
                            <span className="d-none d-xl-block float-start ms-2">Register</span>
                        </Link>
                    </>
                )}

                {currentUser && (
                    <Link to="/profile" className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}>
                        <i className="bi bi-person-circle float-start"></i>
                        <span className="d-none d-xl-block float-start ms-2">Profile</span>
                    </Link>
                )}

                <Link to="/cart-list" className={`list-group-item list-group-item-action
                    ${active === 'cart'?'active':''}`}>
                    <i className="bi bi-cart4 float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Cart</span>
                </Link>

                {currentUser && (
                    <Link to="/order-history" className={`list-group-item list-group-item-action
                    ${active === 'orders'?'active':''}`}>
                        <i className="bi bi-bag-check float-start"></i>
                        <span className="d-none d-xl-block float-start ms-2">Orders</span>
                    </Link>
                )}

            </div>

            <div>
                {currentUser && (
                    <button
                        className="btn btn-danger mt-2 w-100"
                        onClick={() => {
                            dispatch(logoutThunk());
                            navigate("/login");
                        }}>
                        Log out
                    </button>)}
            </div>

        </div>
    );
};
export default NavigationSidebar;