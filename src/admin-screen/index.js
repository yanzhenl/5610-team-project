import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { findAllUsersThunk } from "../services/users/users-thunks";

function AdminScreen() {
    const { currentUser, users } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);

    const groupedUsers = users.reduce((acc, user) => {
        if (!acc[user.role]) {
            acc[user.role] = [];
        }
        acc[user.role].push(user);
        return acc;
    }, {});

    return (
        <div>
            <h1 className="text-center mt-2">Current users</h1>
            {["ADMIN", "FARMER", "CONSUMER"].map((role) => (
                <div key={role}>
                    <h2 className="text-center mt-4">
                        {role === "ADMIN"
                            ? "Administrators"
                            : role === "FARMER"
                                ? "Farmers"
                                : "Consumers"}
                    </h2>
                    <div className="container">
                        <div className="row">
                            {groupedUsers[role] &&
                                groupedUsers[role].map((user) => (
                                    <div key={user.id} className="col-12 col-md-2 mb-4">
                                        <img width={100} className="rounded-pill" src={`/images/${user.profilePicture}`} />

                                        <div className="">
                                            <div className="mt-2">
                                                {user.username}
                                            </div>
                                            <div style={{color: "gray"}}>
                                                {user.handle}
                                            </div>

                                            {user.firstName} {user.lastName} {user.businessName}
                                        </div>


                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AdminScreen;

