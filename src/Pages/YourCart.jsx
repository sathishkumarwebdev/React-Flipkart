import { NavBar } from "../Components/NavBar";
import { cartContext } from "../Provider/CartProvider";
import { useContext, useState } from "react";
import { Cart } from "../Components/Cart";
export function YourCart() {
  // const [products, setProducts] = useState([]);
  const context = useContext(cartContext);
  const { cart, dispatch } = context;

const qunatity=cart.reduce((acc,cart)=>acc+cart.qty,0) 

  return (
    <>
      <NavBar />
      {cart.length === 0 ? (
        <div>empty Cart</div>
      ) : (
        <div className="your-cart-conatiner">
          <div className="your-cart">
            <div className="your-cart-title">
              <div className="your-cart-flipkart">
                <div className="flipkart">
                  <span>Flipkart &#40;{qunatity}&#41;</span>
                </div>
              </div>
              <div className="your-cart-grocery">Grocery</div>
            </div>
            <div className="your-cart-address"> hi</div>
            <div className="cart-items-container">
              {cart.map((cart) => (
                <Cart cart={cart} dispatch={dispatch} key={cart.id} />
              ))}
              <div className="brand-free-container">
                <div className="brand-free-box">
                  <div className="free-img">
                    <img
                      src="https://rukminim2.flixcart.com/image/144/144/xif0q/digital-voucher-code/r/i/k/-original-imagrfhwvn4dfest.jpeg?q=90"
                      alt="spotiffy-pre"
                    />
                  </div>
                  <div>
                    <div className="offer-box">
                      <div className="offer-detail">
                        Free Coupon to get the 3 months Spotify Premium at a
                        discounted rate of Rs. 119/-
                      </div>
                      <div className="offer-date">16/11/2024</div>
                      <div className="offer-rate">
                        $0 <span>Free</span>
                      </div>

                      <div className="offer-des">
                        . This is a free giveaway as part of your purchase.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brand-free-container">
                <div className="brand-free-box">
                  <div className="free-img">
                    <img
                      src="https://rukminim2.flixcart.com/image/144/144/xif0q/digital-voucher-code/z/j/y/-original-imagys6vkczygmxm.jpeg?q=90"
                      alt="cleartrip"
                    />
                  </div>
                  <div>
                    <div className="offer-box">
                      <div className="offer-detail">
                        Cleartrip Flat Rs 1000 off on hotels booking along with
                        300 supercoins on booking
                      </div>
                      <div className=" offer-date">Till 30th April'24</div>
                      <div className="offer-rate">
                        $0 <span>Free</span>
                      </div>

                      <div className="offer-des">
                        . This is a free giveaway as part of your purchase.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brand-free-container">
                <div className="brand-free-box">
                  <div className="free-img">
                    <img
                      src="https://rukminim2.flixcart.com/image/144/144/xif0q/digital-voucher-code/z/j/y/-original-imagys6vkczygmxm.jpeg?q=90"
                      alt="cleartrip"
                    />
                  </div>
                  <div>
                    <div className="offer-box">
                      <div className="offer-detail">
                        Flat Rs 650 off on Cleartrip flights booking along with
                        500 supercoins on booking
                      </div>
                      <div className="offer-date">Till 30th April'24</div>
                      <div className="offer-rate">
                        $0 <span>Free</span>
                      </div>

                      <div className="offer-des">
                        . This is a free giveaway as part of your purchase.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="place-order-container">
                  <button>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>
          <div className="your-cart-total">hai</div>
        </div>
      )}
    </>
  );
}
