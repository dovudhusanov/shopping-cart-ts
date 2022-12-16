import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./middleware/ScrollToTop/scrollToTop";
import {ContextProvider} from "./context/provider";
import {Provider} from "react-redux";
import {store} from "./configStore";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ContextProvider>
           <Provider store={store}>
               <BrowserRouter>
                   <App/>
                   <ScrollToTop/>
               </BrowserRouter>
           </Provider>
        </ContextProvider>
    </React.StrictMode>
);