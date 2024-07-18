import React from 'react';
import { WEBSITE_PHONETag } from '../constants/constants';
import footerbannerval from '../../public/assets/images/img/Footer/footerbannerval.png'

const FooterBanner = () => {
  return (
    <section className="call_action_section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="call_action_main">
              <div className="call_action_left">
                <h3>Enhance Your Business with <br /> Our Expert Services</h3>
                <p>
                  Our dedicated team of experts is here to guide you through every <br /> step of your digital transformation journey, ensuring you succeed.
                </p>
                <a href={ WEBSITE_PHONETag } className="common_btn">Call Us <i className="ensurx-arrow-right"></i></a>
              </div>
              <div className="call_action_right">
                <img src={footerbannerval} className="img-fluid" alt="" />
              </div>
              <div className="call_action_shadow">
                <img src="assets/images/bg/call-to-action-shadow.png" className="img-fluid" alt="" />
              </div>
              <div className="call_action_shape">
                <img src="assets/images/bg/call-to-action-shape.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterBanner;
