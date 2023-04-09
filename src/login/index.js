import React, { useState } from "react";
import "./index.css";
import {Link} from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router";
import {loginThunk} from "../services/users/users-thunks";


function Login() {
    const {currentUser} = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = () => {
        try {
            dispatch(loginThunk({ username, password }));
            navigate("/home");
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <div className="wd-login-background">
            <div className="wd-login-page">
                <div className="wd-login-container">
                    <h2>Welcome back</h2>

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

                    <button onClick={login} className="wd-login-button" type="submit">Log in</button>

                    <div>
                        {currentUser && (
                            <div>
                                <h2>{currentUser.username}</h2>
                                <h2>{currentUser.password}</h2>
                            </div>
                        )}
                    </div>


                    <div className="mt-4">
                        Don't have an account?
                        <Link to="/signup">
                            <span> Sign up now</span>
                        </Link>
                        .
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;

