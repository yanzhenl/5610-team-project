import React from 'react'

const ProductItem = (
    {
      product = {
        "id" : "1",
        "farmer" : "Bee's Farm",
        "productName" : "Pineapple",
        "image" : "pineapple.png",
        "descriptions" : "Organic pineapple from Hawaii",
        "price" : 2.00,
        "availability" : true
      }
    }
) => {
  // console.log(product.images.sizes)
  // const navigate = useNavigate();
  // function handleImageClick() {
  //   navigate('/farmers-home/product-detail', {state: {product}});
  // }
  return (
      <div>
        {/*<Link to='/farmers-home/product-detail' state={product} style={{textDecoration : "none"}}>*/}
        {/*  <img src={`images/${product.image}`} alt={product.id} height={200} className="rounded-top w-100"/>*/}
        {/*</Link>*/}
        {/*<div>*/}
        {/*  <img src={`${product.square_img_url}`} alt={product.id} height={200} className="rounded-top w-100"/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <span className="ps-2 fw-bold">*/}
        {/*    {product.name}*/}
        {/*  </span>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <button className="btn rounded-pill border float-end">*/}
        {/*    add*/}
        {/*  </button>*/}
        {/*  {product.availability === true && "In Stock"}*/}
        {/*  {product.availability === false && "Out of Stock"}*/}
        {/*  <br/>*/}
        {/*  ${product.price}/lb*/}
        {/*</div>*/}
        {/*<div>*/}
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
        {/*  /!*<button className="btn rounded-pill border">*!/*/}
        {/*  /!*  <Link to="/product/detail" style={{textDecoration : "none"}}>*!/*/}
        {/*  /!*    Product Detail*!/*/}
        {/*  /!*  </Link>*!/*/}
        {/*  /!*</button>*!/*/}
        {/*</div>*/}
      </div>
  )
}

export default ProductItem;