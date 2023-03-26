import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import CustomerProfile from "./customer-profile";
import AdministratorProfile from "./administrator-profile";
import FarmerProfile from "./farmer-profile";

function Profile() {
  return (
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
  );
}
export default Profile;
