import React from 'react'
import About from './About'
import Fact from './Fact'
import Frature from './Frature'
import Menu from './Menu'
import Teammm from './Teammm'
import Testimonial from './Testimonial'
import Blog from './Blog'

function MainSection() {
  return (
    <>
  <>
  {/* Hero Start */}
  <div className="container-fluid p-5 mb-5 bg-dark text-secondary">
    <div className="row g-5 py-5">
      <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
        <h1 className="display-1 text-secondary text-center mb-0">John Doe</h1>
      </div>
      <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
        <img className="img-fluid rounded mb-3" src="img/hero-2.jpg" />
        <p>
          <i
            className="bi bi-arrow-down animate-up-down"
            style={{ fontSize: "3rem" }}
          />
        </p>
        <p className="mb-0">
          Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
          diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et
          sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor
          consetetur takimata eirmod.
        </p>
      </div>
      <div
        className="col-lg-4 wow fadeIn"
        data-wow-delay="0.3s"
        style={{ minHeight: 500 }}
      >
        <div className="position-relative h-100">
          <img
            className="position-absolute w-100 h-100 rounded"
            src="img/hero-1.jpg"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
        <p>
          Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
          diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et
          sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor
          consetetur takimata eirmod.
        </p>
        <p>
          <i
            className="bi bi-arrow-up animate-up-down"
            style={{ fontSize: "3rem" }}
          />
        </p>
        <img className="img-fluid rounded" src="img/hero-3.jpg" />
      </div>
    </div>
  </div>
  {/* Hero End */}
  <About/>
  <Fact/>
  <Frature/>
  <Menu/>
  <Teammm/>
  <Testimonial/>
  <Blog/>
</>


    </>
  )
}

export default MainSection