import React, {useState} from 'react';
import "./cartModal.css"
import {useDispatch, useSelector} from "react-redux";
import {IProduct} from "../../../data/data";
import {Link} from 'react-router-dom';
import {addToCart, deleteProductFromCart} from "../../../action/productOnCart";
import {totalPriceBuilder} from "../../../reducer/product";

interface cart {
    setCart: boolean | any
    className: string
}

function CartModal({setCart, className}: cart) {

    const dispatch = useDispatch()
    // @ts-ignore
    const product = useSelector(state => state.product)
    console.log(product)

    const numberFormatter = new Intl.NumberFormat(undefined,{
        style: 'currency',
        currency: 'USD'
    })

    function deleteProduct(id: number) {
        // @ts-ignore
        let deleteProductOnCart = prompt("Are you sure you want to delete?", "yes")
        if(deleteProductOnCart === "yes") { // @ts-ignore
            dispatch(deleteProductFromCart({id}))
        } else if (deleteProductOnCart !== null) {
            // @ts-ignore
            dispatch(deleteProductFromCart({id}))
        }
    }

    return (
        <div className={className}>
            <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
                <i className="fa-solid fa-right-to-line" onClick={() => setCart(false)}></i>
                <div className="cart-products">
                    {Object.keys(product).length === 0 ? (
                        <div className="empty-basket">
                            <i className="fa-regular fa-cart-shopping"></i>
                            <span>Your basket is empty</span>
                            <Link to="/women-product" className="btn-primary" onClick={() => setCart(false)}>Buy our
                                products</Link>
                        </div>
                    ) : (
                        <>
                            {product.map((product: IProduct, index: number) => (
                                <div className="cart-product">
                                    <img src={product.image} alt=""/>
                                    <div className="cart-product-info">
                                        <span className="title">{product.title}</span>
                                        <span className="title">$ {product.price}</span>
                                        <button className="btn-primary delete-btn" onClick={() => deleteProduct(product.id)}>delete</button>
                                    </div>
                                </div>
                            ))}
                            <div className="total-price">
                                <span>Total price: </span>
                                <pre> {numberFormatter.format(totalPriceBuilder(product))}</pre>
                                <Link to="/cart" className="btn-primary" onClick={() => setCart(false)}>Go To Cart</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartModal;