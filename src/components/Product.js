import React from "react";

// CSS
import "../assets/css/Product.css";

// Context API
import { useStateValue } from "../state/StateProvider";
import { ADD_TO_BASKET } from "../state/actions";

function Product({ id, title, price, img, rating }) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatches the product into the dataLayer
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id,
        title,
        price,
        img,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
