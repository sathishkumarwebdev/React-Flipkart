import logo from "../assets/flipkart-logo.png";
import plus from "../assets/plus.png";
import {useContext} from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import {Link,useNavigate} from "react-router-dom";
import {cartContext} from "../Provider/CartProvider"
export function NavBar() {
  const context=useContext(cartContext);
  const {cart} =context;
  const navigate=useNavigate();
    const nameUser = localStorage.getItem("nameUser");
   
    const cartQty=cart.reduce((acc,cart)=> acc+cart.qty,0);
    function yourCart(){
      navigate('/YourCart')
    }
   
  return (
    <header>
      <nav>
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="flipkart" title="flipkart" />
          </div>
          <div className="explore">
            <p>
              Explore<span>plus</span>
            </p>
            <img src={plus} alt="plus" />
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            autoComplete="off"
          />
          <FaSearch color="blue" size={18} />
        </div>
        <div className="nav-item">
          {nameUser ? (
            nameUser
          ) : (
            <Link to={"/"}>
              <button className="login-btn">Login</button>
            </Link>
          )}
        </div>
        <div className="nav-item">Become a seller</div>
        <div className="nav-item">More</div>
        <div className="cart" onClick={()=>yourCart()}>
        
            <FaShoppingCart color="white" fontSize={"24px"} />
            {cartQty == 0 ? "" : <div className="cart-qty">{cartQty}</div>}

            <span>Cart</span>
          
        </div>
      </nav>
    </header>
  );
}
