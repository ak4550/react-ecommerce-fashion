import React from 'react';
import GirlImage from '../../assets/girl-3.png';
import styles from './brandnewstyle.module.css';

const BrandNewStyle = () => {
    return (
        <div className={styles.main_div}>
            <div className={styles.left_div}>
                <span className={styles.brand_new_style_span}>BRAND NEW STYLE</span>
                <span className={styles.popular_clothing_span}>Popular clothing brands</span>
                <button className={styles.see_offers_btn}>
                    SEE OFFERS
                </button>
            </div>
            {/* <img src={GirlImage} alt='girl'/> */}
        </div>
    );
}

export default BrandNewStyle;