import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />X
            </Routes>
        </>
    );
}

export default App;
