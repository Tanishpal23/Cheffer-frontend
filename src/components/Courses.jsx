import React from 'react'

function Courses() {
  return (
   <main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Courses</h1>
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
          <li className="current">Courses</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* Courses Section */}
  <section id="courses" className="courses section">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <div className="course-item">
            <img
              src="assets/img/course-1.jpg"
              className="img-fluid"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="category">Web Development</p>
                <p className="price">$169</p>
              </div>
              <h3>
                <a href="course-details.html">Website Design</a>
              </h3>
              <p className="description">
                Et architecto provident deleniti facere repellat nobis iste. Id
                facere quia quae dolores dolorem tempore.
              </p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img
                    src="assets/img/trainers/trainer-1-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="" className="trainer-link">
                    Antonio
                  </a>
                </div>
                <div className="trainer-rank d-flex align-items-center">
                  <i className="bi bi-person user-icon" />
                  &nbsp;50 &nbsp;&nbsp;
                  <i className="bi bi-heart heart-icon" />
                  &nbsp;65
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <div className="course-item">
            <img
              src="assets/img/course-2.jpg"
              className="img-fluid"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="category">Marketing</p>
                <p className="price">$250</p>
              </div>
              <h3>
                <a href="course-details.html">Search Engine Optimization</a>
              </h3>
              <p className="description">
                Et architecto provident deleniti facere repellat nobis iste. Id
                facere quia quae dolores dolorem tempore.
              </p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img
                    src="assets/img/trainers/trainer-2-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="" className="trainer-link">
                    Lana
                  </a>
                </div>
                <div className="trainer-rank d-flex align-items-center">
                  <i className="bi bi-person user-icon" />
                  &nbsp;35 &nbsp;&nbsp;
                  <i className="bi bi-heart heart-icon" />
                  &nbsp;42
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          <div className="course-item">
            <img
              src="assets/img/course-3.jpg"
              className="img-fluid"
              alt="..."
            />
            <div className="course-content">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="category">Content</p>
                <p className="price">$180</p>
              </div>
              <h3>
                <a href="course-details.html">Copywriting</a>
              </h3>
              <p className="description">
                Et architecto provident deleniti facere repellat nobis iste. Id
                facere quia quae dolores dolorem tempore.
              </p>
              <div className="trainer d-flex justify-content-between align-items-center">
                <div className="trainer-profile d-flex align-items-center">
                  <img
                    src="assets/img/trainers/trainer-3-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <a href="" className="trainer-link">
                    Brandon
                  </a>
                </div>
                <div className="trainer-rank d-flex align-items-center">
                  <i className="bi bi-person user-icon" />
                  &nbsp;20 &nbsp;&nbsp;
                  <i className="bi bi-heart heart-icon" />
                  &nbsp;85
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Course Item*/}
      </div>
    </div>
  </section>
  {/* /Courses Section */}
</main>

  )
}

export default Courses