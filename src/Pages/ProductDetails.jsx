import { NavBar } from "../Components/NavBar";
import { useLocation,useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { useState, useContext } from "react";
import { cartContext } from "../Provider/CartProvider";

export function ProductDetails() {


  const navigate=useNavigate();
  const context=useContext(cartContext);
  const {cart,dispatch}=context;
  const [btn,setBtn]=useState(true)
 
  const location = useLocation();
  const data = location.state;
  const { product } = data;
  
  const {
    title,
    price,
    rating,
    discountPercentage,
    thumbnail,
    id,
    images,
    description,
  } = product;
  const [imgBackground, setImageBackground] = useState(thumbnail);

    const addCart = (product) => {
      dispatch({ type: "addCart", payload: { product } });
    };

function handleClick(){
  if(btn){
   const addProduct = { ...product, qty: 1 };
   addCart(addProduct);
    setBtn(false);
  }
  if(!btn){
    navigate("/YourCart");
    // setBtn(true);
  }
    
  
}

  // function handleAddCart(){
  // const addProduct = { ...product, qty: 1 };
  // addCart(addProduct);
  // setBtn(false)
  // }

 
console.log("Cart::",cart);
  function imageChanger(imgs) {
    setImageBackground(imgs);
  }
  const discountValue = price * ((100 - discountPercentage) / 100);
  const value = discountValue.toFixed(1);

  return (
    <>
      <NavBar />

      <div className="product-detail-container">
        <div>
          <div className="sub-container">
            <div className="img-collage">
              {images.map((imgs) => {
                return (
                  <div
                    className="collage"
                    onMouseMove={() => imageChanger(imgs)}
                  >
                    <img src={imgs} alt="pic" />
                  </div>
                );
              })}
            </div>
            <div
              className="product-thumbnail-img"
              style={{
                backgroundImage: `url(${imgBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "400px 450px",
              }}
            ></div>
          </div>
          <div className="btn-box">
            <div className="add-cart-btn" onClick={() => handleClick()}>
              <FaShoppingCart />
              {btn ? <span>ADD TO CART</span> : <span> GO TO CART</span>}
            </div>
            <div className="buy-now-btn">
              <AiFillThunderbolt />
              <span>BUY NOW</span>
            </div>
          </div>
        </div>

        <div className="product-detail">
          <div className="product-title">{title}</div>
          <div className="product-rating-box">
            <div>{rating.toFixed(1)}</div>

            <FaStar color="white" fontSize={10} />
          </div>
          <div className="product-price-conatiner">
            <div className="product-value">${value}</div>
            <div className="product-price">
              <strike>${price}</strike>
            </div>
            <div className="product-off">
              {discountPercentage.toFixed(1)}% off
            </div>
          </div>
          <div className="product-description">
            <div>Description</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
