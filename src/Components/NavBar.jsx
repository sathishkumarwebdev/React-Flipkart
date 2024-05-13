import logo from "../assets/flipkart-logo.png";
import plus from "../assets/plus.png";
import { useContext ,useState} from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../Provider/CartProvider";
import { CartCount } from "../PreDefine/CartCount";
export function NavBar() {
  const [userMouseMove,setUserMouseMove]=useState(true)
  const context = useContext(cartContext);
  const { cart } = context;
  const navigate = useNavigate();
  const nameUser = localStorage.getItem("nameUser");
  console.log(nameUser);

  const cartQty = cart.reduce((acc, cart) => acc + cart.qty, 0);
  function yourCart() {
    navigate("/YourCart");
  }

  

  function handleUserProfile(){
    console.log("hai");
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
            <div
              className="user-name"
              onMouseOver={() => setUserMouseMove(!userMouseMove)}
            >
              {nameUser}
              {userMouseMove ? <div className="userProfile-box">hi</div> : ""}
            </div>
          ) : (
            <div>
              <Link to={"/Login"}>
                <button className="login-btn">Login</button>
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item">Become a seller</div>
        <div className="nav-item">More</div>
        <div className="cart" onClick={() => yourCart()}>
          <FaShoppingCart color="white" fontSize={"24px"} />
          {cartQty == 0 ? (
            ""
          ) : (
            <div className="cart-qty">
              <CartCount cart={cart} />
            </div>
          )}

          <span>Cart</span>
        </div>
      </nav>
    </header>
  );
}
