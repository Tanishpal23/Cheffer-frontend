import React from 'react'

function Blog() {
  return (
    <>
  {/* Blog Start */}
  <div className="container-fluid p-5">
    <div
      className="mb-5 text-center wow fadeIn"
      data-wow-delay="0.1s"
      style={{ maxWidth: 700, margin: "auto" }}
    >
      <h5 className="section-title">Our Blog</h5>
      <h1 className="display-3 mb-0">Latest Articles From Food Blog</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/menu-3.jpg" alt="" />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-primary text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 lh-base text-light" href="">
              Sed amet tempor amet sit kasd sea lorem
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/menu-5.jpg" alt="" />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-primary text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 lh-base text-light" href="">
              Sed amet tempor amet sit kasd sea lorem
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/menu-7.jpg" alt="" />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-primary text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 lh-base text-light" href="">
              Sed amet tempor amet sit kasd sea lorem
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
</>

  )
}

export default Blog