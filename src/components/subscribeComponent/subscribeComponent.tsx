import React from 'react';
import "./subscribeComponent.css"
import SubscribeCard from "./subscribeCard";

function SubscribeComponent() {
    return (
        <div className="subscribe__component">
           <div className="container">
               <div className="subscribe__component-in">
                   <SubscribeCard />
                   <div className="sub-images">
                       <img src="./images/mainImages/subs-girl.png" alt="subscribe component girl" className="subs-girl"/>
                       <img src="./images/mainImages/subs-man.png" alt="subscribe component man" className="subs-man"/>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default SubscribeComponent;