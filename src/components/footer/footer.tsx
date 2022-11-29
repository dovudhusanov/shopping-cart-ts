import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top-bar">
                <div className="container">
                    <div className="footer-bar-items">
                        <h1>be in touch with us:</h1>
                        <div className="footer-top-contact">
                            <input type="email" placeholder="Enter your email"/>
                            <button>join us</button>
                        </div>
                        <div className="footer-social-links">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-pinterest"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-useful-links">
                    <ul>
                        <li className="title">Category</li>
                        <li><Link to="/men">Men</Link></li>
                        <li><Link to="/men">Women</Link></li>
                        <li><Link to="/men">Accessories</Link></li>
                        <li><Link to="/men">Beauty</Link></li>
                    </ul>
                    <ul>
                        <li className="title">Information</li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                    </ul>
                    <ul>
                        <li className="title">Useful Links</li>
                        <li><Link to="/">Term & Condition</Link></li>
                        <li><Link to="/">Returns & Exchanges</Link></li>
                        <li><Link to="/">Shipping 7& Delivery</Link></li>
                        <li><Link to="/">Privacy Policy </Link></li>
                    </ul>
                    <ul>
                        <li className="title">Contact Us</li>
                        <li><Link to="https://maps.google.com" target="_blank">Ukraine, Kyiv,Khreshchatyk 1</Link></li>
                        <li><Link to="tel:+998-97-681-50-07">+998976815007</Link></li>
                        <li><Link to="https://maps.google.com" target="_blank">All week 25/7</Link></li>
                        <li><Link to="https://gmail.com" target="_blank">dovudkhonhusanov5007@gmail.com</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                   <div className='footer-copyright'>
                       <span className="copyright">Copyright &#169; {(new Date().getFullYear())}</span>
                       <ul className="payment-method">
                           <img src="./images/footerImages/img.png" alt="footer img"/>
                           <img src="./images/footerImages/img_1.png" alt="footer img"/>
                           <img src="./images/footerImages/img_2.png" alt="footer img"/>
                           <img src="./images/footerImages/img_3.png" alt="footer img"/>
                           <img src="./images/footerImages/img_4.png" alt="footer img"/>
                           <img src="./images/footerImages/img_5.png" alt="footer img"/>
                           <img src="./images/footerImages/img_6.png" alt="footer img"/>
                       </ul>
                       <div className="author-copyright">
                           <span className="author">
                        Created By <a href="https://dovudhonhusanov.vercel.app" target="_blank"><span>Dovudhon Husanov</span></a>
                    </span>
                           <span className="copyright2">Copyright &#169; {(new Date().getFullYear())}</span>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;