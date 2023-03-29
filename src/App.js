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
import PastReducer from "./order-history/past-reducer";
import PastOrderList from "./order-history/past-order-list";
import OrderDetailRudcer from "./order-history/detail-reducer";
import OrderDetail from "./order-history/order-detail-list";
import Cart from "./cart/cart-reducer"
import CartList from "./cart/cart-list"

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
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/profile/*" element={<ProfileComponent/>} />
                <Route path="/farmers-home/*" element={<FarmersHomeComponent/>}/>
                <Route path="/product/detail/*" element={<ProductDetail/>}/>
                <Route path="/order-history" element={<PastOrderList/>}/>
                <Route path="/order-history/detail" element={<OrderDetail/>}/>
                <Route path="/cart-list" element={<CartList/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
