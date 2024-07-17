// src/components/ContactSection.jsx
import React from 'react';
import './ContactSection.css'
import { WEBSITE_NAME, WEBSITE_ADDRESS, WEBSITE_PHONE, WEBSITE_EMAIL } from '../../constants/constants';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import WebToLeadForm from '../WebToLeadForm/WebToLeadForm';

const ContactSection = () => {
  return (
    <section className="contact_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="contact_left">
              <div className="common_heading">
                <div className="title_style">
                  <span></span><h3>Contact { WEBSITE_NAME }</h3>
                </div>
                <h2>Get in Touch with <br /><span>Our Experts</span></h2>
              </div>
              <p>If you have any questions or need further information about our services, feel free to reach out to us. Our team is always ready to assist you.</p>
              
              <div className="contact_info">
                <ul className="p-0">
                  <li>
                    <FaPhone className="icon" /> { WEBSITE_PHONE }
                  </li>
                  <li>
                    <FaEnvelope className="icon" /> { WEBSITE_EMAIL }
                  </li>
                  <li>
                    <FaMapMarkerAlt className="icon" /> 
                    <span dangerouslySetInnerHTML={{ __html: WEBSITE_ADDRESS }} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="contact_right">
              <WebToLeadForm />
              {/* 
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
