import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from "./profile";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import productReducer from "./product/product-reducer";
import FarmersHomeComponent from "./farmers-home";
import HomePage from "./home";
import ProductDetail from "./product/product-detail";
const store = configureStore(
    {reducer: {products: productReducer}});

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/profile/*" element={<ProfileComponent/>} />
                <Route path="/farmers-home/*" element={<FarmersHomeComponent/>}/>
                <Route path="/product/detail/*" element={<ProductDetail/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
