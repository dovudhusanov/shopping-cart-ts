import React from 'react';
import "./womenCategory.css"
import ProductCard from "../productCard/productCard";
import {sortedWomenCategories} from "../../../data/data";

function WomenCategory() {
    return (
        <div className="women-category">
            <ProductCard product={sortedWomenCategories} title={"Women's"} category={"women"}/>
        </div>
    );
}

export default WomenCategory;