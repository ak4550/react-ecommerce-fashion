import React from "react";
import navStyle from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ShoppingCardIcon from "../../assets/shopping-card-icon.png";

const Navbar: React.FC = () => {
  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.navbar_title_div}>
        <p className={navStyle.navbar_title_text}>Fashion Fusion</p>
      </div>
      <ul>
        <li className={navStyle.navbar_list_item}>HOME</li>
        <li className={navStyle.navbar_list_item}>SHOP</li>
        <li className={navStyle.navbar_list_item}>BLOG</li>
        <li className={navStyle.navbar_list_item}>SALE</li>
        <li className={navStyle.navbar_list_item}>CONTACT US</li>
        <li className={navStyle.navbar_list_item}>
          <div style={{ display: "inline", marginLeft: "16px" }}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "white" }}
            />
            <span style={{ marginLeft: "4px" }}>SEARCH</span>
          </div>
        </li>
      </ul>
      <ul className={navStyle.navbar_sign_in_section}>
        <li className={navStyle.navbar_sign_in_section_item}>SIGN IN</li>
        <li className={navStyle.navbar_sign_in_section_item}>
          CREATE AN ACCOUNT
        </li>
        <li className={navStyle.navbar_sign_in_section_item}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "white", fontSize: "24px" }}
          />
        </li>
        <li className={navStyle.navbar_sign_in_section_item}>
          <div className={navStyle.navbar_sign_in_section_item_div}>
            <div className={navStyle.navbar_sign_in_section_item_div_img}>
              <img src={ShoppingCardIcon} alt="shopping-cart" />
            </div>
            <div className={navStyle.navbar_sign_in_section_item_div_p}>
              <span>Shopping Cart</span>
              <span>0,00 EUR</span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
