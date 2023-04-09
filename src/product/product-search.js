import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import ProductItem from "./product-item";

const ProductSearch = ()=>{
    const [keyword, setKeyword] = useState('');
    //const keyword = 'meat'
    const [finalword, setFinalword] = useState('');
    const [posts, setPosts] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '85d45deaa1msh1d488391569a775p1f736djsn68be54b8776a',
            'X-RapidAPI-Host': 'weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com'
        }
    };
    useEffect(() => {
        //console.log(keyword);
        fetchme()
    }, [finalword]);
    const fetchme = () => {
        fetch(`https://weee-grocery-api-sayweee-com-browsing-searching-details.p.rapidapi.com/search?zipcode=77494&keyword=+${finalword}&limit=60&offset=0`, options)
            .then((response) => response.json())
            .then((res) => {
                console.log(res.data.products);
                setPosts(res.data.products);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const sendHandler = () => {
        setFinalword(keyword);
    }

    return(

        <div className="container">
            <div className="position-relative mt-3">
                <input placeholder="Search produce" value={keyword}
                       className="form-control rounded-pill ps-5" onChange={(event)=>{setKeyword(event.target.value)}}/>
                <i className="bi bi-search position-absolute
                       wd-nudge-up" onClick={sendHandler}></i>
            </div>
            <ul className="row">
                {posts.map((item) =>{
                    return(
                        <li className="col-lg-3 col-md-6 col-sm-12 list-group-item me-4" key={item.id}>
                            <ProductItem product={item}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )



}

export default ProductSearch;