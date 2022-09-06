import React from "react";
import "./Home.css";
import SearchBar from "../components/SearchBar";
import Pizza from "../assets/pizza.png";
import Small from "../sizes/Small";
import Medium from "../sizes/Medium";
import Large from "../sizes/Large";
import ProductProvider from "../context/ProductContext";

function Home() {
  return (
    <>
      <div className="menu">
        <div className="text">
          <h1>Are You Staving? no worries</h1>
          <h3>We having special on the house</h3>
          <br />
          <h3>Buy 2 pizza get small free</h3>

         <ProductProvider>
         <SearchBar />
         </ProductProvider>
        </div>

        <div className="image">
          <img className="pizza-1" src={Pizza} alt="" />
        </div>
      </div>

     <ProductProvider>
      <div className="size">
          <Small />
          <Medium />
          <Large />
        </div>
     </ProductProvider>
    </>
  );
}

export default Home;
