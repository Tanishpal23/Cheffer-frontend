import React from 'react'

function Events() {
  return (
    <main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Events</h1>
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
          <li className="current">Events</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* Events Section */}
  <section id="events" className="events section">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/events-item-1.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <a href="">Introduction to webdesign</a>
              </h5>
              <p className="fst-italic text-center">
                Sunday, September 26th at 7:00 pm
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                tempor ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/events-item-2.jpg" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <a href="">Marketing Strategies</a>
              </h5>
              <p className="fst-italic text-center">
                Sunday, November 15th at 7:00 pm
              </p>
              <p className="card-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Events Section */}
</main>

  )
}

export default Events