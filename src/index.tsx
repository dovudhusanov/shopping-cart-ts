import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./middleware/ScrollToTop/scrollToTop";
import {ContextProvider} from "./context/provider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ContextProvider>
            <BrowserRouter>
                <App/>
                <ScrollToTop/>
            </BrowserRouter>
        </ContextProvider>
    </React.StrictMode>
);