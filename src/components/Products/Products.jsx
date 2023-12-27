import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Products = () => {
  const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const filter = (type) => {
    setMenuProducts(ProductsData.filter((Product) => Product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={Plane} alt="plane" />
      <h1>Our Feature Products</h1>
      <div className={css.Products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioner</li>
          <li onClick={() => filter("foundation")}>Foundation</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProducts.map((Product, i) => (
            <div className={css.Product}>
              <div className="left-s">
                <div className="name">
                  <span>{Product.name}</span>
                  <span>{Product.detail}</span>
                </div>
                <span>{Product.price}$</span>
                <div>Show Now</div>
              </div>
              <img src={Product.img} alt="product" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
