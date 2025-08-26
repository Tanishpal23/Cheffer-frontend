import React from 'react'

function About() {
  return (
  <>
  {/* About Start */}
  <div className="container-fluid p-5">
    <div className="row gx-5">
      <div
        className="col-lg-5 mb-5 mb-lg-0 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ minHeight: 500 }}
      >
        <div className="position-relative h-100">
          <div
            className="position-absolute top-0 start-0 animate-rotate"
            style={{ width: 160, height: 160 }}
          >
            <img className="img-fluid" src="img/about-round.jpg" alt="" />
          </div>
          <img
            className="position-absolute w-100 h-100 rounded-circle rounded-bottom rounded-end"
            src="img/about.jpg"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="mb-4 wow fadeIn" data-wow-delay="0.2s">
          <h5 className="section-title">About Us</h5>
          <h1 className="display-3 mb-0">Cooking Together With The Expert</h1>
        </div>
        <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">
          Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at
          ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum,
          diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo
          amet clita erat, ipsum sed at ipsum eirmod labore lorem.
        </p>
        <div className="row">
          <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
            <div className="bg-light rounded p-4">
              <img
                className="img-fluid bg-primary rounded-circle mb-3"
                src="img/feature-1.png"
                style={{ width: 80, height: 80 }}
              />
              <h4>Master Chefs</h4>
              <p className="mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore.
              </p>
            </div>
          </div>
          <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-light rounded p-4">
              <img
                className="img-fluid bg-primary rounded-circle mb-3"
                src="img/feature-3.png"
                style={{ width: 80, height: 80 }}
              />
              <h4>Quality Food</h4>
              <p className="mb-0">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
</>


  )
}

export default About