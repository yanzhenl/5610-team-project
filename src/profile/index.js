import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import CustomerProfile from "./customer-profile";
import customerReducer from "./customer-profile/customer-reducer";
import EditCustomerProfile from "./customer-profile/edit-profile";
import AdministratorProfile from "./administrator-profile";
import administratorReducer from "./administrator-profile/administrator-reducer";
import EditAdministratorProfile from "./administrator-profile/edit-profile";
import storeReducer from "./administrator-profile/store-reducer";
import FarmerProfile from "./farmer-profile";
import farmerReducer from "./farmer-profile/farmer-reducer";
import EditFarmerProfile from "./farmer-profile/edit-profile";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "../services/users/users-reducer";
const store = configureStore({
  reducer: {
    customer: customerReducer,
    administrator: administratorReducer,
    farmer: farmerReducer,
    store: storeReducer,
    users: usersReducer,
  },
});

function ProfileComponent() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<CustomerProfile />} />
          <Route path="customer" element={<CustomerProfile />} />
          <Route path="/:userId" element={<CustomerProfile />} />
          <Route path="farmer" element={<FarmerProfile />} />
          <Route path="farmer/edit-profile" element={<EditFarmerProfile />} />
          <Route path="customer/edit-profile" element={<EditCustomerProfile />} />
          <Route path="administrator" element={<AdministratorProfile />} />
          <Route path="administrator/edit-profile" element={<EditAdministratorProfile />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default ProfileComponent;
