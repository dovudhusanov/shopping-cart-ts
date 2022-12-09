import React from 'react';
import "./contact.css"

function Contact() {
    return (
        <div className="container">
            <section className="contactSection" id="contact">
                <div className="contactContainer sectionContainer">
                    <div className="contactTypes">
                        <div className="flexContainer">
                            <div className="typeBox">
                                <i className="fa-solid fa-envelope"></i>
                                <a href="dovudkhonhusanov5007@gmail.com">dovudkhonhusanov5007@gmail.com</a>
                                <p>Email Me</p>
                            </div>
                        </div>
                        <div className="flexContainer">
                            <div className="typeBox">
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+998-97-681-50-07" target="_blank"
                                   rel="noopener noreferrer">+998976815007</a>
                                <p>Phone</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactFormContainer">
                        <h3>Contact Form</h3>

                        <form id="contactForm">
                            <label htmlFor="nameInput" className="srOnly">
                            <input type="text" id="nameInput" name="nameInput" className="nameInput"
                                   placeholder="Your Name*"/></label>
                            <label htmlFor="emailInput" className="srOnly">
                            <input type="email" id="emailInput" name="emailInput" className="emailInput"
                                   placeholder="Your Email*"/></label>
                            <label htmlFor="subjectInput" className="srOnly"></label>
                            <input type="text" id="subjectInput" name="subjectInput" className="subjectInput"
                                   placeholder="Subject*"/>
                            <label htmlFor="messageInput" className="srOnly"></label>
                            <textarea className="messageInput" name="messageInput" id="messageInput"
                                      placeholder="Your Message*"></textarea>
                        </form>

                        <div className="button">
                            <button type="submit" className="primary" form="contactForm">SEND</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;