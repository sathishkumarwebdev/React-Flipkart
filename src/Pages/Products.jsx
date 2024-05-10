import { NavBar } from "../Components/NavBar";
import { List } from "../Components/List";
import { ProductSlider } from "../Components/ProductSlider";
import { useEffect, useState } from "react";
import { Card } from "../Pages/Card";
import {Footer} from "../Components/Footer";


export function Products() {
  //hooks
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState([]);

  //provider
 

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      setUserData(data);
    };

    if (token) {
      getData();
    }

    // setTimeout(getData, 1000);
  }, []);

  // console.log(userData);

  useEffect(() => {
    const getProductDetails = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const productData = await res.json();
      const { products } = productData;
      setProducts(products);
    };
    getProductDetails();
  }, [userData]);


products.map((item)=>{console.log(item.category);})
  return (
    <main className="product-container">
      <NavBar />
      <List />
      <ProductSlider/>
      

      <div className="card-box-conatiner">
        <div className="card-box-category">
          <h2 className="product-title">Smart Phones</h2>
          <div className="view-btn">VIEW ALL</div>
        </div>

        <div className="card-box-items">
          {products
            .filter((item) => item.category === "smartphones")
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </div>

      <div className="card-box-conatiner">
        <div className="card-box-category">
          <h2 className="product-title">Laptops</h2>
          <div className="view-btn">VIEW ALL</div>
        </div>

        <div className="card-box-items">
          {products
            .filter((item) => item.category === "laptops")
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </div>

      <div className="card-box-conatiner">
        <div className="card-box-category">
          <h2 className="product-title">Groceries</h2>
          <div className="view-btn">VIEW ALL</div>
        </div>

        <div className="card-box-items">
          {products
            .filter((item) => item.category === "groceries")
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </div>

      <div className="card-box-conatiner">
        <div className="card-box-category">
          <h2 className="product-title">Fragrances</h2>
          <div className="view-btn">VIEW ALL</div>
        </div>

        <div className="card-box-items">
          {products
            .filter((item) => item.category === "fragrances")
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </div>


      <Footer/>
    </main>
    
  );
}