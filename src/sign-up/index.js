import React, { useState } from "react";
import "../login/index.css";
import {Link} from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

function ConsumerSignupForm() {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div>
            <div style={{color: "gray"}}>
                Are you a consumer? Sign up with your first and last name.
            </div>
            <div className="mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <FloatingLabel controlId="floatingFirstName" label="First name" className="mb-4"
                                       htmlFor="firstname">
                            <Form.Control type="firstname" placeholder="Firstname"
                                          value={firstname}
                                          onChange={(e) => setFirstname(e.target.value)}
                                          required/>
                        </FloatingLabel>
                    </div>
                    <div className="col-md-6">
                        <FloatingLabel controlId="floatingLastName" label="Last name" className="mb-4"
                                       htmlFor="lastname">
                            <Form.Control type="lastname" placeholder="Lastname"
                                          value={lastname}
                                          onChange={(e) => setLastname(e.target.value)}
                                          required/>
                        </FloatingLabel>
                    </div>
                </div>
            </div>

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

        </div>
    );
}

function FarmerSignupForm() {
    const [businessname, setBusinessname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div>
            <div style={{color: "gray"}}>
                Are you a Farmer? Sign up with your business name.
            </div>
            <div className="mt-3">
                <FloatingLabel controlId="floatingBusinessName" label="Business name" className="mb-4"
                               htmlFor="businessname">
                    <Form.Control type="name" placeholder="Businessname"
                                  value={businessname}
                                  onChange={(e) => setBusinessname(e.target.value)}
                                  required/>
                </FloatingLabel>
            </div>

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

        </div>

    )
}


function SignUp() {
    const [isConsumer, setIsConsumer] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., call an API, update the state, etc.)
    };

    return (
        <div className="wd-login-background">
            <div className="wd-login-page">
                <div className="wd-login-container">

                    <form onSubmit={handleSubmit}>
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
                        {isConsumer ? <ConsumerSignupForm /> : <FarmerSignupForm />}

                        <button className="wd-login-button" type="submit">Sign up</button>

                        <div className="mt-4">
                            Already have an account?
                            <Link to="/login">
                                <span> Log in</span>
                            </Link>
                            .
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
