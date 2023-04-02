import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from "./profile";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import productReducer from "./product/product-reducer";
import FarmersHomeComponent from "./farmers-home";
import HomePage from "./home";
import Login from "./login";
import SignUp from "./sign-up";
import ProductDetail from "./product/product-detail";
import PastReducer from "./order-history/past-reducer";
import PastOrderList from "./order-history/past-order-list";
import OrderDetailRudcer from "./order-history/detail-reducer";
import OrderDetail from "./order-history/order-detail-list";
import Cart from "./cart/cart-reducer"
import CartList from "./cart/cart-list"
import EditProductDetail from "./product/edit-product-detail";
import NavigationSidebar from "./navigation-sidebar";
import React from "react";

const store = configureStore(
    {
        reducer: {
            products: productReducer,
            past: PastReducer,
            detail:OrderDetailRudcer,
            cart: Cart
        }
    }
    );

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <div className="container">
                  <div className="row mt-2">
                      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                          <NavigationSidebar/>
                      </div>
                      <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                           style={{"position": "relative"}}>
                          <Routes>
                              <Route path="/home" element={<HomePage/>}/>
                              <Route path="/login" element={<Login/>}/>
                              <Route path="/signup" element={<SignUp/>}/>
                              <Route path="/profile/*" element={<ProfileComponent/>} />
                              <Route path="/farmers-home" element={<FarmersHomeComponent/>}/>
                              <Route path="/farmers-home/product-detail" element={<ProductDetail/>}/>
                              <Route path="/farmers-home/edit-detail" element={<EditProductDetail/>}/>
                              <Route path="/order-history" element={<PastOrderList/>}/>
                              <Route path="/order-history/detail" element={<OrderDetail/>}/>
                              <Route path="/cart-list" element={<CartList/>}/>
                          </Routes>
                      </div>
                  </div>
              </div>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
