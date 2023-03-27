import React from 'react'
import {useDispatch} from "react-redux";

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
      <div className="row">
        <img src={product.image} alt={product.id} width={50} height={50}/>
      </div>
  )
}

export default ProductItem;