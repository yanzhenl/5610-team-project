import React from 'react'
import ProductList from "../product";

const FarmersHomeComponent = () => {
  return (
      <>
        <h1>farmers home</h1>
        <div className="position-relative mb-2">
          <img src="/images/home-banner.png" className="w-100 mb-3"/>
          <h1 className="position-absolute wd-picture-letter text-warning">
            Welcome to your local Farmer's Market</h1>
        </div>
        <ProductList/>
      </>
  );
};

export default FarmersHomeComponent