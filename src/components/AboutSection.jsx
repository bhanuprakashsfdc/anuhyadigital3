import React from 'react';

const AboutSection = () => {
  return (
    <section className="about_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about_left">

              <div className="separate_left">
                <img src="assets/images/img/about1.png" className="img-fluid mb-4 text-right" alt="" />
                <img src="assets/images/img/about3.png" className="img-fluid" alt="" />
              </div>

              <div className="separate_right">
                <img src="assets/images/img/about2.png" className="img-fluid mb-4" alt="" />
                <img src="assets/images/img/about4.png" className="img-fluid" alt="" />
              </div>

              <div className="about_left_middle">
                <div className="about_left_middle_wrapper">
                  <img src="assets/images/bg/about-left-shape.png" className="img-fluid about_left_shape" alt="" />
                  <img src="assets/images/bg/about-left-bg.png" className="img-fluid about_left_bg" alt="" />
                  <img src="assets/images/icon/about-left-icon.png" className="img-fluid about_left_icon" alt="" />
                  <div className="about_left_counter text-center">
                    <h2><span className="counter">10</span><span>+</span></h2>
                    <p>Years of <br /> Experience</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about_right">

              <div className="common_heading">
                <div className="title_style">
                  <span></span><h3>About Anuhya Digital</h3>
                </div>
                <h2>Delivering Excellence in <br /><span>Software Consulting Services</span></h2>
              </div>
              
              <p>At Anuhya Digital, we specialize in Salesforce consulting, web development, SEO, and SMM services. Our expert team ensures that your business achieves its goals with tailored solutions and dedicated support.</p>

              <div className="list_group">
                <ul className="p-0">
                  <li><img src="assets/images/icon/tick-mark.svg" className="img-fluid" alt="" /> Salesforce Consulting</li>
                  <li><img src="assets/images/icon/tick-mark.svg" className="img-fluid" alt="" /> Web Development</li>
                  <li><img src="assets/images/icon/tick-mark.svg" className="img-fluid" alt="" /> SEO Services</li>
                  <li><img src="assets/images/icon/tick-mark.svg" className="img-fluid" alt="" /> SMM Services</li>
                </ul>
              </div>
             {/* 
              <div className="about_progress_bar">

                <div className="skill-main">
                  <div className="skill-wrap">
                    <div className="skill-name">Salesforce Consulting</div>
                    <div className="skill-bar">
                      <div className="skill-per" data-per="90"></div>
                    </div>
                  </div>
            
                  <div className="skill-wrap">
                    <div className="skill-name">Web Development</div>
                    <div className="skill-bar">
                      <div className="skill-per" data-per="85"></div>
                    </div>
                  </div>
            
                  <div className="skill-wrap">
                    <div className="skill-name">SEO Services</div>
                    <div className="skill-bar">
                      <div className="skill-per" data-per="80"></div>
                    </div>
                  </div>

                  <div className="skill-wrap">
                    <div className="skill-name">SMM Services</div>
                    <div className="skill-bar">
                      <div className="skill-per" data-per="75"></div>
                    </div>
                  </div>
                </div>

              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
