import React from "react";

function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="email" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>


        </div>
    );
}

export default Login;