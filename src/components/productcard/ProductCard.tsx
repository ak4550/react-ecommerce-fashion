import React from "react";
import { IProductItem } from "../../interfaces/IProductItem";
import styles from './productcard.module.css';
import Dress from '../../assets/dress-1.png';

const ProductCard: React.FC<IProductItem> = (props) => {

    return (
        <div className={styles.product_card_div}>
            <img className={styles.product_card_img} src={Dress} alt="dress"/>
            <span className={styles.product_category_span}>{props.product_category}</span>
            <span className={styles.product_name_span}>{props.product_name}</span>
            <span className={styles.product_price_span}>{props.product_price}</span>
        </div>
    );
}

export default ProductCard;
