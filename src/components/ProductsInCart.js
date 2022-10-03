import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import "./ProductInCart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
// import axios from "axios"

function ProductsInCart() {
  const { basket, setBasket, count, setCount, setTotalItemCount } =
    useContext(ProductContext);

  //agregate function
  const calculateTotal = () => {
    const totalItemCount = basket.reduce((total, currentvalue) => {
      return total + currentvalue.small * currentvalue.qty;
    }, 0);
    setTotalItemCount(totalItemCount);
    return totalItemCount.toFixed(2);
  };

  const IncreaseNumber = (index) => {
    basket[index].qty++;
    setBasket([...basket]);
    setCount(count + 1);
    calculateTotal();
  };

  const DecreaseNumber = (index) => {
    if (basket[index].qty !== 0) {
      basket[index].qty--;
      setBasket([...basket]);
      setCount(count - 1);
    }
    calculateTotal();
    console.log(calculateTotal);
  };

  console.log(basket);
  return (
    <div className="main">
      <div className="cart">
        <Stack spacing={4} direction="row">
          <strong id="">Cart</strong>
          <div className="countForEach">{count}</div>
        </Stack>
      </div>

      {basket.length === 0 ? (
        <div>
          <h4> You haven't added anything to the cart. </h4>
        </div>
      ) : (
        basket.map((item, index) => (
          <div key={index} className="secondMain">
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
                <Button onClick={() => IncreaseNumber(index)}>
                  <AddIcon />
                </Button>

                <h1>{item.qty}</h1>

                <Button onClick={() => DecreaseNumber(index)}>
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
        <strong>{calculateTotal()}</strong>
      </div>
      <br />
      <Link to={"/checkout"}>
        <Button

          
          variant="contained"
          color="secondary"
        >
          Checkout
        </Button>
      </Link>
    </div>
  );
}

export default ProductsInCart;
