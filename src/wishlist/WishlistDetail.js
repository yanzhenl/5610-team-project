import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const WishlistDetail = (pid) => {
    const [product, setProduct] = useState({});
    const url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/details?product_id=85180&zipcode=77494`;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '56af78389dmsh0fe658990c44224p1aa19djsn2be0a4206a11',
            'X-RapidAPI-Host': 'weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com'
        }
    };

    const fetchme = () => {
        fetch(url, options)
            .then((response) => response.json())
            .then((res) => {
                console.log(res.data);
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
        <div>
            <div className="mt-2 ps-2">
                    <img height={200} className="w-100 rounded-4"
                        src={`${product.img}`} alt={product.id}/>
            </div>
            <div className="mt-2 ps-2 mb-2 wd-truncate-title"
                 style={{fontSize: "0.9rem", color: "dimgray"}}>
                {product.name}
            </div>
            <span className="mt-1 ms-2 fw-bold">
            ${product.price}/lb
            </span>
            <span>
                <button type="button" className="float-end btn btn-outline-primary btn-sm"
                        style={{ borderRadius: '25px', padding: '0.15rem 0.75rem' }}>
                  <i className="bi bi-cart-plus"></i>
                </button>
            </span>

        </div>
    )
}

export default WishlistDetail;