import React from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <nav className='nav'>
            <div className="navbar-top">
                <div className="container">
                    <div className="nav-top">
                        <div className="navbar__top-contact">
                    <span><a href="tel:+998-97-681-50-07"></a><i
                        className="fa-solid fa-phone"></i> +998 90 681 50 07</span>
                            <span><i className="fa-solid fa-location-dot"></i> Ukraine, Kyiv,Khreshchatyk 1</span>
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
        </nav>
    );
}

export default Navbar;