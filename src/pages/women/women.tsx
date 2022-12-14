import React, {useContext, useState} from 'react';
import "./women.css"
import ProductPageTitle from "../../components/productPageTitle/productPageTitle";
import WomenCategory from "../../components/categoryAndProductComponents/womenCategory/womenCategory";
import FilterProductMenu from "../../components/filterProductMenu/filterProductMenu";
import changeTitle from "../../middleware/changeTitle";
import {ScrollTop} from "../../middleware/scrollTop";

function Women() {
    changeTitle("Women Products")
    ScrollTop()

    const [cartLine, setCartLine] = useState<boolean>(false)

    return (
        <div className="page" style={{marginTop: 90}}>
            <ProductPageTitle title="women" locationTitle2="" locationTitle="Women"/>
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