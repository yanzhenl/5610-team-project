import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {editProduct} from "./product-reducer";

const EditProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prod = location.state.product;
  const [newProd, setNewProd] = useState(prod)
  const product = prod;
  if (!product) {
    // handle the case where the state object is null or undefined
    return <div>Product not found</div>;
  }

  const saveClickHandler = () => {
    dispatch(editProduct(newProd))
    const product = newProd
    navigate('/farmers-home/product-detail', {state: {product}});
  }

  const deleteClickHandler = () => {
    navigate('/farmers-home/product-detail', {state: {product}});
  }

  return (
      <div className="container">
        <div>
          <button  className="btn rounded-pill text-bg-dark float-end"
                   onClick={saveClickHandler}>
            save
          </button>
          <button  onClick={deleteClickHandler} className="btn rounded-pill text-dark pt-1">
            X
          </button>
          <span className="pt-1 ps-4 fw-bold">
            Edit Detail
          </span>
        </div>

        {/*textarea*/}
        <div className="mt-3">
          <div>
            <input type="text"
                   id="nameText"
                   value={newProd.productName}
                   placeholder="productName"
                   className="form-control border-solid border pt-4"
                   onChange={(event) => setNewProd({...newProd, productName: event.target.value})}>
            </input>
            <label htmlFor="name"
                   className="position-relative"
                   style={{
                     color: 'rgb(110, 118, 125)',
                     left: '12px',
                     bottom: '50px'
                   }}>
              Name
            </label>
          </div>
          <div>
            <input type="text"
                   id="descriptionText"
                   value={newProd.descriptions}
                   placeholder="product description"
                   className="form-control border-solid border pt-4"
                   onChange={(event) => setNewProd({...newProd, descriptions: event.target.value})}>
            </input>
            <label htmlFor="descriptionText"
                   className="position-relative"
                   style={{
                     color: 'rgb(110, 118, 125)',
                     left: '12px',
                     bottom: '50px'
                   }}>
              Description
            </label>
          </div>
          <div>
            <input type="text"
                   id="priceText"
                   value={newProd.price}
                   placeholder="price"
                   className="form-control border-solid border pt-4"
                   onChange={(event) => setNewProd({...newProd, price: event.target.value})}>
            </input>
            <label htmlFor="descriptionText"
                   className="position-relative"
                   style={{
                     color: 'rgb(110, 118, 125)',
                     left: '12px',
                     bottom: '50px'
                   }}>
              Price
            </label>
          </div>
          <div>
            <input type="text"
                   id="availabilityText"
                   value={newProd.availability}
                   placeholder="price"
                   className="form-control border-solid border pt-4"
                   onChange={(event) => setNewProd({...newProd, availability: event.target.value})}>
            </input>
            <label htmlFor="availabilityText"
                   className="position-relative"
                   style={{
                     color: 'rgb(110, 118, 125)',
                     left: '12px',
                     bottom: '50px'
                   }}>
              Availability
            </label>
          </div>

        </div>
      </div>
  )
}

export default EditProductDetail