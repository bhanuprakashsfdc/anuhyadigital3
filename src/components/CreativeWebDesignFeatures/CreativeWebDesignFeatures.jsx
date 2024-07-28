import React from 'react';
import { FaMobileAlt, FaShareAlt, FaCommentDots, FaUserAlt, FaPhotoVideo, FaBook, FaListUl, FaWindowMaximize, FaFont, FaRegHandPointer, FaChartLine, FaCog, FaCode, FaTachometerAlt, FaCreditCard, FaLink, FaLock, FaLockOpen, FaFileAlt, FaKey, FaFirefoxBrowser, FaCar } from 'react-icons/fa';
import './CreativeWebDesignFeatures.css'; 

const CreativeWebDesignFeatures = () => {
  return (
    <section className="creative_web_design_features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="features_heading">
              <div className="common_heading">
                <div className="title_style">
                  <span></span><h3>Creative Web Design Features</h3>
                </div>
                <h2>Features That Enhance <br /><span>Customer Engagement</span></h2>
              </div>
            </div>
            <div className="features_list">
              <ul className="p-0">
                <li><FaMobileAlt className="icon" /> Responsive Design</li>
                <li><FaShareAlt className="icon" /> Social Media Integration</li>
                <li><FaCommentDots className="icon" /> Live Chat & Chatbot</li>
                <li><FaUserAlt className="icon" /> User Friendly</li>
                <li><FaPhotoVideo className="icon" /> Carousel Rotations</li>
                <li><FaBook className="icon" /> CMS</li>
                <li><FaListUl className="icon" /> Blog & RSS Feeds</li>
                <li><FaWindowMaximize className="icon" /> Drop Down List</li>
                <li><FaWindowMaximize className="icon" /> Pop Up Animations</li>
                <li><FaLink className="icon" /> Presentation Link</li>
                <li><FaFont className="icon" /> Attractive Fonts</li>
                <li><FaRegHandPointer className="icon" /> CTA Button</li>
                <li><FaCode className="icon" /> Standard JS/CSS</li>
                <li><FaPhotoVideo className="icon" /> Attractive Sliders</li>
                <li><FaChartLine className="icon" /> Charts & Graphs</li>
                <li><FaCog className="icon" /> Customized Web Design</li>
                <li><FaCode className="icon" /> Unique Page Design</li>
                <li><FaCode className="icon" /> Clean Code</li>
                <li><FaCode className="icon" /> Light Code</li>
                <li><FaTachometerAlt className="icon" /> Loading Speed 3 Sec</li>
                <li><FaCreditCard className="icon" /> Payment Gateway</li>
                <li><FaLink className="icon" /> URL Friendly</li>
                <li><FaCar className="icon" /> Navigation</li>
                <li><FaLock className="icon" /> SSL Encryption</li>
                <li><FaLockOpen className="icon" /> Secured Code</li>
                <li><FaFileAlt className="icon" /> Fresh, Quality Content</li>
                <li><FaKey className="icon" /> Custom 404 Page</li>
                <li><FaKey className="icon" /> Captcha</li>
                <li><FaFirefoxBrowser className="icon" /> Browsers Compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeWebDesignFeatures;
