import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Body from "./Body";
import Header from "./Header";
import Feature from "./Feature";

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Body/>
            {/* <Header/> */}
            <Feature/>
            <Footer/>
        </div>
    );
}
export default Home;