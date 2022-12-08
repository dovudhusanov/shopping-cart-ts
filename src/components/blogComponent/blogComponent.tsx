import React, {useState} from 'react';
import "./blogComponent.css"
import BlogCard from "./blogCard";
import {blogData} from "../../data/data";

interface blog {
    blogsTitle: string
}

function BlogComponent({blogsTitle}: blog) {

    const [startIdx, setStartIdx] = useState<number>(0)
    const [endIdx, setEndIdx] = useState<number>(3)

    const [showAll, setShowAll] = useState<boolean>(true)

    function clickBtn() {
        setShowAll(prevState => !prevState)
        showAll ? setEndIdx(blogData.length): setEndIdx(3)
    }

    return (
        <div className="blog-cards-main">
            <div className="container">
                <div className="title-and-show">
                    <h1 className="all__blog-title">{blogsTitle}</h1>
                    <button onClick={clickBtn}>{showAll ? "SEE ALL": "HIDE"}</button>
                </div>
                <div className="blog-cards">
                    {blogData.slice(startIdx, endIdx).map((blog) => (
                        <BlogCard images={blog.image} title={blog.title} descr={blog.descr} key={blog.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogComponent;