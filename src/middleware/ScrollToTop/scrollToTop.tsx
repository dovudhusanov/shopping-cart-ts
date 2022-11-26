import React, {useEffect, useState} from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll__top-top-parent">
            <button
                type={"button"}
                onClick={scrollToTop}
                style={isVisible ? {opacity: 1} : {opacity: 0}}
                className={"scrollToTopBTn"}
            >
                <i className="fa-solid fa-angle-up"></i>
            </button>
        </div>
    );
}

export default ScrollToTop;
