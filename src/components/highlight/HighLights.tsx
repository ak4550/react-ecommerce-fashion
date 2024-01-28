import React from "react";
import styles from "./highlights.module.css";
import HighLightCardGirls from "../../assets/highlight-card-girls.png";

const HighLights: React.FC = () => {
  return (
    <div className={styles.highlight_main_div}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "flex-end",
        marginBottom: "16px"
      }}>
        <div style={{
            backgroundColor: "transparent",
            width: "10px", 
            height: "10px",
            border: "1px solid #828282",
            marginLeft: "16px"
        }}>
        </div>
        <div style={{
            backgroundColor: "black",
            width: "10px", 
            height: "10px",
            border: "1px solid #828282",
            marginLeft: "4px"
        }}>
        </div>
        <div style={{
            backgroundColor: "transparent",
            width: "10px", 
            height: "10px",
            border: "1px solid #828282",
            marginLeft: "4px"
        }}>
        </div>
        <div style={{
            backgroundColor: "transparent",
            width: "10px", 
            height: "10px",
            border: "1px solid #828282",
            marginLeft: "4px"
        }}>
        </div>
      </div>
      <div className={styles.left_div}>
        <div className={styles.sale_div}>
          <span
            className={[styles.sale_text, styles.sale_text_border].join(" ")}
          >
            SUMMER SALE
          </span>
          <span className={styles.sale_text}>GET 20% OFF</span>
          <span className={styles.sale_text}>ON ALL DRESS</span>
        </div>
        <div>
          <button className={styles.btn_shop_now}>SHOP NOW</button>
        </div>
      </div>
      <div className={styles.highlight_img_div}>
        <img
          className={styles.highlight_girls_img}
          src={HighLightCardGirls}
          alt="girls"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "self-end",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            width: "30px",
            height: "30px",
            marginRight: "2px"
          }}
        ></div>
        <div
          style={{
            backgroundColor: "black",
            width: "30px",
            height: "30px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HighLights;
