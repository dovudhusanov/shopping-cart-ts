import React, {useContext, useState} from 'react';
import "./women.css"
import ProductPageTitle from "../../components/productPageTitle/productPageTitle";
import WomenCategory from "../../components/categoryAndProductComponents/womenCategory/womenCategory";
import FilterProductMenu from "../../components/filterProductMenu/filterProductMenu";
import {Context} from "../../context/provider";

function Women() {

    const [cartLine, setCartLine] = useState<boolean>(false)

    return (
        <div className="women-page" style={{marginTop: 90}}>
            <ProductPageTitle title="women" locationTitle="Women"/>
            <div className="container">
                <FilterProductMenu setCartLine={setCartLine}/>
                <div className={cartLine ? "product-main" : ""}>
                    <WomenCategory  />
                </div>
            </div>
        </div>
    );
}

export default Women;