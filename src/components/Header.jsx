import React from 'react';
import logo from '../assets/images/logo/adlogo.png';

const Header = () => {
  return (
    <header id="home">
      <div className="top_header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="main_logo">
                <a href="#">
                  <img src={logo} className="img-fluid" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-md-9 ms-auto">
              <div className="header_info_wrapper">
                <div className="header_info">
                  <div className="icon">
                    <i className="ensurx-mail"></i>
                  </div>
                  <div className="content">
                    <h3>Share a thought.</h3>
                    <a href="mailto:example@info.com">hi@anuhyadigital.com</a>
                  </div>
                </div>
                <div className="header_info info_divider">
                  <div className="icon">
                    <i className="ensurx-location"></i>
                  </div>
                  <div className="content">
                    <h3>Make an office trip.</h3>
                    <a href="#">Flat no 401, Sri Pradha Hills,<br/> Mangalam, Tirupati</a>
                  </div>
                  <span className="divider_big"></span>
                  <span className="divider_small"></span>
                </div>
                <div className="header_info info_divider">
                  <div className="icon">
                    <i className="ensurx-call"></i>
                  </div>
                  <div className="content">
                    <h3>Requesting A Call</h3>
                    <a href="tel:08861789164">+91-8861789164</a>
                  </div>
                  <span className="divider_small_2"></span>
                  <span className="divider_big_2"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} className="img-fluid" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav_main collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about-us.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="projects.html">Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blogs.html">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
              <form className="d-flex navbar_buttons" role="search">
                <div className="search-bar">
                  <input className="search-input" placeholder="Search here..." tabIndex="0" />
                  <a href="#" className="search-submit"><i className="ensurx-search"></i></a>
                </div>
                {/* <button className="btn" type="submit"><i className="ensurx-cart"></i></button> */}
                <a href="#" className="common_btn">Get A Quote<i className="ensurx-arrow-right"></i></a>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
