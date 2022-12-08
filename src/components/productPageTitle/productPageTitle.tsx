import React from 'react';
import "./pageTitle.css"
import {Link} from "react-router-dom";

interface title {
    title: string
    locationTitle: string
}
function PageTitle({title, locationTitle}: title) {
    return (
        <div className="product-page-title">
           <div className="container">
               <div className="page-location-share">
                   <span><Link to="/">Home</Link> &gt; <span>{locationTitle}</span></span>
                   <i className="fa-light fa-share-nodes"></i>
               </div>
               <h1>{title}</h1>
           </div>
        </div>
    );
}

export default PageTitle;