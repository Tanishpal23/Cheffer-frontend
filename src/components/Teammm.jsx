import React from 'react'

function Teammm() {
  return (
  <>
  {/* Team Start */}
  <div className="container-fluid p-5">
    <div
      className="mb-5 text-center wow fadeIn"
      data-wow-delay="0.1s"
      style={{ maxWidth: 700, margin: "auto" }}
    >
      <h5 className="section-title">Expert Chefs</h5>
      <h1 className="display-3 mb-0">Let's Meet The Expert</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
            <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center"
            style={{ height: 100, background: "rgba(34, 36, 41, .9)" }}
          >
            <h5 className="text-light">John Deo</h5>
            <p
              className="small text-uppercase text-secondary m-0"
              style={{ letterSpacing: 3 }}
            >
              Master Chef
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
            <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center"
            style={{ height: 100, background: "rgba(34, 36, 41, .9)" }}
          >
            <h5 className="text-light">John Deo</h5>
            <p
              className="small text-uppercase text-secondary m-0"
              style={{ letterSpacing: 3 }}
            >
              Assistant
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
        <div className="team-item position-relative">
          <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
            <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
            <div className="team-overlay">
              <div className="d-flex align-items-center justify-content-start">
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle mx-1"
                  href="#"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center"
            style={{ height: 100, background: "rgba(34, 36, 41, .9)" }}
          >
            <h5 className="text-light">John Deo</h5>
            <p
              className="small text-uppercase text-secondary m-0"
              style={{ letterSpacing: 3 }}
            >
              Assistant
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>

  )
}

export default Teammm