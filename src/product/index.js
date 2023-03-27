import React from "react";
import {useSelector} from "react-redux";
import ProductItem from "./product-item";

const ProductList = () => {
  const products = useSelector(state => state.products)
  return (
      <ul className="list-group">
        {
          products.map(product =>
            <li className="pt-3 ps-2 pe-2 pb-2 list-group-item list-group-item-action" key={product._id}>
              <ProductItem product={{product}}/>
            </li>
          )
        }
      </ul>
  )
}

export default ProductList