import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import "../home/index.css";
import { logoutThunk } from "../services/users/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavigationSidebar = () => {
    let { currentUser } = useSelector((state) => state.users);
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const paths = pathname.split("/");
    const initialActive = paths[2];
    const [active, setActive] = useState(initialActive);

    const handleClick = (newActive) => {
        setActive(newActive);
    };

    const handleLogout = async () => {
        await dispatch(logoutThunk());
        setActive("");
        localStorage.removeItem("currentUser"); // remove currentUser from localStorage
        navigate("/login");
    };


    return (
        <div className="wd-sticky-sidebar">
            <div className="list-group">

                <a className={`list-group-item list-group-item-action
                    `}>
                    <i className="fa-solid fa-seedling float-start pt-1"></i>
                    <span className="d-none d-xl-block float-start ms-2">FreshVibes</span>
                </a>


                {(!currentUser || currentUser.role !== "FARMER") && (
                    <Link to="/home" className={`list-group-item list-group-item-action
                    ${active === 'home'?'wd-active':''}`} onClick={() => handleClick("home")}>
                        <i className="bi bi-house-fill float-start"></i>
                        <span className="d-none d-xl-block float-start ms-2">Home</span>
                    </Link>
                )}


                {currentUser && currentUser.role === "FARMER" && (
                    <Link to="/farmers-home" className={`list-group-item list-group-item-action
                    ${active === 'farmers-home'?'wd-active':''}`} onClick={() => handleClick("farmers-home")}>
                        <i className="bi bi-house-fill float-start"></i>
                        <span className="d-none d-xl-block float-start ms-2">Farmer's Home</span>
                    </Link>
                )}

                {(!currentUser || currentUser.role !== "FARMER") && (
                    <Link to="/explore-farmer" className={`list-group-item list-group-item-action
                    ${active === 'explore-farmer'?'wd-active':''}`} onClick={() => handleClick("explore-farmer")}>
                        <i className="bi bi-globe2 float-start"></i>
                        <span className="d-none d-xl-block float-start ms-2">Explore farmer</span>
                    </Link>
                )}

                {currentUser && currentUser.role === "ADMIN" && (
                    <Link to="/users" className={`list-group-item list-group-item-action
                        ${active === 'users'?'wd-active':''}`} onClick={() => handleClick("users")}>
                        <i className="bi bi-people-fill float-start"></i>
                        <span className="d-none d-xl-block float-start ms-2">Users</span>
                    </Link>
                )}

                {!currentUser && (
                    <>
                        <Link
                            to="/login"
                            className={`list-group-item list-group-item-action ${
                                active === "login" ? "wd-active" : ""
                            }`} onClick={() => handleClick("login")}>
                            <i className="bi bi-person-fill-up float-start"></i>
                            <span className="d-none d-xl-block float-start ms-2">Login</span>
                        </Link>
                        <Link
                            to="/register"
                            className={`list-group-item list-group-item-action ${
                                active === "register" ? "wd-active" : ""
                            }`} onClick={() => handleClick("register")}>
                            <i className="bi bi-person-plus float-start"></i>
                            <span className="d-none d-xl-block float-start ms-2">Register</span>
                        </Link>
                    </>
                )}

                {currentUser && (
                    <Link to="/profile" className={`list-group-item list-group-item-action
                    ${active === 'profile'?'wd-active':''}`} onClick={() => handleClick("profile")}>
                        <i className="bi bi-person-circle float-start"></i>
                        <span className="d-none d-xl-block float-start ms-2">Profile</span>
                    </Link>
                )}

                {currentUser && currentUser.role === "CONSUMER" && (
                    <>
                        <Link to="/cart-list" className={`list-group-item list-group-item-action
                        ${active === 'cart'?'wd-active':''}`} onClick={() => handleClick("cart")}>
                            <i className="bi bi-cart4 float-start"></i>
                            <span className="d-none d-xl-block float-start ms-2">Cart</span>
                        </Link>
                        <Link to="/order-history" className={`list-group-item list-group-item-action
                        ${active === 'orders'?'wd-active':''}`} onClick={() => handleClick("orders")}>
                            <i className="bi bi-bag-check float-start"></i>
                            <span className="d-none d-xl-block float-start ms-2">Orders</span>
                        </Link>
                    </>
                )}
            </div>

            <div>
                {currentUser && (
                    <button
                        className="btn btn-danger mt-2 w-100"
                        onClick={handleLogout}>
                        Log out
                    </button>
                )}
            </div>

        </div>
    );
};
export default NavigationSidebar;
