import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Profile from "./profile";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/profile/*" element={<Profile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
