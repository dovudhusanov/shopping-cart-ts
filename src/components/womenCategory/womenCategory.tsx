import React from 'react';
import "./womenCategory.css"
import ProductCard from "../productCard/productCard";

function WomenCategory() {
    return (
        <div className="women-category">
            <ProductCard title={"Women's"} category={"women"}/>
        </div>
    );
}

export default WomenCategory;