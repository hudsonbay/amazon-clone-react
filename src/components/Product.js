import React from "react";

// CSS
import "../assets/css/Product.css";

function Product({ title, img, price, rating }) {
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
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
