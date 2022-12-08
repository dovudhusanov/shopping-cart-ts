import React, {useContext, useState} from 'react';
import "./filterProductMenu.css"
import {brandFilter, color, priceFilter, sizes, sortedData} from "../../data/data";
import {Context} from "../../context/provider";

function FilterProductMenu({setCartLine}: any) {
    // @ts-ignore
    let {filterProduct} = useContext(Context) as Context;
    const handleChange = (size: string) => filterProduct(size)
    const [showFilter, setShowFilter] = useState<boolean>(false)

    return (
        <div className="filter-product-menu">
            <div className="filter-menu">
                <button onClick={() => setShowFilter(prevState => !prevState)}>{showFilter ? <i className="fa-regular fa-sliders-up"></i> : <i className="fa-solid fa-xmark"></i>} FILTER</button>
                <div className="view-card-type">
                    <button className="view-card-line" onClick={() => setCartLine(true)}><i className="fa-light fa-bars"></i></button>
                    <button className="view-card-card" onClick={() => setCartLine(false)}><i className="fa-regular fa-grid-2"></i></button>
                </div>
                <span>BESTSELLERS <i className="fa-solid fa-chevron-down"></i></span>
            </div>
            <div className="filter-items" style={showFilter ? {display: "none"} : {display: "flex"}}>
                <div className="color-filter">
                    <span>COLOR</span>
                    <div className="filter-menu-show">
                        {color.map((color, index) => (
                            <ul key={index + 1}>
                                <li className="filter-color-item" style={{backgroundColor: color}}>{color}</li>
                                <li className="filter-color-item-li">{color}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="filter-product">
                    <span>SIZE</span>
                    <div className="filter-show">
                        {sizes.map((size, index) => (
                            <label id="check" className="check" key={index + 1}>
                                <input type="checkbox" onChange={() => handleChange(size)} name="check"/>
                                <span className="indicator"></span>
                                {size}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="filter-product">
                    <span>BRAND</span>
                    <div className="filter-show">
                        {brandFilter.map((size, index) => (
                            <label id="check" key={index + 1} className='check'>
                                <input type="checkbox" name="check"/>
                                <span className="indicator"></span>
                                {size}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="filter-product">
                    <span>PRICE</span>
                    <div className="filter-show">
                        {priceFilter.map((size, index) => (
                            <label id="check" key={index + 1} className="check">
                                <input type="checkbox" name="check"/>
                                <span className="indicator"></span>
                                {size}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterProductMenu;