import React from 'react';
import "./home.css"
import changeTitle from "../../middleware/changeTitle";
import {ScrollTop} from "../../middleware/scrollTop";
import HomeHeaderServices from "../../components/homeHeaderServices/HomeHeaderServices";
import {sortedData} from "../../data/data";
import WomenCategory from "../../components/womenCategory/womenCategory";

function Home() {

    changeTitle("Home")
    ScrollTop()

    let settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <>
            <div className="container">
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

                <div className='header-services'>
                    <HomeHeaderServices
                        iconClassName="fa-thin fa-truck"
                        text="FREE SHIPPING"
                        descr="On all UA order or order above $100"
                    />
                    <HomeHeaderServices
                        iconClassName="fa-thin fa-arrows-rotate"
                        text="30 DAYS RETURN"
                        descr="Simply return it within 30 days for an exchange"
                    />

                    <HomeHeaderServices
                        iconClassName="fa-thin fa-circle-info"
                        text="SUPPORT 24/7"
                        descr="Contact us 24 hours a day, 7 days a week"
                    />
                </div>
                <WomenCategory />
            </div>
        </>
    );
}

export default Home;