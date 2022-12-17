import React, {useState} from 'react';
import "./productPage.css"
import {useParams} from "react-router-dom";
import {color, IProduct, sizes, sortedData} from "../../data/data";
import PageTitle from "../../components/productPageTitle/productPageTitle";
import {ScrollTop} from "../../middleware/scrollTop";
import img from "../../images/imagesBuy/productBuyCard/img.png"
import img2 from "../../images/imagesBuy/productBuyCard/img_1.png"
import img3 from "../../images/imagesBuy/productBuyCard/img_2.png"
import img4 from "../../images/imagesBuy/productBuyCard/img_3.png"
import img5 from "../../images/imagesBuy/productBuyCard/img_4.png"
import img6 from "../../images/imagesBuy/productBuyCard/img_5.png"
import img7 from "../../images/imagesBuy/productBuyCard/img_6.png"
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../action/productOnCart";

function ProductPage() {

    ScrollTop()
    const {productId} = useParams()
    // @ts-ignore
    const product = useSelector(state => state.products.products.filter(id => id.id == productId))
    const dispatch = useDispatch()
    const handleAdd = (productItem: IProduct) => {
        dispatch(addToCart(productItem))
    }
    const [saveProduct, setSaveProduct] = useState<boolean>(false)
    return (
        <div style={{marginTop: 130}}>
            {product.map((product: IProduct, index: number) => (
                <div key={index + 1}>
                    <PageTitle title={product.title} locationTitle2={product.category}
                               locationTitle={"> " + product.title}/>
                    <div className="container">
                        <div className="product-div">
                            <div className="product-image">
                                <div className="mini-image-slider">
                                    <div>
                                        <i className="fa-solid fa-chevron-up"></i>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <img src={product.image} alt="img"/>
                                </div>
                                <div className="primary-image-slider">
                                    <img src={product.image} alt="img"/>
                                </div>
                            </div>
                            <div className="product-info">
                                <span
                                    className="product-info-title-span"><p>COLOR:</p> <span>{product.color}</span></span>
                                <img src={product.image} alt="img" className="product-info-img"/>
                                <div className="product-size">
                                    <span
                                        className="product-info-title-span"><p>SIZE:</p> <span>{product.size}</span></span>
                                    <div className="product-sizes">
                                        {sizes.map((size, index) => (
                                            <div className="size-box" key={index + 1}>
                                                {size}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="product-size-cloth-icon"><i
                                        className="fa-regular fa-clothes-hanger"></i> Size guide</span>
                                </div>
                                <div className="product-buy">
                                    <div>
                                        <span>$ {product.price}</span>
                                        <button className="btn-primary" onClick={() => handleAdd(product)}>Add To Card</button>
                                        <button className="save-product"
                                                onClick={() => setSaveProduct(prevState => !prevState)}>
                                            {saveProduct ? <i className="fa-solid fa-heart"></i> :
                                                <i className="fa-light fa-heart"></i>}
                                        </button>
                                        <i className="fa-thin fa-scale-balanced"></i>
                                    </div>
                                </div>
                                <div className="product-services">
                                    <span><i className="fa-light fa-truck"></i> Shipping & Delivery</span>
                                    <span><i className="fa-thin fa-arrows-rotate"></i> Returns & Exchanges</span>
                                    <span><i className="fa-thin fa-envelope"></i> Ask a question</span>
                                </div>
                                <div className="product-buy-system">
                                    <h1>guaranteed safe checkout</h1>
                                    <div>
                                        <img src={img} alt="img"/>
                                        <img src={img2} alt="img"/>
                                        <img src={img3} alt="img"/>
                                        <img src={img4} alt="img"/>
                                        <img src={img5} alt="img"/>
                                        <img src={img6} alt="img"/>
                                        <img src={img7} alt="img"/>
                                    </div>
                                </div>
                                <div className="product-description-text">
                                    <span className="product-info-title-span"><p>description</p></span>
                                </div>
                                <div className="additional-info">
                                    <h1>ADDITIONAL INFORMATION</h1>
                                    <span>Color: {color.slice(0, 4).map(color => (
                                        <span>{color} </span>
                                    ))}</span>
                                    <span>Size: {sizes.map((size,index) => (
                                        <span key={index + 1}>{size} </span>
                                    ))}</span>
                                    <span>Material: <span>100% Polyester</span></span>
                                </div>
                                <div className="reviews">
                                    <h1>REVIEWS</h1>
                                    <div className="product-stars">
                                        <div>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <span> 2 Reviews</span>
                                        </div>
                                        <span><i className="fa-light fa-message-lines"></i> Write a review</span>
                                    </div>
                                    <div className="comments">
                                        <div>
                                            <div>
                                                <span className="comment-user-name">Oleh Chabanov</span>
                                                <span className="comment-user-name-star">
                                                    3 months ago
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </span>
                                            </div>
                                            <p>On the other hand, we denounce with righteous indignation and like men
                                                who
                                                are so
                                                beguiled and demoralized by the charms of pleasure of the moment</p>
                                        </div>
                                        <div>
                                            <div>
                                                <span className="comment-user-name">Oleh Chabanov</span>
                                                <span className="comment-user-name-star">
                                                    3 months ago
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </span>
                                            </div>
                                            <p>On the other hand, we denounce with righteous indignation and like men
                                                who
                                                are so
                                                beguiled and demoralized by the charms of pleasure of the moment</p>
                                        </div>
                                    </div>
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