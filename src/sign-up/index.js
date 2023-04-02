import React, { useState } from "react";
import "../login/index.css";
import {Link} from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., call an API, update the state, etc.)
    };

    return (
        <div className="wd-login-background">
            <div className="wd-login-page">
                <div className="wd-login-container">
                    <h2>Create account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4 pt-2 ">
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
                                <Form.Control type="confirmPassword" placeholder="confirmPassword"
                                              value={confirmPassword}
                                              onChange={(e) => setConfirmPassword(e.target.value)}
                                              required/>
                            </FloatingLabel>
                        </div>


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
