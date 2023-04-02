import React, { useState } from "react";
import "./index.css";
import {Link} from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., call an API, update the state, etc.)
    };

    return (
        <div className="wd-login-background">
            <div className="wd-login-page">
                <div className="wd-login-container">
                    <h2>Welcome back</h2>
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
                        <div className="mb-3 pb-1">
                            <FloatingLabel controlId="floatingPassword" label="Password"
                                           htmlFor="password">
                                <Form.Control type="password" placeholder="Password"
                                              value={password}
                                              onChange={(e) => setPassword(e.target.value)}
                                              required/>
                            </FloatingLabel>
                        </div>

                        <button className="wd-login-button" type="submit">Log in</button>

                        <div className="mt-4">
                            Don't have an account?
                            <Link to="/signup">
                                <span> Sign up now</span>
                            </Link>
                            .
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
