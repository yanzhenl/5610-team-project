import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import ProductLike from "./product-like";
import ProductComments from "./product-comment";
import {userAddWishList, findWishListByUserIdAndPID} from "../services/wishList-service";
import {current} from "@reduxjs/toolkit";

const ProductDetail = () => {
    const navigate = useNavigate()
    const {businessName, zipcode, searchTerm, id} = useParams();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [product, setProduct] = useState({});
    const [addedWishList, setAddedWishList] = useState(null);
    const url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/details?product_id=${id}&zipcode=77494`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '56af78389dmsh0fe658990c44224p1aa19djsn2be0a4206a11',
            'X-RapidAPI-Host': 'weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com'
        }
    };

    const fetchme = async () => {
        fetch(url, options)
            .then((response) => response.json())
            .then((res) => {
                console.log(res.data.detail);
                setProduct(res.data.detail.product);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // await fetchadded();
    }

    useEffect(() => {
        fetchme()
    }, []);

    const handleClick = () => {
        navigate(-1);
    }

    const addWishList = async () => {
        await userAddWishList(currentUser._id, product.id);
    }

    const fetchadded = async () => {
        const data = await findWishListByUserIdAndPID(currentUser._id, product.id);
        setAddedWishList(data);
    }

    return (
        <div>
            <button onClick={handleClick} className="btn rounded-pill text-dark mt-2 float-start me-4">
                X
            </button>
            <h1 className="float-none ms-5">Product Detail</h1>
            <div className="container row border-top">
                <div className={"col-6"}>
                    <img src={`${product.img}`} alt={id} height={400} className="rounded-3"/>
                    <ProductComments id={product.id}/>
                </div>
                <div className={"col-6"}>
                    <div className="position-relative">
                        <h3 className="mt-5">{product.name}</h3>
                        <p>
                            Category: {product.category_name}
                        </p>
                        <p>
                            Last week sold: {product.last_week_sold_count_ui}
                        </p>
                        {currentUser && (
                            addedWishList ? (
                                <button type="button" className="float-end btn btn-danger btn-sm"
                                        style={{borderRadius: '25px', padding: '0.15rem 0.75rem'}}>
                                    <i className="bi bi-heart-fill"></i>
                                </button>
                            ) : (
                        <button type="button" className="float-end btn btn-outline-danger btn-sm"
                                onClick={addWishList}
                                style={{borderRadius: '25px', padding: '0.15rem 0.75rem'}}>
                            <i className="bi bi-heart"></i>
                        </button>
                            )
                        )}
                        <h3 className={'text-danger'}>${product.price}/lb</h3>
                        {/*{product.descriptions}<br/>*/}
                        {/*{product.availability === true && "In Stock"}*/}
                        {/*{product.availability === false && "Out of Stock"}*/}
                        {/*<button onClick={handleClick}*/}
                        {/*    className="btn rounded-pill border float-end">*/}
                        {/*  Edit Detail*/}
                        {/*</button>*/}
                        {currentUser && (
                            currentUser.role === "CONSUMER" && (
                            <ProductLike id={product.id}/>
                            )
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail