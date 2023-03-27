import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from "./profile";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import productReducer from "./product/product-reducer";
const store = configureStore(
    {reducer: {products: productReducer}});

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/profile/*" element={<ProfileComponent/>} />
                </Routes>
                </div>
              </BrowserRouter>
      </Provider>
  );
}

export default App;
