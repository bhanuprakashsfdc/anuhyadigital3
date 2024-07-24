import React from 'react';
import { FaHospital, FaIndustry, FaCode, FaCog, FaShopify, FaCartPlus, FaMoneyBill, FaBookOpen, FaTruck, FaUtensils, FaSitemap, FaPlayCircle, FaCog as FaCogO, FaShareAlt, FaShoppingCart ,FaPlane } from 'react-icons/fa';
import './IndustriesWeWorkFor.css'; 

const IndustriesWeWorkFor = () => {
  return (
    <section className="industries_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="industries_heading">
              <div className="common_heading">
                <div className="title_style">
                  <span></span><h3>Industries We Work For</h3>
                </div>
                <h2>Serving a Wide Range of <br /><span>Industries</span></h2>
              </div>
            </div>
            <div className="industries_list">
              <ul className="p-0">
                <li>
                  <FaHospital className="icon" /> Healthcare
                </li>
                <li>
                  <FaIndustry className="icon" /> Manufacturing
                </li>
                <li>
                  <FaShoppingCart className="icon" /> E-commerce
                </li>
                <li>
                  <FaMoneyBill className="icon" /> Finance
                </li>
                <li>
                  <FaBookOpen className="icon" /> Education
                </li>
                <li>
                  <FaTruck className="icon" /> Supply Chain
                </li>
                <li>
                  <FaUtensils className="icon" /> Restaurant
                </li>
                <li>
                  <FaCogO className="icon" /> SaaS
                </li>
                <li>
                  <FaPlane className="icon" /> Travel
                </li>
                <li>
                  <FaShoppingCart className="icon" /> Woo Commerce
                </li>
                <li>
                  <FaPlayCircle className="icon" /> Entertainment
                </li>
                <li>
                  <FaCog className="icon" /> On-Demand
                </li>
                <li>
                  <FaShareAlt className="icon" /> Social Media
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeWorkFor;
