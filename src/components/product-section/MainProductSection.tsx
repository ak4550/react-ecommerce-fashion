import React from "react";
import styles from "./main-product-section.module.css";
import SomeShopWearFilter from "./SomeShopWearFilter";
import ProductCard from "../productcard/ProductCard";
import { Products } from "../../constant/constants";

const MainProductSection = () => {
  return (
    <div className={styles.main_div}>
      <SomeShopWearFilter />
      <div>
        <div className={styles.products_grid}>
          <ProductCard {...Products[0]} />
          <ProductCard {...Products[0]} />
          <ProductCard {...Products[0]} />
          <ProductCard {...Products[0]} />
          <ProductCard {...Products[0]} />
          <ProductCard {...Products[0]} />
          <ProductCard {...Products[0]} />
          <ProductCard {...Products[0]} />
          <ProductCard {...Products[0]} />
        </div>
        <div className={styles.load_more_div}>
          <button className={styles.load_more_btn}>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default MainProductSection;
