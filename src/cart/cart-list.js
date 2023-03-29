import React from "react";
import {useSelector} from "react-redux";
import Cart from "./cart";
import cart from "./cart";
const CartList = () => {
    const cartsArray = useSelector(state => state.cart);
    let total = cartsArray.reduce((sum,item) => sum + item.price * item.count, 0);
    let tax = (total*0.09).toFixed(2);
    let totalEnd = (parseFloat(total) + parseFloat(tax) + parseFloat(9.99)).toFixed(2);
    return(
        <>
            <div className="row">
                <div className="col-9">
                    <ul className="list-group">
                        {
                            cartsArray.map(cart =>
                                <Cart key={cart._id} cart={cart}/>)
                        }
                    </ul>
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
                    <button className="btn btn-primary rounded-pill float-end ">Checkout</button>

                </div>

            </div>


        </>

    );
};
export default CartList;