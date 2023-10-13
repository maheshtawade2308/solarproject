import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from "./assets/archanadip1.jpg";
import Image2 from "./assets/archanadip2.jpg";

const ImageCarousel = () => {

  const carouselSettings = {
    autoPlay: true, // Enable auto-play
    infiniteLoop: true,
    showThumbs: false,
    stopOnHover: false, // Set to false to allow one-direction sliding
    interval: 3000, // Set the sliding time to 3 seconds (3000 milliseconds)
  };
  
  return (
    <Carousel {...carouselSettings} >
      <div>
        <img src={Image1} alt="Image 1" />
      </div>
      <div>
        <img src={Image2} alt="Image 2" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;