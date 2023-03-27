import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from "./profile";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/profile/*" element={<ProfileComponent/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
