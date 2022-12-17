import React, {useState} from 'react';
import "./cartModal.css"
import {useDispatch, useSelector} from "react-redux";
import {IProduct} from "../../../data/data";
import {Link} from 'react-router-dom';
import {deleteProductFromCart} from "../../../action/productOnCart";

interface cart {
    setCart: boolean | any
    className: string
}

function CartModal({setCart, className}: cart) {

    const dispatch = useDispatch()

    // @ts-ignore
    const product = useSelector(state => state.product)
    console.log(product)

    const [quantityChange, setQuantityChange] = useState(1)

    function quantityDec() {
        if (quantityChange === 1) {
            return quantityChange
        } else {
            setQuantityChange(quantityChange - 1)
        }
    }

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
                            {product.map((product: IProduct) => (
                                <div className="cart-product">
                                    <img src={product.image} alt=""/>
                                    <div className="cart-product-info">
                                        <span className="title">{product.title}</span>
                                        <span className="title">$ {product.price}</span>
                                        <div className="quantity-add">
                                            <button onClick={() => quantityDec()}>-</button>
                                            <span>{quantityChange}</span>
                                            <button
                                                onClick={() => setQuantityChange(quantityChange + 1)}>+
                                            </button>
                                        </div>
                                        <button className="btn-primary delete-btn" onClick={() => deleteProduct(product.id)}>delete</button>
                                    </div>
                                </div>
                            ))}
                            <div className="total-price">
                                <span>Total price: </span>
                                <pre> $ {product.price}</pre>
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