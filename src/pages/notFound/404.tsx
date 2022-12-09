import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {ScrollTop} from "../../middleware/scrollTop";
import changeTitle from "../../middleware/changeTitle";
import "./404.css"

function PageNotFound() {
    ScrollTop();
    changeTitle("Page not found 404");

    const navigate = useNavigate()
    useEffect(() => {
        navigate("/404");
    }, [window.location.pathname]);

    return (
        <>
            <div className="page-not-found">
                <div className="text-center-ntf">
                    <h1>404 | Page Not Found</h1>
                    <Link to='/' className="btn">back to Home</Link>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;