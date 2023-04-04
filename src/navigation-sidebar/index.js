import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "../home/index.css";



const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="wd-sticky-sidebar">
            <div className="list-group">
                <Link to="/home" className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`}>
                    <i className="bi bi-house-fill float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Home</span>
                </Link>
                <Link to="/" className={`list-group-item list-group-item-action
                    ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-hash float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Explore</span>
                </Link>
                <Link to="/" className={`list-group-item list-group-item-action
                    ${active === 'best sellers'?'active':''}`}>
                    <i className="bi bi-person-hearts float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Best Sellers</span>
                </Link>
                <Link to="/login" className={`list-group-item list-group-item-action
                    ${active === 'login'?'active':''}`}>
                    <i className="bi bi-person-fill-up float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Login</span>
                </Link>
                <Link to="/signup" className={`list-group-item list-group-item-action
                    ${active === 'sign up'?'active':''}`}>
                    <i className="bi bi-person-plus float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Sign up</span>
                </Link>
                <Link to="/profile" className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}>
                    <i className="bi bi-person-circle float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Profile</span>
                </Link>
                <Link to="/cart-list" className={`list-group-item list-group-item-action
                    ${active === 'cart'?'active':''}`}>
                    <i className="bi bi-cart4 float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Cart</span>
                </Link>
                <Link to="/order-history" className={`list-group-item list-group-item-action
                    ${active === 'orders'?'active':''}`}>
                    <i className="bi bi-bag-check float-start"></i>
                    <span className="d-none d-xl-block float-start ms-2">Orders</span>
                </Link>
            </div>
        </div>
    );
};
export default NavigationSidebar;