import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
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
                      small
                      
                    }
                  }
                  `
              },
              headers: {
                  'content-type': 'application/json',
              }
          }).then((res) => {
              setItems(res.data.data.items)
              console.log(res.data.data.items)
          })
      }
      getAllPizzas()
  }, [])

  return (
    <div> 
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Home items={items} />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        
      </Router>
    </div>
  );
};

export default App;
