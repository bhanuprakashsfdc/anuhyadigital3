import React from 'react';
import { WEBSITE_NAME, WEBSITE_ADDRESS, WEBSITE_PHONE, WEBSITE_EMAIL,WEBSITE_LOCATION, WEBSITE_PHONETag, WEBSITE_EMAILTag } from '../constants/constants';
import Minifooter from './Minifooter';
import FooterBanner from './FooterBanner';


const Footer = () => {
  return (
    <footer>
      <FooterBanner />
      <div className="footer_section textfooe">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-3 col-sm-6">
              <div className="footer_first">
                <img src="assets/images/logo/adlogo.png" className="img-fluid" alt="" />
                <p>
                  Welcome to { WEBSITE_NAME }, where your digital transformation is our priority. As a leading player in software consulting, we provide top-notch Salesforce consulting, web development, SEO, and SMM services.
                </p>
                <ul>
                  <li><a href="#"><i className="ensurx-facebook-solid"></i></a></li>
                  <li><a href="#"><i className="ensurx-x-twitter"></i></a></li>
                  <li><a href="#"><i className="ensurx-linkedin-solid"></i></a></li>
                  <li><a href="#"><i className="ensurx-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer_explore">
                <div className="title_style">
                  <h3>Explore</h3> <span></span>
                </div>
                <ul>
                  <li><a href="about-us.html">About Company</a></li>
                  <li><a href="team.html">Meet the Team</a></li>
                  <li><a href="blogs.html">News & Media</a></li>
                  <li><a href="projects.html">Our Projects</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer_explore">
                <div className="title_style">
                  <h3>More</h3> <span></span>
                </div>
                <ul>
                  <li><a href="about-us.html">Contact Us</a></li>
                  <li><a href="team.html">Terms And Conditions</a></li>
                  <li><a href="blogs.html">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer_contact">
                <div className="title_style">
                  <h3>Contact</h3> <span></span>
                </div>
                <div className="footer_contact_wrapper">
                  <i className="ensurx-footer-map"></i>
                  <div className="footer_contact_info">
                    <a href= {WEBSITE_LOCATION}>Flat No 401, Sri Pradha hills <br /> Mangalam, Tirupati 517501, India</a>
                  </div>
                </div>
                <div className="footer_contact_wrapper">
                  <i className="ensurx-footer-call"></i>
                  <div className="footer_contact_info">
                    <a href={WEBSITE_PHONETag}> { WEBSITE_PHONE }</a>
                  </div>
                </div>
                <div className="footer_contact_wrapper">
                  <i className="ensurx-footer-mail"></i>
                  <div className="footer_contact_info">
                    <a href={WEBSITE_EMAILTag}>{WEBSITE_EMAIL}</a>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <div className="col-md-3 col-sm-6">
              <div className="footer_gallery">
                <div className="title_style">
                  <h3>Links</h3> <span></span>
                </div>
                <ul>
                  <li><img src="assets/images/img/footer-gallery1.png" className="img-fluid" alt="img" /></li>
                  <li><img src="assets/images/img/footer-gallery2.png" className="img-fluid" alt="img" /></li>
                  <li><img src="assets/images/img/footer-gallery3.png" className="img-fluid" alt="img" /></li>
                  <li><img src="assets/images/img/footer-gallery4.png" className="img-fluid" alt="img" /></li>
                  <li><img src="assets/images/img/footer-gallery5.png" className="img-fluid" alt="img" /></li>
                  <li><img src="assets/images/img/footer-gallery6.png" className="img-fluid" alt="img" /></li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Minifooter />
    </footer>
  );
};

export default Footer;
