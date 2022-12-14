import React, {useState} from 'react';
import "./men.css"
import "../women/women.css"
import ProductPageTitle from "../../components/productPageTitle/productPageTitle";
import FilterProductMenu from "../../components/filterProductMenu/filterProductMenu";
import MenCategory from "../../components/categoryAndProductComponents/menCategory/menCategory";
import changeTitle from "../../middleware/changeTitle";
import {ScrollTop} from "../../middleware/scrollTop";

function Men() {
    changeTitle("Men Products")
    ScrollTop()

    const [cartLine, setCartLine] = useState<boolean>(false)

    return (
        <div className="page" style={{marginTop: 90}}>
            <ProductPageTitle title="men" locationTitle="Men" locationTitle2=""/>
            <div className="container">
                <FilterProductMenu setCartLine={setCartLine}/>
                <div className={cartLine ? "product-main" : ""}>
                    <MenCategory  />
                </div>
            </div>
        </div>
    );
}

export default Men;