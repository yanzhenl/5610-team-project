import React from 'react'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";

const ProductItem = (
    {
      product = {
        "id" : "1",
        "farmer" : "Bee's Farm",
        "productName" : "Pineapple",
        "image" : "pineapple.png",
        "descriptions" : "Organic pineapple from Hawaii",
        "price" : 2.00,
        "availability" : true
      }
    }
) => {
  const navigate = useNavigate();
  function handleImageClick() {
    navigate('/farmers-home/product-detail', {state: {product}});
  }
  return (
      <div className="border rounded-2">
        {/*<Link to='/farmers-home/product-detail' state={product} style={{textDecoration : "none"}}>*/}
        {/*  <img src={`images/${product.image}`} alt={product.id} height={200} className="rounded-top w-100"/>*/}
        {/*</Link>*/}
        <div onClick={handleImageClick}>
          <img src={`${product.img}`} alt={product.id} height={200} className="rounded-top w-100"/>
        </div>
        <div>
          <span className="ps-2 fw-bold">
            {product.name}
          </span>
        </div>
        <div>
          <button className="btn rounded-pill border float-end">
            add
          </button>
          {product.availability === true && "In Stock"}
          {product.availability === false && "Out of Stock"}
          <br/>
          ${product.price}/lb
        </div>
        {/*<div>*/}
        {/*  /!*<button className="btn rounded-pill border">*!/*/}
        {/*  /!*  <Link to="/product/detail" style={{textDecoration : "none"}}>*!/*/}
        {/*  /!*    Product Detail*!/*/}
        {/*  /!*  </Link>*!/*/}
        {/*  /!*</button>*!/*/}
        {/*</div>*/}
      </div>
  )
}

export default ProductItem;