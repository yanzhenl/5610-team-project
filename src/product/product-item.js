import React from 'react'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const ProductItem = (
    {
      product = {
        "id" : "1",
        "productName" : "Beef",
        "image" : "beef.png",
        "descriptions" : "A5 from Australia",
        "pricing" : 20.00,
        "availability" : true
      }
    }
) => {
  const distpatch = useDispatch();

  return (
      <div>
        <Link to="/product/detail" style={{textDecoration : "none"}}>
          <img src={product.image} alt={product.id} width={50} height={50}/>
        </Link>
        <div>
          {product.productName}
          {product.availability === true && "In Stock"}
          {product.availability === false && "Out of Stock"}
        </div>
        <div>
          <button className="btn rounded-pill border">
            <Link to="/product/detail" style={{textDecoration : "none"}}>
              Product Detail
            </Link>
          </button>
          <button className="btn rounded-pill border">add</button>
        </div>
      </div>
  )
}

export default ProductItem;