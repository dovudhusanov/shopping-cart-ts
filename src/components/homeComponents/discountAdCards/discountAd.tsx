import React from 'react';
import "./discountAd.css"

interface discountCard {
    images: string
    altTitle: string
    title: string
    info: string
    mark: string
}

function DiscountAd({images, altTitle, title, info, mark}: discountCard) {
    return (
        <div className="discount__ad-card">
            <img src={images} alt={altTitle}/>
            <div className="discount-card-info">
                <p>{title}</p>
                <h2>{info} <span>{mark}</span></h2>
            </div>
        </div>
    );
}

export default DiscountAd;