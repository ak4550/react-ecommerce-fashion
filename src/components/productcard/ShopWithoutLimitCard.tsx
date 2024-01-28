import React from "react";
import styles from "./shop-without-limit-card.module.css";

const ShopWithoutLimitCard = () => {
  return (
    <div className={styles.main_div}>
      <span className={styles.title}>SHOPING WITHOUT LIMIT.</span>
      <span className={styles.para}>
        You can choose the best option for you, and it does not
      </span>
      <span className={styles.para}>
        matter whether you are in Prague or San Franciso. We
      </span>
      <span className={styles.para}>will deliver your purchase anywhere!</span>
      <button className={styles.shop_now_btn}>shop now</button>
    </div>
  );
};

export default ShopWithoutLimitCard;
