import React from 'react';
import "./home.css"
import changeTitle from "../../middleware/changeTitle";
import {ScrollTop} from "../../middleware/scrollTop";
import HomeHeaderServices from "../../components/homeComponents/homeHeaderServices/HomeHeaderServices";
import WomenCategory from "../../components/categoryAndProductComponents/womenCategory/womenCategory";
import MenCategory from "../../components/categoryAndProductComponents/menCategory/menCategory";
import HeaderComponent from "../../components/homeComponents/headerComponent/headerComponent";
import HomeDiscountAd from "../../components/homeComponents/discountAdCards/homeDiscountAd";
import SubscribeComponent from "../../components/subscribeComponent/subscribeComponent";

function Home() {

    changeTitle("Home")
    ScrollTop()

    return (
        <>
            <div className="container">
                <HeaderComponent/>
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
                <WomenCategory/>
                <MenCategory/>
                <HomeDiscountAd/>
            </div>
            <SubscribeComponent/>
        </>
    );
}

export default Home;