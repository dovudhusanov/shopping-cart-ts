import React from 'react';
import DiscountAd from "./discountAd";
import "./discountAd.css"

function HomeDiscountAd() {
    return (
        <div className="discount__ad-cards">
            <DiscountAd
                images="./images/homeImage/discount-ad-card_1.png"
                altTitle="discount ad"
                title="new season"
                info="lookbook collection"
                mark=""
            />
            <DiscountAd
                images="./images/homeImage/discount-ad-card_2.png"
                altTitle="discount ad"
                title="sale"
                info="get up to"
                mark="50% off"
            />
        </div>
    );
}

export default HomeDiscountAd;