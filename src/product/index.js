import React, {useEffect, useState} from "react";
import ProductItem from "./product-item";
import {Link} from "react-router-dom";
import {useNavigate, useParams} from "react-router";

const ProductList = () => {
  const {businessName, category_name} = useParams();
  const navigate = useNavigate();

  const [products,setProducts] = useState([]);

  let  url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=98105&keyword=${category_name}&limit=20&ffset=0`;
  if (category_name == "nothing") {
    url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=98105&keyword=${category_name}&limit=0&ffset=0`;
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
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  useEffect(() => {
    fetchme()
  }, []);

  return (
      <div className="container">
        <ul className="row">
          {
            products.map(product =>(
                    <li className="col-lg-3 col-md-6 col-sm-12 list-group-item me-4" key={product.id}>
                      <Link to={`/farmers/${businessName}/${category_name}/product-detail/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
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