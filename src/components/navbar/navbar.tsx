import React, {useRef} from 'react';
import "./navbar.css"
import {NavLink, Link} from "react-router-dom";

function Navbar() {

    const navRef: any = useRef()
    const animate: any = useRef()
    function showNav() {
        navRef.current.classList.toggle("active")
        animate.current.classList.toggle("active")
    }

    const navClose = () => {
        if (navRef.current.classList.contains("active")) {
            navRef.current.classList.remove("active");
            animate.current.classList.remove("active");
        }
    };

    return (
        <nav className='nav'>
            <div className="navbar-top">
                <div className="container">
                    <div className="nav-top">
                        <div className="navbar__top-contact">
                    <span><i className="fa-solid fa-phone"></i><a href="tel:+998-97-681-50-07"> +998 90 681 50 07</a></span>
                            <span><i className="fa-solid fa-location-dot"></i> <a href="https://maps.google.com/"> Ukraine, Kyiv,Khreshchatyk 1</a></span>
                            <span><i className="fa-solid fa-clock"></i> All week 24/7</span>
                        </div>
                        <div className="navbar__top-social-net">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-pinterest"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-navbar" >
                <div className="container">
                    <div className="navbar">
                        <Link to="/"><img src="./images/MiSto.png" alt="logo" className="logo"/></Link>
                        <ul className="nav-list" ref={navRef}>
                            <Link to="/" onClick={navClose}><img src="./images/MiSto.png" alt="logo" className="logo logo-m"/></Link>
                            <li><NavLink to="/about" onClick={navClose}>About Us</NavLink></li>
                            <li><NavLink to="/" onClick={navClose}>Women</NavLink></li>
                            <li><NavLink to="/" onClick={navClose}>Men</NavLink></li>
                            <li><NavLink to="/" onClick={navClose}>Electronic</NavLink></li>
                            <li><NavLink to="/" onClick={navClose}>Jewelery</NavLink></li>
                            <li><NavLink to="/" onClick={navClose}>Contact</NavLink></li>
                        </ul>
                        <ul className="navbar-right">
                            <i className="fa-light fa-magnifying-glass"></i>
                            <input type="search" placeholder="search..." className='search-input'/>
                            <i className="fa-light fa-earth-asia"></i>
                            <li className="cart-icon">
                                <i className="fa-regular fa-bag-shopping"></i>
                                <span className="total-product">1</span>
                            </li>
                        </ul>
                        <div className="burger" onClick={showNav} ref={animate}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;