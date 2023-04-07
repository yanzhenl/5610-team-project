import React, {useState} from "react";
import "./cart.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Checkout = (customer) =>{
    const cartsArray = useSelector(state => state.cart);
    let total = parseFloat(cartsArray.reduce((sum,item) => sum + item.price * item.count, 0)).toFixed(2);
    let tax = (total*0.09).toFixed(2);
    let totalEnd = (parseFloat(total) + parseFloat(tax) + parseFloat(9.99)).toFixed(2);

    return(
      <>
          <div className="row">
              <div className="col-9 container ck-container">
                  <div className="ck-summary">
                      <form>
                          <h3>Information</h3>
                          <div className="form-group">
                              <label htmlFor="name">Full Name:</label>
                              <input type="text" id="name" required/>
                          </div>

                          <div className="form-group">
                              <label htmlFor="email">Email:</label>
                              <input type="email" id="email" required/>
                          </div>

                          <div className="form-group">
                              <label htmlFor="address">Shipping Address:</label>
                              <textarea id="address" rows="3" required/>
                          </div>
                          <h3>Payment</h3>
                          <div className="form-group">
                              <label htmlFor="card-number">Card Number:</label>
                              <input type="text" id="card-number" required/>
                          </div>

                          <div className="form-group">
                              <label htmlFor="expiration-date">Expiration Date:</label>
                              <input type="text" id="expiration-date" required/>
                          </div>

                          <div className="form-group">
                              <label htmlFor="cvv">CVV: </label>
                              <input type="text" id="cvv" required/>
                          </div>
                      </form>
                  </div>
              </div>
              <div className="col-3 ct-checkbox">
                  <div className="position-relative ct-total">
                      <div className="float-start">Total Price:</div>
                      <div className="float-end">{total}</div>
                  </div>
                  <br className="float-none" />
                  <div className="position-relative ct-total">
                      <div className="float-start">Delivery Fee:</div>
                      <div className="float-end">9.99</div>
                  </div>
                  <br className="float-none" />
                  <div className="position-relative ct-total">
                      <div className="float-start">Tax Fee:</div>
                      <div className="float-end">{tax}</div>
                  </div>
                  <br className="float-none" />
                  <div className="position-relative ct-total">
                      <div className="float-start">Estimated Total:</div>
                      <div className="float-end">{totalEnd}</div>
                  </div>
                  <br className="float-none" />
                  <br/>
                  <br/>
                  <br/>
                  <button className="btn btn-primary rounded-pill float-end ">Place Holder</button>
              </div>
          </div>




      </>
    );


}

export default Checkout;