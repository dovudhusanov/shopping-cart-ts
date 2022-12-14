import React, {useContext} from 'react';
import "./womenCategory.css"
import ProductCard from "../productCard/productCard";
import {Context} from "../../../context/provider";

function WomenCategory() {
    // @ts-ignore
    let {products} = useContext(Context) as Context;
    return (
        <div className="women-category">
            <ProductCard singleProduct={true} product={products} title={"Women's"} category={"women"}/>
        </div>
    );
}

export default WomenCategory;