import React, {useRef, useState} from 'react';
import "./productCard.css"
import {IProduct, sortedData, womenCategories} from "../../../data/data";

interface IProps {
    category: string,
    title: string;
    product: IProduct[];
    singleProduct?: boolean;
}

function ProductCard({title, category, product, singleProduct}: IProps) {

    const [endIdx, setEndIdx] = useState<number>(8)
    const [showAll, setShowAll] = useState<boolean>(true)
    const [activeIndex, setActiveIndex] = useState(0)
    const [filteredProducts, setFilteredProduct] = useState(sortedData.filter((product: IProduct) => product.category === category))

    const clickBtn = () => {
        setShowAll(prevState => !prevState)
        showAll ? setEndIdx(sortedData.length) : setEndIdx(8)
    }


    const sinleProducts = singleProduct ? product.reverse().slice(0, endIdx) : filteredProducts.reverse().slice(0, endIdx);


    const filterProduct = (category: string, index: number) => {
        // @ts-ignore
        setFilteredProduct(product.filter((product: IProduct) => product.category !== category))
        setActiveIndex(index)
    }

    return (
        <>
            <div className="product-menu">
                <h1>{title}</h1>
                <ul className="product-menu-tabs">
                    {womenCategories.map((categoryName: string, idx) => (
                        <li key={idx} className={activeIndex === idx ? "active-list" : ''}
                            onClick={() => filterProduct(categoryName, idx)}>{categoryName}</li>
                    ))}
                </ul>
            </div>

            <div>
                <div className="product-cards">
                    {sinleProducts.map((product, index: number) => (
                        <div className="product-card" key={index + 1}>
                            <div className="cart-line-flex">
                                <img src={product.image} alt={product.title}/>
                               <div>
                                   <h3>{product.title}</h3>
                                   <div className="product-price">
                                       <span>$ {product.price}</span>
                                       <div className="stars">
                                           <i className="fa-solid fa-star"></i>
                                           <i className="fa-solid fa-star"></i>
                                           <i className="fa-solid fa-star"></i>
                                           <i className="fa-solid fa-star"></i>
                                           <i className="fa-solid fa-star"></i>
                                       </div>
                                   </div>
                               </div>
                            </div>
                            <div className="button-to-view">
                                <button>View</button>
                                <button>Add To Cart</button>
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