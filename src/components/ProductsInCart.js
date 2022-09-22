import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import "./ProductInCart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
// import axios from "axios"

function ProductsInCart() {
  const { basket, count,setCount } = useContext(ProductContext);

  //agregate function
  const sum = basket.reduce((total, currentvalue) => {
    return total + currentvalue.small;
  }, 0);
  
  const IncreaseNumber = (index) => {

    const findItemByid = basket.find(Object => {
      return Object.id === index.id
    })

    if (findItemByid){
      findItemByid.qty++
      setCount(count + 1, {...index,qty:1});
     
    }else{
      setCount(count + 1, {...index,qty:1});
    }
   
  };

  const DecreaseNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  console.log(basket);
  return (
    <div>
      <div className="cart">
        <strong id="">Cart</strong>
        <div className="countForEach">{count}</div>
      </div>

      {basket.length === 0 ? (
        <div>
          <h4> You haven't added anything to the cart. </h4>
        </div>
      ) : (
        basket.map((item, i) => (
          <div key={i}>
            <img alt=""></img>

            <div className="displayed-items">
              <img
                src={item?.pictures?.imageURL}
                alt=""
                style={{ width: "200px", height: "140px" }}
              />
              <p>{item?.name}</p>
              <div className="Price">R{item?.small}</div>

              <div className="btn_div">
                <Button onClick={IncreaseNumber}>
                  <AddIcon />
                </Button>

                <h1>{count}</h1>

                <Button onClick={DecreaseNumber}>
                  <RemoveIcon />
                </Button>
              </div>

            </div>
            {/* <hr /> */}
          </div>
        ))
      )}
      <div className="total">
        <strong>Total: </strong>
        <strong>{sum}</strong>
      </div>
      <br />
      <Link to={"/checkout"}>
        <button className="btn btn-primary">Checkout</button>
      </Link>
    </div>
  );
}

export default ProductsInCart;
