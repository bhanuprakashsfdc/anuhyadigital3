import React from 'react';
import Minifooter from './Minifooter';
import FooterBanner from './FooterBanner';

const Footer = () => {
  return (
    <footer>
      <FooterBanner />
      <div className="footer_section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-3 col-sm-6">
              <div className="footer_first">
                <img src="assets/images/logo/adlogo.png" className="img-fluid" alt="" />
                <p>
                  Welcome to Anuhya Digital, where your digital transformation is our priority. As a leading player in software consulting, we provide top-notch Salesforce consulting, web development, SEO, and SMM services.
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
                  <li><a href="#">Latest News</a></li>
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
                    <a href="#">Flat No 401, Sri Pradha hills <br /> Mangalam, Tirupati 517501, India</a>
                  </div>
                </div>
                <div className="footer_contact_wrapper">
                  <i className="ensurx-footer-call"></i>
                  <div className="footer_contact_info">
                    <a href="tel:08861789164">+91-8861789164</a>
                  </div>
                </div>
                <div className="footer_contact_wrapper">
                  <i className="ensurx-footer-mail"></i>
                  <div className="footer_contact_info">
                    <a href="mailto:hi@anuhyadigital.com">hi@anuhyadigital.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer_gallery">
                <div className="title_style">
                  <h3>Gallery</h3> <span></span>
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
            </div>
          </div>
        </div>
      </div>
      <Minifooter />
    </footer>
  );
};

export default Footer;
