import React from "react";

// CSS
import "../assets/css/Home.css";
import heroImg from "../assets/img/hero-image.jpg";
import Product from "./Product";
import imgProduct from "../assets/img/product__1.jpg";
import imgProduct2 from "../assets/img/product__2.jpg";
import imgProduct3 from "../assets/img/product__3.jpg";
import imgProduct4 from "../assets/img/product__4.jpg";
import imgProduct5 from "../assets/img/product__5.jpg";
import imgProduct6 from "../assets/img/product__6.jpg";

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
            title="Flashlight ThruNite"
            price={9.99}
            img={imgProduct2}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="Focusrite Audio Interface"
            price={199.99}
            img={imgProduct3}
            rating={5}
          />
          <Product
            id={4}
            title="Nikon Camera 50mm"
            price={500.0}
            img={imgProduct4}
            rating={4}
          />
          <Product
            id={5}
            title="Scoth Laminator"
            price={349.99}
            img={imgProduct5}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="Nightwalk Gigabit Ethernet Router"
            price={85.99}
            img={imgProduct6}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
