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
                    <ul className="list-group">
                        {groupedUsers[role] &&
                            groupedUsers[role].map((user) => (
                                <li key={user.id} className="list-group-item">
                                    <img width={50} className="" src={`/images/${user.profilePicture}`} />
                                    {user.username} {user.firstName} {user.lastName} {user.role}

                                </li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default AdminScreen;
