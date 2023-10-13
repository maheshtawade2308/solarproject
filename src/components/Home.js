import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Feature from "./Feature";
import ImageCarousel from "./ImageCarousel";

const Home = () =>{
    return(
        <div>
            <Navbar/>
           <ImageCarousel/>
            {/* <Header/> */}
            <Feature/>
            <Footer/>
        </div>
    );
}
export default Home;