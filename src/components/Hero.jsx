import React from 'react';
import { WEBSITE_EMAILTag, WEBSITE_PHONETag } from '../constants/constants';

const Hero = () => {
  return (
    <div className="banner_carousel owl-carousel">
      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="all_shapes">
                <img src="assets/images/bg/Shape1.png" className="img-fluid shape1" alt="Shape1" />
                <img src="assets/images/bg/Shape2.png" className="img-fluid shape2" alt="Shape2" />
                <img src="assets/images/bg/Shape3.png" className="img-fluid shape3" alt="Shape3" />
              </div>
              <div className="banner_slider text-center">
                <div className="col-md-8 m-auto banner_content">
                  <div className="common_heading text-center">
                    <div className="title_style">
                      <span></span>
                      <h3>Transform Your Business</h3>
                    </div>
                    <h1>Your Reliable Digital <br /><span>Partner & Guide</span></h1>
                    <p>
                      Our dedicated team of experts is here to guide you through every step of your <br />
                      digital transformation journey, ensuring you make informed choices.
                    </p>
                  </div>
                  <div className="learn_more_button d-flex">
                    <a href= { WEBSITE_PHONETag} className="common_btn">Call us</a>
                    <a href= { WEBSITE_EMAILTag} className="common_btn white_button">Drop a Mail</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Repeat the above section as needed for additional slides */}
    </div>
  );
};

export default Hero;
