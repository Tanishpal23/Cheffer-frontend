import React from 'react'

function Pricing() {
  return (
    <main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Pricing</h1>
            <p className="mb-0">
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
              quo odio sint voluptas consequatur ut a odio voluptatem. Sit
              dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
              quaerat ipsum dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="current">Pricing</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* Pricing Section */}
  <section id="pricing" className="pricing section">
    <div className="container">
      <div className="row gy-3">
        <div
          className="col-xl-3 col-lg-6"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="pricing-item">
            <h3>Free</h3>
            <h4>
              <sup>$</sup>0<span> / month</span>
            </h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li className="na">Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
        <div
          className="col-xl-3 col-lg-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="pricing-item featured">
            <h3>Business</h3>
            <h4>
              <sup>$</sup>19<span> / month</span>
            </h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
        <div
          className="col-xl-3 col-lg-6"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="pricing-item">
            <h3>Developer</h3>
            <h4>
              <sup>$</sup>29<span> / month</span>
            </h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
        <div
          className="col-xl-3 col-lg-6"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="pricing-item">
            <span className="advanced">Advanced</span>
            <h3>Ultimate</h3>
            <h4>
              <sup>$</sup>49<span> / month</span>
            </h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
      </div>
    </div>
  </section>
  {/* /Pricing Section */}
</main>

  )
}

export default Pricing