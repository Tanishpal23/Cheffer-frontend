import React from 'react'

function Fact() {
  return (
   <>
  {/* Facts Start */}
  <div className="container-fluid bg-dark facts p-5 my-5">
    <div className="row gx-5 gy-4 py-5">
      <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="d-flex">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{ width: 80, height: 80, background: "#111111" }}
          >
            <i className="fa fa-star fs-4 text-primary" />
          </div>
          <div className="ps-4">
            <h5 className="text-white">Years</h5>
            <h1
              className="display-5 text-secondary mb-0"
              data-toggle="counter-up"
            >
              1234
            </h1>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.2s">
        <div className="d-flex">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{ width: 80, height: 80, background: "#111111" }}
          >
            <i className="fa fa-users fs-4 text-primary" />
          </div>
          <div className="ps-4">
            <h5 className="text-white">Clients</h5>
            <h1
              className="display-5 text-secondary mb-0"
              data-toggle="counter-up"
            >
              1234
            </h1>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
        <div className="d-flex">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{ width: 80, height: 80, background: "#111111" }}
          >
            <i className="fa fa-check fs-4 text-primary" />
          </div>
          <div className="ps-4">
            <h5 className="text-white">Awards</h5>
            <h1
              className="display-5 text-secondary mb-0"
              data-toggle="counter-up"
            >
              1234
            </h1>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.4s">
        <div className="d-flex">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{ width: 80, height: 80, background: "#111111" }}
          >
            <i className="fa fa-mug-hot fs-4 text-primary" />
          </div>
          <div className="ps-4">
            <h5 className="text-white">Events</h5>
            <h1
              className="display-5 text-secondary mb-0"
              data-toggle="counter-up"
            >
              1234
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}
</>

  )
}

export default Fact