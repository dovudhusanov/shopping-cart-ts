import React from 'react';

function SubscribeCard() {
    return (
        <div className="subscribe-card">
            <div>
                <p>special offer</p>
                <h1>Subscribe <br/> And <span>Get 10% Off</span></h1>
            </div>
            <input type="text" placeholder="Enter your email" className="sub-input"/>
            <button className="sub-btn">subscribe</button>
        </div>
    );
}

export default SubscribeCard;