import React from 'react';
import "../womenCategory/womenCategory.css"
import ProductCard from "../productCard/productCard";
import {menProducts} from "../../../data/data";

function MenCategory() {
    return (
        <div className="men-category">
            <ProductCard product={menProducts} category="man" title="men's" />
        </div>
    );
}

export default MenCategory;