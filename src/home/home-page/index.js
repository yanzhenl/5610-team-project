import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {profileThunk} from "../../services/users/users-thunks";
import "../index.css";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import ProductItem from "../../product/product-item";

const HomePage = () => {
    const { currentUser } = useSelector((state) => state.users);
    const { searchTerm } = useParams()
    const dispatch = useDispatch();


    const navigate = useNavigate();
    const [query, setQuery] = useState(searchTerm);
    const [finalQuery, setFinalQuery] = useState('vegetables');
    const [products,setProducts] = useState([]);

    useEffect(() => {
        dispatch(profileThunk());
        fetchme();
    }, [finalQuery]);

    let url = '';
    if(searchTerm) {
        url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=98105&keyword=${query}&limit=60&offset=0`;
    } else {
        url = `https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=98105&keyword=${finalQuery}&limit=60&offset=0`;
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
                navigate(`/home/${query}`)
            } else {
                navigate(`/home/${finalQuery}`);
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    const sendHandler = () => {
        setFinalQuery(query);
    }


    return(
        <>
            <div className="row mb-4">
                <div className="position-relative mb-2
                                wd-cropped-image wd-image-container">
                    <img src="/images/background.jpeg"
                         className="w-100 mb-3"/>

                    <span className="position-absolute wd-picture-letter
                                   text-light wd-text-shadow
                                   d-none d-lg-block">
                        Welcome to your local Farmer's Market
                    </span>
                </div>

                <div className="position-relative mt-3">
                    <button onClick={sendHandler} className="float-end btn btn-primary">
                        Search
                    </button>
                    <input
                        className="form-control w-75 ps-5"
                        type="text"
                        value={query}
                        placeholder="Type to search..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>

            </div>

            <div className="ms-3 mb-2 wd-font-size">
                {currentUser && currentUser.role === "CONSUMER" && (
                    <div>
                        Hi {currentUser.firstName}! Here are some recommendations for you today.
                    </div>
                )}
            </div>

            <ul className="row">
            {
                products.map(product =>(
                    <li className="col-lg-3 col-md-6 col-sm-12 list-group-item me-4" key={product.id}>
                        <Link to={`/home/${finalQuery}/product-detail/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
                          <ProductItem product={product}/>
                        </Link>
                    </li>
                ))
            }
            </ul>
        </>
    );
};
export default HomePage;
