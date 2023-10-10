import React from 'react';

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Address</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>1005, Archandip pvt ltd, Business Center, Govind Nagar, Nashik </p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+919657089541 </p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>archanadip@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light btn-social" href="https://twitter.com"><i
                className="fab fa-twitter"></i></a>
              <a className="btn btn-square btn-outline-light btn-social" href="https://facebook.com"><i
                className="fab fa-facebook-f"></i></a>
              <a className="btn btn-square btn-outline-light btn-social" href="https://youtube.com"><i
                className="fab fa-youtube"></i></a>
              <a className="btn btn-square btn-outline-light btn-social" href="https://linkedin.com"><i
                className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
  <h5 className="text-white mb-4">Quick Links</h5>
  <button className="btn btn-link">About Us</button>
  <button className="btn btn-link">Contact Us</button>
  <button className="btn btn-link">Our Services</button>
  <button className="btn btn-link">Terms & Condition</button>
  <button className="btn btn-link">Support</button>
</div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Project Gallery</h5>
            <div className="row g-2">
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-1.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-2.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-3.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-4.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-5.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded" src="img/gallery-6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>Lorem lipsum 24</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-text">Copyright &copy; your Website 2023</p>
      </div>
    </footer>
  );
}
