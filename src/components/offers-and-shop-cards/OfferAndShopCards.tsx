import React from "react";
import styles from "./offerandshopcards.module.css";
import SpecialOffer from "./SpecialOffer";
import ChooseYourLookCard from "./ChooseYourLookCard";
import BrandNewStyle from "./BrandNewStyle";

const OfferAndShopCards = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.left_div}>
        <ChooseYourLookCard />
        <BrandNewStyle />
      </div>
      <SpecialOffer />
    </div>
  );
};

export default OfferAndShopCards;
