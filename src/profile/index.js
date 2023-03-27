import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import CustomerProfile from "./customer-profile";
import customerReducer from "./customer-profile/customer-reducer";
import AdministratorProfile from "./administrator-profile";
import administratorReducer from "./administrator-profile/administrator-reducer";
import FarmerProfile from "./farmer-profile";
import farmerReducer from "./farmer-profile/farmer-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    customer: customerReducer,
    administrator: administratorReducer,
    farmer: farmerReducer,
  },
});

function ProfileComponent() {
  return (
    <Provider store={store}>
      <div>
        <h1>Profile</h1>
        <Link to="/profile/administrator">Administrator</Link>|
        <Link to="/profile/customer">Customer</Link>|
        <Link to="/profile/farmer">Farmer</Link>
        <Routes>
          <Route path="administrator" element={<AdministratorProfile />} />
          <Route path="customer" element={<CustomerProfile />} />
          <Route path="farmer" element={<FarmerProfile />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default ProfileComponent;
