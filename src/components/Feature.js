import React from 'react'
import CountUp from 'react-countup';

const Feature = () => {
  return (
    <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5 text-center">
            <div className="col-md-6 col-lg-4 wow  fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <div className="btn-lg-square bg-primary rounded-circle me-3">
                        <i className="fa fa-users text-white"></i>
                    </div>
                    <CountUp end={50} duration={2} separator="," decimals={0}>
                {({ countUpRef }) => (
                  <h1 className="mb-0" ref={countUpRef} />
                )}
              </CountUp>
                </div>
                <h5 className="mb-3">Projects Installed</h5>
                {/* <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span> */}
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <div className="btn-lg-square bg-primary rounded-circle me-3">
                        <i className="fa fa-check text-white"></i>
                    </div>
                    <CountUp end={1} duration={3} separator="," decimals={0}>
                {({ countUpRef }) => (
                  <h1 className="mb-0" ref={countUpRef} />
                )}
              </CountUp>
                </div>
                
                <h5 className="mb-3">MWp Installed</h5>
                {/* <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span> */}
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <div className="btn-lg-square bg-primary rounded-circle me-3">
                        <i className="fa fa-award text-white"></i>
                    </div>

                    <CountUp end={50} duration={3} separator="," decimals={0}>
                {({ countUpRef }) => (
                  <h1 className="mb-0" ref={countUpRef} />
                )}
              </CountUp>
                    
                </div>
                <h5 className="mb-3">Happy Clients</h5>
                {/* <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span> */}
            </div>
            {/* <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <div className="d-flex align-items-center mb-4">
                    <div className="btn-lg-square bg-primary rounded-circle me-3">
                        <i className="fa fa-users-cog text-white"></i>
                    </div>
                    <CountUp end={1831} duration={2} separator="," decimals={0}>
                {({ countUpRef }) => (
                  <h1 className="mb-0" ref={countUpRef} />
                )}
              </CountUp>
                </div>
                <h5 className="mb-3">Expert Workers</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div> */}
        </div>
    </div>
</div>
  )
}

export default Feature
