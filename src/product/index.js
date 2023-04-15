import React, {useEffect, useState} from "react";
import ProductItem from "./product-item";
import $ from 'jquery';
import {Link} from "react-router-dom";

const ProductList = () => {
  const [query, setQuery] = useState('')
  const [finalQuery, setFinalQuery] = useState('')
  const [products,setProducts] = useState([]);

  // const url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=77494&keyword=+${finalQuery}&limit=60&offset=0`;

  const url = `https://store-groceries.p.rapidapi.com/search/chicken`;

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '854fcb6610msh254332227214f21p119d2ejsnb3ea0e92ed66',
  //     'X-RapidAPI-Host': 'weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com'
  //   }
  // };
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '854fcb6610msh254332227214f21p119d2ejsnb3ea0e92ed66',
  //     'X-RapidAPI-Host': 'store-groceries.p.rapidapi.com'
  //   }
  // };

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.kroger.com/v1/products?filter.brand=Kroger&filter.term=milk&filter.locationId=01400943`,
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJtYXJrZXRhcGktNDgyOTQ3NWUyY2M3MzkwNDE1ZGQzOTUzYzA3MGZjNmI1MzgzNzY5NDI0MzA0NTA4NTM2IiwiZXhwIjoxNjgxNTM5NDI1LCJpYXQiOjE2ODE1Mzc2MjAsImlzcyI6ImFwaS5rcm9nZXIuY29tIiwic3ViIjoiNDhmMTU4ZTQtMWU5Yi01YzdjLTkzMjctODBmZGRlOGQ3OGE3Iiwic2NvcGUiOiJwcm9kdWN0LmNvbXBhY3QiLCJhdXRoQXQiOjE2ODE1Mzc2MjUxMzMxODk3ODQsImF6cCI6Im1hcmtldGFwaS00ODI5NDc1ZTJjYzczOTA0MTVkZDM5NTNjMDcwZmM2YjUzODM3Njk0MjQzMDQ1MDg1MzYifQ.nW0N_bSXaJhANnNh_B-LaZoYNU0bSieoQTh3FtM5QObDfScaTpG3fTmd88laQg6bnpHy2_PdfYSP4hfgZfsLQ8BxzNCOTeM8Kx1BX23fKDK2C8U9aVGea4gI-Y9bYVY3BhrvDB4R1H6__VLxJ71-xFMsHAi94Vr4n-w1lvwcs5c3q7_eU-5im3eaG46AW0PfWdFvQWW_eGp4icznXiBj5_B3OWl1_lC6wf6DJiGyQVZ6140QnLfe-cwDCCfDhLmLSq65D_z1DFpm9WBvVB4ws5Q3wDnFJle_3xmxNIFZloRDBiaehy2EjXIBEN-TztW9ft-l0PvjnF1uj3sih0TNvA"
    }
  }

  const fetchme = () => {
    $.ajax(settings).done(function (response) {
      console.log(response.data);
      setProducts(response.data)
    });
  }


  // const fetchme = () => {
  //   fetch(url, options)
  //   .then((response) => response.json())
  //   .then((res) => {
  //     console.log(res.newProducts);
  //     setProducts(res.newProducts);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // }

  const sendHandler = () => {
    setFinalQuery(query);
  }

  useEffect(() => {
    fetchme()
  }, [query]);

  return (
      <div className="container">
        <button onClick={sendHandler} className="float-end btn btn-primary">
          Search
        </button>
        <input
            className="form-control w-75"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="row">
          {
            products.map(product =>(
                    <li className="col-lg-3 col-md-6 col-sm-12 list-group-item me-4" key={product.productId}>
                      <Link to={`/farmers-home/product-detail/${product.productId}`}>
                        <ProductItem product={product}/>
                      </Link>
                    </li>
              ))
          }
        </ul>
      </div>
  );
};

export default ProductList