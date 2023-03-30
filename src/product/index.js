import React from "react";
import {useSelector} from "react-redux";
import ProductItem from "./product-item";

const ProductList = () => {
  const products = useSelector(state => state.products)
  return (
      <div className="container">
        <ul className="row">
          {
            products.map(product =>
                <li className="col-lg-3 col-md-6 col-sm-12 list-group-item me-4" key={product._id}>
                  <ProductItem product={product}/>
                </li>
            )
          }
        </ul>
      </div>
  )
}

export default ProductList