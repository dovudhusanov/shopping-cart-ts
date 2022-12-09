import React from 'react';
import "../womenCategory/womenCategory.css"
import ProductCard from "../productCard/productCard";
import {JeweleryProducts} from "../../../data/data";

function JeweleryCategory() {
    return (
        <div className="women-category">
            <ProductCard  singleProduct={true} product={JeweleryProducts} title={"Jewelery's"} category={"jewelery"}/>
        </div>
    );
}

export default JeweleryCategory;