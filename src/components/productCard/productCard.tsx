import React, {useState} from 'react';
import "./productCard.css"
import {IProduct, sortedData, womenCategories} from "../../data/data";

interface IProps {
    category: string,
    title: string;
}

function ProductCard({title, category}: IProps) {

    const [endIdx, setEndIdx] = useState<number>(8)
    const [showAll, setShowAll] = useState<boolean>(false)

    const filteredProducts = sortedData.filter((product: IProduct) => product.category === category)


    function clickBtn() {
        setShowAll(prevState => !prevState)
        showAll ? setEndIdx(sortedData.length - 1) : setEndIdx(8)
    }

    return (
        <>
            <div className="product-menu">
                <h1>{title}</h1>
                <ul className="product-menu-tabs">
                    {womenCategories.map((categoryName: string) => (
                        <li>{categoryName}</li>
                    ))}
                </ul>
            </div>

            <div>
                <div className="product-cards">
                    {filteredProducts.reverse().slice(0, endIdx).map((product, index) => (
                        <div className="product-card" key={index + 1}>
                            <img src={product.image} alt={product.title}/>
                            <h3>{product.title}</h3>
                            <div className="product-price">
                                <span>$ {product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="showProductsBtn" onClick={clickBtn}>{showAll ? "See All" : "Hide"}</button>
            </div>
        </>
    );
}

export default ProductCard;