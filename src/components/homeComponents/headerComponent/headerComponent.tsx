import React from 'react';
import "../../../pages/home/home.css"

function HeaderComponent() {
    return (
        <div className="products-ads">
            <div className="products__ads-left">
                <img src="./images/homeImage/banner-img.jpg" alt="banner image"/>
                <h1 className="products__ads-title">
                    <span>Banner</span> <br/>
                    MiSto Brand
                </h1>
            </div>
            <div className="products__ads-right">
                <div className='products__ads-w-m'>
                    <div className='product__ad-w'>
                        <img src="./images/homeImage/women-home.jpg" alt="women image"/>
                        <h1 className="products__ads-title">Women</h1>
                    </div>
                    <div className='product__ad-m'>
                        <img src="./images/homeImage/men-home.jpg" alt="men image"/>
                        <h1 className="products__ads-title">Men</h1>
                    </div>
                </div>
                <div className="products__ads-a">
                    <img src="./images/homeImage/sumka-home.jpg" alt="sumka image"/>
                    <h1 className="products__ads-title">Accessories</h1>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;