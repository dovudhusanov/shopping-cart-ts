import React from 'react';
import "./HomeHeaderServices.css"

interface infoSer {
    iconClassName: string
    text: string
    descr: string
}

function HomeHeaderServices<T extends infoSer>({iconClassName, text, descr}: T) {
    return (
        <>
            <div className="header__services-box">
                <i className={iconClassName}></i>
                <div className="header__service-info">
                    <h4>{text}</h4>
                    <p>{descr}</p>
                </div>
            </div>
        </>
    );
}

export default HomeHeaderServices;