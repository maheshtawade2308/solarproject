import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Body from "./Body";
import Header from "./Header";

const Home = () =>{
    return(
        <div>
            <Navbar/>
            <Body/>
            {/* <Header/> */}
            <Footer/>
        </div>
    );
}
export default Home;