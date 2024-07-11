import React from 'react';

const ProjectSection = () => {
  return (
    <section className="project_section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="common_heading text-center">
              <div className="title_style">
                <span></span><h3>Our Latest Projects</h3>
              </div>
              <h2>Explore Our Latest Projects Now<br /><span>Successfully Finished</span></h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="project_filter">
              <button className="common_btn mixitup-control-active" data-filter="all">View All</button>
              <button className="common_btn" data-filter=".salesforce">Salesforce</button>
              <button className="common_btn" data-filter=".webdev">Web Development</button>
              <button className="common_btn" data-filter=".seo">SEO</button>
              <button className="common_btn" data-filter=".smm">SMM</button>
            </div>
            <div className="row projects_main gy-4">

              <div className="col-md-6 col-lg-4 mix salesforce">
                <div className="project_item">
                  <img src="assets/images/img/Project1.png" className="img-fluid" alt="Project1" />
                  <div className="project_bottom">
                    <div className="wrapper">
                      <p>Salesforce<span></span></p>
                      <div className="icon">
                        <a href="service-details.html"><i className="ensurx-plus"></i></a>
                      </div>
                    </div>
                    <h4>Salesforce Implementation</h4>
                  </div>
                  <div className="shape">
                    <img src="assets/images/bg/project-item-shape.png" className="img-fluid" alt="Shape" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mix webdev">
                <div className="project_item">
                  <img src="assets/images/img/Project2.png" className="img-fluid" alt="Project2" />
                  <div className="project_bottom">
                    <div className="wrapper">
                      <p>Web Development<span></span></p>
                      <div className="icon">
                        <a href="service-details.html"><i className="ensurx-plus"></i></a>
                      </div>
                    </div>
                    <h4>Responsive Website Design</h4>
                  </div>
                  <div className="shape">
                    <img src="assets/images/bg/project-item-shape.png" className="img-fluid" alt="Shape" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mix seo">
                <div className="project_item">
                  <img src="assets/images/img/Project3.png" className="img-fluid" alt="Project3" />
                  <div className="project_bottom">
                    <div className="wrapper">
                      <p>SEO<span></span></p>
                      <div className="icon">
                        <a href="service-details.html"><i className="ensurx-plus"></i></a>
                      </div>
                    </div>
                    <h4>SEO Optimization</h4>
                  </div>
                  <div className="shape">
                    <img src="assets/images/bg/project-item-shape.png" className="img-fluid" alt="Shape" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mix smm">
                <div className="project_item">
                  <img src="assets/images/img/Project4.png" className="img-fluid" alt="Project4" />
                  <div className="project_bottom">
                    <div className="wrapper">
                      <p>SMM<span></span></p>
                      <div className="icon">
                        <a href="service-details.html"><i className="ensurx-plus"></i></a>
                      </div>
                    </div>
                    <h4>Social Media Marketing</h4>
                  </div>
                  <div className="shape">
                    <img src="assets/images/bg/project-item-shape.png" className="img-fluid" alt="Shape" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mix webdev">
                <div className="project_item">
                  <img src="assets/images/img/Project5.png" className="img-fluid" alt="Project5" />
                  <div className="project_bottom">
                    <div className="wrapper">
                      <p>Web Development<span></span></p>
                      <div className="icon">
                        <a href="service-details.html"><i className="ensurx-plus"></i></a>
                      </div>
                    </div>
                    <h4>E-commerce Platform</h4>
                  </div>
                  <div className="shape">
                    <img src="assets/images/bg/project-item-shape.png" className="img-fluid" alt="Shape" />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mix seo">
                <div className="project_item">
                  <img src="assets/images/img/Project6.png" className="img-fluid" alt="Project6" />
                  <div className="project_bottom">
                    <div className="wrapper">
                      <p>SEO<span></span></p>
                      <div className="icon">
                        <a href="service-details.html"><i className="ensurx-plus"></i></a>
                      </div>
                    </div>
                    <h4>Local SEO Campaign</h4>
                  </div>
                  <div className="shape">
                    <img src="assets/images/bg/project-item-shape.png" className="img-fluid" alt="Shape" />
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
