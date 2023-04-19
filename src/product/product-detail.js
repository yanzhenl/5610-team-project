import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/details?product_id=${id}&zipcode=77494`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56af78389dmsh0fe658990c44224p1aa19djsn2be0a4206a11',
      'X-RapidAPI-Host': 'weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com'
    }
  };

  const fetchme = () => {
    fetch(url, options)
    .then((response) => response.json())
    .then((res) => {
      console.log(res.data.detail);
      setProduct(res.data.detail.product);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  useEffect(() => {
    fetchme()
  }, []);

  return (
      <div style={{width : 500}}>
        <button  className="btn rounded-pill text-dark pt-1 float-end">
          <Link to="/farmers-home" style={{textDecoration : "none", color : "black"}}>
            X
          </Link>
        </button>
        <h1>Product Detail</h1>
        <div className={"container"}>
          <img src={`${product.img}`} alt={id} height={400} className="rounded-3"/>
          <span className="position-relative" style={{left: 460, bottom: 400}}>
            <h3 className="float-end">${product.price}/lb</h3>
            <h3>{product.name}</h3>
            <button type="button" className="float-end btn btn-outline-primary btn-sm"
                    style={{ borderRadius: '25px', padding: '0.15rem 0.75rem' }}>
              <i className="bi bi-cart-plus"></i>
            </button>
            {/*{product.descriptions}<br/>*/}
            {/*{product.availability === true && "In Stock"}*/}
            {/*{product.availability === false && "Out of Stock"}*/}
            {/*<button onClick={handleClick}*/}
            {/*    className="btn rounded-pill border float-end">*/}
            {/*  Edit Detail*/}
            {/*</button>*/}
          </span>
        </div>
      </div>
  )
}

export default ProductDetail