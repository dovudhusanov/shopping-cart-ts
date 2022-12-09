import React, {useState} from 'react';
import "../women/women.css"
import ProductPageTitle from "../../components/productPageTitle/productPageTitle";
import FilterProductMenu from "../../components/filterProductMenu/filterProductMenu";
import changeTitle from "../../middleware/changeTitle";
import {ScrollTop} from "../../middleware/scrollTop";
import ElectroniccCategory from "../../components/categoryAndProductComponents/electroniccCategory/electroniccCategory";
// import ElectronicCategory from "../../components/categoryAndProductComponents/electronicCategory/electronicCategory";

function Electronic() {
    changeTitle("Electronic Products")
    ScrollTop()

    const [cartLine, setCartLine] = useState<boolean>(false)

    return (
        <div className="page" style={{marginTop: 90}}>
            <ProductPageTitle title="electronic" locationTitle="Electronic"/>
            <div className="container">
                <FilterProductMenu setCartLine={setCartLine}/>
                <div className={cartLine ? "product-main" : ""}>
                    <ElectroniccCategory  />
                </div>
            </div>
        </div>
    );
}

export default Electronic;