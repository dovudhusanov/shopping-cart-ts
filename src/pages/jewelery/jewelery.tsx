import React, {useState} from 'react';
import "../women/women.css"
import ProductPageTitle from "../../components/productPageTitle/productPageTitle";
import FilterProductMenu from "../../components/filterProductMenu/filterProductMenu";
import changeTitle from "../../middleware/changeTitle";
import {ScrollTop} from "../../middleware/scrollTop";
import JeweleryCategory from "../../components/categoryAndProductComponents/jeweleryCategory/jeweleryCategory";

function Jewelery() {
    changeTitle("Jewelery Products")
    ScrollTop()

    const [cartLine, setCartLine] = useState<boolean>(false)

    return (
        <div className="page" style={{marginTop: 90}}>
            <ProductPageTitle title="jewelery" locationTitle="Jewelery"/>
            <div className="container">
                <FilterProductMenu setCartLine={setCartLine}/>
                <div className={cartLine ? "product-main" : ""}>
                    <JeweleryCategory  />
                </div>
            </div>
        </div>
    );
}

export default Jewelery;