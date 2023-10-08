import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BannerImage from "./assets/carousel-2.jpg"
import "./styles/Home.css";
const Home = () =>{
    return(
        <div>
            <Navbar/>
            <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="headerContainer">
                    <h1>Archanadip Solar Services </h1>
                    <br></br>
                    <p>We have successfully completed more than 50+ solar energy projects across commercial and industrial segment in india</p>
                    
                        <button> Get Started </button>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Home;