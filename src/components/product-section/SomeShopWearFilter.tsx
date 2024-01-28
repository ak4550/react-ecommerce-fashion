import React from "react";
import styles from "./some-shop-wear-filter.module.css";

const SomeShopWearFilter = () => {
  return (
    <div
      style={{
        width: "20rem",
        marginTop: "16px",
        borderRight: "1px solid #C4C4C4",
      }}
    >
      <div
        style={{
          fontFamily: "'Oswald', 'sans-serif",
          fontSize: "1rem",
          fontWeight: "400",
          marginBottom: "2rem"
        }}
      >
        Shop Some Wear:
      </div>
      <div className={styles.filter_div}>
        <input
          type="checkbox"
          id="best-seller-id"
          name="some-shop-filter"
          value="best sellers"
          className={styles.label_input}
        />
        <label htmlFor="some-shop-filter" className={styles.label_style}>Best Sellers</label>
      </div>
      <div className={styles.filter_div}>
        <input
          type="checkbox"
          id="new-arrivals-id"
          name="some-shop-filter"
          value="new arrival"
          className={styles.label_input}
        />
        <label htmlFor="some-shop-filter" className={styles.label_style}>New Arrival</label>
      </div>
      <div className={styles.filter_div}>
        <input
          type="checkbox"
          id="top-women-id"
          name="some-shop-filter"
          value="top women"
          className={styles.label_input}
        />
        <label htmlFor="some-shop-filter" className={styles.label_style}>Top Women</label>
      </div>
      <div className={styles.filter_div}>
        <input
          type="checkbox"
          id="collection-summer-id"
          name="some-shop-filter"
          value="collection summer"
          className={styles.label_input}
        />
        <label htmlFor="some-shop-filter" className={styles.label_style}>Collection Summer</label>
      </div>
      <div className={styles.filter_div}>
        <input
          type="checkbox"
          id="collection-spring-id"
          name="some-shop-filter"
          value="collection spring"
          className={styles.label_input}
        />
        <label htmlFor="some-shop-filter" className={styles.label_style}>Collection Spring</label>
      </div>
      <div className={styles.filter_div}>
        <input
          type="checkbox"
          id="trending-id"
          name="some-shop-filter"
          value="trending"
          className={styles.label_input}
        />
        <label htmlFor="some-shop-filter" className={styles.label_style}>Trending</label>
      </div>
    </div>
  );
};

export default SomeShopWearFilter;
