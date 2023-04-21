import React, {useEffect, useState} from "react";
import ProductItem from "./product-item";
import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router";

const ProductList = () => {
  const {businessName, zipcode, searchTerm} = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchTerm)
  const [finalQuery, setFinalQuery] = useState('vegetables')

  const [products,setProducts] = useState([]);

  let url = '';
  if(searchTerm) {
    url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=${zipcode}&keyword=${query}&limit=60&offset=0`;
  } else {
    url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=${zipcode}&keyword=${finalQuery}&limit=60&offset=0`;
  }

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
      console.log(res.data.products);
      setProducts(res.data.products);
      if (searchTerm) {
        navigate(`/farmers/${businessName}/${zipcode}/${query}`)
      } else {
        navigate(`/farmers/${businessName}/${zipcode}/${finalQuery}`);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
  }


  const sendHandler = () => {
    setFinalQuery(query);
  }

  useEffect(() => {
    fetchme()
  }, [finalQuery]);

  return (
      <div className="container">
        <button onClick={sendHandler} className="float-end btn btn-primary">
          Search
        </button>
        <input
            className="form-control w-75"
            type="text"
            value={query}
            placeholder="Type to search..."
            onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="row">
          {
            products.map(product =>(
                    <li className="col-lg-3 col-md-6 col-sm-12 list-group-item me-4" key={product.id}>
                      <Link to={`/farmers-home/product-detail/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
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