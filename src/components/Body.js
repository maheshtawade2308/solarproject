import React from 'react';
import FrontImage from "./assets/archanadip.jpg";
import Image2 from "./assets/carousel-2.jpg";
export default function Body() {
  return (
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="" >
        {/* First Carousel Item */}
        <div className="" >
          <img className="img-fluid" src={FrontImage} alt="" />
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  {/* <h1 className="">Pioneers Of Solar And Renewable Energy</h1>
                  <p className="">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <button className="">Read More</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" >
          <img className="img-fluid" src={Image2} alt="" />
          <div className="">
            <div className="">
              <div className="">
                <div className="">
                  {/* <h1 className="">Pioneers Of Solar And Renewable Energy</h1>
                  <p className="">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <button className="">Read More</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
};