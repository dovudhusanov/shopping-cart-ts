import React from 'react';
import "./cartModal.css"
import {useSelector} from "react-redux";
import {IProduct} from "../../../data/data";

interface cart {
    setCart: boolean | any
    className: string
}

function CartModal({setCart, className}: cart) {

    // @ts-ignore
    const product = useSelector(state => state.product)
    console.log(product)

    return (
        <div className={className}>
            <div className="cart-modal-content">
                <i className="fa-solid fa-xmark" onClick={setCart}></i>
                {product.map((product: IProduct) => (
                    <>
                        {product.quantity}
                        {/*<img src={product.image} alt=""/>*/}
                        {product.title}
                    </>
                ))}
            </div>
        </div>
    );
}

export default CartModal;