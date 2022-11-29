import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import { HashRouter as Router,Routes,  Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductsInCart from "./components/ProductsInCart";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [items, setItems] = useState([])
  useEffect(() => {
      async function getAllPizzas(){
          axios.request({
              url: `https://api-eu-central-1.hygraph.com/v2/cl795do5b1mw701um1trz2pa2/master` ,
              method: 'POST',
              data: {
                  query: `{
                    pizzaApps{
                      id,
                      name,
                      photo {
                        id
                      },
                      rating,
                      large,
                      medium,
                      small,
                      pictures
                      
                    }
                  }
                  `
              },
              headers: {
                  'content-type': 'application/json',
              }
          }).then((res) => {
              setItems(res.data.data.pizzaApps)
              console.log(res.data.data.pizzaApps)
          })
      }
      getAllPizzas()
  }, [])

  return (
    <div> 
      <Router basename={process.env.PUBLIC_URL} >
        
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home items={items} />}></Route>
            <Route path="/productsincart" element={<ProductsInCart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        
      </Router>
    </div>
  );
};

export default App;
