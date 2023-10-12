import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Body from "./Body";
import Header from "./Header";
import ImageCarousel from "./ImageCarousel";

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <ImageCarousel/>
            <Footer/>
        </div>
    );
}
export default Home;