import React from "react";
import {useLocation, useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product
  if (!product) {
    // handle the case where the state object is null or undefined
    return <div>Product not found</div>;
  }

  function handleClick() {
    navigate('/farmers-home/edit-detail', {state: {product}});
  }
  return (
      <div style={{width : 500}}>
        <button  className="btn rounded-pill text-dark pt-1 float-end">
          <Link to="/farmers-home" style={{textDecoration : "none", color : "black"}}>
            X
          </Link>
        </button>
        <h1>Product Detail</h1>
        <div className={"container"}>
          <img src={`../images/${product.image}`} alt={product.id} height={400} className="rounded-3"/>
          <span className="position-relative" style={{left: 460, bottom: 400}}>
            <h3 className="float-end">${product.price}/lb</h3>
            <h3>{product.productName}</h3>
            {product.descriptions}<br/>
            {product.availability === true && "In Stock"}
            {product.availability === false && "Out of Stock"}
            <button onClick={handleClick}
                className="btn rounded-pill border float-end">
              Edit Detail
            </button>
          </span>
        </div>
      </div>
  )
}

export default ProductDetail