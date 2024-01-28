import React from "react";
import styles from "./chooseyourlookcard.module.css";
import GirlImage from "../../assets/girl-1.png";

const ChooseYourLookCard = () => {
  return (
    <div className={styles.main_div}>
      <img className={styles.choose_look_img} src={GirlImage} alt="girl" />
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <div className={styles.choose_div}>
          <span>CHOOSE</span>
          <span>YOUR LOOK</span>
        </div>
        <div className={styles.collections_div}>
          See our clothing collections
        </div>
        <div className={styles.btn_div}>
          <button className={styles.see_offers_btn}>SEE OFFERS</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourLookCard;
