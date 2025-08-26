import React from 'react'

function Contact() {
  return (
 <>
  {/* Contact Start */}
  <div className="container-fluid p-5">
    <div
      className="mb-5 text-center wow fadeIn"
      data-wow-delay="0.1s"
      style={{ maxWidth: 700, margin: "auto" }}
    >
      <h5 className="section-title">Contact Us</h5>
      <h1 className="display-3">Get In Touch</h1>
      <p className="mb-4">
        The contact form is currently inactive. Get a functional and working
        contact form with Ajax &amp; PHP in a few minutes. Just copy and paste
        the files, add a little code and you're done.{" "}
        <a href="https://htmlcodex.com/contact-form">Download Now</a>.
      </p>
    </div>
    <div className="row g-5 mb-5">
      <div className="col-lg-4">
        <div className="d-flex flex-column align-items-center bg-light rounded text-center py-5 px-3">
          <div
            className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-map-marker-alt fs-4 text-white" />
          </div>
          <h3>Visit Us</h3>
          <p className="mb-0">123 Street, New York, USA</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="d-flex flex-column align-items-center bg-light rounded text-center py-5 px-3">
          <div
            className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-envelope fs-4 text-white" />
          </div>
          <h3>Email Us</h3>
          <p className="mb-0">info@example.com</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="d-flex flex-column align-items-center bg-light rounded text-center py-5 px-3">
          <div
            className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
            style={{ width: 60, height: 60 }}
          >
            <i className="fa fa-phone fs-4 text-white" />
          </div>
          <h3>Call Us</h3>
          <p className="mb-0">+012 345 6789</p>
        </div>
      </div>
    </div>
    <div className="row g-5">
      <div className="col-lg-6">
        <div className="bg-light rounded h-100 p-5">
          <form>
            <div className="row g-3">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control bg-white border-0 px-4"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-6">
                <input
                  type="email"
                  className="form-control bg-white border-0 px-4"
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control bg-white border-0 px-4"
                  placeholder="Subject"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control bg-white border-0 px-4 py-3"
                  rows={4}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-6">
        <iframe
          className="w-100 rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
          frameBorder={0}
          style={{ height: "100%", minHeight: 300, border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  </div>
  {/* Contact End */}
</>


  )
}

export default Contact