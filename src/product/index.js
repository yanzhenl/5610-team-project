import React from "react";
import {useSelector} from "react-redux";
import ProductItem from "./product-item";

const ProductList = () => {
  const products = useSelector(state => state.products)
  return ()
}

export default ProductList