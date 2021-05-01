import React from "react";

// CSS
import "../assets/css/Checkout.css";
import checkoutAd from "../assets/img/checkout_ad.jpg";

// Components
import Subtotal from "../components/Subtotal";
import CheckoutProduct from "../components/CheckoutProduct";

// Context API
import { useStateValue } from "../state/StateProvider";

function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutAd} alt="" />
        <div>
          <h2 className="checkout__title">
            Your shopping basket{user ? ", " + user?.first_name : null}
          </h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
