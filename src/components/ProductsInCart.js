import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
// import axios from "axios"

function ProductsInCart() {
  const { basket, count } = useContext(ProductContext);
console.log(basket)
  return (
    <div>
      <div>
        <strong>Cart</strong>
        <div className="count">{count}</div>
      </div>

      {basket.length === 0 ? (
        <div>
          <h4> You haven't added anything to the cart. </h4>
        </div>
      ) : (
        basket?.map((item, i) => (
          <div key={i} >
            <img alt=""></img>
            <Link
              className="d-flex align-items-center"
              to={`/`}
            >
              <div className="items">
                <img src={item?.pictures?.imageURL} alt="" />
                <p>{item?.name}</p>
                <div className="Price">R{item?.small}</div>
                
                <button></button>
              </div>
              {/* <hr /> */}

            </Link>

          </div>
        ))
      )}
      <div className="total">
        <strong>Total: </strong>
        <strong>R150</strong>
      </div>
      <br />
      <button className="btn btn-primary">Checkout</button>


    </div>
  );
}

export default ProductsInCart;
