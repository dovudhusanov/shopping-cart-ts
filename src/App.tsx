import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Women from "./pages/women/women";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/women-product" element={<Women />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
