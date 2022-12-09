import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Women from "./pages/women/women";
import Men from "./pages/men/men";
import PageNotFound from "./pages/notFound/404";
import Electronic from "./pages/electronic/electronic";
import Jewelery from "./pages/jewelery/jewelery";
import Contact from "./pages/contact/contact";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/women-product" element={<Women />} />
                <Route path="/men-product" element={<Men />} />
                <Route path="/electronic-product" element={<Electronic />} />
                <Route path="/jewelery-product" element={<Jewelery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
