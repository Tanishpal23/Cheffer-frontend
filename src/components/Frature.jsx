import React from 'react'

function Frature() {
  return (
 <>
  {/* Feature Start */}
  <div className="container-fluid feature position-relative p-5 pb-0 mt-5">
    <div className="row g-5 gb-5">
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="feature-item rounded text-center p-5">
          <img
            className="img-fluid bg-white rounded-circle"
            src="img/feature-1.png"
            style={{ width: 150, height: 150 }}
          />
          <h3 className="my-4">Best Chef</h3>
          <p className="text-light">
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a className="font-body" style={{ letterSpacing: 1 }} href="">
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
        <div className="feature-item rounded text-center p-5">
          <img
            className="img-fluid bg-white rounded-circle"
            src="img/feature-2.png"
            style={{ width: 150, height: 150 }}
          />
          <h3 className="my-4">Menu Variations</h3>
          <p className="text-light">
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a className="font-body" style={{ letterSpacing: 1 }} href="">
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
        <div className="feature-item rounded text-center p-5">
          <img
            className="img-fluid bg-white rounded-circle"
            src="img/feature-3.png"
            style={{ width: 150, height: 150 }}
          />
          <h3 className="my-4">Healthy Food</h3>
          <p className="text-light">
            Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet
            kasd elitr duo vero amet amet stet
          </p>
          <a className="font-body" style={{ letterSpacing: 1 }} href="">
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
      <div
        className="col-lg-12 col-md-6 text-center wow fadeIn"
        data-wow-delay="0.1s"
      >
        <h1 className="display-4 text-secondary mb-4">
          <span className="text-primary">30% Discount</span>
          <br /> For This Summer
        </h1>
        <a href="" className="btn btn-primary py-3 px-5">
          Order Now
        </a>
      </div>
    </div>
  </div>
  {/* Feature End */}
</>

  )
}

export default Frature