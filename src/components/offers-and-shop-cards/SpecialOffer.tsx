import React from "react";
import styles from "./specialoffer.module.css";
import GirlImage from "../../assets/girl-2.png";

const SpecialOffer = () => {
  return (
    <div className={styles.main_div}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: "90%",
        marginLeft: "5rem",
      }}>
        <span className={styles.discount_txt}>UP TO</span>
        <span className={styles.discount_txt}>40% OFF</span>
        <span className={styles.special_offers_txt}>Special offers and great deals</span>
        <button className={styles.shop_now_btn}>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default SpecialOffer;
