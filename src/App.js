import {Routes,Route,useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import {Login} from "./Pages/Login";
import {Products} from "./Pages/Products"
import { ProductDetails } from "./Pages/ProductDetails";
import {CartProvider} from "./Provider/CartProvider";
import {YourCart} from "./Pages/YourCart";


function App() {
  //hooks
  const navigate=useNavigate();
  const [isAthuatication,setAuthentication]=useState(false);


  //useeffect
  useEffect(()=>{
    if(isAthuatication){
      navigate('/Products')
     
    }
  },[isAthuatication])

  

  return (
    <>
      
        <CartProvider>
          <Routes>
            <Route
              path="/"
              element={<Login setAuthentication={setAuthentication} />}
            ></Route>
            <Route path="/Products" element={<Products />} />
            <Route path="/ProductDetails" element={<ProductDetails />} />
            <Route path="/YourCart" element={<YourCart />} />
          </Routes>
        </CartProvider>
      
    </>
  );
}

export default App;
