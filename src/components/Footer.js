import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer(){

    return (
        <div>
            <div>
            <div class="container-fluid bg-dark text-body footer  pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Address</h5>
                            <p className="mb-2 text-light">123 Street, Business Center, Nashik</p>
                            <p className="mb-2 text-light">+012 345 67890</p>
                            <p className="mb-2 text-light">archanadip@gmail.com</p>
                            
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <a className="btn btn-link" href="">About Us</a>
                            <a className="btn btn-link" href="">Contact Us</a>
                            <a className="btn btn-link" href="">Our Services</a>
                            <a className="btn btn-link" href="">Terms & Condition</a>
                            <a className="btn btn-link" href="">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Project Gallery</h5>
                            <div className="row g-2">
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/gallery-1.jpg" alt=""/>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/gallery-2.jpg" alt=""/>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/gallery-3.jpg" alt=""/>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/gallery-4.jpg" alt=""/>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/gallery-5.jpg" alt=""/>
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded" src="img/gallery-6.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" >
                                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button"
                                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};
