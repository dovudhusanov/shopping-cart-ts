import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {color, IProduct, sizes, sortedData} from "../../data/data";

function ProductPage() {

    const {productId} = useParams()
    // @ts-ignore
    const product = sortedData.filter((id: IProduct) => id.id == productId)
    // const productDetail = {}
    return (
        <div style={{marginTop: 130}}>
            {product.map((product) => (
                <div className="product-div">
                    <div className="product-image">
                        <div className="mini-image-slider">
                            <img src={product.image} alt="img"/>
                        </div>
                        <div className="primary-image-slider">
                            <img src={product.image} alt="img"/>
                        </div>
                    </div>
                    <div className="product-info">
                        <span className="product-color">COLOR: <span>{product.color}</span></span>
                        <img src={product.image} alt="img"/>
                        <div className="product-size">
                            <span>SIZE: <span>{product.size}</span></span>
                            <div className="product-sizes">
                                {sizes.map((size) => (
                                    <div className="size-box">
                                        {size}
                                    </div>
                                ))}
                            </div>
                            <span>Size guide</span>
                        </div>
                        <div className="product-buy">
                            <span>{product.price}</span>
                            <button>Add To Card</button>
                        </div>
                        <div className="product-services">
                            <span>Shipping & Delivery</span>
                            <span>Returns & Exchanges</span>
                            <span>Ask a question</span>
                        </div>
                        <div className="product-buy-system">
                            <h1>guaranteed safe checkout</h1>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                            <img src="" alt=""/>
                        </div>
                        <span className="product-description-text"></span>
                        <div className="additional-info">
                            <h1>ADDITIONAL INFORMATION</h1>
                            <span>Color: {color.slice(0, 4).map(color => (
                                <>{color}</>
                            ))}</span>
                            <span>Size: {sizes.map(size => (
                                <>{size}</>
                            ))}</span>
                            <span>Material: 100% Polyester</span>
                        </div>
                        <div className="reviews">
                            <div className="product-stars">

                            </div>
                            <div className="comments">
                                <div>
                                    <span>Oleh Chabanov</span>
                                    <p>On the other hand, we denounce with righteous indignation and like men who are so
                                        beguiled and demoralized by the charms of pleasure of the moment</p>
                                </div>
                                <div>
                                    <span>Oleh Chabanov</span>
                                    <p>On the other hand, we denounce with righteous indignation and like men who are so
                                        beguiled and demoralized by the charms of pleasure of the moment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductPage;