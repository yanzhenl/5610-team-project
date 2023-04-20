import React from 'react'
import ProductList from "../product";

const FarmersHomeComponent = () => {
  return (
      <>
        <div className="row mb-4">
          <div className="position-relative mb-2 wd-cropped-image wd-image-container">
            <img src="/images/background.jpeg" className="w-100 mb-3"/>

            <span className="position-absolute wd-picture-letter
                                     text-light wd-text-shadow
                                     d-none d-lg-block">
                Welcome to your local Farmer's Market
            </span>
          </div>
        </div>
        <div>
          <ProductList/>
        </div>
      </>
  );
};

export default FarmersHomeComponent