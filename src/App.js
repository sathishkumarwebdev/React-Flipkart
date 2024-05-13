import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Login } from "./Pages/Login";
import { Products } from "./Pages/Products";
import { ProductDetails } from "./Pages/ProductDetails";
import { YourCart } from "./Pages/YourCart";
import { NewLogin } from "./Pages/NewLogin";

import { CartProvider } from "./Provider/CartProvider";
import { UserProvider } from './Provider/UserProvider';
function App() {
  //hooks
  const navigate = useNavigate();
  const [isAthuatication, setAuthentication] = useState(false);

  //useeffect
  useEffect(() => {
    if (isAthuatication) {
      navigate("/");
    }
  }, [isAthuatication]);

  return (
    <>
      <CartProvider>
        <UserProvider>
          <Routes>
            <Route
              path="/Login"
              element={<Login setAuthentication={setAuthentication} />}
            ></Route>
            <Route path="/NewLogin" element={<NewLogin />} />
            <Route path="/" element={<Products />} />
            <Route path="/ProductDetails" element={<ProductDetails />} />
            <Route path="/YourCart" element={<YourCart />} />
          </Routes>
        </UserProvider>
      </CartProvider>
    </>
  );
}

export default App;
