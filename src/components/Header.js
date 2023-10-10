import React from 'react';

export default function Header() {
  return (
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="owl-carousel header-carousel position-relative">
        <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
          <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <button className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more carousel items with the same structure */}
        <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-2.jpg'>">
          <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <button className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more carousel items with the same structure */}
        <div className="owl-carousel-item position-relative" data-dot="<img src='img/carousel-3.jpg'>">
          <img className="img-fluid" src="img/carousel-3.jpg" alt=""/>
          <div className="owl-carousel-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown">Pioneers Of Solar And Renewable Energy</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <button className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
