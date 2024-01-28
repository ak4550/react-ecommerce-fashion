import React from "react";
import styles from "./brands.module.css";

const Brands: React.FC = () => {
  return (
    <div
      style={{
        marginTop: "1rem",
        borderLeft: "2px solid #C4C4C4",
        borderRight: "2px solid #C4C4C4",
        borderBottom: "2px solid #C4C4C4",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            backgroundColor: "#C4C4C4",
            height: "2px",
            width: "43%",
          }}
        ></div>
        <span>CHOOSE YOUR BRAND</span>
        <div
          style={{
            backgroundColor: "#C4C4C4",
            height: "2px",
            width: "43%",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "8px",
        }}
      >
        <div className={styles.brands_text_div}>CHANEL</div>
        <div className={styles.brands_text_div}>BURBERRY</div>
        <div className={styles.brands_text_div}>DIOR</div>
        <div className={styles.brands_text_div}>FENDI</div>
        <div className={styles.brands_text_div}>VERSACE</div>
        <div className={styles.brands_text_div}>GUCCI</div>
        <div className={styles.brands_text_div}>ARMANI</div>
      </div>
    </div>
  );
};

export default Brands;
