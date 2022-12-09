import React from 'react';
import "../womenCategory/womenCategory.css"
import ProductCard from "../productCard/productCard";
import {ElectronicProducts} from "../../../data/data";

function WomenCategory() {
    return (
        <div className="women-category">
            <ProductCard  singleProduct={true} product={ElectronicProducts} title={"Electronic's"} category={"electronics"}/>
        </div>
    );
}

export default WomenCategory;