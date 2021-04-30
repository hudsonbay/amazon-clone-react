import React from "react";

// CSS
import "../assets/css/Checkout.css";
import checkoutAd from "../assets/img/checkout_ad.jpg";

// Components
import Subtotal from "../components/Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutAd} alt="" />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
