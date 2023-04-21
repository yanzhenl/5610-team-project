import React, { useState } from "react";
import "../login/index.css";
import {Link} from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router";
import {registerThunk} from "../services/users/users-thunks";

function ConsumerRegisterForm({ firstName, setFirstName, lastName, setLastName }) {
    return (
        <div>
            <div style={{color: "gray"}}>
                Are you a consumer? Sign up with your first and last name.
            </div>
            <div className="mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <FloatingLabel controlId="floatingFirstName" label="First name" className="mb-4"
                                       htmlFor="firstName">
                            <Form.Control type="firstName" placeholder="FirstName"
                                          value={firstName}
                                          onChange={(e) => setFirstName(e.target.value)}
                                          required/>
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel controlId="floatingLastName" label="Last name" className="mb-4"
                                       htmlFor="lastName">
                            <Form.Control type="lastName" placeholder="LastName"
                                          value={lastName}
                                          onChange={(e) => setLastName(e.target.value)}
                                          required/>
                        </FloatingLabel>
                    </div>
                </div>
            </div>

        </div>
    );
}

function FarmerRegisterForm({ businessName, setBusinessName }) {
    return (
        <div>
            <div style={{color: "gray"}}>
                Are you a Farmer? Sign up with your business name.
            </div>
            <div className="mt-3">
                <FloatingLabel controlId="floatingBusinessName" label="Business name" className="mb-4"
                               htmlFor="businessName">
                    <Form.Control type="name" placeholder="BusinessName"
                                  value={businessName}
                                  onChange={(e) => setBusinessName(e.target.value)}
                                  required/>
                </FloatingLabel>
            </div>
        </div>

    )
}


function Register() {
    const {currentUser} = useSelector((state) => state.users);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    const [isConsumer, setIsConsumer] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [businessName, setBusinessName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const register = async () => {
        try {
            if (password !== confirmPassword) {
                setErrorMessage("Passwords do not match.");
                return;
            }

            let user;
            if (isConsumer) {
                user = { username, password, firstName, lastName };
            } else {
                user = { username, password, businessName };
            }

            const response = await dispatch(registerThunk(user));
            if (response.error) {
                setErrorMessage(response.payload || "An error occurred during registration.");
                return;
            }

            // const currentUser = { ...user };
            // localStorage.setItem("currentUser", JSON.stringify(currentUser));


            if (isConsumer) {
                navigate("/home");
            } else {
                navigate("/profile");
            }
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <div className="wd-login-background">
            <div className="wd-login-page">
                <div className="wd-login-container">

                    <Nav className="signup-nav mb-4" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link
                                className={`signup-link ${isConsumer ? "active-link" : ""}`}
                                onClick={() => setIsConsumer(true)}>
                                Consumer
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Nav.Link
                                className={`signup-link ${!isConsumer ? "active-link" : ""}`}
                                onClick={() => setIsConsumer(false)}>
                                Farmer
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {isConsumer ? <ConsumerRegisterForm firstName={firstName}
                                                        setFirstName={setFirstName}
                                                        lastName={lastName}
                                                        setLastName={setLastName}/> :
                        <FarmerRegisterForm businessName={businessName} setBusinessName={setBusinessName}/>}

                    <div>
                        <FloatingLabel controlId="floatingName" label="Username" className="mb-4"
                                       htmlFor="username">
                            <Form.Control type="username" placeholder="Username"
                                          value={username}
                                          onChange={(e) => setUsername(e.target.value)}
                                          required/>
                        </FloatingLabel>
                    </div>

                    <div>
                        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-4"
                                       htmlFor="password">
                            <Form.Control type="password" placeholder="Password"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)}
                                          required/>
                        </FloatingLabel>
                    </div>

                    <div className="mb-4 pb-1">
                        <FloatingLabel controlId="floatingConfirmPassword" label="Confirm password"
                                       htmlFor="confirmPassword">
                            <Form.Control type="password" placeholder="confirmPassword"
                                          value={confirmPassword}
                                          onChange={(e) => setConfirmPassword(e.target.value)}
                                          required/>
                        </FloatingLabel>
                    </div>

                    {errorMessage && (
                        <div className="wd-error-message">
                            <i className="bi bi-exclamation-circle-fill pe-1"></i>
                            {errorMessage}
                        </div>
                    )}

                    <button onClick={register} className="wd-login-button" type="submit">Register</button>

                    {/*<div>*/}
                    {/*    {currentUser && (*/}
                    {/*        <div>*/}
                    {/*            <h2>{currentUser.username}</h2>*/}
                    {/*            <h2>{currentUser.password}</h2>*/}
                    {/*            <h2>{currentUser.firstName}</h2>*/}
                    {/*            <h2>{currentUser.lastName}</h2>*/}
                    {/*            <h2>{currentUser.businessName}</h2>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</div>*/}

                    <div className="mt-4">
                        Already have an account?
                        <Link to="/login">
                            <span> Log in</span>
                        </Link>
                        .
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;




