import React from "react";

// CSS
import "../assets/css/Home.css";
import heroImg from "../assets/img/hero-image.jpg";
import Product from "./Product";
import imgProduct from "../assets/img/product__1.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={heroImg} alt="" />

        <div className="home__row">
          <Product
            id={1}
            title="Home Grinder"
            price={29.99}
            img={imgProduct}
            rating={5}
          />
          <Product
            id={2}
            title="Home Grinder"
            price={29.99}
            img={imgProduct}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="Home Grinder"
            price={29.99}
            img={imgProduct}
            rating={5}
          />
          <Product
            id={4}
            title="Home Grinder"
            price={29.99}
            img={imgProduct}
            rating={5}
          />
          <Product
            id={5}
            title="Home Grinder"
            price={29.99}
            img={imgProduct}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="Home Grinder"
            price={29.99}
            img={imgProduct}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
