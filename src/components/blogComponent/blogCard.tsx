import React from 'react';
import "./blogComponent.css"

interface blogCard {
    images: string
    title: string
    descr: string
}

function BlogCard({images, title, descr}: blogCard) {
    return (
        <div className="blog-card">
            <img src={images} alt={title}/>
            <div className="blog-card-info">
                <h3>{title}</h3>
                <p>{descr}</p>
            </div>
        </div>
    );
}

export default BlogCard;