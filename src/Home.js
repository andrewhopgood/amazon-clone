import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_3000x1200_Final_en-CA_ENG_PVD5388._CB406163142_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123123"
            title="National Geographic Rarely Seen: Photographs of the Extraordinary Hardcover – Illustrated, Oct. 27 2015"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Aw0hYjfCL._SX427_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="124124"
            title="Cuisinart SM-48RC Precision Master Petite 4.5 Qt Stand Mixer, Red"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61sVtNJROSL._AC_SL1200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="125125"
            title="Samsung 55 Q90T 4K Ultra HD HDR Smart QLED TV (QN55Q90TAFXZC) [Canada Version]"
            price={399.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71m-GgRqe2L._AC_SL1500_.jpg"
          />
          <Product
            id="126126"
            title="ASUS TUF Gaming Laptop, 15.6” 144Hz Full HD, AMD Ryzen 7 4800H, GeForce RTX 2060, 16GB DDR4, 1TB PCIE SSD, Wi-Fi 5, Windows 10, TUF506IV-AS76"
            price={1499.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91MW2X7lrfL._AC_SL1500_.jpg"
          />
          <Product
            id="127127"
            title="Garmin vívofit Jr. 2 - Adjustable Minnie Mouse - Activity Tracker for Kids, 010-01909-10"
            price={299.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/4135W6rdJFL._AC_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="128128"
            title="AstroAI Face Mask with Filters - Reusable Washable Adjustable Face Mask for Running, Cycling, Outdoor Activities(1 Mask + 7 Activated Carbon Filters"
            price={24.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/810OsflJtYL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
